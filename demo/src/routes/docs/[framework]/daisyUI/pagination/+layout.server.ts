import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Pagination,
		tabs: [
			{title: 'Examples', key: 'headless', path: '/daisyUI/pagination/headless'},
			{title: 'Api', key: 'api', path: '/daisyUI/pagination/api'},
		],
		prev: {
			title: 'Modal',
			slug: 'daisyUI/modal/',
			subpath: 'headless',
		},
		next: {
			title: 'Progressbar',
			slug: 'daisyUI/progressbar/',
			subpath: 'headless',
		},
	};
};
