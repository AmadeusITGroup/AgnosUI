import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [directivesPreprocess()],
};

export default config;
