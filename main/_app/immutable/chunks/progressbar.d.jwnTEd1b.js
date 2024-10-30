const e=`import type { Directive, PropsConfig, Widget } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
interface ProgressbarCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * The minimum value.
     *
     * @defaultValue \`0\`
     */
    min: number;
    /**
     * The maximum value.
     *
     * @defaultValue \`100\`
     */
    max: number;
    /**
     * The current value.
     *
     * @defaultValue \`0\`
     */
    value: number;
    /**
     * The aria label.
     *
     * @defaultValue \`'Progressbar'\`
     */
    ariaLabel: string;
}
/**
 * Interface representing directives for a progress bar component.
 */
export interface ProgressbarDirectives {
    /**
     * A directive to be applied to the main container that handles aria attributes.
     */
    ariaDirective: Directive;
}
/**
 * Represents the state of a progress bar component.
 */
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
/**
 * Interface representing the properties for the Progressbar component.
 */
export interface ProgressbarProps extends ProgressbarCommonPropsAndState {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param value - current value
     * @param minimum - minimum value
     * @param maximum - maximum value
     *
     * @defaultValue
     * \`\`\`ts
     * () => undefined
     * \`\`\`
     */
    ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
}
/**
 * Represents a Progressbar widget with specific properties, state, API, and directives.
 */
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, object, ProgressbarDirectives>;
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
export {};
`;export{e as default};