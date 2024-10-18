const e=`<script lang="ts" generics="Item">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {SelectApi, SelectItemContext, SelectProps, SelectWidget} from './select.gen';
	import {createSelect} from './select.gen';

	let {open = $bindable(false), filterText = $bindable(), selected = $bindable(), ...props}: Partial<SelectProps<Item>> = $props();

	const widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		props: {...props, open, filterText, selected},
		defaultConfig: {badgeLabel, itemLabel},
		events: {
			onOpenChange: function (isOpen: boolean): void {
				open = isOpen;
			},
			onSelectedChange: (newSelection) => {
				selected = newSelection;
			},
			onFilterTextChange: (value) => {
				filterText = value;
			},
		},
	});
	export const api: SelectApi<Item> = widget.api;
	const {
		stores: {highlighted$, open$, selectedContexts$, badgeLabel$, itemLabel$, visibleItems$, className$, filterText$},
		state$,
		directives: {
			floatingDirective,
			hasFocusDirective,
			referenceDirective,
			inputContainerDirective,
			badgeAttributesDirective,
			menuAttributesDirective,
			itemAttributesDirective,
			inputDirective,
		},
	} = widget;

	$effect(() => widget.patchChangedProps({...props, open, filterText, selected}));
<\/script>

{#snippet badgeLabel({itemContext}: SelectItemContext<Item>)}
	{itemContext.item}
{/snippet}
{#snippet itemLabel({itemContext}: SelectItemContext<Item>)}
	{itemContext.item}
{/snippet}

<div use:referenceDirective use:__AgnosUISveltePreprocess__classDirective={"au-select dropdown border border-1 p-1 mb-3 d-block "+($className$)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(referenceDirective, [__AgnosUISveltePreprocess__classDirective, "au-select dropdown border border-1 p-1 mb-3 d-block "+($className$)])}>
	<div use:hasFocusDirective use:inputContainerDirective use:__AgnosUISveltePreprocess__classDirective={"d-flex align-items-center flex-wrap gap-1"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(hasFocusDirective, inputContainerDirective, [__AgnosUISveltePreprocess__classDirective, "d-flex align-items-center flex-wrap gap-1"])}>
		{#each $selectedContexts$ as itemContext (itemContext.id)}
			<div use:badgeAttributesDirective={itemContext} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([badgeAttributesDirective, itemContext])}>
				<Slot content={$badgeLabel$} props={{state: $state$, widget, itemContext}} />
			</div>
		{/each}
		<input value={$filterText$} use:inputDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(inputDirective)} />
	</div>
	{#if $open$ && $visibleItems$.length > 0}
		<ul use:hasFocusDirective use:floatingDirective use:menuAttributesDirective use:__AgnosUISveltePreprocess__classDirective={"dropdown-menu show"} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(hasFocusDirective, floatingDirective, menuAttributesDirective, [__AgnosUISveltePreprocess__classDirective, "dropdown-menu show"])}>
			{#each $visibleItems$ as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === $highlighted$}
				<li use:__AgnosUISveltePreprocess__classDirective={"dropdown-item position-relative"} class:text-bg-primary={isHighlighted} use:itemAttributesDirective={itemContext} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([itemAttributesDirective, itemContext], [__AgnosUISveltePreprocess__classDirective, "dropdown-item position-relative"])}>
					<Slot content={$itemLabel$} props={{state: $state$, widget, itemContext}} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
`;export{e as default};
