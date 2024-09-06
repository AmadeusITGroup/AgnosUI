<script lang="ts" context="module">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import type {SelectApi, SelectProps, SelectSlots, SelectWidget} from './select';
	import {createSelect} from './select';
</script>

<script lang="ts">
	type Item = $$Generic;
	type $$Props = Partial<SelectProps<Item>>;
	type $$Slots = SelectSlots<Item>;

	export let open: boolean | undefined = false;
	export let filterText: string | undefined = undefined;
	export let selected: Item[] | undefined = undefined;

	const widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		$$slots,
		$$props,
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
		stores: {id$, ariaLabel$, highlighted$, open$, selectedContexts$, badgeLabel$, itemLabel$, visibleItems$, className$, filterText$},
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

	$: widget.patchChangedProps($$props);
</script>

<div use:referenceDirective class="au-select dropdown border border-1 p-1 mb-3 d-block {$className$}">
	<div use:hasFocusDirective use:inputContainerDirective class="d-flex align-items-center flex-wrap gap-1">
		{#each $selectedContexts$ as itemContext (itemContext.id)}
			<div use:badgeAttributesDirective={itemContext}>
				<Slot slotContent={$badgeLabel$} props={{state: $state$, widget, itemContext}} let:component let:props>
					<svelte:fragment slot="slot" let:props><slot name="badgeLabel" {...props} /></svelte:fragment>
					<svelte:component this={component} {...props}>
						<svelte:fragment slot="badgeLabel" let:itemContext let:state let:widget
							><slot name="badgeLabel" {itemContext} {state} {widget} /></svelte:fragment
						>
						<svelte:fragment slot="itemLabel" let:itemContext let:state let:widget
							><slot name="itemLabel" {itemContext} {state} {widget} /></svelte:fragment
						>
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
		<ul use:hasFocusDirective use:floatingDirective use:menuAttributesDirective class="dropdown-menu show">
			{#each $visibleItems$ as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === $highlighted$}
				<li class="dropdown-item position-relative" class:text-bg-primary={isHighlighted} use:itemAttributesDirective={itemContext}>
					<Slot slotContent={$itemLabel$} props={{state: $state$, widget, itemContext}} let:component let:props>
						<svelte:fragment slot="slot" let:props><slot name="itemLabel" {...props} /></svelte:fragment>
						<svelte:component this={component} {...props}>
							<svelte:fragment slot="badgeLabel" let:itemContext let:state let:widget
								><slot name="badgeLabel" {itemContext} {state} {widget} /></svelte:fragment
							>
							<svelte:fragment slot="itemLabel" let:itemContext let:state let:widget
								><slot name="itemLabel" {itemContext} {state} {widget} /></svelte:fragment
							>
						</svelte:component>
					</Slot>
				</li>
			{/each}
		</ul>
	{/if}
</div>
