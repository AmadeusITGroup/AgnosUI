const e=`import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AdaptWidgetSlots, WidgetProps, AdaptSlotContentProps, SlotContent } from '@agnos-ui/angular-headless';
import { type WritableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked } from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/progressbar').ProgressbarWidget>;
type ProgressbarProps = WidgetProps<ProgressbarWidget>;
type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/progressbar').ProgressbarContext>;
export declare class ProgressbarStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressbarStructureDirective, "ng-template[auProgressbarStructure]", never, {}, {}, never, never, true, never>;
}
export declare class ProgressbarDefaultSlotsComponent {
    structure: TemplateRef<ProgressbarContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressbarDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const progressbarDefaultSlotStructure: ComponentTemplate<unknown, "structure", ProgressbarDefaultSlotsComponent>;
export type PartialProgressbarProps = Partial<ProgressbarProps>;
export declare class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> implements AfterContentChecked {
    readonly defaultSlots: WritableSignal<PartialProgressbarProps>;
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
    slotStructure: SlotContent<ProgressbarContext>;
    slotStructureFromContent: ProgressbarStructureDirective | undefined;
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
    /**
     * Type of the progressbar, following bootstrap types.
     */
    type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark' | undefined;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<ProgressbarWidget>;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressbarComponent, "[auProgressbar]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "min": { "alias": "auMin"; "required": false; }; "max": { "alias": "auMax"; "required": false; }; "value": { "alias": "auValue"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "slotDefault": { "alias": "auSlotDefault"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "height": { "alias": "auHeight"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "striped": { "alias": "auStriped"; "required": false; }; "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; }; "type": { "alias": "auType"; "required": false; }; }, {}, ["slotStructureFromContent"], ["*"], true, never>;
    static ngAcceptInputType_min: unknown;
    static ngAcceptInputType_max: unknown;
    static ngAcceptInputType_value: unknown;
    static ngAcceptInputType_animated: unknown;
    static ngAcceptInputType_striped: unknown;
}
export {};
`;export{e as default};
