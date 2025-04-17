const e=`import type { WidgetsCommonPropsAndState } from '../commonProps';
import type { Directive, Widget, WidgetFactory } from '../../types';
/**
 * Options for displaying progress in a slider component.
 */
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
     * Height of the progress in %
     */
    height: number;
    /**
     * Id of the progress
     */
    id: number;
}
/**
 * Options for displaying a handle in a slider component.
 */
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
/**
 * Represents a handle in a slider component.
 */
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
    ariaLabel: string | undefined;
    /**
     * ariaValueText of the handle
     */
    ariaValueText: string | undefined;
    /**
     * aria-labelledBy of the handle
     */
    ariaLabelledBy: string | undefined;
}
/**
 * Represents a tick in a slider component.
 */
export interface SliderTick {
    /**
     * CSS classes to be applied on the tick
     */
    className?: string | null;
    /**
     * Visualized optional explanation of the label
     */
    legend?: string | null;
    /**
     * Position of the tick in percent
     */
    position: number;
    /**
     * If \`true\` the tick has selected style
     */
    selected: boolean;
    /**
     * Value of the tick
     */
    value: number;
    /**
     * If \`true\` the tick label is displayed
     */
    displayLabel: boolean;
}
interface SliderCommonPropsAndState extends WidgetsCommonPropsAndState {
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
     * If \`true\` the ticks are displayed on the slider
     *
     * @defaultValue \`false\`
     */
    showTicks: boolean;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean;
}
/**
 * Represents the state of a slider component.
 */
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
     * Array of ticks to display on the slider component
     */
    ticks: SliderTick[];
}
/**
 * Interface representing the properties for the Slider component.
 */
export interface SliderProps extends SliderCommonPropsAndState {
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => 'Value'
     * \`\`\`
     */
    ariaLabel: (sortedIndex: number) => string;
    /**
     * Return the value for the 'aria-labelledBy' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    ariaLabelledBy: (sortedIndex: number) => string;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => ''
     * \`\`\`
     */
    ariaValueText: (value: number, sortedIndex: number) => string;
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
     * Unit value between the ticks
     * If value is set to \`0\` the {@link stepSize} is used to space the ticks
     *
     * @defaultValue \`0\`
     */
    tickInterval: number;
    /**
     * If \`true\` the tick values are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showTickValues: boolean;
}
/**
 * Interface representing various directives used in the slider component.
 */
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
     * Directive to apply handle events handlers
     */
    handleEventsDirective: Directive<{
        item: {
            id: number;
        };
    }>;
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
    /**
     * Directive to apply to the slider tick
     */
    tickDirective: Directive<{
        tick: SliderTick;
    }>;
    /**
     * Directive to apply to the slider tick label
     */
    tickLabelDirective: Directive<{
        tick: SliderTick;
    }>;
}
/**
 * Represents a slider widget component.
 */
export type SliderWidget = Widget<SliderProps, SliderState, object, SliderDirectives>;
/**
 * Returns a shallow copy of the default slider config.
 * @returns a copy of the default config
 */
export declare function getSliderDefaultConfig(): SliderProps;
/**
 * Create a slider widget with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
export declare const createSlider: WidgetFactory<SliderWidget>;
export {};
`;export{e as default};
