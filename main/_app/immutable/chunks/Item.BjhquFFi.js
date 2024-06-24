const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { toSlotContextWidget } from "@agnos-ui/svelte-headless/types";
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import { onMount } from "svelte";
import ItemDefaultStructure from "./ItemDefaultStructure.svelte";
import { getAccordionApi } from "./accordion";
const defaultConfig = {
  structure: ItemDefaultStructure
};
<\/script>

<script>const accordionApi = getAccordionApi();
const { registerItem } = accordionApi;
export let visible = void 0;
const widget = callWidgetFactory({
  factory: registerItem,
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onVisibleChange: (event) => {
      visible = event;
    }
  }
});
const {
  stores: { structure$ },
  directives: { itemDirective },
  state$
} = widget;
export const api = widget.api;
$: widget.patchChangedProps($$props);
$: slotContext = { widget: toSlotContextWidget(widget), state: $state$ };
onMount(() => {
  widget.api.initDone();
});
<\/script>

<div use:__AgnosUISveltePreprocess__classDirective={"accordion-item"} use:itemDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(itemDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-item"])}>
	<Slot slotContent={$structure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
`;export{t as default};
