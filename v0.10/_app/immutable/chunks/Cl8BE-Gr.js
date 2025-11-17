const t=`<script lang="ts">
	import {type AccordionProps, createAccordion} from '@agnos-ui/svelte-headless/components/accordion';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import {setAccordionApi} from './accordion';
	import type {Snippet} from 'svelte';

	let {
		children,
		...props
	}: Partial<Pick<AccordionProps, 'closeOthers' | 'onItemShown' | 'onItemHidden' | 'itemDestroyOnHide' | 'className'>> & {children: Snippet} =
		$props();

	const {api, directives} = callWidgetFactory(createAccordion, {
		props,
	});
	setAccordionApi(api);
<\/script>

<div class="flex flex-col gap-2" use:directives.accordionDirective>
	{@render children()}
</div>
`;export{t as default};
