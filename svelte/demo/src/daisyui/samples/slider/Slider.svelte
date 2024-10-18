<script lang="ts">
	import {createSlider, type SliderProps} from '@agnos-ui/svelte-headless/components/slider';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {values = $bindable(), ...props}: Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className'>> = $props();

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		props: {...props, values},
		events: {
			onValuesChange: (value: number[]) => {
				values = value;
			},
		},
	});
	const {
		stores: {min$, max$, stepSize$, sortedHandles$},
		directives: {sliderDirective, clickableAreaDirective, handleEventsDirective},
		patchChangedProps,
	} = widget;
	$effect(() => patchChangedProps({...props, values}));
</script>

<input
	type="range"
	use:sliderDirective
	use:clickableAreaDirective
	use:handleEventsDirective={{item: {id: 0}}}
	min={$min$}
	max={$max$}
	value={$sortedHandles$[0].value}
	step={$stepSize$}
	class="range"
	aria-label={$sortedHandles$[0].ariaLabel}
/>
