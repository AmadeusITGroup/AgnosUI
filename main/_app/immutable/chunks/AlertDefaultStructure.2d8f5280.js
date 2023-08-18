const t=`<script lang="ts">
	import Slot from '../slot/Slot.svelte';
	import type {AlertSlots} from './alert';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = AlertSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = AlertSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
<\/script>

<div class="alert-body">
	<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
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
