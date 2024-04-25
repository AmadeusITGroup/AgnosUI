import {defineConfig} from 'vite';
import {peerDependencies, dependencies} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: false,
		emptyOutDir: true,
		lib: {
			entry: {
				index: 'src/index.ts',
			},
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
		},
	},
});
