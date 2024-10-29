const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { EventEmitter, TemplateRef } from '@angular/core';
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
    dismissible: boolean | undefined;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
     *
     * @defaultValue \`fadeTransition\`
     */
    transition: TransitionFn | undefined;
    /**
     * If \`true\` the alert is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean | undefined;
    /**
     * If \`true\`, alert opening will be animated.
     *
     * Animation is triggered  when the \`.open()\` function is called
     * or the visible prop is changed
     *
     * @defaultValue \`false\`
     */
    animatedOnInit: boolean | undefined;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     *
     * @defaultValue \`true\`
     */
    animated: boolean | undefined;
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean | undefined;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number | undefined;
    /**
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string | undefined;
    /**
     * Template for the toast content
     */
    children: SlotContent<ToastContext>;
    slotDefaultFromContent: ToastBodyDirective | undefined;
    /**
     * Global template for the toast component
     */
    structure: SlotContent<ToastContext>;
    slotStructureFromContent: ToastStructureDirective | undefined;
    /**
     * Header template for the toast component
     */
    header: SlotContent<ToastContext>;
    slotHeaderFromContent: ToastHeaderDirective | undefined;
    /**
     * Callback called when the alert visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback called when the alert is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    hidden: EventEmitter<void>;
    /**
     * Callback called when the alert is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    shown: EventEmitter<void>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    slotChildren?: TemplateRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "[auToast]", never, { "dismissible": { "alias": "auDismissible"; "required": false; }; "transition": { "alias": "auTransition"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "autoHide": { "alias": "auAutoHide"; "required": false; }; "delay": { "alias": "auDelay"; "required": false; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; }; "children": { "alias": "auChildren"; "required": false; }; "structure": { "alias": "auStructure"; "required": false; }; "header": { "alias": "auHeader"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent", "slotHeaderFromContent"], ["*"], true, never>;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_animatedOnInit: unknown;
    static ngAcceptInputType_animated: unknown;
    static ngAcceptInputType_autoHide: unknown;
    static ngAcceptInputType_delay: unknown;
}
`;export{e as default};
