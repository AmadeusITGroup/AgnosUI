import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';
import path from 'path';
import {fileURLToPath} from 'url';
import child_process from 'child_process';

const __dirname = fileURLToPath(new URL('./', import.meta.url));

export const alias = {
	'@agnos-ui/core': path.join(__dirname, '../core/lib'),
	'@agnos-ui/react': path.join(__dirname, '../react/lib'),
	'@agnos-ui/svelte': path.join(__dirname, '../svelte/lib'),
	'@agnos-ui/angular': path.join(__dirname, '../angular/lib/src/public-api'),
	'@agnos-ui/common': path.join(__dirname, '../common'),
	'@agnos-ui/doc': path.join(__dirname, '../scripts/doc'),
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'dist',
			// fallback: '404.html',
			// strict: false,
		}),
		prerender: {
			handleMissingId: 'ignore',
		},
		paths: {
			// To be adapted for github pages.
			// See https://kit.svelte.dev/docs/adapter-static#github-pages
			// base: dev ? 'http://localhost:4000' : '/your-repo-name',
		},

		alias,

		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim(),
		},
	},
};

export default config;
