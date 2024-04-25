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
  slotItemStructure: ItemDefaultStructure
};
<\/script>

<script>const accordionApi = getAccordionApi();
const { registerItem } = accordionApi;
export let itemVisible = void 0;
const widget = callWidgetFactory({
  factory: registerItem,
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onItemVisibleChange: (event) => {
      itemVisible = event;
    }
  }
});
const {
  stores: { slotItemStructure$ },
  directives: { accordionItemDirective },
  state$
} = widget;
export const api = widget.api;
$:
  widget.patchChangedProps($$props);
$:
  slotContext = { widget: toSlotContextWidget(widget), state: $state$ };
onMount(() => {
  widget.api.initDone();
});
<\/script>

<div use:__AgnosUISveltePreprocess__classDirective={"accordion-item"} use:accordionItemDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(accordionItemDirective, [__AgnosUISveltePreprocess__classDirective, "accordion-item"])}>
	<Slot slotContent={$slotItemStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="itemStructure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="itemBody" let:state let:widget><slot name="itemBody" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="itemHeader" let:state let:widget><slot name="itemHeader" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="itemStructure" let:state let:widget><slot name="itemStructure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
`;export{t as default};
