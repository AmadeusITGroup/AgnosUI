<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {SelectApi, SelectProps, SelectWidget} from './select';
	import {createSelect} from './select';

	type Item = $$Generic; // eslint-disable-line no-undef

	let {open = $bindable(false), filterText = $bindable(), selected = $bindable(), ...props}: Partial<SelectProps<Item>> = $props();

	const widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		props: {...props, open, filterText, selected},
		defaultConfig: {slotBadgeLabel, slotItem},
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
		stores: {id$, ariaLabel$, highlighted$, open$, selectedContexts$, slotBadgeLabel$, slotItem$, visibleItems$, className$, filterText$},
		state$,
		actions: {onInput, onInputKeydown},
		directives: {
			floatingDirective,
			hasFocusDirective,
			referenceDirective,
			inputContainerDirective,
			badgeAttributesDirective,
			menuAttributesDirective,
			itemAttributesDirective,
		},
	} = widget;

	$effect(() => widget.patchChangedProps({...props, open, filterText, selected}));
</script>

{#snippet slotBadgeLabel({itemContext})}
	{itemContext.item}
{/snippet}
{#snippet slotItem({itemContext})}
	{itemContext.item}
{/snippet}

<div use:referenceDirective class="au-select dropdown border border-1 p-1 mb-3 d-block {$className$}">
	<div use:hasFocusDirective use:inputContainerDirective class="d-flex align-items-center flex-wrap gap-1">
		{#each $selectedContexts$ as itemContext (itemContext.id)}
			<div use:badgeAttributesDirective={itemContext}>
				<Slot content={$slotBadgeLabel$} props={{state: $state$, widget, itemContext}} />
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
			oninput={onInput}
			onkeydown={onInputKeydown}
		/>
	</div>
	{#if $open$ && $visibleItems$.length > 0}
		<ul use:hasFocusDirective use:floatingDirective use:menuAttributesDirective class="dropdown-menu show">
			{#each $visibleItems$ as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === $highlighted$}
				<li class="dropdown-item position-relative" class:text-bg-primary={isHighlighted} use:itemAttributesDirective={itemContext}>
					<Slot content={$slotItem$} props={{state: $state$, widget, itemContext}} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
