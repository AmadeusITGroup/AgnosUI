const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AlertContext, AlertWidget } from './alert.gen';
import { TemplateRef } from '@angular/core';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
import * as i0 from "@angular/core";
/**
 * Directive to be used as a structural directive for the body of an alert component.
 *
 * This directive allows the use of a template reference for the alert body content, with type {@link AlertContext}.
 */
export declare class AlertBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertBodyDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertBodyDirective, "ng-template[auAlertBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of an alert component.
 *
 * This directive uses a \`TemplateRef\` to inject the template reference of the {@link AlertContext}.
 */
export declare class AlertStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertStructureDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertStructureDirective, "ng-template[auAlertStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the alert component.
 */
export declare const alertDefaultSlotStructure: SlotContent<AlertContext>;
/**
 * AlertComponent is a UI component that extends BaseWidgetDirective to provide
 * an alert box with various customizable properties and behaviors.
 *
 * @remarks
 * This component is designed to be used with Bootstrap styles and supports
 * various Bootstrap contextual classes for different alert types.
 */
export declare class AlertComponent extends BaseWidgetDirective<AlertWidget> {
    /**
     * Type of the alert, following bootstrap types.
     *
     * @defaultValue \`'primary'\`
     */
    readonly type: import("@angular/core").InputSignal<BSContextualClass | undefined>;
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
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    readonly ariaCloseButtonLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Template for the alert content
     */
    readonly children: import("@angular/core").InputSignal<SlotContent<AlertContext>>;
    readonly slotDefaultFromContent: import("@angular/core").Signal<AlertBodyDirective | undefined>;
    /**
     * Global template for the alert component
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<AlertContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<AlertStructureDirective | undefined>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "[auAlert]", never, { "type": { "alias": "auType"; "required": false; "isSignal": true; }; "dismissible": { "alias": "auDismissible"; "required": false; "isSignal": true; }; "transition": { "alias": "auTransition"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
}
`;export{e as default};
