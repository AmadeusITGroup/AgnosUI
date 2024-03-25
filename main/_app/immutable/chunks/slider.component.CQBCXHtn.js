const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createSlider, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["handle"];
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("keydown", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_keydown_0_listener($event) { const ctx_r1 = i0.ɵɵrestoreView(_r1); const widget_r3 = ctx_r1.widget; const item_r4 = ctx_r1.item; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onKeyDown($event, item_r4.id, widget_r3.actions.keydown)); })("mousedown", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_mousedown_0_listener($event) { const ctx_r5 = i0.ɵɵrestoreView(_r1); const widget_r3 = ctx_r5.widget; const item_r4 = ctx_r5.item; return i0.ɵɵresetView(widget_r3.actions.mouseDown($event, item_r4.id)); })("touchstart", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_touchstart_0_listener($event) { const ctx_r6 = i0.ɵɵrestoreView(_r1); const widget_r3 = ctx_r6.widget; const item_r4 = ctx_r6.item; return i0.ɵɵresetView(widget_r3.actions.touchStart($event, item_r4.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r8 = ctx.state;
    const item_r4 = ctx.item;
    i0.ɵɵclassMap(state_r8.vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", state_r8.handleDisplayOptions[item_r4.id].left, "%")("top", state_r8.handleDisplayOptions[item_r4.id].top, "%");
    i0.ɵɵproperty("disabled", state_r8.disabled);
    i0.ɵɵattribute("aria-valuemin", state_r8.min)("aria-valuemax", state_r8.max)("aria-readonly", state_r8.readonly ? true : null)("aria-disabled", state_r8.disabled ? true : null)("aria-valuenow", item_r4.value)("aria-valuetext", item_r4.ariaValueText)("aria-label", item_r4.ariaLabel)("aria-orientation", state_r8.vertical ? "vertical" : null);
} }
const _c1 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
const _c2 = (a0, a1, a2) => ({ state: a0, widget: a1, value: a2 });
const _c3 = (a0, a1, a2) => ({ state: a0, widget: a1, item: a2 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵstyleProp("left", option_r2.left, "%")("right", option_r2.right, "%")("bottom", option_r2.bottom, "%")("top", option_r2.top, "%")("width", option_r2.width, "%")("height", option_r2.height, "%");
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const state_r5 = ctx_r3.state;
    const widget_r3 = ctx_r3.widget;
    i0.ɵɵclassMap(state_r5.vertical ? "au-slider-label-vertical au-slider-label-vertical-min" : "au-slider-label au-slider-label-min");
    i0.ɵɵclassProp("au-slider-rtl", state_r5.rtl)("invisible", !state_r5.minValueLabelDisplay);
    i0.ɵɵproperty("auUse", widget_r3.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(18, _c2, state_r5, widget_r3, state_r5.min));
    i0.ɵɵadvance();
    i0.ɵɵclassMap(state_r5.vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max");
    i0.ɵɵclassProp("au-slider-rtl", state_r5.rtl)("invisible", !state_r5.maxValueLabelDisplay);
    i0.ɵɵproperty("auUse", widget_r3.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(22, _c2, state_r5, widget_r3, state_r5.max));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const state_r5 = ctx_r3.state;
    const widget_r3 = ctx_r3.widget;
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r5, widget_r3, state_r5.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r5, widget_r3, state_r5.sortedValues[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const state_r5 = ctx_r3.state;
    const widget_r3 = ctx_r3.widget;
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r5, widget_r3, state_r5.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r5, widget_r3, state_r5.sortedValues[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 12)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r5 = i0.ɵɵnextContext().state;
    i0.ɵɵclassMap(state_r5.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", state_r5.combinedLabelPositionLeft, "%")("top", state_r5.combinedLabelPositionTop, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r5.rtl ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext().$index;
    const ctx_r3 = i0.ɵɵnextContext();
    const state_r5 = ctx_r3.state;
    const widget_r3 = ctx_r3.widget;
    i0.ɵɵclassMap(state_r5.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", state_r5.handleDisplayOptions[i_r6].left, "%")("top", state_r5.handleDisplayOptions[i_r6].top, "%");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r5, widget_r3, state_r5.values[i_r6]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 7)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 12, "div", 4);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    const state_r5 = ctx_r3.state;
    const widget_r3 = ctx_r3.widget;
    i0.ɵɵproperty("auSlot", state_r5.slotHandle)("auSlotProps", i0.ɵɵpureFunction3(3, _c3, state_r5, widget_r3, item_r7));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r5.showValueLabels && !state_r5.combinedLabelDisplay ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 12, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵlistener("click", function SliderDefaultStructureSlotComponent_ng_template_0_Template_div_click_2_listener($event) { const widget_r3 = i0.ɵɵrestoreView(_r1).widget; return i0.ɵɵresetView(widget_r3.actions.click($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 26)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 7, "div", 4);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 7, null, null, _forTrack0);
} if (rf & 2) {
    const state_r5 = ctx.state;
    i0.ɵɵrepeater(state_r5.progressDisplayOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(state_r5.vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area");
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r5.showMinMaxLabels ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r5.showValueLabels && state_r5.combinedLabelDisplay ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r5.sortedHandles);
} }
const _c4 = ["auSlider", ""];
const _c5 = (a0, a1) => ({ state: a0, widget: a1 });
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["handle", ""], ["auSliderHandle", ""], ["role", "slider", 1, "au-slider-handle", 3, "keydown", "mousedown", "touchstart", "disabled"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 2, 15, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SliderHandleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultHandleSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SliderHandleDirective],
                template: \`
		<ng-template auSliderHandle #handle let-state="state" let-widget="widget" let-item="item">
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state.min"
				[attr.aria-valuemax]="state.max"
				[attr.aria-readonly]="state.readonly ? true : null"
				[attr.aria-disabled]="state.disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.ariaValueText"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state.vertical ? 'vertical' : null"
				[disabled]="state.disabled"
				[class]="state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state.handleDisplayOptions[item.id].left"
				[style.top.%]="state.handleDisplayOptions[item.id].top"
				(keydown)="onKeyDown($event, item.id, widget.actions.keydown)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
				(touchstart)="widget.actions.touchStart($event, item.id)"
			>
				&nbsp;
			</button>
		</ng-template>
	\`,
            }]
    }], null, { handle: [{
            type: ViewChild,
            args: ['handle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 87 }); })();
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
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auSliderStructure", ""], [1, "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"], [3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Template, 7, 4, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
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
				<div
					class="au-slider-progress"
					[style.left.%]="option.left"
					[style.right.%]="option.right"
					[style.bottom.%]="option.bottom"
					[style.top.%]="option.top"
					[style.width.%]="option.width"
					[style.height.%]="option.height"
				></div>
			}
			<div [class]="state.vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="widget.actions.click($event)"></div>
			@if (state.showMinMaxLabels) {
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
					[class.au-slider-rtl]="state.rtl"
					[class.invisible]="!state.minValueLabelDisplay"
					[auUse]="widget.directives.minLabelDirective"
				>
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.min}"></ng-template>
				</div>
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
					[class.au-slider-rtl]="state.rtl"
					[class.invisible]="!state.maxValueLabelDisplay"
					[auUse]="widget.directives.maxLabelDirective"
				>
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.max}"></ng-template>
				</div>
			}
			@if (state.showValueLabels && state.combinedLabelDisplay) {
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
					[style.left.%]="state.combinedLabelPositionLeft"
					[style.top.%]="state.combinedLabelPositionTop"
				>
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
					<div
						[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
						[style.left.%]="state.handleDisplayOptions[i].left"
						[style.top.%]="state.handleDisplayOptions[i].top"
					>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 176 }); })();
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
        } }, hostAttrs: [1, "au-slider"], hostVars: 5, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-disabled", ctx.state().disabled ? true : null);
            i0.ɵɵclassMap((ctx.state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + ctx.state().className);
            i0.ɵɵclassProp("disabled", ctx.state().disabled);
        } }, inputs: { className: [i0.ɵɵInputFlags.None, "auClassName", "className"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], stepSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStepSize", "stepSize", auNumberAttribute], values: [i0.ɵɵInputFlags.None, "auValues", "values"], rtl: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [i0.ɵɵInputFlags.None, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [i0.ɵɵInputFlags.None, "auAriaValueText", "ariaValueText"], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], vertical: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVertical", "vertical", auBooleanAttribute], slotLabel: [i0.ɵɵInputFlags.None, "auSlotLabel", "slotLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHandle: [i0.ɵɵInputFlags.None, "auSlotHandle", "slotHandle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c4, decls: 1, vars: 5, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(2, _c5, ctx.state(), ctx.widget));
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
                    class: \`au-slider\`,
                    '[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
                    '[class.disabled]': 'state().disabled',
                    '[attr.aria-disabled]': 'state().disabled ? true : null',
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 204 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRFLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUF3QnZCLGlDQWtCQztJQURBLEFBREEsQUFEQSwyUkFBVywrREFBa0QsS0FBQywrT0FDakQsK0NBQXlDLEtBQUMsaVBBQ3pDLGdEQUEwQyxLQUFDO0lBRXpELHdCQUNEO0lBQUEsaUJBQVM7Ozs7SUFSUiw4RkFBc0Y7SUFFdEYsQUFEQSwyRUFBeUQsMkRBQ0Y7SUFIdkQsNENBQTJCOzs7Ozs7OztJQTJDM0IseUJBUU87OztJQUROLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSwyQ0FBNEIsK0JBQ0UsaUNBQ0UsMkJBQ04sK0JBQ0ksaUNBQ0U7Ozs7O0lBS2pDLDhCQUtDO0lBQ0EsZ0lBQTBGO0lBQzNGLGlCQUFNO0lBQ04sOEJB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QU07bUJBQUMsZ0JBQWdCO1lBR0YsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBQ2lDLG9CQUFvQjtrQkFBeEUsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFFekIsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFDaUMsd0JBQXdCO2tCQUFoRixZQUFZO21CQUFDLHdCQUF3QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUVoQyxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLGNBQWM7WUFDaUMscUJBQXFCO2tCQUExRSxZQUFZO21CQUFDLHFCQUFxQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7a0ZBekd4QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuXHRTbGlkZXJDb250ZXh0LFxuXHRTbGlkZXJQcm9wcyxcblx0U2xpZGVyU2xvdEhhbmRsZUNvbnRleHQsXG5cdFNsaWRlclNsb3RMYWJlbENvbnRleHQsXG5cdFNsaWRlcldpZGdldCxcblx0U2xvdENvbnRlbnQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlU2xpZGVyLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge3R5cGUgV3JpdGFibGVTaWduYWwsIHdyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0Tmdab25lLFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNsaWRlckxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckxhYmVsRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVyTGFiZWxEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNsaWRlclNsb3RMYWJlbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJIYW5kbGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RMYWJlbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogU2xpZGVySGFuZGxlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90SGFuZGxlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xpZGVySGFuZGxlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJIYW5kbGUgI2hhbmRsZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIiBsZXQtaXRlbT1cIml0ZW1cIj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItaGFuZGxlXCJcblx0XHRcdFx0cm9sZT1cInNsaWRlclwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtaW5dPVwic3RhdGUubWluXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1heF09XCJzdGF0ZS5tYXhcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXJlYWRvbmx5XT1cInN0YXRlLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbm93XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJpdGVtLmFyaWFWYWx1ZVRleHRcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCJzdGF0ZS52ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiBudWxsXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlLmRpc2FibGVkXCJcblx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1oYW5kbGUtdmVydGljYWwnIDogJ2F1LXNsaWRlci1oYW5kbGUtaG9yaXpvbnRhbCdcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0udG9wXCJcblx0XHRcdFx0KGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgaXRlbS5pZCwgd2lkZ2V0LmFjdGlvbnMua2V5ZG93bilcIlxuXHRcdFx0XHQobW91c2Vkb3duKT1cIndpZGdldC5hY3Rpb25zLm1vdXNlRG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KHRvdWNoc3RhcnQpPVwid2lkZ2V0LmFjdGlvbnMudG91Y2hTdGFydCgkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdD5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJEZWZhdWx0SGFuZGxlU2xvdENvbXBvbmVudCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRAVmlld0NoaWxkKCdoYW5kbGUnLCB7c3RhdGljOiB0cnVlfSkgcmVhZG9ubHkgaGFuZGxlOiBUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyLCB3aWRnZXRPbktleURvd25GbjogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdFx0d2lkZ2V0T25LZXlEb3duRm4oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRIYW5kbGVTbG90Q29tcG9uZW50LCAnaGFuZGxlJyk7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2xpZGVyU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVTbGlkZXJTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLXByb2dyZXNzXCJcblx0XHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cIm9wdGlvbi5sZWZ0XCJcblx0XHRcdFx0XHRbc3R5bGUucmlnaHQuJV09XCJvcHRpb24ucmlnaHRcIlxuXHRcdFx0XHRcdFtzdHlsZS5ib3R0b20uJV09XCJvcHRpb24uYm90dG9tXCJcblx0XHRcdFx0XHRbc3R5bGUudG9wLiVdPVwib3B0aW9uLnRvcFwiXG5cdFx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwib3B0aW9uLndpZHRoXCJcblx0XHRcdFx0XHRbc3R5bGUuaGVpZ2h0LiVdPVwib3B0aW9uLmhlaWdodFwiXG5cdFx0XHRcdD48L2Rpdj5cblx0XHRcdH1cblx0XHRcdDxkaXYgW2NsYXNzXT1cInN0YXRlLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhJ1wiIChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbGljaygkZXZlbnQpXCI+PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3dNaW5NYXhMYWJlbHMpIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1pbicgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1taW4nXCJcblx0XHRcdFx0XHRbY2xhc3MuYXUtc2xpZGVyLXJ0bF09XCJzdGF0ZS5ydGxcIlxuXHRcdFx0XHRcdFtjbGFzcy5pbnZpc2libGVdPVwiIXN0YXRlLm1pblZhbHVlTGFiZWxEaXNwbGF5XCJcblx0XHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWluTGFiZWxEaXJlY3RpdmVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUubWlufVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0XHRcdFtjbGFzcy5hdS1zbGlkZXItcnRsXT1cInN0YXRlLnJ0bFwiXG5cdFx0XHRcdFx0W2NsYXNzLmludmlzaWJsZV09XCIhc3RhdGUubWF4VmFsdWVMYWJlbERpc3BsYXlcIlxuXHRcdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS5tYXh9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAaWYgKHN0YXRlLnNob3dWYWx1ZUxhYmVscyAmJiBzdGF0ZS5jb21iaW5lZExhYmVsRGlzcGxheSkge1xuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUuY29tYmluZWRMYWJlbFBvc2l0aW9uTGVmdFwiXG5cdFx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlLmNvbWJpbmVkTGFiZWxQb3NpdGlvblRvcFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRAaWYgKHN0YXRlLnJ0bCkge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzFdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1swXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUuc29ydGVkVmFsdWVzWzBdfVwiPjwvbmctdGVtcGxhdGU+IC1cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1sxXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHRAZm9yIChpdGVtIG9mIHN0YXRlLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIYW5kbGVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgIXN0YXRlLmNvbWJpbmVkTGFiZWxEaXNwbGF5KSB7XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS5sZWZ0XCJcblx0XHRcdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS50b3BcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnZhbHVlc1tpXX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxTbGlkZXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlckRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFNsaWRlckRlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmV4cG9ydCB0eXBlIFBhcnRpYWxTbGlkZXJQcm9wcyA9IFBhcnRpYWw8U2xpZGVyUHJvcHM+O1xuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbFNsaWRlclByb3BzID0ge1xuXHRzbG90U3RydWN0dXJlOiBzbGlkZXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0c2xvdEhhbmRsZTogc2xpZGVyRGVmYXVsdFNsb3RIYW5kbGUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVTbGlkZXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiBgYXUtc2xpZGVyYCxcblx0XHQnW2NsYXNzXSc6ICcoc3RhdGUoKS52ZXJ0aWNhbCA/IFwiYXUtc2xpZGVyLXZlcnRpY2FsXCIgOiBcImF1LXNsaWRlci1ob3Jpem9udGFsXCIpICsgXCIgXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdFx0J1tjbGFzcy5kaXNhYmxlZF0nOiAnc3RhdGUoKS5kaXNhYmxlZCcsXG5cdFx0J1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ3N0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCcsXG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTbGlkZXJXaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90czogV3JpdGFibGVTaWduYWw8UGFydGlhbFNsaWRlclByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2xpZGVyLFxuXHRcdHdpZGdldE5hbWU6ICdzbGlkZXInLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25WYWx1ZXNDaGFuZ2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHRcdFx0dGhpcy52YWx1ZXNDaGFuZ2UuZW1pdChldmVudCk7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnNsaWRlckRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNaW5pbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1pbicsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtaW46IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWF4aW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFVuaXQgdmFsdWUgYmV0d2VlbiBzbGlkZXIgc3RlcHNcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0ZXBTaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdHN0ZXBTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1cnJlbnQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QElucHV0KCdhdVZhbHVlcycpXG5cdHZhbHVlczogbnVtYmVyW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEl0IGB0cnVlYCBzbGlkZXIgZGlzcGxheSBpcyBpbnZlcnNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UnRsJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRydGw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgdmFsdWUgbGFiZWxzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U2hvd1ZhbHVlTGFiZWxzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBzaG93VmFsdWVMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgbWluIGFuZCBtYXggbGFiZWxzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U2hvd01pbk1heExhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd01pbk1heExhYmVsczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS1sYWJlbCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsSGFuZGxlJykgYXJpYUxhYmVsSGFuZGxlOiAoKHZhbHVlOiBudW1iZXIsIHNvcnRlZEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0JykgYXJpYVZhbHVlVGV4dDogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGJ1dCB0aGUgc2xpZGVyIGlzIHN0aWxsIGZvY3VzYWJsZVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UmVhZG9ubHknLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWQgb3RoZXJ3aXNlIGl0IGlzIGhvcml6b250YWxcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZlcnRpY2FsJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHR2ZXJ0aWNhbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHNsaWRlciB2YWx1ZXMgYXJlIGNoYW5nZWRcblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBlcXVhbHMgdG8gdGhlIHVwZGF0ZWQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QE91dHB1dCgnYXVWYWx1ZXNDaGFuZ2UnKVxuXHR2YWx1ZXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuXG5cdEBJbnB1dCgnYXVTbG90TGFiZWwnKSBzbG90TGFiZWw6IFNsb3RDb250ZW50PFNsaWRlclNsb3RMYWJlbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFNsaWRlckxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RMYWJlbEZyb21Db250ZW50OiBTbGlkZXJMYWJlbERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFNsaWRlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEhhbmRsZScpIHNsb3RIYW5kbGU6IFNsb3RDb250ZW50PFNsaWRlclNsb3RIYW5kbGVDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJIYW5kbGVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEhhbmRsZUZyb21Db250ZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuXHQgKi9cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiBbdmFsdWVdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RIYW5kbGU6IHRoaXMuc2xvdEhhbmRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RMYWJlbDogdGhpcy5zbG90TGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
