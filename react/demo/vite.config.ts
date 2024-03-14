import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {alias} from '../../viteAlias';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	root: 'src',
	appType: 'mpa',
	base: config.command === 'serve' ? '/react/samples' : './',
	server: {
		port: 3000,
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
	plugins: [svgr(), react()],
}));
