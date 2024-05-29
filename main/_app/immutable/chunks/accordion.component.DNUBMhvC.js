const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createAccordion } from './accordion';
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
    i0.ɵɵelementStart(0, "h1", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const widget_r7 = ctx_r8.widget;
    i0.ɵɵproperty("auUse", widget_r7.directives.buttonDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(3, _c1, state_r10, widget_r7))("auSlot", state_r10.slotItemHeader);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 13);
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const widget_r7 = ctx_r8.widget;
    i0.ɵɵproperty("auUse", widget_r7.directives.bodyContainerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.bodyDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(4, _c1, state_r10, widget_r7))("auSlot", state_r10.slotItemBody);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1, "ng-container", 8)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1, "ng-container", 8)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1, "ng-container", 8)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1, "ng-container", 8)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1, "ng-container", 8)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1, "ng-container", 8)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1, "ng-container", 8)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 7, "div", 9);
} if (rf & 2) {
    let tmp_11_0;
    const state_r10 = ctx.state;
    i0.ɵɵconditional((tmp_11_0 = state_r10.itemHeadingTag) === "h1" ? 0 : tmp_11_0 === "h2" ? 1 : tmp_11_0 === "h3" ? 2 : tmp_11_0 === "h4" ? 3 : tmp_11_0 === "h5" ? 4 : tmp_11_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(state_r10.shouldBeInDOM ? 21 : -1);
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], [3, "ngTemplateOutlet"], [1, "accordion-collapse", 3, "auUse"], [1, "accordion-header", 3, "auUse"], [1, "accordion-button", 3, "auUse"], [3, "auSlotProps", "auSlot"], [1, "accordion-body", 3, "auUse"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
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
				<h1 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="widget.directives.buttonDirective">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 132 }); })();
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
        } }, hostAttrs: [1, "accordion-item"], inputs: { slotItemHeader: [0, "auSlotItemHeader", "slotItemHeader"], slotItemBody: [0, "auSlotItemBody", "slotItemBody"], slotItemStructure: [0, "auSlotItemStructure", "slotItemStructure"], itemId: [0, "auItemId", "itemId"], itemTransition: [0, "auItemTransition", "itemTransition"], itemClass: [0, "auItemClass", "itemClass"], itemDestroyOnHide: [2, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [2, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [2, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [2, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemHeaderClass: [0, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [0, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [0, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [0, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [0, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
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
                    class: 'accordion-item',
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 152 }); })();
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
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostAttrs: [1, "accordion"], inputs: { closeOthers: [2, "auCloseOthers", "closeOthers", auBooleanAttribute], className: [0, "auClassName", "className"], itemId: [0, "auItemId", "itemId"], itemDestroyOnHide: [2, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [2, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [2, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [2, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemTransition: [0, "auItemTransition", "itemTransition"], slotItemStructure: [0, "auSlotItemStructure", "slotItemStructure"], slotItemBody: [0, "auSlotItemBody", "slotItemBody"], slotItemHeader: [0, "auSlotItemHeader", "slotItemHeader"], itemClass: [0, "auItemClass", "itemClass"], itemHeaderClass: [0, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [0, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [0, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [0, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [0, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionDirective, [{
        type: Directive,
        args: [{
                selector: '[auAccordion]',
                exportAs: 'auAccordion',
                standalone: true,
                host: {
                    class: 'accordion',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7O0lBa0N2QywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7O0lBS3RDLDhCQUF5RTtJQUN4RSwrSEFBeUM7SUFDMUMsaUJBQUs7Ozs7SUFGd0IsNERBQTJDO0lBQzFELGNBQTJCO0lBQTNCLDRDQUEyQjs7OztJQUt6Qyw4QkFBeUU7SUFDeEUsK0hBQXlDO0lBQzFDLGlCQUFLOzs7O0lBRndCLDREQUEyQztJQUMxRCxjQUEyQjtJQUEz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ZSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU1HLFlBQVk7a0JBQTVFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTXBDLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBQ0ssaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUNILFlBQVk7a0JBQXBDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBQ0ksY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFNSCxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFNUSxlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQU1FLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBT1Msc0JBQXNCO2tCQUF4RCxLQUFLO21CQUFDLDBCQUEwQjtZQU1QLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBTUcsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFRRixTQUFTO2tCQUEvQixNQUFNO21CQUFDLGFBQWE7WUFNRyxVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFRUyxpQkFBaUI7a0JBQS9DLE1BQU07bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgU2xvdENvbnRlbnQsIFRyYW5zaXRpb25GbiwgV2lkZ2V0RmFjdG9yeX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nVGVtcGxhdGVPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtBY2NvcmRpb25JdGVtQ29udGV4dCwgQWNjb3JkaW9uSXRlbVByb3BzLCBBY2NvcmRpb25JdGVtV2lkZ2V0LCBBY2NvcmRpb25XaWRnZXR9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7Y3JlYXRlQWNjb3JkaW9ufSBmcm9tICcuL2FjY29yZGlvbic7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1IZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbVN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBY2NvcmRpb25JdGVtQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIE5nVGVtcGxhdGVPdXRsZXRdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QHN3aXRjaCAoc3RhdGUuaXRlbUhlYWRpbmdUYWcpIHtcblx0XHRcdFx0QGNhc2UgKCdoMScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgxXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMycpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgzXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNCcpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg0XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg1XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg2XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGRlZmF1bHQge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDM+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaGVhZGVyRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g0PlxuXHRcdFx0XHQ8aDQgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNT5cblx0XHRcdFx0PGg1IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g2PlxuXHRcdFx0XHQ8aDYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNidXR0b24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIFwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5idXR0b25EaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1IZWFkZXJcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3VsZEJlSW5ET00pIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuYm9keUNvbnRhaW5lckRpcmVjdGl2ZVwiIGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5XCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmJvZHlEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbUJvZHlcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xufVxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFjY29yZGlvbkl0ZW1Qcm9wcz4gPSB7XG5cdHNsb3RJdGVtU3RydWN0dXJlOiBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uSXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhY2NvcmRpb24taXRlbScsXG5cdH0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUoKS5zbG90SXRlbVN0cnVjdHVyZVwiPjwvbmctdGVtcGxhdGU+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFjY29yZGlvbkl0ZW1XaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUhlYWRlcicpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtSGVhZGVyRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgnYXVTbG90SXRlbUJvZHknKSBzbG90SXRlbUJvZHk6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtQm9keUZyb21Db250ZW50OiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHwgbnVsbDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHktY29udGFpbmVyIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVRyYW5zaXRpb24nKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ2xhc3MnKSBpdGVtQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgY29sbGFwc2VkLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1EZXN0cm95T25IaWRlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtQW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3MnKSBpdGVtSGVhZGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJ1dHRvbkNsYXNzJykgaXRlbUJ1dHRvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDb250YWluZXJDbGFzcycpIGl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNsYXNzJykgaXRlbUJvZHlDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIGh0bWwgdGFnIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtLWhlYWRlci5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGluZ1RhZycpIGl0ZW1IZWFkaW5nVGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1TaG93bicpIGl0ZW1TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtVmlzaWJsZUNoYW5nZScpIGl0ZW1WaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdHJlYWRvbmx5IGFkID0gaW5qZWN0KEFjY29yZGlvbkRpcmVjdGl2ZSk7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeTxBY2NvcmRpb25JdGVtV2lkZ2V0Pih7XG5cdFx0ZmFjdG9yeTogKChhcmcpID0+IHRoaXMuYWQuYXBpLnJlZ2lzdGVySXRlbShhcmcpKSBhcyBXaWRnZXRGYWN0b3J5PEFjY29yZGlvbkl0ZW1XaWRnZXQ+LFxuXHRcdGRlZmF1bHRDb25maWcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkl0ZW1WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZSkgPT4gdGhpcy5pdGVtVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpLFxuXHRcdFx0b25JdGVtSGlkZGVuOiAoKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25JdGVtU2hvd246ICgpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoKSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25JdGVtRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEl0ZW1TdHJ1Y3R1cmU6IHRoaXMuc2xvdEl0ZW1TdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUhlYWRlcjogdGhpcy5zbG90SXRlbUhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtQm9keTogdGhpcy5zbG90SXRlbUJvZHlGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5hcGkuaW5pdERvbmUoKSk7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhY2NvcmRpb24nLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25EaXJlY3RpdmUgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFjY29yZGlvbldpZGdldD4ge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBvbmx5IG9uZSBhY2NvcmRpb24taXRlbSBhdCB0aGUgdGltZSBjYW4gc3RheSBvcGVuLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VPdGhlcnMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT3RoZXJzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93bjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1JZCcpIGl0ZW1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyBjb2xsYXBzZWQuIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURlc3Ryb3lPbkhpZGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSB2aXNpYmxlIChleHBhbmRlZCkuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBoaWRkZW4gKGNvbGxhcHNlZCkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtVmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtQW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1BbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHktY29udGFpbmVyIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIHRvZ2dsZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVRyYW5zaXRpb24nKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1TdHJ1Y3R1cmUnKSBzbG90SXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1Cb2R5Jykgc2xvdEl0ZW1Cb2R5OiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBJbnB1dCgnYXVTbG90SXRlbUhlYWRlcicpIHNsb3RJdGVtSGVhZGVyOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzcycpIGl0ZW1DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBoZWFkZXIgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRlckNsYXNzJykgaXRlbUhlYWRlckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIHRvZ2dsZSBidXR0b24gRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJ1dHRvbkNsYXNzJykgaXRlbUJ1dHRvbkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDb250YWluZXJDbGFzcycpIGl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNsYXNzJykgaXRlbUJvZHlDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIGh0bWwgdGFnIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtLWhlYWRlci5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGluZ1RhZycpIGl0ZW1IZWFkaW5nVGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Ly9zaG91bGQgbm90IGJlIGRvY3VtZW50ZWRcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbUhpZGRlbicpIGl0ZW1IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1WaXNpYmxlQ2hhbmdlJykgaXRlbVZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVBY2NvcmRpb24sXG5cdFx0d2lkZ2V0TmFtZTogJ2FjY29yZGlvbicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbkl0ZW1WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZSkgPT4gdGhpcy5pdGVtVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpLFxuXHRcdFx0b25JdGVtSGlkZGVuOiAoKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25JdGVtU2hvd246ICgpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoKSxcblx0XHRcdG9uU2hvd246IChpZCkgPT4gdGhpcy5zaG93bi5lbWl0KGlkKSxcblx0XHRcdG9uSGlkZGVuOiAoaWQpID0+IHRoaXMuaGlkZGVuLmVtaXQoaWQpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG59XG4iXX0=`;export{t as default};
