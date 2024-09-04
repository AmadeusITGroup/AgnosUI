import {daisyUIMetadata} from '$lib/components-metadata';

export const load = async ({params}) => {
	const componentCapitalized = params.component.slice(0, 1).toUpperCase() + params.component.slice(1);
	const componentNames = Object.keys(daisyUIMetadata);
	const index = componentNames.indexOf(componentCapitalized);
	const isFirst = index === 0;
	const isLast = index === componentNames.length - 1;

	return {
		...daisyUIMetadata[componentCapitalized],
		tabs: [
			{title: 'Examples', key: 'headless', path: `/daisyUI/${params.component}/headless`},
			{title: 'Api', key: 'api', path: `/daisyUI/${params.component}/api`},
		],
		prev: {
			title: isFirst ? 'Headless Components: Introduction' : componentNames[index - 1],
			slug: isFirst ? 'headless-components/introduction' : `daisyUI/${componentNames[index - 1].toLowerCase()}/`,
			subpath: isFirst ? undefined : 'headless',
		},
		next: {
			title: isLast ? 'Bootstrap Components: Introduction' : componentNames[index + 1],
			slug: isLast ? 'bootstrap-components/introduction' : `daisyUI/${componentNames[index + 1].toLowerCase()}/`,
			subpath: isLast ? undefined : 'headless',
		},
	};
};