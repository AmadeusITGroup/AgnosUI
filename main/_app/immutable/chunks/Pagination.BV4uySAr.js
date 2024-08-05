const t=`<script context="module">import { createPagination } from "./pagination";
import { toSlotContextWidget } from "@agnos-ui/svelte-headless/types";
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import PaginationDefaultPages from "./PaginationDefaultPages.svelte";
import PaginationDefaultStructure from "./PaginationDefaultStructure.svelte";
const defaultConfig = {
  structure: PaginationDefaultStructure,
  pagesDisplay: PaginationDefaultPages
};
<\/script>

<script>export let page = void 0;
const widget = callWidgetFactory({
  factory: createPagination,
  widgetName: "pagination",
  $$slots,
  $$props,
  defaultConfig,
  events: {
    onPageChange: (value) => {
      page = value;
    }
  }
});
const {
  stores: { structure$, ariaLabel$ },
  state$
} = widget;
$: widget.patchChangedProps($$props);
$: slotContext = { widget: toSlotContextWidget(widget), state: $state$ };
<\/script>

<!-- Should we put nav here ? how to custom the class of ul in this case ?-->
<nav aria-label={$ariaLabel$}>
	<Slot slotContent={$structure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="ellipsisLabel" let:state let:widget><slot name="ellipsisLabel" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="firstPageLabel" let:state let:widget><slot name="firstPageLabel" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="lastPageLabel" let:state let:widget><slot name="lastPageLabel" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="nextPageLabel" let:state let:widget><slot name="nextPageLabel" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="numberLabel" let:displayedPage let:state let:widget
				><slot name="numberLabel" {displayedPage} {state} {widget} /></svelte:fragment
			>
			<svelte:fragment slot="pagesDisplay" let:state let:widget><slot name="pagesDisplay" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="previousPageLabel" let:state let:widget><slot name="previousPageLabel" {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</nav>
`;export{t as default};
