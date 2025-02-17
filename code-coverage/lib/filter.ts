import {createFilter} from '@rollup/pluginutils';
import path from 'path';

export const rootFolder = path.join(import.meta.dirname, '..', '..', '..');

export const filter = createFilter(
	[
		'core/src/**/*',
		'core-bootstrap/src/**/*',
		'angular/{headless,bootstrap}/src/**/*',
		'react/{headless,bootstrap}/src/**/*',
		'svelte/{headless,bootstrap}/src/**/*',
	],
	['node_modules', '**/*.spec.ts', '**/__mocks__/**'],
	{
		resolve: rootFolder,
	},
);
