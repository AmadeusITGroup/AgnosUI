import {componentsMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...componentsMetadata.Slider,
	tabs: [
		{title: 'Examples', key: 'examples', path: '/components/slider/examples'},
		{title: 'Api', key: 'api', path: '/components/slider/api'},
		{title: 'Playground', key: 'playground', path: '/components/slider/playground'},
	],
	prev: {
		title: 'Select',
		slug: 'components/select/',
		subpath: 'examples',
	},
	next: {
		title: 'Toast',
		slug: 'components/toast/',
		subpath: 'examples',
	},
});
