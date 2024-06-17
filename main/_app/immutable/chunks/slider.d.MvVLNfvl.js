const e=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { SliderWidget, SliderProps } from './slider.gen';
export type * from './slider.gen';
export declare const createSlider: WidgetFactory<SliderWidget>;
export declare const getSliderDefaultConfig: () => SliderProps;
export interface SliderSlots extends WidgetPropsSlots<SliderProps> {
}
`;export{e as default};
