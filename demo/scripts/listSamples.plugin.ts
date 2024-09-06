import type {SampleInfo} from '../src/lib/layout/sample';
import {globSync} from 'glob';
import path from 'path';
import type {Plugin} from 'vite';

const samplesListId = '@agnos-ui/samples';

export const getSamplesList = () => {
	const map: Record<string, Pick<SampleInfo, 'componentName' | 'sampleName' | 'style'>> = {};
	const add = (style: SampleInfo['style']) => (file: string) => {
		const parts = file.replace(/\.route\.svelte$/, '').split(path.sep);
		if (parts.length !== 2) {
			throw new Error(`Expected exactly two components in sample path: ${file} (in ${style})`);
		}
		const info = {style, componentName: parts[0], sampleName: `${parts[1][0].toLowerCase()}${parts[1].substring(1)}`};
		map[`${style}/${info.componentName}/${info.sampleName}`] = info;
	};
	globSync('**/*.route.svelte', {cwd: path.join(import.meta.dirname, '../../svelte/demo/src/bootstrap/samples')}).forEach(add('bootstrap'));
	globSync('**/*.route.svelte', {cwd: path.join(import.meta.dirname, '../../svelte/demo/src/daisyui/samples')}).forEach(add('daisyui'));
	return map;
};

export const listSamples = (): Plugin => ({
	name: 'list-samples',
	resolveId(id) {
		if (id === samplesListId) {
			return {id};
		}
	},
	load(id) {
		if (id === samplesListId) {
			let output = '';
			const samples = getSamplesList();
			let i = 0;
			const entries = Object.entries(samples);
			for (const [, sample] of entries) {
				output += `import sample${i} from ${JSON.stringify(`@agnos-ui/samples/${sample.style}/${sample.componentName}/${sample.sampleName}`)};\n`;
				i++;
			}
			output += `export default {${entries.map(([key], i) => `${JSON.stringify(key)}: sample${i}`).join(',\n')}};`;
			return output;
		}
	},
});
