import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {alias} from '../viteAlias';
import {setNoStrict} from './scripts/setNoStrict';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	root: 'demo',
	base: config.command === 'serve' ? '/react/samples' : './',
	server: {
		port: 3000,
	},
	build: {
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist/demo'),
	},
	preview: {
		port: 3000,
	},
	resolve: {
		alias,
	},
	plugins: [setNoStrict(), react()],
}));
