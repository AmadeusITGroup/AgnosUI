import type {Plugin} from 'vite';
import path from 'path';
import type {Frameworks} from '$lib/stores';
import {readFile} from 'fs/promises';
import {existsSync} from 'fs';

const samplePrefix = '@agnos-ui/samples/';
const rawSampleSuffix = '?raw&sample';
const commonImport = /^(!raw-loader!)?@agnos-ui\/common\/samples\/([^?]*)(\?raw)?$/;

const importRegExp = /import([^;]+from)?\s*['"]([^'"]+)['"]\s*;/g;
const findDependencies = (fileContent: string) => {
	const dependencies: string[] = [];
	for (const dependency of fileContent.matchAll(importRegExp)) {
		dependencies.push(dependency[2]);
	}
	return dependencies;
};

const addExtension = (directory: string, depPath: string) => {
	// if file is not found, the relative import is most likely targetting a ts or tsx
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
		async resolveId(source, importer, options) {
			if (source.startsWith(samplePrefix)) {
				return {id: source};
			}
		},
		load: {
			order: 'pre',
			async handler(id, options) {
				if (id.endsWith(rawSampleSuffix)) {
					id = id.substring(0, id.length - rawSampleSuffix.length);
					let fileContent = await readFile(id, 'utf8');
					fileContent = fileContent.replace(/@agnos-ui\/common\/samples\/[^/]+/g, '.');
					return `export default ${JSON.stringify(fileContent)};`;
				} else if (id.startsWith(samplePrefix)) {
					const parts = id.substring(samplePrefix.length).split('/');
					if (parts.length !== 2) {
						throw new Error('Invalid sample path: ' + id);
					}
					const [componentName, sampleName] = parts;
					const normalizedSampleName = `${sampleName[0].toUpperCase()}${sampleName.substring(1)}`;

					const files: Record<Frameworks, {fileName: string; filePath: string}[]> = {} as any;
					const addFile = async (framework: Frameworks, fileName: string, filePath: string) => {
						if (!files[framework]) {
							files[framework] = [];
						}
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
								const cleanedDependency = addExtension(baseDir, dependency.replace(commonImport, './$2'));
								await addFile(framework, path.basename(cleanedDependency), path.join(baseDir, cleanedDependency));
							} else {
								// TODO: check that the dependency is valid and included in package.json
							}
						}
					};

					await addFile(
						'angular',
						`${sampleName}.component.ts`,
						path.join(__dirname, `../../angular/demo/src/app/samples/${componentName}/${sampleName}.route.ts`),
					);
					await addFile(
						'react',
						`${sampleName}.tsx`,
						path.join(__dirname, `../../react/demo/app/samples/${componentName}/${normalizedSampleName}.route.tsx`),
					);
					await addFile(
						'svelte',
						`${sampleName}.svelte`,
						path.join(__dirname, `../../svelte/demo/samples/${componentName}/${normalizedSampleName}.route.svelte`),
					);

					let output = `export default {componentName:${JSON.stringify(componentName)},sampleName:${JSON.stringify(sampleName)},files:{`;
					(Object.keys(files) as Frameworks[]).forEach((framework) => {
						const frameworkFiles = files[framework];
						output += `${JSON.stringify(framework)}:{entryPoint:${JSON.stringify(frameworkFiles[0].fileName)},files:{`;
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
