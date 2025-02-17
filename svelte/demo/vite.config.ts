import {defineConfig} from 'vite';
import {svelte, vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';
import path from 'path';
import {alias} from '../../viteAlias';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	root: 'src',
	appType: 'mpa',
	base: config.command === 'serve' ? '/svelte/samples' : './',
	server: {
		port: 3001,
		strictPort: true,
	},
	build: {
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist'),
		rollupOptions: {
			input: {
				bootstrap: path.resolve(__dirname, 'src/bootstrap/index.html'),
				daisyui: path.resolve(__dirname, 'src/daisyui/index.html'),
			},
		},
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
		tailwindcss(),
		svelte({
			preprocess: [vitePreprocess(), directivesPreprocess()],
		}),
	],
}));
