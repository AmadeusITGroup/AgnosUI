const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import { callWidgetFactory } from '../../config';
import { createSlider } from './slider';
import * as i0 from "@angular/core";
const _c0 = ["handle"];
const _c1 = a0 => ({ item: a0 });
const _c2 = (a0, a1) => [a0, a1];
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtext(1, "\\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r1 = ctx.widget;
    const item_r2 = ctx.item;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2, widget_r1.directives.handleDirective, i0.ɵɵpureFunction1(1, _c1, item_r2)));
} }
const _c3 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
const _c4 = a0 => ({ option: a0 });
const _c5 = (a0, a1, a2) => ({ state: a0, widget: a1, value: a2 });
const _c6 = (a0, a1, a2) => ({ state: a0, widget: a1, item: a2 });
const _c7 = a0 => ({ index: a0 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const widget_r2 = i0.ɵɵnextContext().widget;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2, widget_r2.directives.progressDisplayDirective, i0.ɵɵpureFunction1(1, _c4, option_r1)));
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
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(6, _c5, state_r4, widget_r2, state_r4.min));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r2.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(10, _c5, state_r4, widget_r2, state_r4.max));
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
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(4, _c5, state_r4, widget_r2, state_r4.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.sortedValues[0]));
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
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(4, _c5, state_r4, widget_r2, state_r4.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.sortedValues[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 12)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.combinedHandleLabelDisplayDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.rtl ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_32_r5 = i0.ɵɵnextContext().$index;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c2, widget_r2.directives.handleLabelDisplayDirective, i0.ɵɵpureFunction1(3, _c7, ɵ$index_32_r5)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.values[ɵ$index_32_r5]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 3)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 12, "div", 2);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.handle)("auSlotProps", i0.ɵɵpureFunction3(3, _c6, state_r4, widget_r2, item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels && !state_r4.combinedLabelDisplay ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 6, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelement(2, "div", 2);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 14)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 2, "div", 2);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 7, null, null, _forTrack0);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵrepeater(state_r4.progressDisplayOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auUse", widget_r2.directives.clickableAreaDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showMinMaxLabels ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels && state_r4.combinedLabelDisplay ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r4.sortedHandles);
} }
const _c8 = ["auSlider", ""];
const _c9 = (a0, a1) => ({ state: a0, widget: a1 });
function SliderComponent_ng_template_0_Template(rf, ctx) { }
export class SliderLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(); }; }
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
    static { this.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderHandleDirective, selectors: [["ng-template", "auSliderHandle", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderHandleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderHandle]', standalone: true }]
    }], null, null); })();
export class SliderDefaultHandleSlotComponent {
    constructor() {
        this._zone = inject(NgZone);
    }
    onKeyDown(event, handleId, widgetOnKeyDownFn) {
        widgetOnKeyDownFn(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = function SliderDefaultHandleSlotComponent_Factory(t) { return new (t || SliderDefaultHandleSlotComponent)(); }; }
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
		<ng-template auSliderHandle #handle let-state="state" let-widget="widget" let-item="item">
			<button [auUse]="[widget.directives.handleDirective, {item}]">&nbsp;</button>
		</ng-template>
	\`,
            }]
    }], null, { handle: [{
            type: ViewChild,
            args: ['handle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 60 }); })();
export const sliderDefaultSlotHandle = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');
export class SliderStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderStructureDirective_Factory(t) { return new (t || SliderStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderStructureDirective, selectors: [["ng-template", "auSliderStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderStructure]', standalone: true }]
    }], null, null); })();
export class SliderDefaultStructureSlotComponent {
    static { this.ɵfac = function SliderDefaultStructureSlotComponent_Factory(t) { return new (t || SliderDefaultStructureSlotComponent)(); }; }
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
		<ng-template auSliderStructure #structure let-state="state" let-widget="widget">
			@for (option of state.progressDisplayOptions; track option) {
				<div [auUse]="[widget.directives.progressDisplayDirective, {option}]"></div>
			}
			<div [auUse]="widget.directives.clickableAreaDirective"></div>
			@if (state.showMinMaxLabels) {
				<div [auUse]="widget.directives.minLabelDirective">
					<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.min}"></ng-template>
				</div>
				<div [auUse]="widget.directives.maxLabelDirective">
					<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.max}"></ng-template>
				</div>
			}
			@if (state.showValueLabels && state.combinedLabelDisplay) {
				<div [auUse]="widget.directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl) {
						<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template> -
						<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template>
					} @else {
						<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template> -
						<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template>
					}
				</div>
			}
			@for (item of state.sortedHandles; track item.id; let i = $index) {
				<ng-template [auSlot]="state.handle" [auSlotProps]="{state, widget, item}"></ng-template>
				@if (state.showValueLabels && !state.combinedLabelDisplay) {
					<div [auUse]="[widget.directives.handleLabelDisplayDirective, {index: i}]">
						<ng-template [auSlot]="state.label" [auSlotProps]="{state, widget, value: state.values[i]}"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 123 }); })();
export const sliderDefaultSlotStructure = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');
const defaultConfig = {
    structure: sliderDefaultSlotStructure,
    handle: sliderDefaultSlotHandle,
};
export class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: createSlider,
            widgetName: 'slider',
            defaultConfig: this.defaultSlots,
            events: {
                onValuesChange: (event) => {
                    this.onChange(event);
                    this.onTouched();
                    this.valuesChange.emit(event);
                },
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.sliderDirective);
            },
        });
        /**
         * An event emitted when slider values are changed
         *
         * Event payload equals to the updated slider values
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
            this._widget.patch({
                values: value,
            });
        }
        else {
            this._widget.patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this._widget.patch({
            disabled: isDisabled,
        });
    }
    handleBlur() {
        this.onTouched();
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            structure: this.slotStructureFromContent?.templateRef,
            handle: this.slotHandleFromContent?.templateRef,
            label: this.slotLabelFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSliderComponent_BaseFactory; return function SliderComponent_Factory(t) { return (ɵSliderComponent_BaseFactory || (ɵSliderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SliderComponent)))(t || SliderComponent); }; })(); }
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
        } }, inputs: { className: [0, "auClassName", "className"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], stepSize: [2, "auStepSize", "stepSize", auNumberAttribute], values: [0, "auValues", "values"], rtl: [2, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [2, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [2, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [0, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [0, "auAriaValueText", "ariaValueText"], readonly: [2, "auReadonly", "readonly", auBooleanAttribute], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], vertical: [2, "auVertical", "vertical", auBooleanAttribute], label: [0, "auLabel", "label"], structure: [0, "auStructure", "structure"], handle: [0, "auHandle", "handle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c8, decls: 1, vars: 5, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state().structure)("auSlotProps", i0.ɵɵpureFunction2(2, _c9, ctx.state(), ctx.widget));
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
                template: \` <ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), widget}"></ng-template> \`,
            }]
    }], null, { className: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 147 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRFLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7O0lBd0JuQyxpQ0FBOEQ7SUFBQSxzQkFBTTtJQUFBLGlCQUFTOzs7O0lBQXJFLDZIQUFxRDs7Ozs7Ozs7O0lBa0M1RCx5QkFBNEU7Ozs7SUFBdkUsd0lBQWdFOzs7OztJQUlyRSw4QkFBbUQ7SUFDbEQsZ0lBQXNGO0lBQ3ZGLGlCQUFNO0lBQ04sOEJBQW1EO0lBQ2xELGdJQUFzRjtJQUN2RixpQkFBTTs7Ozs7SUFMRCw4REFBNkM7SUFDcEMsY0FBc0I7SUFBQyxBQUF2Qix1Q0FBc0IsOEVBQWtEO0lBRWpGLGNBQTZDO0lBQTdDLDhEQUE2QztJ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QUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBSXZDLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBSUEsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFNeEIsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPM0QsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPM0QsUUFBUTtrQkFEUCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFTM0QsWUFBWTtrQkFEWCxNQUFNO21CQUFDLGdCQUFnQjtZQU1OLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQUNxQyxvQkFBb0I7a0JBQXhFLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBSzdCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUNxQyx3QkFBd0I7a0JBQWhGLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3BDLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUNxQyxxQkFBcUI7a0JBQTFFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrRkFsSHhDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7dHlwZSBXcml0YWJsZVNpZ25hbCwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHROZ1pvbmUsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtTbGlkZXJDb250ZXh0LCBTbGlkZXJQcm9wcywgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQsIFNsaWRlclNsb3RMYWJlbENvbnRleHQsIFNsaWRlcldpZGdldH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHtjcmVhdGVTbGlkZXJ9IGZyb20gJy4vc2xpZGVyJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNsaWRlckxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckxhYmVsRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVyTGFiZWxEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNsaWRlclNsb3RMYWJlbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJIYW5kbGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVySGFuZGxlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90SGFuZGxlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbGlkZXJIYW5kbGVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVNsaWRlckhhbmRsZSAjaGFuZGxlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiIGxldC1pdGVtPVwiaXRlbVwiPlxuXHRcdFx0PGJ1dHRvbiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLmhhbmRsZURpcmVjdGl2ZSwge2l0ZW19XVwiPiZuYnNwOzwvYnV0dG9uPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50IHtcblx0cHJpdmF0ZSByZWFkb25seSBfem9uZSA9IGluamVjdChOZ1pvbmUpO1xuXG5cdEBWaWV3Q2hpbGQoJ2hhbmRsZScsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSBoYW5kbGUhOiBUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyLCB3aWRnZXRPbktleURvd25GbjogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdFx0d2lkZ2V0T25LZXlEb3duRm4oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50LCAnaGFuZGxlJyk7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLnByb2dyZXNzRGlzcGxheURpcmVjdGl2ZSwge29wdGlvbn1dXCI+PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbGlja2FibGVBcmVhRGlyZWN0aXZlXCI+PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5sYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLm1pbn1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWF4TGFiZWxEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5sYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLm1heH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdEBpZiAoc3RhdGUuc2hvd1ZhbHVlTGFiZWxzICYmIHN0YXRlLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHRcdDxkaXYgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmNvbWJpbmVkSGFuZGxlTGFiZWxEaXNwbGF5RGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0QGlmIChzdGF0ZS5ydGwpIHtcblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzFdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzBdfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0fSBAZWxzZSB7XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5sYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1swXX1cIj48L25nLXRlbXBsYXRlPiAtXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5sYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1sxXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAZm9yIChpdGVtIG9mIHN0YXRlLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmhhbmRsZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLnNob3dWYWx1ZUxhYmVscyAmJiAhc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0XHQ8ZGl2IFthdVVzZV09XCJbd2lkZ2V0LmRpcmVjdGl2ZXMuaGFuZGxlTGFiZWxEaXNwbGF5RGlyZWN0aXZlLCB7aW5kZXg6IGl9XVwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS52YWx1ZXNbaV19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPFNsaWRlckNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3Qgc2xpZGVyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoU2xpZGVyRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuZXhwb3J0IHR5cGUgUGFydGlhbFNsaWRlclByb3BzID0gUGFydGlhbDxTbGlkZXJQcm9wcz47XG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsU2xpZGVyUHJvcHMgPSB7XG5cdHN0cnVjdHVyZTogc2xpZGVyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdGhhbmRsZTogc2xpZGVyRGVmYXVsdFNsb3RIYW5kbGUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVTbGlkZXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNsaWRlcldpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzOiBXcml0YWJsZVNpZ25hbDxQYXJ0aWFsU2xpZGVyUHJvcHM+ID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTbGlkZXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0ZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZhbHVlc0NoYW5nZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlc0NoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuc2xpZGVyRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RlcFNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSXQgYHRydWVgIHNsaWRlciBkaXNwbGF5IGlzIGludmVyc2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSdGwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJ0bDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSB2YWx1ZSBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93VmFsdWVMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dWYWx1ZUxhYmVsczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBtaW4gYW5kIG1heCBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTaG93TWluTWF4TGFiZWxzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBzaG93TWluTWF4TGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLWxhYmVsJyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxIYW5kbGUnKSBhcmlhTGFiZWxIYW5kbGU6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHQnKSBhcmlhVmFsdWVUZXh0OiAoKHZhbHVlOiBudW1iZXIsIHNvcnRlZEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYnV0IHRoZSBzbGlkZXIgaXMgc3RpbGwgZm9jdXNhYmxlXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZWFkb25seScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmVydGljYWwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZlcnRpY2FsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gc2xpZGVyIHZhbHVlcyBhcmUgY2hhbmdlZFxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgdXBkYXRlZCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZhbHVlc0NoYW5nZScpXG5cdHZhbHVlc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IGxhYmVscyBvZiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1TGFiZWwnKSBsYWJlbDogU2xvdENvbnRlbnQ8U2xpZGVyU2xvdExhYmVsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoU2xpZGVyTGFiZWxEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdExhYmVsRnJvbUNvbnRlbnQ6IFNsaWRlckxhYmVsRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IG9mIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCgnYXVTdHJ1Y3R1cmUnKSBzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFNsaWRlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGhhbmRsZXJzXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGFuZGxlJykgaGFuZGxlOiBTbG90Q29udGVudDxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoU2xpZGVySGFuZGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RIYW5kbGVGcm9tQ29udGVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdGhhbmRsZTogdGhpcy5zbG90SGFuZGxlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0bGFiZWw6IHRoaXMuc2xvdExhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
