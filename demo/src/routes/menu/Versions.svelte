<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import {validate, compare} from 'compare-versions';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import type {Version} from './version';
	import type {DropdownAnchor} from '$lib/layout/dropdown';

	export let versions: Version[];

	interface VersionLink extends DropdownAnchor {
		version: string;
	}

	$: currentVersion = versions.find((version) => version.version === `v${import.meta.env.AGNOSUI_VERSION}`) ?? versions[0];
	let versionsWithUrl: VersionLink[];
	$: versionsWithUrl = versions.map((version) => ({
		tag: 'a',
		id: version.folder,
		version: version.version,
		href:
			version.version === 'PREVIEW' ||
			$page.route.id === '/' ||
			($page.data['since'] && validate($page.data['since']) && compare($page.data['since'], version.version, '<='))
				? $page.url.pathname.replace(`/${currentVersion.folder}/`, `/${version.folder}/`)
				: `${$pathToRoot$.replace(currentVersion.folder, version.folder)}docs/${$selectedFramework$}/getting-started/introduction`,
		isSelected: currentVersion.folder === version.folder,
	}));
	const regexNext = /-next/;
	$: includesNext = !!versions[1]?.version?.match?.(regexNext);
	const versionLabel = (index: number, version: string, withNext: boolean) => {
		if (withNext) {
			if (index === 1) {
				return `Next (${version})`;
			} else {
				return index === 2 ? `Latest (${version})` : version;
			}
		} else {
			return index === 1 ? `Latest (${version})` : version;
		}
	};
</script>

<div class="nav-item">
	<Dropdown
		ariaLabel="select the version of agnosui"
		btnClass="nav-link {currentVersion.version === 'PREVIEW' || currentVersion.folder === 'next' ? 'badge text-bg-warning' : ''}"
		items={versionsWithUrl}
		placement="end"
	>
		<svelte:fragment slot="button">
			{currentVersion.version}
		</svelte:fragment>
		<svelte:fragment slot="item" let:item let:index>
			{versionLabel(index, item.version, includesNext)}
		</svelte:fragment>
	</Dropdown>
</div>
