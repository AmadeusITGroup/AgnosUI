import {componentsMetadata} from '$lib/components-metadata';

export const load = async ({params}) => {
	const componentCapitalized = params.component.slice(0, 1).toUpperCase() + params.component.slice(1);
	const componentNames = Object.keys(componentsMetadata);
	const index = componentNames.indexOf(componentCapitalized);
	const isFirst = index === 0;
	const isLast = index === componentNames.length - 1;

	return {
		...componentsMetadata[componentCapitalized],
		tabs: [
			{title: 'Examples', key: 'examples', path: `/components/${params.component}/examples`},
			{title: 'Api', key: 'api', path: `/components/${params.component}/api`},
			{title: 'Playground', key: 'playground', path: `/components/${params.component}/playground#`},
		],
		prev: {
			title: isFirst ? 'Bootstrap Components: Introduction' : componentNames[index - 1],
			slug: isFirst ? 'bootstrap-components/introduction' : `components/${componentNames[index - 1].toLowerCase()}/`,
			subpath: isFirst ? undefined : 'examples',
		},
		next: {
			title: isLast ? 'Services: Introduction' : componentNames[index + 1],
			slug: isLast ? 'services/introduction' : `components/${componentNames[index + 1].toLowerCase()}/`,
			subpath: isLast ? undefined : 'examples',
		},
	};
};
