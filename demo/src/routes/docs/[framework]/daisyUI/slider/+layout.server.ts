import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Slider,
		prev: {
			title: 'Rating',
			slug: 'daisyUI/rating/',
			subpath: 'headless',
		},
		next: {
			title: 'Component: Accordion',
			slug: 'components/accordion/',
			subpath: 'examples',
		},
	};
};
