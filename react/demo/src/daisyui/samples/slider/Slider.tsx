import {type SliderProps, createSlider} from '@agnos-ui/react-headless/components/slider';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';

export function Slider(props: Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className' | 'onValuesChange'>>) {
	const [
		state,
		{
			directives: {sliderDirective, clickableAreaDirective, handleEventsDirective},
		},
	] = useWidgetWithConfig(createSlider, props, 'slider');

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
			{...useDirectives([sliderDirective, undefined], [clickableAreaDirective, undefined], [handleEventsDirective, {item: {id: 0}}])}
		/>
	);
}
