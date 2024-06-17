const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { createAlert } from "./alert";
import { callWidgetFactory } from "../../config";
import AlertDefaultStructure from "./AlertDefaultStructure.svelte";
const defaultConfig = {
  slotStructure: AlertDefaultStructure
};
<\/script>

<script>const widget = callWidgetFactory({
  factory: createAlert,
  widgetName: "alert",
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
  directives: { transitionDirective },
  state$
} = widget;
$: widget.patchChangedProps($$props);
$: slotContext = { widget, state: $state$ };
<\/script>

{#if !$hidden$}
	<div
		role="alert"
		use:__AgnosUISveltePreprocess__classDirective={"au-alert alert alert-"+($state$.type)+" "+($state$.className)+" "+($state$.dismissible ? 'alert-dismissible' : '')}
		use:transitionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(transitionDirective, [__AgnosUISveltePreprocess__classDirective, "au-alert alert alert-"+($state$.type)+" "+($state$.className)+" "+($state$.dismissible ? 'alert-dismissible' : '')])}
	>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
`;export{t as default};
