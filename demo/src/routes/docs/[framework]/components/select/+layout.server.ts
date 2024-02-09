import {componentsMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...componentsMetadata.Select,
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/select/examples'},
			{title: 'Api', key: 'api', path: '/components/select/api'},
			{title: 'Playground', key: 'playground', path: '/components/select/playground'},
		],
		prev: {
			title: 'Rating',
			slug: 'components/rating/',
			subpath: 'examples',
		},
		next: {
			title: 'Slider',
			slug: 'components/slider/',
			subpath: 'examples',
		},
	};
};
