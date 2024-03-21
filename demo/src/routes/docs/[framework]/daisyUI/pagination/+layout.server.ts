import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Pagination,
		prev: {
			title: 'DaisyUI: Alert',
			slug: 'daisyUI/alert/',
			subpath: 'headless',
		},
		next: {
			title: 'DaisyUI: Rating',
			slug: 'daisyUI/rating/',
			subpath: 'headless',
		},
	};
};
