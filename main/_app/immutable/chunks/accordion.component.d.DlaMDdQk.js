const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AfterViewInit } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { AccordionItemContext, AccordionItemWidget, AccordionWidget } from './accordion.gen';
import * as i0 from "@angular/core";
/**
 * Directive to represent the body of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
export declare class AccordionBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionBodyDirective, "ng-template[auAccordionItemBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to be used as an accordion header.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
export declare class AccordionHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionHeaderDirective, "ng-template[auAccordionItemHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that represents the structure of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 * It also includes a static method to guard the template context type.
 */
export declare class AccordionItemStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionItemStructureDirective, "ng-template[auAccordionItemStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for an accordion item.
 */
export declare const accordionItemDefaultSlotStructure: SlotContent<AccordionItemContext>;
/**
 * AccordionItemComponent is a component that represents an item within an accordion.
 */
export declare class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterViewInit {
    /**
     * Content present in the accordion button inside the accordion header.
     *
     * It is a prop of the accordion-item.
     */
    header: SlotContent<AccordionItemContext>;
    slotHeaderFromContent: AccordionHeaderDirective | undefined;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    children: SlotContent<AccordionItemContext>;
    slotBodyFromContent: AccordionBodyDirective | undefined;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    structure: SlotContent<AccordionItemContext>;
    slotStructureFromContent: AccordionItemStructureDirective | undefined;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    id: string | undefined;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    transition: TransitionFn | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    destroyOnHide: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    disabled: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    visible: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     */
    animated: boolean | undefined;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    headerClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    buttonClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    bodyContainerClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    bodyClassName: string | undefined;
    /**
     * The html tag to use for the accordion-item-header.
     */
    headingTag: string | undefined;
    /**
     * An event fired when an item is shown.
     */
    shown: EventEmitter<void>;
    /**
     * An event fired when an item is hidden.
     */
    hidden: EventEmitter<void>;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    visibleChange: EventEmitter<boolean>;
    slotChildren?: TemplateRef<void>;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "[auAccordionItem]", ["auAccordionItem"], { "header": { "alias": "auHeader"; "required": false; }; "children": { "alias": "auChildren"; "required": false; }; "structure": { "alias": "auStructure"; "required": false; }; "id": { "alias": "auId"; "required": false; }; "transition": { "alias": "auTransition"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "destroyOnHide": { "alias": "auDestroyOnHide"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "headerClassName": { "alias": "auHeaderClassName"; "required": false; }; "buttonClassName": { "alias": "auButtonClassName"; "required": false; }; "bodyContainerClassName": { "alias": "auBodyContainerClassName"; "required": false; }; "bodyClassName": { "alias": "auBodyClassName"; "required": false; }; "headingTag": { "alias": "auHeadingTag"; "required": false; }; }, { "shown": "auShown"; "hidden": "auHidden"; "visibleChange": "auVisibleChange"; }, ["slotHeaderFromContent", "slotBodyFromContent", "slotStructureFromContent"], ["*"], true, never>;
    static ngAcceptInputType_destroyOnHide: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_animated: unknown;
}
/**
 * Directive for creating an accordion component.
 *
 * This directive extends the \`BaseWidgetDirective\` and provides various inputs and outputs
 * to customize the behavior and appearance of the accordion and its items.
 *
 */
export declare class AccordionDirective extends BaseWidgetDirective<AccordionWidget> {
    /**
     * If \`true\`, only one accordion-item at the time can stay open.
     *
     * @defaultValue \`false\`
     */
    closeOthers: boolean | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
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
    itemShown: EventEmitter<string>;
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
    itemHidden: EventEmitter<string>;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * @defaultValue \`true\`
     */
    itemDestroyOnHide: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * @defaultValue \`true\`
     */
    itemAnimated: boolean | undefined;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    itemTransition: TransitionFn | undefined;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    itemStructure: SlotContent<AccordionItemContext>;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * @defaultValue \`''\`
     */
    itemClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * @defaultValue \`''\`
     */
    itemHeaderClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * @defaultValue \`''\`
     */
    itemButtonClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * @defaultValue \`''\`
     */
    itemBodyContainerClassName: string | undefined;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * @defaultValue \`''\`
     */
    itemBodyClassName: string | undefined;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * @defaultValue \`''\`
     */
    itemHeadingTag: string | undefined;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionDirective, "[auAccordion]", ["auAccordion"], { "closeOthers": { "alias": "auCloseOthers"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "itemDestroyOnHide": { "alias": "auItemDestroyOnHide"; "required": false; }; "itemAnimated": { "alias": "auItemAnimated"; "required": false; }; "itemTransition": { "alias": "auItemTransition"; "required": false; }; "itemStructure": { "alias": "auItemStructure"; "required": false; }; "itemClassName": { "alias": "auItemClassName"; "required": false; }; "itemHeaderClassName": { "alias": "auItemHeaderClassName"; "required": false; }; "itemButtonClassName": { "alias": "auItemButtonClassName"; "required": false; }; "itemBodyContainerClassName": { "alias": "auItemBodyContainerClassName"; "required": false; }; "itemBodyClassName": { "alias": "auItemBodyClassName"; "required": false; }; "itemHeadingTag": { "alias": "auItemHeadingTag"; "required": false; }; }, { "itemShown": "auItemShown"; "itemHidden": "auItemHidden"; }, never, never, true, never>;
    static ngAcceptInputType_closeOthers: unknown;
    static ngAcceptInputType_itemDestroyOnHide: unknown;
    static ngAcceptInputType_itemAnimated: unknown;
}
`;export{e as default};
