import {listPages} from '$lib/server';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async ({params}) => {
	return {
		includesFwk: true,
		menu: (await listPages()).map((category) => ({
			title: category.name.replace('-', ' '),
			submenu: category.files.map((file) => ({
				label: file.title,
				status: file.status,
				path: `docs/${params.framework}/${file.slug}`,
				subpath: file.subpath,
			})),
		})),
	};
};
