import {glob} from 'glob';
import type {UserConfig} from 'vite';
import {defineConfig} from 'vite';
import {peerDependencies, exports as pkgExports} from './package.json';
import {exclude as ignore} from './tsconfig.build.json';

const pathRegExp = /\\/g;
const normalizePath = (str: string) => str.replace(pathRegExp, '/');

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
	const entry: Record<string, string> = {};

	for (const [, exportInfo] of Object.entries(pkgExports)) {
		const pattern = exportInfo.default.replace(/^\.\/dist\//, './src/').replace(/\.js$/, '.ts');
		const files = await glob(pattern, {cwd: import.meta.dirname, ignore});
		for (const file of files) {
			const baseFile = normalizePath(file)
				.replace(/\.ts$/, '')
				.replace(/^src\//, '');
			entry[baseFile] = normalizePath(file);
		}
	}
	return {
		build: {
			minify: false,
			emptyOutDir: true,
			lib: {
				entry,
				formats: ['es', 'cjs'],
			},
			rollupOptions: {
				external: Object.keys(peerDependencies),
			},
		},
	};
});
