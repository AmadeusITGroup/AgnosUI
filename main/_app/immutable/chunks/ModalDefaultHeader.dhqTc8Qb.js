const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$:
  slotContext = { widget, state };
<\/script>

<h5 class="modal-title">
	<Slot slotContent={state.slotTitle} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="title" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</h5>
{#if state.closeButton}
	<button use:__AgnosUISveltePreprocess__classDirective={"btn-close"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close"])} />
{/if}
`;export{t as default};
