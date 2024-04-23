<script lang="ts">
	import type {AlertContext, AlertSlots} from './alert';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = AlertContext;
	type $$Slots = AlertSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
</script>

<div class="alert-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible}
	<button type="button" class="btn-close" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
{/if}
