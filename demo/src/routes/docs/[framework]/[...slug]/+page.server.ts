import {retrieveMarkdown} from '$lib/server';
import {error} from '@sveltejs/kit';

export const load = async ({params}) => {
	const file = await retrieveMarkdown(params.slug, params.framework);
	if (!file) error(404);
	else {
		return {
			slug: params.slug,
			...file,
		};
	}
};
