const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import type { WritableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { ToastContext, ToastProps, ToastWidget } from './toast';
import * as i0 from "@angular/core";
export declare class ToastBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: ToastBodyDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastBodyDirective, "ng-template[auToastBody]", never, {}, {}, never, never, true, never>;
}
export declare class ToastStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: ToastStructureDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastStructureDirective, "ng-template[auToastStructure]", never, {}, {}, never, never, true, never>;
}
export declare class ToastHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: ToastHeaderDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastHeaderDirective, "ng-template[auToastHeader]", never, {}, {}, never, never, true, never>;
}
export declare class ToastDefaultSlotsComponent {
    structure: TemplateRef<ToastContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const toastDefaultSlotStructure: ComponentTemplate<unknown, "structure", ToastDefaultSlotsComponent>;
export declare class ToastComponent extends BaseWidgetDirective<ToastWidget> implements AfterContentChecked {
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     */
    dismissible: boolean | undefined;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     */
    transition: TransitionFn | undefined;
    /**
     * If \`true\` the alert is visible to the user
     */
    visible: boolean | undefined;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     */
    animatedOnInit: boolean | undefined;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     */
    animated: boolean | undefined;
    /**
     * If \`true\` automatically hides the toast after the delay.
     */
    autoHide: boolean | undefined;
    /**
     * Delay in milliseconds before hiding the toast.
     */
    delay: number | undefined;
    /**
     * Accessibility close button label
     */
    ariaCloseButtonLabel: string | undefined;
    /**
     * Template for the toast content
     */
    slotDefault: SlotContent<ToastContext>;
    slotDefaultFromContent: ToastBodyDirective | undefined;
    /**
     * Global template for the toast component
     */
    slotStructure: SlotContent<ToastContext>;
    slotStructureFromContent: ToastStructureDirective | undefined;
    /**
     * Header template for the toast component
     */
    slotHeader: SlotContent<ToastContext>;
    slotHeaderFromContent: ToastHeaderDirective | undefined;
    /**
     * Callback called when the alert visibility changed.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback called when the alert is hidden.
     */
    hidden: EventEmitter<void>;
    /**
     * Callback called when the alert is shown.
     */
    shown: EventEmitter<void>;
    readonly defaultSlots: WritableSignal<Partial<ToastProps>>;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<ToastWidget>;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "[auToast]", never, { "dismissible": { "alias": "auDismissible"; "required": false; }; "transition": { "alias": "auTransition"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "autoHide": { "alias": "auAutoHide"; "required": false; }; "delay": { "alias": "auDelay"; "required": false; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; }; "slotDefault": { "alias": "auSlotDefault"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "slotHeader": { "alias": "auSlotHeader"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent", "slotHeaderFromContent"], ["*"], true, never>;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_animatedOnInit: unknown;
    static ngAcceptInputType_animated: unknown;
    static ngAcceptInputType_autoHide: unknown;
    static ngAcceptInputType_delay: unknown;
}
`;export{e as default};
