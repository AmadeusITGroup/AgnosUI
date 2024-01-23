import {listPages} from '$lib/server';

export const load = async ({params}) => {
	return {
		includesFwk: true,
		menu: (await listPages()).map((category) => ({
			title: category.name.replace('-', ' '),
			submenu: category.files.map((file) => ({
				label: file.title,
				path: `docs/${params.framework}/${file.slug}`,
				subpath: file.subpath,
			})),
		})),
	};
};
