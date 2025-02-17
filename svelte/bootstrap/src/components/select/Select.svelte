<script lang="ts" generics="Item">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {SelectApi, SelectItemContext, SelectProps, SelectWidget} from './select.gen';
	import {createSelect} from './select.gen';

	let {open = $bindable(false), filterText = $bindable(), selected = $bindable(), ...props}: Partial<SelectProps<Item>> = $props();

	const widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		get props() {
			return {...props, open, filterText, selected};
		},
		enablePatchChanged: true,
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
		state,
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
</script>

{#snippet badgeLabel({itemContext}: SelectItemContext<Item>)}
	{itemContext.item}
{/snippet}
{#snippet itemLabel({itemContext}: SelectItemContext<Item>)}
	{itemContext.item}
{/snippet}

<div use:referenceDirective class="au-select dropdown border border-1 p-1 mb-3 d-block {state.className}">
	<div use:hasFocusDirective use:inputContainerDirective class="d-flex align-items-center flex-wrap gap-1">
		{#each state.selectedContexts as itemContext (itemContext.id)}
			<div use:badgeAttributesDirective={itemContext}>
				<Slot content={state.badgeLabel} props={{state, directives: widget.directives, api: widget.api, itemContext}} />
			</div>
		{/each}
		<input value={state.filterText} use:inputDirective />
	</div>
	{#if state.open && state.visibleItems.length > 0}
		<ul use:hasFocusDirective use:floatingDirective use:menuAttributesDirective class="dropdown-menu show">
			{#each state.visibleItems as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === state.highlighted}
				<li class={['dropdown-item position-relative', {'text-bg-primary': isHighlighted}]} use:itemAttributesDirective={itemContext}>
					<Slot content={state.itemLabel} props={{state, directives: widget.directives, api: widget.api, itemContext}} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
