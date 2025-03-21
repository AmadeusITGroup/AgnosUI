<script lang="ts" module>
	const toaster = new ToasterService();
	const {addToast, removeToast, closeAll, eventsDirective} = toaster;
	export {addToast, removeToast, closeAll};
</script>

<script lang="ts">
	import Toast from './Toast.svelte';
	import {toastPositions, type ToasterProps} from './toast.gen';
	import {ToasterService} from './toasterService';
	let {duration, position, limit, pauseOnHover, dismissible, closeAll, closeAllLabel}: ToasterProps = $props();
	$effect(() => {
		toaster.options.current = {duration, position, limit, pauseOnHover, dismissible, closeAll, closeAllLabel};
	});
</script>

<div class="au-toaster" aria-live="polite" aria-atomic="true">
	<div class={`au-toaster-container toast-container ${toastPositions[toaster.options.current.position]}`}>
		{#if toaster.options.current.closeAll && toaster.toasts.current.length > 1}
			<div class="d-flex position-relative align-items-end pb-2">
				<button class="au-toaster-closeAll btn btn-secondary me-0 ms-auto pe-auto" onclick={() => toaster.closeAll()}
					>{toaster.options.current.closeAllLabel || 'Close all'}</button
				>
			</div>
		{/if}
		{#each toaster.toasts.current as { id, props: { className, visible, structure, children, header, dismissible, ariaCloseButtonLabel, animated, animatedOnInit, onShown, onHidden, onVisibleChange, transition } } (id)}
			<div use:eventsDirective={id}>
				<Toast
					{animated}
					{animatedOnInit}
					autoHide={false}
					{className}
					dismissible={dismissible ?? toaster.options.current.dismissible}
					{ariaCloseButtonLabel}
					{structure}
					{children}
					{header}
					{onShown}
					onHidden={() => {
						removeToast(id);
						onHidden?.();
					}}
					{onVisibleChange}
					{visible}
					{transition}
				/>
			</div>
		{/each}
	</div>
</div>
