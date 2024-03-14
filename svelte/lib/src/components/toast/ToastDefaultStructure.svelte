<script lang="ts">
	import type {ToastSlots} from '@agnos-ui/svelte-headless/components/toast';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ToastSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ToastSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
</script>

{#if state.slotHeader}
	<div class="toast-header">
		<Slot slotContent={state.slotHeader} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
		{#if state.dismissible}
			<button type="button" class="btn-close me-0 ms-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible && !state.slotHeader}
	<button type="button" class="btn-close btn-close-white me-2 m-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
{/if}
