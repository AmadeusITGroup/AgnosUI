<script lang="ts" context="module">
	import type {SelectProps as Props, SelectWidget, SelectSlots as Slots} from '@agnos-ui/svelte-headless/components/select';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {createSelect} from '@agnos-ui/svelte-headless/components/select';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
</script>

<script lang="ts">
	type Item = $$Generic; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props<Item>>; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots<Item>; // eslint-disable-line @typescript-eslint/no-unused-vars

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
	const {
		stores: {
			id$,
			ariaLabel$,
			badgeClassName$,
			className$,
			filterText$,
			highlighted$,
			menuClassName$,
			menuItemClassName$,
			open$,
			placement$,
			selectedContexts$,
			slotBadgeLabel$,
			slotItem$,
			visibleItems$,
		},
		state$,
		actions: {onInput, onInputKeydown, onBadgeKeydown},
		directives: {floatingDirective, hasFocusDirective, referenceDirective, inputContainerDirective},
	} = widget;
	$: widget.patchChangedProps($$props);

	$: menuId = `${$id$}-menu`;
</script>

<div use:referenceDirective class="au-select dropdown border border-1 p-1 mb-3 d-block {$className$}">
	<div
		use:hasFocusDirective
		use:inputContainerDirective
		role="combobox"
		class="d-flex align-items-center flex-wrap"
		aria-controls={menuId}
		aria-haspopup="listbox"
		aria-expanded={$open$}
	>
		{#each $selectedContexts$ as itemContext (itemContext.id)}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div tabindex="-1" class={`au-select-badge me-1 ${$badgeClassName$}`} on:keydown={(e) => onBadgeKeydown(e, itemContext.item)}>
				<Slot slotContent={$slotBadgeLabel$} props={{state: $state$, widget, itemContext}} let:component let:props>
					<slot slot="slot" name="badgeLabel" let:props {...props} />
					<svelte:component this={component} {...props}>
						<slot name="badgeLabel" slot="badgeLabel" let:itemContext let:state let:widget {itemContext} {state} {widget} />
						<slot name="item" slot="item" let:itemContext let:state let:widget {itemContext} {state} {widget} />
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
		<ul
			role="listbox"
			id={menuId}
			use:hasFocusDirective
			use:floatingDirective
			class="dropdown-menu show {$menuClassName$}"
			data-popper-placement={$placement$}
			on:mousedown|preventDefault
		>
			{#each $visibleItems$ as itemContext (itemContext.id)}
				{@const isHighlighted = itemContext === $highlighted$}
				{@const isSelected = itemContext.selected}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					role="option"
					aria-selected={isSelected}
					class={`au-select-item dropdown-item position-relative ${$menuItemClassName$}`}
					class:text-bg-primary={isHighlighted}
					class:selected={isSelected}
					on:click={() => widget.api.toggleItem(itemContext.item)}
				>
					<Slot slotContent={$slotItem$} props={{state: $state$, widget, itemContext}} let:component let:props>
						<slot slot="slot" name="item" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="badgeLabel" slot="badgeLabel" let:itemContext let:state let:widget {itemContext} {state} {widget} />
							<slot name="item" slot="item" let:itemContext let:state let:widget {itemContext} {state} {widget} />
						</svelte:component>
					</Slot>
				</li>
			{/each}
		</ul>
	{/if}
</div>
