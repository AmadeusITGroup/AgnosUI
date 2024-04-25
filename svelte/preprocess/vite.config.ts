import {defineConfig} from 'vite';
import {dependencies, peerDependencies} from './package.json';

const externalDependencies = [...Object.keys(peerDependencies), ...Object.keys(dependencies)];

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
			external: (dependency) =>
				externalDependencies.some((externalDependency) => dependency === externalDependency || dependency.startsWith(`${externalDependency}/`)),
		},
	},
});
