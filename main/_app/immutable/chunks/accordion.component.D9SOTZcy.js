const t=`import { BaseWidgetDirective, ComponentTemplate, ContentAsSlotDirective, SlotDirective, UseDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createAccordion } from './accordion';
import { writable } from '@amadeus-it-group/tansu';
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
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(3, _c1, state_r10, widget_r7))("auSlot", state_r10.header);
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
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(4, _c1, state_r10, widget_r7))("auSlot", state_r10.children);
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
const _c3 = ["*"];
function AccordionItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AccordionItemComponent_ng_template_1_Template(rf, ctx) { }
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
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.header"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.children"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 134 }); })();
export const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig = {
    structure: accordionItemDefaultSlotItemStructure,
};
export class AccordionItemComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         */
        this.shown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         */
        this.hidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         */
        this.visibleChange = new EventEmitter();
        this.ad = inject(AccordionDirective);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: ((arg) => this.ad.api.registerItem(arg)),
            defaultConfig: this.defaultSlots,
            events: {
                onVisibleChange: (visible) => this.visibleChange.emit(visible),
                onHidden: () => this.hidden.emit(),
                onShown: () => this.shown.emit(),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.itemDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            structure: this.slotStructureFromContent?.templateRef,
            header: this.slotHeaderFromContent?.templateRef,
            children: this.slotBodyFromContent?.templateRef,
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
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHeaderFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotBodyFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, hostAttrs: [1, "accordion-item"], inputs: { header: [0, "auHeader", "header"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], id: [0, "auId", "id"], transition: [0, "auTransition", "transition"], className: [0, "auClassName", "className"], destroyOnHide: [2, "auDestroyOnHide", "destroyOnHide", auBooleanAttribute], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], visible: [2, "auVisible", "visible", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], headerClassName: [0, "auHeaderClassName", "headerClassName"], buttonClassName: [0, "auButtonClassName", "buttonClassName"], bodyContainerClassName: [0, "auBodyContainerClassName", "bodyContainerClassName"], bodyClassName: [0, "auBodyClassName", "bodyClassName"], headingTag: [0, "auHeadingTag", "headingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", visibleChange: "auVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auContentAsSlot"], [3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, AccordionItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auContentAsSlot", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget))("auSlot", ctx.state().structure);
        } }, dependencies: [SlotDirective, ContentAsSlotDirective], encapsulation: 2, changeDetection: 0 }); }
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
                imports: [SlotDirective, UseDirective, ContentAsSlotDirective],
                template: \`
		<ng-template [auContentAsSlot]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>
		<ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().structure"></ng-template>
	\`,
            }]
    }], null, { header: [{
            type: Input,
            args: ['auHeader']
        }], slotHeaderFromContent: [{
            type: ContentChild,
            args: [AccordionHeaderDirective, { static: false }]
        }], children: [{
            type: Input,
            args: ['auChildren']
        }], slotBodyFromContent: [{
            type: ContentChild,
            args: [AccordionBodyDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [AccordionItemStructureDirective, { static: false }]
        }], id: [{
            type: Input,
            args: ['auId']
        }], transition: [{
            type: Input,
            args: ['auTransition']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], destroyOnHide: [{
            type: Input,
            args: [{ alias: 'auDestroyOnHide', transform: auBooleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], visible: [{
            type: Input,
            args: [{ alias: 'auVisible', transform: auBooleanAttribute }]
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], headerClassName: [{
            type: Input,
            args: ['auHeaderClassName']
        }], buttonClassName: [{
            type: Input,
            args: ['auButtonClassName']
        }], bodyContainerClassName: [{
            type: Input,
            args: ['auBodyContainerClassName']
        }], bodyClassName: [{
            type: Input,
            args: ['auBodyClassName']
        }], headingTag: [{
            type: Input,
            args: ['auHeadingTag']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], visibleChange: [{
            type: Output,
            args: ['auVisibleChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 159 }); })();
export class AccordionDirective extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         */
        this.itemHidden = new EventEmitter();
        this._widget = callWidgetFactory({
            factory: createAccordion,
            widgetName: 'accordion',
            events: {
                onItemShown: (id) => this.itemShown.emit(id),
                onItemHidden: (id) => this.itemHidden.emit(id),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.accordionDirective);
            },
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAccordionDirective_BaseFactory; return function AccordionDirective_Factory(t) { return (ɵAccordionDirective_BaseFactory || (ɵAccordionDirective_BaseFactory = i0.ɵɵgetInheritedFactory(AccordionDirective)))(t || AccordionDirective); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostAttrs: [1, "accordion"], inputs: { closeOthers: [2, "auCloseOthers", "closeOthers", auBooleanAttribute], className: [0, "auClassName", "className"], itemDestroyOnHide: [2, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemAnimated: [2, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemTransition: [0, "auItemTransition", "itemTransition"], itemStructure: [0, "auItemStructure", "itemStructure"], itemClassName: [0, "auItemClassName", "itemClassName"], itemHeaderClassName: [0, "auItemHeaderClassName", "itemHeaderClassName"], itemButtonClassName: [0, "auItemButtonClassName", "itemButtonClassName"], itemBodyContainerClassName: [0, "auItemBodyContainerClassName", "itemBodyContainerClassName"], itemBodyClassName: [0, "auItemBodyClassName", "itemBodyClassName"], itemHeadingTag: [0, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
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
        }], itemShown: [{
            type: Output,
            args: ['auItemShown']
        }], itemHidden: [{
            type: Output,
            args: ['auItemHidden']
        }], itemDestroyOnHide: [{
            type: Input,
            args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
        }], itemAnimated: [{
            type: Input,
            args: [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]
        }], itemTransition: [{
            type: Input,
            args: ['auItemTransition']
        }], itemStructure: [{
            type: Input,
            args: ['auItemStructure']
        }], itemClassName: [{
            type: Input,
            args: ['auItemClassName']
        }], itemHeaderClassName: [{
            type: Input,
            args: ['auItemHeaderClassName']
        }], itemButtonClassName: [{
            type: Input,
            args: ['auItemButtonClassName']
        }], itemBodyContainerClassName: [{
            type: Input,
            args: ['auItemBodyContainerClassName']
        }], itemBodyClassName: [{
            type: Input,
            args: ['auItemBodyClassName']
        }], itemHeadingTag: [{
            type: Input,
            args: ['auItemHeadingTag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUFrQzVDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7Ozs7SUFLdEMsOEJBQXlFO0lBQ3hFLCtIQUF5QztJQUMxQyxpQkFBSzs7OztJQUZ3Qiw0REFBMkM7SUFDMUQsY0FBMkI7SUFBM0IsNENBQTJCOzs7O0lBS3pDLDhCQUF5RTtJ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cnQgdHlwZSB7U2xvdENvbnRlbnQsIFRyYW5zaXRpb25GbiwgV2lkZ2V0RmFjdG9yeX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdENvbnRlbnRBc1Nsb3REaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nVGVtcGxhdGVPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtBY2NvcmRpb25JdGVtQ29udGV4dCwgQWNjb3JkaW9uSXRlbVByb3BzLCBBY2NvcmRpb25JdGVtV2lkZ2V0LCBBY2NvcmRpb25XaWRnZXR9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7Y3JlYXRlQWNjb3JkaW9ufSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQge3dyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIE5nVGVtcGxhdGVPdXRsZXRdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QHN3aXRjaCAoc3RhdGUuaXRlbUhlYWRpbmdUYWcpIHtcblx0XHRcdFx0QGNhc2UgKCdoMScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgxXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoMycpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgzXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNCcpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg0XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg1XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNicpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg2XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGRlZmF1bHQge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2gxPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDM+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaGVhZGVyRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvaDM+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g0PlxuXHRcdFx0XHQ8aDQgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNT5cblx0XHRcdFx0PGg1IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g2PlxuXHRcdFx0XHQ8aDYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g2PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNidXR0b24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIFwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5idXR0b25EaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuaGVhZGVyXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0QGlmIChzdGF0ZS5zaG91bGRCZUluRE9NKSB7XG5cdFx0XHRcdDxkaXYgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmJvZHlDb250YWluZXJEaXJlY3RpdmVcIiBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5ib2R5RGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW5cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcbn1cbmV4cG9ydCBjb25zdCBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RJdGVtU3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxBY2NvcmRpb25JdGVtUHJvcHM+ID0ge1xuXHRzdHJ1Y3R1cmU6IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdEl0ZW1TdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25JdGVtXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb25JdGVtJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogJ2FjY29yZGlvbi1pdGVtJyxcblx0fSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgQ29udGVudEFzU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdUNvbnRlbnRBc1Nsb3RdPVwiZGVmYXVsdFNsb3RzXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiIFthdVNsb3RdPVwic3RhdGUoKS5zdHJ1Y3R1cmVcIj48L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBY2NvcmRpb25JdGVtV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuXHQvKipcblx0ICogQ29udGVudCBwcmVzZW50IGluIHRoZSBhY2NvcmRpb24gYnV0dG9uIGluc2lkZSB0aGUgYWNjb3JkaW9uIGhlYWRlci5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkZXInKSBoZWFkZXI6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDb250ZW50IHByZXNlbnQgaW4gdGhlIGFjY29yZGlvbiBib2R5LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RCb2R5RnJvbUNvbnRlbnQ6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFN0cnVjdHVyZSBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIFRoZSBkZWZhdWx0IGl0ZW0gc3RydWN0dXJlIGlzOiBhY2NvcmRpb24taXRlbVxuXHQgKiBjb250YWlucyBhY2NvcmRpb24gaGVhZGVyIGFuZCBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lcjsgdGhlIGFjY29yZGlvbiBoZWFkZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBidXR0b25cblx0ICogKHRoYXQgY29udGFpbnMgYGhlYWRlcmApLCB3aGlsZSB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBib2R5ICh0aGF0IGNvbnRhaW5zIGBjaGlsZHJlbmApLlxuXHQgKiBUaGUgaXRlbVRyYW5zaXRpb24gaXMgYXBwbGllZCBvbiB0aGlzIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHktY29udGFpbmVyIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHJhbnNpdGlvbicpIHRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyBjb2xsYXBzZWQuIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkZXJDbGFzc05hbWUnKSBoZWFkZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QnV0dG9uQ2xhc3NOYW1lJykgYnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Qm9keUNvbnRhaW5lckNsYXNzTmFtZScpIGJvZHlDb250YWluZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCb2R5Q2xhc3NOYW1lJykgYm9keUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIGh0bWwgdGFnIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtLWhlYWRlci5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkaW5nVGFnJykgaGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRyZWFkb25seSBhZCA9IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8QWNjb3JkaW9uSXRlbVdpZGdldD4oe1xuXHRcdGZhY3Rvcnk6ICgoYXJnKSA9PiB0aGlzLmFkLmFwaS5yZWdpc3Rlckl0ZW0oYXJnKSkgYXMgV2lkZ2V0RmFjdG9yeTxBY2NvcmRpb25JdGVtV2lkZ2V0Pixcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKHZpc2libGUpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpLFxuXHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLml0ZW1EaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdGhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0Y2hpbGRyZW46IHRoaXMuc2xvdEJvZHlGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5hcGkuaW5pdERvbmUoKSk7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhY2NvcmRpb24nLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25EaXJlY3RpdmUgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFjY29yZGlvbldpZGdldD4ge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBvbmx5IG9uZSBhY2NvcmRpb24taXRlbSBhdCB0aGUgdGltZSBjYW4gc3RheSBvcGVuLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VPdGhlcnMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT3RoZXJzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SXRlbVNob3duJykgaXRlbVNob3duOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIGNvbGxhcHNlZC4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtQW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1BbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHktY29udGFpbmVyIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVRyYW5zaXRpb24nKSBpdGVtVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBTdHJ1Y3R1cmUgb2YgdGhlIGFjY29yZGlvbi1pdGVtLiBUaGUgZGVmYXVsdCBpdGVtIHN0cnVjdHVyZSBpczogYWNjb3JkaW9uLWl0ZW1cblx0ICogY29udGFpbnMgYWNjb3JkaW9uIGhlYWRlciBhbmQgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXI7IHRoZSBhY2NvcmRpb24gaGVhZGVyIGNvbnRhaW5zIHRoZSBhY2NvcmRpb24gYnV0dG9uXG5cdCAqICh0aGF0IGNvbnRhaW5zIGBoZWFkZXJgKSwgd2hpbGUgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIGNvbnRhaW5zIHRoZSBhY2NvcmRpb24gYm9keSAodGhhdCBjb250YWlucyBgY2hpbGRyZW5gKS5cblx0ICogVGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQgb24gdGhpcyBlbGVtZW50LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1TdHJ1Y3R1cmUnKSBpdGVtU3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1DbGFzc05hbWUnKSBpdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGVyQ2xhc3NOYW1lJykgaXRlbUhlYWRlckNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1CdXR0b25DbGFzc05hbWUnKSBpdGVtQnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDb250YWluZXJDbGFzc05hbWUnKSBpdGVtQm9keUNvbnRhaW5lckNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q2xhc3NOYW1lJykgaXRlbUJvZHlDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSBodG1sIHRhZyB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbS1oZWFkZXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRpbmdUYWcnKSBpdGVtSGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlQWNjb3JkaW9uLFxuXHRcdHdpZGdldE5hbWU6ICdhY2NvcmRpb24nLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25JdGVtU2hvd246IChpZCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdChpZCksXG5cdFx0XHRvbkl0ZW1IaWRkZW46IChpZCkgPT4gdGhpcy5pdGVtSGlkZGVuLmVtaXQoaWQpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFjY29yZGlvbkRpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG59XG4iXX0=`;export{t as default};
