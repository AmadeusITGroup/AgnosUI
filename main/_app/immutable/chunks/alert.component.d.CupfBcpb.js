const e=`import type { SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AlertContext, AlertProps, AlertWidget } from './alert.gen';
import { type WritableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
import * as i0 from "@angular/core";
export declare class AlertBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertBodyDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertBodyDirective, "ng-template[auAlertBody]", never, {}, {}, never, never, true, never>;
}
export declare class AlertStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: AlertStructureDirective, context: unknown): context is AlertContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlertStructureDirective, "ng-template[auAlertStructure]", never, {}, {}, never, never, true, never>;
}
export declare class AlertDefaultSlotsComponent {
    structure: TemplateRef<AlertContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const alertDefaultSlotStructure: ComponentTemplate<unknown, "structure", AlertDefaultSlotsComponent>;
export type PartialAlertProps = Partial<AlertProps>;
export declare class AlertComponent extends BaseWidgetDirective<AlertWidget> implements AfterContentChecked {
    /**
     * Type of the alert, following bootstrap types.
     *
     * @defaultValue \`'primary'\`
     */
    type: BSContextualClass | undefined;
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
     * Accessibility close button label
     *
     * @defaultValue \`'Close'\`
     */
    ariaCloseButtonLabel: string | undefined;
    /**
     * Template for the alert content
     */
    children: SlotContent<AlertContext>;
    slotDefaultFromContent: AlertBodyDirective | undefined;
    /**
     * Global template for the alert component
     */
    structure: SlotContent<AlertContext>;
    slotStructureFromContent: AlertStructureDirective | undefined;
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
    readonly defaultSlots: WritableSignal<PartialAlertProps>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<AlertWidget>;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "[auAlert]", never, { "type": { "alias": "auType"; "required": false; }; "dismissible": { "alias": "auDismissible"; "required": false; }; "transition": { "alias": "auTransition"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "ariaCloseButtonLabel": { "alias": "auAriaCloseButtonLabel"; "required": false; }; "children": { "alias": "auChildren"; "required": false; }; "structure": { "alias": "auStructure"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_animatedOnInit: unknown;
    static ngAcceptInputType_animated: unknown;
}
`;export{e as default};
