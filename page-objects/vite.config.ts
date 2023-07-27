import {peerDependencies, dependencies} from './package.json';
import path from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'lib/index',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist/lib'),
	},
});
