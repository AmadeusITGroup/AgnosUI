import {componentsMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...componentsMetadata.Accordion,
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/accordion/examples'},
			{title: 'Api', key: 'api', path: '/components/accordion/api'},
			{title: 'Playground', key: 'playground', path: '/components/accordion/playground#'},
		],
		prev: {
			title: 'DaisyUI: Rating',
			slug: 'daisyUI/rating/',
			subpath: 'headless',
		},
		next: {
			title: 'Alert',
			slug: 'components/alert/',
			subpath: 'examples',
		},
	};
};
