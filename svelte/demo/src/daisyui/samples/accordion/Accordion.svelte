<script lang="ts">
	import {type AccordionProps, createAccordion} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {setAccordionApi} from './accordion';
	import type {Snippet} from 'svelte';

	let {
		children,
		...props
	}: Partial<Pick<AccordionProps, 'closeOthers' | 'onShown' | 'onHidden' | 'itemDestroyOnHide' | 'className'>> & {children: Snippet} = $props();

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

<div class="flex flex-col gap-2" use:widget.directives.accordionDirective>
	{@render children()}
</div>
