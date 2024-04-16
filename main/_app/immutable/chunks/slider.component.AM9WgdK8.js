const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import { callWidgetFactory } from '../../config';
import { createSlider } from './slider';
import * as i0 from "@angular/core";
const _c0 = ["handle"];
const _c1 = a0 => ({ item: a0 });
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtext(1, "\\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r1 = ctx.widget;
    const item_r2 = ctx.item;
    i0.ɵɵproperty("auUse", widget_r1.directives.handleDirective)("auUseParams", i0.ɵɵpureFunction1(2, _c1, item_r2));
} }
const _c2 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
const _c3 = a0 => ({ option: a0 });
const _c4 = (a0, a1, a2) => ({ state: a0, widget: a1, value: a2 });
const _c5 = (a0, a1, a2) => ({ state: a0, widget: a1, item: a2 });
const _c6 = a0 => ({ index: a0 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const widget_r2 = i0.ɵɵnextContext().widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.progressDisplayDirective)("auUseParams", i0.ɵɵpureFunction1(2, _c3, option_r1));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c4, state_r4, widget_r2, state_r4.min));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r2.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(10, _c4, state_r4, widget_r2, state_r4.max));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c4, state_r4, widget_r2, state_r4.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c4, state_r4, widget_r2, state_r4.sortedValues[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c4, state_r4, widget_r2, state_r4.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c4, state_r4, widget_r2, state_r4.sortedValues[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 12)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.combinedHandleLabelDisplayDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r4.rtl ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().$index;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.handleLabelDisplayDirective)("auUseParams", i0.ɵɵpureFunction1(4, _c6, i_r5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c4, state_r4, widget_r2, state_r4.values[i_r5]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 4)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 10, "div", 2);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotHandle)("auSlotProps", i0.ɵɵpureFunction3(3, _c5, state_r4, widget_r2, item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r4.showValueLabels && !state_r4.combinedLabelDisplay ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 4, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 14)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 2, "div", 3);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 7, null, null, _forTrack0);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵrepeater(state_r4.progressDisplayOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auUse", widget_r2.directives.clickableAreaDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r4.showMinMaxLabels ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r4.showValueLabels && state_r4.combinedLabelDisplay ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r4.sortedHandles);
} }
const _c7 = ["auSlider", ""];
const _c8 = (a0, a1) => ({ state: a0, widget: a1 });
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["handle", ""], ["auSliderHandle", ""], [3, "auUse", "auUseParams"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 2, 4, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
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
			<button [auUse]="widget.directives.handleDirective" [auUseParams]="{item}">&nbsp;</button>
		</ng-template>
	\`,
            }]
    }], null, { handle: [{
            type: ViewChild,
            args: ['handle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 61 }); })();
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
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auSliderStructure", ""], [3, "auUse", "auUseParams"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
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
				<div [auUse]="widget.directives.progressDisplayDirective" [auUseParams]="{option}"></div>
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
					<div [auUse]="widget.directives.handleLabelDisplayDirective" [auUseParams]="{index: i}">
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 124 }); })();
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
        } }, inputs: { className: [i0.ɵɵInputFlags.None, "auClassName", "className"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], stepSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStepSize", "stepSize", auNumberAttribute], values: [i0.ɵɵInputFlags.None, "auValues", "values"], rtl: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [i0.ɵɵInputFlags.None, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [i0.ɵɵInputFlags.None, "auAriaValueText", "ariaValueText"], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], vertical: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVertical", "vertical", auBooleanAttribute], slotLabel: [i0.ɵɵInputFlags.None, "auSlotLabel", "slotLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHandle: [i0.ɵɵInputFlags.None, "auSlotHandle", "slotHandle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c7, decls: 1, vars: 5, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(2, _c8, ctx.state(), ctx.widget));
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
                imports: [SlotDirective, SlotDefaultDirective],
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 148 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7O0lBd0JuQyxpQ0FBMkU7SUFBQSxzQkFBTTtJQUFBLGlCQUFTOzs7O0lBQXRDLEFBQTVDLDREQUEyQyxvREFBdUI7Ozs7Ozs7OztJQWtDekUseUJBQXlGOzs7O0lBQS9CLEFBQXJELHFFQUFvRCxzREFBeUI7Ozs7O0lBSWxGLDhCQUFtRDtJQUNsRCxnSUFBMEY7SUFDM0YsaUJBQU07SUFDTiw4QkFBbUQ7SUFDbEQsZ0lBQTBGO0lBQzNGLGlCQUFNOzs7OztJQUxELDhEQUE2QztJQUNwQyxjQUEwQjtJQUFDLEFBQTNCLDJD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QUFLLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBS0csZ0JBQWdCO2tCQUFwRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUl2QyxlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUlBLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBTXhCLFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTzNELFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTzNELFFBQVE7a0JBRFAsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBUzNELFlBQVk7a0JBRFgsTUFBTTttQkFBQyxnQkFBZ0I7WUFHRixTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFDaUMsb0JBQW9CO2tCQUF4RSxZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUV6QixhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUNpQyx3QkFBd0I7a0JBQWhGLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRWhDLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUNpQyxxQkFBcUI7a0JBQTFFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrRkF6R3hDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge3R5cGUgV3JpdGFibGVTaWduYWwsIHdyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0Tmdab25lLFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7U2xpZGVyQ29udGV4dCwgU2xpZGVyUHJvcHMsIFNsaWRlclNsb3RIYW5kbGVDb250ZXh0LCBTbGlkZXJTbG90TGFiZWxDb250ZXh0LCBTbGlkZXJXaWRnZXR9IGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCB7Y3JlYXRlU2xpZGVyfSBmcm9tICcuL3NsaWRlcic7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJMYWJlbERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckxhYmVsRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90TGFiZWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2xpZGVySGFuZGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckhhbmRsZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xpZGVySGFuZGxlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJIYW5kbGUgI2hhbmRsZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIiBsZXQtaXRlbT1cIml0ZW1cIj5cblx0XHRcdDxidXR0b24gW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhhbmRsZURpcmVjdGl2ZVwiIFthdVVzZVBhcmFtc109XCJ7aXRlbX1cIj4mbmJzcDs8L2J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJEZWZhdWx0SGFuZGxlU2xvdENvbXBvbmVudCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRAVmlld0NoaWxkKCdoYW5kbGUnLCB7c3RhdGljOiB0cnVlfSkgcmVhZG9ubHkgaGFuZGxlOiBUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyLCB3aWRnZXRPbktleURvd25GbjogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdFx0d2lkZ2V0T25LZXlEb3duRm4oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50LCAnaGFuZGxlJyk7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMucHJvZ3Jlc3NEaXNwbGF5RGlyZWN0aXZlXCIgW2F1VXNlUGFyYW1zXT1cIntvcHRpb259XCI+PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbGlja2FibGVBcmVhRGlyZWN0aXZlXCI+PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS5taW59XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1heExhYmVsRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUubWF4fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY29tYmluZWRIYW5kbGVMYWJlbERpc3BsYXlEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHRAaWYgKHN0YXRlLnJ0bCkge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzFdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1swXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzBdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1sxXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAZm9yIChpdGVtIG9mIHN0YXRlLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIYW5kbGVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgIXN0YXRlLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaGFuZGxlTGFiZWxEaXNwbGF5RGlyZWN0aXZlXCIgW2F1VXNlUGFyYW1zXT1cIntpbmRleDogaX1cIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnZhbHVlc1tpXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxTbGlkZXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmV4cG9ydCB0eXBlIFBhcnRpYWxTbGlkZXJQcm9wcyA9IFBhcnRpYWw8U2xpZGVyUHJvcHM+O1xuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbFNsaWRlclByb3BzID0ge1xuXHRzbG90U3RydWN0dXJlOiBzbGlkZXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0c2xvdEhhbmRsZTogc2xpZGVyRGVmYXVsdFNsb3RIYW5kbGUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVTbGlkZXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdCcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcblx0fSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2xpZGVyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxTbGlkZXJQcm9wcz4gPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJdCBgdHJ1ZWAgc2xpZGVyIGRpc3BsYXkgaXMgaW52ZXJzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJ0bCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cnRsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dCcpIGFyaWFWYWx1ZVRleHQ6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRyZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHRASW5wdXQoJ2F1U2xvdExhYmVsJykgc2xvdExhYmVsOiBTbG90Q29udGVudDxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90TGFiZWxGcm9tQ29udGVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxTbGlkZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RIYW5kbGUnKSBzbG90SGFuZGxlOiBTbG90Q29udGVudDxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoU2xpZGVySGFuZGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RIYW5kbGVGcm9tQ29udGVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SGFuZGxlOiB0aGlzLnNsb3RIYW5kbGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TGFiZWw6IHRoaXMuc2xvdExhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
