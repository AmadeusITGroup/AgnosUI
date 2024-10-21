<script lang="ts">
	import menuIcon from '$resources/icons/menu.svg?raw';
	import chevronRight from 'bootstrap-icons/icons/chevron-right.svg?raw';
	import Svg from '$lib/layout/Svg.svelte';
	import SideMenu from './SideMenu.svelte';
	import TOC from './TOC.svelte';
	import MobileDialog from './MobileDialog.svelte';

	let isMenuExpanded = $state(false);
	let isOnThisPageExpanded = $state(false);

	let title = $derived(isMenuExpanded ? 'Menu' : isOnThisPageExpanded ? 'On this page' : '');
	let open = $derived(isMenuExpanded || isOnThisPageExpanded);

	function onclose() {
		isMenuExpanded = isOnThisPageExpanded = false;
	}
</script>

<div class="d-flex align-items-center justify-content-between">
	<button
		class="d-md-none text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"
		aria-expanded={isMenuExpanded}
		onclick={() => {
			isMenuExpanded = true;
		}}
	>
		<Svg svg={menuIcon} className="icon-20 me-1" /><span class="menu-text">Menu</span>
	</button>
	<button
		class="text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"
		aria-expanded={isOnThisPageExpanded}
		onclick={() => {
			isOnThisPageExpanded = true;
		}}
	>
		<span class="menu-text">On this page</span>
		<Svg svg={chevronRight} className="icon-20 me-1" />
	</button>
</div>

<MobileDialog {title} {open} {onclose}>
	{#if isMenuExpanded}
		<SideMenu />
	{:else}
		<TOC />
	{/if}
</MobileDialog>
