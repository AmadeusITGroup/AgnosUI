<script lang="ts" context="module">
	import type {SliderProps as Props, SliderSlots as Slots} from '@agnos-ui/svelte-headless/components/slider';
	import {createSlider} from '@agnos-ui/svelte-headless/components/slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';
	const defaultConfig: Partial<Props> = {
		slotStructure: SliderDefaultStructure,
		slotHandle: SliderDefaultHandle,
	};
</script>

<script lang="ts">
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let values: number[] | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		$$slots,
		$$props,
		defaultConfig,
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
		<slot slot="slot" name="structure" let:props {...props} />
		<svelte:component this={component} {...props}>
			<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
			<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
</div>
