<script lang="ts">
	import type {AccordionApi, AccordionProps} from './accordion';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	let {children, ...props}: Partial<AccordionProps> & {children: Snippet} = $props();

	const {directives, api: accordionApi} = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		props,
		enablePatchChanged: true,
	});
	export const api: AccordionApi = accordionApi;

	setAccordionApi(accordionApi);
</script>

<div class="accordion" use:directives.accordionDirective>
	{@render children()}
</div>
