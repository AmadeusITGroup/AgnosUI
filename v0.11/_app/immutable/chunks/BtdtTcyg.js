const e=`import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), directivesPreprocess()],
};
`;export{e as default};
