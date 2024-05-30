<script lang="ts">
	import type {AccordionProps} from './accordion';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	let {children, ...props}: Partial<AccordionProps> & {children: Snippet} = $props();

	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		props,
		events: {
			onItemVisibleChange: () => {},
		},
	});

	setAccordionApi(widget.api);
	$effect(() => widget.patchChangedProps({...props}));
</script>

<div class="accordion" use:widget.directives.accordionDirective>
	{@render children()}
</div>
