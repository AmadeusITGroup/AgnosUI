import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {alias} from '../../viteAlias';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	root: 'src',
	base: config.command === 'serve' ? '/react/samples' : './',
	server: {
		port: 3000,
		strictPort: true,
	},
	build: {
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist'),
	},
	preview: {
		port: 3000,
	},
	resolve: {
		alias:
			config.mode === 'production'
				? {
						'@agnos-ui/common': path.join(__dirname, '../../common'),
					}
				: alias,
	},
	plugins: [react()],
}));
