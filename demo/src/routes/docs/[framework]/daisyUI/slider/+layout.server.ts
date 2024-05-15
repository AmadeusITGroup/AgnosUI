import {daisyUIMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...daisyUIMetadata.Slider,
	tabs: [
		{title: 'Examples', key: 'headless', path: '/daisyUI/slider/headless'},
		{title: 'Api', key: 'api', path: '/daisyUI/slider/api'},
	],
	prev: {
		title: 'Rating',
		slug: 'daisyUI/rating/',
		subpath: 'headless',
	},
	next: {
		title: 'Toast',
		slug: 'daisyUI/toast/',
		subpath: 'headless',
	},
});
