import {componentsMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...componentsMetadata.Accordion,
	tabs: [
		{title: 'Examples', key: 'examples', path: '/components/accordion/examples'},
		{title: 'Api', key: 'api', path: '/components/accordion/api'},
		{title: 'Playground', key: 'playground', path: '/components/accordion/playground#'},
	],
	prev: {
		title: 'Bootstrap Components: Introduction',
		slug: 'bootstrap-components/introduction',
		subpath: '',
	},
	next: {
		title: 'Alert',
		slug: 'components/alert/',
		subpath: 'examples',
	},
});
