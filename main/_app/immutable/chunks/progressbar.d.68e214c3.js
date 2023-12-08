const e=`import type { PropsConfig, SlotContent, Widget, WidgetSlotContext } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;
export interface ProgressbarCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * The minimum value.
     * @defaultValue 0
     */
    min: number;
    /**
     * The maximum value.
     * @defaultValue 100
     */
    max: number;
    /**
     * The current value.
     * @defaultValue 0
     */
    value: number;
    /**
     * The aria label.
     */
    ariaLabel: string;
    /**
     * Global template for the Progressbar content.
     */
    slotContent: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    slotDefault: SlotContent<ProgressbarContext>;
    /**
     * Height of the progressbar, can be any valid css height value.
     */
    height: string;
    /**
     * If \`true\`, shows a striped progressbar.
     */
    striped: boolean;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     */
    animated: boolean;
}
export interface ProgressbarState extends ProgressbarCommonPropsAndState {
    /**
     * Percentage of completion.
     */
    percentage: number;
    /**
     * \`true\` if the value is above its minimum value.
     */
    started: boolean;
    /**
     * \`true\` if the value has reached its maximum value.
     */
    finished: boolean;
    /**
     * The aria value text.
     */
    ariaValueText: string | undefined;
}
export interface ProgressbarProps extends ProgressbarCommonPropsAndState {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param value - current value
     * @param minimum - minimum value
     * @param maximum - maximum value
     */
    ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
}
export interface ProgressbarApi {
}
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, object>;
/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
export declare function getProgressbarDefaultConfig(): ProgressbarProps;
/**
 * Create an ProgressbarWidget with given config props
 * @param config - an optional progress bar config
 * @returns an ProgressbarWidget
 */
export declare function createProgressbar(config?: PropsConfig<ProgressbarProps>): ProgressbarWidget;
`;export{e as default};
