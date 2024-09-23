<script lang="ts">
	import type {AccordionApi, AccordionProps, AccordionSlots} from './accordion';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	type $$Props = Partial<AccordionProps>;
	type $$Slots = {default: Record<string, never>} & AccordionSlots;

	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		$$slots: $$slots as any,
		$$props,
	});
	export const api: AccordionApi = widget.api;

	const {
		directives: {accordionDirective},
	} = widget;
	setAccordionApi(widget.api);
	$: widget.patchChangedProps($$props);
</script>

<div class="accordion" use:accordionDirective>
	<slot />
</div>
