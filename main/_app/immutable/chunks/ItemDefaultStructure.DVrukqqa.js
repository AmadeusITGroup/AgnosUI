const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {AccordionItemContext} from './accordion';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: AccordionItemContext = $props();
	const {state, directives} = widget;

	const re = new RegExp('^h[1-6]$');

	let headingTag = $derived(re.test(state.headingTag) ? state.headingTag : 'h2');
<\/script>

<svelte:element this={headingTag} use:__AgnosUISveltePreprocess__classDirective={"accordion-header"} use:directives.headerDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.headerDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-header"])}>
	<button use:directives.buttonDirective use:__AgnosUISveltePreprocess__classDirective={"accordion-button"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.buttonDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-button"])}>
		<Slot content={state.header} props={widget} />
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div use:__AgnosUISveltePreprocess__classDirective={"accordion-collapse"} use:directives.bodyContainerDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.bodyContainerDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-collapse"])}>
		<div use:__AgnosUISveltePreprocess__classDirective={"accordion-body"} use:directives.bodyDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.bodyDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-body"])}>
			<Slot content={state.children} props={widget} />
		</div>
	</div>
{/if}
`;export{e as default};
