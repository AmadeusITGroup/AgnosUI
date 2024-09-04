import {retrieveMarkdown} from '$lib/api';
import {error} from '@sveltejs/kit';

export const load = async ({params}) => {
	const file = import.meta.env.API
		? await retrieveMarkdown(params.framework, 'bootstrap', `components/${params.component}`, false)
		: {
				content: [{source: 'Run local server with the command `npm run dev:api` to see this page.', name: ''}],
			};

	if (!file) error(404);
	else {
		return {
			component: params.component,
			...file,
			title: params.component.slice(0, 1).toUpperCase() + params.component.slice(1),
			pageMeta: {
				description: `API Documentation for ${params.component}`,
			},
		};
	}
};
