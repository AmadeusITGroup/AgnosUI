<script lang="ts" context="module">
	import type {ProgressbarProps as Props, ProgressbarSlots as Slots, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {Slot, callWidgetFactory, createProgressbar} from '@agnos-ui/svelte-headless';
	import ProgressbarDefaultContent from './ProgressbarDefaultContent.svelte';
	const defaultConfig: Partial<Props> = {
		slotContent: ProgressbarDefaultContent,
	};
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	export const widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', $$slots, defaultConfig, events: {}});
	const {
		stores: {slotContent$, ariaLabel$, value$, min$, max$, ariaValueText$},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);

	$: slotContext = {widget, state: $state$};
</script>

<div
	role="progressbar"
	aria-label={$ariaLabel$ || undefined}
	aria-valuenow={$value$}
	aria-valuemin={$min$}
	aria-valuemax={$max$}
	aria-valuetext={$ariaValueText$}
>
	<Slot slotContent={$slotContent$} props={slotContext} let:component let:props>
		<slot slot="slot" name="content" let:props {...props} />
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<slot name="content" slot="content" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
