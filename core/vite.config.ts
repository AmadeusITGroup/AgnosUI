import {glob} from 'glob';
import {dirname, posix} from 'path';
import {fileURLToPath} from 'url';
import type {UserConfig} from 'vite';
import {defineConfig} from 'vite';
import {peerDependencies, exports as pkgExports} from './package.json';
import {exclude as ignore} from './tsconfig.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
	const entry: Record<string, string> = {};

	for (const [, exportInfo] of Object.entries(pkgExports)) {
		const pattern = exportInfo.default.replace(/^\.\/dist\//, './src/').replace(/\.js$/, '.ts');
		const files = await glob(pattern, {cwd: __dirname, ignore});
		for (const file of files) {
			const baseFile = posix
				.normalize(file)
				.replace(/\.ts$/, '')
				.replace(/^src\//, '');
			entry[baseFile] = posix.normalize(file);
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
