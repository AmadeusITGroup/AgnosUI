import {componentsMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...componentsMetadata.Progressbar,
	tabs: [
		{title: 'Examples', key: 'examples', path: '/components/progressbar/examples'},
		{title: 'Api', key: 'api', path: '/components/progressbar/api'},
		{title: 'Playground', key: 'playground', path: '/components/progressbar/playground'},
	],
	prev: {
		title: 'Pagination',
		slug: 'components/pagination/',
		subpath: 'examples',
	},
	next: {
		title: 'Rating',
		slug: 'components/rating/',
		subpath: 'examples',
	},
});
