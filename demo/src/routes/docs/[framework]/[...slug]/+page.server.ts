import {retrieveMarkdown} from '$lib/server';
import {error} from '@sveltejs/kit';

export const load = async ({params}) => {
	const source = await retrieveMarkdown(params.slug);
	if (!source) error(404);
	else {
		return {
			source,
			slug: params.slug,
		};
	}
};
