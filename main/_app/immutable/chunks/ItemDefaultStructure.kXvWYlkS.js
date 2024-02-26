const t=`<script lang="ts">
	import type {AccordionSlots} from '@agnos-ui/svelte-headless/components/accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = AccordionSlots['itemStructure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = AccordionSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
	const re = new RegExp('^h[1-6]$');

	$: slotContext = {widget, state};
	$: collapseId = state.itemId + '-collapse';
	$: toggleId = state.itemId + '-toggle';
	$: headingTag = re.test(state.itemHeadingTag) ? state.itemHeadingTag : 'h2';
<\/script>

<svelte:element this={headingTag} class="accordion-header {state.itemHeaderClass}">
	<button
		type="button"
		id={toggleId}
		on:click={widget.actions.click}
		class="accordion-button {state.itemButtonClass}"
		class:collapsed={!state.itemVisible}
		disabled={state.itemDisabled}
		aria-controls={collapseId}
		aria-disabled={state.itemDisabled}
		aria-expanded={state.itemVisible}
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
</svelte:element>
{#if state.shouldBeInDOM}
	<div class="accordion-collapse {state.itemBodyContainerClass}" use:widget.directives.collapseDirective id={collapseId} aria-labelledby={toggleId}>
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
`;export{t as default};
