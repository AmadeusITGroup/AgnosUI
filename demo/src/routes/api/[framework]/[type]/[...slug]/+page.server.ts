import {retrieveMarkdown} from '$lib/api';
import {redirect} from '@sveltejs/kit';

export const entries = () => [
	{framework: 'angular', type: 'headless', slug: 'types'},
	{framework: 'react', type: 'headless', slug: 'types'},
	{framework: 'svelte', type: 'headless', slug: 'types'},
	{framework: 'typescript', type: 'headless', slug: 'types'},
	{framework: 'angular', type: 'bootstrap', slug: 'types'},
	{framework: 'react', type: 'bootstrap', slug: 'types'},
	{framework: 'svelte', type: 'bootstrap', slug: 'types'},
	{framework: 'typescript', type: 'bootstrap', slug: 'types'},
];

export const load = async ({params}) => {
	const file = import.meta.env.API
		? await retrieveMarkdown(params.framework, params.type, params.slug)
		: {
				content: [{source: 'Run local server with the command `dev:api` to see this page.', name: ''}],
				title: 'invalid usecase',
			};
	if (!file) redirect(307, `${params.slug.includes('/') ? '../'.repeat(params.slug.replace(/[^/]/g, '').length) : './'}types`);
	else {
		return {
			slug: params.slug,
			...file,
		};
	}
};
