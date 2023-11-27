<script lang="ts">
	import menuIcon from '../../../resources/icons/menu.svg?raw';
	import chevronRight from 'bootstrap-icons/icons/chevron-right.svg?raw';
	import Svg from '$lib/layout/Svg.svelte';
	import SideMenu from './SideMenu.svelte';
	import TOC from './TOC.svelte';

	let isMenuExpanded = false;
	let isOnThisPageExpanded = false;
	let dialog: HTMLDialogElement;
	export let isMainPage = true;

	$: dialogTitle = isMenuExpanded ? 'Menu' : isOnThisPageExpanded ? 'On this page' : '';
	$: isOpen = isMenuExpanded || isOnThisPageExpanded;
	$: if (isOpen) {
		dialog?.showModal();
	}

	function onDialogClose() {
		isMenuExpanded = isOnThisPageExpanded = false;
	}

	function onDialogClick(e: any) {
		const tagName = (e.target as HTMLElement).tagName.toLowerCase();
		if (tagName === 'button' || tagName === 'a') {
			dialog.close();
		}
	}
</script>

<div class="d-flex align-items-center justify-content-between">
	<button
		class="text-dark d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"
		aria-expanded={isMenuExpanded}
		on:click={() => {
			isMenuExpanded = true;
		}}
	>
		<Svg svg={menuIcon} className="icon-20 me-1" /><span class="menu-text">Menu</span>
	</button>
	{#if !isMainPage}
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
	{/if}
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={onDialogClose} on:click={onDialogClick}>
	<div class="menu-title text-center border-bottom pb-2">
		<span class="menu-title-text">{dialogTitle}</span>
		<button type="button" class="btn-close pb-3 pe-3" aria-label="Close menu" />
	</div>
	{#if isMenuExpanded}
		<SideMenu />
	{:else}
		<TOC />
	{/if}
</dialog>

<style lang="scss">
	$negativeMargin: -16px;
	$titleHeight: 3rem;

	.menu-title {
		position: sticky;
		top: 0;
		height: $titleHeight;
		background-color: var(--bs-body-bg);
		margin: 0 $negativeMargin 1rem $negativeMargin;
		z-index: 10;
	}

	.menu-title-text {
		line-height: $titleHeight;
	}

	dialog {
		width: 100vw;
		max-width: 100vw;
		height: 100vh;
		height: 100dvh;
		max-height: 100vh;
		position: fixed;
		padding-top: 0;
		top: 0;
		left: 0;
		border: none;
		bottom: 0;
		right: 0;
		background-color: var(--bs-body-bg);
		z-index: 1000;

		:global(.demo-links-link) {
			display: block !important;
		}
	}

	.btn-close {
		position: absolute;
		top: 0.3rem;
		right: 10px;
	}
</style>
