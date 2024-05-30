import {componentsMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...componentsMetadata.Modal,
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/modal/examples'},
			{title: 'Api', key: 'api', path: '/components/modal/api'},
			{
				title: 'Playground',
				key: 'playground',
				path: '/components/modal/playground#{"props":{"visible":true,"children":"Dialog content","slotTitle":"Dialog"}}',
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
