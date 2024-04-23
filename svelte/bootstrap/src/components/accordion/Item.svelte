<script context="module" lang="ts">
	import type {AccordionItemApi, AccordionItemProps, AccordionSlots} from './accordion';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const defaultConfig: Partial<AccordionItemProps> = {
		slotItemStructure: ItemDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<AccordionItemProps>;
	type $$Slots = AccordionSlots;

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;
	export let itemVisible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: registerItem,
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onItemVisibleChange: (event) => {
				itemVisible = event;
			},
		},
	});
	const {
		stores: {slotItemStructure$},
		directives: {accordionItemDirective},
		state$,
	} = widget;
	export const api: AccordionItemApi = widget.api;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};

	onMount(() => {
		widget.api.initDone();
	});
</script>

<div class="accordion-item" use:accordionItemDirective>
	<Slot slotContent={$slotItemStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="itemStructure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="itemBody" let:state let:widget><slot name="itemBody" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="itemHeader" let:state let:widget><slot name="itemHeader" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="itemStructure" let:state let:widget><slot name="itemStructure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
