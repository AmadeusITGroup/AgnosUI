const e=`import type { Directive, PropsConfig, Widget } from '@agnos-ui/core/types';
export interface CollapseCommonPropsAndState {
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
export interface CollapseState extends CollapseCommonPropsAndState {
    /**
     * Is \`true\` when the collapse is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
}
export interface CollapseProps extends CollapseCommonPropsAndState {
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
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
}
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
export interface CollapseDirectives {
    /**
     * the transition directive, piloting what is the visual effect of going from hidden to visible
     */
    transitionDirective: Directive;
}
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
export declare function createCollapse(config?: PropsConfig<CollapseProps>): CollapseWidget;
`;export{e as default};
