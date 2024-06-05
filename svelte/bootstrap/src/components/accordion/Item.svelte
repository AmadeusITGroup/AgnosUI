<script context="module" lang="ts">
	import type {AccordionItemApi, AccordionItemProps, AccordionItemWidget, AccordionItemSlots} from './accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const defaultConfig: Partial<AccordionItemProps> = {
		structure: ItemDefaultStructure,
	};
</script>

<script lang="ts">
	type $$Props = Partial<AccordionItemProps>;
	type $$Slots = AccordionItemSlots;

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;
	export let visible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		$$slots,
		$$props,
		defaultConfig,
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	const {
		stores: {structure$},
		directives: {itemDirective},
		state$,
	} = widget;
	export const api: AccordionItemApi = widget.api;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget: toSlotContextWidget(widget), state: $state$};

	onMount(() => {
		widget.api.initDone();
	});
</script>

<div class="accordion-item" use:itemDirective>
	<Slot slotContent={$structure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
