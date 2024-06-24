const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
const re = new RegExp("^h[1-6]$");
$: slotContext = { widget, state };
$: headingTag = re.test(state.headingTag) ? state.headingTag : "h2";
<\/script>

<svelte:element this={headingTag} use:__AgnosUISveltePreprocess__classDirective={"accordion-header"} use:slotContext.widget.directives.headerDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(slotContext.widget.directives.headerDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-header"])}>
	<button use:slotContext.widget.directives.buttonDirective use:__AgnosUISveltePreprocess__classDirective={"accordion-button"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(slotContext.widget.directives.buttonDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-button"])}>
		<Slot slotContent={state.header} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</button>
</svelte:element>
{#if state.shouldBeInDOM}
	<div use:__AgnosUISveltePreprocess__classDirective={"accordion-collapse"} use:widget.directives.bodyContainerDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.bodyContainerDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-collapse"])}>
		<div use:__AgnosUISveltePreprocess__classDirective={"accordion-body"} use:widget.directives.bodyDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.bodyDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-body"])}>
			<Slot slotContent={state.children} props={slotContext} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		</div>
	</div>
{/if}
`;export{t as default};
