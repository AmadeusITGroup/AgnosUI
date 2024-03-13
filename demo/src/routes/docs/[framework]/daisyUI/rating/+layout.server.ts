import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Rating,
		prev: {
			title: 'Pagination',
			slug: 'daisyUI/pagination/',
			subpath: 'headless',
		},
		next: {
			title: 'Component: Accordion',
			slug: 'components/accordion/',
			subpath: 'examples',
		},
	};
};
