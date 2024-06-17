const e=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { createRating } from "./rating";
import { callWidgetFactory } from "../../config";
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let rating = void 0;
const widget = callWidgetFactory({
  factory: createRating,
  widgetName: "rating",
  $$slots,
  $$props,
  events: {
    onRatingChange: (value) => {
      rating = value;
    }
  }
});
const {
  stores: { visibleRating$, stars$, slotStar$ },
  directives: { containerDirective, starDirective }
} = widget;
$: widget.patchChangedProps($$props);
<\/script>

<div use:containerDirective use:__AgnosUISveltePreprocess__classDirective={"d-inline-flex"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(containerDirective, [__AgnosUISveltePreprocess__classDirective, "d-inline-flex"])}>
	<!-- on:blur={onTouched} ?? -->
	{#each $stars$ as { fill, index }}
		<span class="visually-hidden">({index < $visibleRating$ ? '*' : ' '})</span>
		<span use:starDirective={{index}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([starDirective, {index}])}>
			<Slot slotContent={$slotStar$} props={{fill, index}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="star" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props} />
			</Slot>
		</span>
	{/each}
</div>
`;export{e as default};
