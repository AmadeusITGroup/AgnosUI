<script context="module" lang="ts">
	import type {AccordionItemProps as Props, AccordionSlots as Slots} from '@agnos-ui/svelte-headless/components/accordion';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const defaultConfig: Partial<Props> = {
		slotItemStructure: ItemDefaultStructure,
	};
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;
	export let itemVisible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: registerItem,
		$$slots,
		defaultConfig,
		events: {
			onItemVisibleChange: (event) => {
				itemVisible = event;
			},
		},
	});
	const {
		stores: {itemId$, itemClass$, slotItemStructure$},
		directives: {accordionItemDirective},
		state$,
	} = widget;
	export const api = widget.api;

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
