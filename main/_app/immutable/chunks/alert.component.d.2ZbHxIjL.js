const e=`import type { AlertContext, AlertState, SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AlertBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AlertBodyDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertBodyDirective, "ng-template[auAlertBody]", never, {}, {}, never, never, true, never>;
}
export declare class AlertStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AlertStructureDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertStructureDirective, "ng-template[auAlertStructure]", never, {}, {}, never, never, true, never>;
}
export declare class AlertDefaultSlotsComponent {
    structure: TemplateRef<AlertContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const alertDefaultSlotStructure: ComponentTemplate<unknown, "structure", AlertDefaultSlotsComponent>;
export declare class AlertComponent implements OnChanges, AfterContentChecked {
    /**
     * Type of the alert.
     * There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
     */
    type: string | undefined;
    /**
     * If \`true\`, alert can be dismissed by the user.
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.
     */
    dismissible: boolean | undefined;
    /**
     * The transition function will be executed when the alert is displayed or hidden.
     *
     * Depending on the value of CommonAlertProps.animationOnInit, the animation can be optionally skipped during the showing process.
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
    animationOnInit: boolean | undefined;
    /**
     * If \`true\`, alert closing will be animated.
     *
     * Animation is triggered  when clicked on the close button (×),
     * via the \`.close()\` function or the visible prop is changed
     */
    animation: boolean | undefined;
    /**
     * Accessibility close button label
     */
    ariaCloseButtonLabel: string | undefined;
    slotDefault: SlotContent<AlertContext>;
    slotDefaultFromContent: AlertBodyDirective | null;
    slotStructure: SlotContent<AlertContext>;
    slotStructureFromContent: AlertStructureDirective | undefined;
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
    readonly defaultSlots: import("@amadeus-it-group/tansu").WritableSignal<Partial<Omit<import("core/dist").AlertProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>>> & Omit<Omit<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>> & Omit<import("@agnos-ui/angular-headless").CommonAlertContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>>> & Omit<Omit<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>> & Omit<import("@agnos-ui/angular-headless").CommonAlertContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>, Partial<Omit<import("core/dist").AlertProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>>> & Omit<Omit<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>> & Omit<import("@agnos-ui/angular-headless").CommonAlertContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>>> & Omit<Omit<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").ExtendWidgetProps<import("@agnos-ui/angular-headless").CommonAlertWidget, import("@agnos-ui/angular-headless").AlertExtraProps>> & Omit<import("@agnos-ui/angular-headless").CommonAlertContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>>;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").AlertWidget>;
    readonly widget: import("@agnos-ui/angular-headless").ContextWidget<import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").AlertWidget>>;
    readonly api: import("@agnos-ui/angular-headless").AdaptWidgetFactories<import("@agnos-ui/angular-headless").AlertApi>;
    readonly state: Signal<AlertState>;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "[auAlert]", never, { "type": { "alias": "auType"; "required": false; }; "dismissible": { "alias": "auDismissible"; "required": false; }; "transition": { "alias": "auTransition"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "animationOnInit": { "alias": "auAnimationOnInit"; "required": false; }; "animation": { "alias": "auAnimation"; "required": false; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; }; "slotDefault": { "alias": "auSlotDefault"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_animationOnInit: unknown;
    static ngAcceptInputType_animation: unknown;
}
`;export{e as default};
