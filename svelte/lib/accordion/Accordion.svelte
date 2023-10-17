<script context="module" lang="ts">
	import type {AccordionProps as Props, AccordionSlots as Slots, WidgetPropsEvents, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {callWidgetFactory, createAccordion, createEventDispatcher} from '@agnos-ui/svelte-headless';
	import {setAccordionApi} from './accordion';
</script>

<script lang="ts">
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = {default: Record<string, never>} & Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let itemVisible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		$$slots: $$slots as any,
		events: {
			onItemVisibleChange: (event) => {
				itemVisible = event;
				dispatch('itemVisibleChange', event);
			},
			onItemHidden: () => dispatch('itemHidden'),
			onItemShown: () => dispatch('itemShown'),
			onShown: (id: string) => {
				dispatch('shown', id);
			},
			onHidden: (id: string) => {
				dispatch('hidden', id);
			},
		},
	});
	export const api = widget.api;
	const {
		directives: {accordionDirective},
		stores: {className$},
	} = widget;
	setAccordionApi(widget.api);
	$: widget.patchChangedProps($$props);
</script>

<div class="accordion {$className$}" use:accordionDirective>
	<slot />
</div>
