<script lang="ts" context="module">
	import type {SelectProps as Props, SelectWidget, SelectSlots as Slots, WidgetPropsEvents, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {callWidgetFactory, createEventDispatcher, createSelect} from '@agnos-ui/svelte-headless';
</script>

<script lang="ts">
	type Item = $$Generic; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props<Item>>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props<Item>>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots<Item>; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let filterText: string | undefined = undefined;

	const widget = callWidgetFactory<SelectWidget<Item>>(createSelect, 'select', $$slots);
	const {
		stores: {opened$, visible$, selected$, highlighted$, filterText$, className$},
		actions: {onInputKeydown, onInput},
		api: {unselect},
		directives: {hasFocusDirective},
	} = widget;
	widget.patch({
		onFilterTextChange: (value) => {
			filterText = value;
			dispatch('filterTextChange', value);
		},
	});
	$: widget.patchChangedProps($$props);
</script>

<div class="au-select dropdown input-group input-group-sm mb-3 d-block {$className$}">
	<!-- svelte-ignore a11y-role-has-required-aria-props -->
	<div use:hasFocusDirective role="combobox" class="input-group" aria-haspopup="listbox" aria-expanded="true">
		{#if $selected$.length}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="input-group-text" on:mousedown|preventDefault>
				{#each $selected$ as item}
					<div class="badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1">
						<div class="me-1">{item}</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span role="button" tabindex="-1" aria-label="Close" on:click={() => unselect(item)}>x</span>
					</div>
				{/each}
			</div>
		{/if}
		<input
			type="text"
			class="form-control"
			value={$filterText$}
			aria-autocomplete="list"
			autoCorrect="off"
			autoCapitalize="none"
			autoComplete="off"
			on:keydown={onInputKeydown}
			on:input={onInput}
		/>
	</div>
	{#if $opened$ && $visible$.length > 0}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul use:hasFocusDirective class="dropdown-menu show w-100" data-popper-placement="bottom-start" on:mousedown|preventDefault>
			{#each $visible$ as itemCtx (itemCtx.id)}
				{@const id = itemCtx.id}
				<li class="dropdown-item position-relative" class:bg-light={itemCtx === $highlighted$}>
					<div class="form-check">
						<input {id} tabindex="-1" type="checkbox" class="form-check-input" checked={itemCtx.selected} on:change={itemCtx.toggle} />
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<label for={id} class="form-check-label stretched-link" on:click|preventDefault={itemCtx.toggle}>{itemCtx.item}</label>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.input-group-text {
		background-color: transparent;
	}
	.dropdown-menu {
		position: absolute;
		inset: 0px auto auto 0px;
		margin: 0px;
		transform: translate3d(0px, 45px, 0px);
	}
</style>
