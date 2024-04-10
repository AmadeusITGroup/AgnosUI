const t=`<script context="module" lang="ts">
	import type {AccordionProps as Props, AccordionSlots as Slots} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '../../config';
	import {createAccordion} from '@agnos-ui/svelte-headless/components/accordion';
	import {setAccordionApi} from './accordion';
<\/script>

<script lang="ts">
	type $$Props = Partial<Props>;
	type $$Slots = {default: Record<string, never>} & Slots;

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
	} = widget;
	setAccordionApi(widget.api);
	$: widget.patchChangedProps($$props);
<\/script>

<div class="accordion" use:accordionDirective>
	<slot />
</div>
`;export{t as default};
