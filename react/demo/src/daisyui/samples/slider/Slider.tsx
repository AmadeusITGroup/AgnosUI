import {type SliderProps, createSlider} from '@agnos-ui/react-headless/components/slider';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';

export function Slider(props: Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className' | 'onValuesChange'>>) {
	const {
		state,
		actions: {click, keydown, mouseDown, touchStart},
		directives: {sliderDirective},
	} = useWidgetWithConfig(createSlider, props, 'slider');

	return (
		<input
			type="range"
			min={state.min}
			max={state.max}
			value={state.sortedHandles[0].value}
			onChange={() => null}
			step={state.stepSize}
			className="range"
			aria-label={state.sortedHandles[0].ariaLabel}
			onClick={(e) => click(e.nativeEvent)}
			onKeyDown={(e) => keydown(e.nativeEvent, 0)}
			onMouseDown={(e) => mouseDown(e.nativeEvent, 0)}
			onTouchStart={(e) => touchStart(e.nativeEvent, 0)}
			{...useDirective(sliderDirective)}
		/>
	);
}
