<script lang="ts" module>
	import Toast from './Toast.svelte';
	import {ToasterService} from '../../services/toasterService.svelte';
	const toaster = new ToasterService();
	const {toasts, addToast, removeToast, options, eventsDirective} = toaster;
	export {addToast};
	export {options as toasterOptions};
</script>

<div class="d-flex mt-2 mr-2 w-100" aria-live="polite" aria-atomic="true">
	<div class={`toast-container p-3 ${options.position}`}>
		{#if options.closeAll && toasts.length > 1}
			<div class="d-flex position-relative align-items-end pb-2">
				<button class="btn btn-secondary me-0 ms-auto pe-auto" on:click={() => toaster.closeAll()}>{options.closeAllLabel || 'Close all'}</button>
			</div>
		{/if}
		{#each toasts as { id, props: { structure, children, header } } (id)}
			<Toast
				autoHide={false}
				dismissible={options.dismissible}
				{eventsDirective}
				{id}
				{structure}
				{children}
				{header}
				onHidden={() => removeToast(id)}
			/>
		{/each}
	</div>
</div>
