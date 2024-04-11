import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Alert,
		tabs: [
			{title: 'Examples', key: 'headless', path: '/daisyUI/alert/headless'},
			{title: 'Api', key: 'api', path: '/daisyUI/alert/api'},
		],
		prev: {
			title: 'Headless: Implementation',
			slug: 'headless/implementation',
			subpath: '',
		},
		next: {
			title: 'Pagination',
			slug: 'daisyUI/pagination/',
			subpath: 'headless',
		},
	};
};
