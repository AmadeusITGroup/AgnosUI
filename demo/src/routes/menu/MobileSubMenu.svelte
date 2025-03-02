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

<div class="flex items-center justify-between">
	<button
		class="md:hidden text-dark-emphasis flex items-center btn btn-link link-hover"
		aria-expanded={isMenuExpanded}
		onclick={() => {
			isMenuExpanded = true;
		}}
	>
		<Svg svg={menuIcon} className="icon-20 me-1" /><span class="menu-text">Menu</span>
	</button>
	<button
		class="text-dark-emphasis flex items-center btn btn-link link-hover m-1"
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
