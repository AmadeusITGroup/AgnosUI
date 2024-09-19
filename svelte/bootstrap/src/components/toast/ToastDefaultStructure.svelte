<script lang="ts">
	import type {ToastContext} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let {state, widget}: ToastContext = $props();
	let slotContext = $derived({widget, state});
</script>

{#if state.header}
	<div class="toast-header">
		<Slot content={state.header} props={slotContext} />
		{#if state.dismissible}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="btn-close me-0 ms-auto" use:widget.directives.closeButtonDirective></button>
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot content={state.children} props={slotContext} />
</div>
{#if state.dismissible && !state.header}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="btn-close btn-close-white me-2 m-auto" use:widget.directives.closeButtonDirective></button>
{/if}
