export const load = async () => {
	return {
		mainTitle: 'Slider',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/slider/examples'},
			{title: 'Api', key: 'api', path: '/components/slider/api'},
			{title: 'Playground', key: 'playground', path: '/components/slider/playground'},
		],
	};
};
