<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte-headless';
	import {Slot} from '@agnos-ui/svelte-headless';
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ModalSlots['header']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ModalSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};
</script>

<h5 class="modal-title">
	<Slot slotContent={state.slotTitle} props={slotContext} let:component let:props>
		<slot slot="slot" name="title" let:props {...props} />
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<slot name="footer" slot="footer" let:state let:widget {state} {widget} />
			<slot name="header" slot="header" let:state let:widget {state} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			<slot name="title" slot="title" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</h5>
{#if state.closeButton}
	<button type="button" class="btn-close" aria-label={state.ariaCloseButtonLabel} on:click={widget.actions.closeButtonClick} />
{/if}
