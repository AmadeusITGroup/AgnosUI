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
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c5, state_r4, widget_r2, state_r4.min));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r2.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(10, _c5, state_r4, widget_r2, state_r4.max));
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
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c5, state_r4, widget_r2, state_r4.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.sortedValues[0]));
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
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c5, state_r4, widget_r2, state_r4.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.sortedValues[1]));
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
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c5, state_r4, widget_r2, state_r4.values[ɵ$index_32_r5]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 3)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 12, "div", 2);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotHandle)("auSlotProps", i0.ɵɵpureFunction3(3, _c6, state_r4, widget_r2, item_r6));
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
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.min}"></ng-template>
				</div>
				<div [auUse]="widget.directives.maxLabelDirective">
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.max}"></ng-template>
				</div>
			}
			@if (state.showValueLabels && state.combinedLabelDisplay) {
				<div [auUse]="widget.directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl) {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template>
					} @else {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template>
					}
				</div>
			}
			@for (item of state.sortedHandles; track item.id; let i = $index) {
				<ng-template [auSlot]="state.slotHandle" [auSlotProps]="{state, widget, item}"></ng-template>
				@if (state.showValueLabels && !state.combinedLabelDisplay) {
					<div [auUse]="[widget.directives.handleLabelDisplayDirective, {index: i}]">
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.values[i]}"></ng-template>
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
    slotStructure: sliderDefaultSlotStructure,
    slotHandle: sliderDefaultSlotHandle,
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
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotHandle: this.slotHandleFromContent?.templateRef,
            slotLabel: this.slotLabelFromContent?.templateRef,
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
        } }, inputs: { className: [0, "auClassName", "className"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], stepSize: [2, "auStepSize", "stepSize", auNumberAttribute], values: [0, "auValues", "values"], rtl: [2, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [2, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [2, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [0, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [0, "auAriaValueText", "ariaValueText"], readonly: [2, "auReadonly", "readonly", auBooleanAttribute], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], vertical: [2, "auVertical", "vertical", auBooleanAttribute], slotLabel: [0, "auSlotLabel", "slotLabel"], slotStructure: [0, "auSlotStructure", "slotStructure"], slotHandle: [0, "auSlotHandle", "slotHandle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c8, decls: 1, vars: 5, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(2, _c9, ctx.state(), ctx.widget));
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
                template: \` <ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template> \`,
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
        }], slotLabel: [{
            type: Input,
            args: ['auSlotLabel']
        }], slotLabelFromContent: [{
            type: ContentChild,
            args: [SliderLabelDirective, { static: false }]
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [SliderStructureDirective, { static: false }]
        }], slotHandle: [{
            type: Input,
            args: ['auSlotHandle']
        }], slotHandleFromContent: [{
            type: ContentChild,
            args: [SliderHandleDirective, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 147 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRFLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7O0lBd0JuQyxpQ0FBOEQ7SUFBQSxzQkFBTTtJQUFBLGlCQUFTOzs7O0lBQXJFLDZIQUFxRDs7Ozs7Ozs7O0lBa0M1RCx5QkFBNEU7Ozs7SUFBdkUsd0lBQWdFOzs7OztJQUlyRSw4QkFBbUQ7SUFDbEQsZ0lBQTBGO0lBQzNGLGlCQUFNO0lBQ04sOEJBQW1EO0lBQ2xELGdJQUEwRjtJQUMzRixpQkFBTTs7Ozs7SUFMRCw4REFBNkM7SUFDcEMsY0FBMEI7SUFBQyxBQUEzQiwyQ0FBMEIsOEVBQWtEO0lBRXJGLGNBQTZDO0lBQTdDLDhEQUE2QztJ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QUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUl2QyxlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUlBLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBTXhCLFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTzNELFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTzNELFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBUzNELFlBQVk7a0JBRFgsTUFBTTttQkFBQyxnQkFBZ0I7WUFNRixTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFDaUMsb0JBQW9CO2tCQUF4RSxZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUt6QixhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUNpQyx3QkFBd0I7a0JBQWhGLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS2hDLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUNpQyxxQkFBcUI7a0JBQTFFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrRkFsSHhDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7dHlwZSBXcml0YWJsZVNpZ25hbCwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHROZ1pvbmUsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtTbGlkZXJDb250ZXh0LCBTbGlkZXJQcm9wcywgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQsIFNsaWRlclNsb3RMYWJlbENvbnRleHQsIFNsaWRlcldpZGdldH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHtjcmVhdGVTbGlkZXJ9IGZyb20gJy4vc2xpZGVyJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNsaWRlckxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckxhYmVsRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVyTGFiZWxEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNsaWRlclNsb3RMYWJlbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJIYW5kbGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVySGFuZGxlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90SGFuZGxlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbGlkZXJIYW5kbGVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVNsaWRlckhhbmRsZSAjaGFuZGxlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiIGxldC1pdGVtPVwiaXRlbVwiPlxuXHRcdFx0PGJ1dHRvbiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLmhhbmRsZURpcmVjdGl2ZSwge2l0ZW19XVwiPiZuYnNwOzwvYnV0dG9uPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50IHtcblx0cHJpdmF0ZSByZWFkb25seSBfem9uZSA9IGluamVjdChOZ1pvbmUpO1xuXG5cdEBWaWV3Q2hpbGQoJ2hhbmRsZScsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSBoYW5kbGUhOiBUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyLCB3aWRnZXRPbktleURvd25GbjogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdFx0d2lkZ2V0T25LZXlEb3duRm4oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50LCAnaGFuZGxlJyk7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLnByb2dyZXNzRGlzcGxheURpcmVjdGl2ZSwge29wdGlvbn1dXCI+PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbGlja2FibGVBcmVhRGlyZWN0aXZlXCI+PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS5taW59XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1heExhYmVsRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUubWF4fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY29tYmluZWRIYW5kbGVMYWJlbERpc3BsYXlEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHRAaWYgKHN0YXRlLnJ0bCkge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzFdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1swXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzBdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1sxXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAZm9yIChpdGVtIG9mIHN0YXRlLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIYW5kbGVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgIXN0YXRlLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLmhhbmRsZUxhYmVsRGlzcGxheURpcmVjdGl2ZSwge2luZGV4OiBpfV1cIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnZhbHVlc1tpXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlITogVGVtcGxhdGVSZWY8U2xpZGVyQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShTbGlkZXJEZWZhdWx0U3RydWN0dXJlU2xvdENvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5leHBvcnQgdHlwZSBQYXJ0aWFsU2xpZGVyUHJvcHMgPSBQYXJ0aWFsPFNsaWRlclByb3BzPjtcbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWxTbGlkZXJQcm9wcyA9IHtcblx0c2xvdFN0cnVjdHVyZTogc2xpZGVyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdHNsb3RIYW5kbGU6IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdCcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcblx0fSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2xpZGVyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxTbGlkZXJQcm9wcz4gPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJdCBgdHJ1ZWAgc2xpZGVyIGRpc3BsYXkgaXMgaW52ZXJzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJ0bCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cnRsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dCcpIGFyaWFWYWx1ZVRleHQ6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRyZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgbGFiZWxzIG9mIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCgnYXVTbG90TGFiZWwnKSBzbG90TGFiZWw6IFNsb3RDb250ZW50PFNsaWRlclNsb3RMYWJlbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFNsaWRlckxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RMYWJlbEZyb21Db250ZW50OiBTbGlkZXJMYWJlbERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFNsaWRlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGhhbmRsZXJzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2xvdEhhbmRsZScpIHNsb3RIYW5kbGU6IFNsb3RDb250ZW50PFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJIYW5kbGVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEhhbmRsZUZyb21Db250ZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuXHQgKi9cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiBbdmFsdWVdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RIYW5kbGU6IHRoaXMuc2xvdEhhbmRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RMYWJlbDogdGhpcy5zbG90TGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
