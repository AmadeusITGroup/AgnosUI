const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {AccordionApi, AccordionProps} from './accordion';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	let {children, ...props}: Partial<AccordionProps> & {children: Snippet} = $props();

	const widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		props,
	});
	export const api: AccordionApi = widget.api;

	setAccordionApi(widget.api);
	$effect(() => widget.patchChangedProps({...props}));
<\/script>

<div use:__AgnosUISveltePreprocess__classDirective={"accordion"} use:widget.directives.accordionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.accordionDirective, [__AgnosUISveltePreprocess__classDirective, "accordion"])}>
	{@render children()}
</div>
`;export{e as default};
