const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$: slotContext = { widget, state };
<\/script>

{#if state.header}
	<div class="toast-header">
		<Slot slotContent={state.header} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="header" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
		{#if state.dismissible}
			<button use:__AgnosUISveltePreprocess__classDirective={"btn-close me-0 ms-auto"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close me-0 ms-auto"])} />
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot slotContent={state.children} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
{#if state.dismissible && !state.header}
	<button use:__AgnosUISveltePreprocess__classDirective={"btn-close btn-close-white me-2 m-auto"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close btn-close-white me-2 m-auto"])} />
{/if}
`;export{t as default};
