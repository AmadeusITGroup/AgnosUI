const e=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { callWidgetFactory } from "../../config";
import { createAccordion, setAccordionApi } from "./accordion";
export let itemVisible = void 0;
const widget = callWidgetFactory({
  factory: createAccordion,
  widgetName: "accordion",
  $$slots,
  $$props,
  events: {
    onItemVisibleChange: (event) => {
      itemVisible = event;
    }
  }
});
export const api = widget.api;
const {
  directives: { accordionDirective }
} = widget;
setAccordionApi(widget.api);
$:
  widget.patchChangedProps($$props);
<\/script>

<div use:__AgnosUISveltePreprocess__classDirective={"accordion"} use:accordionDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(accordionDirective, [__AgnosUISveltePreprocess__classDirective, "accordion"])}>
	<slot />
</div>
`;export{e as default};
