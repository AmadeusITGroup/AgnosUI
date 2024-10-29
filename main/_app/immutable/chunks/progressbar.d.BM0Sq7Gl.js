const e=`import type { ProgressbarDirectives, ProgressbarState as CoreState, ProgressbarProps as CoreProps } from '@agnos-ui/core/components/progressbar';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
import { type BSContextualClass } from '../../types';
export * from '@agnos-ui/core/components/progressbar';
/**
 * Represents the context for a Progressbar widget.
 * This interface is used to define the context object that is passed to the Progressbar widget.
 */
export interface ProgressbarContext extends WidgetSlotContext<ProgressbarWidget> {
}
interface ProgressbarExtraProps {
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
 * Represents the state of a Progressbar component.
 */
export interface ProgressbarState extends CoreState, ProgressbarExtraProps {
}
/**
 * Interface representing the properties for the Progressbar component.
 */
export interface ProgressbarProps extends CoreProps, ProgressbarExtraProps {
}
/**
 * Represents a Progressbar widget.
 *
 * This type defines the structure of a Progressbar widget, including its properties, state, and directives.
 */
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, object, ProgressbarDirectives>;
/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
export declare function getProgressbarDefaultConfig(): ProgressbarProps;
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
`;export{e as default};
