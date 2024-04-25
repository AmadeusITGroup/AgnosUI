const t=`<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import { createSelect } from "./select";
<\/script>

<script>export let open = false;
export let filterText = void 0;
export let selected = void 0;
const widget = callWidgetFactory({
  factory: createSelect,
  widgetName: "select",
  $$slots,
  $$props,
  events: {
    onOpenChange: function(isOpen) {
      open = isOpen;
    },
    onSelectedChange: (newSelection) => {
      selected = newSelection;
    },
    onFilterTextChange: (value) => {
      filterText = value;
    }
  }
});
export const api = widget.api;
const {
  stores: { id$, ariaLabel$, highlighted$, open$, selectedContexts$, slotBadgeLabel$, slotItem$, visibleItems$, className$, filterText$ },
  state$,
  actions: { onInput, onInputKeydown },
  directives: {
    floatingDirective,
    hasFocusDirective,
    referenceDirective,
    inputContainerDirective,
    badgeAttributesDirective,
    menuAttributesDirective,
    itemAttributesDirective
  }
} = widget;
$:
  widget.patchChangedProps($$props);
<\/script>

<div use:referenceDirective use:__AgnosUISveltePreprocess__classDirective={"au-select dropdown border border-1 p-1 mb-3 d-block "+($className$)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(referenceDirective, [__AgnosUISveltePreprocess__classDirective, "au-select dropdown border border-1 p-1 mb-3 d-block "+($className$)])}>
	<div use:hasFocusDirective use:inputContainerDirective use:__AgnosUISveltePreprocess__classDirective={"d-flex align-items-center flex-wrap gap-1"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(hasFocusDirective, inputContainerDirective, [__AgnosUISveltePreprocess__classDirective, "d-flex align-items-center flex-wrap gap-1"])}>
		{#each $selectedContexts$ as itemContext (itemContext.id)}
			<div use:badgeAttributesDirective={itemContext} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([badgeAttributesDirective, itemContext])}>
				<Slot slotContent={$slotBadgeLabel$} props={{state: $state$, widget, itemContext}} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="badgeLabel" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment slot="badgeLabel" let:itemContext let:state let:widget
							><slot name="badgeLabel" {itemContext} {state} {widget} /></svelte:fragment
						>
						<svelte:fragment slot="item" let:itemContext let:state let:widget><slot name="item" {itemContext} {state} {widget} /></svelte:fragment>
					</svelte:component>
				</Slot>
			</div>
		{/each}
		<input
			id={$id$}
			aria-label={$ariaLabel$}
			type="text"
			class="au-select-input flex-grow-1 border-0"
			value={$filterText$}
			aria-autocomplete="list"
			autoCorrect="off"
			autoCapitalize="none"
			autoComplete="off"
			on:input={onInput}
			on:keydown={onInputKeydown}
		/>
	</div>
	{#if $open$ && $visibleItems$.length > 0}
		<ul use:hasFocusDirective use:floatingDirective use:menuAttributesDirective use:__AgnosUISveltePreprocess__classDirective={"dropdown-menu show"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(hasFocusDirective, floatingDirective, menuAttributesDirective, [__AgnosUISveltePreprocess__classDirective, "dropdown-menu show"])}>
			{#each $visibleItems$ as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === $highlighted$}
				<li use:__AgnosUISveltePreprocess__classDirective={"dropdown-item position-relative"} class:text-bg-primary={isHighlighted} use:itemAttributesDirective={itemContext} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([itemAttributesDirective, itemContext], [__AgnosUISveltePreprocess__classDirective, "dropdown-item position-relative"])}>
					<Slot slotContent={$slotItem$} props={{state: $state$, widget, itemContext}} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="item" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="badgeLabel" let:itemContext let:state let:widget
								><slot name="badgeLabel" {itemContext} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="item" let:itemContext let:state let:widget><slot name="item" {itemContext} {state} {widget} /></svelte:fragment>
						</svelte:component>
					</Slot>
				</li>
			{/each}
		</ul>
	{/if}
</div>
`;export{t as default};
