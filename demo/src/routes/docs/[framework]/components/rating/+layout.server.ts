import {componentsMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...componentsMetadata.Rating,
	tabs: [
		{title: 'Examples', key: 'examples', path: '/components/rating/examples'},
		{title: 'Api', key: 'api', path: '/components/rating/api'},
		{title: 'Playground', key: 'playground', path: '/components/rating/playground'},
	],
	prev: {
		title: 'Progressbar',
		slug: 'components/progressbar/',
		subpath: 'examples',
	},
	next: {
		title: 'Select',
		slug: 'components/select/',
		subpath: 'examples',
	},
});
