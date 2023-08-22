<script context="module" lang="ts">
	import Slot from '../slot/Slot.svelte';
	import {getAccordionApi} from './accordion';
	import type {AccordionItemProps as Props, AccordionSlots as Slots} from './accordion';

	import type {WidgetPropsProps, WidgetPropsEvents} from '../utils';
	import {createEventDispatcher, callWidgetFactory} from '../utils';
	import {toSlotContextWidget} from '@agnos-ui/core';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotItemStructure: ItemDefaultStructure,
	};
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;
	export let itemCollapsed: boolean | undefined = undefined;
	const widget = callWidgetFactory(registerItem, null, $$slots, defaultConfig);
	const {
		stores: {itemId$, itemClass$, slotItemStructure$},
		directives: {accordionItemDirective},
		state$,
	} = widget;

	widget.patch({
		onItemCollapsedChange: (event) => {
			itemCollapsed = event;
			dispatch('itemCollapsedChange', event);
		},
		onItemHidden: () => dispatch('itemHidden'),
		onItemShown: () => dispatch('itemShown'),
	});

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};

	onMount(() => {
		widget.api.initDone();
	});
</script>

<div class="accordion-item {$itemClass$}" id={$itemId$} use:accordionItemDirective>
	<Slot slotContent={$slotItemStructure$} props={slotContext} let:component let:props>
		<slot slot="slot" name="itemStructure" let:props {...props} />
		<svelte:component this={component} {...props}>
			<slot name="itemBody" slot="itemBody" let:state let:widget {state} {widget} />
			<slot name="itemHeader" slot="itemHeader" let:state let:widget {state} {widget} />
			<slot name="itemStructure" slot="itemStructure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
