const e=`import { type TransitionFn } from '../../services/transitions/baseTransitions';
import type { Directive, Widget, WidgetFactory } from '../../types';
/**
 * Interface representing the common properties and state for a collapse component.
 */
interface CollapseCommonPropsAndState {
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
}
/**
 * Represents the state of a Collapse component.
 */
export interface CollapseState extends CollapseCommonPropsAndState {
    /**
     * Is \`true\` when the collapse is hidden. Compared to \`visible\`, this is updated after the transition is executed.
     */
    hidden: boolean;
}
/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends CollapseCommonPropsAndState {
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
     * The transition function will be executed when the collapse is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    transition: TransitionFn;
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
/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export declare function getCollapseDefaultConfig(): CollapseProps;
/**
 * Create an CollapseWidget factory
 * @param transitionFn - the transition function that will be used for the collapse
 * @returns an CollapseWidget
 */
export declare const createCollapse: WidgetFactory<CollapseWidget>;
export {};
`;export{e as default};
