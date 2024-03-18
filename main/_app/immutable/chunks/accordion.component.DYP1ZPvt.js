const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAccordion, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h1_r1 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngTemplateOutlet", h1_r1);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h2_r2 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", h2_r2);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h3_r3 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", h3_r3);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h4_r4 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", h4_r4);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h5_r5 = i0.ɵɵreference(16);
    i0.ɵɵproperty("ngTemplateOutlet", h5_r5);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h6_r6 = i0.ɵɵreference(18);
    i0.ɵɵproperty("ngTemplateOutlet", h6_r6);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h2_r2 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", h2_r2);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = i0.ɵɵnextContext().state;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r7.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const widget_r10 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r10.actions.click()); });
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const state_r7 = ctx_r10.state;
    const widget_r10 = ctx_r10.widget;
    i0.ɵɵclassMapInterpolate1("accordion-button ", state_r7.itemButtonClass, "");
    i0.ɵɵclassProp("collapsed", !state_r7.itemVisible);
    i0.ɵɵattributeInterpolate1("aria-controls", "", state_r7.itemId, "-collapse");
    i0.ɵɵpropertyInterpolate1("id", "", state_r7.itemId, "-toggle");
    i0.ɵɵproperty("disabled", state_r7.itemDisabled);
    i0.ɵɵattribute("aria-disabled", state_r7.itemDisabled)("aria-expanded", state_r7.itemVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(14, _c1, state_r7, widget_r10))("auSlot", state_r7.slotItemHeader);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div");
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const state_r7 = ctx_r10.state;
    const widget_r10 = ctx_r10.widget;
    i0.ɵɵclassMapInterpolate1("accordion-collapse ", state_r7.itemBodyContainerClass, "");
    i0.ɵɵattributeInterpolate1("aria-labelledby", "", state_r7.itemId, "-toggle");
    i0.ɵɵpropertyInterpolate1("id", "", state_r7.itemId, "-collapse");
    i0.ɵɵproperty("auUse", widget_r10.directives.collapseDirective);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-body ", state_r7.itemBodyClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(13, _c1, state_r7, widget_r10))("auSlot", state_r7.slotItemBody);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 4, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 17, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 16, "div");
} if (rf & 2) {
    let tmp_11_0;
    const state_r7 = ctx.state;
    i0.ɵɵconditional(0, (tmp_11_0 = state_r7.itemHeadingTag) === "h1" ? 0 : tmp_11_0 === "h2" ? 1 : tmp_11_0 === "h3" ? 2 : tmp_11_0 === "h4" ? 3 : tmp_11_0 === "h5" ? 4 : tmp_11_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(21, state_r7.shouldBeInDOM ? 21 : -1);
} }
const _c2 = ["auAccordionItem", ""];
function AccordionItemComponent_ng_template_0_Template(rf, ctx) { }
export class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionBodyDirective_Factory(t) { return new (t || AccordionBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionBodyDirective, selectors: [["ng-template", "auAccordionItemBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemBody]', standalone: true }]
    }], null, null); })();
export class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionHeaderDirective_Factory(t) { return new (t || AccordionHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionHeaderDirective, selectors: [["ng-template", "auAccordionItemHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemHeader]', standalone: true }]
    }], null, null); })();
export class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionItemStructureDirective_Factory(t) { return new (t || AccordionItemStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionItemStructureDirective, selectors: [["ng-template", "auAccordionItemStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
    }], null, null); })();
export class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = function AccordionItemDefaultSlotsComponent_Factory(t) { return new (t || AccordionItemDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AccordionItemDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], [3, "ngTemplateOutlet"], ["type", "button", 3, "click", "id", "disabled"], [3, "auSlotProps", "auSlot"], [3, "auUse", "id"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Template, 22, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, AccordionHeaderDirective, AccordionBodyDirective, NgTemplateOutlet],
                template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			@switch (state.itemHeadingTag) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1"></ng-container>
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3"></ng-container>
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4"></ng-container>
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5"></ng-container>
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6"></ng-container>
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="!state.itemVisible"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="state.itemVisible"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div
					[auUse]="widget.directives.collapseDirective"
					attr.aria-labelledby="{{ state.itemId }}-toggle"
					id="{{ state.itemId }}-collapse"
					class="accordion-collapse {{ state.itemBodyContainerClass }}"
				>
					<div class="accordion-body {{ state.itemBodyClass }}">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
					</div>
				</div>
			}
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 154 }); })();
export const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotItemStructure: accordionItemDefaultSlotItemStructure,
};
export class AccordionItemComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         */
        this.itemVisibleChange = new EventEmitter();
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory({
            factory: ((arg) => this.ad.api.registerItem(arg)),
            defaultConfig,
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.accordionItemDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotItemStructure: this.slotItemStructureFromContent?.templateRef,
            slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
            slotItemBody: this.slotItemBodyFromContent?.templateRef,
        });
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAccordionItemComponent_BaseFactory; return function AccordionItemComponent_Factory(t) { return (ɵAccordionItemComponent_BaseFactory || (ɵAccordionItemComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AccordionItemComponent)))(t || AccordionItemComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemComponent, selectors: [["", "auAccordionItem", ""]], contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AccordionHeaderDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionItemStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemHeaderFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemBodyFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemStructureFromContent = _t.first);
        } }, hostVars: 3, hostBindings: function AccordionItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.state().itemId);
            i0.ɵɵclassMap("accordion-item " + ctx.state().itemClass);
        } }, inputs: { slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(2, _c1, ctx.state(), ctx.widget))("auSlot", ctx.state().slotItemStructure);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemComponent, [{
        type: Component,
        args: [{
                selector: '[auAccordionItem]',
                exportAs: 'auAccordionItem',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': '"accordion-item " + state().itemClass',
                    '[id]': 'state().itemId',
                },
                imports: [SlotDirective, UseDirective],
                template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`,
            }]
    }], null, { slotItemHeader: [{
            type: Input,
            args: ['auSlotItemHeader']
        }], slotItemHeaderFromContent: [{
            type: ContentChild,
            args: [AccordionHeaderDirective, { static: false }]
        }], slotItemBody: [{
            type: Input,
            args: ['auSlotItemBody']
        }], slotItemBodyFromContent: [{
            type: ContentChild,
            args: [AccordionBodyDirective, { static: false }]
        }], slotItemStructure: [{
            type: Input,
            args: ['auSlotItemStructure']
        }], slotItemStructureFromContent: [{
            type: ContentChild,
            args: [AccordionItemStructureDirective, { static: false }]
        }], itemId: [{
            type: Input,
            args: ['auItemId']
        }], itemTransition: [{
            type: Input,
            args: ['auItemTransition']
        }], itemClass: [{
            type: Input,
            args: ['auItemClass']
        }], itemDestroyOnHide: [{
            type: Input,
            args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
        }], itemDisabled: [{
            type: Input,
            args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
        }], itemVisible: [{
            type: Input,
            args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
        }], itemAnimated: [{
            type: Input,
            args: [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]
        }], itemHeaderClass: [{
            type: Input,
            args: ['auItemHeaderClass']
        }], itemButtonClass: [{
            type: Input,
            args: ['auItemButtonClass']
        }], itemBodyContainerClass: [{
            type: Input,
            args: ['auItemBodyContainerClass']
        }], itemBodyClass: [{
            type: Input,
            args: ['auItemBodyClass']
        }], itemHeadingTag: [{
            type: Input,
            args: ['auItemHeadingTag']
        }], itemShown: [{
            type: Output,
            args: ['auItemShown']
        }], itemHidden: [{
            type: Output,
            args: ['auItemHidden']
        }], itemVisibleChange: [{
            type: Output,
            args: ['auItemVisibleChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 175 }); })();
export class AccordionDirective extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         */
        this.shown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         */
        this.hidden = new EventEmitter();
        //should not be documented
        /**
         * An event fired when an item is shown.
         *
         * It is a prop of the accordion-item.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * It is a prop of the accordion-item.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         *
         * It is a prop of the accordion-item.
         */
        this.itemVisibleChange = new EventEmitter();
        this._widget = callWidgetFactory({
            factory: createAccordion,
            widgetName: 'accordion',
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
                onShown: (id) => this.shown.emit(id),
                onHidden: (id) => this.hidden.emit(id),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.accordionDirective);
            },
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAccordionDirective_BaseFactory; return function AccordionDirective_Factory(t) { return (ɵAccordionDirective_BaseFactory || (ɵAccordionDirective_BaseFactory = i0.ɵɵgetInheritedFactory(AccordionDirective)))(t || AccordionDirective); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostVars: 2, hostBindings: function AccordionDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("accordion " + ctx.state().className);
        } }, inputs: { closeOthers: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseOthers", "closeOthers", auBooleanAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionDirective, [{
        type: Directive,
        args: [{
                selector: '[auAccordion]',
                exportAs: 'auAccordion',
                standalone: true,
                host: {
                    '[class]': '"accordion " + state().className',
                },
            }]
    }], null, { closeOthers: [{
            type: Input,
            args: [{ alias: 'auCloseOthers', transform: auBooleanAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], itemId: [{
            type: Input,
            args: ['auItemId']
        }], itemDestroyOnHide: [{
            type: Input,
            args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
        }], itemDisabled: [{
            type: Input,
            args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
        }], itemVisible: [{
            type: Input,
            args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
        }], itemAnimated: [{
            type: Input,
            args: [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]
        }], itemTransition: [{
            type: Input,
            args: ['auItemTransition']
        }], slotItemStructure: [{
            type: Input,
            args: ['auSlotItemStructure']
        }], slotItemBody: [{
            type: Input,
            args: ['auSlotItemBody']
        }], slotItemHeader: [{
            type: Input,
            args: ['auSlotItemHeader']
        }], itemClass: [{
            type: Input,
            args: ['auItemClass']
        }], itemHeaderClass: [{
            type: Input,
            args: ['auItemHeaderClass']
        }], itemButtonClass: [{
            type: Input,
            args: ['auItemButtonClass']
        }], itemBodyContainerClass: [{
            type: Input,
            args: ['auItemBodyContainerClass']
        }], itemBodyClass: [{
            type: Input,
            args: ['auItemBodyClass']
        }], itemHeadingTag: [{
            type: Input,
            args: ['auItemHeadingTag']
        }], itemShown: [{
            type: Output,
            args: ['auItemShown']
        }], itemHidden: [{
            type: Output,
            args: ['auItemHidden']
        }], itemVisibleChange: [{
            type: Output,
            args: ['auItemVisibleChange']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFrQ2xCLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7Ozs7SUFLdEMsMEJBQXlEO0lBQ3hELCtIQUF5QztJQUMxQyxpQkFBSzs7OztJQUZELDRFQUFvRDtJQUMxQyxjQUEyQjtJQUEzQiw0Q0FBMkI7Ozs7SUFLekMsMEJBQXlEO0lBQ3hELCtIQUF5QztJQUMxQyxpQkFBSzs7OztJQUZELDRFQUFvRDtJQUMxQyxjQUEyQjtJQUEzQiw0Q0FBMkI7Ozs7SUFLekMsMEJBQXlEO0lBQ3hELGdJQUF5QztJQUMxQyxpQkFBSzs7OztJQUZELDRFQUFv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QUFDLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9ILFlBQVk7a0JBQTVFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0MsV0FBVztrQkFBMUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTUcsWUFBWTtrQkFBNUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFNcEMsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFDSyxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBQ0gsWUFBWTtrQkFBcEMsS0FBSzttQkFBQyxnQkFBZ0I7WUFDSSxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQU1ILFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQU1RLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBTUUsZUFBZTtrQkFBMUMsS0FBSzttQkFBQyxtQkFBbUI7WUFPUyxzQkFBc0I7a0JBQXhELEtBQUs7bUJBQUMsMEJBQTBCO1lBTVAsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFNRyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQVFGLFNBQVM7a0JBQS9CLE1BQU07bUJBQUMsYUFBYTtZQU1HLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQVFTLGlCQUFpQjtrQkFBL0MsTUFBTTttQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkl0ZW1Db250ZXh0LFxuXHRBY2NvcmRpb25JdGVtUHJvcHMsXG5cdEFjY29yZGlvbkl0ZW1XaWRnZXQsXG5cdEFjY29yZGlvbldpZGdldCxcblx0QWRhcHRTbG90Q29udGVudFByb3BzLFxuXHRTbG90Q29udGVudCxcblx0VHJhbnNpdGlvbkZuLFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVBY2NvcmRpb24sXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7TmdUZW1wbGF0ZU91dGxldH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1IZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbVN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIE5nVGVtcGxhdGVPdXRsZXRdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QHN3aXRjaCAoc3RhdGUuaXRlbUhlYWRpbmdUYWcpIHtcblx0XHRcdFx0QGNhc2UgKCdoMScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgxXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMycpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgzXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNCcpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg0XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg1XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg2XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGRlZmF1bHQge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlciB7eyBzdGF0ZS5pdGVtSGVhZGVyQ2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDM+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXIge3sgc3RhdGUuaXRlbUhlYWRlckNsYXNzIH19XCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g0PlxuXHRcdFx0XHQ8aDQgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNT5cblx0XHRcdFx0PGg1IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlciB7eyBzdGF0ZS5pdGVtSGVhZGVyQ2xhc3MgfX1cIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g2PlxuXHRcdFx0XHQ8aDYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyIHt7IHN0YXRlLml0ZW1IZWFkZXJDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNidXR0b24+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS10b2dnbGVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbGljaygpXCJcblx0XHRcdFx0XHRbY2xhc3MuY29sbGFwc2VkXT1cIiFzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIHt7IHN0YXRlLml0ZW1CdXR0b25DbGFzcyB9fVwiXG5cdFx0XHRcdFx0W2Rpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWNvbnRyb2xzPVwie3sgc3RhdGUuaXRlbUlkIH19LWNvbGxhcHNlXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLml0ZW1EaXNhYmxlZFwiXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5pdGVtVmlzaWJsZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1IZWFkZXJcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3VsZEJlSW5ET00pIHtcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jb2xsYXBzZURpcmVjdGl2ZVwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsbGVkYnk9XCJ7eyBzdGF0ZS5pdGVtSWQgfX0tdG9nZ2xlXCJcblx0XHRcdFx0XHRpZD1cInt7IHN0YXRlLml0ZW1JZCB9fS1jb2xsYXBzZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2Uge3sgc3RhdGUuaXRlbUJvZHlDb250YWluZXJDbGFzcyB9fVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHkge3sgc3RhdGUuaXRlbUJvZHlDbGFzcyB9fVwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtQm9keVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD47XG59XG5leHBvcnQgY29uc3QgYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90SXRlbVN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8QWNjb3JkaW9uSXRlbVByb3BzPiA9IHtcblx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25JdGVtXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb25JdGVtJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbi1pdGVtIFwiICsgc3RhdGUoKS5pdGVtQ2xhc3MnLFxuXHRcdCdbaWRdJzogJ3N0YXRlKCkuaXRlbUlkJyxcblx0fSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RJdGVtU3RydWN0dXJlXCI+PC9uZy10ZW1wbGF0ZT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8QWNjb3JkaW9uSXRlbVdpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlclZpZXdJbml0IHtcblx0QElucHV0KCdhdVNsb3RJdGVtSGVhZGVyJykgc2xvdEl0ZW1IZWFkZXI6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudDogQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1TdHJ1Y3R1cmUnKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudDogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1JZCcpIGl0ZW1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keS1jb250YWluZXIgd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgdG9nZ2xlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVHJhbnNpdGlvbicpIGl0ZW1UcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyBjb2xsYXBzZWQuIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURlc3Ryb3lPbkhpZGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSB2aXNpYmxlIChleHBhbmRlZCkuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBoaWRkZW4gKGNvbGxhcHNlZCkuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtVmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtQW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1BbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQnV0dG9uQ2xhc3MnKSBpdGVtQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgRE9NIGVsZW1lbnQuXG5cdCAqIFRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBpcyB0aGUgRE9NIGVsZW1lbnQgb24gd2hhdCB0aGUgaXRlbVRyYW5zaXRpb24gaXMgYXBwbGllZC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNvbnRhaW5lckNsYXNzJykgaXRlbUJvZHlDb250YWluZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3MnKSBpdGVtQm9keUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgaHRtbCB0YWcgdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0taGVhZGVyLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkaW5nVGFnJykgaXRlbUhlYWRpbmdUYWc6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbUhpZGRlbicpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1WaXNpYmxlQ2hhbmdlJykgaXRlbVZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgYWQgPSBpbmplY3QoQWNjb3JkaW9uRGlyZWN0aXZlKTtcblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PEFjY29yZGlvbkl0ZW1XaWRnZXQ+KHtcblx0XHRmYWN0b3J5OiAoKGFyZykgPT4gdGhpcy5hZC5hcGkucmVnaXN0ZXJJdGVtKGFyZykpIGFzIHR5cGVvZiB0aGlzLmFkLmFwaS5yZWdpc3Rlckl0ZW0sXG5cdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uSXRlbVZpc2libGVDaGFuZ2U6ICh2aXNpYmxlKSA9PiB0aGlzLml0ZW1WaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSksXG5cdFx0XHRvbkl0ZW1IaWRkZW46ICgpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkl0ZW1TaG93bjogKCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdCgpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkl0ZW1EaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90SXRlbVN0cnVjdHVyZTogdGhpcy5zbG90SXRlbVN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtSGVhZGVyOiB0aGlzLnNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1Cb2R5OiB0aGlzLnNsb3RJdGVtQm9keUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB0aGlzLmFwaS5pbml0RG9uZSgpKTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImFjY29yZGlvbiBcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uRGlyZWN0aXZlIGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBY2NvcmRpb25XaWRnZXQ+IHtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgb25seSBvbmUgYWNjb3JkaW9uLWl0ZW0gYXQgdGhlIHRpbWUgY2FuIHN0YXkgb3Blbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT3RoZXJzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZU90aGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgY29sbGFwc2VkLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1EZXN0cm95T25IaWRlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtQW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBib2R5LWNvbnRhaW5lciB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ2xhc3MnKSBpdGVtQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBET00gZWxlbWVudC5cblx0ICogVGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIGlzIHRoZSBET00gZWxlbWVudCBvbiB3aGF0IHRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3MnKSBpdGVtQm9keUNvbnRhaW5lckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDbGFzcycpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSBodG1sIHRhZyB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbS1oZWFkZXIuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRpbmdUYWcnKSBpdGVtSGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8vc2hvdWxkIG5vdCBiZSBkb2N1bWVudGVkXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1TaG93bicpIGl0ZW1TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtVmlzaWJsZUNoYW5nZScpIGl0ZW1WaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlQWNjb3JkaW9uLFxuXHRcdHdpZGdldE5hbWU6ICdhY2NvcmRpb24nLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0XHRvblNob3duOiAoaWQpID0+IHRoaXMuc2hvd24uZW1pdChpZCksXG5cdFx0XHRvbkhpZGRlbjogKGlkKSA9PiB0aGlzLmhpZGRlbi5lbWl0KGlkKSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xufVxuIl19`;export{t as default};
