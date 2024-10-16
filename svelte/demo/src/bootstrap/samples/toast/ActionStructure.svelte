<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg?raw';
	import type {ToastContext} from '@agnos-ui/svelte-bootstrap/components/toast';

	let {state, api, ...restProps}: ToastContext = $props();
	let slotContext = $derived({state, api, ...restProps});
</script>

<div class="d-flex w-100">
	<div class="d-flex align-items-center flex-grow-1 toast-body">
		<span class="d-flex me-2">{@html biCheckCircleFill}</span>
		<Slot content={state.children} props={slotContext} />
		<button type="button" class="btn btn-sm ms-auto text-bg-success" onclick={() => window.alert('Undo')}>
			<span class="me-2">{@html biArrowCounterClockwise}</span>Undo
		</button>
	</div>
	{#if state.dismissible}
		<button type="button" class="btn-close btn-close-white me-2 m-auto" onclick={() => api.close()} aria-label={state.ariaCloseButtonLabel}></button>
	{/if}
</div>
