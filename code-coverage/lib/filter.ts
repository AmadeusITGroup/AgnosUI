import {createFilter} from 'vite';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rootFolder = path.join(__dirname, '..', '..', '..');

export const filter = createFilter(
	['core/**/*', 'angular/{headless,lib}/src/**/*', 'react/{headless,lib}/**/*', 'svelte/{headless,lib}/**/*'],
	['node_modules', '**/*.spec.ts', '**/__mocks__/**'],
	{
		resolve: rootFolder,
	},
);
