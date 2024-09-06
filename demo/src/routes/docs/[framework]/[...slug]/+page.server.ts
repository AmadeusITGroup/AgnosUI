import {retrieveMarkdown} from '$lib/server';
import {error} from '@sveltejs/kit';

export const load = ({params}) => {
	const file = retrieveMarkdown(params.slug, params.framework);
	if (!file) error(404);
	else {
		return {
			slug: params.slug,
			...file,
			pageMeta: {
				description: `Documentation for ${params.slug.replace('/', ' ').replace('-', ' ')}`,
			},
		};
	}
};
