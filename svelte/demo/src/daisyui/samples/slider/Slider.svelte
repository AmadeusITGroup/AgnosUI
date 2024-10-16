<script lang="ts">
	import {createSlider, type SliderProps} from '@agnos-ui/svelte-headless/components/slider';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {values = $bindable(), ...props}: Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className'>> = $props();

	const {
		state,
		directives: {sliderDirective},
		actions,
	} = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		get props() {
			return {...props, values};
		},
		enablePatchChanged: true,
		events: {
			onValuesChange: (value: number[]) => {
				values = value;
			},
		},
	});
</script>

<input
	type="range"
	use:sliderDirective
	min={state.min}
	max={state.max}
	value={state.sortedHandles[0].value}
	step={state.stepSize}
	class="range"
	aria-label={state.sortedHandles[0].ariaLabel}
	onclick={actions.click}
	onkeydown={(e) => actions.keydown(e, 0)}
	onmousedown={(e) => actions.mouseDown(e, 0)}
	ontouchstart={(e) => actions.touchStart(e, 0)}
/>
