const n=`import type { WidgetSlotContext, SlotContent, TransitionFn, Widget, WidgetFactory, ConfigValidator, PropsConfig, Directive } from '@agnos-ui/angular-headless';
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
declare const export_getAccordionDefaultConfig: () => AccordionProps;
export { export_getAccordionDefaultConfig as getAccordionDefaultConfig };
export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;
export interface AccordionState {
    /**
     * Array containing all the accordion-items contained in the accordion.
     */
    itemWidgets: AccordionItemWidget[];
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
}
export interface AccordionProps {
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    itemTransition: TransitionFn;
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
     * The html tag to use for the accordion-item-header.
     *
     * @defaultValue \`''\`
     */
    itemHeadingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
}
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;
export interface AccordionItemState {
    /**
     * If \`true\` the content of the accordion-item collapse should be in DOM. Its value depends on the
     * value of the \`visible\` and \`destroyOnHide\`.
     */
    shouldBeInDOM: boolean;
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
     * The html tag to use for the accordion-item-header.
     */
    headingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
}
export interface AccordionItemProps {
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
     * The html tag to use for the accordion-item-header.
     */
    headingTag: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
}
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, object, AccordionItemDirectives>;
/**
 * Create an AccordionItemWidget with given config props
 * @param config - an optional AccordionItem config
 * @returns an AccordionItemWidget
 */
declare const export_createAccordionItem: WidgetFactory<AccordionItemWidget>;
export { export_createAccordionItem as createAccordionItem };
/**
 * Create an AccordionWidget with given config props
 * @param config - an optional accordion config
 * @returns an AccordionWidget
 */
declare const export_createAccordion: WidgetFactory<AccordionWidget>;
export { export_createAccordion as createAccordion };
/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
declare const export_factoryCreateAccordion: (itemFactory?: WidgetFactory<AccordionItemWidget>, accordionItemProps?: string[], accordionConfig?: AccordionProps, accordionValidator?: ConfigValidator<AccordionProps>) => WidgetFactory<AccordionWidget>;
export { export_factoryCreateAccordion as factoryCreateAccordion };
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
    itemDirective: Directive;
}
`;export{n as default};
