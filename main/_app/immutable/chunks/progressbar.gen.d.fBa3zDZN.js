const e=`import type { WidgetSlotContext, SlotContent, Widget, WidgetFactory, Directive } from '@agnos-ui/react-headless/types';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
declare const export_getProgressbarDefaultConfig: () => ProgressbarProps;
export { export_getProgressbarDefaultConfig as getProgressbarDefaultConfig };
/**
 * Represents the context for a Progressbar widget.
 * This interface is used to define the context object that is passed to the Progressbar widget.
 */
export interface ProgressbarContext extends WidgetSlotContext<ProgressbarWidget> {
}
/**
 * Represents the state of a Progressbar component.
 */
export interface ProgressbarState {
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    structure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    height: string;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    striped: boolean;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    animated: boolean;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
/**
 * Interface representing the properties for the Progressbar component.
 */
export interface ProgressbarProps {
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    structure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    height: string;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    striped: boolean;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    animated: boolean;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
/**
 * Represents a Progressbar widget.
 *
 * This type defines the structure of a Progressbar widget, including its properties, state, and directives.
 */
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, object, ProgressbarDirectives>;
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
declare const export_createProgressbar: WidgetFactory<ProgressbarWidget>;
export { export_createProgressbar as createProgressbar };
/**
 * Interface representing directives for a progress bar component.
 */
export interface ProgressbarDirectives {
    /**
     * A directive to be applied to the main container that handles aria attributes.
     */
    ariaDirective: Directive;
}
`;export{e as default};
