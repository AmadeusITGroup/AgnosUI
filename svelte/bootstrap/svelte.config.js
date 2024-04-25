import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), directivesPreprocess()],
};

export default config;
