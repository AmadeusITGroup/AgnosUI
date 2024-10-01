const t=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

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
<\/script>

{#snippet structure(props: AccordionItemContext)}
	<ItemDefaultStructure {...props} />
{/snippet}

<div use:__AgnosUISveltePreprocess__classDirective={"accordion-item"} use:itemDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(itemDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-item"])}>
	<Slot content={$structure$} props={slotContext} />
</div>
`;export{t as default};
