const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AfterViewInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
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
    readonly header: import("@angular/core").InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotHeaderFromContent: import("@angular/core").Signal<AccordionHeaderDirective | undefined>;
    /**
     * Content present in the accordion body.
     *
     * It is a prop of the accordion-item.
     */
    readonly children: import("@angular/core").InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotBodyFromContent: import("@angular/core").Signal<AccordionBodyDirective | undefined>;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<AccordionItemContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<AccordionItemStructureDirective | undefined>;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    readonly id: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     */
    readonly transition: import("@angular/core").InputSignal<TransitionFn | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     */
    readonly destroyOnHide: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    readonly visible: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, accordion-item will be animated.
     */
    readonly animated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     */
    readonly headerClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item collapse DOM element.
     */
    readonly buttonClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     */
    readonly bodyContainerClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     */
    readonly bodyClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The html tag to use for the accordion-item-header.
     */
    readonly headingTag: import("@angular/core").InputSignal<string | undefined>;
    /**
     * An event fired when an item is shown.
     */
    readonly shown: import("@angular/core").OutputEmitterRef<void>;
    /**
     * An event fired when an item is hidden.
     */
    readonly hidden: import("@angular/core").OutputEmitterRef<void>;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    readonly visibleChange: import("@angular/core").OutputEmitterRef<boolean>;
    readonly slotChildren: import("@angular/core").Signal<TemplateRef<void> | undefined>;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "[auAccordionItem]", ["auAccordionItem"], { "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "destroyOnHide": { "alias": "auDestroyOnHide"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "headerClassName": { "alias": "auHeaderClassName"; "required": false; "isSignal": true; }; "buttonClassName": { "alias": "auButtonClassName"; "required": false; "isSignal": true; }; "bodyContainerClassName": { "alias": "auBodyContainerClassName"; "required": false; "isSignal": true; }; "bodyClassName": { "alias": "auBodyClassName"; "required": false; "isSignal": true; }; "headingTag": { "alias": "auHeadingTag"; "required": false; "isSignal": true; }; }, { "shown": "auShown"; "hidden": "auHidden"; "visibleChange": "auVisibleChange"; }, ["slotHeaderFromContent", "slotBodyFromContent", "slotStructureFromContent"], ["*"], true, never>;
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
    readonly closeOthers: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
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
    readonly itemShown: import("@angular/core").OutputEmitterRef<string>;
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
    readonly itemHidden: import("@angular/core").OutputEmitterRef<string>;
    /**
     * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
     *
     * @defaultValue \`true\`
     */
    readonly itemDestroyOnHide: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * @defaultValue \`true\`
     */
    readonly itemAnimated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition to use for the accordion-item body-container when the accordion-item is toggled.
     *
     * @defaultValue
     * \`\`\`ts
     * collapseVerticalTransition
     * \`\`\`
     */
    readonly itemTransition: import("@angular/core").InputSignal<TransitionFn | undefined>;
    /**
     * Structure of the accordion-item. The default item structure is: accordion-item
     * contains accordion header and accordion-item body container; the accordion header contains the accordion button
     * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
     * The itemTransition is applied on this element.
     *
     * It is a prop of the accordion-item.
     */
    readonly itemStructure: import("@angular/core").InputSignal<SlotContent<AccordionItemContext>>;
    /**
     * CSS classes to add on the accordion-item DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item header DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemHeaderClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item toggle button DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemButtonClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body container DOM element.
     * The accordion-item body container is the DOM element on what the itemTransition is applied.
     *
     * @defaultValue \`''\`
     */
    readonly itemBodyContainerClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * CSS classes to add on the accordion-item body DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly itemBodyClassName: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * @defaultValue \`''\`
     */
    readonly itemHeadingTag: import("@angular/core").InputSignal<string | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionDirective, "[auAccordion]", ["auAccordion"], { "closeOthers": { "alias": "auCloseOthers"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "itemDestroyOnHide": { "alias": "auItemDestroyOnHide"; "required": false; "isSignal": true; }; "itemAnimated": { "alias": "auItemAnimated"; "required": false; "isSignal": true; }; "itemTransition": { "alias": "auItemTransition"; "required": false; "isSignal": true; }; "itemStructure": { "alias": "auItemStructure"; "required": false; "isSignal": true; }; "itemClassName": { "alias": "auItemClassName"; "required": false; "isSignal": true; }; "itemHeaderClassName": { "alias": "auItemHeaderClassName"; "required": false; "isSignal": true; }; "itemButtonClassName": { "alias": "auItemButtonClassName"; "required": false; "isSignal": true; }; "itemBodyContainerClassName": { "alias": "auItemBodyContainerClassName"; "required": false; "isSignal": true; }; "itemBodyClassName": { "alias": "auItemBodyClassName"; "required": false; "isSignal": true; }; "itemHeadingTag": { "alias": "auItemHeadingTag"; "required": false; "isSignal": true; }; }, { "itemShown": "auItemShown"; "itemHidden": "auItemHidden"; }, never, never, true, never>;
}
`;export{e as default};
