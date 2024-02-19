export * from '@agnos-ui/core/components/slider';

import {createSlider as coreCreateSlider} from '@agnos-ui/core/components/slider';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/slider').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;
export type SliderContext = AdaptSlotContentProps<import('@agnos-ui/core/components/slider').SliderContext>;
export type SliderSlotLabelContext = AdaptSlotContentProps<import('@agnos-ui/core/components/slider').SliderSlotLabelContext>;
export type SliderSlotHandleContext = AdaptSlotContentProps<import('@agnos-ui/core/components/slider').SliderSlotHandleContext>;
export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;
