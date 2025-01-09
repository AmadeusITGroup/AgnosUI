<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import {validate, compare} from 'compare-versions';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import type {Version} from './version';
	import type {DropdownAnchor} from '$lib/layout/dropdown';

	let {versions}: {versions: Version[]} = $props();

	interface VersionLink extends DropdownAnchor {
		version: string;
	}

	let currentVersion = $derived(versions.find((version) => version.version === `v${import.meta.env.AGNOSUI_VERSION}`) ?? versions[0]);
	let versionsWithUrl: VersionLink[] = $derived(
		versions.map((version) => ({
			tag: 'a',
			id: version.folder,
			version: version.version,
			href:
				version.version === 'PREVIEW' ||
				page.route.id === '/' ||
				(page.data['since'] && validate(page.data['since']) && compare(page.data['since'], version.version, '<='))
					? page.url.pathname.replace(`/${currentVersion.folder}/`, `/${version.folder}/`)
					: `${routing.pathToRoot.replace(currentVersion.folder, version.folder)}docs/${routing.selectedFramework}/getting-started/introduction`,
			isSelected: currentVersion.folder === version.folder,
		})),
	);
	const regexNext = /-next/;
	let includesNext = $derived(!!versions[1]?.version?.match?.(regexNext));
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
		{#snippet buttonSnip()}
			{currentVersion.version}
		{/snippet}
		{#snippet itemSnip(item, index)}
			{versionLabel(index, item.version, includesNext)}
		{/snippet}
	</Dropdown>
</div>
