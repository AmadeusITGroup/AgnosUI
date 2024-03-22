<script lang="ts">
	import {createProgressbar, type ProgressbarProps, type ProgressbarSlots} from '@agnos-ui/svelte-headless/components/progressbar';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import ProgressbarDefaultStructure from './ProgressbarDefaultStructure.svelte';

	type $$Props = Partial<ProgressbarProps>;
	type $$Slots = ProgressbarSlots;

	export const widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		$$slots,
		$$props,
		defaultConfig: {
			slotStructure: ProgressbarDefaultStructure,
		},
		events: {},
	});
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
