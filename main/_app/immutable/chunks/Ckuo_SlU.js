const e=`import type { WidgetSlotContext, SlotContent, Directive, Widget, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { TransitionFn } from '@agnos-ui/svelte-headless/services/transitions/baseTransitions';
/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
declare const export_getDrawerDefaultConfig: () => DrawerProps;
export { export_getDrawerDefaultConfig as getDrawerDefaultConfig };
/**
 * Represents the context for a Drawer widget.
 * This interface is an alias for \`WidgetSlotContext<DrawerWidget>\`.
 */
export type DrawerContext = WidgetSlotContext<DrawerWidget>;
/**
 * Represents the state of a Drawer component.
 */
export interface DrawerState {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link DrawerProps.backdrop|backdrop} is false or
     * because {@link DrawerProps.visible|visible} is false and there is no current transition.
     */
    backdropHidden: boolean;
    /**
     * Flag to show whether the drawer is fully hidden.
     */
    hidden: boolean;
    /**
     * Which element should contain the drawer and backdrop DOM elements.
     * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * If \`true\`, the drawer is shown; otherwise, it is hidden.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * If \`true\`, the drawer can be resized by the user.
     *
     * @defaultValue \`false\`
     */
    resizable: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the drawer component
     */
    structure: SlotContent<DrawerContext>;
    /**
     * Template for the drawer header
     */
    header: SlotContent<DrawerContext>;
    /**
     * Template for the drawer body
     */
    children: SlotContent<DrawerContext>;
}
/**
 * Represents the properties for the Drawer component.
 */
export interface DrawerProps {
    /**
     * The transition function will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    transition: TransitionFn;
    /**
     * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    verticalTransition: TransitionFn;
    /**
     * The transition to use for the backdrop behind the drawer (if present).
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    backdropTransition: TransitionFn;
    /**
     * If \`true\` opening and closing will be animated.
     */
    animated: boolean;
    /**
     * aria-labelledby attribute to use for the drawer element.
     */
    ariaLabelledBy: string;
    /**
     * aria-describedby attribute to use for the drawer element.
     */
    ariaDescribedBy: string;
    /**
     * The width of the drawer in pixels.
     */
    width: number;
    /**
     * The height of the drawer in pixels.
     */
    height: number;
    /**
     * If \`true\` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
     */
    backdrop: boolean;
    /**
     * If \`true\` allows body scrolling when the drawer is open.
     */
    bodyScroll: boolean;
    /**
     * Event to be triggered when the transition is completed and the drawer is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHidden: () => void;
    /**
     * Event to be triggered when the transition is completed and the drawer is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onShown: () => void;
    /**
     * An event emitted when the width is changed.
     *
     * Event payload is equal to the newly selected width.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onWidthChange: (width: number) => void;
    /**
     * An event emitted when the height is changed.
     *
     * Event payload is equal to the newly selected height.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHeightChange: (width: number) => void;
    /**
     * Event to be triggered when the visible property changes.
     *
     * @param visible - new value of the visible propery
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Which element should contain the drawer and backdrop DOM elements.
     * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    container: HTMLElement | null;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    backdropClass: string;
    /**
     * If \`true\`, the drawer is shown; otherwise, it is hidden.
     *
     * @defaultValue \`false\`
     */
    visible: boolean;
    /**
     * If \`true\`, the drawer can be resized by the user.
     *
     * @defaultValue \`false\`
     */
    resizable: boolean;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Global template for the drawer component
     */
    structure: SlotContent<DrawerContext>;
    /**
     * Template for the drawer header
     */
    header: SlotContent<DrawerContext>;
    /**
     * Template for the drawer body
     */
    children: SlotContent<DrawerContext>;
}
/**
 * Represents the directives for the Drawer component.
 */
export interface DrawerDirectives {
    /**
     * Directive to put on the drawer DOM element.
     */
    drawerDirective: Directive;
    /**
     * Directive to put on the backdrop DOM element.
     */
    backdropDirective: Directive;
    /**
     * Directive to put on the splitter DOM element.
     */
    splitterDirective: Directive;
    /**
     * Directive to put on the container DOM element in order for the drawer to size correctly.
     */
    containerDirective: Directive;
    /**
     * Portal directive to put on the drawer DOM element.
     */
    drawerPortalDirective: Directive;
    /**
     * Portal directive to put on the backdrop DOM element.
     */
    backdropPortalDirective: Directive;
}
/**
 * Represents a Drawer widget component.
 */
export type DrawerWidget = Widget<DrawerProps, DrawerState, DrawerApi, DrawerDirectives>;
/**
 * Create a Drawer with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
declare const export_createDrawer: WidgetFactory<DrawerWidget>;
export { export_createDrawer as createDrawer };
/**
 * Possible values for the drawer positions
 */
export type DrawerPositions = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
/**
 * Interface representing the API for a Drawer component.
 */
export interface DrawerApi {
    /**
     * Trigger the opening of the drawer.
     */
    open: () => void;
    /**
     * Trigger the closing of the drawer.
     */
    close: () => void;
}
`;export{e as default};
