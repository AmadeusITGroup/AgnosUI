import type {SliderDirectives, SliderHandle, SliderProps as CoreProps, SliderState as CoreState} from '@agnos-ui/core/components/slider';
import {createSlider as createCoreSlider, getSliderDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/slider';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';

export * from '@agnos-ui/core/components/slider';

/**
 * Represents the context for a Slider component.
 * This type is an alias for `WidgetSlotContext<SliderWidget>`.
 */
export type SliderContext = WidgetSlotContext<SliderWidget>;
/**
 * Represents the context for a slider slot label, extending the base `SliderContext`
 * with an additional `value` property.
 */
export type SliderSlotLabelContext = SliderContext & {value: number};
/**
 * Represents the context for a slider slot handle.
 * This type extends the `SliderContext` and includes an additional `item` property of type `SliderHandle`.
 */
export type SliderSlotHandleContext = SliderContext & {item: SliderHandle};

interface SliderExtraProps {
	/**
	 * Slot to change the default display of the slider
	 */
	structure: SlotContent<SliderContext>;

	/**
	 * Slot to change the default labels of the slider
	 *
	 * @defaultValue
	 * ```ts
	 * ({value}: SliderSlotLabelContext) => '' + value
	 * ```
	 */
	label: SlotContent<SliderSlotLabelContext>;

	/**
	 *  Slot to change the handlers
	 */
	handle: SlotContent<SliderSlotHandleContext>;
}

/**
 * Represents the state of a slider component.
 */
export interface SliderState extends CoreState, SliderExtraProps {}
/**
 * Represents the properties for the Slider component.
 */
export interface SliderProps extends CoreProps, SliderExtraProps {}

/**
 * Represents a slider widget component.
 */
export type SliderWidget = Widget<SliderProps, SliderState, object, SliderDirectives>;

const defaultConfigExtraProps: SliderExtraProps = {
	structure: undefined,
	label: ({value}: SliderSlotLabelContext) => '' + value,
	handle: undefined,
};

/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
export function getSliderDefaultConfig(): SliderProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */

export const createSlider: WidgetFactory<SliderWidget> = extendWidgetProps(createCoreSlider, defaultConfigExtraProps, {});
