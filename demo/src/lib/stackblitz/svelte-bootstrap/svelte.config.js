import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: [directivesPreprocess()],
};
