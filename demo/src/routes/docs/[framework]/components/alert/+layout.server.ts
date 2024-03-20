export const load = async () => {
	return {
		mainTitle: 'Alert',
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/alert/examples'},
			{title: 'Api', key: 'api', path: '/components/alert/api'},
			{title: 'Playground', key: 'playground', path: '/components/alert/playground#{"props":{"slotDefault":"This is an alert"}}'},
		],
		prev: {
			title: 'Accordion',
			slug: 'components/accordion/',
			subpath: 'examples',
		},
		next: {
			title: 'Modal',
			slug: 'components/modal/',
			subpath: 'examples',
		},
		since: '0.1.1',
	};
};
