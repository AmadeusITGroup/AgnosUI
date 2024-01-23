export const load = async () => {
	return {
		mainTitle: 'Modal',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/modal/examples'},
			{title: 'Api', key: 'api', path: '/components/modal/api'},
			{
				title: 'Playground',
				key: 'playground',
				path: '/components/modal/playground#{"props":{"visible":true,"slotDefault":"Dialog content","slotTitle":"Dialog"}}',
			},
		],
		prev: {
			title: 'Alert',
			slug: 'components/alert/',
			subpath: 'examples',
		},
		next: {
			title: 'Pagination',
			slug: 'components/pagination/',
			subpath: 'examples',
		},
	};
};
