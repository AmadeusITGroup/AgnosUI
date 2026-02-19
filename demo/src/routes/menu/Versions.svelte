<script lang="ts">
	import {page} from '$app/state';
	import {routing} from '$lib/routing.svelte';
	import {validate, compare} from 'compare-versions';
	import type {Version} from './version';
	import type {DropdownAnchor} from '$lib/layout/dropdown';
	import DropdownDaisyUI from '$lib/layout/DropdownDaisyUI.svelte';

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

<li>
	<DropdownDaisyUI
		ariaLabel="select the version of agnosui"
		btnClass="hover:bg-secondary-subtle focus-visible:bg-secondary-subtle! active:bg-secondary-subtle! active:text-base-content! {currentVersion.version ===
			'PREVIEW' || currentVersion.folder === 'next'
			? 'btn btn-warning btn-xs active:bg-secondary-subtle!'
			: ''}"
		dropdownClass=""
		dropdownContentClass="bg-base-100 p-2 right-0"
		items={versionsWithUrl}
	>
		{#snippet buttonSnip()}
			{currentVersion.version}
		{/snippet}
		{#snippet itemSnip(item, index)}
			{versionLabel(index, item.version, includesNext)}
		{/snippet}
	</DropdownDaisyUI>
</li>
