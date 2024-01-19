<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	export let title: string;
	export let open: boolean;

	const dispatch = createEventDispatcher<{
		close: null; // does not accept a payload
	}>();

	let dialog: HTMLDialogElement;

	$: if (open) {
		dialog?.showModal();
	}

	function onDialogClick(e: any) {
		const tagName = (e.target as HTMLElement).tagName.toLowerCase();
		if (tagName === 'button' || tagName === 'a') {
			dialog.close();
		}
	}
	function onDialogClose() {
		dispatch('close');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={onDialogClose} on:click={onDialogClick}>
	<div class="menu-title text-center border-bottom pb-2">
		<span class="menu-title-text">{title}</span>
		<button type="button" class="btn-close pb-3 pe-3" aria-label="Close menu" />
	</div>
	<slot />
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
