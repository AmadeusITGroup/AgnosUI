const r=`import type { ProgressbarDirectives, ProgressbarState as CoreState, ProgressbarProps as CoreProps, ProgressbarApi } from '@agnos-ui/core/components/progressbar';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
import type { BSContextualClass } from '../../types';
export * from '@agnos-ui/core/components/progressbar';
export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;
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
export interface ProgressbarState extends CoreState, ProgressbarExtraProps {
}
export interface ProgressbarProps extends CoreProps, ProgressbarExtraProps {
}
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, ProgressbarDirectives>;
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
`;export{r as default};
