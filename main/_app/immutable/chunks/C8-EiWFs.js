const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {AccordionApi, AccordionProps} from './accordion';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '../../config';
	import {createAccordion, setAccordionApi} from './accordion';

	let {children, ...props}: Partial<AccordionProps> & {children: Snippet} = $props();

	const {directives, api: accordionApi} = callWidgetFactory(createAccordion, {
		props,
	});
	export const api: AccordionApi = accordionApi;

	setAccordionApi(accordionApi);
<\/script>

<div use:__AgnosUISveltePreprocess__classDirective={"accordion"} use:directives.accordionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.accordionDirective, [__AgnosUISveltePreprocess__classDirective, "accordion"])}>
	{@render children()}
</div>
`;export{e as default};
