const e=`import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { Directive, WidgetFactory } from '../../types';
import { type Widget } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
/**
 * Possible values for the drawer positions
 */
export type DrawerPositions = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
interface DrawerCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`'w-full'\`
     */
    className: string;
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
     * Size of the drawer in pixel once the user start interacting.
     * It corresponds to the height or the width depending on the drawer orientation
     *
     * @defaultValue \`null\`
     */
    size: number | null;
}
/**
 * Interface representing the properties for the Drawer component.
 */
export interface DrawerProps extends DrawerCommonPropsAndState {
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
     *
     * @defaultValue \`true\`
     */
    animated: boolean;
    /**
     * aria-labelledby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string;
    /**
     * aria-describedby attribute to use for the drawer element.
     *
     * @defaultValue \`''\`
     */
    ariaDescribedBy: string;
    /**
     * If \`true\` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
     *
     * @defaultValue \`true\`
     */
    backdrop: boolean;
    /**
     * If \`true\` allows body scrolling when the drawer is open.
     *
     * @defaultValue \`false\`
     */
    bodyScroll: boolean;
    /**
     * If \`true\` focuses the drawer when it is opened.
     *
     * @defaultValue \`true\`
     */
    focusOnInit: boolean;
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
     * An event emitted when the drawer size changes (width or height depending on the orientation).
     *
     * Event payload is equal to the newly selected width or height.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onSizeChange: (size: number | null) => void;
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
     * Event to be triggered when the minimized state changes.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onMinimizedChange: (isMinimized: boolean) => void;
    /**
     * Event to be triggered when the maximized state changes.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onMaximizedChange: (isMaximized: boolean) => void;
    /**
     * Event to be triggered when the user starts or stops resizing the drawer.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onResizingChange: (isResizing: boolean) => void;
}
/**
 * Represents the state of a Drawer component.
 */
export interface DrawerState extends DrawerCommonPropsAndState {
    /**
     * Whether the backdrop is fully hidden. This can be true either because {@link DrawerProps.backdrop|backdrop} is false or
     * because {@link DrawerProps.visible|visible} is false and there is no current transition.
     */
    backdropHidden: boolean;
    /**
     * Flag to show whether the drawer is fully hidden.
     */
    hidden: boolean;
}
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
/**
 * Interface representing various directives used in the Drawer component.
 */
export interface DrawerDirectives {
    /**
     * Directive to put on the drawer DOM element.
     */
    drawerDirective: Directive;
    /**
     * Portal directive to put on the drawer DOM element.
     */
    drawerPortalDirective: Directive;
    /**
     * Directive to put on the backdrop DOM element.
     */
    backdropDirective: Directive;
    /**
     * Portal directive to put on the backdrop DOM element.
     */
    backdropPortalDirective: Directive;
    /**
     * Directive to put on the splitter DOM element.
     */
    splitterDirective: Directive;
}
/**
 * Represents a Drawer widget component.
 */
export type DrawerWidget = Widget<DrawerProps, DrawerState, DrawerApi, DrawerDirectives>;
/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
export declare function getDrawerDefaultConfig(): DrawerProps;
/**
 * Create a Drawer widget with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
export declare const createDrawer: WidgetFactory<DrawerWidget>;
export {};
`;export{e as default};
