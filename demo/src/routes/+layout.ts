import type {Version} from './menu/version';

export const prerender = true;

export const load = async ({url}) => {
	let versions: Version[];
	if (!url.href.startsWith('https://www.agnosui.dev/')) {
		versions = [{folder: 'main', version: 'PREVIEW'}];
		if (import.meta.env.AGNOSUI_VERSION !== '0.0.0') {
			versions.push({folder: 'latest', version: `v${import.meta.env.AGNOSUI_VERSION}`});
		}
	} else {
		const versionFetch = await fetch('https://www.agnosui.dev/versions.json');
		versions = [{folder: 'main', version: 'PREVIEW'}].concat(
			(await versionFetch.json()).map((ver: Version) => {
				return {...ver, version: `v${ver.version}`};
			}),
		);
		if (versions[1].version.match(/-next/)) {
			versions[1].folder = 'next';
			versions[2].folder = 'latest';
		} else {
			versions[1].folder = 'latest';
		}
	}
	return {
		versions,
		pageMeta: {
			title: 'AgnosUI - Where components shine',
			description:
				'Perfected component library for Svelte, React and Angular. Reactive and accessible, supports headless or Bootstrap. Providing: accordion, alert, carousel, collapse, modal, pagination, progressbar, rating, select, slider, toast, tree, focus track, tooltip, pop-over, transition.',
			socialImage: 'https://www.agnosui.dev/latest/agnosui-logo.png',
			socialImageAlt: 'Icon of AgnosUI',
			shareUrl: 'https://www.agnosui.dev/latest/',
		},
	};
};
