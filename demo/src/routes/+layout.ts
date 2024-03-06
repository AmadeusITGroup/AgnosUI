import {building, dev} from '$app/environment';
import type {Version} from './menu/Versions.svelte';

export const prerender = true;

export const load = async () => {
	let versions: Version[];
	if (dev || building) {
		versions = [
			{folder: 'main', version: 'PREVIEW'},
			{folder: 'latest', version: `v${import.meta.env.AGNOSUI_VERSION}`},
		];
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
