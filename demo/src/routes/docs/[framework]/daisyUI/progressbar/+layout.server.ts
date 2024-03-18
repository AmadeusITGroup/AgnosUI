import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Progressbar,
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
