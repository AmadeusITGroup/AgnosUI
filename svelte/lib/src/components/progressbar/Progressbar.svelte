<script lang="ts" context="module">
	import type {ProgressbarProps as Props, ProgressbarSlots as Slots} from '@agnos-ui/svelte-headless/components/progressbar';
	import {createProgressbar} from '@agnos-ui/svelte-headless/components/progressbar';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';
	const defaultConfig: Partial<Props> = {
		slotStructure: ProgressbarDefaultStructure,
	};
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	export const widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', $$slots, $$props, defaultConfig, events: {}});
	const {
		stores: {slotStructure$, ariaLabel$, value$, min$, max$, ariaValueText$},
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
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
