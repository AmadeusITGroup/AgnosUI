const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createSlider, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["handle"];
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("keydown", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const item_r4 = restoredCtx.item; const widget_r3 = restoredCtx.widget; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onKeyDown($event, item_r4.id, widget_r3.actions.keydown)); })("mousedown", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_mousedown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const item_r4 = restoredCtx.item; const widget_r3 = restoredCtx.widget; return i0.ɵɵresetView(widget_r3.actions.mouseDown($event, item_r4.id)); })("touchstart", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_touchstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const item_r4 = restoredCtx.item; const widget_r3 = restoredCtx.widget; return i0.ɵɵresetView(widget_r3.actions.touchStart($event, item_r4.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = ctx.state;
    const item_r4 = ctx.item;
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", state_r2.handleDisplayOptions[item_r4.id].left, "%")("top", state_r2.handleDisplayOptions[item_r4.id].top, "%");
    i0.ɵɵproperty("disabled", state_r2.disabled);
    i0.ɵɵattribute("aria-valuemin", state_r2.min)("aria-valuemax", state_r2.max)("aria-readonly", state_r2.readonly ? true : null)("aria-disabled", state_r2.disabled ? true : null)("aria-valuenow", item_r4.value)("aria-valuetext", item_r4.ariaValueText)("aria-label", item_r4.ariaLabel)("aria-orientation", state_r2.vertical ? "vertical" : null);
} }
const _c1 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    i0.ɵɵstyleProp("left", option_r8.left, "%")("right", option_r8.right, "%")("bottom", option_r8.bottom, "%")("top", option_r8.top, "%")("width", option_r8.width, "%")("height", option_r8.height, "%");
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
const _c2 = (a0, a1, a2) => ({ state: a0, widget: a1, value: a2 });
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    const state_r2 = ctx_r15.state;
    const widget_r3 = ctx_r15.widget;
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-label-vertical au-slider-label-vertical-min" : "au-slider-label au-slider-label-min");
    i0.ɵɵclassProp("au-slider-rtl", state_r2.rtl)("invisible", !state_r2.minValueLabelDisplay);
    i0.ɵɵproperty("auUse", widget_r3.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(18, _c2, state_r2, widget_r3, state_r2.min));
    i0.ɵɵadvance();
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max");
    i0.ɵɵclassProp("au-slider-rtl", state_r2.rtl)("invisible", !state_r2.maxValueLabelDisplay);
    i0.ɵɵproperty("auUse", widget_r3.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(22, _c2, state_r2, widget_r3, state_r2.max));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r20.state;
    const widget_r3 = ctx_r20.widget;
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r2, widget_r3, state_r2.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r2, widget_r3, state_r2.sortedValues[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 6);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r23.state;
    const widget_r3 = ctx_r23.widget;
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r2, widget_r3, state_r2.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r2, widget_r3, state_r2.sortedValues[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 12)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", state_r2.combinedLabelPositionLeft, "%")("top", state_r2.combinedLabelPositionTop, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r2.rtl ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r26 = i0.ɵɵnextContext().$index;
    const ctx_r33 = i0.ɵɵnextContext();
    const state_r2 = ctx_r33.state;
    const widget_r3 = ctx_r33.widget;
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", state_r2.handleDisplayOptions[i_r26].left, "%")("top", state_r2.handleDisplayOptions[i_r26].top, "%");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r2, widget_r3, state_r2.values[i_r26]));
} }
const _c3 = (a0, a1, a2) => ({ state: a0, widget: a1, item: a2 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 6)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 12, "div", 3);
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r35 = i0.ɵɵnextContext();
    const state_r2 = ctx_r35.state;
    const widget_r3 = ctx_r35.widget;
    i0.ɵɵproperty("auSlot", state_r2.slotHandle)("auSlotProps", i0.ɵɵpureFunction3(3, _c3, state_r2, widget_r3, item_r25));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r2.showValueLabels && !state_r2.combinedLabelDisplay ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 12, "div", 7, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵlistener("click", function SliderDefaultStructureSlotComponent_ng_template_0_Template_div_click_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r37); const widget_r3 = restoredCtx.widget; return i0.ɵɵresetView(widget_r3.actions.click($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 26)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 7, "div", 3);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 7, null, null, _forTrack0);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.progressDisplayOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(state_r2.vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area");
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r2.showMinMaxLabels ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r2.showValueLabels && state_r2.combinedLabelDisplay ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r2.sortedHandles);
} }
const _c4 = ["auSlider", ""];
function SliderComponent_ng_template_0_Template(rf, ctx) { }
const _c5 = (a0, a1) => ({ state: a0, widget: a1 });
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auSliderHandle", ""], ["handle", ""], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown", "touchstart"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 2, 15, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auSliderStructure", ""], ["structure", ""], [3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], [3, "auSlot", "auSlotProps"], ["class", "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Template, 7, 4, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXRFLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUF3QnZCLGlDQWtCQztJQUhBLDJSQUFXLGVBQUEsK0RBQWtELENBQUEsSUFBQywrT0FDakQsZUFBQSwrQ0FBeUMsQ0FBQSxJQURRLGlQQUVoRCxlQUFBLGdEQUEwQyxDQUFBLElBRk07SUFJOUQsd0JBQ0Q7SUFBQSxpQkFBUzs7OztJQVJSLDhGQUFzRjtJQUN0RiwyRUFBeUQsMkRBQUE7SUFGekQsNENBQTJCO0lBUjNCLDZDQUFnQywrQkFBQSxrREFBQSxrREFBQSxnQ0FBQSx5Q0FBQSxpQ0FBQSwyREFBQTs7Ozs7SUFtRGhDLHlCQVFPOzs7SUFOTiwyQ0FBNEIsK0JBQUEsaUNBQUEsMkJBQUEsK0JBQUEsaUNBQUE7Ozs7OztJ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aEYsWUFBWTttQkFBQyx3QkFBd0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFFaEMsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBQ2lDLHFCQUFxQjtrQkFBMUUsWUFBWTttQkFBQyxxQkFBcUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O2tGQXpHeEMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcblx0U2xpZGVyQ29udGV4dCxcblx0U2xpZGVyUHJvcHMsXG5cdFNsaWRlclNsb3RIYW5kbGVDb250ZXh0LFxuXHRTbGlkZXJTbG90TGFiZWxDb250ZXh0LFxuXHRTbGlkZXJXaWRnZXQsXG5cdFNsb3RDb250ZW50LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVNsaWRlcixcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt0eXBlIFdyaXRhYmxlU2lnbmFsLCB3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE5nWm9uZSxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTbGlkZXJMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJMYWJlbERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckxhYmVsRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTbGlkZXJTbG90TGFiZWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2xpZGVySGFuZGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlckhhbmRsZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2xpZGVyU2xvdEhhbmRsZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1NsaWRlckhhbmRsZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1U2xpZGVySGFuZGxlICNoYW5kbGUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCIgbGV0LWl0ZW09XCJpdGVtXCI+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLWhhbmRsZVwiXG5cdFx0XHRcdHJvbGU9XCJzbGlkZXJcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWluXT1cInN0YXRlLm1pblwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtYXhdPVwic3RhdGUubWF4XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1yZWFkb25seV09XCJzdGF0ZS5yZWFkb25seSA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW5vd109XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiaXRlbS5hcmlhVmFsdWVUZXh0XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmFyaWFMYWJlbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtb3JpZW50YXRpb25dPVwic3RhdGUudmVydGljYWwgPyAndmVydGljYWwnIDogbnVsbFwiXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJzdGF0ZS5kaXNhYmxlZFwiXG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItaGFuZGxlLXZlcnRpY2FsJyA6ICdhdS1zbGlkZXItaGFuZGxlLWhvcml6b250YWwnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLnRvcFwiXG5cdFx0XHRcdChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIGl0ZW0uaWQsIHdpZGdldC5hY3Rpb25zLmtleWRvd24pXCJcblx0XHRcdFx0KG1vdXNlZG93bik9XCJ3aWRnZXQuYWN0aW9ucy5tb3VzZURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHRcdCh0b3VjaHN0YXJ0KT1cIndpZGdldC5hY3Rpb25zLnRvdWNoU3RhcnQoJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdCZuYnNwO1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGVmYXVsdEhhbmRsZVNsb3RDb21wb25lbnQge1xuXHRwcml2YXRlIHJlYWRvbmx5IF96b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cblx0QFZpZXdDaGlsZCgnaGFuZGxlJywge3N0YXRpYzogdHJ1ZX0pIHJlYWRvbmx5IGhhbmRsZTogVGVtcGxhdGVSZWY8U2xpZGVyU2xvdEhhbmRsZUNvbnRleHQ+O1xuXG5cdG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaGFuZGxlSWQ6IG51bWJlciwgd2lkZ2V0T25LZXlEb3duRm46IChldmVudDogS2V5Ym9hcmRFdmVudCwgaGFuZGxlSWQ6IG51bWJlcikgPT4gdm9pZCkge1xuXHRcdHdpZGdldE9uS2V5RG93bkZuKGV2ZW50LCBoYW5kbGVJZCk7XG5cdFx0dGhpcy5fem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHQoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJEZWZhdWx0U2xvdEhhbmRsZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShTbGlkZXJEZWZhdWx0SGFuZGxlU2xvdENvbXBvbmVudCwgJ2hhbmRsZScpO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2xpZGVyU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNsaWRlclNsb3RIYW5kbGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1U2xpZGVyU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHRAZm9yIChvcHRpb24gb2Ygc3RhdGUucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImF1LXNsaWRlci1wcm9ncmVzc1wiXG5cdFx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRcdFx0W3N0eWxlLnJpZ2h0LiVdPVwib3B0aW9uLnJpZ2h0XCJcblx0XHRcdFx0XHRbc3R5bGUuYm90dG9tLiVdPVwib3B0aW9uLmJvdHRvbVwiXG5cdFx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cIm9wdGlvbi50b3BcIlxuXHRcdFx0XHRcdFtzdHlsZS53aWR0aC4lXT1cIm9wdGlvbi53aWR0aFwiXG5cdFx0XHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItY2xpY2thYmxlLWFyZWEtdmVydGljYWwnIDogJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYSdcIiAoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuY2xpY2soJGV2ZW50KVwiPjwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZS5zaG93TWluTWF4TGFiZWxzKSB7XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRbY2xhc3NdPVwic3RhdGUudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1taW4nIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWluJ1wiXG5cdFx0XHRcdFx0W2NsYXNzLmF1LXNsaWRlci1ydGxdPVwic3RhdGUucnRsXCJcblx0XHRcdFx0XHRbY2xhc3MuaW52aXNpYmxlXT1cIiFzdGF0ZS5taW5WYWx1ZUxhYmVsRGlzcGxheVwiXG5cdFx0XHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1pbkxhYmVsRGlyZWN0aXZlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLm1pbn1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1heCcgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1tYXgnXCJcblx0XHRcdFx0XHRbY2xhc3MuYXUtc2xpZGVyLXJ0bF09XCJzdGF0ZS5ydGxcIlxuXHRcdFx0XHRcdFtjbGFzcy5pbnZpc2libGVdPVwiIXN0YXRlLm1heFZhbHVlTGFiZWxEaXNwbGF5XCJcblx0XHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWF4TGFiZWxEaXJlY3RpdmVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCB2YWx1ZTogc3RhdGUubWF4fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0QGlmIChzdGF0ZS5zaG93VmFsdWVMYWJlbHMgJiYgc3RhdGUuY29tYmluZWRMYWJlbERpc3BsYXkpIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlLmNvbWJpbmVkTGFiZWxQb3NpdGlvbkxlZnRcIlxuXHRcdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZS5jb21iaW5lZExhYmVsUG9zaXRpb25Ub3BcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGlmIChzdGF0ZS5ydGwpIHtcblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1sxXX1cIj48L25nLXRlbXBsYXRlPiAtXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS5zb3J0ZWRWYWx1ZXNbMF19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgdmFsdWU6IHN0YXRlLnNvcnRlZFZhbHVlc1swXX1cIj48L25nLXRlbXBsYXRlPiAtXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS5zb3J0ZWRWYWx1ZXNbMV19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0QGZvciAoaXRlbSBvZiBzdGF0ZS5zb3J0ZWRIYW5kbGVzOyB0cmFjayBpdGVtLmlkOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SGFuZGxlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdEBpZiAoc3RhdGUuc2hvd1ZhbHVlTGFiZWxzICYmICFzdGF0ZS5jb21iaW5lZExhYmVsRGlzcGxheSkge1xuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwic3RhdGUuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0ubGVmdFwiXG5cdFx0XHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0udG9wXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIHZhbHVlOiBzdGF0ZS52YWx1ZXNbaV19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8U2xpZGVyQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShTbGlkZXJEZWZhdWx0U3RydWN0dXJlU2xvdENvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5leHBvcnQgdHlwZSBQYXJ0aWFsU2xpZGVyUHJvcHMgPSBQYXJ0aWFsPFNsaWRlclByb3BzPjtcbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWxTbGlkZXJQcm9wcyA9IHtcblx0c2xvdFN0cnVjdHVyZTogc2xpZGVyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdHNsb3RIYW5kbGU6IHNsaWRlckRlZmF1bHRTbG90SGFuZGxlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogYGF1LXNsaWRlcmAsXG5cdFx0J1tjbGFzc10nOiAnKHN0YXRlKCkudmVydGljYWwgPyBcImF1LXNsaWRlci12ZXJ0aWNhbFwiIDogXCJhdS1zbGlkZXItaG9yaXpvbnRhbFwiKSArIFwiIFwiICsgc3RhdGUoKS5jbGFzc05hbWUnLFxuXHRcdCdbY2xhc3MuZGlzYWJsZWRdJzogJ3N0YXRlKCkuZGlzYWJsZWQnLFxuXHRcdCdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwnLFxuXHRcdCcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcblx0fSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2xpZGVyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxTbGlkZXJQcm9wcz4gPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdGVwU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBJbnB1dCgnYXVWYWx1ZXMnKVxuXHR2YWx1ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJdCBgdHJ1ZWAgc2xpZGVyIGRpc3BsYXkgaXMgaW52ZXJzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJ0bCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cnRsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dWYWx1ZUxhYmVscycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc2hvd1ZhbHVlTGFiZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVNob3dNaW5NYXhMYWJlbHMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbEhhbmRsZScpIGFyaWFMYWJlbEhhbmRsZTogKCh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dCcpIGFyaWFWYWx1ZVRleHQ6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRyZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHRASW5wdXQoJ2F1U2xvdExhYmVsJykgc2xvdExhYmVsOiBTbG90Q29udGVudDxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90TGFiZWxGcm9tQ29udGVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxTbGlkZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RIYW5kbGUnKSBzbG90SGFuZGxlOiBTbG90Q29udGVudDxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoU2xpZGVySGFuZGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RIYW5kbGVGcm9tQ29udGVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcblx0ICovXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogW3ZhbHVlXSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRkaXNhYmxlZDogaXNEaXNhYmxlZCxcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SGFuZGxlOiB0aGlzLnNsb3RIYW5kbGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TGFiZWw6IHRoaXMuc2xvdExhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
