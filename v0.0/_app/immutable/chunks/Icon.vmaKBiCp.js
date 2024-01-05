const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte/slot';
	import type {AlertSlots} from '@agnos-ui/svelte/components/alert';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
	import biDashCircleFill from 'bootstrap-icons/icons/dash-circle-fill.svg?raw';
	import biLightbulb from 'bootstrap-icons/icons/lightbulb.svg?raw';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = AlertSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = AlertSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	const typeIcon: Record<string, string> = {
		success: biCheckCircleFill,
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
		danger: biDashCircleFill,
		light: biLightbulb,
	};
<\/script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<span class="d-flex me-2">{@html typeIcon[state.type]}</span>
<div class="alert-body">
	<Slot slotContent={state.slotDefault} props={{widget, state}} let:component let:props>
		<slot slot="slot" let:props {...props} />
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible}
	<button type="button" class="btn-close ms-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
{/if}
`;export{t as default};
