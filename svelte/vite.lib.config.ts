import {svelte, vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import {defineConfig} from 'vite';
import {alias} from '../viteAlias';
import {dependencies} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3001,
	},
	build: {
		lib: {
			entry: 'lib/index',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: Object.keys(dependencies),
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist/lib'),
	},
	resolve: {
		alias,
	},
	plugins: [
		svelte({
			preprocess: vitePreprocess(),
		}),
	],
});
