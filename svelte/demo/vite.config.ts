import {defineConfig} from 'vite';
import {svelte, vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import {alias} from '../../viteAlias';

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
				app: path.resolve(__dirname, 'src/app/index.html'),
				'app-tailwind': path.resolve(__dirname, 'src/app-tailwind/index.html'),
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
		svelte({
			preprocess: vitePreprocess(),
		}),
	],
}));
