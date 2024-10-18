<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-bootstrap/slot';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import biDashCircleFill from 'bootstrap-icons/icons/dash-circle-fill.svg?raw';
	import biLightbulb from 'bootstrap-icons/icons/lightbulb.svg?raw';
	import type {AlertContext} from '@agnos-ui/svelte-bootstrap/components/alert';

	let widget: AlertContext = $props();
	let state = widget.state;

	const typeIcon: Record<string, string> = {
		success: biCheckCircleFill,
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
		danger: biDashCircleFill,
		light: biLightbulb,
	};
</script>

<span class="d-flex me-2">{@html typeIcon[state.type]}</span>
<div class="alert-body">
	<Slot content={state.children} props={widget} />
</div>
{#if state.dismissible}
	<button type="button" class="btn-close ms-auto" onclick={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel}></button>
{/if}
