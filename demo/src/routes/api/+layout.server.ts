import {glob} from 'glob';

const titleRegex = /^_agnos_ui_[^.]+\.([^.]+)\.html$/;

export const load = async ({params}) => {
	const menu: {title: string; submenu: {label: string; path: string; subpath: string}[]}[] = [];
	const prefix = params.package === 'core' ? 'core' : params.framework + (params.framework === 'headless' ? '_headless' : '');
	for (const type of ['functions', 'classes', 'interfaces', 'types', 'variables']) {
		const submenu = (await glob(`_agnos_ui_${prefix}.*.html`, {cwd: `generated/typedoc/${type}`})).map((file) => {
			const match = file.match(titleRegex);
			const label = (match![1] as string).replace('_', '-');
			return {
				label,
				path: `api/${params.framework}/${params.package}/${type}/${label}`,
				subpath: '',
			};
		});
		submenu.sort((a, b) => a.label.localeCompare(b.label));
		if (submenu.length) {
			menu.push({
				title: type.substring(0, 1).toUpperCase() + type.substring(1),
				submenu,
			});
		}
	}
	return {
		// TODO change API to the correct title
		mainTitle: 'API',
		includesFwk: true,
		includesPkg: true,
		menu,
	};
};
