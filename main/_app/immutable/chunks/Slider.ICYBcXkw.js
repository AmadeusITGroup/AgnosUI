const t=`<script lang="ts" context="module">
	import type {SliderProps as Props, SliderSlots as Slots} from './slider';
	import {createSlider} from './slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: SliderDefaultStructure,
		slotHandle: SliderDefaultHandle,
	};
<\/script>

<script lang="ts">
	type $$Props = Partial<Props>;
	type $$Slots = Slots;

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
	export const api = widget.api;

	const {
		stores: {slotStructure$},
		directives: {sliderDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);
	$: slotContext = {widget, state: $state$};
<\/script>

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
`;export{t as default};
