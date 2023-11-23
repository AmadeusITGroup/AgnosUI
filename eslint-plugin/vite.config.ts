import path from 'path';
import {defineConfig} from 'vite';
import {dependencies, peerDependencies} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: false,
		lib: {
			entry: 'src/index',
			fileName: 'index',
			formats: ['cjs'],
		},
		rollupOptions: {
			external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist'),
	},
});
