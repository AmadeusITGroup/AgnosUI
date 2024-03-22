<script lang="ts">
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {createAccordion, type AccordionProps, type AccordionSlots} from '@agnos-ui/svelte-headless/components/accordion';
	import {setAccordionApi} from './accordion';

	type $$Props = Partial<AccordionProps>;
	type $$Slots = {default: Record<string, never>} & AccordionSlots;

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
