const e=`export * from '@agnos-ui/core-bootstrap/components/slider';
import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState, PropType, AdaptSlotContentProps } from '@agnos-ui/svelte-headless/types';
import type { SliderWidget as CoreWidget, SliderContext as CoreContext, SliderSlotLabelContext as CoreLabelContext, SliderSlotHandleContext as CoreHandleContext } from '@agnos-ui/core-bootstrap/components/slider';
export interface SliderWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface SliderProps extends WidgetProps<SliderWidget> {
}
export interface SliderState extends WidgetState<SliderWidget> {
}
export interface SliderApi extends PropType<SliderWidget, 'api'> {
}
export interface SliderSlots extends WidgetPropsSlots<SliderProps> {
}
export interface SliderContext extends AdaptSlotContentProps<CoreContext> {
}
export interface SliderSlotHandleContext extends AdaptSlotContentProps<CoreHandleContext> {
}
export interface SliderSlotLabelContext extends AdaptSlotContentProps<CoreLabelContext> {
}
export declare const createSlider: WidgetFactory<SliderWidget>;
`;export{e as default};
