export const load = async () => {
	return {
		mainTitle: 'Accordion',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/accordion/examples'},
			{title: 'Api', key: 'api', path: '/components/accordion/api'},
			{title: 'Playground', key: 'playground', path: '/components/accordion/playground#'},
		],
		prev: {
			title: 'Bootstrap flavor: Extending',
			slug: 'bootstrap-flavor/extending',
			subpath: '',
		},
		next: {
			title: 'Alert',
			slug: 'components/alert/',
			subpath: 'examples',
		},
	};
};
