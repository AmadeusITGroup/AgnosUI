const e=`import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/svelte-headless/types';
export * from '@agnos-ui/core-bootstrap/components/slider';
export type SliderWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/slider').SliderWidget>;
export type SliderProps = WidgetProps<SliderWidget>;
export type SliderState = WidgetState<SliderWidget>;
export type SliderSlots = WidgetPropsSlots<SliderProps>;
export declare const createSlider: WidgetFactory<SliderWidget>;
`;export{e as default};
