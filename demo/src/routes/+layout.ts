import {building, dev} from '$app/environment';
import type {Version} from './menu/version';

export const prerender = true;

export const load = async () => {
	let versions: Version[];
	if (dev || building) {
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
	};
};
