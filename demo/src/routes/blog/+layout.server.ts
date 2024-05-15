import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = () => ({
	menu: [
		{
			title: 'News 2024',
			submenu: [{label: 'State management with Tansu', path: 'blog/2024-02-01', subpath: ''}],
		},
	],
	since: 'v0.1.1',
});
