import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Accordion,
		tabs: [
			{title: 'Examples', key: 'headless', path: '/daisyUI/accordion/headless'},
			{title: 'Api', key: 'api', path: '/daisyUI/accordion/api'},
		],
		prev: {
			title: 'Headless Components: Introduction',
			slug: 'headless-components/introduction',
			subpath: '',
		},
		next: {
			title: 'Alert',
			slug: 'daisyUI/alert/',
			subpath: 'headless',
		},
	};
};
