import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
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
			title: 'Modal',
			slug: 'daisyUI/modal/',
			subpath: 'headless',
		},
	};
};
