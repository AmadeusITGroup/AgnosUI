import {componentsMetadata} from '$lib/components-metadata';

export const load = async () => {
	return {
		...componentsMetadata.Toast,
		tabs: [
			{title: 'Examples', key: 'examples', path: '/components/toast/examples'},
			{title: 'Api', key: 'api', path: '/components/toast/api'},
			{
				title: 'Playground',
				key: 'playground',
				path: '/components/toast/playground#{"props":{"children":"This is a toast","autoHide":false,"className":"text-bg-primary"}}',
			},
		],
		prev: {
			title: 'Slider',
			slug: 'components/slider/',
			subpath: 'examples',
		},
		next: {
			title: 'Services: Introduction',
			slug: 'services/introduction',
			subpath: '',
		},
	};
};
