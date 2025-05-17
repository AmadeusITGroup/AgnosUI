<script lang="ts" generics="Item">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {SelectApi, SelectItemContext, SelectProps, SelectWidget} from './select.gen';
	import {createSelect} from './select.gen';

	let {open = $bindable(false), filterText = $bindable(), selected = $bindable(), ...props}: Partial<SelectProps<Item>> = $props();

	const widget = callWidgetFactory<SelectWidget<Item>>(createSelect, {
		get props() {
			return {...props, open, filterText, selected};
		},
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
		attachments: {
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

<div {@attach referenceDirective()} class="au-select dropdown border border-1 p-1 mb-3 d-block {state.className}">
	<div {@attach hasFocusDirective()} {@attach inputContainerDirective()} class="d-flex align-items-center flex-wrap gap-1">
		{#each state.selectedContexts as itemContext (itemContext.id)}
			<div {@attach badgeAttributesDirective(itemContext)}>
				<Slot content={state.badgeLabel} props={{state, attachments: widget.attachments, api: widget.api, itemContext}} />
			</div>
		{/each}
		<input value={state.filterText} {@attach inputDirective()} />
	</div>
	{#if state.open && state.visibleItems.length > 0}
		<ul {@attach hasFocusDirective()} {@attach floatingDirective()} {@attach menuAttributesDirective()} class="dropdown-menu show">
			{#each state.visibleItems as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === state.highlighted}
				<li class={['dropdown-item position-relative', {'text-bg-primary': isHighlighted}]} {@attach itemAttributesDirective(itemContext)}>
					<Slot content={state.itemLabel} props={{state, attachments: widget.attachments, api: widget.api, itemContext}} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
