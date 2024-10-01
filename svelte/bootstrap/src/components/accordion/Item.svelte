<script lang="ts">
	import type {AccordionItemApi, AccordionItemContext, AccordionItemProps, AccordionItemWidget} from './accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {toSlotContextWidget} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;

	let {visible = $bindable(), ...props}: Partial<AccordionItemProps> = $props();
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		props: {...props, visible},
		defaultConfig: {structure},
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

	$effect(() => widget.patchChangedProps({...props, visible}));
	let slotContext = $derived({widget: toSlotContextWidget(widget), state: $state$});

	onMount(() => {
		widget.api.initDone();
	});
</script>

{#snippet structure(props: AccordionItemContext)}
	<ItemDefaultStructure {...props} />
{/snippet}

<div class="accordion-item" use:itemDirective>
	<Slot content={$structure$} props={slotContext} />
</div>
