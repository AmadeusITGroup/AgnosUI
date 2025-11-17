const n=`import type { TransitionFn } from '../../services/transitions/baseTransitions';
import type { ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
/**
 * Properties for the Accordion component.
 */
export interface AccordionProps extends WidgetsCommonPropsAndState {
    /**
     * If \`true\`, only one accordion-item at the time can stay open.
     *
     * @defaultValue \`false\`
     */
    closeOthers: boolean;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onItemShown: (itemId: string) => void;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onItemHidden: (itemId: string) => void;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * @defaultValue \`true\`
     */
    itemDestroyOnHide: boolean;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * @defaultValue \`true\`
     */
    itemAnimated: boolean;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    itemTransition: TransitionFn;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * @defaultValue \`''\`
     */
    itemClassName: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * @defaultValue \`''\`
     */
    itemHeaderClassName: string;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * @defaultValue \`''\`
     */
    itemButtonClassName: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * @defaultValue \`''\`
     */
    itemBodyContainerClassName: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * @defaultValue \`''\`
     */
    itemBodyClassName: string;
    /**
     * The html heading level to use for the accordion-item-header.
     *
     * @defaultValue \`2\`
     */
    itemHeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}
/**
 * Represents the state of an Accordion component.
 */
export interface AccordionState extends WidgetsCommonPropsAndState {
    /**
     * Array containing all the accordion-items contained in the accordion.
     */
    itemWidgets: AccordionItemWidget[];
}
/**
 * Interface representing the API for an accordion component.
 */
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
/**
 * Interface representing the directives used in the Accordion component.
 */
export interface AccordionDirectives {
    /**
     * Directive to put on the accordion DOM element
     */
    accordionDirective: Directive;
}
/**
 * Represents an Accordion widget with specific properties, state, API, and directives.
 */
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, AccordionDirectives>;
/**
 * Interface representing the API for an accordion item.
 */
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
/**
 * Interface representing the directives used in an accordion item.
 */
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
    itemDirective: Directive;
}
/**
 * Interface representing the common properties and state for an accordion item.
 */
interface AccordionItemCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    visible: boolean;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    disabled: boolean;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    id: string;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    headerClassName: string;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    buttonClassName: string;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    bodyContainerClassName: string;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    bodyClassName: string;
    /**
     * The html heading level to use for the accordion-item-header.
     */
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}
/**
 * Properties for an AccordionItem component.
 */
export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
    /**
     * If \`true\`, accordion-item will be animated.
     */
    animated: boolean;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    transition: TransitionFn;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    destroyOnHide: boolean;
    /**
     * An event fired when an item is shown.
     */
    onShown: () => void;
    /**
     * An event fired when an item is hidden.
     */
    onHidden: () => void;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    onVisibleChange: (visible: boolean) => void;
}
/**
 * Represents the state of an accordion item.
 */
export interface AccordionItemState extends AccordionItemCommonPropsAndState {
    /**
     * If \`true\` the content of the accordion-item collapse should be in DOM. Its value depends on the
     * value of the \`visible\` and \`destroyOnHide\`.
     */
    shouldBeInDOM: boolean;
}
/**
 * Represents a widget for an accordion item.
 */
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemDirectives>;
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
 * Create an accordion WidgetFactory based on an item factory and the list of item props that should inherit from the parent accordion
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
export {};
`;export{n as default};
