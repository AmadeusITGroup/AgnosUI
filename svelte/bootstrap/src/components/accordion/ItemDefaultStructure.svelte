<script lang="ts">
	import type {AccordionSlots} from '@agnos-ui/svelte-headless/components/accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = AccordionSlots['itemStructure'];
	type $$Slots = AccordionSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const re = new RegExp('^h[1-6]$');

	$: slotContext = {widget, state};
	$: headingTag = re.test(state.itemHeadingTag) ? state.itemHeadingTag : 'h2';
</script>

<svelte:element this={headingTag} class="accordion-header" use:slotContext.widget.directives.headerDirective>
	<button use:slotContext.widget.directives.buttonDirective class="accordion-button">
		<Slot slotContent={state.slotItemHeader} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="itemHeader" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment slot="itemBody" let:state let:widget><slot name="itemBody" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="itemHeader" let:state let:widget><slot name="itemHeader" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="itemStructure" let:state let:widget><slot name="itemStructure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
		<div class="accordion-body" use:widget.directives.bodyDirective>
			<Slot slotContent={state.slotItemBody} props={slotContext} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="itemBody" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="itemBody" let:state let:widget><slot name="itemBody" {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="itemHeader" let:state let:widget><slot name="itemHeader" {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="itemStructure" let:state let:widget><slot name="itemStructure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		</div>
	</div>
{/if}
