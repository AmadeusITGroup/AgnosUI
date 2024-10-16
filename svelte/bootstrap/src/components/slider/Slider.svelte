<script lang="ts">
	import type {SliderContext, SliderProps, SliderSlotHandleContext, SliderSlotLabelContext} from './slider.gen';
	import {createSlider} from './slider.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import SliderDefaultStructure from './SliderDefaultStructure.svelte';
	import SliderDefaultHandle from './SliderDefaultHandle.svelte';

	let {values = $bindable(), ...props}: Partial<SliderProps> = $props();

	const {
		widget: {
			directives: {sliderDirective},
			state,
		},
		slotContext,
	} = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		get props() {
			return {...props, values};
		},
		enablePatchChanged: true,
		defaultConfig: {structure, handle, label},
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});
</script>

{#snippet structure(props: SliderContext)}
	<SliderDefaultStructure {...props} />
{/snippet}
{#snippet handle(props: SliderSlotHandleContext)}
	<SliderDefaultHandle {...props} />
{/snippet}
{#snippet label({value}: SliderSlotLabelContext)}
	{value}
{/snippet}

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective>
	<Slot content={state.structure} props={slotContext} />
</div>
