<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import type {ToastContext} from '@agnos-ui/svelte-bootstrap/components/toast';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg?raw';

	let {state, widget}: ToastContext = $props();

	function actionDemo() {
		window.alert('Undo');
	}
</script>

<div class="d-flex w-100">
	<div class="d-flex align-items-center flex-grow-1 toast-body">
		<span class="d-flex me-2">{@html biCheckCircleFill}</span>
		<Slot content={state.children} props={{widget, state}} />
		<button type="button" class="btn btn-sm ms-auto text-bg-success" onclick={actionDemo}>
			<span class="me-2">{@html biArrowCounterClockwise}</span>Undo
		</button>
	</div>
	{#if state.dismissible}
		<button type="button" class="btn-close btn-close-white me-2 m-auto" onclick={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel}
		></button>
	{/if}
</div>
