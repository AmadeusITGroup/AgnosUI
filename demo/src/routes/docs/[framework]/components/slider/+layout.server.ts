import {componentsMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...componentsMetadata.Slider,
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/slider/examples'},
			{title: 'Api', key: 'api', path: '/components/slider/api'},
			{title: 'Styling', key: 'style', path: '/components/slider/style'},
			{title: 'Playground', key: 'playground', path: '/components/slider/playground'},
		],
		prev: {
			title: 'Select',
			slug: 'components/select/',
			subpath: 'examples',
		},
		next: {
			title: 'Toast',
			slug: 'components/toast/',
			subpath: 'examples',
		},
	};
};
