import {peerDependencies} from './package.json';
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
			external: [...Object.keys(peerDependencies)],
		},
		emptyOutDir: true,
	},
});
