const e=`import type { DrawerProps as CoreProps, DrawerState as CoreState, DrawerApi, DrawerDirectives as DrawerCoreDirectives } from '@agnos-ui/core/components/drawer';
import type { TransitionFn } from '@agnos-ui/core/services/transitions/baseTransitions';
import type { Directive, SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/drawer';
/**
 * Represents the context for a Drawer widget.
 * This interface is an alias for \`WidgetSlotContext<DrawerWidget>\`.
 */
export type DrawerContext = WidgetSlotContext<DrawerWidget>;
/**
 * Represents additional properties for the Drawer widget like slots etc.
 */
interface DrawerExtraProps {
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
 * Represents the state of a Drawer component.
 */
export interface DrawerState extends CoreState, DrawerExtraProps {
}
/**
 * Represents the properties for the Drawer component.
 */
export interface DrawerProps extends CoreProps, DrawerExtraProps {
    /**
     * The transition function will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseHorizontalTransition
     * \`\`\`
     */
    transition: TransitionFn;
    /**
     * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    verticalTransition: TransitionFn;
    /**
     * The transition to use for the backdrop behind the drawer (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    backdropTransition: TransitionFn;
}
/**
 * Represents the directives for the Drawer component.
 */
export interface DrawerDirectives extends DrawerCoreDirectives {
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
 * Create a Drawer with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
export declare const createDrawer: WidgetFactory<DrawerWidget>;
`;export{e as default};
