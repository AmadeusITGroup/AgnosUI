import {daisyUIMetadata} from '$lib/components-metadata';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	...daisyUIMetadata.Toast,
	tabs: [
		{title: 'Examples', key: 'headless', path: '/daisyUI/toast/headless'},
		{title: 'Api', key: 'api', path: '/daisyUI/toast/api'},
	],
	prev: {
		title: 'Slider',
		slug: 'daisyUI/slider/',
		subpath: 'headless',
	},
	next: {
		title: 'Bootstrap Components: Introduction',
		slug: 'bootstrap-components/introduction',
		subpath: '',
	},
});
