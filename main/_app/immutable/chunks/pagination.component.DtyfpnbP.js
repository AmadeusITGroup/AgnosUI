const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createPagination, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
const _c1 = ["structure"];
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
const _c2 = (a0, a1) => ({ state: a0, widget: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r15.state;
    const widget_r5 = ctx_r15.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(2, _c2, state_r4, widget_r5));
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
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
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 7)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
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
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 2, 5, "a", 5)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 11);
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
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 6, "li", 11, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r4 = ctx.state;
    i0.ɵɵrepeater(state_r4.pages);
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template(rf, ctx) { }
const _c4 = (a0, a1) => ({ widget: a0, state: a1 });
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 14);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r36); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.first($event)); });
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 7);
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
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 16);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r41); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.previous($event)); });
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 7);
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
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 17);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r46); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.next($event)); });
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 7);
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
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 18);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r51); const widget_r27 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r27.actions.last($event)); });
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 7);
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
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 11, "li", 12)(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 11, "li", 12)(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 7)(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 11, "li", 12)(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 11, "li", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["auPaginationPages", ""], ["pages", ""], ["auPaginationStructure", ""], ["structure", ""], [1, "page-item"], ["class", "page-link au-ellipsis", "tabindex", "-1", "aria-disabled", "true"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "page-link", "au-page", 3, "click"], ["class", "visually-hidden"], [1, "visually-hidden"], ["class", "page-item", 3, "active", "disabled"], ["class", "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], [1, "page-link", "au-first", 3, "click"], ["aria-hidden", "true"], [1, "page-link", "au-previous", 3, "click"], [1, "page-link", "au-next", 3, "click"], [1, "page-link", "au-last", 3, "click"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
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
						<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
							<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
						</a>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 221 }); })();
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
        } }, inputs: { ariaPageLabel: [i0.ɵɵInputFlags.None, "auAriaPageLabel", "ariaPageLabel"], ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], activeLabel: [i0.ɵɵInputFlags.None, "auActiveLabel", "activeLabel"], ariaFirstLabel: [i0.ɵɵInputFlags.None, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [i0.ɵɵInputFlags.None, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [i0.ɵɵInputFlags.None, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [i0.ɵɵInputFlags.None, "auAriaLastLabel", "ariaLastLabel"], pageLink: [i0.ɵɵInputFlags.None, "auPageLink", "pageLink"], slotEllipsis: [i0.ɵɵInputFlags.None, "auSlotEllipsis", "slotEllipsis"], slotFirst: [i0.ɵɵInputFlags.None, "auSlotFirst", "slotFirst"], slotPrevious: [i0.ɵɵInputFlags.None, "auSlotPrevious", "slotPrevious"], slotNext: [i0.ɵɵInputFlags.None, "auSlotNext", "slotNext"], slotLast: [i0.ɵɵInputFlags.None, "auSlotLast", "slotLast"], slotPages: [i0.ɵɵInputFlags.None, "auSlotPages", "slotPages"], slotNumberLabel: [i0.ɵɵInputFlags.None, "auSlotNumberLabel", "slotNumberLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCollectionSize", "collectionSize", auNumberAttribute], page: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPage", "page", auNumberAttribute], pageSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPageSize", "pageSize", auNumberAttribute], size: [i0.ɵɵInputFlags.None, "auSize", "size"], pagesFactory: [i0.ɵɵInputFlags.None, "auPagesFactory", "pagesFactory"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c5, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 250 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixnQkFBZ0IsR0FDaEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQXdHakIsNEJBQW9FO0lBQ25FLGtJQUF5RjtJQUMxRixpQkFBSTs7Ozs7SUFEVSxjQUE2QjtJQUE3Qiw4Q0FBNkIsZ0VBQUE7Ozs7SUFhekMsZ0NBQThCO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGNBQXVCO0lBQXZCLDBDQUF1Qjs7Ozs7SUFWdkQsNEJBT0M7SUFIQSxrUUFBUyxlQUFBLHlDQUFtQyxDQUFBLElBQUM7SUFJN0Msa0lBQWlILDhHQUFBO0lBSWxILGlCQUFJOzs7Ozs7OztJQVhILHVEQUF1QyxxREFBQSw2Q0FBQSxvREFBQTtJQU8xQixjQUFnQztJQUFoQyxpREFBZ0MseUVBQUE7SUFDN0MsY0FFQztJQUZELHVEQUVDOzs7SUF0QkosNkJBS0M7SUFDQSwwR0FJQyxzRkFBQTtJQWVGLGlCQUFLOzs7Ozs7SUF2QkosbURBQW9DLG9FQUFBO0lBRXBDLHlFQUF5RDtJQUV6RCxjQUlDO0lBSkQsOERBSUM7OztJQVhILGtJQTJCQzs7O0lBM0JELDZCQTJCQzs7Ozs7O0lBS0MsNkJBQWdFLFlBQUE7SUFLOUQs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O2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUV4Qix3QkFBd0I7a0JBRHZCLFlBQVk7bUJBQUMsNEJBQTRCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTUUsUUFBUTtrQkFBcEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBS08sYUFBYTtrQkFBOUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLRyxjQUFjO2tCQUFoRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQVdDLGNBQWM7a0JBQS9FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBUVIsSUFBSTtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBTU0sUUFBUTtrQkFBbkUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBUXpDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQU9VLFlBQVk7a0JBQXBDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBU0MsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBS0EsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhOztrRkFoTFIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1BhZ2luYXRpb25Db250ZXh0LCBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCwgUGFnaW5hdGlvblByb3BzLCBQYWdpbmF0aW9uV2lkZ2V0LCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVQYWdpbmF0aW9uLFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2VsbGlwc2lzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkVsbGlwc2lzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZmlyc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRmlyc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdsYXN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkxhc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbmV4dCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OZXh0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgcGFnZSAnbnVtYmVyJyB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OdW1iZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ3ByZXZpb3VzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblByZXZpb3VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnUGFnZXMnIHRlbXBsYXRlIGZvciB0aGUgUGFnZXMgc2xvdFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblBhZ2VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIHBhZ2luYXRpb24gd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblBhZ2VzICNwYWdlcyBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBmb3IgKHBhZ2Ugb2Ygc3RhdGUucGFnZXM7IHRyYWNrIHBhZ2U7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxsaVxuXHRcdFx0XHRcdGNsYXNzPVwicGFnZS1pdGVtXCJcblx0XHRcdFx0XHRbY2xhc3MuYWN0aXZlXT1cInBhZ2UgPT09IHN0YXRlLnBhZ2VcIlxuXHRcdFx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJ3aWRnZXQuYXBpLmlzRWxsaXBzaXMocGFnZSkgfHwgc3RhdGUuZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtY3VycmVudF09XCJwYWdlID09PSBzdGF0ZS5wYWdlID8gJ3BhZ2UnIDogbnVsbFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRAaWYgKHdpZGdldC5hcGkuaXNFbGxpcHNpcyhwYWdlKSkge1xuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmsgYXUtZWxsaXBzaXNcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEVsbGlwc2lzXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0fSBAZWxzZSB7XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLnBhZ2VzTGFiZWxbaV1cIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wYWdlXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5wYWdlc0hyZWZzW2ldXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnNlbGVjdChwYWdlLCAkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUuZGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE51bWJlckxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBkaXNwbGF5ZWRQYWdlOiBwYWdlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdEBpZiAoc3RhdGUucGFnZSA9PT0gcGFnZSkge1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYWN0aXZlTGFiZWwgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8dWwgW2NsYXNzXT1cIidhdS1wYWdpbmF0aW9uIHBhZ2luYXRpb24nICsgKHN0YXRlLnNpemUgPyAnIHBhZ2luYXRpb24tJyArIHN0YXRlLnNpemUgOiAnJykgKyAnICcgKyBzdGF0ZS5jbGFzc05hbWVcIj5cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUZpcnN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1maXJzdFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUucGFnZXNIcmVmc1swXVwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5maXJzdCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGaXJzdFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYVByZXZpb3VzTGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wcmV2aW91c1wiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUuZGlyZWN0aW9uc0hyZWZzLnByZXZpb3VzXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnByZXZpb3VzKCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFByZXZpb3VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQYWdlc1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhTmV4dExhYmVsXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmsgYXUtbmV4dFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmhyZWZdPVwic3RhdGUuZGlyZWN0aW9uc0hyZWZzLm5leHRcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMubmV4dCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TmV4dFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFMYXN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1sYXN0XCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuaHJlZl09XCJzdGF0ZS5wYWdlc0hyZWZzLmF0KC0xKVwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5sYXN0KCRldmVudClcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RMYXN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkN1cnJlbnQgcGFnZSBpcyB7eyBzdGF0ZS5wYWdlIH19PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkRlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3BhZ2VzJywge3N0YXRpYzogdHJ1ZX0pIHBhZ2VzOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAncGFnZXMnKTtcbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHN0cnVjdHVyZVxuICovXG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQYWdpbmF0aW9uUHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiBwYWdpbmF0aW9uRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdHNsb3RQYWdlczogcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQYWdpbmF0aW9uXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUoKS5hcmlhTGFiZWwnLFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCIgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIj48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFBhZ2luYXRpb25XaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgZWFjaCBcIlBhZ2VcIiBwYWdlIGJ1dHRvbi5cblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIHByb2Nlc3NQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUGFnZUxhYmVsJykgYXJpYVBhZ2VMYWJlbDogKChwcm9jZXNzUGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdQYWdlIG5hdmlnYXRpb24nXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJyhjdXJyZW50KSdcblx0ICovXG5cdEBJbnB1dCgnYXVBY3RpdmVMYWJlbCcpIGFjdGl2ZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVByZXZpb3VzTGFiZWwnKSBhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYU5leHRMYWJlbCcpIGFyaWFOZXh0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJMYXN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbGFzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgZnVuY3Rpb24gcHJvdmlkaW5nIHRoZSBocmVmIGZvciBhIFwiUGFnZVwiIHBhZ2UgYW5jaG9yLFxuXHQgKiBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZU51bWJlciAtIFRoZSBpbmRleCB0byB1c2UgaW4gdGhlIGxpbmtcblx0ICpcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlTGluaycpIHBhZ2VMaW5rOiAoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVBhZ2luYXRpb24sXG5cdFx0d2lkZ2V0TmFtZTogJ3BhZ2luYXRpb24nLFxuXHRcdGRlZmF1bHRDb25maWcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpLFxuXHRcdH0sXG5cdH0pO1xuXG5cdEBJbnB1dCgnYXVTbG90RWxsaXBzaXMnKSBzbG90RWxsaXBzaXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEZpcnN0Jykgc2xvdEZpcnN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGaXJzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQcmV2aW91cycpIHNsb3RQcmV2aW91czogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UHJldmlvdXNGcm9tQ29udGVudDogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TmV4dCcpIHNsb3ROZXh0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE5leHRGcm9tQ29udGVudDogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RMYXN0Jykgc2xvdExhc3Q6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TGFzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFBhZ2VzJykgc2xvdFBhZ2VzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQYWdlc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3ROdW1iZXJMYWJlbCcpIHNsb3ROdW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Qm91bmRhcnlMaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYm91bmRhcnlMaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpcmVjdGlvbkxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB5b3VyIHBhZ2luYXRlZCBjb2xsZWN0aW9uLlxuXHQgKlxuXHQgKiBOb3RlLCB0aGF0IHRoaXMgaXMgbm90IHRoZSBudW1iZXIgb2YgcGFnZXMuIFBhZ2UgbnVtYmVycyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBiYXNlZCBvblxuXHQgKiBgY29sbGVjdGlvblNpemVgIGFuZCBgcGFnZVNpemVgLiBFeC4gaWYgeW91IGhhdmUgMTAwIGl0ZW1zIGluIHlvdXIgY29sbGVjdGlvbiBhbmQgZGlzcGxheWluZyAyMCBpdGVtcyBwZXIgcGFnZSxcblx0ICogeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG5cdCAqIFdoYXRldmVyIHRoZSBjb2xsZWN0aW9uU2l6ZSB0aGUgcGFnZSBudW1iZXIgaXMgb2YgbWluaW11bSAxLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNvbGxlY3Rpb25TaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIGNvbGxlY3Rpb25TaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZSAxXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQGRlZmF1bHRWYWx1ZSAxMFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZVNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHBhZ2luYXRpb24gZGlzcGxheSBzaXplLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgY3VycmVudGx5IHN1cHBvcnRzIHNtYWxsIGFuZCBsYXJnZSBzaXplcy5cblx0ICogQGRlZmF1bHRWYWx1ZSBudWxsXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2l6ZScpIHNpemU6ICdzbScgfCAnbGcnIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogcGFnZXNGYWN0b3J5IHJldHVybnMgYSBmdW5jdGlvbiBjb21wdXRpbmcgdGhlIGFycmF5IG9mIHBhZ2VzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBhcyBudW1iZXIgKC0xIGFyZSB0cmVhdGVkIGFzIGVsbGlwc2lzKS5cblx0ICogVXNlIFBhZ2Ugc2xvdCB0byBjdXN0b21pemUgdGhlIHBhZ2VzIHZpZXcgYW5kIG5vdCB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNGYWN0b3J5JykgcGFnZXNGYWN0b3J5OiAoKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICovXG5cdEBPdXRwdXQoJ2F1UGFnZUNoYW5nZScpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RFbGxpcHNpczogdGhpcy5zbG90RWxsaXBzaXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rmlyc3Q6IHRoaXMuc2xvdEZpcnN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdExhc3Q6IHRoaXMuc2xvdExhc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TmV4dDogdGhpcy5zbG90TmV4dEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3ROdW1iZXJMYWJlbDogdGhpcy5zbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90UGFnZXM6IHRoaXMuc2xvdFBhZ2VzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFByZXZpb3VzOiB0aGlzLnNsb3RQcmV2aW91c0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
