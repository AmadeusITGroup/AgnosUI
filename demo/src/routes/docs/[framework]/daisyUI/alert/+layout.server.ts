import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Alert,
		prev: {
			title: 'Headless: Implementation',
			slug: 'headless/implementation',
			subpath: '',
		},
		next: {
			title: 'DaisyUI: Pagination',
			slug: 'daisyUI/pagination/',
			subpath: 'headless',
		},
	};
};
