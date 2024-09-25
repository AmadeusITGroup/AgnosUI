import {componentsMetadata} from '$lib/components-metadata';
import type {WidgetsConfig} from '@agnos-ui/svelte-bootstrap/config';

export function getMenu(component: string) {
	const componentCapitalized = (component.slice(0, 1).toUpperCase() + component.slice(1)) as Capitalize<keyof WidgetsConfig>;
	const componentNames = Object.keys(componentsMetadata);
	const index = componentNames.indexOf(componentCapitalized);
	const isFirst = index === 0;
	const isLast = index === componentNames.length - 1;

	const componentMetadata = componentsMetadata[componentCapitalized];

	return {
		title: componentMetadata.title,
		status: componentMetadata.status,
		since: componentMetadata.since,
		type: componentMetadata.type,
		tabs: [
			{title: 'Examples', key: 'examples', path: `/components/${component}/examples`},
			{title: 'Api', key: 'api', path: `/components/${component}/api`},
			...(componentMetadata.includeStyles ? [{title: 'Styling', key: 'style', path: `/components/${component}/style`}] : []),
			/** TODO show Playground tab again when we have finished building it
			{
				title: 'Playground',
				key: 'playground',
				path: `/components/${component}/playground${componentMetadata.playgroundProps ? `#${JSON.stringify({props: componentMetadata.playgroundProps})}` : ''}`,
			},
			 */
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
}
