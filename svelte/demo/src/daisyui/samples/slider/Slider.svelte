<script lang="ts">
	import {createSlider, type SliderProps} from '@agnos-ui/svelte-headless/components/slider';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {values = $bindable(), ...props}: Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className'>> = $props();

	const {
		state,
		attachments: {sliderDirective, clickableAreaDirective, handleEventsDirective},
	} = callWidgetFactory(createSlider, {
		get props() {
			return {...props, values};
		},
		events: {
			onValuesChange: (value: number[]) => {
				values = value;
			},
		},
	});
</script>

<input
	type="range"
	{@attach sliderDirective()}
	{@attach clickableAreaDirective()}
	{@attach handleEventsDirective({item: {id: 0}})}
	min={state.min}
	max={state.max}
	value={state.sortedHandles[0].value}
	step={state.stepSize}
	class="range"
	aria-label={state.sortedHandles[0].ariaLabel}
/>
