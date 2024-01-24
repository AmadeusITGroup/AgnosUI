<script lang="ts">
	import menuIcon from '$resources/icons/menu.svg?raw';
	import chevronRight from 'bootstrap-icons/icons/chevron-right.svg?raw';
	import Svg from '$lib/layout/Svg.svelte';
	import SideMenu from './SideMenu.svelte';
	import TOC from './TOC.svelte';
	import MobileDialog from './MobileDialog.svelte';

	let isMenuExpanded = false;
	let isOnThisPageExpanded = false;

	$: title = isMenuExpanded ? 'Menu' : isOnThisPageExpanded ? 'On this page' : '';
	$: open = isMenuExpanded || isOnThisPageExpanded;

	function onClose() {
		isMenuExpanded = isOnThisPageExpanded = false;
	}
</script>

<div class="d-flex align-items-center justify-content-between">
	<button
		class="d-md-none text-dark d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"
		aria-expanded={isMenuExpanded}
		on:click={() => {
			isMenuExpanded = true;
		}}
	>
		<Svg svg={menuIcon} className="icon-20 me-1" /><span class="menu-text">Menu</span>
	</button>
	<button
		class="text-dark d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"
		aria-expanded={isOnThisPageExpanded}
		on:click={() => {
			isOnThisPageExpanded = true;
		}}
	>
		<span class="menu-text">On this page</span>
		<Svg svg={chevronRight} className="icon-20 me-1" />
	</button>
</div>

<MobileDialog {title} {open} on:close={onClose}>
	{#if isMenuExpanded}
		<SideMenu />
	{:else}
		<TOC />
	{/if}
</MobileDialog>
