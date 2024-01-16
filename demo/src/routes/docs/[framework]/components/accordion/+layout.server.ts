export const load = async () => {
	return {
		mainTitle: 'Accordion',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/accordion/examples'},
			{title: 'Api', key: 'api', path: '/components/accordion/api'},
			{title: 'Playground', key: 'playground', path: '/components/accordion/playground#'},
		],
	};
};
