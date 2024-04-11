import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
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
			title: 'Component: Accordion',
			slug: 'components/accordion/',
			subpath: 'examples',
		},
	};
};
