import {retrieveMarkdown} from '$lib/server';
import {error} from '@sveltejs/kit';

export const load = async ({params}) => {
	const file = await retrieveMarkdown(params.slug);
	if (!file) error(404);
	else {
		return {
			content: file.content,
			prev: file.prev,
			next: file.next,
			slug: params.slug,
		};
	}
};
