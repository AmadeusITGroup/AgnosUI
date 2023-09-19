const t=`<script context="module" lang="ts">
	import type {AccordionProps as Props, AccordionSlots as Slots, WidgetPropsEvents, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {callWidgetFactory, createAccordion, createEventDispatcher} from '@agnos-ui/svelte-headless';
	import {setAccordionApi} from './accordion';
<\/script>

<script lang="ts">
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = {default: Record<string, never>} & Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let itemCollapsed: boolean | undefined = undefined;
	const widget = callWidgetFactory(createAccordion, 'accordion', $$slots as any, {});
	export const api = widget.api;
	const {
		directives: {accordionDirective},
		stores: {className$},
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

<div class="accordion {$className$}" use:accordionDirective>
	<slot />
</div>
`;export{t as default};
