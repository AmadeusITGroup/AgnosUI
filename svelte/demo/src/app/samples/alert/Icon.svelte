<script lang="ts">
	import {Slot} from '@agnos-ui/svelte/slot';
	import type {AlertSlots} from '@agnos-ui/svelte/components/alert';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import biDashCircleFill from 'bootstrap-icons/icons/dash-circle-fill.svg?raw';
	import biLightbulb from 'bootstrap-icons/icons/lightbulb.svg?raw';

	type $$Props = AlertSlots['structure'];
	type $$Slots = AlertSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

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
	<Slot slotContent={state.slotDefault} props={{widget, state}} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible}
	<button type="button" class="btn-close ms-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
{/if}
