const t=`<script context="module" lang="ts">
	import {createAccordion} from '@agnos-ui/core';
	import type {WidgetPropsProps, WidgetPropsEvents} from '../utils';
	import {createEventDispatcher, callWidgetFactory} from '../utils';
	import {setAccordionApi} from './accordion';
	import type {AccordionProps as Props, AccordionSlots as Slots} from './accordion';
<\/script>

<script lang="ts">
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = {default: Record<string, never>} & Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let itemCollapsed: boolean | undefined = undefined;
	const widget = callWidgetFactory(createAccordion, 'accordion', $$slots as any, {});
	const {
		directives: {accordionDirective},
		stores: {accordionClass$},
	} = widget;
	widget.patch({
		onItemCollapsedChange: (event) => {
			itemCollapsed = event;
			dispatch('itemCollapsedChange', event);
		},
		onItemHidden: () => dispatch('itemHidden'),
		onItemShown: () => dispatch('itemShown'),
		onShown: (id: string) => {
			dispatch('shown', id);
		},
		onHidden: (id: string) => {
			dispatch('hidden', id);
		},
	});
	setAccordionApi(widget.api);
	$: widget.patchChangedProps($$props);
<\/script>

<div class="accordion {$accordionClass$}" use:accordionDirective>
	<slot />
</div>
`;export{t as default};
