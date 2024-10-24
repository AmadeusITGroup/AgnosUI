const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { callWidgetFactory } from '../../config';
import { createSlider } from './slider.gen';
import * as i0 from "@angular/core";
const _c0 = ["handle"];
const _c1 = a0 => ({ item: a0 });
const _c2 = (a0, a1) => [a0, a1];
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtext(1, "\\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r1 = ctx.directives;
    const item_r2 = ctx.item;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2, directives_r1.handleDirective, i0.ɵɵpureFunction1(1, _c1, item_r2)));
} }
const _c3 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
const _c4 = a0 => ({ option: a0 });
const _c5 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, value: a3 });
const _c6 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, item: a3 });
const _c7 = a0 => ({ index: a0 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const directives_r2 = i0.ɵɵnextContext().directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2, directives_r2.progressDisplayDirective, i0.ɵɵpureFunction1(1, _c4, option_r1)));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auUse", directives_r2.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(6, _c5, state_r4, api_r5, directives_r2, state_r4.min()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r2.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(11, _c5, state_r4, api_r5, directives_r2, state_r4.max()));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(4, _c5, state_r4, api_r5, directives_r2, state_r4.sortedValues()[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(9, _c5, state_r4, api_r5, directives_r2, state_r4.sortedValues()[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(4, _c5, state_r4, api_r5, directives_r2, state_r4.sortedValues()[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(9, _c5, state_r4, api_r5, directives_r2, state_r4.sortedValues()[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 14)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    i0.ɵɵproperty("auUse", directives_r2.combinedHandleLabelDisplayDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.rtl() ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_32_r6 = i0.ɵɵnextContext().$index;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c2, directives_r2.handleLabelDisplayDirective, i0.ɵɵpureFunction1(3, _c7, ɵ$index_32_r6)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(8, _c5, state_r4, api_r5, directives_r2, state_r4.values()[ɵ$index_32_r6]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 3)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 13, "div", 2);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.handle())("auSlotProps", i0.ɵɵpureFunction4(3, _c6, state_r4, api_r5, directives_r2, item_r7));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels() && !state_r4.combinedLabelDisplay() ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 6, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelement(2, "div", 2);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 16)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 2, "div", 2);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 8, null, null, _forTrack0);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const directives_r2 = ctx.directives;
    i0.ɵɵrepeater(state_r4.progressDisplayOptions());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auUse", directives_r2.clickableAreaDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showMinMaxLabels() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels() && state_r4.combinedLabelDisplay() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r4.sortedHandles());
} }
const _c8 = ["auSlider", ""];
const _c9 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function SliderComponent_ng_template_0_Template(rf, ctx) { }
export class SliderLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderLabelDirective, selectors: [["ng-template", "auSliderLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderLabel]', standalone: true }]
    }], null, null); })();
export class SliderHandleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderHandleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderHandleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderHandleDirective, selectors: [["ng-template", "auSliderHandle", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderHandleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderHandle]', standalone: true }]
    }], null, null); })();
class SliderDefaultHandleSlotComponent {
    static { this.ɵfac = function SliderDefaultHandleSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderDefaultHandleSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultHandleSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultHandleSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handle = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["handle", ""], ["auSliderHandle", ""], [3, "auUse"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 2, 6, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SliderHandleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultHandleSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SliderHandleDirective],
                template: \`
		<ng-template auSliderHandle #handle let-state="state" let-directives="directives" let-item="item">
			<button [auUse]="[directives.handleDirective, {item}]">&nbsp;</button>
		</ng-template>
	\`,
            }]
    }], null, { handle: [{
            type: ViewChild,
            args: ['handle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 56 }); })();
export const sliderDefaultSlotHandle = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');
export class SliderStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderStructureDirective, selectors: [["ng-template", "auSliderStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderStructure]', standalone: true }]
    }], null, null); })();
class SliderDefaultStructureSlotComponent {
    static { this.ɵfac = function SliderDefaultStructureSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderDefaultStructureSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultStructureSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultStructureSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c3, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auSliderStructure", ""], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Template, 7, 3, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, SliderStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultStructureSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, SliderStructureDirective, UseDirective],
                template: \`
		<ng-template auSliderStructure #structure let-state="state" let-directives="directives" let-api="api">
			@for (option of state.progressDisplayOptions(); track option) {
				<div [auUse]="[directives.progressDisplayDirective, {option}]"></div>
			}
			<div [auUse]="directives.clickableAreaDirective"></div>
			@if (state.showMinMaxLabels()) {
				<div [auUse]="directives.minLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.min()}"></ng-template>
				</div>
				<div [auUse]="directives.maxLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.max()}"></ng-template>
				</div>
			}
			@if (state.showValueLabels() && state.combinedLabelDisplay()) {
				<div [auUse]="directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl()) {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}"></ng-template> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}"></ng-template>
					} @else {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}"></ng-template> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}"></ng-template>
					}
				</div>
			}
			@for (item of state.sortedHandles(); track item.id; let i = $index) {
				<ng-template [auSlot]="state.handle()" [auSlotProps]="{state, api, directives, item}"></ng-template>
				@if (state.showValueLabels() && !state.combinedLabelDisplay()) {
					<div [auUse]="[directives.handleLabelDisplayDirective, {index: i}]">
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.values()[i]}"></ng-template>
					</div>
				}
			}
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 110 }); })();
export const sliderDefaultSlotStructure = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');
export class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createSlider,
            widgetName: 'slider',
            defaultConfig: {
                structure: sliderDefaultSlotStructure,
                handle: sliderDefaultSlotHandle,
            },
            events: {
                onValuesChange: (event) => {
                    this.onChange(event);
                    this.onTouched();
                    this.valuesChange.emit(event);
                },
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.sliderDirective);
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent?.templateRef,
                handle: this.slotHandleFromContent?.templateRef,
                label: this.slotLabelFromContent?.templateRef,
            }),
        }));
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
        this.valuesChange = new EventEmitter();
        /**
         * Control value accessor methods
         */
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (Array.isArray(value)) {
            this['_widget'].patch({
                values: value,
            });
        }
        else {
            this['_widget'].patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this['_widget'].patch({
            disabled: isDisabled,
        });
    }
    handleBlur() {
        this.onTouched();
    }
    static { this.ɵfac = function SliderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SliderLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SliderStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SliderHandleDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHandleFromContent = _t.first);
        } }, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } }, inputs: { className: [0, "auClassName", "className"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], stepSize: [2, "auStepSize", "stepSize", auNumberAttribute], values: [0, "auValues", "values"], rtl: [2, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [2, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [2, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [0, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [0, "auAriaValueText", "ariaValueText"], readonly: [2, "auReadonly", "readonly", auBooleanAttribute], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], vertical: [2, "auVertical", "vertical", auBooleanAttribute], label: [0, "auLabel", "label"], structure: [0, "auStructure", "structure"], handle: [0, "auHandle", "handle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c8, decls: 1, vars: 6, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c9, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: '[auSlider]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                imports: [SlotDirective],
                host: {
                    '(blur)': 'handleBlur()',
                },
                template: \` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template> \`,
            }]
    }], () => [], { className: [{
            type: Input,
            args: ['auClassName']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], stepSize: [{
            type: Input,
            args: [{ alias: 'auStepSize', transform: auNumberAttribute }]
        }], values: [{
            type: Input,
            args: ['auValues']
        }], rtl: [{
            type: Input,
            args: [{ alias: 'auRtl', transform: auBooleanAttribute }]
        }], showValueLabels: [{
            type: Input,
            args: [{ alias: 'auShowValueLabels', transform: auBooleanAttribute }]
        }], showMinMaxLabels: [{
            type: Input,
            args: [{ alias: 'auShowMinMaxLabels', transform: auBooleanAttribute }]
        }], ariaLabelHandle: [{
            type: Input,
            args: ['auAriaLabelHandle']
        }], ariaValueText: [{
            type: Input,
            args: ['auAriaValueText']
        }], readonly: [{
            type: Input,
            args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], vertical: [{
            type: Input,
            args: [{ alias: 'auVertical', transform: auBooleanAttribute }]
        }], valuesChange: [{
            type: Output,
            args: ['auValuesChange']
        }], label: [{
            type: Input,
            args: ['auLabel']
        }], slotLabelFromContent: [{
            type: ContentChild,
            args: [SliderLabelDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [SliderStructureDirective, { static: false }]
        }], handle: [{
            type: Input,
            args: ['auHandle']
        }], slotHandleFromContent: [{
            type: ContentChild,
            args: [SliderHandleDirective, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 128 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7OztJQXdCdkMsaUNBQXVEO0lBQUEsc0JBQU07SUFBQSxpQkFBUzs7OztJQUE5RCxzSEFBOEM7Ozs7Ozs7OztJQXlCckQseUJBQXFFOzs7O0lBQWhFLGlJQUF5RDs7Ozs7SUFJOUQsOEJBQTRDO0lBQzNDLGdJQUFtRztJQUNwRyxpQkFBTTtJQUNOLDhCQUE0QztJQUMzQyxnSUFBbUc7SUFDcEcsaUJBQU07Ozs7OztJQUxELHVEQUFzQztJQUM3QixjQUF3QjtJQUFDLEFBQXpCLHlDQUF3Qiw0RkFBNkQ7SUFFOUYsY0FBc0M7SUFBdEMsdURBQXNDO0lBQzdCLGNBQXdCO0lBQUMsQUFBekIseUNBQXdCLDZGQUE2RDs7Ozs7SUFNakcsOElBQStHO0lBQWUsbUJBQzlIO0lBQUEsOElBQStHOzs7Ozs7SUFEekUsQUFBekIs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LEVBQUUsS0FBSyxFQUFDO1lBSzdCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUNxQyx3QkFBd0I7a0JBQWhGLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3BDLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUNxQyxxQkFBcUI7a0JBQTFFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrRkFsSnhDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtTbGlkZXJDb250ZXh0LCBTbGlkZXJTbG90SGFuZGxlQ29udGV4dCwgU2xpZGVyU2xvdExhYmVsQ29udGV4dCwgU2xpZGVyV2lkZ2V0fSBmcm9tICcuL3NsaWRlci5nZW4nO1xuaW1wb3J0IHtjcmVhdGVTbGlkZXJ9IGZyb20gJy4vc2xpZGVyLmdlbic7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJMYWJlbERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckxhYmVsRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90TGFiZWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2xpZGVySGFuZGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckhhbmRsZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xpZGVySGFuZGxlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJIYW5kbGUgI2hhbmRsZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiIGxldC1pdGVtPVwiaXRlbVwiPlxuXHRcdFx0PGJ1dHRvbiBbYXVVc2VdPVwiW2RpcmVjdGl2ZXMuaGFuZGxlRGlyZWN0aXZlLCB7aXRlbX1dXCI+Jm5ic3A7PC9idXR0b24+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBTbGlkZXJEZWZhdWx0SGFuZGxlU2xvdENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2hhbmRsZScsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSBoYW5kbGUhOiBUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJEZWZhdWx0U2xvdEhhbmRsZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShTbGlkZXJEZWZhdWx0SGFuZGxlU2xvdENvbXBvbmVudCwgJ2hhbmRsZScpO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2xpZGVyU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNsaWRlclNsb3RIYW5kbGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1U2xpZGVyU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIiBsZXQtYXBpPVwiYXBpXCI+XG5cdFx0XHRAZm9yIChvcHRpb24gb2Ygc3RhdGUucHJvZ3Jlc3NEaXNwbGF5T3B0aW9ucygpOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiW2RpcmVjdGl2ZXMucHJvZ3Jlc3NEaXNwbGF5RGlyZWN0aXZlLCB7b3B0aW9ufV1cIj48L2Rpdj5cblx0XHRcdH1cblx0XHRcdDxkaXYgW2F1VXNlXT1cImRpcmVjdGl2ZXMuY2xpY2thYmxlQXJlYURpcmVjdGl2ZVwiPjwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZS5zaG93TWluTWF4TGFiZWxzKCkpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5taW5MYWJlbERpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIHZhbHVlOiBzdGF0ZS5taW4oKX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIHZhbHVlOiBzdGF0ZS5tYXgoKX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdEBpZiAoc3RhdGUuc2hvd1ZhbHVlTGFiZWxzKCkgJiYgc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkoKSkge1xuXHRcdFx0XHQ8ZGl2IFthdVVzZV09XCJkaXJlY3RpdmVzLmNvbWJpbmVkSGFuZGxlTGFiZWxEaXNwbGF5RGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0QGlmIChzdGF0ZS5ydGwoKSkge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlcygpWzFdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIHZhbHVlOiBzdGF0ZS5zb3J0ZWRWYWx1ZXMoKVswXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlcygpWzBdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIHZhbHVlOiBzdGF0ZS5zb3J0ZWRWYWx1ZXMoKVsxXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAZm9yIChpdGVtIG9mIHN0YXRlLnNvcnRlZEhhbmRsZXMoKTsgdHJhY2sgaXRlbS5pZDsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuaGFuZGxlKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMoKSAmJiAhc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkoKSkge1xuXHRcdFx0XHRcdDxkaXYgW2F1VXNlXT1cIltkaXJlY3RpdmVzLmhhbmRsZUxhYmVsRGlzcGxheURpcmVjdGl2ZSwge2luZGV4OiBpfV1cIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIHZhbHVlOiBzdGF0ZS52YWx1ZXMoKVtpXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBTbGlkZXJEZWZhdWx0U3RydWN0dXJlU2xvdENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxTbGlkZXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVNsaWRlcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZV0sXG5cdGhvc3Q6IHtcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnN0cnVjdHVyZSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2xpZGVyV2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDFgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgWzBdYFxuXHQgKi9cblx0QElucHV0KCdhdVZhbHVlcycpXG5cdHZhbHVlczogbnVtYmVyW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEl0IGB0cnVlYCBzbGlkZXIgZGlzcGxheSBpcyBpbnZlcnNlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJ0bCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cnRsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS1sYWJlbCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqIEBwYXJhbSB2YWx1ZSAtIHZhbHVlIG9mIHRoZSBoYW5kbGVcblx0ICogQHBhcmFtIHNvcnRlZEluZGV4IC0gaW5kZXggb2YgdGhlIGhhbmRsZSBpbiB0aGUgc29ydGVkIGxpc3Rcblx0ICogQHBhcmFtIGluZGV4IC0gaW5kZXggb2YgdGhlIGhhbmRsZSBpbiB0aGUgb3JpZ2luYWwgbGlzdFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh2YWx1ZTogbnVtYmVyKSA9PiAnJyArIHZhbHVlXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICogQHBhcmFtIHZhbHVlIC0gdmFsdWUgb2YgdGhlIGhhbmRsZVxuXHQgKiBAcGFyYW0gc29ydGVkSW5kZXggLSBpbmRleCBvZiB0aGUgaGFuZGxlIGluIHRoZSBzb3J0ZWQgbGlzdFxuXHQgKiBAcGFyYW0gaW5kZXggLSBpbmRleCBvZiB0aGUgaGFuZGxlIGluIHRoZSBvcmlnaW5hbCBsaXN0XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHZhbHVlOiBudW1iZXIpID0+ICcnICsgdmFsdWVcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dCcpIGFyaWFWYWx1ZVRleHQ6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZWFkb25seScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWQgb3RoZXJ3aXNlIGl0IGlzIGhvcml6b250YWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgbGFiZWxzIG9mIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe3ZhbHVlfTogU2xpZGVyU2xvdExhYmVsQ29udGV4dCkgPT4gJycgKyB2YWx1ZVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVMYWJlbCcpIGxhYmVsOiBTbG90Q29udGVudDxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90TGFiZWxGcm9tQ29udGVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KCdhdVN0cnVjdHVyZScpIHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8U2xpZGVyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgaGFuZGxlcnNcblx0ICovXG5cdEBJbnB1dCgnYXVIYW5kbGUnKSBoYW5kbGU6IFNsb3RDb250ZW50PFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJIYW5kbGVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEhhbmRsZUZyb21Db250ZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHNsaWRlckRlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHRcdGhhbmRsZTogc2xpZGVyRGVmYXVsdFNsb3RIYW5kbGUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFmdGVySW5pdDogKHdpZGdldCkgPT4ge1xuXHRcdFx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3Qod2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2xvdFRlbXBsYXRlczogKCkgPT4gKHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRoYW5kbGU6IHRoaXMuc2xvdEhhbmRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRsYWJlbDogdGhpcy5zbG90TGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdH0pLFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzWydfd2lkZ2V0J10ucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNbJ193aWRnZXQnXS5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXNbJ193aWRnZXQnXS5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxufVxuIl19`;export{t as default};
