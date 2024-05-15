import {componentsMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...componentsMetadata.Select,
	tabs: [
		{title: 'Examples', key: 'examples', path: '/components/select/examples'},
		{title: 'Api', key: 'api', path: '/components/select/api'},
		{title: 'Playground', key: 'playground', path: '/components/select/playground'},
	],
	prev: {
		title: 'Rating',
		slug: 'components/rating/',
		subpath: 'examples',
	},
	next: {
		title: 'Slider',
		slug: 'components/slider/',
		subpath: 'examples',
	},
});
