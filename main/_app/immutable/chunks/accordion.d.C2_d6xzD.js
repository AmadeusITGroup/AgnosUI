const n=`import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
export interface AccordionProps extends WidgetsCommonPropsAndState {
    /**
     * If \`true\`, only one accordion-item at the time can stay open.
     */
    closeOthers: boolean;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     */
    onShown: (itemId: string) => void;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     */
    onHidden: (itemId: string) => void;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     *
     * It is a prop of the accordion-item.
     */
    itemId: string;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * It is a prop of the accordion-item.
     */
    itemDestroyOnHide: boolean;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     *
     * It is a prop of the accordion-item.
     */
    itemDisabled: boolean;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     *
     * It is a prop of the accordion-item.
     */
    itemVisible: boolean;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * It is a prop of the accordion-item.
     */
    itemAnimated: boolean;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * It is a prop of the accordion-item.
     */
    itemTransition: TransitionFn;
    /**
     * An event fired when an item is shown.
     *
     * It is a prop of the accordion-item.
     */
    onItemShown: () => void;
    /**
     * An event fired when an item is hidden.
     *
     * It is a prop of the accordion-item.
     */
    onItemHidden: () => void;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     *
     * It is a prop of the accordion-item.
     */
    onItemVisibleChange: (visible: boolean) => void;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemClass: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemHeaderClass: string;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemButtonClass: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * It is a prop of the accordion-item.
     */
    itemBodyContainerClass: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemBodyClass: string;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * It is a prop of the accordion-item.
     */
    itemHeadingTag: string;
}
export interface AccordionState extends WidgetsCommonPropsAndState {
    /**
     * Array containing all the accordion-items contained in the accordion.
     */
    itemsWidget: AccordionItemWidget[];
}
export interface AccordionApi {
    /**
     * Given the itemId, will expand the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    expand(itemId: string): void;
    /**
     * Given the itemId, will collapse the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    collapse(itemId: string): void;
    /**
     * Given the itemId, will toggle the corresponding accordion-item.
     *
     * If the itemId is not valid, nothing will happen.
     */
    toggle(itemId: string): void;
    /**
     * It will expand all the items in the accordion.
     *
     * If \`closeOthers\` is \`true\` it will expand only the last accordion-item.
     */
    expandAll(): void;
    /**
     * It will collapse all the accordion-items in the accordion.
     */
    collapseAll(): void;
    /**
     * Creates a new accordionItem.
     */
    registerItem(itemConfig?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
}
export interface AccordionDirectives {
    /**
     * Directive to put on the accordion DOM element
     */
    accordionDirective: Directive;
}
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;
export interface AccordionItemActions {
    /**
     * Action to be called when the user clicks on the accordion-item button. If the accordion-item is disabled nothing will happen.
     */
    click(): void;
}
export interface AccordionItemApi {
    /**
     * It will collapse the accordion-item.
     */
    collapse(): void;
    /**
     * It will expand the accordion-item.
     */
    expand(): void;
    /**
     * It will toggle the accordion-item.
     */
    toggle(): void;
    /**
     * Method to be called after the initialization to allow animations.
     */
    initDone(): void;
}
export interface AccordionItemDirectives {
    /**
     * Directive to use in special cases, if the accordion header does not use a button element to control the collapsing.
     */
    toggleDirective: Directive;
    /**
     * Directive to put on the button element that will control the collapsing of the accordion-item.
     */
    buttonDirective: Directive;
    /**
     * Directive to put on the accordion-item header that will contain the button element.
     */
    headerDirective: Directive;
    /**
     * Directive to put on the accordion-item body.
     */
    bodyDirective: Directive;
    /**
     * Directive to apply the itemTransition
     */
    transitionDirective: Directive;
    /**
     * Directive to apply aria attributes to the expanded body panel
     */
    bodyContainerAttrsDirective: Directive;
    /**
     * Directive to be put on the accordion-item body container. It will handle the animation.
     */
    bodyContainerDirective: Directive;
    /**
     * Directive to be put on the accordion-item. It will handle adding the accordion-item to the accordion.
     */
    accordionItemDirective: Directive;
}
export interface AccordionItemCommonPropsAndState {
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    itemVisible: boolean;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    itemDisabled: boolean;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    itemId: string;
    /**
     * CSS classes to add on the accordion-item DOM element.
     */
    itemClass: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    itemHeaderClass: string;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    itemButtonClass: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    itemBodyContainerClass: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    itemBodyClass: string;
    /**
     * The html tag to use for the accordion-item-header.
     */
    itemHeadingTag: string;
}
export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
    /**
     * If \`true\`, accordion-item will be animated.
     */
    itemAnimated: boolean;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    itemTransition: TransitionFn;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    itemDestroyOnHide: boolean;
    /**
     * An event fired when an item is shown.
     */
    onItemShown: () => void;
    /**
     * An event fired when an item is hidden.
     */
    onItemHidden: () => void;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    onItemVisibleChange: (visible: boolean) => void;
}
export interface AccordionItemState extends AccordionItemCommonPropsAndState {
    /**
     * If \`true\` the content of the accordion-item collapse should be in DOM. Its value depends on the
     * value of the \`itemVisible\` and \`itemDestroyOnHide\`.
     */
    shouldBeInDOM: boolean;
}
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export declare function getAccordionDefaultConfig(): AccordionProps;
/**
 * Creates a new AccordionItem widget instance.
 * @param config - config of the accordion item, either as a store or as an object containing values or stores.
 * @returns a new accordion item widget instance
 */
export declare function createAccordionItem(config?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
export declare function factoryCreateAccordion(itemFactory?: WidgetFactory<AccordionItemWidget>, accordionItemProps?: string[], accordionConfig?: AccordionProps, accordionValidator?: ConfigValidator<AccordionProps>): WidgetFactory<AccordionWidget>;
/**
 * Creates a new Accordion widget instance.
 * @param config - config of the accordion, either as a store or as an object containing values or stores.
 * @returns a new accordion widget instance
 */
export declare const createAccordion: WidgetFactory<AccordionWidget>;
`;export{n as default};
