export const load = async () => {
	return {
		mainTitle: 'Select',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/select/examples'},
			{title: 'Api', key: 'api', path: '/components/select/api'},
			{title: 'Playground', key: 'playground', path: '/components/select/playground'},
		],
	};
};
