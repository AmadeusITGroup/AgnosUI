import {daisyUIMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...daisyUIMetadata.Alert,
	tabs: [
		{title: 'Examples', key: 'headless', path: '/daisyUI/alert/headless'},
		{title: 'Api', key: 'api', path: '/daisyUI/alert/api'},
	],
	prev: {
		title: 'Headless Components: Introduction',
		slug: 'headless-components/introduction',
		subpath: '',
	},
	next: {
		title: 'Pagination',
		slug: 'daisyUI/pagination/',
		subpath: 'headless',
	},
});
