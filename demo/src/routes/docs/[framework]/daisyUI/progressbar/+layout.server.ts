import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Progressbar,
		tabs: [
			{title: 'Examples', key: 'headless', path: '/daisyUI/progressbar/headless'},
			{title: 'Api', key: 'api', path: '/daisyUI/progressbar/api'},
		],
		prev: {
			title: 'Pagination',
			slug: 'daisyUI/pagination/',
			subpath: 'headless',
		},
		next: {
			title: 'Rating',
			slug: 'daisyUI/rating/',
			subpath: 'headless',
		},
	};
};
