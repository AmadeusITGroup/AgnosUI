import {listTypedocPages} from '$lib/api';

export const load = async ({params}) => {
	return {
		includesFwk: true,
		includesPkg: true,
		menu: (await listTypedocPages(params.framework, params.type)).categories.map((category) => ({
			title: category.name.replace('-', ' '),
			path: category.path ? `api/${params.framework}/${params.type}/${category.path}` : undefined,
			submenu: category.files?.map(({path, slug, label}) => ({path, slug, label})),
		})),
		since: 'v0.4.0',
	};
};
