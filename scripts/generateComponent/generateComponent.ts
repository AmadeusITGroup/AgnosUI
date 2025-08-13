import {mkdir, readFile, stat, writeFile} from 'fs/promises';

/**
 * #######################################################
 * ########### Generator of a new component ##############
 * #######################################################
 *
 * This script takes a component name as input and generates all necessary files for a new component
 */

if (process.argv[2].trim() === '%npm_config_name%') {
	throw new Error('Component name is required as the first argument. Please run the script with "npm run generateComponent --name=<componentName>".');
}

const componentName = process.argv[2].toLocaleLowerCase();

const TemplateReplacementTypes = {
	export: 'export',
	import: 'import',
	content: 'content',
};

const fileMap: Record<string, string[]> = {
	core: [
		`core/src/components/[componentName]/index.ts`,
		`core/src/components/[componentName]/[componentName].spec.ts`,
		`core/src/components/[componentName]/[componentName].ts`,
		`core/src/config.ts`,
		`core/src/index.ts`,
	],
	'core-bootstrap': [
		`core-bootstrap/src/components/[componentName]/index.ts`,
		`core-bootstrap/src/components/[componentName]/[componentName].ts`,
		`core-bootstrap/src/config.ts`,
		`core-bootstrap/src/index.ts`,
		`core-bootstrap/src/scss/_variables.scss`,
		`core-bootstrap/src/scss/agnosui.scss`,
		`core-bootstrap/src/scss/[componentName].scss`,
	],
	demo: [
		`demo/src/lib/components-metadata.ts`,
		`demo/src/routes/docs/[framework]/components/[componentName]/+layout.server.ts`,
		`demo/src/routes/docs/[framework]/components/[componentName]/examples/+page.svelte`,
		`demo/src/routes/docs/[framework]/components/[componentName]/playground/TODO+page.svelte`,
		`demo/src/routes/docs/[framework]/components/[componentName]/style/+page.svelte`,
	],
	e2e: [`e2e/demo-po/[componentName].po.ts`, `e2e/[componentName]/[componentName].e2e-spec.ts`],
	'page-objects': [`page-objects/lib/index.ts`, `page-objects/lib/[componentName].po.ts`],
	angular: [
		`angular/bootstrap/src/agnos-ui-angular.module.ts`,
		`angular/bootstrap/src/components/[componentName]/index.ts`,
		`angular/bootstrap/src/components/[componentName]/[componentName].component.ts`,
		`angular/bootstrap/src/index.ts`,
		`angular/demo/bootstrap/src/app/samples/[componentName]/basic.route.ts`,
		`angular/ssr-app/src/app/app.component.html`,
	],
	react: [
		`react/bootstrap/src/components/[componentName]/index.ts`,
		`react/bootstrap/src/components/[componentName]/[componentName].tsx`,
		`react/bootstrap/src/index.ts`,
		`react/demo/src/bootstrap/samples/[componentName]/Basic.route.tsx`,
		`react/ssr-app/src/App.tsx`,
	],
	svelte: [
		`svelte/bootstrap/src/components/[componentName]/[componentNameCapitalized].svelte`,
		`svelte/bootstrap/src/components/[componentName]/index.ts`,
		`svelte/bootstrap/src/index.ts`,
		`svelte/demo/src/bootstrap/samples/[componentName]/Basic.route.svelte`,
		`svelte/ssr-app/src/routes/+page.svelte`,
	],
};

const capitalizeComponentName = componentName.charAt(0).toLocaleUpperCase() + componentName.slice(1);

Object.keys(fileMap).forEach((packageName) => {
	const files = fileMap[packageName];
	files.forEach(async (filePath) => {
		const normalizedFilePath = filePath
			.replaceAll('[componentName]', componentName)
			.replaceAll('[componentNameCapitalized]', capitalizeComponentName);
		const dirPath = normalizedFilePath.slice(0, normalizedFilePath.lastIndexOf('/'));
		await mkdir(dirPath, {recursive: true});
		const templatePath = `scripts/generateComponent/templates/${filePath}.template`;
		const template = (await readFile(templatePath, {encoding: 'utf8'}))
			.replaceAll(/\[componentName\]/g, capitalizeComponentName)
			.replaceAll(/\[componentNameLowerCase\]/g, componentName);
		if (await pathExists(normalizedFilePath)) {
			const targetFile = await readFile(normalizedFilePath, {encoding: 'utf8'});
			let updatedFile = targetFile;
			Object.values(TemplateReplacementTypes).forEach((type) => {
				updatedFile = fillTemplatePlaceholders(updatedFile, type, template);
			});
			await writeFile(normalizedFilePath, updatedFile);
			console.log(`\x1b[33m ${normalizedFilePath} updated \x1b[0m`);
		} else {
			await writeFile(normalizedFilePath, template);
			console.log(`\x1b[32m ${normalizedFilePath} created \x1b[0m`);
		}
	});
});

/**
 * Check if a path exists (async).
 */
async function pathExists(dirPath: string): Promise<boolean> {
	try {
		const stats = await stat(dirPath);
		return stats.isDirectory() || stats.isFile();
	} catch (err: any) {
		if (err?.code === 'ENOENT' || err?.code === 'ENOTDIR' || err?.code === 'ENOTFILE') return false;
		throw err;
	}
}

/**
 * Extract template that needs to be replaced in the target file.
 * @param fileContent Content of the template file
 * @param replacementType string that represents the type of replacement (e.g., 'import', 'export', 'content')
 * @returns extracted template content as a string or an empty string if markers are not found
 */
function extractTemplate(fileContent: string, replacementType: string): string {
	const startMarker = `//${replacementType}-start`;
	const endMarker = `//${replacementType}-end`;

	const startIndex = fileContent.indexOf(startMarker);
	const endIndex = fileContent.indexOf(endMarker);

	if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
		return '';
	}

	// Extract content between the markers
	const extracted = fileContent.slice(startIndex + startMarker.length, endIndex).trim();

	return extracted;
}

/**
 * Function to fill the placeholders with the template contents based on the replacement type
 * @param targetFile contents of the target file with placeholders
 * @param replacementType type of the replacement
 * @param replacementTemplate contents that will be filled
 * @returns updated contents of the target file
 */
function fillTemplatePlaceholders(targetFile: string, replacementType: string, replacementTemplate: string): string {
	let updatedFile = targetFile;
	const startIndex = Math.max(
		targetFile.indexOf(`// [${replacementType}-placeholder]`),
		targetFile.indexOf(`<!-- [${replacementType}-placeholder] -->`),
		targetFile.indexOf(`{/* [${replacementType}-placeholder] */}`),
	);
	const extractedTemplate = extractTemplate(replacementTemplate, replacementType);
	if (extractedTemplate !== '' && startIndex !== -1) {
		updatedFile = updatedFile.slice(0, startIndex) + extractedTemplate + '\n' + updatedFile.slice(startIndex);
	}
	return updatedFile;
}
