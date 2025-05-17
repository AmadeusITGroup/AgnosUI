<script lang="ts">
	import type {AccordionApi, AccordionProps} from './accordion';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	let {children, ...props}: Partial<AccordionProps> & {children: Snippet} = $props();

	const {
		attachments: {accordionDirective},
		api: accordionApi,
	} = callWidgetFactory(createAccordion, {
		props,
	});
	export const api: AccordionApi = accordionApi;

	setAccordionApi(accordionApi);
</script>

<div class="accordion" {@attach accordionDirective()}>
	{@render children()}
</div>
