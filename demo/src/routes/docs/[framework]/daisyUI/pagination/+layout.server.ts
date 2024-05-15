import {daisyUIMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...daisyUIMetadata.Pagination,
	tabs: [
		{title: 'Examples', key: 'headless', path: '/daisyUI/pagination/headless'},
		{title: 'Api', key: 'api', path: '/daisyUI/pagination/api'},
	],
	prev: {
		title: 'Alert',
		slug: 'daisyUI/alert/',
		subpath: 'headless',
	},
	next: {
		title: 'Progressbar',
		slug: 'daisyUI/progressbar/',
		subpath: 'headless',
	},
});
