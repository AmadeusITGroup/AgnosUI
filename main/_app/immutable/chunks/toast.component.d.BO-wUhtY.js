const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import type { ToastContext, ToastWidget } from './toast.gen';
import * as i0 from "@angular/core";
/**
 * Directive to represent the body of a toast notification.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
export declare class ToastBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastBodyDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastBodyDirective, "ng-template[auToastBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
export declare class ToastStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastStructureDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastStructureDirective, "ng-template[auToastStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive representing the header of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
export declare class ToastHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ToastHeaderDirective, context: unknown): context is ToastContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastHeaderDirective, "ng-template[auToastHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the toast component.
 */
export declare const toastDefaultSlotStructure: SlotContent<ToastContext>;
/**
 * The \`ToastComponent\` is a UI component that displays a toast notification.
 * It extends the \`BaseWidgetDirective\` and provides various configurable properties
 * and events to control the behavior and appearance of the toast.
 */
export declare class ToastComponent extends BaseWidgetDirective<ToastWidget> {
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     *
     * @defaultValue \`true\`
     */
    readonly dismissible: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    readonly transition: import("@angular/core").InputSignal<TransitionFn | undefined>;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    readonly visible: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    readonly animatedOnInit: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    readonly animated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    readonly autoHide: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    readonly delay: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Template for the toast content
     */
    readonly children: import("@angular/core").InputSignal<SlotContent<ToastContext>>;
    readonly slotDefaultFromContent: import("@angular/core").Signal<ToastBodyDirective | undefined>;
    /**
     * Global template for the toast component
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<ToastContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<ToastStructureDirective | undefined>;
    /**
     * Header template for the toast component
     */
    readonly header: import("@angular/core").InputSignal<SlotContent<ToastContext>>;
    readonly slotHeaderFromContent: import("@angular/core").Signal<ToastHeaderDirective | undefined>;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly visibleChange: import("@angular/core").OutputEmitterRef<boolean>;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: import("@angular/core").OutputEmitterRef<void>;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: import("@angular/core").OutputEmitterRef<void>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    readonly slotChildren: import("@angular/core").Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "[auToast]", never, { "dismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "autoHide": { "alias": "auAutoHide"; "required": false; "isSignal": true; }; "delay": { "alias": "auDelay"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "header": { "alias": "auHeader"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent", "slotHeaderFromContent"], ["*"], true, never>;
}
`;export{e as default};
