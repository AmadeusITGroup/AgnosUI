const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createPagination, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
const _c1 = ["structure"];
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
const _c2 = (a0, a1) => ({ state: a0, widget: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r15.state;
    const widget_r5 = ctx_r15.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(3, _c2, state_r4, widget_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r4.ariaEllipsisLabel);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r4 = i0.ɵɵnextContext(3).state;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(state_r4.activeLabel);
} }
const _c3 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r21); const page_r7 = i0.ɵɵnextContext().$implicit; const widget_r5 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r5.actions.select(page_r7, $event)); });
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 6)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    const i_r8 = ctx_r24.$index;
    const page_r7 = ctx_r24.$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    const state_r4 = ctx_r23.state;
    const widget_r5 = ctx_r23.widget;
    i0.ɵɵattribute("aria-label", state_r4.pagesLabel[i_r8])("href", state_r4.pagesHrefs[i_r8], i0.ɵɵsanitizeUrl)("tabindex", state_r4.disabled ? "-1" : null)("aria-disabled", state_r4.disabled ? "true" : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(7, _c3, state_r4, widget_r5, page_r7));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r4.page === page_r7 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 6)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    const state_r4 = ctx_r25.state;
    const widget_r5 = ctx_r25.widget;
    i0.ɵɵclassProp("active", page_r7 === state_r4.page)("disabled", widget_r5.api.isEllipsis(page_r7) || state_r4.disabled);
    i0.ɵɵattribute("aria-current", page_r7 === state_r4.page ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, widget_r5.api.isEllipsis(page_r7) ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 6, "li", 10, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r4 = ctx.state;
    i0.ɵɵrepeater(state_r4.pages);
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template(rf, ctx) { }
const _c4 = (a0, a1) => ({ widget: a0, state: a1 });
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 13);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r36); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.first($event)); });
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    const state_r26 = ctx_r37.state;
    const widget_r27 = ctx_r37.widget;
    i0.ɵɵclassProp("disabled", state_r26.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r26.ariaFirstLabel)("href", state_r26.pagesHrefs[0], i0.ɵɵsanitizeUrl)("tabindex", state_r26.previousDisabled ? "-1" : null)("aria-disabled", state_r26.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r26.slotFirst)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r27, state_r26));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 15);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r41); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.previous($event)); });
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext();
    const state_r26 = ctx_r42.state;
    const widget_r27 = ctx_r42.widget;
    i0.ɵɵclassProp("disabled", state_r26.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r26.ariaPreviousLabel)("href", state_r26.directionsHrefs.previous, i0.ɵɵsanitizeUrl)("tabindex", state_r26.previousDisabled ? "-1" : null)("aria-disabled", state_r26.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r26.slotPrevious)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r27, state_r26));
} }
function PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 16);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r46); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.next($event)); });
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext();
    const state_r26 = ctx_r47.state;
    const widget_r27 = ctx_r47.widget;
    i0.ɵɵclassProp("disabled", state_r26.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r26.ariaNextLabel)("href", state_r26.directionsHrefs.next, i0.ɵɵsanitizeUrl)("tabindex", state_r26.nextDisabled ? "-1" : null)("aria-disabled", state_r26.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r26.slotNext)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r27, state_r26));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 17);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r51); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.last($event)); });
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext();
    const state_r26 = ctx_r52.state;
    const widget_r27 = ctx_r52.widget;
    i0.ɵɵclassProp("disabled", state_r26.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", state_r26.ariaLastLabel)("href", state_r26.pagesHrefs.at(-1), i0.ɵɵsanitizeUrl)("tabindex", state_r26.nextDisabled ? "-1" : null)("aria-disabled", state_r26.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r26.slotLast)("auSlotProps", i0.ɵɵpureFunction2(8, _c4, widget_r27, state_r26));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 11, "li", 11)(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 11, "li", 11)(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 6)(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 11, "li", 11)(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 11, "li", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r26 = ctx.state;
    const widget_r27 = ctx.widget;
    i0.ɵɵclassMap("au-pagination pagination" + (state_r26.size ? " pagination-" + state_r26.size : "") + " " + state_r26.className);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r26.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r26.directionLinks ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r26.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c4, widget_r27, state_r26));
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r26.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(5, state_r26.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current page is ", state_r26.page, "");
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["auPaginationPages", ""], ["pages", ""], ["auPaginationStructure", ""], ["structure", ""], [1, "page-item"], ["aria-hidden", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "visually-hidden"], [1, "page-link", "au-page", 3, "click"], ["class", "visually-hidden"], ["class", "page-item", 3, "active", "disabled"], ["class", "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], [1, "page-link", "au-first", 3, "click"], ["aria-hidden", "true"], [1, "page-link", "au-previous", 3, "click"], [1, "page-link", "au-next", 3, "click"], [1, "page-link", "au-last", 3, "click"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor)(2, PaginationDefaultSlotsComponent_ng_template_2_Template, 8, 12, "ng-template", 2, 3, i0.ɵɵtemplateRefExtractor);
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
					[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
					[attr.aria-current]="page === state.page ? 'page' : null"
				>
					@if (widget.api.isEllipsis(page)) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 222 }); })();
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 251 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixnQkFBZ0IsR0FDaEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQXdHakIsOEJBQXNEO0lBQ3JELGtJQUF5RjtJQUMxRixpQkFBTTtJQUNOLCtCQUE4QjtJQUFBLFlBQTZCO0lBQUEsaUJBQU87Ozs7O0lBRnBELGNBQTZCO0lBQTdCLDhDQUE2QixnRUFBQTtJQUViLGVBQTZCO0lBQTdCLGdEQUE2Qjs7OztJQVl6RCwrQkFBOEI7SUFBQSxZQUF1QjtJQUFBLGlCQUFPOzs7SUFBOUIsY0FBdUI7SUFBdkIsMENBQXVCOzs7OztJQVZ2RCw0QkFPQztJQUhBLGtRQUFTLGVBQUEseUNBQW1DLENBQUEsSUFBQztJQUk3QyxrSUFBaUgsOEdBQUE7SUFJbEgsaUJBQUk7Ozs7Ozs7O0lBWEgsdURBQXVDLHFEQUFBLDZDQUFBLG9EQUFBO0lBTzFCLGNBQWdDO0lBQWhDLGlEQUFnQyx5RUFBQTtJQUM3QyxjQUVDO0lBRkQsdURBRUM7OztJQXZCSiw2QkFLQztJQUNBLGtHQUtDLHNGQUFBO0lBZUYsaUJBQUs7Ozs7OztJQXhCSixtREFBb0Msb0VBQUE7SUFFcEMseUVBQXlEO0lBRXpELGNBS0M7SUFMRCw4REFL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LEtBQUs7bUJBQUMsbUJBQW1CO1lBRTFCLDBCQUEwQjtrQkFEekIsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFHOUIsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFFeEIsd0JBQXdCO2tCQUR2QixZQUFZO21CQUFDLDRCQUE0QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1FLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtPLGFBQWE7a0JBQTlFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBS0csY0FBYztrQkFBaEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFXQyxjQUFjO2tCQUEvRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVFSLElBQUk7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU1NLFFBQVE7a0JBQW5FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVF6QyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFPVSxZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGdCQUFnQjtZQVNDLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQUtBLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTs7a0ZBeExSLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQYWdpbmF0aW9uQ29udGV4dCwgUGFnaW5hdGlvbk51bWJlckNvbnRleHQsIFBhZ2luYXRpb25Qcm9wcywgUGFnaW5hdGlvbldpZGdldCwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUGFnaW5hdGlvbixcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdlbGxpcHNpcycgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25FbGxpcHNpc10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2ZpcnN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkZpcnN0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbGFzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25MYXN0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ25leHQnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTmV4dF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlIHBhZ2UgJ251bWJlcicgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTnVtYmVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbk51bWJlckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdwcmV2aW91cycgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25QcmV2aW91c10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ1BhZ2VzJyB0ZW1wbGF0ZSBmb3IgdGhlIFBhZ2VzIHNsb3RcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25QYWdlc10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBzdHJ1Y3R1cmUgZm9yIHRoZSBwYWdpbmF0aW9uIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25TdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVBhZ2luYXRpb25QYWdlcyAjcGFnZXMgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHRAZm9yIChwYWdlIG9mIHN0YXRlLnBhZ2VzOyB0cmFjayBwYWdlOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtaXRlbVwiXG5cdFx0XHRcdFx0W2NsYXNzLmFjdGl2ZV09XCJwYWdlID09PSBzdGF0ZS5wYWdlXCJcblx0XHRcdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwid2lkZ2V0LmFwaS5pc0VsbGlwc2lzKHBhZ2UpIHx8IHN0YXRlLmRpc2FibGVkXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWN1cnJlbnRdPVwicGFnZSA9PT0gc3RhdGUucGFnZSA/ICdwYWdlJyA6IG51bGxcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGlmICh3aWRnZXQuYXBpLmlzRWxsaXBzaXMocGFnZSkpIHtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWxpbmsgYXUtZWxsaXBzaXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEVsbGlwc2lzXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYXJpYUVsbGlwc2lzTGFiZWwgfX08L3NwYW4+XG5cdFx0XHRcdFx0fSBAZWxzZSB7XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLnBhZ2VzTGFiZWxbaV1cIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wYWdlXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5wYWdlc0hyZWZzW2ldXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnNlbGVjdChwYWdlLCAkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUuZGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE51bWJlckxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBkaXNwbGF5ZWRQYWdlOiBwYWdlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdEBpZiAoc3RhdGUucGFnZSA9PT0gcGFnZSkge1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYWN0aXZlTGFiZWwgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8dWwgW2NsYXNzXT1cIidhdS1wYWdpbmF0aW9uIHBhZ2luYXRpb24nICsgKHN0YXRlLnNpemUgPyAnIHBhZ2luYXRpb24tJyArIHN0YXRlLnNpemUgOiAnJykgKyAnICcgKyBzdGF0ZS5jbGFzc05hbWVcIj5cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUZpcnN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1maXJzdFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUucGFnZXNIcmVmc1swXVwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5maXJzdCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGaXJzdFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYVByZXZpb3VzTGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wcmV2aW91c1wiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUuZGlyZWN0aW9uc0hyZWZzLnByZXZpb3VzXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnByZXZpb3VzKCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFByZXZpb3VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQYWdlc1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhTmV4dExhYmVsXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmsgYXUtbmV4dFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUuZGlyZWN0aW9uc0hyZWZzLm5leHRcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMubmV4dCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TmV4dFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFMYXN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1sYXN0XCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5wYWdlc0hyZWZzLmF0KC0xKVwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5sYXN0KCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYXN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkN1cnJlbnQgcGFnZSBpcyB7eyBzdGF0ZS5wYWdlIH19PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkRlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3BhZ2VzJywge3N0YXRpYzogdHJ1ZX0pIHBhZ2VzOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAncGFnZXMnKTtcbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHN0cnVjdHVyZVxuICovXG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQYWdpbmF0aW9uUHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiBwYWdpbmF0aW9uRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdHNsb3RQYWdlczogcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQYWdpbmF0aW9uXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUoKS5hcmlhTGFiZWwnLFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIj48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFBhZ2luYXRpb25XaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgZWFjaCBcIlBhZ2VcIiBwYWdlIGJ1dHRvbi5cblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIHByb2Nlc3NQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUGFnZUxhYmVsJykgYXJpYVBhZ2VMYWJlbDogKChwcm9jZXNzUGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdQYWdlIG5hdmlnYXRpb24nXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJyhjdXJyZW50KSdcblx0ICovXG5cdEBJbnB1dCgnYXVBY3RpdmVMYWJlbCcpIGFjdGl2ZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVByZXZpb3VzTGFiZWwnKSBhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYU5leHRMYWJlbCcpIGFyaWFOZXh0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJMYXN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbGFzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRWxsaXBzaXNcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnRWxsaXBzaXMgcGFnZSBlbGVtZW50J1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFFbGxpcHNpc0xhYmVsJykgYXJpYUVsbGlwc2lzTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRmFjdG9yeSBmdW5jdGlvbiBwcm92aWRpbmcgdGhlIGhyZWYgZm9yIGEgXCJQYWdlXCIgcGFnZSBhbmNob3IsXG5cdCAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlTnVtYmVyIC0gVGhlIGluZGV4IHRvIHVzZSBpbiB0aGUgbGlua1xuXHQgKlxuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VMaW5rJykgcGFnZUxpbms6ICgocGFnZU51bWJlcjogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUGFnaW5hdGlvbixcblx0XHR3aWRnZXROYW1lOiAncGFnaW5hdGlvbicsXG5cdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSksXG5cdFx0fSxcblx0fSk7XG5cblx0QElucHV0KCdhdVNsb3RFbGxpcHNpcycpIHNsb3RFbGxpcHNpczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RWxsaXBzaXNGcm9tQ29udGVudDogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90Rmlyc3QnKSBzbG90Rmlyc3Q6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZpcnN0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFByZXZpb3VzJykgc2xvdFByZXZpb3VzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQcmV2aW91c0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3ROZXh0Jykgc2xvdE5leHQ6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TmV4dEZyb21Db250ZW50OiBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdExhc3QnKSBzbG90TGFzdDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RMYXN0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90UGFnZXMnKSBzbG90UGFnZXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFBhZ2VzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdE51bWJlckxhYmVsJykgc2xvdE51bWJlckxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudDogUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBwYWdpbmF0aW9uIGxpbmtzIHdpbGwgYmUgZGlzYWJsZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVCb3VuZGFyeUxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBib3VuZGFyeUxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlyZWN0aW9uTGlua3MnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLFxuXHQgKiB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q29sbGVjdGlvblNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgY29sbGVjdGlvblNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDFcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVBhZ2UnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDEwXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgcGFnaW5hdGlvbiBkaXNwbGF5IHNpemUuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuXHQgKiBAZGVmYXVsdFZhbHVlIG51bGxcblx0ICovXG5cdEBJbnB1dCgnYXVTaXplJykgc2l6ZTogJ3NtJyB8ICdsZycgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBwYWdlc0ZhY3RvcnkgcmV0dXJucyBhIGZ1bmN0aW9uIGNvbXB1dGluZyB0aGUgYXJyYXkgb2YgcGFnZXMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIGFzIG51bWJlciAoLTEgYXJlIHRyZWF0ZWQgYXMgZWxsaXBzaXMpLlxuXHQgKiBVc2UgUGFnZSBzbG90IHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlldyBhbmQgbm90IHRoaXNcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlc0ZhY3RvcnknKSBwYWdlc0ZhY3Rvcnk6ICgocGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gbnVtYmVyW10pIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG51bWJlciBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKi9cblx0QE91dHB1dCgnYXVQYWdlQ2hhbmdlJykgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEVsbGlwc2lzOiB0aGlzLnNsb3RFbGxpcHNpc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RGaXJzdDogdGhpcy5zbG90Rmlyc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TGFzdDogdGhpcy5zbG90TGFzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3ROZXh0OiB0aGlzLnNsb3ROZXh0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdE51bWJlckxhYmVsOiB0aGlzLnNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RQYWdlczogdGhpcy5zbG90UGFnZXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90UHJldmlvdXM6IHRoaXMuc2xvdFByZXZpb3VzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
