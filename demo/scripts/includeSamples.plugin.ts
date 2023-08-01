import type {Plugin} from 'vite';
import path from 'path';

const samplePrefix = '@agnos-ui/samples/';

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
				let output = `export default {componentName:${JSON.stringify(componentName)},sampleName:${JSON.stringify(sampleName)},files:{`;

				// TODO: add support for multiple files in the samples

				let fileName = JSON.stringify(`${sampleName}.component.ts`);
				output += `angular:{entryPoint: ${fileName}, files: {`;
				output += `[${fileName}]:() => import(${JSON.stringify(
					path.join(__dirname, `../../angular/demo/src/app/samples/${componentName}/${sampleName}.route.ts?raw`)
				)}).then(file=>file.default),`;
				output += '}},';

				fileName = JSON.stringify(`${sampleName}.tsx`);
				output += `react:{entryPoint: ${fileName}, files: {`;
				output += `[${fileName}]:() => import(${JSON.stringify(
					path.join(__dirname, `../../react/demo/app/samples/${componentName}/${normalizedSampleName}.route.tsx?raw`)
				)}).then(file=>file.default),`;
				output += '}},';

				fileName = JSON.stringify(`${sampleName}.svelte`);
				output += `svelte:{entryPoint: ${fileName}, files: {`;
				output += `[${fileName}]:() => import(${JSON.stringify(
					path.join(__dirname, `../../svelte/demo/samples/${componentName}/${normalizedSampleName}.route.svelte?raw`)
				)}).then(file=>file.default),`;
				output += '}},';

				output += `}};`;
				return output;
			}
		},
	};
};
