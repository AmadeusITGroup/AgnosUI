const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { ModalContext, ModalWidget, ModalBeforeCloseEvent } from './modal.gen';
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Directive to provide the slot structure for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
export declare class ModalStructureDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalStructureDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalStructureDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalStructureDirective<any>, "ng-template[auModalStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot header for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
export declare class ModalHeaderDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalHeaderDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalHeaderDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalHeaderDirective<any>, "ng-template[auModalHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot title for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
export declare class ModalTitleDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalTitleDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalTitleDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalTitleDirective<any>, "ng-template[auModalTitle]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the default slot for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
export declare class ModalBodyDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalBodyDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalBodyDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalBodyDirective<any>, "ng-template[auModalBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to provide the slot footer for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
export declare class ModalFooterDirective<Data> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<Data>(_dir: ModalFooterDirective<Data>, context: unknown): context is ModalContext<Data>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalFooterDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalFooterDirective<any>, "ng-template[auModalFooter]", never, {}, {}, never, never, true, never>;
}
/**
 * Default slot for modal header.
 */
export declare const modalDefaultSlotHeader: SlotContent<ModalContext<any>>;
/**
 * Default slot for modal structure.
 */
export declare const modalDefaultSlotStructure: SlotContent<ModalContext<any>>;
/**
 * Modal component.
 */
export declare class ModalComponent<Data> extends BaseWidgetDirective<ModalWidget<Data>> {
    /**
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
     *
     * @defaultValue \`true\`
     */
    readonly animated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition to use for the backdrop behind the modal (if present).
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly backdropTransition: import("@angular/core").InputSignal<TransitionFn | undefined>;
    /**
     * The transition to use for the modal.
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly modalTransition: import("@angular/core").InputSignal<TransitionFn | undefined>;
    /**
     * Whether the modal should be visible when the transition is completed.
     *
     * @defaultValue \`false\`
     */
    readonly visible: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Whether a backdrop should be created behind the modal.
     *
     * @defaultValue \`true\`
     */
    readonly backdrop: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Whether the modal should be closed when clicking on the viewport outside the modal.
     *
     * @defaultValue \`true\`
     */
    readonly closeOnOutsideClick: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Which element should contain the modal and backdrop DOM elements.
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
     * Otherwise, they stay where the widget is located.
     *
     * @defaultValue
     * \`\`\`ts
     * typeof window !== 'undefined' ? document.body : null
     * \`\`\`
     */
    readonly container: import("@angular/core").InputSignal<HTMLElement | null | undefined>;
    /**
     * Value of the aria-label attribute to put on the close button.
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Classes to add on the backdrop DOM element.
     *
     * @defaultValue \`''\`
     */
    readonly backdropClass: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Whether to display the close button.
     *
     * @defaultValue \`true\`
     */
    readonly closeButton: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Option to create a fullscreen modal, according to the bootstrap documentation.
     *
     * @defaultValue \`false\`
     */
    readonly fullscreen: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Structure of the modal.
     * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<ModalStructureDirective<any> | undefined>;
    /**
     * Header of the modal. The default header includes {@link ModalProps.title|title}.
     */
    readonly header: import("@angular/core").InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotHeaderFromContent: import("@angular/core").Signal<ModalHeaderDirective<any> | undefined>;
    /**
     * Title of the modal.
     */
    readonly title: import("@angular/core").InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotTitleFromContent: import("@angular/core").Signal<ModalTitleDirective<any> | undefined>;
    /**
     * Body of the modal.
     */
    readonly children: import("@angular/core").InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotDefaultFromContent: import("@angular/core").Signal<ModalBodyDirective<any> | undefined>;
    /**
     * Footer of the modal.
     */
    readonly footer: import("@angular/core").InputSignal<SlotContent<ModalContext<Data>>>;
    readonly slotFooterFromContent: import("@angular/core").Signal<ModalFooterDirective<any> | undefined>;
    /**
     * Data to use in content slots
     */
    readonly contentData: import("@angular/core").InputSignal<Data | undefined>;
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
    readonly visibleChange: import("@angular/core").OutputEmitterRef<boolean>;
    /**
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
     *
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
     * to cancel the close process.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly beforeClose: import("@angular/core").OutputEmitterRef<ModalBeforeCloseEvent>;
    /**
     * Event to be triggered when the transition is completed and the modal is not visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: import("@angular/core").OutputEmitterRef<void>;
    /**
     * Event to be triggered when the transition is completed and the modal is visible.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: import("@angular/core").OutputEmitterRef<void>;
    readonly slotChildren: import("@angular/core").Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent<any>, "[auModal]", never, { "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "backdropTransition": { "alias": "auBackdropTransition"; "required": false; "isSignal": true; }; "modalTransition": { "alias": "auModalTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "backdrop": { "alias": "auBackdrop"; "required": false; "isSignal": true; }; "closeOnOutsideClick": { "alias": "auCloseOnOutsideClick"; "required": false; "isSignal": true; }; "container": { "alias": "auContainer"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "backdropClass": { "alias": "auBackdropClass"; "required": false; "isSignal": true; }; "closeButton": { "alias": "auCloseButton"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "fullscreen": { "alias": "auFullscreen"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "title": { "alias": "auTitle"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "footer": { "alias": "auFooter"; "required": false; "isSignal": true; }; "contentData": { "alias": "auContentData"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "beforeClose": "auBeforeClose"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotStructureFromContent", "slotHeaderFromContent", "slotTitleFromContent", "slotDefaultFromContent", "slotFooterFromContent"], ["*"], true, never>;
}
`;export{e as default};
