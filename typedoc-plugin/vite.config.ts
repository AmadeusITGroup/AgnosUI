import path from 'path';
import {defineConfig} from 'vite';
import {peerDependencies} from './package.json';
import {builtinModules} from 'module';

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
			external: [...Object.keys(peerDependencies), ...builtinModules],
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist'),
	},
});
