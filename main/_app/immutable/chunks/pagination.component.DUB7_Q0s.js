const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createPagination } from './pagination';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
const _c1 = ["structure"];
const _c2 = (a0, a1) => ({ state: a0, widget: a1 });
const _c3 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
const _c4 = (a0, a1) => ({ widget: a0, state: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r0.state;
    const widget_r3 = ctx_r0.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(3, _c2, state_r2, widget_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r2.ariaEllipsisLabel);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext(3).state;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(state_r2.activeLabel);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const page_r5 = i0.ɵɵnextContext().$implicit; const widget_r3 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r3.actions.select(page_r5, $event)); });
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 7)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const page_r5 = ctx_r5.$implicit;
    const i_r7 = ctx_r5.$index;
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const widget_r3 = ctx_r0.widget;
    i0.ɵɵattribute("aria-label", state_r2.pagesLabel[i_r7])("href", state_r2.pagesHrefs[i_r7], i0.ɵɵsanitizeUrl)("tabindex", state_r2.disabled ? "-1" : null)("aria-disabled", state_r2.disabled ? "true" : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(7, _c3, state_r2, widget_r3, page_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r2.page === page_r5 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 6)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵclassProp("active", page_r5 === state_r2.page)("disabled", page_r5 === -1 || state_r2.disabled);
    i0.ɵɵattribute("aria-current", page_r5 === state_r2.page ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, page_r5 === -1 ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 6, "li", 4, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.pages);
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r8); const widget_r9 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r9.actions.first($event)); });
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const state_r11 = ctx_r9.state;
    const widget_r9 = ctx_r9.widget;
    i0.ɵɵclassProp("disabled", state_r11.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r11.ariaFirstLabel)("href", state_r11.pagesHrefs[0], i0.ɵɵsanitizeUrl)("tabindex", state_r11.previousDisabled ? "-1" : null)("aria-disabled", state_r11.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r11.slotFirst)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r9, state_r11));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 14);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r12); const widget_r9 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r9.actions.previous($event)); });
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const state_r11 = ctx_r9.state;
    const widget_r9 = ctx_r9.widget;
    i0.ɵɵclassProp("disabled", state_r11.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r11.ariaPreviousLabel)("href", state_r11.directionsHrefs.previous, i0.ɵɵsanitizeUrl)("tabindex", state_r11.previousDisabled ? "-1" : null)("aria-disabled", state_r11.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r11.slotPrevious)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r9, state_r11));
} }
function PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 15);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const widget_r9 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r9.actions.next($event)); });
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const state_r11 = ctx_r9.state;
    const widget_r9 = ctx_r9.widget;
    i0.ɵɵclassProp("disabled", state_r11.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r11.ariaNextLabel)("href", state_r11.directionsHrefs.next, i0.ɵɵsanitizeUrl)("tabindex", state_r11.nextDisabled ? "-1" : null)("aria-disabled", state_r11.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r11.slotNext)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r9, state_r11));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 16);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r14); const widget_r9 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r9.actions.last($event)); });
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const state_r11 = ctx_r9.state;
    const widget_r9 = ctx_r9.widget;
    i0.ɵɵclassProp("disabled", state_r11.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r11.ariaLastLabel)("href", state_r11.pagesHrefs.at(-1), i0.ɵɵsanitizeUrl)("tabindex", state_r11.nextDisabled ? "-1" : null)("aria-disabled", state_r11.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r11.slotLast)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r9, state_r11));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 11, "li", 10)(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 11, "li", 10)(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 7)(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 11, "li", 10)(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 11, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r11 = ctx.state;
    const widget_r9 = ctx.widget;
    i0.ɵɵclassMap("au-pagination pagination" + (state_r11.size ? " pagination-" + state_r11.size : "") + " " + state_r11.className);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r11.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r11.directionLinks ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r11.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c4, widget_r9, state_r11));
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r11.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(5, state_r11.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current page is ", state_r11.page, "");
} }
const _c5 = ["auPagination", ""];
function PaginationComponent_ng_template_0_Template(rf, ctx) { }
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
export class PaginationEllipsisDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationEllipsisDirective_Factory(t) { return new (t || PaginationEllipsisDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationEllipsisDirective, selectors: [["ng-template", "auPaginationEllipsis", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationEllipsisDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationEllipsis]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the 'first' link template to the pagination component
 */
export class PaginationFirstDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationFirstDirective_Factory(t) { return new (t || PaginationFirstDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationFirstDirective, selectors: [["ng-template", "auPaginationFirst", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationFirstDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationFirst]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the 'last' link template to the pagination component
 */
export class PaginationLastDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationLastDirective_Factory(t) { return new (t || PaginationLastDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationLastDirective, selectors: [["ng-template", "auPaginationLast", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationLastDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationLast]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the 'next' link template to the pagination component
 */
export class PaginationNextDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationNextDirective_Factory(t) { return new (t || PaginationNextDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationNextDirective, selectors: [["ng-template", "auPaginationNext", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationNextDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationNext]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the page 'number' template to the pagination component
 */
export class PaginationNumberDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationNumberDirective_Factory(t) { return new (t || PaginationNumberDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationNumberDirective, selectors: [["ng-template", "auPaginationNumber", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationNumberDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationNumber]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
export class PaginationPreviousDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationPreviousDirective_Factory(t) { return new (t || PaginationPreviousDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationPreviousDirective, selectors: [["ng-template", "auPaginationPrevious", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationPreviousDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationPrevious]', standalone: true }]
    }], null, null); })();
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
export class PaginationPagesDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationPagesDirective_Factory(t) { return new (t || PaginationPagesDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationPagesDirective, selectors: [["ng-template", "auPaginationPages", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationPagesDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationPages]', standalone: true }]
    }], null, null); })();
/**
 * Directive to provide the slot structure for the pagination widget.
 */
export class PaginationStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationStructureDirective_Factory(t) { return new (t || PaginationStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationStructureDirective, selectors: [["ng-template", "auPaginationStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationStructure]', standalone: true }]
    }], null, null); })();
export class PaginationDefaultSlotsComponent {
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(t) { return new (t || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pages = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["pages", ""], ["structure", ""], ["auPaginationPages", ""], ["auPaginationStructure", ""], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], ["aria-hidden", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "visually-hidden"], [1, "page-link", "au-page", 3, "click"], [1, "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], [1, "page-link", "au-first", 3, "click"], ["aria-hidden", "true"], [1, "page-link", "au-previous", 3, "click"], [1, "page-link", "au-next", 3, "click"], [1, "page-link", "au-last", 3, "click"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, PaginationDefaultSlotsComponent_ng_template_2_Template, 8, 12, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
			@for (page of state.pages; track page; let i = $index) {
				<li
					class="page-item"
					[class.active]="page === state.page"
					[class.disabled]="page === -1 || state.disabled"
					[attr.aria-current]="page === state.page ? 'page' : null"
				>
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel }}</span>
					} @else {
						<a
							[attr.aria-label]="state.pagesLabel[i]"
							class="page-link au-page"
							[attr.href]="state.pagesHrefs[i]"
							(click)="widget.actions.select(page, $event)"
							[attr.tabindex]="state.disabled ? '-1' : null"
							[attr.aria-disabled]="state.disabled ? 'true' : null"
						>
							<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
							@if (state.page === page) {
								<span class="visually-hidden">{{ state.activeLabel }}</span>
							}
						</a>
					}
				</li>
			}
		</ng-template>
		<ng-template auPaginationStructure #structure let-state="state" let-widget="widget">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaFirstLabel"
							class="page-link au-first"
							[attr.href]="state.pagesHrefs[0]"
							(click)="widget.actions.first($event)"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaPreviousLabel"
							class="page-link au-previous"
							[attr.href]="state.directionsHrefs.previous"
							(click)="widget.actions.previous($event)"
							[attr.tabindex]="state.previousDisabled ? '-1' : null"
							[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaNextLabel"
							class="page-link au-next"
							[attr.href]="state.directionsHrefs.next"
							(click)="widget.actions.next($event)"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a
							[attr.aria-label]="state.ariaLastLabel"
							class="page-link au-last"
							[attr.href]="state.pagesHrefs.at(-1)"
							(click)="widget.actions.last($event)"
							[attr.tabindex]="state.nextDisabled ? '-1' : null"
							[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
						>
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-template>
	\`,
            }]
    }], null, { pages: [{
            type: ViewChild,
            args: ['pages', { static: true }]
        }], structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 217 }); })();
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
export const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: paginationDefaultSlotStructure,
    slotPages: paginationDefaultSlotPages,
};
export class PaginationComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._widget = callWidgetFactory({
            factory: createPagination,
            widgetName: 'pagination',
            defaultConfig,
            events: {
                onPageChange: (page) => this.pageChange.emit(page),
            },
        });
        /**
         * An event fired when the page is changed.
         *
         * Event payload is the number of the newly selected page.
         *
         * Page numbers start with \`1\`.
         */
        this.pageChange = new EventEmitter();
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotEllipsis: this.slotEllipsisFromContent?.templateRef,
            slotFirst: this.slotFirstFromContent?.templateRef,
            slotLast: this.slotLastFromContent?.templateRef,
            slotNext: this.slotNextFromContent?.templateRef,
            slotNumberLabel: this.slotNumberLabelFromContent?.templateRef,
            slotPages: this.slotPagesFromContent?.templateRef,
            slotPrevious: this.slotPreviousFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵPaginationComponent_BaseFactory; return function PaginationComponent_Factory(t) { return (ɵPaginationComponent_BaseFactory || (ɵPaginationComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PaginationComponent)))(t || PaginationComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["", "auPagination", ""]], contentQueries: function PaginationComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, PaginationEllipsisDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationFirstDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationPreviousDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationNextDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationLastDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationPagesDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationNumberDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, PaginationStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotEllipsisFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotFirstFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotPreviousFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotNextFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotLastFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotPagesFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotNumberLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, hostVars: 1, hostBindings: function PaginationComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.state().ariaLabel);
        } }, inputs: { ariaPageLabel: [i0.ɵɵInputFlags.None, "auAriaPageLabel", "ariaPageLabel"], ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], activeLabel: [i0.ɵɵInputFlags.None, "auActiveLabel", "activeLabel"], ariaFirstLabel: [i0.ɵɵInputFlags.None, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [i0.ɵɵInputFlags.None, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [i0.ɵɵInputFlags.None, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [i0.ɵɵInputFlags.None, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [i0.ɵɵInputFlags.None, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [i0.ɵɵInputFlags.None, "auPageLink", "pageLink"], slotEllipsis: [i0.ɵɵInputFlags.None, "auSlotEllipsis", "slotEllipsis"], slotFirst: [i0.ɵɵInputFlags.None, "auSlotFirst", "slotFirst"], slotPrevious: [i0.ɵɵInputFlags.None, "auSlotPrevious", "slotPrevious"], slotNext: [i0.ɵɵInputFlags.None, "auSlotNext", "slotNext"], slotLast: [i0.ɵɵInputFlags.None, "auSlotLast", "slotLast"], slotPages: [i0.ɵɵInputFlags.None, "auSlotPages", "slotPages"], slotNumberLabel: [i0.ɵɵInputFlags.None, "auSlotNumberLabel", "slotNumberLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCollectionSize", "collectionSize", auNumberAttribute], page: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPage", "page", auNumberAttribute], pageSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPageSize", "pageSize", auNumberAttribute], size: [i0.ɵɵInputFlags.None, "auSize", "size"], pagesFactory: [i0.ɵɵInputFlags.None, "auPagesFactory", "pagesFactory"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c5, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(2, _c2, ctx.state(), ctx.widget))("auSlot", ctx.state().slotStructure);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: '[auPagination]',
                standalone: true,
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[attr.aria-label]': 'state().ariaLabel',
                },
                encapsulation: ViewEncapsulation.None,
                template: \`<ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotStructure"></ng-template>\`,
            }]
    }], null, { ariaPageLabel: [{
            type: Input,
            args: ['auAriaPageLabel']
        }], ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], activeLabel: [{
            type: Input,
            args: ['auActiveLabel']
        }], ariaFirstLabel: [{
            type: Input,
            args: ['auAriaFirstLabel']
        }], ariaPreviousLabel: [{
            type: Input,
            args: ['auAriaPreviousLabel']
        }], ariaNextLabel: [{
            type: Input,
            args: ['auAriaNextLabel']
        }], ariaLastLabel: [{
            type: Input,
            args: ['auAriaLastLabel']
        }], ariaEllipsisLabel: [{
            type: Input,
            args: ['auAriaEllipsisLabel']
        }], pageLink: [{
            type: Input,
            args: ['auPageLink']
        }], slotEllipsis: [{
            type: Input,
            args: ['auSlotEllipsis']
        }], slotEllipsisFromContent: [{
            type: ContentChild,
            args: [PaginationEllipsisDirective, { static: false }]
        }], slotFirst: [{
            type: Input,
            args: ['auSlotFirst']
        }], slotFirstFromContent: [{
            type: ContentChild,
            args: [PaginationFirstDirective, { static: false }]
        }], slotPrevious: [{
            type: Input,
            args: ['auSlotPrevious']
        }], slotPreviousFromContent: [{
            type: ContentChild,
            args: [PaginationPreviousDirective, { static: false }]
        }], slotNext: [{
            type: Input,
            args: ['auSlotNext']
        }], slotNextFromContent: [{
            type: ContentChild,
            args: [PaginationNextDirective, { static: false }]
        }], slotLast: [{
            type: Input,
            args: ['auSlotLast']
        }], slotLastFromContent: [{
            type: ContentChild,
            args: [PaginationLastDirective, { static: false }]
        }], slotPages: [{
            type: Input,
            args: ['auSlotPages']
        }], slotPagesFromContent: [{
            type: ContentChild,
            args: [PaginationPagesDirective, { static: false }]
        }], slotNumberLabel: [{
            type: Input,
            args: ['auSlotNumberLabel']
        }], slotNumberLabelFromContent: [{
            type: ContentChild,
            args: [PaginationNumberDirective, { static: false }]
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [PaginationStructureDirective, { static: false }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], boundaryLinks: [{
            type: Input,
            args: [{ alias: 'auBoundaryLinks', transform: auBooleanAttribute }]
        }], directionLinks: [{
            type: Input,
            args: [{ alias: 'auDirectionLinks', transform: auBooleanAttribute }]
        }], collectionSize: [{
            type: Input,
            args: [{ alias: 'auCollectionSize', transform: auNumberAttribute }]
        }], page: [{
            type: Input,
            args: [{ alias: 'auPage', transform: auNumberAttribute }]
        }], pageSize: [{
            type: Input,
            args: [{ alias: 'auPageSize', transform: auNumberAttribute }]
        }], size: [{
            type: Input,
            args: ['auSize']
        }], pagesFactory: [{
            type: Input,
            args: ['auPagesFactory']
        }], pageChange: [{
            type: Output,
            args: ['auPageChange']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 246 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV4SSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7SUF3R3hDLDhCQUFzRDtJQUNyRCxrSUFBMkU7SUFDNUUsaUJBQU07SUFDTiwrQkFBOEI7SUFBQSxZQUE2QjtJQUFBLGlCQUFPOzs7OztJQUZwRCxjQUE2QjtJQUFDLEFBQTlCLDhDQUE2QixnRUFBZ0M7SUFFN0MsZUFBNkI7SUFBN0IsZ0RBQTZCOzs7O0lBWXpELCtCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQU87OztJQUE5QixjQUF1QjtJQUF2QiwwQ0FBdUI7Ozs7SUFWdkQsNEJBT0M7SUFIQSxnUkFBUyx5Q0FBbUMsS0FBQztJQUs3QyxBQURBLGtJQUFtRyw4R0FDeEU7SUFHNUIsaUJBQUk7Ozs7Ozs7OztJQUpVLGNBQWdDO0lBQUMsQUFBakMsaURBQWdDLHlFQUFxRDtJQUNsRyxjQUVDO0lBRkQsdURBRUM7OztJQXZCSiw2QkFLQztJQU1FLEFBTEYsa0dBQW1CLHNGQUtWO0lBZVYsaUJBQUs7Ozs7SUF2QkosQUFEQSxt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QUUsS0FBSyxFQUFDO1lBRzNCLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBRTFCLDBCQUEwQjtrQkFEekIsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFHOUIsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFFeEIsd0JBQXdCO2tCQUR2QixZQUFZO21CQUFDLDRCQUE0QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1FLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtPLGFBQWE7a0JBQTlFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBS0csY0FBYztrQkFBaEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFXQyxjQUFjO2tCQUEvRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVFSLElBQUk7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU1NLFFBQVE7a0JBQW5FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVF6QyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFPVSxZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGdCQUFnQjtZQVNDLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQUtBLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTs7a0ZBeExSLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0RGlyZWN0aXZlLCBDb21wb25lbnRUZW1wbGF0ZSwgU2xvdERpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlLCBhdU51bWJlckF0dHJpYnV0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge1BhZ2luYXRpb25Db250ZXh0LCBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCwgUGFnaW5hdGlvblByb3BzLCBQYWdpbmF0aW9uV2lkZ2V0fSBmcm9tICcuL3BhZ2luYXRpb24nO1xuaW1wb3J0IHtjcmVhdGVQYWdpbmF0aW9ufSBmcm9tICcuL3BhZ2luYXRpb24nO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZWxsaXBzaXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRWxsaXBzaXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25GaXJzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2xhc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICduZXh0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk5leHREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSBwYWdlICdudW1iZXInIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk51bWJlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUHJldmlvdXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdQYWdlcycgdGVtcGxhdGUgZm9yIHRoZSBQYWdlcyBzbG90XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgcGFnaW5hdGlvbiB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uUGFnZXMgI3BhZ2VzIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QGZvciAocGFnZSBvZiBzdGF0ZS5wYWdlczsgdHJhY2sgcGFnZTsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWl0ZW1cIlxuXHRcdFx0XHRcdFtjbGFzcy5hY3RpdmVdPVwicGFnZSA9PT0gc3RhdGUucGFnZVwiXG5cdFx0XHRcdFx0W2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPT09IC0xIHx8IHN0YXRlLmRpc2FibGVkXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWN1cnJlbnRdPVwicGFnZSA9PT0gc3RhdGUucGFnZSA/ICdwYWdlJyA6IG51bGxcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGlmIChwYWdlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtbGluayBhdS1lbGxpcHNpc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RWxsaXBzaXNcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hcmlhRWxsaXBzaXNMYWJlbCB9fTwvc3Bhbj5cblx0XHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUucGFnZXNMYWJlbFtpXVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXBhZ2VcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5ocmVmXT1cInN0YXRlLnBhZ2VzSHJlZnNbaV1cIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuc2VsZWN0KHBhZ2UsICRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5kaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TnVtYmVyTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGRpc3BsYXllZFBhZ2U6IHBhZ2V9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0QGlmIChzdGF0ZS5wYWdlID09PSBwYWdlKSB7XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hY3RpdmVMYWJlbCB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdVBhZ2luYXRpb25TdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDx1bCBbY2xhc3NdPVwiJ2F1LXBhZ2luYXRpb24gcGFnaW5hdGlvbicgKyAoc3RhdGUuc2l6ZSA/ICcgcGFnaW5hdGlvbi0nICsgc3RhdGUuc2l6ZSA6ICcnKSArICcgJyArIHN0YXRlLmNsYXNzTmFtZVwiPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhRmlyc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWZpcnN0XCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5wYWdlc0hyZWZzWzBdXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmZpcnN0KCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEZpcnN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhUHJldmlvdXNMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXByZXZpb3VzXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5kaXJlY3Rpb25zSHJlZnMucHJldmlvdXNcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMucHJldmlvdXMoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90UHJldmlvdXNcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFBhZ2VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFOZXh0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1uZXh0XCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5kaXJlY3Rpb25zSHJlZnMubmV4dFwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5uZXh0KCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3ROZXh0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuYm91bmRhcnlMaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUxhc3RMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LWxhc3RcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5ocmVmXT1cInN0YXRlLnBhZ2VzSHJlZnMuYXQoLTEpXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmxhc3QoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhc3RcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0XHQ8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q3VycmVudCBwYWdlIGlzIHt7IHN0YXRlLnBhZ2UgfX08L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgncGFnZXMnLCB7c3RhdGljOiB0cnVlfSkgcGFnZXM6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+O1xufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgcGFnZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdwYWdlcycpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUGFnaW5hdGlvbkRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFBhZ2luYXRpb25Qcm9wcz4gPSB7XG5cdHNsb3RTdHJ1Y3R1cmU6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0c2xvdFBhZ2VzOiBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVBhZ2luYXRpb25dJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCcsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiPjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UGFnaW5hdGlvbldpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFByb3ZpZGUgdGhlIGxhYmVsIGZvciBlYWNoIFwiUGFnZVwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBUaGlzIGlzIHVzZWQgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAcGFyYW0gcHJvY2Vzc1BhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZUNvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQYWdlTGFiZWwnKSBhcmlhUGFnZUxhYmVsOiAoKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ1BhZ2UgbmF2aWdhdGlvbidcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJhY3RpdmVcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnKGN1cnJlbnQpJ1xuXHQgKi9cblx0QElucHV0KCdhdUFjdGl2ZUxhYmVsJykgYWN0aXZlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJGaXJzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIGZpcnN0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUZpcnN0TGFiZWwnKSBhcmlhRmlyc3RMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIlByZXZpb3VzXCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgcHJldmlvdXMgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUHJldmlvdXNMYWJlbCcpIGFyaWFQcmV2aW91c0xhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTmV4dFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIG5leHQgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTmV4dExhYmVsJykgYXJpYU5leHRMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkxhc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBsYXN0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhc3RMYWJlbCcpIGFyaWFMYXN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJFbGxpcHNpc1wiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdFbGxpcHNpcyBwYWdlIGVsZW1lbnQnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUVsbGlwc2lzTGFiZWwnKSBhcmlhRWxsaXBzaXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IGZ1bmN0aW9uIHByb3ZpZGluZyB0aGUgaHJlZiBmb3IgYSBcIlBhZ2VcIiBwYWdlIGFuY2hvcixcblx0ICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VOdW1iZXIgLSBUaGUgaW5kZXggdG8gdXNlIGluIHRoZSBsaW5rXG5cdCAqXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZUxpbmsnKSBwYWdlTGluazogKChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVQYWdpbmF0aW9uLFxuXHRcdHdpZGdldE5hbWU6ICdwYWdpbmF0aW9uJyxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKSxcblx0XHR9LFxuXHR9KTtcblxuXHRASW5wdXQoJ2F1U2xvdEVsbGlwc2lzJykgc2xvdEVsbGlwc2lzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RFbGxpcHNpc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RGaXJzdCcpIHNsb3RGaXJzdDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90Rmlyc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90UHJldmlvdXMnKSBzbG90UHJldmlvdXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFByZXZpb3VzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdE5leHQnKSBzbG90TmV4dDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROZXh0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TGFzdCcpIHNsb3RMYXN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdExhc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQYWdlcycpIHNsb3RQYWdlczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UGFnZXNGcm9tQ29udGVudDogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TnVtYmVyTGFiZWwnKSBzbG90TnVtYmVyTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50OiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHBhZ2luYXRpb24gbGlua3Mgd2lsbCBiZSBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUJvdW5kYXJ5TGlua3MnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXJlY3Rpb25MaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4geW91ciBwYWdpbmF0ZWQgY29sbGVjdGlvbi5cblx0ICpcblx0ICogTm90ZSwgdGhhdCB0aGlzIGlzIG5vdCB0aGUgbnVtYmVyIG9mIHBhZ2VzLiBQYWdlIG51bWJlcnMgYXJlIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgYmFzZWQgb25cblx0ICogYGNvbGxlY3Rpb25TaXplYCBhbmQgYHBhZ2VTaXplYC4gRXguIGlmIHlvdSBoYXZlIDEwMCBpdGVtcyBpbiB5b3VyIGNvbGxlY3Rpb24gYW5kIGRpc3BsYXlpbmcgMjAgaXRlbXMgcGVyIHBhZ2UsXG5cdCAqIHlvdSdsbCBlbmQgdXAgd2l0aCA1IHBhZ2VzLlxuXHQgKiBXaGF0ZXZlciB0aGUgY29sbGVjdGlvblNpemUgdGhlIHBhZ2UgbnVtYmVyIGlzIG9mIG1pbmltdW0gMS5cblx0ICogQGRlZmF1bHRWYWx1ZSAwXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDb2xsZWN0aW9uU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMTBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVBhZ2VTaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuXHQgKi9cblx0QElucHV0KCdhdVNpemUnKSBzaXplOiAnc20nIHwgJ2xnJyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VzRmFjdG9yeScpIHBhZ2VzRmFjdG9yeTogKChwYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBudW1iZXJbXSkgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIHBhZ2UgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbnVtYmVyIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVBhZ2VDaGFuZ2UnKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RWxsaXBzaXM6IHRoaXMuc2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEZpcnN0OiB0aGlzLnNsb3RGaXJzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RMYXN0OiB0aGlzLnNsb3RMYXN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdE5leHQ6IHRoaXMuc2xvdE5leHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TnVtYmVyTGFiZWw6IHRoaXMuc2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFBhZ2VzOiB0aGlzLnNsb3RQYWdlc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RQcmV2aW91czogdGhpcy5zbG90UHJldmlvdXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
