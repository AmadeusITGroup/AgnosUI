const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { SliderContext, SliderSlotHandleContext, SliderSlotLabelContext, SliderWidget } from './slider.gen';
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
 * This directive uses a template reference to render the {@link SliderSlotLabelContext}.
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
export declare class SliderComponent extends BaseWidgetDirective<SliderWidget> {
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    /**
     * Minimum value that can be assigned to the slider
     *
     * @defaultValue \`0\`
     */
    min: number | undefined;
    /**
     * Maximum value that can be assigned to the slider
     *
     * @defaultValue \`100\`
     */
    max: number | undefined;
    /**
     * Unit value between slider steps
     *
     * @defaultValue \`1\`
     */
    stepSize: number | undefined;
    /**
     * Current slider values
     *
     * @defaultValue \`[0]\`
     */
    values: number[] | undefined;
    /**
     * It \`true\` slider display is inversed
     *
     * @defaultValue \`false\`
     */
    rtl: boolean | undefined;
    /**
     * If \`true\` the value labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showValueLabels: boolean | undefined;
    /**
     * If \`true\` the min and max labels are displayed on the slider
     *
     * @defaultValue \`true\`
     */
    showMinMaxLabels: boolean | undefined;
    /**
     * Return the value for the 'aria-label' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => '' + value
     * \`\`\`
     */
    ariaLabelHandle: ((value: number, sortedIndex: number, index: number) => string) | undefined;
    /**
     * Return the value for the 'aria-valuetext' attribute for the handle
     * @param value - value of the handle
     * @param sortedIndex - index of the handle in the sorted list
     * @param index - index of the handle in the original list
     *
     * @defaultValue
     * \`\`\`ts
     * (value: number) => '' + value
     * \`\`\`
     */
    ariaValueText: ((value: number, sortedIndex: number, index: number) => string) | undefined;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     *
     * @defaultValue \`false\`
     */
    readonly: boolean | undefined;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     *
     * @defaultValue \`false\`
     */
    disabled: boolean | undefined;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     *
     * @defaultValue \`false\`
     */
    vertical: boolean | undefined;
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
    valuesChange: EventEmitter<number[]>;
    /**
     * Slot to change the default labels of the slider
     *
     * @defaultValue
     * \`\`\`ts
     * ({value}: SliderSlotLabelContext) => '' + value
     * \`\`\`
     */
    label: SlotContent<SliderSlotLabelContext>;
    slotLabelFromContent: SliderLabelDirective | undefined;
    /**
     * Slot to change the default display of the slider
     */
    structure: SlotContent<SliderContext>;
    slotStructureFromContent: SliderStructureDirective | undefined;
    /**
     * Slot to change the handlers
     */
    handle: SlotContent<SliderSlotHandleContext>;
    slotHandleFromContent: SliderHandleDirective | undefined;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "[auSlider]", never, { "className": { "alias": "auClassName"; "required": false; }; "min": { "alias": "auMin"; "required": false; }; "max": { "alias": "auMax"; "required": false; }; "stepSize": { "alias": "auStepSize"; "required": false; }; "values": { "alias": "auValues"; "required": false; }; "rtl": { "alias": "auRtl"; "required": false; }; "showValueLabels": { "alias": "auShowValueLabels"; "required": false; }; "showMinMaxLabels": { "alias": "auShowMinMaxLabels"; "required": false; }; "ariaLabelHandle": { "alias": "auAriaLabelHandle"; "required": false; }; "ariaValueText": { "alias": "auAriaValueText"; "required": false; }; "readonly": { "alias": "auReadonly"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "vertical": { "alias": "auVertical"; "required": false; }; "label": { "alias": "auLabel"; "required": false; }; "structure": { "alias": "auStructure"; "required": false; }; "handle": { "alias": "auHandle"; "required": false; }; }, { "valuesChange": "auValuesChange"; }, ["slotLabelFromContent", "slotStructureFromContent", "slotHandleFromContent"], never, true, never>;
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
