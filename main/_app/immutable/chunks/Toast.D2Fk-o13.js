const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { createToast } from "./toast";
import { callWidgetFactory } from "../../config";
import ToastDefaultStructure from "./ToastDefaultStructure.svelte";
const defaultConfig = {
  slotStructure: ToastDefaultStructure
};
<\/script>

<script>const widget = callWidgetFactory({
  factory: createToast,
  widgetName: "toast",
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onVisibleChange: (event) => {
      visible = event;
    }
  }
});
export let visible = void 0;
export const api = widget.api;
const {
  stores: { slotStructure$, hidden$ },
  directives: { transitionDirective, autoHideDirective, bodyDirective },
  state$
} = widget;
$:
  widget.patchChangedProps($$props);
$:
  slotContext = { widget, state: $state$ };
<\/script>

{#if !$hidden$}
	<div
		use:__AgnosUISveltePreprocess__classDirective={"toast"}
		class:toast-dismissible={$state$.dismissible}
		class:d-flex={!$state$.slotHeader}
		use:transitionDirective
		use:autoHideDirective
		use:bodyDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(transitionDirective, autoHideDirective, bodyDirective, [__AgnosUISveltePreprocess__classDirective, "toast"])}
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
`;export{t as default};
