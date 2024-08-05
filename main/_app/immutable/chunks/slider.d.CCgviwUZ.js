const e=`import type { SliderActions, SliderDirectives, SliderHandle, SliderProps as CoreProps, SliderState as CoreState } from '@agnos-ui/core/components/slider';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/slider';
export type SliderContext = WidgetSlotContext<SliderWidget>;
export type SliderSlotLabelContext = SliderContext & {
    value: number;
};
export type SliderSlotHandleContext = SliderContext & {
    item: SliderHandle;
};
interface SliderExtraProps {
    /**
     * Slot to change the default display of the slider
     */
    structure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    label: SlotContent<SliderSlotLabelContext>;
    /**
     *  Slot to change the handlers
     */
    handle: SlotContent<SliderSlotHandleContext>;
}
export interface SliderState extends CoreState, SliderExtraProps {
}
export interface SliderProps extends CoreProps, SliderExtraProps {
}
export type SliderWidget = Widget<SliderProps, SliderState, object, SliderActions, SliderDirectives>;
/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
export declare function getSliderDefaultConfig(): SliderProps;
/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export declare const createSlider: WidgetFactory<SliderWidget>;
`;export{e as default};
