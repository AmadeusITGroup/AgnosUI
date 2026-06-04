const e=`import type { Widget, WidgetFactory } from '@agnos-ui/core/types';
import type { CollapseProps as CoreCollapseProps, CollapseApi, CollapseState, CollapseDirectives } from '@agnos-ui/core/components/collapse';
export * from '@agnos-ui/core/components/collapse';
interface CollapseExtraProps {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * If \`true\`, collapse will be done horizontally.
     *
     * @defaultValue \`false\`
     */
    horizontal: boolean;
}
/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends Omit<CoreCollapseProps, 'transition'>, CollapseExtraProps {
}
/**
 * Represents a widget for handling collapse functionality.
 *
 * This type defines the structure of a CollapseWidget, which includes properties, state, API, and directives
 * necessary for managing the collapse behavior in the UI.
 *
 * @type {Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>}
 */
export type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>;
/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export declare function getCollapseDefaultConfig(): CollapseProps;
/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
export declare const createCollapse: WidgetFactory<CollapseWidget>;
`;export{e as default};
