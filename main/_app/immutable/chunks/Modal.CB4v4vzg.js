const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { toSlotContextWidget } from "@agnos-ui/svelte-headless/types";
import { createModal } from "./modal";
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import ModalDefaultHeader from "./ModalDefaultHeader.svelte";
import ModalDefaultStructure from "./ModalDefaultStructure.svelte";
const defaultConfig = {
  slotStructure: ModalDefaultStructure,
  slotHeader: ModalDefaultHeader
};
<\/script>

<script>export let visible = void 0;
const widget = callWidgetFactory({
  factory: createModal,
  widgetName: "modal",
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onVisibleChange: (event) => {
      visible = event;
    }
  }
});
export const api = widget.api;
const {
  stores: { backdropHidden$, hidden$, slotStructure$ },
  directives: { backdropDirective, backdropPortalDirective, modalDirective, modalPortalDirective },
  state$
} = widget;
$: widget.patchChangedProps($$props);
$: slotContext = { widget: toSlotContextWidget(widget), state: $state$ };
<\/script>

{#if !$backdropHidden$}
	<div use:__AgnosUISveltePreprocess__classDirective={"modal-backdrop"} use:backdropPortalDirective use:backdropDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(backdropPortalDirective, backdropDirective, [__AgnosUISveltePreprocess__classDirective, "modal-backdrop"])} />
{/if}

{#if !$hidden$}
	<div use:__AgnosUISveltePreprocess__classDirective={"modal d-block"} use:modalPortalDirective use:modalDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(modalPortalDirective, modalDirective, [__AgnosUISveltePreprocess__classDirective, "modal d-block"])}>
		<div class="modal-dialog {$state$.fullscreen ? 'modal-fullscreen' : ''}">
			<div class="modal-content">
				<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="footer" let:state let:widget><slot name="footer" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="header" let:state let:widget><slot name="header" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
						<svelte:fragment slot="title" let:state let:widget><slot name="title" {state} {widget} /></svelte:fragment>
					</svelte:component>
				</Slot>
			</div>
		</div>
	</div>
{/if}
`;export{t as default};
