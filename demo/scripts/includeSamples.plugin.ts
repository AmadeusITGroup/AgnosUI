import type {Plugin} from 'vite';
import path from 'path';
import type {Frameworks} from '$lib/stores';
import {readFile} from 'fs/promises';

const samplePrefix = '@agnos-ui/samples/';

const importRegExp = /import([^;]+from)?\s*['"]([^'"]+)['"]\s*;/g;
const findDependencies = (fileContent: string) => {
	const dependencies: string[] = [];
	for (const dependency of fileContent.matchAll(importRegExp)) {
		dependencies.push(dependency[2]);
	}
	return dependencies;
};

export const includeSamples = (): Plugin => {
	return {
		name: 'include-samples',
		async resolveId(source, importer, options) {
			if (source.startsWith(samplePrefix)) {
				return {id: source};
			}
		},
		async load(id, options) {
			if (id.startsWith(samplePrefix)) {
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
						const dependencyParts = dependency.split('/');
						if (dependencyParts[0] === '.') {
							await addFile(framework, path.basename(dependency), path.join(directory, dependency));
						} else {
							// TODO: check that the dependency is valid and included in package.json
						}
					}
				};

				await addFile(
					'angular',
					`${sampleName}.component.ts`,
					path.join(__dirname, `../../angular/demo/src/app/samples/${componentName}/${sampleName}.route.ts`)
				);
				await addFile(
					'react',
					`${sampleName}.tsx`,
					path.join(__dirname, `../../react/demo/app/samples/${componentName}/${normalizedSampleName}.route.tsx`)
				);
				await addFile(
					'svelte',
					`${sampleName}.svelte`,
					path.join(__dirname, `../../svelte/demo/samples/${componentName}/${normalizedSampleName}.route.svelte`)
				);

				let output = `export default {componentName:${JSON.stringify(componentName)},sampleName:${JSON.stringify(sampleName)},files:{`;
				(Object.keys(files) as Frameworks[]).forEach((framework) => {
					const frameworkFiles = files[framework];
					output += `${JSON.stringify(framework)}:{entryPoint:${JSON.stringify(frameworkFiles[0].fileName)},files:{`;
					frameworkFiles.forEach(({fileName, filePath}) => {
						output += `[${JSON.stringify(fileName)}]: () => import(${JSON.stringify(filePath + '?raw')}).then(file=>file.default),`;
					});
					output += `}},`;
				});

				output += `}};`;
				return output;
			}
		},
	};
};
