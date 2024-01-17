export const load = async () => {
	return {
		mainTitle: 'Rating',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/rating/examples'},
			{title: 'Api', key: 'api', path: '/components/rating/api'},
			{title: 'Playground', key: 'playground', path: '/components/rating/playground'},
		],
	};
};
