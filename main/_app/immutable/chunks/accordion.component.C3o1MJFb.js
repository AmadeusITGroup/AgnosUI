const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createAccordion } from './accordion.gen';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1, a2) => ({ state: a0, directives: a1, api: a2 });
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
    i0.ɵɵelementStart(0, "h1", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const api_r11 = ctx_r8.api;
    const directives_r7 = ctx_r8.directives;
    i0.ɵɵproperty("auUse", directives_r7.buttonDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(3, _c1, state_r10, directives_r7, api_r11))("auSlot", state_r10.header());
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 14);
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const api_r11 = ctx_r8.api;
    const directives_r7 = ctx_r8.directives;
    i0.ɵɵproperty("auUse", directives_r7.bodyContainerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r7.bodyDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r10, directives_r7, api_r11))("auSlot", state_r10.children());
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1, "ng-container", 9)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1, "ng-container", 9)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1, "ng-container", 9)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1, "ng-container", 9)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1, "ng-container", 9)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1, "ng-container", 9)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1, "ng-container", 9)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 8, "div", 10);
} if (rf & 2) {
    let tmp_12_0;
    const state_r10 = ctx.state;
    i0.ɵɵconditional((tmp_12_0 = state_r10.headingTag()) === "h1" ? 0 : tmp_12_0 === "h2" ? 1 : tmp_12_0 === "h3" ? 2 : tmp_12_0 === "h4" ? 3 : tmp_12_0 === "h5" ? 4 : tmp_12_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(state_r10.shouldBeInDOM() ? 21 : -1);
} }
const _c2 = ["content"];
const _c3 = ["auAccordionItem", ""];
const _c4 = ["*"];
const _c5 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function AccordionItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AccordionItemComponent_ng_template_2_Template(rf, ctx) { }
/**
 * Directive to represent the body of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
export class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionBodyDirective, selectors: [["ng-template", "auAccordionItemBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemBody]', standalone: true }]
    }], null, null); })();
/**
 * Directive to be used as an accordion header.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
export class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionHeaderDirective, selectors: [["ng-template", "auAccordionItemHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemHeader]', standalone: true }]
    }], null, null); })();
/**
 * Directive that represents the structure of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 * It also includes a static method to guard the template context type.
 */
export class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionItemStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionItemStructureDirective, selectors: [["ng-template", "auAccordionItemStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
    }], null, null); })();
class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = function AccordionItemDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AccordionItemDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], ["auAccordionItemStructure", ""], [3, "ngTemplateOutlet"], [1, "accordion-collapse", 3, "auUse"], [1, "accordion-header", 3, "auUse"], [1, "accordion-button", 3, "auUse"], [3, "auSlotProps", "auSlot"], [1, "accordion-body", 3, "auUse"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Template, 22, 2, "ng-template", 8, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, NgTemplateOutlet, AccordionItemStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, NgTemplateOutlet, AccordionItemStructureDirective],
                template: \`
		<ng-template auAccordionItemStructure #structure let-state="state" let-api="api" let-directives="directives">
			@switch (state.headingTag()) {
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
				<h1 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="directives.buttonDirective">
					<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.header()"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM()) {
				<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="directives.bodyDirective">
						<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.children()"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 148 }); })();
/**
 * Represents the default slot structure for an accordion item.
 */
export const accordionItemDefaultSlotStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
/**
 * AccordionItemComponent is a component that represents an item within an accordion.
 */
export class AccordionItemComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: (arg) => inject(AccordionDirective).api.registerItem(arg),
            defaultConfig: {
                structure: accordionItemDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (visible) => this.visibleChange.emit(visible),
                onHidden: () => this.hidden.emit(),
                onShown: () => this.shown.emit(),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.itemDirective);
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent?.templateRef,
                header: this.slotHeaderFromContent?.templateRef,
                children: this.slotBodyFromContent?.templateRef,
            }),
            slotChildren: () => this.slotChildren,
        }));
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
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = function AccordionItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemComponent, selectors: [["", "auAccordionItem", ""]], contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AccordionHeaderDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionItemStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHeaderFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotBodyFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, viewQuery: function AccordionItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotChildren = _t.first);
        } }, hostAttrs: [1, "accordion-item"], inputs: { header: [0, "auHeader", "header"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], id: [0, "auId", "id"], transition: [0, "auTransition", "transition"], className: [0, "auClassName", "className"], destroyOnHide: [2, "auDestroyOnHide", "destroyOnHide", auBooleanAttribute], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], visible: [2, "auVisible", "visible", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], headerClassName: [0, "auHeaderClassName", "headerClassName"], buttonClassName: [0, "auButtonClassName", "buttonClassName"], bodyContainerClassName: [0, "auBodyContainerClassName", "bodyContainerClassName"], bodyClassName: [0, "auBodyClassName", "bodyClassName"], headingTag: [0, "auHeadingTag", "headingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", visibleChange: "auVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 6, consts: [["content", ""], [3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, AccordionItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(2, _c5, ctx.state, ctx.api, ctx.directives))("auSlot", ctx.state.structure());
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
                template: \`
		<ng-template #content><ng-content></ng-content></ng-template>
		<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()"></ng-template>
	\`,
            }]
    }], () => [], { header: [{
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
        }], slotChildren: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 176 }); })();
/**
 * Directive for creating an accordion component.
 *
 * This directive extends the \`BaseWidgetDirective\` and provides various inputs and outputs
 * to customize the behavior and appearance of the accordion and its items.
 *
 */
export class AccordionDirective extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createAccordion,
            widgetName: 'accordion',
            events: {
                onItemShown: (id) => this.itemShown.emit(id),
                onItemHidden: (id) => this.itemHidden.emit(id),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.accordionDirective);
            },
        }));
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.itemHidden = new EventEmitter();
    }
    static { this.ɵfac = function AccordionDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionDirective)(); }; }
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
    }], () => [], { closeOthers: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFrRDNDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7OztJQUdyQywyQkFBcUQ7Ozs7SUFBdkMsd0NBQXVCOzs7SUFHckMsMkJBQXFEOzs7O0lBQXZDLHdDQUF1Qjs7O0lBR3JDLDJCQUFxRDs7OztJQUF2Qyx3Q0FBdUI7Ozs7SUFLdEMsOEJBQWtFO0lBQ2pFLCtIQUF5QztJQUMxQyxpQkFBSzs7OztJQUZ3QixxREFBb0M7SUFDbkQsY0FBMkI7SUFBM0IsNENBQTJCOzs7O0lBS3pDLDhCQUFrRTtJQUNqRSwrSEFBeUM7SUFDMUMsaUJBQUs7Ozs7SUFGd0IscURBQW9DO0lBQ25ELGNBQTJCO0lB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QUFsQixrQkFBa0IsZ0lBTWEsa0JBQWtCLGtIQXNDWixrQkFBa0IsdURBT3ZCLGtCQUFrQjs7aUZBbkRsRCxrQkFBa0I7Y0FSOUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxLQUFLLEVBQUUsV0FBVztpQkFDbEI7YUFDRDtvQkFPZ0UsV0FBVztrQkFBMUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT3hDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQVlHLFNBQVM7a0JBQS9CLE1BQU07bUJBQUMsYUFBYTtZQVlHLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQU9nRCxpQkFBaUI7a0JBQXRGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0gsWUFBWTtrQkFBNUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFVcEMsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFVQyxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQU9FLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBT1EsbUJBQW1CO2tCQUFsRCxLQUFLO21CQUFDLHVCQUF1QjtZQU9FLG1CQUFtQjtrQkFBbEQsS0FBSzttQkFBQyx1QkFBdUI7WUFRUywwQkFBMEI7a0JBQWhFLEtBQUs7bUJBQUMsOEJBQThCO1lBT1AsaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQU9ELGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50LCBUcmFuc2l0aW9uRm59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7QWNjb3JkaW9uSXRlbUNvbnRleHQsIEFjY29yZGlvbkl0ZW1XaWRnZXQsIEFjY29yZGlvbldpZGdldH0gZnJvbSAnLi9hY2NvcmRpb24uZ2VuJztcbmltcG9ydCB7Y3JlYXRlQWNjb3JkaW9ufSBmcm9tICcuL2FjY29yZGlvbi5nZW4nO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byByZXByZXNlbnQgdGhlIGJvZHkgb2YgYW4gYWNjb3JkaW9uIGl0ZW0uXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgQWNjb3JkaW9uSXRlbUNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gYmUgdXNlZCBhcyBhbiBhY2NvcmRpb24gaGVhZGVyLlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHByb3ZpZGVzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciB0aGUge0BsaW5rIEFjY29yZGlvbkl0ZW1Db250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1IZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcmVwcmVzZW50cyB0aGUgc3RydWN0dXJlIG9mIGFuIGFjY29yZGlvbiBpdGVtLlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHByb3ZpZGVzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciB0aGUge0BsaW5rIEFjY29yZGlvbkl0ZW1Db250ZXh0fS5cbiAqIEl0IGFsc28gaW5jbHVkZXMgYSBzdGF0aWMgbWV0aG9kIHRvIGd1YXJkIHRoZSB0ZW1wbGF0ZSBjb250ZXh0IHR5cGUuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWNjb3JkaW9uSXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgTmdUZW1wbGF0ZU91dGxldCwgQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1QWNjb3JkaW9uSXRlbVN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWFwaT1cImFwaVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiPlxuXHRcdFx0QHN3aXRjaCAoc3RhdGUuaGVhZGluZ1RhZygpKSB7XG5cdFx0XHRcdEBjYXNlICgnaDEnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoMVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDInKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoMlwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDMnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoM1wiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDQnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNFwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDUnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDYnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNlwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBkZWZhdWx0IHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMT5cblx0XHRcdFx0PGgxIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoMz5cblx0XHRcdFx0PGgzIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2gzPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoND5cblx0XHRcdFx0PGg0IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNoNT5cblx0XHRcdFx0PGg1IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmhlYWRlckRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDY+XG5cdFx0XHRcdDxoNiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9oNj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiBcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5idXR0b25EaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgZGlyZWN0aXZlcywgYXBpfVwiIFthdVNsb3RdPVwic3RhdGUuaGVhZGVyKClcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRAaWYgKHN0YXRlLnNob3VsZEJlSW5ET00oKSkge1xuXHRcdFx0XHQ8ZGl2IFthdVVzZV09XCJkaXJlY3RpdmVzLmJvZHlDb250YWluZXJEaXJlY3RpdmVcIiBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiIFthdVVzZV09XCJkaXJlY3RpdmVzLmJvZHlEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBkaXJlY3RpdmVzLCBhcGl9XCIgW2F1U2xvdF09XCJzdGF0ZS5jaGlsZHJlbigpXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBBY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcbn1cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgZGVmYXVsdCBzbG90IHN0cnVjdHVyZSBmb3IgYW4gYWNjb3JkaW9uIGl0ZW0uXG4gKi9cbmV4cG9ydCBjb25zdCBhY2NvcmRpb25JdGVtRGVmYXVsdFNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShcblx0QWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCxcblx0J3N0cnVjdHVyZScsXG4pO1xuXG4vKipcbiAqIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgaXMgYSBjb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGFuIGl0ZW0gd2l0aGluIGFuIGFjY29yZGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uSXRlbV0nLFxuXHRleHBvcnRBczogJ2F1QWNjb3JkaW9uSXRlbScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhY2NvcmRpb24taXRlbScsXG5cdH0sXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjY29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiIFthdVNsb3RdPVwic3RhdGUuc3RydWN0dXJlKClcIj48L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBY2NvcmRpb25JdGVtV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHQvKipcblx0ICogQ29udGVudCBwcmVzZW50IGluIHRoZSBhY2NvcmRpb24gYnV0dG9uIGluc2lkZSB0aGUgYWNjb3JkaW9uIGhlYWRlci5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkZXInKSBoZWFkZXI6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDb250ZW50IHByZXNlbnQgaW4gdGhlIGFjY29yZGlvbiBib2R5LlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RCb2R5RnJvbUNvbnRlbnQ6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFN0cnVjdHVyZSBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIFRoZSBkZWZhdWx0IGl0ZW0gc3RydWN0dXJlIGlzOiBhY2NvcmRpb24taXRlbVxuXHQgKiBjb250YWlucyBhY2NvcmRpb24gaGVhZGVyIGFuZCBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lcjsgdGhlIGFjY29yZGlvbiBoZWFkZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBidXR0b25cblx0ICogKHRoYXQgY29udGFpbnMgYGhlYWRlcmApLCB3aGlsZSB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBib2R5ICh0aGF0IGNvbnRhaW5zIGBjaGlsZHJlbmApLlxuXHQgKiBUaGUgaXRlbVRyYW5zaXRpb24gaXMgYXBwbGllZCBvbiB0aGlzIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIEl0IGNhbiBiZSB1c2VkIGZvciBjb250cm9sbGluZyB0aGUgYWNjb3JkaW9uLWl0ZW0gdmlhIHRoZSBhY2NvcmRpb24gYXBpLlxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtIGJvZHktY29udGFpbmVyIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIHRvZ2dsZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHJhbnNpdGlvbicpIHRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyBjb2xsYXBzZWQuIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGVzdHJveU9uSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqIEl0IHdpbGwgbm90IHJlYWN0IHRvIHVzZXIncyBjbGlja3MsIGJ1dCBzdGlsbCB3aWxsIGJlIHBvc3NpYmxlIHRvIHRvZ2dsZSBwcm9ncmFtbWF0aWNhbGx5LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSB3aWxsIGJlIHZpc2libGUgKGV4cGFuZGVkKS4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGhpZGRlbiAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkZXJDbGFzc05hbWUnKSBoZWFkZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gY29sbGFwc2UgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QnV0dG9uQ2xhc3NOYW1lJykgYnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Qm9keUNvbnRhaW5lckNsYXNzTmFtZScpIGJvZHlDb250YWluZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCb2R5Q2xhc3NOYW1lJykgYm9keUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIGh0bWwgdGFnIHRvIHVzZSBmb3IgdGhlIGFjY29yZGlvbi1pdGVtLWhlYWRlci5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkaW5nVGFnJykgaGVhZGluZ1RhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgYHZpc2libGVgIHZhbHVlIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG5ldyB2YWx1ZSBvZiB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pXG5cdHNsb3RDaGlsZHJlbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnk8QWNjb3JkaW9uSXRlbVdpZGdldD4oe1xuXHRcdFx0XHRmYWN0b3J5OiAoYXJnKSA9PiBpbmplY3QoQWNjb3JkaW9uRGlyZWN0aXZlKS5hcGkucmVnaXN0ZXJJdGVtKGFyZyksXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IGFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZSkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSksXG5cdFx0XHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHRcdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YWZ0ZXJJbml0OiAod2lkZ2V0KSA9PiB7XG5cdFx0XHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh3aWRnZXQuZGlyZWN0aXZlcy5pdGVtRGlyZWN0aXZlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2xvdFRlbXBsYXRlczogKCkgPT4gKHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRoZWFkZXI6IHRoaXMuc2xvdEhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRjaGlsZHJlbjogdGhpcy5zbG90Qm9keUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0fSksXG5cdFx0XHRcdHNsb3RDaGlsZHJlbjogKCkgPT4gdGhpcy5zbG90Q2hpbGRyZW4sXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHRoaXMuYXBpLmluaXREb25lKCkpO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIGZvciBjcmVhdGluZyBhbiBhY2NvcmRpb24gY29tcG9uZW50LlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgdGhlIGBCYXNlV2lkZ2V0RGlyZWN0aXZlYCBhbmQgcHJvdmlkZXMgdmFyaW91cyBpbnB1dHMgYW5kIG91dHB1dHNcbiAqIHRvIGN1c3RvbWl6ZSB0aGUgYmVoYXZpb3IgYW5kIGFwcGVhcmFuY2Ugb2YgdGhlIGFjY29yZGlvbiBhbmQgaXRzIGl0ZW1zLlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1QWNjb3JkaW9uXScsXG5cdGV4cG9ydEFzOiAnYXVBY2NvcmRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhY2NvcmRpb24nLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25EaXJlY3RpdmUgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFjY29yZGlvbldpZGdldD4ge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBvbmx5IG9uZSBhY2NvcmRpb24taXRlbSBhdCB0aGUgdGltZSBjYW4gc3RheSBvcGVuLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT3RoZXJzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZU90aGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtU2hvd24nKSBpdGVtU2hvd246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVJdGVtSGlkZGVuJykgaXRlbUhpZGRlbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyBjb2xsYXBzZWQuIEl0IHdpbGwgYmUganVzdCBoaWRkZW4gb3RoZXJ3aXNlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SXRlbURlc3Ryb3lPbkhpZGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1EZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtQW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGl0ZW1BbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keS1jb250YWluZXIgd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgdG9nZ2xlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiBjb2xsYXBzZVZlcnRpY2FsVHJhbnNpdGlvblxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtVHJhbnNpdGlvbicpIGl0ZW1UcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFN0cnVjdHVyZSBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uIFRoZSBkZWZhdWx0IGl0ZW0gc3RydWN0dXJlIGlzOiBhY2NvcmRpb24taXRlbVxuXHQgKiBjb250YWlucyBhY2NvcmRpb24gaGVhZGVyIGFuZCBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lcjsgdGhlIGFjY29yZGlvbiBoZWFkZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBidXR0b25cblx0ICogKHRoYXQgY29udGFpbnMgYGhlYWRlcmApLCB3aGlsZSB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgY29udGFpbnMgdGhlIGFjY29yZGlvbiBib2R5ICh0aGF0IGNvbnRhaW5zIGBjaGlsZHJlbmApLlxuXHQgKiBUaGUgaXRlbVRyYW5zaXRpb24gaXMgYXBwbGllZCBvbiB0aGlzIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbVN0cnVjdHVyZScpIGl0ZW1TdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0PjtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBET00gZWxlbWVudC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUNsYXNzTmFtZScpIGl0ZW1DbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBoZWFkZXIgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkZXJDbGFzc05hbWUnKSBpdGVtSGVhZGVyQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gdG9nZ2xlIGJ1dHRvbiBET00gZWxlbWVudC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJ1dHRvbkNsYXNzTmFtZScpIGl0ZW1CdXR0b25DbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBET00gZWxlbWVudC5cblx0ICogVGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIGlzIHRoZSBET00gZWxlbWVudCBvbiB3aGF0IHRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNvbnRhaW5lckNsYXNzTmFtZScpIGl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBET00gZWxlbWVudC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUJvZHlDbGFzc05hbWUnKSBpdGVtQm9keUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgaHRtbCB0YWcgdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0taGVhZGVyLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSGVhZGluZ1RhZycpIGl0ZW1IZWFkaW5nVGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZUFjY29yZGlvbixcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ2FjY29yZGlvbicsXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uSXRlbVNob3duOiAoaWQpID0+IHRoaXMuaXRlbVNob3duLmVtaXQoaWQpLFxuXHRcdFx0XHRcdG9uSXRlbUhpZGRlbjogKGlkKSA9PiB0aGlzLml0ZW1IaWRkZW4uZW1pdChpZCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFmdGVySW5pdDogKHdpZGdldCkgPT4ge1xuXHRcdFx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3Qod2lkZ2V0LmRpcmVjdGl2ZXMuYWNjb3JkaW9uRGlyZWN0aXZlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
