const t=`import type { AlertContext as AlertCoreContext, TransitionFn, WidgetProps, WidgetState } from '@agnos-ui/core';
import { createAlert } from '@agnos-ui/core';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { AdaptSlotContentProps, AdaptWidgetSlots, SlotContent } from '../slot.directive';
import { ComponentTemplate } from '../slot.directive';
import * as i0 from "@angular/core";
export type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertContext = AdaptSlotContentProps<AlertCoreContext>;
export declare class AlertBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AlertBodyDirective, context: unknown): context is AlertCoreContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertBodyDirective, "ng-template[auAlertBody]", never, {}, {}, never, never, true, never>;
}
export declare class AlertStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AlertStructureDirective, context: unknown): context is AlertCoreContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertStructureDirective, "ng-template[auAlertStructure]", never, {}, {}, never, never, true, never>;
}
export declare class AlertDefaultSlotsComponent {
    structure: TemplateRef<AlertCoreContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const alertDefaultSlotStructure: ComponentTemplate<unknown, "structure", AlertDefaultSlotsComponent>;
export declare class AlertComponent implements OnChanges, AfterContentChecked {
    /**
     * Type of the alert.
     * The are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
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
     * Depending on the value of AlertProps.animationOnInit, the animation can be optionally skipped during the showing process.
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
    slotDefault: SlotContent<AdaptSlotContentProps<AlertCoreContext>>;
    slotDefaultFromContent: AlertBodyDirective | null;
    slotStructure: SlotContent<AdaptSlotContentProps<AlertCoreContext>>;
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
    readonly defaultSlots: import("@amadeus-it-group/tansu").WritableSignal<Partial<Omit<import("@agnos-ui/core").AlertProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>, Partial<Omit<import("@agnos-ui/core").AlertProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>>;
    readonly _widget: import("../slot.directive").WithPatchSlots<import("@agnos-ui/core").AlertWidget>;
    readonly widget: Pick<import("../slot.directive").WithPatchSlots<import("@agnos-ui/core").AlertWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
    readonly api: import("@agnos-ui/core").AlertApi;
    readonly state: Signal<AlertState>;
    constructor();
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "au-alert", never, { "type": { "alias": "type"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "transition": { "alias": "transition"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "animationOnInit": { "alias": "animationOnInit"; "required": false; }; "animation": { "alias": "animation"; "required": false; }; "ariaCloseButtonLabel": { "alias": "ariaCloseButtonLabel"; "required": false; }; "slotDefault": { "alias": "slotDefault"; "required": false; }; "slotStructure": { "alias": "slotStructure"; "required": false; }; }, { "visibleChange": "visibleChange"; "hidden": "hidden"; "shown": "shown"; }, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
}
`;export{t as default};
