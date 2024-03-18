import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Pagination,
		prev: {
			title: 'Headless: Implementation',
			slug: 'headless/implementation',
			subpath: '',
		},
		next: {
			title: 'Progressbar',
			slug: 'daisyUI/progressbar/',
			subpath: 'headless',
		},
	};
};
