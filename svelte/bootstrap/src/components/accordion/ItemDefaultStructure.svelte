<script lang="ts">
	import type {AccordionItemContext, AccordionItemSlots} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = AccordionItemContext;
	type $$Slots = AccordionItemSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const re = new RegExp('^h[1-6]$');

	$: slotContext = {widget, state};
	$: headingTag = re.test(state.headingTag) ? state.headingTag : 'h2';
</script>

<svelte:element this={headingTag} class="accordion-header" use:slotContext.widget.directives.headerDirective>
	<button use:slotContext.widget.directives.buttonDirective class="accordion-button">
		<Slot slotContent={state.header} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse" use:widget.directives.bodyContainerDirective>
		<div class="accordion-body" use:widget.directives.bodyDirective>
			<Slot slotContent={state.children} props={slotContext} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		</div>
	</div>
{/if}
