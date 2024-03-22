<script lang="ts">
	import {createSlider, type SliderProps, type SliderSlots} from '@agnos-ui/svelte-headless/components/slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';

	type $$Props = Partial<SliderProps>;
	type $$Slots = SliderSlots;

	export let values: number[] | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		$$slots,
		$$props,
		defaultConfig: {
			slotStructure: SliderDefaultStructure,
			slotHandle: SliderDefaultHandle,
		},
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});

	const {
		stores: {className$, disabled$, vertical$, slotStructure$},
		directives: {sliderDirective},
		state$,
		patchChangedProps,
	} = widget;

	$: patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
</script>

<!-- on:blur={onTouched} ?? -->
<div
	use:sliderDirective
	class={`au-slider ${$vertical$ ? 'au-slider-vertical' : 'au-slider-horizontal'} ${$className$}`}
	class:disabled={$disabled$}
	aria-disabled={$disabled$ ? true : null}
>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
