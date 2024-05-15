import {daisyUIMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...daisyUIMetadata.Rating,
	tabs: [
		{title: 'Examples', key: 'headless', path: '/daisyUI/rating/headless'},
		{title: 'Api', key: 'api', path: '/daisyUI/rating/api'},
	],
	prev: {
		title: 'Progressbar',
		slug: 'daisyUI/progressbar/',
		subpath: 'headless',
	},
	next: {
		title: 'Slider',
		slug: 'daisyUI/slider/',
		subpath: 'headless',
	},
});
