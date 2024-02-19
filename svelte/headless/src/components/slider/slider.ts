import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/slider';

export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/slider').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;
export type SliderSlots = WidgetPropsSlots<SliderProps>;
import {createSlider as coreCreateSlider} from '@agnos-ui/core/components/slider';
export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;
