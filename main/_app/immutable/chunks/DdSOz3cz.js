const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import { type ControlValueAccessor } from '@angular/forms';
import type { SliderContext, SliderSlotHandleContext, SliderSlotLabelContext, SliderSlotTickContext, SliderWidget } from './slider.gen';
import * as i0 from "@angular/core";
/**
 * Directive to provide a template reference for slider labels.
 *
 * This directive uses a template reference to render the {@link SliderSlotLabelContext}.
 */
export declare class SliderLabelDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderLabelDirective, context: unknown): context is SliderSlotLabelContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderLabelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderLabelDirective, "ng-template[auSliderLabel]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive representing a handle for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotHandleContext}.
 */
export declare class SliderHandleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderHandleDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderHandleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderHandleDirective, "ng-template[auSliderHandle]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot handle for the slider component.
 */
export declare const sliderDefaultSlotHandle: SlotContent<SliderSlotHandleContext>;
/**
 * Directive representing a tick for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotTickContext}.
 */
export declare class SliderTickDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderTickDirective, context: unknown): context is SliderSlotTickContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderTickDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderTickDirective, "ng-template[auSliderTick]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot tick for the slider component.
 */
export declare const sliderDefaultSlotTick: SlotContent<SliderSlotTickContext>;
/**
 * Directive that provides structure for the slider component.
 *
 * This directive uses a \`TemplateRef\` to handle the context of the slider slot.
 */
export declare class SliderStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: SliderStructureDirective, context: unknown): context is SliderSlotHandleContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderStructureDirective, "ng-template[auSliderStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the slider component.
 */
export declare const sliderDefaultSlotStructure: SlotContent<SliderContext>;
/**
 * SliderComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable slider widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
export declare class SliderComponent extends BaseWidgetDirective<SliderWidget> implements ControlValueAccessor {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    readonly min: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    readonly max: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    readonly stepSize: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    readonly values: import("@angular/core").InputSignal<number[] | undefined>;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    readonly rtl: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showValueLabels: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showMinMaxLabels: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => 'Value'
     * \`\`\`
     */
    readonly ariaLabel: import("@angular/core").InputSignal<((sortedIndex: number) => string) | undefined>;
    /**
     * Return the value for the 'aria-labelledBy' attribute for the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * () => ''
     * \`\`\`
     */
    readonly ariaLabelledBy: import("@angular/core").InputSignal<((sortedIndex: number) => string) | undefined>;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => ''
     * \`\`\`
     */
    readonly ariaValueText: import("@angular/core").InputSignal<((value: number, sortedIndex: number) => string) | undefined>;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly readonly: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    readonly vertical: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the ticks are displayed on the slider
     *
     * @defaultValue \`false\`
     */
    readonly showTicks: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Unit value between the ticks
     * If value is set to \`0\` the {@link stepSize} is used to space the ticks
     *
     * @defaultValue \`0\`
     */
    readonly tickInterval: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * If \`true\` the tick values are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    readonly showTickValues: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly valuesChange: import("@angular/core").OutputEmitterRef<number[]>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    readonly label: import("@angular/core").InputSignal<SlotContent<SliderSlotLabelContext>>;
    readonly slotLabelFromContent: import("@angular/core").Signal<SliderLabelDirective | undefined>;
    /**
     * Slot to change the default display of the slider
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<SliderContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<SliderStructureDirective | undefined>;
    /**
     * Slot to change the handlers
     */
    readonly handle: import("@angular/core").InputSignal<SlotContent<SliderSlotHandleContext>>;
    readonly slotHandleFromContent: import("@angular/core").Signal<SliderHandleDirective | undefined>;
    /**
     * Slot to change the ticks
     */
    readonly tick: import("@angular/core").InputSignal<SlotContent<SliderSlotTickContext>>;
    readonly slotTickFromContent: import("@angular/core").Signal<SliderTickDirective | undefined>;
    constructor();
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "[auSlider]", never, { "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "min": { "alias": "auMin"; "required": false; "isSignal": true; }; "max": { "alias": "auMax"; "required": false; "isSignal": true; }; "stepSize": { "alias": "auStepSize"; "required": false; "isSignal": true; }; "values": { "alias": "auValues"; "required": false; "isSignal": true; }; "rtl": { "alias": "auRtl"; "required": false; "isSignal": true; }; "showValueLabels": { "alias": "auShowValueLabels"; "required": false; "isSignal": true; }; "showMinMaxLabels": { "alias": "auShowMinMaxLabels"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; "isSignal": true; }; "ariaValueText": { "alias": "auAriaValueText"; "required": false; "isSignal": true; }; "readonly": { "alias": "auReadonly"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "vertical": { "alias": "auVertical"; "required": false; "isSignal": true; }; "showTicks": { "alias": "auShowTicks"; "required": false; "isSignal": true; }; "tickInterval": { "alias": "auTickInterval"; "required": false; "isSignal": true; }; "showTickValues": { "alias": "auShowTickValues"; "required": false; "isSignal": true; }; "label": { "alias": "auLabel"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "handle": { "alias": "auHandle"; "required": false; "isSignal": true; }; "tick": { "alias": "auTick"; "required": false; "isSignal": true; }; }, { "valuesChange": "auValuesChange"; }, ["slotLabelFromContent", "slotStructureFromContent", "slotHandleFromContent", "slotTickFromContent"], never, true, never>;
}
`;export{e as default};
