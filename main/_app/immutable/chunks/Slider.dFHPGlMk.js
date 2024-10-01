const t=`<script lang="ts">
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
		directives: {sliderDirective},
		patchChangedProps,
	} = widget;
	$effect(() => patchChangedProps({...props, values}));
<\/script>

<input
	type="range"
	use:sliderDirective
	min={$min$}
	max={$max$}
	value={$sortedHandles$[0].value}
	step={$stepSize$}
	class="range"
	aria-label={$sortedHandles$[0].ariaLabel}
	onclick={widget.actions.click}
	onkeydown={(e) => widget.actions.keydown(e, 0)}
	onmousedown={(e) => widget.actions.mouseDown(e, 0)}
	ontouchstart={(e) => widget.actions.touchStart(e, 0)}
/>
`;export{t as default};
