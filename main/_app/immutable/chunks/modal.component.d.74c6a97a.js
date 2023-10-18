const e=`import type { ModalBeforeCloseEvent, ModalContext, ModalState, SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Directive to provide the slot structure for the modal widget.
 */
export declare class ModalStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: ModalStructureDirective, context: unknown): context is ModalContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalStructureDirective, "ng-template[auModalStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot header for the modal widget.
 */
export declare class ModalHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ModalHeaderDirective, context: unknown): context is ModalContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalHeaderDirective, "ng-template[auModalHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot title for the modal widget.
 */
export declare class ModalTitleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ModalTitleDirective, context: unknown): context is ModalContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalTitleDirective, "ng-template[auModalTitle]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the default slot for the modal widget.
 */
export declare class ModalBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ModalBodyDirective, context: unknown): context is ModalContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalBodyDirective, "ng-template[auModalBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot footer for the modal widget.
 */
export declare class ModalFooterDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ModalFooterDirective, context: unknown): context is ModalContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalFooterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalFooterDirective, "ng-template[auModalFooter]", never, {}, {}, never, never, true, never>;
}
/**
 * Component containing the default slots for the modal.
 */
export declare class ModalDefaultSlotsComponent {
    header: TemplateRef<ModalContext>;
    structure: TemplateRef<ModalContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
/**
 * Default slot for modal header.
 */
export declare const modalDefaultSlotHeader: ComponentTemplate<unknown, "header", ModalDefaultSlotsComponent>;
/**
 * Default slot for modal structure.
 */
export declare const modalDefaultSlotStructure: ComponentTemplate<unknown, "structure", ModalDefaultSlotsComponent>;
/**
 * Modal component.
 */
export declare class ModalComponent implements OnChanges, AfterContentChecked {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     */
    animation: boolean | undefined;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     */
    backdropTransition: TransitionFn | undefined;
    /**
     * The transition to use for the modal.
     */
    modalTransition: TransitionFn | undefined;
    /**
     * Whether the modal should be visible when the transition is completed.
     */
    visible: boolean | undefined;
    /**
     * Whether a backdrop should be created behind the modal.
     */
    backdrop: boolean | undefined;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     */
    closeOnOutsideClick: boolean | undefined;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     */
    container: HTMLElement | null | undefined;
    /**
     * Value of the aria-label attribute to put on the close button.
     */
    ariaCloseButtonLabel: string | undefined;
    /**
     * Classes to add on the backdrop DOM element.
     */
    backdropClass: string | undefined;
    /**
     * Whether to display the close button.
     */
    closeButton: boolean | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    slotStructure: SlotContent<ModalContext>;
    slotStructureFromContent: ModalStructureDirective | null;
    slotHeader: SlotContent<ModalContext>;
    slotHeaderFromContent: ModalHeaderDirective | null;
    slotTitle: SlotContent<ModalContext>;
    slotTitleFromContent: ModalTitleDirective | null;
    slotDefault: SlotContent<ModalContext>;
    slotDefaultFromContent: ModalBodyDirective | null;
    slotFooter: SlotContent<ModalContext>;
    slotFooterFromContent: ModalFooterDirective | null;
    /**
     * Event to be triggered when the visible property changes.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the close method was called).
     */
    beforeClose: EventEmitter<ModalBeforeCloseEvent>;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     */
    hidden: EventEmitter<void>;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     */
    shown: EventEmitter<void>;
    readonly defaultSlots: import("@amadeus-it-group/tansu").WritableSignal<Partial<Omit<import("@agnos-ui/core").ModalProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFooter: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotHeader: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotTitle: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>, Partial<Omit<import("@agnos-ui/core").ModalProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFooter: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotHeader: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotTitle: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>>;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").ModalWidget>;
    readonly widget: Pick<import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").ModalWidget>, "actions" | "api" | "directives" | "state$" | "stores">;
    readonly api: import("@agnos-ui/angular-headless").AdaptWidgetFactories<import("@agnos-ui/angular-headless").ModalApi>;
    readonly modalDirective: import("@agnos-ui/angular-headless").Directive<void>;
    readonly backdropDirective: import("@agnos-ui/angular-headless").Directive<void>;
    readonly state: Signal<ModalState>;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "[auModal]", never, { "animation": { "alias": "auAnimation"; "required": false; }; "backdropTransition": { "alias": "auBackdropTransition"; "required": false; }; "modalTransition": { "alias": "auModalTransition"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "backdrop": { "alias": "auBackdrop"; "required": false; }; "closeOnOutsideClick": { "alias": "auCloseOnOutsideClick"; "required": false; }; "container": { "alias": "auContainer"; "required": false; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; }; "backdropClass": { "alias": "auBackdropClass"; "required": false; }; "closeButton": { "alias": "auCloseButton"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "slotHeader": { "alias": "auSlotHeader"; "required": false; }; "slotTitle": { "alias": "auSlotTitle"; "required": false; }; "slotDefault": { "alias": "auSlotDefault"; "required": false; }; "slotFooter": { "alias": "auSlotFooter"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "beforeClose": "auBeforeClose"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotStructureFromContent", "slotHeaderFromContent", "slotTitleFromContent", "slotDefaultFromContent", "slotFooterFromContent"], ["*"], true, never>;
}
`;export{e as default};
