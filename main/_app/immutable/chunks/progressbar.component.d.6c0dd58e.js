const e=`import type { ProgressbarContext, ProgressbarState, SlotContent } from '@agnos-ui/angular-headless';
import { ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ProgressbarContentDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarContentDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarContentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressbarContentDirective, "ng-template[auProgressbarContent]", never, {}, {}, never, never, true, never>;
}
export declare class ProgressbarDefaultSlotsComponent {
    content: TemplateRef<ProgressbarContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressbarDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const progressbarDefaultSlotContent: ComponentTemplate<unknown, "content", ProgressbarDefaultSlotsComponent>;
export declare class ProgressbarComponent implements AfterContentChecked, OnChanges {
    readonly defaultSlots: import("@amadeus-it-group/tansu").WritableSignal<Partial<Omit<import("@agnos-ui/core").ProgressbarProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>> & Omit<Omit<import("@agnos-ui/core").ProgressbarContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotContent: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>> & Omit<Omit<import("@agnos-ui/core").ProgressbarContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>, Partial<Omit<import("@agnos-ui/core").ProgressbarProps, \`slot\${string}\`> & {
        slotDefault: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>> & Omit<Omit<import("@agnos-ui/core").ProgressbarContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotContent: SlotContent<import("@agnos-ui/angular-headless").WidgetSlotContext<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>> & Omit<Omit<import("@agnos-ui/core").ProgressbarContext, keyof import("@agnos-ui/angular-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>>;
    /**
     * The aria label.
     */
    ariaLabel: string | undefined;
    /**
     * The minimum value.
     */
    min: number | undefined;
    /**
     * The maximum value.
     */
    max: number | undefined;
    /**
     * The current value.
     */
    value: number | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    slotDefault: SlotContent<ProgressbarContext>;
    slotContent: SlotContent<ProgressbarContext>;
    slotContentFromContent: ProgressbarContentDirective | undefined;
    /**
     * Height of the progressbar, can be any valid css height value.
     */
    height: string | undefined;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     */
    animated: boolean | undefined;
    /**
     * If \`true\`, shows a striped progressbar.
     */
    striped: boolean | undefined;
    /**
     * Return the value for the 'aria-valuetext' attribute.
     */
    ariaValueTextFn: ((value: number, minimum: number, maximum: number) => string | undefined) | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").ProgressbarWidget>;
    readonly widget: Pick<import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/angular-headless").ProgressbarWidget>, "actions" | "api" | "directives" | "state$" | "stores">;
    readonly api: import("@agnos-ui/angular-headless").AdaptWidgetFactories<import("@agnos-ui/angular-headless").ProgressbarApi>;
    readonly state: Signal<ProgressbarState>;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressbarComponent, "[auProgressbar]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "min": { "alias": "auMin"; "required": false; }; "max": { "alias": "auMax"; "required": false; }; "value": { "alias": "auValue"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "slotDefault": { "alias": "auSlotDefault"; "required": false; }; "slotContent": { "alias": "auSlotContent"; "required": false; }; "height": { "alias": "auHeight"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "striped": { "alias": "auStriped"; "required": false; }; "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; }; }, {}, ["slotContentFromContent"], ["*"], true, never>;
}
`;export{e as default};
