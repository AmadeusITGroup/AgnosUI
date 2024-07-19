import {listPages} from '$lib/server';

export const load = ({params}) => ({
	includesFwk: true,
	menu: listPages().map((category) => ({
		title: category.name.replace('-', ' '),
		submenu: category.files.map((file) => ({
			label: file.title,
			status: file.status,
			path: `docs/${params.framework}/${file.slug}`,
			subpath: file.subpath,
			slug: file.slug,
		})),
	})),
});
