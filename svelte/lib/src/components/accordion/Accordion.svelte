<script context="module" lang="ts">
	import type {AccordionProps as Props, AccordionSlots as Slots} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {createAccordion} from '@agnos-ui/svelte-headless/components/accordion';
	import {setAccordionApi} from './accordion';
</script>

<script lang="ts">
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = {default: Record<string, never>} & Slots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let itemVisible: boolean | undefined = undefined;
	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		$$slots: $$slots as any,
		$$props,
		events: {
			onItemVisibleChange: (event) => {
				itemVisible = event;
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
