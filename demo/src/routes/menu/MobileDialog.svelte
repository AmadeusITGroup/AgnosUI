<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		title: string;
		open: boolean;
		children: Snippet;
		onclose: () => void;
	}

	let {title, open, children, onclose}: Props = $props();

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (open) {
			dialog.showModal();
		}
	});

	function onDialogClick(e: any) {
		const tagName = (e.target as HTMLElement).tagName.toLowerCase();
		const btnNoClick =
			(e.target as HTMLElement).className.includes?.('btn-header') || (e.target as HTMLElement).className.includes?.('dropdown-toggle');
		if ((tagName === 'button' && !btnNoClick) || (tagName === 'a' && !(e.target as HTMLElement).className.includes?.('dropdown-item'))) {
			dialog.close();
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} {onclose} onclick={onDialogClick}>
	<div class="menu-title text-center border-bottom pb-2">
		<span class="menu-title-text">{title}</span>
		<button type="button" class="btn-close pb-3 pe-3" aria-label="Close menu"></button>
	</div>
	{@render children()}
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
		view-transition-name: dialog;

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
