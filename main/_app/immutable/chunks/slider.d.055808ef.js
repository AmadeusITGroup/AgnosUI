const e=`import type { WidgetsCommonPropsAndState } from './commonProps';
import type { PropsConfig } from './services';
import type { Directive, Widget } from './types';
export interface ProgressDisplayOptions {
    /**
     * Left offset of the progress in %
     */
    left: number;
    /**
     * Bottom offset of the progress in %
     */
    bottom: number;
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
    left: number;
    /**
     * Top offset of the handle in %
     */
    top: number;
}
export interface SliderCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number;
    /**
     * Unit value between slider steps
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean;
    /**
     * Current slider values
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     */
    showMinMaxLabels: boolean;
}
export interface SliderState extends SliderCommonPropsAndState {
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
    sortedHandles: {
        value: number;
        id: number;
        ariaLabel: string;
    }[];
    /**
     * Array of objects representing progress display options
     */
    progressDisplayOptions: ProgressDisplayOptions[];
    /**
     * Array of objects representing handle display options
     */
    handleDisplayOptions: HandleDisplayOptions[];
}
export interface SliderProps extends SliderCommonPropsAndState {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     */
    ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     */
    onValuesChange: (values: number[]) => void;
}
export interface SliderApi {
}
export interface SliderDirectives {
    /**
     * Directive to get the slider component elementRef
     */
    sliderDirective: Directive;
    /**
     * Directive to get the minLabel elementRef
     */
    minLabelDirective: Directive;
    /**
     * Directive to get the maxLabel elementRef
     */
    maxLabelDirective: Directive;
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
}
export type SliderWidget = Widget<SliderProps, SliderState, SliderApi, SliderActions, SliderDirectives>;
/**
 * Returns a shallow copy of the default slider config.
 * @returns a copy of the default config
 */
export declare function getSliderDefaultConfig(): {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     */
    ariaLabelHandle: (value: number, sortedIndex: number, index: number) => string;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     */
    onValuesChange: (values: number[]) => void;
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number;
    /**
     * Unit value between slider steps
     */
    stepSize: number;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean;
    /**
     * Current slider values
     */
    values: number[];
    /**
     * If \`true\` the value labels are displayed on the slider
     */
    showValueLabels: boolean;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     */
    showMinMaxLabels: boolean;
    className: string;
};
/**
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export declare function createSlider(config?: PropsConfig<SliderProps>): SliderWidget;
`;export{e as default};
