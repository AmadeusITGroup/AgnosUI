import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...daisyUIMetadata.Rating,
		prev: {
			title: 'Progressbar',
			slug: 'daisyUI/progressbar/',
			subpath: 'headless',
		},
		next: {
			title: 'Slider',
			slug: 'daisyUI/slider/',
			subpath: 'headless',
		},
	};
};
