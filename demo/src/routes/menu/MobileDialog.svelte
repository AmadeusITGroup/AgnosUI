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
		/* to avoid the dialog to close when we try to expand the menu */
		const btnNoClick = (e.target as HTMLElement).className.includes?.('dropdown-toggle');
		if ((tagName === 'button' && !btnNoClick) || (tagName === 'a' && !(e.target as HTMLElement).className.includes?.('dropdown-item'))) {
			dialog.close();
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} {onclose} onclick={onDialogClick} class="modal items-start bg-base-100">
	<div class="mb-4 text-center p-0 modal-box h-full max-h-full w-full max-w-full rounded-none">
		<div class="h-12 relative border-b-1 border-gray-200">
			<span class="menu-title text-base-content top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</span>
			<!-- I added hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle! because the dark:hover:text-primary is not working, why ? -->
			<button
				type="button"
				class="btn btn-sm btn-circle btn-ghost absolute right-4 top-2 hover:bg-secondary-subtle! focus-visible:bg-secondary-subtle!"
				aria-label="Close dialog">✕</button
			>
		</div>
		<div class="text-start p-2">
			{@render children()}
		</div>
	</div>
</dialog>

<style>
</style>
