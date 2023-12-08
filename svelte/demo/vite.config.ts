import {defineConfig} from 'vite';
import {svelte, vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import {alias} from '../../viteAlias';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	root: 'src',
	base: config.command === 'serve' ? '/svelte/samples' : './',
	server: {
		port: 3001,
	},
	build: {
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist'),
	},
	preview: {
		port: 3001,
	},
	resolve: {
		alias:
			config.mode === 'production'
				? {
						'@agnos-ui/common': path.join(__dirname, '../../common'),
					}
				: alias,
	},
	plugins: [
		svelte({
			preprocess: vitePreprocess(),
		}),
	],
}));
