const e=`import type { WidgetSlotContext, SlotContent, Widget, Directive } from '@agnos-ui/angular-headless';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;
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
     */
    min: number;
    /**
     * The maximum value.
     */
    max: number;
    /**
     * The current value.
     */
    value: number;
    /**
     * The aria label.
     */
    ariaLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    slotStructure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
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
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
export interface ProgressbarProps {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     */
    ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
    /**
     * The minimum value.
     */
    min: number;
    /**
     * The maximum value.
     */
    max: number;
    /**
     * The current value.
     */
    value: number;
    /**
     * The aria label.
     */
    ariaLabel: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * Global template for the Progressbar.
     */
    slotStructure: SlotContent<ProgressbarContext>;
    /**
     * Label of the progress.
     */
    children: SlotContent<ProgressbarContext>;
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
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: BSContextualClass | undefined;
}
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, ProgressbarDirectives>;
export interface ProgressbarDirectives {
    /**
     * A directive to be applied to the main container that handles aria attributes.
     */
    ariaDirective: Directive;
}
export interface ProgressbarApi {
}
`;export{e as default};
