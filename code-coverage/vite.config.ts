import {builtinModules} from 'module';
import {dependencies, peerDependencies} from './package.json';
import path from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: {
				vitePlugin: './lib/vitePlugin.ts',
				interceptReadFile: './lib/interceptReadFile.ts',
				vitestProvider: './lib/vitestProvider.ts',
				setup: './lib/setup.ts',
				reportCoverage: './lib/reportCoverage.ts',
			},
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [...Object.keys(dependencies), ...Object.keys(peerDependencies), ...builtinModules],
		},
		emptyOutDir: true,
		outDir: path.join(__dirname, 'dist/lib'),
	},
});
