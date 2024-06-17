import type {WidgetPropsSlots, WidgetFactory} from '@agnos-ui/svelte-headless/types';
import {createSlider as coreCreateSlider, getSliderDefaultConfig as coreGetSliderDefaultConfig} from '@agnos-ui/core-bootstrap/components/slider';
import type {SliderWidget, SliderProps} from './slider.gen';

export type * from './slider.gen';
export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;
export const getSliderDefaultConfig: () => SliderProps = coreGetSliderDefaultConfig as any;

export interface SliderSlots extends WidgetPropsSlots<SliderProps> {}
