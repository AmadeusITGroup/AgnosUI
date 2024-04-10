const e=`import {glob} from 'glob';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import type {UserConfig} from 'vite';
import {defineConfig} from 'vite';
import {peerDependencies, dependencies, exports as pkgExports} from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pathRegExp = /\\\\/g;
const normalizePath = (str: string) => str.replace(pathRegExp, '/');
const externalDependencies = [...Object.keys(peerDependencies), ...Object.keys(dependencies)];

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
	const entry: Record<string, string> = {};

	for (const [, exportInfo] of Object.entries(pkgExports).filter(([key]) => !key.endsWith('css'))) {
		const pattern = exportInfo.default.replace(/^\\.\\/dist\\//, './src/').replace(/\\.js$/, '.{ts,tsx}');
		const files = await glob(pattern, {cwd: __dirname});
		for (const file of files) {
			const baseFile = normalizePath(file)
				.replace(/\\.tsx?$/, '')
				.replace(/^src\\//, '');
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
				external: (dependency) =>
					externalDependencies.some((externalDependency) => dependency === externalDependency || dependency.startsWith(\`\${externalDependency}/\`)),
			},
		},
	};
});
`;export{e as default};
