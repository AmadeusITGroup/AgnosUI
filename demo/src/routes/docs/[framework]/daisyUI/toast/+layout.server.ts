import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
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
			title: 'Components: Accordion',
			slug: 'components/accordion/',
			subpath: 'examples',
		},
	};
};
