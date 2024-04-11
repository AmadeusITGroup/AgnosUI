import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '@agnos-ui/angular-headless';
import {createSlider as coreCreateSlider} from '@agnos-ui/core-bootstrap/components/slider';

export * from '@agnos-ui/core-bootstrap/components/slider';

export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/slider').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;
export type SliderContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderContext>;
export type SliderSlotLabelContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderSlotLabelContext>;
export type SliderSlotHandleContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/slider').SliderSlotHandleContext>;

export const createSlider: WidgetFactory<SliderWidget> = coreCreateSlider as any;
