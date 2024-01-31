export const load = async () => {
	return {
		mainTitle: 'Pagination',
		tabs: [
			{title: 'Headless', key: 'headless', path: '/components/pagination/headless'},
			{title: 'Examples', key: 'examples', path: '/components/pagination/examples'},
			{title: 'Api', key: 'api', path: '/components/pagination/api'},
			{title: 'Playground', key: 'playground', path: '/components/pagination/playground'},
		],
		prev: {
			title: 'Modal',
			slug: 'components/modal/',
			subpath: 'examples',
		},
		next: {
			title: 'Progressbar',
			slug: 'components/progressbar/',
			subpath: 'examples',
		},
	};
};
