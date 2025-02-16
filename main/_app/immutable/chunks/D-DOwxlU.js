const e=`import type { PropsConfig, Directive, Widget } from '@agnos-ui/react-headless/types';
/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
declare const export_getCollapseDefaultConfig: () => CollapseProps;
export { export_getCollapseDefaultConfig as getCollapseDefaultConfig };
/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
declare const export_createCollapse: (config?: PropsConfig<CollapseProps>) => CollapseWidget;
export { export_createCollapse as createCollapse };
/**
 * Represents the state of a collapse component.
 * Extends the properties and state from \`CollapseCommonPropsAndState\`.
 */
export interface CollapseState {
    /**
     * Is \`true\` when the collapse is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
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
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
}
/**
 * Properties for the Collapse component.
 */
export interface CollapseProps {
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     * @param visible - The new visibility state of the collapse.
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Callback called when the collapse is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Callback called when the collapse is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * If \`true\`, collapse opening will be animated at init time.
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean;
    /**
     * If \`true\`, collapse closing and opening will be animated.
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * id of the collapse
     *
     * @defaultValue \`''\`
     */
    id: string;
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
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean;
}
/**
 * Interface representing the API for a collapsible component.
 */
export interface CollapseApi {
    /**
     * Triggers collapse closing programmatically.
     */
    close(): void;
    /**
     * Triggers the collapse content to be displayed for the user.
     */
    open(): void;
    /**
     * Toggles the collapse content visibility.
     */
    toggle(): void;
}
/**
 * Interface representing the directives used in a collapse component.
 */
export interface CollapseDirectives {
    /**
     * Directive to apply the collapse.
     */
    collapseDirective: Directive;
    /**
     * Directive to apply to a trigger;
     */
    triggerDirective: Directive;
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
`;export{e as default};
