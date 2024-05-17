import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Modal,
		tabs: [
			{title: 'Examples', key: 'headless', path: '/daisyUI/modal/headless'},
			{title: 'Api', key: 'api', path: '/daisyUI/modal/api'},
		],
		prev: {
			title: 'Alert',
			slug: 'daisyUI/alert/',
			subpath: 'headless',
		},
		next: {
			title: 'Pagination',
			slug: 'daisyUI/pagination/',
			subpath: 'headless',
		},
	};
};
