const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createAccordion } from './accordion';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h1_r1 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngTemplateOutlet", h1_r1);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h2_r2 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", h2_r2);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h3_r3 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", h3_r3);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h4_r4 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", h4_r4);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h5_r5 = i0.ɵɵreference(16);
    i0.ɵɵproperty("ngTemplateOutlet", h5_r5);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h6_r6 = i0.ɵɵreference(18);
    i0.ɵɵproperty("ngTemplateOutlet", h6_r6);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const h2_r2 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", h2_r2);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 9);
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
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 13);
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
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 7, "div", 8);
} if (rf & 2) {
    let tmp_11_0;
    const state_r10 = ctx.state;
    i0.ɵɵconditional(0, (tmp_11_0 = state_r10.itemHeadingTag) === "h1" ? 0 : tmp_11_0 === "h2" ? 1 : tmp_11_0 === "h3" ? 2 : tmp_11_0 === "h4" ? 3 : tmp_11_0 === "h5" ? 4 : tmp_11_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(21, state_r10.shouldBeInDOM ? 21 : -1);
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], [1, "accordion-collapse", 3, "auUse"], [3, "ngTemplateOutlet"], [1, "accordion-header", 3, "auUse"], [1, "accordion-button", 3, "auUse"], [3, "auSlotProps", "auSlot"], [1, "accordion-body", 3, "auUse"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, hostAttrs: [1, "accordion-item"], inputs: { slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
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
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostAttrs: [1, "accordion"], inputs: { closeOthers: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseOthers", "closeOthers", auBooleanAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7O0lBa0N2QywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7O0lBS3RDLDhCQUF5RTtJQUN4RSwrSEFBeUM7SUFDMUMsaUJBQUs7Ozs7SUFGd0IsNERBQTJDO0lBQzFELGNBQTJCO0lBQTNCLDRDQUEyQjs7OztJQUt6Qyw4QkFBeUU7SUFDeEUsK0hBQXlDO0lBQzFDLGlCQUFLOzs7O0lBRndCLDREQUEyQztJQUMxRCxjQUEyQjtJQUEz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QWUsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFNRyxZQUFZO2tCQUE1RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU1wQyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQUNLLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFDSCxZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGdCQUFnQjtZQUNJLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBTUgsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBTVEsZUFBZTtrQkFBMUMsS0FBSzttQkFBQyxtQkFBbUI7WUFNRSxlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQU9TLHNCQUFzQjtrQkFBeEQsS0FBSzttQkFBQywwQkFBMEI7WUFNUCxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQU1HLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBUUYsU0FBUztrQkFBL0IsTUFBTTttQkFBQyxhQUFhO1lBTUcsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBUVMsaUJBQWlCO2tCQUEvQyxNQUFNO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7QWNjb3JkaW9uSXRlbUNvbnRleHQsIEFjY29yZGlvbkl0ZW1Qcm9wcywgQWNjb3JkaW9uSXRlbVdpZGdldCwgQWNjb3JkaW9uV2lkZ2V0fSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQge2NyZWF0ZUFjY29yZGlvbn0gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWNjb3JkaW9uSXRlbUNvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBOZ1RlbXBsYXRlT3V0bGV0XSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBzd2l0Y2ggKHN0YXRlLml0ZW1IZWFkaW5nVGFnKSB7XG5cdFx0XHRcdEBjYXNlICgnaDEnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoMVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDInKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoMlwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDMnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoM1wiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDQnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNFwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDUnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDYnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNlwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBkZWZhdWx0IHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMT5cblx0XHRcdFx0PGgxIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oMT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDI+XG5cdFx0XHRcdDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaGVhZGVyRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2gzPlxuXHRcdFx0XHQ8aDMgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gzPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoND5cblx0XHRcdFx0PGg0IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oND5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDU+XG5cdFx0XHRcdDxoNSBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaGVhZGVyRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDU+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNj5cblx0XHRcdFx0PGg2IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiBcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuYnV0dG9uRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtSGVhZGVyXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0QGlmIChzdGF0ZS5zaG91bGRCZUluRE9NKSB7XG5cdFx0XHRcdDxkaXYgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmJvZHlDb250YWluZXJEaXJlY3RpdmVcIiBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5ib2R5RGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1Cb2R5XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcbn1cbmV4cG9ydCBjb25zdCBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxBY2NvcmRpb25JdGVtUHJvcHM+ID0ge1xuXHRzbG90SXRlbVN0cnVjdHVyZTogYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90SXRlbVN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdUFjY29yZGlvbkl0ZW1dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbkl0ZW0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYWNjb3JkaW9uLWl0ZW0nLFxuXHR9LFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlKCkuc2xvdEl0ZW1TdHJ1Y3R1cmVcIj48L25nLXRlbXBsYXRlPiBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBY2NvcmRpb25JdGVtV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbUhlYWRlckZyb21Db250ZW50OiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUgfCBudWxsO1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1Cb2R5Jykgc2xvdEl0ZW1Cb2R5OiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uQm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbUJvZHlGcm9tQ29udGVudDogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB8IG51bGw7XG5cdEBJbnB1dCgnYXVTbG90SXRlbVN0cnVjdHVyZScpIHNsb3RJdGVtU3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SXRlbVN0cnVjdHVyZUZyb21Db250ZW50OiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHQvKipcblx0ICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbnRyb2xsaW5nIHRoZSBhY2NvcmRpb24taXRlbSB2aWEgdGhlIGFjY29yZGlvbiBhcGkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkJykgaXRlbUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBib2R5LWNvbnRhaW5lciB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyB0b2dnbGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNsYXNzJykgaXRlbUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIGNvbGxhcHNlZC4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKiBJdCB3aWxsIG5vdCByZWFjdCB0byB1c2VyJ3MgY2xpY2tzLCBidXQgc3RpbGwgd2lsbCBiZSBwb3NzaWJsZSB0byB0b2dnbGUgcHJvZ3JhbW1hdGljYWxseS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1EaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1WaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1BbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbUFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBoZWFkZXIgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRlckNsYXNzJykgaXRlbUhlYWRlckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGNvbGxhcHNlIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBET00gZWxlbWVudC5cblx0ICogVGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIGlzIHRoZSBET00gZWxlbWVudCBvbiB3aGF0IHRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3MnKSBpdGVtQm9keUNvbnRhaW5lckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDbGFzcycpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSBodG1sIHRhZyB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbS1oZWFkZXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRpbmdUYWcnKSBpdGVtSGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIGB2aXNpYmxlYCB2YWx1ZSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBuZXcgdmFsdWUgb2YgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVZpc2libGVDaGFuZ2UnKSBpdGVtVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8QWNjb3JkaW9uSXRlbVdpZGdldD4oe1xuXHRcdGZhY3Rvcnk6ICgoYXJnKSA9PiB0aGlzLmFkLmFwaS5yZWdpc3Rlckl0ZW0oYXJnKSkgYXMgdHlwZW9mIHRoaXMuYWQuYXBpLnJlZ2lzdGVySXRlbSxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uSXRlbURpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RJdGVtU3RydWN0dXJlOiB0aGlzLnNsb3RJdGVtU3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW1IZWFkZXI6IHRoaXMuc2xvdEl0ZW1IZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbUJvZHk6IHRoaXMuc2xvdEl0ZW1Cb2R5RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHRoaXMuYXBpLmluaXREb25lKCkpO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdUFjY29yZGlvbl0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYWNjb3JkaW9uJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uRGlyZWN0aXZlIGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBY2NvcmRpb25XaWRnZXQ+IHtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgb25seSBvbmUgYWNjb3JkaW9uLWl0ZW0gYXQgdGhlIHRpbWUgY2FuIHN0YXkgb3Blbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT3RoZXJzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZU90aGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGFjY29yZGlvbi1pdGVtIHZpYSB0aGUgYWNjb3JkaW9uIGFwaS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgY29sbGFwc2VkLiBJdCB3aWxsIGJlIGp1c3QgaGlkZGVuIG90aGVyd2lzZS5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1EZXN0cm95T25IaWRlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtRGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1WaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhY2NvcmRpb24taXRlbSB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBpdGVtQW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBib2R5LWNvbnRhaW5lciB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0QElucHV0KCdhdVNsb3RJdGVtU3RydWN0dXJlJykgc2xvdEl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RJdGVtQm9keScpIHNsb3RJdGVtQm9keTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdEl0ZW1IZWFkZXInKSBzbG90SXRlbUhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ2xhc3MnKSBpdGVtQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzcycpIGl0ZW1IZWFkZXJDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzcycpIGl0ZW1CdXR0b25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBET00gZWxlbWVudC5cblx0ICogVGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIGlzIHRoZSBET00gZWxlbWVudCBvbiB3aGF0IHRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3MnKSBpdGVtQm9keUNvbnRhaW5lckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDbGFzcycpIGl0ZW1Cb2R5Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSBodG1sIHRhZyB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbS1oZWFkZXIuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRpbmdUYWcnKSBpdGVtSGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8vc2hvdWxkIG5vdCBiZSBkb2N1bWVudGVkXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1TaG93bicpIGl0ZW1TaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtVmlzaWJsZUNoYW5nZScpIGl0ZW1WaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlQWNjb3JkaW9uLFxuXHRcdHdpZGdldE5hbWU6ICdhY2NvcmRpb24nLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMuaXRlbVZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdG9uSXRlbUhpZGRlbjogKCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uSXRlbVNob3duOiAoKSA9PiB0aGlzLml0ZW1TaG93bi5lbWl0KCksXG5cdFx0XHRvblNob3duOiAoaWQpID0+IHRoaXMuc2hvd24uZW1pdChpZCksXG5cdFx0XHRvbkhpZGRlbjogKGlkKSA9PiB0aGlzLmhpZGRlbi5lbWl0KGlkKSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xufVxuIl19`;export{t as default};
