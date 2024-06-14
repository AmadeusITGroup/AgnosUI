import path from 'path';
import ts from 'typescript';
import type {Node} from 'typescript';
import {readdir, writeFile} from 'fs/promises';

/**
 * #######################################################
 * #### Generator of bootstrap component type exports ####
 * #######################################################
 *
 * This script takes a framework as input and parses through all components in the package core-bootstrap
 * to generate type exports in the package ${framework}/bootstrap.
 */

const root = path.resolve(import.meta.dirname, '../..');
const coreBootstrapComponents = path.join(root, 'core-bootstrap/src/components');

const framework = process.argv[2];

const program = ts.createProgram([path.join(root, 'core-bootstrap/src/index.ts')], {
	baseUrl: root,
	paths: {
		'@agnos-ui/core': ['./core/src'],
		'@agnos-ui/core/*': ['./core/src/*'],
	},
});
const typeChecker = program.getTypeChecker();

/**
 * Utility method to resolve all used types from some provided typescript code.
 *
 * @param sourceCode the typescript source code
 * @returns the Set of used types
 */
function getAllTypesFromSourceCode(sourceCode: string): Set<string> {
	const sourceFile = ts.createSourceFile('temp.ts', sourceCode, ts.ScriptTarget.Latest, true);
	const types = new Set<string>();
	function visit(node: Node) {
		if (ts.isTypeReferenceNode(node)) {
			types.add(node.typeName.getText(sourceFile));
		}
		ts.forEachChild(node, visit);
	}
	visit(sourceFile);
	return types;
}

const componentsProps: [string, string, number][] = [];

const components = await readdir(coreBootstrapComponents);
for (const component of components) {
	const sourceFile = program.getSourceFile(path.join(coreBootstrapComponents, `${component}/${component}.ts`))!;
	const sourceFileSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;

	// The first stage of the generator is determining what we need to export.
	// We take all type aliases or interface exports from the file
	// core-bootstrap/src/components/${component}/${component}.ts and filter out Extra or Common ones.
	const exportsList = typeChecker.getExportsOfModule(sourceFileSymbol);
	let exports = '';
	const exportNames = new Set();
	for (const bootstrapExport of exportsList.filter(
		(btsExport) => !btsExport.name.endsWith('CommonPropsAndState') && !btsExport.name.endsWith('ExtraProps') && !btsExport.name.startsWith('Common'),
	)) {
		exportNames.add(bootstrapExport.name);
		const node = bootstrapExport.getDeclarations()![0];
		if (ts.isTypeAliasDeclaration(node)) {
			// type aliases are copied as defined
			exports += node.getText() + '\n\n';
		} else if (ts.isInterfaceDeclaration(node)) {
			// interfaces are resolved to obtain a *flattened* version
			exports += `export interface ${bootstrapExport.name}${node.typeParameters?.length ? `<${node.typeParameters.map((typeParam) => typeParam.getText()).join(', ')}>` : ''} {\n`;
			for (const property of typeChecker.getTypeAtLocation(node).getProperties()) {
				const propertyDeclaration = property.getDeclarations()![0];
				// TODO the js documentation is copied as-is, though it could be interesting for Props interfaces
				// to add the tag @defaultValue based on the getDefaultConfig functions
				exports += `\t/**\n\t * ${ts.displayPartsToString(property.getDocumentationComment(typeChecker)).split('\n').join('\n\t * ')}\n\t */\n`;
				exports += `\t${propertyDeclaration.getText()}\n`;
			}
			exports += `}\n\n`;
			if (bootstrapExport.name === `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Props`) {
				componentsProps.push([component, bootstrapExport.name, node.typeParameters?.length ?? 0]);
			}
		}
	}
	const allUsedTypes = getAllTypesFromSourceCode(exports);

	// We now resolve all necessary imports to add on top of the generated file.
	// For this we go through all files in core-bootstrap and core to resolve type-only imports by name / location.
	// Once this map is built, we change the `@agnos-ui/core` location to be `@agnos-ui/${framework}-headless` instead.
	const mapImportsByModule = new Map<string, Set<string>>();
	const visited = new Set();
	const queue: string[] = [`@agnos-ui/core-bootstrap/components/${component}/${component}`];
	visited.add(queue[0]);
	visited.add('@agnos-ui/core/components/commonProps');

	while (queue.length) {
		const modulePath = queue.shift()!.replace(/^@agnos-ui\/core\/components\/([^/]+)$/, '@agnos-ui/core/components/$1/$1');
		const filePath = modulePath.replace('@agnos-ui/core-bootstrap', 'core-bootstrap/src').replace('@agnos-ui/core', 'core/src') + '.ts';
		for (const node of program.getSourceFile(path.join(root, filePath))!.statements) {
			if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier) && node.importClause?.isTypeOnly) {
				const bindings = node.importClause.namedBindings!;
				if (ts.isNamedImports(bindings)) {
					for (const element of bindings.elements) {
						let moduleSpecifier = node.moduleSpecifier.text;
						if (moduleSpecifier.startsWith('.')) {
							moduleSpecifier = path.posix.join(modulePath.slice(0, modulePath.lastIndexOf('/')), moduleSpecifier);
						}
						if (moduleSpecifier.startsWith('@agnos-ui/core') && !visited.has(moduleSpecifier)) {
							queue.push(moduleSpecifier);
							visited.add(moduleSpecifier);
						}
						const importName = element.name.text;
						if (!exportNames.has(importName) && allUsedTypes.has(importName)) {
							moduleSpecifier = moduleSpecifier.replace('@agnos-ui/core/', `@agnos-ui/${framework}-headless/`);
							if (!mapImportsByModule.has(moduleSpecifier)) {
								mapImportsByModule.set(moduleSpecifier, new Set());
							}
							mapImportsByModule.get(moduleSpecifier)!.add(importName);
						}
					}
				}
			}
		}
	}

	let imports = '';
	for (const entry of mapImportsByModule.entries()) {
		imports += `import type {${[...entry[1].values()].join(', ')}} from '${entry[0]}';\n`;
	}
	await writeFile(path.join(root, `${framework}/bootstrap/src/components/${component}/${component}.gen.ts`), imports + '\n' + exports);
}

// Finally, we generate and export the WidgetsConfig in `@agnos-ui/${framework}-bootstrap/src/config.gen.ts`
await writeFile(
	path.join(root, `${framework}/bootstrap/src/config.gen.ts`),
	componentsProps.map((componentProps) => `import type {${componentProps[1]}} from './components/${componentProps[0]}';`).join('\n') +
		'\n\n' +
		`export type WidgetsConfig = {\n` +
		componentsProps
			.map(
				(componentProps) =>
					`\t/**\n\t * the ${componentProps[0]} widget config\n\t */\n\t` +
					`${componentProps[0]}: ${componentProps[1]}${componentProps[2] > 0 ? `<${'any, '.repeat(componentProps[2]).slice(0, -2)}>` : ''};`,
			)
			.join(`\n`) +
		'\n}\n',
);
