const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { createSlider } from "./slider";
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import SliderDefaultStructure from "./SliderDefaultStructure.svelte";
import SliderDefaultHandle from "./SliderDefaultHandle.svelte";
const defaultConfig = {
  slotStructure: SliderDefaultStructure,
  slotHandle: SliderDefaultHandle
};
<\/script>

<script>export let values = void 0;
const widget = callWidgetFactory({
  factory: createSlider,
  widgetName: "slider",
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onValuesChange: function(newValues) {
      values = newValues;
    }
  }
});
export const api = widget.api;
const {
  stores: { slotStructure$ },
  directives: { sliderDirective },
  state$
} = widget;
$: widget.patchChangedProps($$props);
$: slotContext = { widget, state: $state$ };
<\/script>

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(sliderDirective)}>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
`;export{t as default};
