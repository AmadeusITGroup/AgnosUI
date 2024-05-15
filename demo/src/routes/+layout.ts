import {building, dev} from '$app/environment';
import type {LayoutLoad} from './$types';
import type {Version} from './menu/version';

export const prerender = true;

export const load: LayoutLoad = async () => {
	let versions: Version[];
	if (dev || building) {
		versions = [{folder: 'main', version: 'PREVIEW'}];
		if (import.meta.env.AGNOSUI_VERSION !== '0.0.0') {
			versions.push({folder: 'latest', version: `v${import.meta.env.AGNOSUI_VERSION}`});
		}
	} else {
		const versionFetch = await fetch('https://amadeusitgroup.github.io/AgnosUI/versions.json');
		versions = [{folder: 'main', version: 'PREVIEW'}].concat(
			(await versionFetch.json()).map((ver: Version) => {
				return {...ver, version: `v${ver.version}`};
			}),
		);
		versions[1].folder = 'latest';
	}
	return {
		versions,
	};
};
