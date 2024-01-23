export const load = async () => {
	return {
		mainTitle: 'Slider',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/slider/examples'},
			{title: 'Api', key: 'api', path: '/components/slider/api'},
			{title: 'Playground', key: 'playground', path: '/components/slider/playground'},
		],
		prev: {
			title: 'Select',
			slug: 'components/select/',
			subpath: 'examples',
		},
		next: {
			title: 'Services: Introduction',
			slug: 'services/introduction',
			subpath: '',
		},
	};
};
