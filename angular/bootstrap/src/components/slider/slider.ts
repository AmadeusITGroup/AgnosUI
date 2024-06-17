import type {WidgetFactory} from '@agnos-ui/angular-headless';
import {createSlider as coreCreateSlider, getSliderDefaultConfig as coreGetSliderDefaultConfig} from '@agnos-ui/core-bootstrap/components/slider';
import type {SliderProps, SliderWidget} from './slider.gen';

export type * from './slider.gen';
export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;
export const getSliderDefaultConfig: () => SliderProps = coreGetSliderDefaultConfig as any;
