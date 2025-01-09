import type {Plugin} from 'vite';
import path from 'path';
import type {Frameworks} from '$lib/routing.svelte';
import {readFile} from 'fs/promises';
import {existsSync} from 'fs';

const __dirname = import.meta.dirname;

const samplePrefix = '@agnos-ui/samples/';
const rawSampleSuffix = '?raw&sample';
const commonImport = /^@agnos-ui\/common\/samples\/([^?]*)(\?raw|\?react)?$/;
const frameworkDefaults = {
	angular: path.join(__dirname, `../../angular/demo/bootstrap/src/app/samples/placeholder/placeholderSample.route.ts`),
	react: path.join(__dirname, `../../react/demo/src/bootstrap/samples/placeholder/PlaceholderSample.route.tsx`),
	svelte: path.join(__dirname, `../../svelte/demo/src/bootstrap/samples/placeholder/PlaceholderSample.route.svelte`),
};

const importRegExp = /(@use|import)([^;]+from)?\s*['"]([^'"]+)['"]\s*;/g;
const findDependencies = (fileContent: string) => {
	const dependencies: string[] = [];
	for (const dependency of fileContent.matchAll(importRegExp)) {
		dependencies.push(dependency[3]);
	}
	return dependencies;
};
const templateUrlRegExp = /@Component\({[\s\S]*?\stemplateUrl:\s'([^']+)'/g;
const findTemplateUrls = (fileContent: string) => {
	const templateUrls: string[] = [];
	for (const templateUrl of fileContent.matchAll(templateUrlRegExp)) {
		templateUrls.push(templateUrl[1]);
	}
	return templateUrls;
};

const addExtension = (directory: string, depPath: string) => {
	// if file is not found, the relative import is most likely targeting a ts or tsx
	if (!existsSync(path.join(directory, depPath))) {
		if (existsSync(path.join(directory, depPath + '.ts'))) {
			depPath = depPath + '.ts';
		} else if (existsSync(path.join(directory, depPath + '.tsx'))) {
			depPath = depPath + '.tsx';
		}
	}
	return depPath;
};

export const includeSamples = (): Plugin => {
	return {
		name: 'include-samples',
		resolveId(source) {
			if (source.startsWith(samplePrefix)) {
				return {id: source};
			}
		},
		load: {
			order: 'pre',
			async handler(id) {
				if (id.endsWith(rawSampleSuffix)) {
					id = id.substring(0, id.length - rawSampleSuffix.length);
					let fileContent = await readFile(id, 'utf8');
					fileContent = fileContent.replace(/@agnos-ui\/common\/samples\/[^/]+/g, '.');
					return `export default ${JSON.stringify(fileContent)};`;
				} else if (id.startsWith(samplePrefix)) {
					const parts = id.substring(samplePrefix.length).split('/');
					if (parts.length !== 3) {
						throw new Error('Invalid sample path: ' + id);
					}
					const [cssFramework, componentName, sampleName] = parts;
					const normalizedSampleName = `${sampleName[0].toUpperCase()}${sampleName.substring(1)}`;

					const files: Record<Frameworks, {fileName: string; filePath: string}[]> = {} as any;
					const addFile = async (framework: Frameworks, fileName: string, filePath: string) => {
						if (!files[framework]) {
							files[framework] = [];
						}
						if (existsSync(filePath)) {
							// If the 'files' object for the current 'framework' already contains a file with the same 'filePath', return without adding the new file.
							if (files[framework].some((file) => file.filePath === filePath)) return;
							files[framework].push({fileName, filePath});
							this.addWatchFile(filePath);
							const fileContent = await readFile(filePath, {encoding: 'utf8'});
							const dependencies = findDependencies(fileContent);
							const directory = path.dirname(filePath);
							for (const dependency of dependencies) {
								// @agnos-ui/common/samples/utils/debounce
								const dependencyParts = dependency.split('/');
								if (dependencyParts[0] === '.') {
									const depPath = addExtension(directory, dependency);
									await addFile(framework, path.basename(depPath), path.join(directory, depPath));
								} else if (dependency.match(commonImport)) {
									const baseDir = path.join(__dirname, '..', '..', 'common', 'samples');
									const cleanedDependency = addExtension(baseDir, dependency.replace(commonImport, './$1'));
									await addFile(framework, path.basename(cleanedDependency), path.join(baseDir, cleanedDependency));
								} else {
									// TODO: check that the dependency is valid and included in package.json
								}
							}
							// include templateUrl
							if (framework === 'angular') {
								const templateUrls = findTemplateUrls(fileContent);
								for (const template of templateUrls) {
									await addFile(framework, path.basename(template), path.join(directory, template));
								}
							}
						} else {
							// If the 'files' object for the current 'framework' already contains a file with the same 'filePath', return without adding the new file.
							if (files[framework].some((file) => file.filePath === frameworkDefaults[framework])) return;
							files[framework].push({fileName: 'placeholder', filePath: frameworkDefaults[framework]});
						}
					};

					await addFile(
						'angular',
						`${sampleName}.component.ts`,
						path.join(__dirname, `../../angular/demo/${cssFramework}/src/app/samples/${componentName}/${sampleName}.route.ts`),
					);
					await addFile(
						'react',
						`${sampleName}.tsx`,
						path.join(__dirname, `../../react/demo/src/${cssFramework}/samples/${componentName}/${normalizedSampleName}.route.tsx`),
					);
					await addFile(
						'svelte',
						`${sampleName}.svelte`,
						path.join(__dirname, `../../svelte/demo/src/${cssFramework}/samples/${componentName}/${normalizedSampleName}.route.svelte`),
					);
					const complementaryUrl = `/${cssFramework}`;
					let output = `export default {componentName:${JSON.stringify(componentName)}, style:'${cssFramework}', sampleName:${JSON.stringify(sampleName)},files:{`;
					(Object.keys(files) as Frameworks[]).forEach((framework) => {
						const frameworkFiles = files[framework];
						output += `${JSON.stringify(framework)}:{complementaryUrl:${JSON.stringify(complementaryUrl)},entryPoint:${JSON.stringify(frameworkFiles[0].fileName)},files:{`;
						frameworkFiles.forEach(({fileName, filePath}) => {
							output += `[${JSON.stringify(fileName)}]: () => import(${JSON.stringify(filePath + rawSampleSuffix)}).then(file=>file.default),`;
						});
						output += `}},`;
					});

					output += `}};`;
					return output;
				}
			},
		},
	};
};
