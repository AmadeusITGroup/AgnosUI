const e=`import type { WidgetSlotContext, SlotContent, Widget, WidgetFactory, Directive } from '@agnos-ui/react-headless/types';
/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
declare const export_getSliderDefaultConfig: () => SliderProps;
export { export_getSliderDefaultConfig as getSliderDefaultConfig };
export type SliderContext = WidgetSlotContext<SliderWidget>;
export type SliderSlotLabelContext = SliderContext & {
    value: number;
};
export type SliderSlotHandleContext = SliderContext & {
    item: SliderHandle;
};
export interface SliderState {
    /**
     * Sorted slider values
     */
    sortedValues: number[];
    /**
     * Combined label left offset in %
     */
    combinedLabelPositionLeft: number;
    /**
     * Combined label top offset in %
     */
    combinedLabelPositionTop: number;
    /**
     * If true, the minimum label will be visible
     */
    minValueLabelDisplay: boolean;
    /**
     * If true, the maximum label will be visible
     */
    maxValueLabelDisplay: boolean;
    /**
     * If true, the label when the handles are close is visible
     */
    combinedLabelDisplay: boolean;
    /**
     * Array of the sorted handles to display
     */
    sortedHandles: SliderHandle[];
    /**
     * Array of objects representing progress display options
     */
    progressDisplayOptions: ProgressDisplayOptions[];
    /**
     * Array of objects representing handle display options
     */
    handleDisplayOptions: HandleDisplayOptions[];
    /**
     * Check if the slider is interactive, meaning it is not disabled or readonly
     */
    interactive: boolean;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    vertical: boolean;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showMinMaxLabels: boolean;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
export interface SliderProps {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => '' + value
     * \`\`\`
     */
    ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => '' + value
     * \`\`\`
     */
    ariaValueText: (value: number, sortedIndex: number, index: number) => string;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onValuesChange: (values: number[]) => void;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    vertical: boolean;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showMinMaxLabels: boolean;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
export type SliderWidget = Widget<SliderProps, SliderState, object, SliderActions, SliderDirectives>;
/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
declare const export_createSlider: WidgetFactory<SliderWidget>;
export { export_createSlider as createSlider };
export interface ProgressDisplayOptions {
    /**
     * Right offset of the progress in %
     */
    left: number | null;
    /**
     * Left offset of the progress in %
     */
    right: number | null;
    /**
     * Top offset of the progress in %
     */
    top: number | null;
    /**
     * Bottom offset of the progress in %
     */
    bottom: number | null;
    /**
     * Width of the progress in %
     */
    width: number;
    /**
     * Height of hte progress in %
     */
    height: number;
}
export interface HandleDisplayOptions {
    /**
     * Left offset of the handle in %
     */
    left: number | null;
    /**
     * Top offset of the handle in %
     */
    top: number | null;
}
export interface SliderHandle {
    /**
     * Value of the handle
     */
    value: number;
    /**
     * Handle id
     */
    id: number;
    /**
     * ariaLabel of the handle
     */
    ariaLabel: string;
    /**
     * ariaValueText of the handle
     */
    ariaValueText: string;
}
export interface SliderDirectives {
    /**
     * Directive to get the slider component elementRef
     */
    sliderDirective: Directive;
    /**
     * Directive used to style the progress display for each handle
     */
    progressDisplayDirective: Directive<{
        option: ProgressDisplayOptions;
    }>;
    /**
     * Directive to apply to the slider clickable area, to directly move the handle to a given specific position
     */
    clickableAreaDirective: Directive;
    /**
     * Directive to apply to the slider handle if any
     */
    handleDirective: Directive<{
        item: SliderHandle;
    }>;
    /**
     * Directive to get the minLabel elementRef
     */
    minLabelDirective: Directive;
    /**
     * Directive to get the maxLabel elementRef
     */
    maxLabelDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is active
     */
    combinedHandleLabelDisplayDirective: Directive;
    /**
     * Directive to apply to the handle when combined label display is not active
     */
    handleLabelDisplayDirective: Directive<{
        index: number;
    }>;
}
export interface SliderActions {
    /**
     * Method to handle click on the slider
     * @param event - mouse event
     */
    click(event: MouseEvent): void;
    /**
     * Method to process the keyboard event
     * @param event - keyboard event object
     * @param handleNumber - id of the modified handle
     */
    keydown(event: KeyboardEvent, handleNumber: number): void;
    /**
     * Method describing the behavior of the slider handle on mouse down event
     * @param event - mouse event
     * @param handleId - numeric id of the handle
     */
    mouseDown(event: MouseEvent, handleId: number): void;
    /**
     * Method describing the behavior of the slider handle on touch start event
     * @param event - touch event
     * @param handleId - number id of the handle
     */
    touchStart(event: TouchEvent, handleId: number): void;
}
`;export{e as default};
