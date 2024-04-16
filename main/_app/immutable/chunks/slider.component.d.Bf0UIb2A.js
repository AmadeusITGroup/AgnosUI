const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import { type WritableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { SliderContext, SliderProps, SliderSlotHandleContext, SliderSlotLabelContext, SliderWidget } from './slider';
import * as i0 from "@angular/core";
export declare class SliderLabelDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderLabelDirective, context: unknown): context is SliderSlotLabelContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderLabelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderLabelDirective, "ng-template[auSliderLabel]", never, {}, {}, never, never, true, never>;
}
export declare class SliderHandleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderHandleDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderHandleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderHandleDirective, "ng-template[auSliderHandle]", never, {}, {}, never, never, true, never>;
}
export declare class SliderDefaultHandleSlotComponent {
    private readonly _zone;
    readonly handle: TemplateRef<SliderSlotHandleContext>;
    onKeyDown(event: KeyboardEvent, handleId: number, widgetOnKeyDownFn: (event: KeyboardEvent, handleId: number) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderDefaultHandleSlotComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderDefaultHandleSlotComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const sliderDefaultSlotHandle: ComponentTemplate<unknown, "handle", SliderDefaultHandleSlotComponent>;
export declare class SliderStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderStructureDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderStructureDirective, "ng-template[auSliderStructure]", never, {}, {}, never, never, true, never>;
}
export declare class SliderDefaultStructureSlotComponent {
    structure: TemplateRef<SliderContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderDefaultStructureSlotComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderDefaultStructureSlotComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const sliderDefaultSlotStructure: ComponentTemplate<unknown, "structure", SliderDefaultStructureSlotComponent>;
export type PartialSliderProps = Partial<SliderProps>;
export declare class SliderComponent extends BaseWidgetDirective<SliderWidget> implements AfterContentChecked {
    readonly defaultSlots: WritableSignal<PartialSliderProps>;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<SliderWidget>;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number | undefined;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number | undefined;
    /**
     * Unit value between slider steps
     */
    stepSize: number | undefined;
    /**
     * Current slider values
     */
    values: number[] | undefined;
    /**
     * It \`true\` slider display is inversed
     */
    rtl: boolean | undefined;
    /**
     * If \`true\` the value labels are displayed on the slider
     */
    showValueLabels: boolean | undefined;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     */
    showMinMaxLabels: boolean | undefined;
    /**
     * Return the value for the 'aria-label' attribute for the handle
     */
    ariaLabelHandle: ((value: number, sortedIndex: number, index: number) => string) | undefined;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     */
    ariaValueText: ((value: number, sortedIndex: number, index: number) => string) | undefined;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean | undefined;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean | undefined;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean | undefined;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     */
    valuesChange: EventEmitter<number[]>;
    slotLabel: SlotContent<SliderSlotLabelContext>;
    slotLabelFromContent: SliderLabelDirective | undefined;
    slotStructure: SlotContent<SliderContext>;
    slotStructureFromContent: SliderStructureDirective | undefined;
    slotHandle: SlotContent<SliderSlotHandleContext>;
    slotHandleFromContent: SliderHandleDirective | undefined;
    /**
     * Control value accessor methods
     */
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    handleBlur(): void;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "[auSlider]", never, { "className": { "alias": "auClassName"; "required": false; }; "min": { "alias": "auMin"; "required": false; }; "max": { "alias": "auMax"; "required": false; }; "stepSize": { "alias": "auStepSize"; "required": false; }; "values": { "alias": "auValues"; "required": false; }; "rtl": { "alias": "auRtl"; "required": false; }; "showValueLabels": { "alias": "auShowValueLabels"; "required": false; }; "showMinMaxLabels": { "alias": "auShowMinMaxLabels"; "required": false; }; "ariaLabelHandle": { "alias": "auAriaLabelHandle"; "required": false; }; "ariaValueText": { "alias": "auAriaValueText"; "required": false; }; "readonly": { "alias": "auReadonly"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "vertical": { "alias": "auVertical"; "required": false; }; "slotLabel": { "alias": "auSlotLabel"; "required": false; }; "slotStructure": { "alias": "auSlotStructure"; "required": false; }; "slotHandle": { "alias": "auSlotHandle"; "required": false; }; }, { "valuesChange": "auValuesChange"; }, ["slotLabelFromContent", "slotStructureFromContent", "slotHandleFromContent"], never, true, never>;
    static ngAcceptInputType_min: unknown;
    static ngAcceptInputType_max: unknown;
    static ngAcceptInputType_stepSize: unknown;
    static ngAcceptInputType_rtl: unknown;
    static ngAcceptInputType_showValueLabels: unknown;
    static ngAcceptInputType_showMinMaxLabels: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_vertical: unknown;
}
`;export{e as default};
