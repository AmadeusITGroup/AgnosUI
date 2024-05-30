<script lang="ts">
	import type {AccordionItemApi, AccordionItemProps, AccordionItemWidget} from './accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;

	let {itemVisible = $bindable(), ...props}: Partial<AccordionItemProps> = $props();
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		props: {...props, itemVisible},
		defaultConfig: {slotItemStructure},
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

	$effect(() => widget.patchChangedProps({...props, itemVisible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});

	onMount(() => {
		widget.api.initDone();
	});
</script>

{#snippet slotItemStructure(props)}
	<ItemDefaultStructure {...props} />
{/snippet}

<div class="accordion-item" use:accordionItemDirective>
	<Slot content={$slotItemStructure$} props={slotContext} />
</div>
