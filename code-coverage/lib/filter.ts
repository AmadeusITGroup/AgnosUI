import {createFilter} from 'vite';
import path from 'path';

export const rootFolder = path.join(import.meta.dirname, '..', '..', '..');

export const filter = createFilter(
	['core/src/**/*', 'angular/{headless,lib}/src/**/*', 'react/{headless,lib}/src/**/*', 'svelte/{headless,lib}/src/**/*'],
	['node_modules', '**/*.spec.ts', '**/__mocks__/**'],
	{
		resolve: rootFolder,
	},
);
