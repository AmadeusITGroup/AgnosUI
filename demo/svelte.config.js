import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import {fileURLToPath} from 'url';
import child_process from 'child_process';
import {globSync} from 'glob';

const __dirname = fileURLToPath(new URL('./', import.meta.url));

export const alias = {
	'@agnos-ui/common': path.join(__dirname, '../common'),
	'@agnos-ui/doc': path.join(__dirname, '../scripts/doc'),
	'@agnos-ui/generated': path.join(__dirname, './generated'),
};
if (process.env.NODE_ENV === 'development') {
	const components = globSync('*', {cwd: path.join(__dirname, '../core/src/components'), ignore: '*.ts'});
	components.forEach(
		(component) => (alias[`@agnos-ui/core/components/${component}`] = path.join(__dirname, `../core/src/components/${component}/${component}.ts`)),
	);
	alias['@agnos-ui/core'] = path.join(__dirname, '../core/src');
}

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
