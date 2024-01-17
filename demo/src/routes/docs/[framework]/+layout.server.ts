import {listSections} from '$lib/server';

export const load = async ({params}) => {
	return {
		includesFwk: true,
		menu: [
			{
				title: 'Getting started',
				submenu: (await listSections('getting-started')).map((file) => ({
					label: file.title,
					path: `docs/${params.framework}/getting-started/${file.name}`,
					subpath: '',
				})),
			},
			{
				title: 'Components',
				submenu: [
					{label: 'Accordion', path: `docs/${params.framework}/components/accordion/`, subpath: 'examples'},
					{label: 'Alert', path: `docs/${params.framework}/components/alert/`, subpath: 'examples'},
					{label: 'Modal', path: `docs/${params.framework}/components/modal/`, subpath: 'examples'},
					{label: 'Pagination', path: `docs/${params.framework}/components/pagination/`, subpath: 'examples'},
					{label: 'Progressbar', path: `docs/${params.framework}/components/progressbar/`, subpath: 'examples'},
					{label: 'Rating', path: `docs/${params.framework}/components/rating/`, subpath: 'examples'},
					{label: 'Select', path: `docs/${params.framework}/components/select/`, subpath: 'examples'},
					{label: 'Slider', path: `docs/${params.framework}/components/slider/`, subpath: 'examples'},
				],
			},
			{
				title: 'Services',
				submenu: (await listSections('services')).map((file) => ({
					label: file.title,
					path: `docs/${params.framework}/services/${file.name}`,
					subpath: '',
				})),
			},
		],
	};
};
