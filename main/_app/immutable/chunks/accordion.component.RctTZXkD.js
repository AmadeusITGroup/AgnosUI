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
					<ng-container [ngTemplateOutlet]="h1" />
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2" />
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3" />
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4" />
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5" />
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6" />
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2" />
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="directives.buttonDirective">
					<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.header()" />
				</button>
			</ng-template>
			@if (state.shouldBeInDOM()) {
				<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="directives.bodyDirective">
						<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.children()" />
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
		<ng-template #content><ng-content /></ng-template>
		<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFrRDNDLDJCQUF3Qzs7OztJQUExQix3Q0FBdUI7OztJQUdyQywyQkFBd0M7Ozs7SUFBMUIsd0NBQXVCOzs7SUFHckMsMkJBQXdDOzs7O0lBQTFCLHdDQUF1Qjs7O0lBR3JDLDJCQUF3Qzs7OztJQUExQix3Q0FBdUI7OztJQUdyQywyQkFBd0M7Ozs7SUFBMUIsd0NBQXVCOzs7SUFHckMsMkJBQXdDOzs7O0lBQTFCLHdDQUF1Qjs7O0lBR3JDLDJCQUF3Qzs7OztJQUExQix3Q0FBdUI7Ozs7SUFLdEMsOEJBQWtFO0lBQ2pFLCtIQUEyQztJQUM1QyxpQkFBSzs7OztJQUZ3QixxREFBb0M7SUFDbkQsY0FBMkI7SUFBM0IsNENBQTJCOzs7O0lBS3pDLDhCQUFrRTtJQUNqRSwrSEFBMkM7SUFDNUMsaUJBQUs7Ozs7SUFGd0IscURBQW9DO0lBQ25ELGNBQTJCO0lB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QWxCLGtCQUFrQixnSUFNYSxrQkFBa0Isa0hBc0NaLGtCQUFrQix1REFPdkIsa0JBQWtCOztpRkFuRGxELGtCQUFrQjtjQVI5QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFO29CQUNMLEtBQUssRUFBRSxXQUFXO2lCQUNsQjthQUNEO29CQU9nRSxXQUFXO2tCQUExRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPeEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBWUcsU0FBUztrQkFBL0IsTUFBTTttQkFBQyxhQUFhO1lBWUcsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBT2dELGlCQUFpQjtrQkFBdEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPSCxZQUFZO2tCQUE1RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQVVwQyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQVVDLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBT0UsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFPUSxtQkFBbUI7a0JBQWxELEtBQUs7bUJBQUMsdUJBQXVCO1lBT0UsbUJBQW1CO2tCQUFsRCxLQUFLO21CQUFDLHVCQUF1QjtZQVFTLDBCQUEwQjtrQkFBaEUsS0FBSzttQkFBQyw4QkFBOEI7WUFPUCxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBT0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnQsIFRyYW5zaXRpb25Gbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nVGVtcGxhdGVPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtBY2NvcmRpb25JdGVtQ29udGV4dCwgQWNjb3JkaW9uSXRlbVdpZGdldCwgQWNjb3JkaW9uV2lkZ2V0fSBmcm9tICcuL2FjY29yZGlvbi5nZW4nO1xuaW1wb3J0IHtjcmVhdGVBY2NvcmRpb259IGZyb20gJy4vYWNjb3JkaW9uLmdlbic7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHJlcHJlc2VudCB0aGUgYm9keSBvZiBhbiBhY2NvcmRpb24gaXRlbS5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBBY2NvcmRpb25JdGVtQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBY2NvcmRpb25JdGVtQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Cb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFjY29yZGlvbkl0ZW1Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFjY29yZGlvbkl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBiZSB1c2VkIGFzIGFuIGFjY29yZGlvbiBoZWFkZXIuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgQWNjb3JkaW9uSXRlbUNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWNjb3JkaW9uSXRlbUhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWNjb3JkaW9uSXRlbUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogQWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCByZXByZXNlbnRzIHRoZSBzdHJ1Y3R1cmUgb2YgYW4gYWNjb3JkaW9uIGl0ZW0uXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgQWNjb3JkaW9uSXRlbUNvbnRleHR9LlxuICogSXQgYWxzbyBpbmNsdWRlcyBhIHN0YXRpYyBtZXRob2QgdG8gZ3VhcmQgdGhlIHRlbXBsYXRlIGNvbnRleHQgdHlwZS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBY2NvcmRpb25JdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBOZ1RlbXBsYXRlT3V0bGV0LCBBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVBY2NvcmRpb25JdGVtU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0XHRAc3dpdGNoIChzdGF0ZS5oZWFkaW5nVGFnKCkpIHtcblx0XHRcdFx0QGNhc2UgKCdoMScpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImgxXCIgLz5cblx0XHRcdFx0fVxuXHRcdFx0XHRAY2FzZSAoJ2gyJykge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIiAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDMnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoM1wiIC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGNhc2UgKCdoNCcpIHtcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImg0XCIgLz5cblx0XHRcdFx0fVxuXHRcdFx0XHRAY2FzZSAoJ2g1Jykge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDVcIiAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBjYXNlICgnaDYnKSB7XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoNlwiIC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGRlZmF1bHQge1xuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaDJcIiAvPlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDE+XG5cdFx0XHRcdDxoMSBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCIgLz5cblx0XHRcdFx0PC9oMT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDI+XG5cdFx0XHRcdDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCIgLz5cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDM+XG5cdFx0XHRcdDxoMyBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCIgLz5cblx0XHRcdFx0PC9oMz5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDQ+XG5cdFx0XHRcdDxoNCBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCIgLz5cblx0XHRcdFx0PC9oND5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjaDU+XG5cdFx0XHRcdDxoNSBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5oZWFkZXJEaXJlY3RpdmVcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uXCIgLz5cblx0XHRcdFx0PC9oNT5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2g2PlxuXHRcdFx0XHQ8aDYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMuaGVhZGVyRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvblwiIC8+XG5cdFx0XHRcdDwvaDY+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImFjY29yZGlvbi1idXR0b24gXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMuYnV0dG9uRGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGRpcmVjdGl2ZXMsIGFwaX1cIiBbYXVTbG90XT1cInN0YXRlLmhlYWRlcigpXCIgLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0QGlmIChzdGF0ZS5zaG91bGRCZUluRE9NKCkpIHtcblx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5ib2R5Q29udGFpbmVyRGlyZWN0aXZlXCIgY2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHlcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5ib2R5RGlyZWN0aXZlXCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgZGlyZWN0aXZlcywgYXBpfVwiIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW4oKVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuY2xhc3MgQWNjb3JkaW9uSXRlbURlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxBY2NvcmRpb25JdGVtQ29udGV4dD47XG59XG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGRlZmF1bHQgc2xvdCBzdHJ1Y3R1cmUgZm9yIGFuIGFjY29yZGlvbiBpdGVtLlxuICovXG5leHBvcnQgY29uc3QgYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxBY2NvcmRpb25JdGVtQ29udGV4dD4gPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoXG5cdEFjY29yZGlvbkl0ZW1EZWZhdWx0U2xvdHNDb21wb25lbnQsXG5cdCdzdHJ1Y3R1cmUnLFxuKTtcblxuLyoqXG4gKiBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRoYXQgcmVwcmVzZW50cyBhbiBpdGVtIHdpdGhpbiBhbiBhY2NvcmRpb24uXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdUFjY29yZGlvbkl0ZW1dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbkl0ZW0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYWNjb3JkaW9uLWl0ZW0nLFxuXHR9LFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgI2NvbnRlbnQ+PG5nLWNvbnRlbnQgLz48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCIgW2F1U2xvdF09XCJzdGF0ZS5zdHJ1Y3R1cmUoKVwiIC8+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFjY29yZGlvbkl0ZW1XaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdC8qKlxuXHQgKiBDb250ZW50IHByZXNlbnQgaW4gdGhlIGFjY29yZGlvbiBidXR0b24gaW5zaWRlIHRoZSBhY2NvcmRpb24gaGVhZGVyLlxuXHQgKlxuXHQgKiBJdCBpcyBhIHByb3Agb2YgdGhlIGFjY29yZGlvbi1pdGVtLlxuXHQgKi9cblx0QElucHV0KCdhdUhlYWRlcicpIGhlYWRlcjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SGVhZGVyRnJvbUNvbnRlbnQ6IEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENvbnRlbnQgcHJlc2VudCBpbiB0aGUgYWNjb3JkaW9uIGJvZHkuXG5cdCAqXG5cdCAqIEl0IGlzIGEgcHJvcCBvZiB0aGUgYWNjb3JkaW9uLWl0ZW0uXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2hpbGRyZW4nKSBjaGlsZHJlbjogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEJvZHlGcm9tQ29udGVudDogQWNjb3JkaW9uQm9keURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU3RydWN0dXJlIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gVGhlIGRlZmF1bHQgaXRlbSBzdHJ1Y3R1cmUgaXM6IGFjY29yZGlvbi1pdGVtXG5cdCAqIGNvbnRhaW5zIGFjY29yZGlvbiBoZWFkZXIgYW5kIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyOyB0aGUgYWNjb3JkaW9uIGhlYWRlciBjb250YWlucyB0aGUgYWNjb3JkaW9uIGJ1dHRvblxuXHQgKiAodGhhdCBjb250YWlucyBgaGVhZGVyYCksIHdoaWxlIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBjb250YWlucyB0aGUgYWNjb3JkaW9uIGJvZHkgKHRoYXQgY29udGFpbnMgYGNoaWxkcmVuYCkuXG5cdCAqIFRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkIG9uIHRoaXMgZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVTdHJ1Y3R1cmUnKSBzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFjY29yZGlvbkl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogQWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbnRyb2xsaW5nIHRoZSBhY2NvcmRpb24taXRlbSB2aWEgdGhlIGFjY29yZGlvbiBhcGkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SWQnKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keS1jb250YWluZXIgd2hlbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaXMgdG9nZ2xlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVUcmFuc2l0aW9uJykgdHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIGNvbGxhcHNlZC4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEZXN0cm95T25IaWRlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkZXN0cm95T25IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cblx0ICogSXQgd2lsbCBub3QgcmVhY3QgdG8gdXNlcidzIGNsaWNrcywgYnV0IHN0aWxsIHdpbGwgYmUgcG9zc2libGUgdG8gdG9nZ2xlIHByb2dyYW1tYXRpY2FsbHkuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIGFjY29yZGlvbi1pdGVtIHdpbGwgYmUgdmlzaWJsZSAoZXhwYW5kZWQpLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaGlkZGVuIChjb2xsYXBzZWQpLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgdmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gaGVhZGVyIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUhlYWRlckNsYXNzTmFtZScpIGhlYWRlckNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBjb2xsYXBzZSBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCdXR0b25DbGFzc05hbWUnKSBidXR0b25DbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGFkZCBvbiB0aGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgRE9NIGVsZW1lbnQuXG5cdCAqIFRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBpcyB0aGUgRE9NIGVsZW1lbnQgb24gd2hhdCB0aGUgaXRlbVRyYW5zaXRpb24gaXMgYXBwbGllZC5cblx0ICovXG5cdEBJbnB1dCgnYXVCb2R5Q29udGFpbmVyQ2xhc3NOYW1lJykgYm9keUNvbnRhaW5lckNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUJvZHlDbGFzc05hbWUnKSBib2R5Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBUaGUgaHRtbCB0YWcgdG8gdXNlIGZvciB0aGUgYWNjb3JkaW9uLWl0ZW0taGVhZGVyLlxuXHQgKi9cblx0QElucHV0KCdhdUhlYWRpbmdUYWcnKSBoZWFkaW5nVGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2hvd24uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIGFuIGl0ZW0gaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBgdmlzaWJsZWAgdmFsdWUgY2hhbmdlcy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbmV3IHZhbHVlIG9mIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSlcblx0c2xvdENoaWxkcmVuPzogVGVtcGxhdGVSZWY8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeTxBY2NvcmRpb25JdGVtV2lkZ2V0Pih7XG5cdFx0XHRcdGZhY3Rvcnk6IChhcmcpID0+IGluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpLmFwaS5yZWdpc3Rlckl0ZW0oYXJnKSxcblx0XHRcdFx0ZGVmYXVsdENvbmZpZzoge1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogYWNjb3JkaW9uSXRlbURlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6ICh2aXNpYmxlKSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKSxcblx0XHRcdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhZnRlckluaXQ6ICh3aWRnZXQpID0+IHtcblx0XHRcdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHdpZGdldC5kaXJlY3RpdmVzLml0ZW1EaXJlY3RpdmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PiAoe1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiB0aGlzLnNsb3RCb2R5RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0c2xvdENoaWxkcmVuOiAoKSA9PiB0aGlzLnNsb3RDaGlsZHJlbixcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4gdGhpcy5hcGkuaW5pdERvbmUoKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgZm9yIGNyZWF0aW5nIGFuIGFjY29yZGlvbiBjb21wb25lbnQuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyB0aGUgYEJhc2VXaWRnZXREaXJlY3RpdmVgIGFuZCBwcm92aWRlcyB2YXJpb3VzIGlucHV0cyBhbmQgb3V0cHV0c1xuICogdG8gY3VzdG9taXplIHRoZSBiZWhhdmlvciBhbmQgYXBwZWFyYW5jZSBvZiB0aGUgYWNjb3JkaW9uIGFuZCBpdHMgaXRlbXMuXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVBY2NvcmRpb25dJyxcblx0ZXhwb3J0QXM6ICdhdUFjY29yZGlvbicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHRjbGFzczogJ2FjY29yZGlvbicsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkRpcmVjdGl2ZSBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8QWNjb3JkaW9uV2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIG9ubHkgb25lIGFjY29yZGlvbi1pdGVtIGF0IHRoZSB0aW1lIGNhbiBzdGF5IG9wZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VPdGhlcnMnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT3RoZXJzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYW4gaXRlbSBpcyBzaG93bi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1TaG93bicpIGl0ZW1TaG93bjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiBhbiBpdGVtIGlzIGhpZGRlbi5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgaWQgb2YgdGhlIGl0ZW0uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUl0ZW1IaWRkZW4nKSBpdGVtSGlkZGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHdoZW4gdGhlIGFjY29yZGlvbi1pdGVtIGlzIGNvbGxhcHNlZC4gSXQgd2lsbCBiZSBqdXN0IGhpZGRlbiBvdGhlcndpc2UuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVJdGVtRGVzdHJveU9uSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbURlc3Ryb3lPbkhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uLWl0ZW0gd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUl0ZW1BbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaXRlbUFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbSBib2R5LWNvbnRhaW5lciB3aGVuIHRoZSBhY2NvcmRpb24taXRlbSBpcyB0b2dnbGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIGNvbGxhcHNlVmVydGljYWxUcmFuc2l0aW9uXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1UcmFuc2l0aW9uJykgaXRlbVRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU3RydWN0dXJlIG9mIHRoZSBhY2NvcmRpb24taXRlbS4gVGhlIGRlZmF1bHQgaXRlbSBzdHJ1Y3R1cmUgaXM6IGFjY29yZGlvbi1pdGVtXG5cdCAqIGNvbnRhaW5zIGFjY29yZGlvbiBoZWFkZXIgYW5kIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyOyB0aGUgYWNjb3JkaW9uIGhlYWRlciBjb250YWlucyB0aGUgYWNjb3JkaW9uIGJ1dHRvblxuXHQgKiAodGhhdCBjb250YWlucyBgaGVhZGVyYCksIHdoaWxlIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IGNvbnRhaW5lciBjb250YWlucyB0aGUgYWNjb3JkaW9uIGJvZHkgKHRoYXQgY29udGFpbnMgYGNoaWxkcmVuYCkuXG5cdCAqIFRoZSBpdGVtVHJhbnNpdGlvbiBpcyBhcHBsaWVkIG9uIHRoaXMgZWxlbWVudC5cblx0ICpcblx0ICogSXQgaXMgYSBwcm9wIG9mIHRoZSBhY2NvcmRpb24taXRlbS5cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtU3RydWN0dXJlJykgaXRlbVN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWNjb3JkaW9uSXRlbUNvbnRleHQ+O1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ2xhc3NOYW1lJykgaXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGhlYWRlciBET00gZWxlbWVudC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUhlYWRlckNsYXNzTmFtZScpIGl0ZW1IZWFkZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSB0b2dnbGUgYnV0dG9uIERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQnV0dG9uQ2xhc3NOYW1lJykgaXRlbUJ1dHRvbkNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBhZGQgb24gdGhlIGFjY29yZGlvbi1pdGVtIGJvZHkgY29udGFpbmVyIERPTSBlbGVtZW50LlxuXHQgKiBUaGUgYWNjb3JkaW9uLWl0ZW0gYm9keSBjb250YWluZXIgaXMgdGhlIERPTSBlbGVtZW50IG9uIHdoYXQgdGhlIGl0ZW1UcmFuc2l0aW9uIGlzIGFwcGxpZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Cb2R5Q29udGFpbmVyQ2xhc3NOYW1lJykgaXRlbUJvZHlDb250YWluZXJDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYWRkIG9uIHRoZSBhY2NvcmRpb24taXRlbSBib2R5IERPTSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQm9keUNsYXNzTmFtZScpIGl0ZW1Cb2R5Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBodG1sIHRhZyB0byB1c2UgZm9yIHRoZSBhY2NvcmRpb24taXRlbS1oZWFkZXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1IZWFkaW5nVGFnJykgaXRlbUhlYWRpbmdUYWc6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRcdFx0ZmFjdG9yeTogY3JlYXRlQWNjb3JkaW9uLFxuXHRcdFx0XHR3aWRnZXROYW1lOiAnYWNjb3JkaW9uJyxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0b25JdGVtU2hvd246IChpZCkgPT4gdGhpcy5pdGVtU2hvd24uZW1pdChpZCksXG5cdFx0XHRcdFx0b25JdGVtSGlkZGVuOiAoaWQpID0+IHRoaXMuaXRlbUhpZGRlbi5lbWl0KGlkKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YWZ0ZXJJbml0OiAod2lkZ2V0KSA9PiB7XG5cdFx0XHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh3aWRnZXQuZGlyZWN0aXZlcy5hY2NvcmRpb25EaXJlY3RpdmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxufVxuIl19`;export{t as default};
