import {defineConfig} from 'vite';
import {includeSamples} from '../scripts/includeSamples.plugin';
import {listSamples} from '../scripts/listSamples.plugin';

export default defineConfig({
	plugins: [includeSamples(), listSamples()],
	build: {
		lib: {
			entry: {
				index: '../src/lib/stackblitz/testapi.ts',
			},
			formats: ['cjs'],
		},
	},
});
