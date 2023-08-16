const e=`import type { AfterContentChecked, AfterViewInit, Signal, SimpleChanges, OnChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { AdaptWidgetSlots, AdaptSlotContentProps } from '../slot.directive';
import { ComponentTemplate } from '../slot.directive';
import type { AccordionItemWidget as AccordionItemWidgetCore, AccordionItemContext as AccordionItemCoreContext, TransitionFn, SlotContent } from '@agnos-ui/core';
import { createAccordion } from '@agnos-ui/core';
import type { WidgetProps, WidgetState } from '@agnos-ui/core';
import { UseDirective } from '../transition/use.directive';
import * as i0 from "@angular/core";
import * as i1 from "../transition/use.directive";
export type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionItemWidget = AdaptWidgetSlots<AccordionItemWidgetCore>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type ItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<AccordionItemCoreContext>;
export declare class AccordionBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionBodyDirective, "ng-template[auAccordionItemBody]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionHeaderDirective, "ng-template[auAccordionItemHeader]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionItemStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionItemStructureDirective, "ng-template[auAccordionItemStructure]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionItemDefaultSlotsComponent {
    structure: TemplateRef<AccordionItemContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const accordionItemDefaultslotItemStructure: ComponentTemplate<unknown, "structure", AccordionItemDefaultSlotsComponent>;
export declare class AccordionItemComponent implements OnChanges, AfterContentChecked, AfterViewInit {
    slotItemHeader: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    slotItemHeaderFromContent: AccordionHeaderDirective | null;
    slotItemBody: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    slotItemBodyFromContent: AccordionBodyDirective | null;
    slotItemStructure: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    slotItemStructureFromContent: AccordionItemStructureDirective | null;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    itemId: string | undefined;
    /**
     * The transition to use for the accordion-item collapse when is toggled.
     */
    itemTransition: TransitionFn | undefined;
    /**
     * Classes to add on the accordion-item DOM element.
     */
    itemClass: string | undefined;
    /**
     * If \`true\`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
     */
    itemDestroyOnHide: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    itemDisabled: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be collapsed. Otherwise, it will be expanded.
     */
    itemCollapsed: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     */
    itemAnimation: boolean | undefined;
    /**
     * Classes to add on the accordion-item header DOM element.
     */
    itemHeaderClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     */
    itemButtonClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     */
    itemCollapseClass: string | undefined;
    /**
     * Classes to add on the accordion-item body DOM element.
     */
    itemBodyClass: string | undefined;
    /**
     * An event fired when an item is shown.
     */
    itemShown: EventEmitter<void>;
    /**
     * An event fired when an item is hidden.
     */
    itemHidden: EventEmitter<void>;
    /**
     * An event fired when the \`collapsed\` value changes.
     *
     * Event payload is the new value of collapsed.
     */
    itemCollapsedChange: EventEmitter<boolean>;
    defaultSlots: import("@amadeus-it-group/tansu").WritableSignal<Partial<Omit<import("@agnos-ui/core").AccordionItemProps, \`slot\${string}\`> & {
        slotItemStructure: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemBody: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemHeader: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>, Partial<Omit<import("@agnos-ui/core").AccordionItemProps, \`slot\${string}\`> & {
        slotItemStructure: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemBody: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotItemHeader: import("../slot.directive").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidgetCore>> & Omit<Omit<AccordionItemCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>>;
    readonly ad: AccordionDirective;
    readonly _widget: import("../slot.directive").WithPatchSlots<AccordionItemWidgetCore>;
    readonly widget: Pick<import("../slot.directive").WithPatchSlots<AccordionItemWidgetCore>, "api" | "actions" | "directives" | "state$" | "stores">;
    readonly api: import("@agnos-ui/core").AccordionItemApi;
    useDirective: UseDirective<any>;
    state: Signal<ItemState>;
    constructor();
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "[au-accordion-item]", ["auAccordionItem"], { "slotItemHeader": { "alias": "slotItemHeader"; "required": false; }; "slotItemBody": { "alias": "slotItemBody"; "required": false; }; "slotItemStructure": { "alias": "slotItemStructure"; "required": false; }; "itemId": { "alias": "itemId"; "required": false; }; "itemTransition": { "alias": "itemTransition"; "required": false; }; "itemClass": { "alias": "itemClass"; "required": false; }; "itemDestroyOnHide": { "alias": "itemDestroyOnHide"; "required": false; }; "itemDisabled": { "alias": "itemDisabled"; "required": false; }; "itemCollapsed": { "alias": "itemCollapsed"; "required": false; }; "itemAnimation": { "alias": "itemAnimation"; "required": false; }; "itemHeaderClass": { "alias": "itemHeaderClass"; "required": false; }; "itemButtonClass": { "alias": "itemButtonClass"; "required": false; }; "itemCollapseClass": { "alias": "itemCollapseClass"; "required": false; }; "itemBodyClass": { "alias": "itemBodyClass"; "required": false; }; }, { "itemShown": "itemShown"; "itemHidden": "itemHidden"; "itemCollapsedChange": "itemCollapsedChange"; }, ["slotItemHeaderFromContent", "slotItemBodyFromContent", "slotItemStructureFromContent"], never, true, [{ directive: typeof i1.UseDirective; inputs: {}; outputs: {}; }]>;
}
export declare class AccordionDirective implements OnChanges {
    useDirective: UseDirective<any>;
    /**
     * If \`true\`, only one item at the time can stay open.
     */
    closeOthers: boolean | undefined;
    /**
     * Classes to add on the accordion DOM element.
     */
    accordionClass: string | undefined;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     */
    shown: EventEmitter<string>;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     */
    hidden: EventEmitter<string>;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     *
     * It is a prop of the accordion-item.
     */
    itemId: string | undefined;
    /**
     * If \`true\`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
     *
     * It is a prop of the accordion-item.
     */
    itemDestroyOnHide: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     *
     * It is a prop of the accordion-item.
     */
    itemDisabled: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be collapsed. Otherwise, it will be expanded.
     *
     * It is a prop of the accordion-item.
     */
    itemCollapsed: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * It is a prop of the accordion-item.
     */
    itemAnimation: boolean | undefined;
    /**
     * The transition to use for the accordion-item collapse when is toggled.
     *
     * It is a prop of the accordion-item.
     */
    itemTransition: TransitionFn | undefined;
    slotItemStructure: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    slotItemBody: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    slotItemHeader: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
    /**
     * Classes to add on the accordion-item DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemClass: string | undefined;
    /**
     * Classes to add on the accordion-item header DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemHeaderClass: string | undefined;
    /**
     * Classes to add on the accordion-item toggle button DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemButtonClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemCollapseClass: string | undefined;
    /**
     * Classes to add on the accordion-item body DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemBodyClass: string | undefined;
    /**
     * An event fired when an item is shown.
     *
     * It is a prop of the accordion-item.
     */
    itemShown: EventEmitter<void>;
    /**
     * An event fired when an item is hidden.
     *
     * It is a prop of the accordion-item.
     */
    itemHidden: EventEmitter<void>;
    /**
     * An event fired when the \`collapsed\` value changes.
     *
     * Event payload is the new value of collapsed.
     *
     * It is a prop of the accordion-item.
     */
    itemCollapsedChange: EventEmitter<boolean>;
    readonly _widget: import("../slot.directive").WithPatchSlots<import("@agnos-ui/core").AccordionWidget>;
    readonly api: import("@agnos-ui/core").AccordionApi;
    state$: Signal<AccordionState>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionDirective, "[auAccordion]", ["auAccordion"], { "closeOthers": { "alias": "closeOthers"; "required": false; }; "accordionClass": { "alias": "accordionClass"; "required": false; }; "itemId": { "alias": "itemId"; "required": false; }; "itemDestroyOnHide": { "alias": "itemDestroyOnHide"; "required": false; }; "itemDisabled": { "alias": "itemDisabled"; "required": false; }; "itemCollapsed": { "alias": "itemCollapsed"; "required": false; }; "itemAnimation": { "alias": "itemAnimation"; "required": false; }; "itemTransition": { "alias": "itemTransition"; "required": false; }; "slotItemStructure": { "alias": "slotItemStructure"; "required": false; }; "slotItemBody": { "alias": "slotItemBody"; "required": false; }; "slotItemHeader": { "alias": "slotItemHeader"; "required": false; }; "itemClass": { "alias": "itemClass"; "required": false; }; "itemHeaderClass": { "alias": "itemHeaderClass"; "required": false; }; "itemButtonClass": { "alias": "itemButtonClass"; "required": false; }; "itemCollapseClass": { "alias": "itemCollapseClass"; "required": false; }; "itemBodyClass": { "alias": "itemBodyClass"; "required": false; }; }, { "shown": "shown"; "hidden": "hidden"; "itemShown": "itemShown"; "itemHidden": "itemHidden"; "itemCollapsedChange": "itemCollapsedChange"; }, never, never, true, [{ directive: typeof i1.UseDirective; inputs: {}; outputs: {}; }]>;
}
`;export{e as default};
