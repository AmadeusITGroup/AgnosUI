import type {SampleInfo} from '../src/lib/layout/sample';
import {globSync} from 'glob';
import path from 'path';
import type {Plugin} from 'vite';

const samplesListId = '@agnos-ui/samples';

export const getSamplesList = () => {
	const mapFile =
		(style: SampleInfo['style']) =>
		(file: string): Pick<SampleInfo, 'componentName' | 'sampleName' | 'style'> => {
			const parts = file
				.replace(/\.route\.svelte$/, '')
				.toLowerCase()
				.split(path.sep);
			if (parts.length !== 2) {
				throw new Error(`Expected exactly two components in sample path: ${file} (in ${style})`);
			}
			return {style, componentName: parts[0], sampleName: parts[1]};
		};
	const filesBootstrap = globSync('**/*.route.svelte', {cwd: path.join(__dirname, '../../svelte/demo/src/bootstrap/samples')}).map(
		mapFile('bootstrap'),
	);
	const filesDaisyui = globSync('**/*.route.svelte', {cwd: path.join(__dirname, '../../svelte/demo/src/daisyui/samples')}).map(mapFile('daisyui'));
	return [...filesBootstrap, ...filesDaisyui];
};

export const listSamples = (): Plugin => ({
	name: 'list-samples',
	resolveId(id) {
		if (id === samplesListId) {
			return {id};
		}
	},
	async load(id) {
		if (id === samplesListId) {
			let output = '';
			const samples = getSamplesList();
			let i = 0;
			for (const sample of samples) {
				output += `import sample${i} from ${JSON.stringify(`@agnos-ui/samples/${sample.style}/${sample.componentName}/${sample.sampleName}`)};\n`;
				i++;
			}
			output += `export default [${samples.map((sample, i) => `sample${i}`).join(',\n')}];`;
			return output;
		}
	},
});
