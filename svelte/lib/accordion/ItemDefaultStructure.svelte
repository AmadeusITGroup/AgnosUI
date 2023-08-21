<script lang="ts">
	import Slot from '../slot/Slot.svelte';
	import type {AccordionSlots} from './accordion';
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = AccordionSlots['itemStructure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = AccordionSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	$: slotContext = {widget, state};
	$: collapseId = state.itemId + '-collapse';
	$: toggleId = state.itemId + '-toggle';
</script>

<h2 class="accordion-header {state.itemHeaderClass}">
	<button
		type="button"
		id={toggleId}
		on:click={widget.actions.click}
		class="accordion-button {state.itemButtonClass}"
		class:collapsed={state.itemCollapsed}
		disabled={state.itemDisabled}
		aria-controls={collapseId}
		aria-disabled={state.itemDisabled}
		aria-expanded={!state.itemCollapsed}
	>
		<Slot slotContent={state.slotItemHeader} props={slotContext} let:component let:props>
			<slot slot="slot" name="itemHeader" let:props {...props} />
			<svelte:component this={component} {...props}>
				<slot name="itemBody" slot="itemBody" let:state let:widget {state} {widget} />
				<slot name="itemHeader" slot="itemHeader" let:state let:widget {state} {widget} />
				<slot name="itemStructure" slot="itemStructure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</button>
</h2>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse {state.itemCollapseClass}" use:widget.directives.collapseDirective id={collapseId} aria-labelledby={toggleId}>
		<div class="accordion-body {state.itemBodyClass}">
			<Slot slotContent={state.slotItemBody} props={slotContext} let:component let:props>
				<slot slot="slot" name="itemBody" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="itemBody" slot="itemBody" let:state let:widget {state} {widget} />
					<slot name="itemHeader" slot="itemHeader" let:state let:widget {state} {widget} />
					<slot name="itemStructure" slot="itemStructure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot>
		</div>
	</div>
{/if}
