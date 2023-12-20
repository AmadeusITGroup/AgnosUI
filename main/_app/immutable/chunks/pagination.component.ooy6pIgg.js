const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createPagination, } from '@agnos-ui/angular-headless';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r13.state;
    const widget_r3 = ctx_r13.widget;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r2.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(2, _c1, state_r2, widget_r3));
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext(3).state;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r2.activeLabel);
} }
const _c2 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const page_r5 = i0.ɵɵnextContext().$implicit; const widget_r3 = i0.ɵɵnextContext().widget; widget_r3.actions.select(page_r5); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 5)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    const i_r6 = ctx_r22.$index;
    const page_r5 = ctx_r22.$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    const state_r2 = ctx_r21.state;
    const widget_r3 = ctx_r21.widget;
    i0.ɵɵattribute("aria-label", state_r2.pagesLabel[i_r6])("tabindex", state_r2.disabled ? "-1" : null)("aria-disabled", state_r2.disabled ? "true" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r2.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c2, state_r2, widget_r3, page_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(2, state_r2.page === page_r5 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 2, 5, "a", 3)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    const state_r2 = ctx_r23.state;
    const widget_r3 = ctx_r23.widget;
    i0.ɵɵclassProp("active", page_r5 === state_r2.page)("disabled", widget_r3.api.isEllipsis(page_r5) || state_r2.disabled);
    i0.ɵɵattribute("aria-current", page_r5 === state_r2.page ? "page" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(1, widget_r3.api.isEllipsis(page_r5) ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 6, "li", 9, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.pages);
} }
const _c3 = ["auPagination", ""];
function PaginationComponent_Conditional_0_Conditional_1_ng_template_3_Template(rf, ctx) { }
const _c4 = (a0, a1) => ({ widget: a0, state: a1 });
function PaginationComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 4);
    i0.ɵɵlistener("click", function PaginationComponent_Conditional_0_Conditional_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); ctx_r8.widget.actions.first(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtemplate(3, PaginationComponent_Conditional_0_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", state_r1.previousDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", state_r1.ariaFirstLabel)("tabindex", state_r1.previousDisabled ? "-1" : null)("aria-disabled", state_r1.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r1.slotFirst)("auSlotProps", i0.ɵɵpureFunction2(7, _c4, ctx_r2.widget, state_r1));
} }
function PaginationComponent_Conditional_0_Conditional_2_ng_template_3_Template(rf, ctx) { }
function PaginationComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 6);
    i0.ɵɵlistener("click", function PaginationComponent_Conditional_0_Conditional_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); ctx_r12.widget.actions.previous(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtemplate(3, PaginationComponent_Conditional_0_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", state_r1.previousDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", state_r1.ariaPreviousLabel)("tabindex", state_r1.previousDisabled ? "-1" : null)("aria-disabled", state_r1.previousDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r1.slotPrevious)("auSlotProps", i0.ɵɵpureFunction2(7, _c4, ctx_r3.widget, state_r1));
} }
function PaginationComponent_Conditional_0_ng_template_3_Template(rf, ctx) { }
function PaginationComponent_Conditional_0_Conditional_4_ng_template_3_Template(rf, ctx) { }
function PaginationComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 7);
    i0.ɵɵlistener("click", function PaginationComponent_Conditional_0_Conditional_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); ctx_r16.widget.actions.next(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtemplate(3, PaginationComponent_Conditional_0_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", state_r1.nextDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", state_r1.ariaNextLabel)("tabindex", state_r1.nextDisabled ? "-1" : null)("aria-disabled", state_r1.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r1.slotNext)("auSlotProps", i0.ɵɵpureFunction2(7, _c4, ctx_r5.widget, state_r1));
} }
function PaginationComponent_Conditional_0_Conditional_5_ng_template_3_Template(rf, ctx) { }
function PaginationComponent_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 8);
    i0.ɵɵlistener("click", function PaginationComponent_Conditional_0_Conditional_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); ctx_r20.widget.actions.last(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(2, "span", 5);
    i0.ɵɵtemplate(3, PaginationComponent_Conditional_0_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", state_r1.nextDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", state_r1.ariaLastLabel)("tabindex", state_r1.nextDisabled ? "-1" : null)("aria-disabled", state_r1.nextDisabled ? "true" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r1.slotLast)("auSlotProps", i0.ɵɵpureFunction2(7, _c4, ctx_r6.widget, state_r1));
} }
function PaginationComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, PaginationComponent_Conditional_0_Conditional_1_Template, 4, 10, "li", 0)(2, PaginationComponent_Conditional_0_Conditional_2_Template, 4, 10, "li", 0)(3, PaginationComponent_Conditional_0_ng_template_3_Template, 0, 0, "ng-template", 1)(4, PaginationComponent_Conditional_0_Conditional_4_Template, 4, 10, "li", 0)(5, PaginationComponent_Conditional_0_Conditional_5_Template, 4, 10, "li", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 2);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("au-pagination pagination" + (ctx.size ? " pagination-" + ctx.size : "") + " " + ctx.className);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(1, ctx.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(2, ctx.directionLinks ? 2 : -1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", ctx.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c4, ctx_r0.widget, ctx));
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(4, ctx.directionLinks ? 4 : -1);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(5, ctx.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current page is ", ctx.page, "");
} }
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
export class PaginationDefaultSlotsComponent {
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(t) { return new (t || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pages = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auPaginationPages", ""], ["pages", ""], [1, "page-item"], ["class", "page-link au-ellipsis", "tabindex", "-1", "aria-disabled", "true"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], ["href", "#", 1, "page-link", "au-page", 3, "click"], ["class", "visually-hidden"], [1, "visually-hidden"], ["class", "page-item", 3, "active", "disabled"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, PaginationPagesDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [SlotDirective, PaginationPagesDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
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
						href="#"
						(click)="widget.actions.select(page); $event.preventDefault()"
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
	</ng-template>\`,
            }]
    }], null, { pages: [{
            type: ViewChild,
            args: ['pages', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "pagination/pagination.component.ts", lineNumber: 139 }); })();
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
const defaultConfig = {
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
        this.pageChange = new EventEmitter(true);
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
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotEllipsisFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotFirstFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotPreviousFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotNextFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotLastFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotPagesFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotNumberLabelFromContent = _t.first);
        } }, hostVars: 1, hostBindings: function PaginationComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.state().ariaLabel);
        } }, inputs: { ariaPageLabel: ["auAriaPageLabel", "ariaPageLabel"], ariaLabel: ["auAriaLabel", "ariaLabel"], activeLabel: ["auActiveLabel", "activeLabel"], ariaFirstLabel: ["auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: ["auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: ["auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: ["auAriaLastLabel", "ariaLastLabel"], slotEllipsis: ["auSlotEllipsis", "slotEllipsis"], slotFirst: ["auSlotFirst", "slotFirst"], slotPrevious: ["auSlotPrevious", "slotPrevious"], slotNext: ["auSlotNext", "slotNext"], slotLast: ["auSlotLast", "slotLast"], slotPages: ["auSlotPages", "slotPages"], slotNumberLabel: ["auSlotNumberLabel", "slotNumberLabel"], disabled: ["auDisabled", "disabled", auBooleanAttribute], boundaryLinks: ["auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: ["auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: ["auCollectionSize", "collectionSize", auNumberAttribute], page: ["auPage", "page", auNumberAttribute], pageSize: ["auPageSize", "pageSize", auNumberAttribute], size: ["auSize", "size"], pagesFactory: ["auPagesFactory", "pagesFactory"], className: ["auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, decls: 2, vars: 3, consts: [["class", "page-item", 3, "disabled"], [3, "auSlot", "auSlotProps"], ["aria-live", "polite", 1, "visually-hidden"], [1, "page-item"], ["href", "#", 1, "page-link", "au-first", 3, "click"], ["aria-hidden", "true"], ["href", "#", 1, "page-link", "au-previous", 3, "click"], ["href", "#", 1, "page-link", "au-next", 3, "click"], ["href", "#", 1, "page-link", "au-last", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_Conditional_0_Template, 8, 12);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            let PaginationComponent_contFlowTmp;
            i0.ɵɵconditional(0, (PaginationComponent_contFlowTmp = i0.ɵɵpipeBind1(1, 1, ctx.widget.state$)) ? 0 : -1, PaginationComponent_contFlowTmp);
        } }, dependencies: [AsyncPipe, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: '[auPagination]',
                standalone: true,
                imports: [AsyncPipe, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[attr.aria-label]': 'state().ariaLabel',
                },
                encapsulation: ViewEncapsulation.None,
                template: \`
		@if (widget.state$ | async; as state) {
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a
							[attr.aria-label]="state.ariaFirstLabel"
							class="page-link au-first"
							href="#"
							(click)="widget.actions.first(); $event.preventDefault()"
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
							href="#"
							(click)="widget.actions.previous(); $event.preventDefault()"
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
							href="#"
							(click)="widget.actions.next(); $event.preventDefault()"
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
							href="#"
							(click)="widget.actions.last(); $event.preventDefault()"
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
		}
	\`,
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "pagination/pagination.component.ts", lineNumber: 233 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsZ0JBQWdCLEdBQ2hCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUE0RmxCLDRCQUFvRTtJQUNuRSxrSUFBeUY7SUFDMUYsaUJBQUk7Ozs7O0lBRFUsZUFBNkI7SUFBN0IsOENBQTZCLGdFQUFBOzs7O0lBYXpDLCtCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQU87OztJQUE5QixlQUF1QjtJQUF2QiwwQ0FBdUI7Ozs7O0lBVnZELDRCQU9DO0lBSEEsMlBBQVMsaUNBQTJCLFNBQUUsZUFBQSx1QkFBdUIsQ0FBQSxJQUFDO0lBSTlELGtJQUFpSCw4R0FBQTtJQUlsSCxpQkFBSTs7Ozs7Ozs7SUFYSCx1REFBdUMsNkNBQUEsb0RBQUE7SUFPMUIsZUFBZ0M7SUFBaEMsaURBQWdDLHlFQUFBO0lBQzdDLGVBRUM7SUFGRCx1REFFQzs7O0lBdEJKLDZCQUtDO0lBQ0EsMEdBSUMsc0ZBQUE7SUFlRixpQkFBSzs7Ozs7O0lBdkJKLG1EQUFvQyxvRUFBQTtJQUVwQyx5RUFBeUQ7SUFFekQsZUFJQztJQUpELDhEQUlDOzs7SUFYSCxpSUEyQkM7OztJQTNCRCw2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S0FBSzttQkFBQyxnQkFBZ0I7WUFTQyxVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLQSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7O2tGQXBLUixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFnaW5hdGlvbkNvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0LCBQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25XaWRnZXQsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVBhZ2luYXRpb24sXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdlbGxpcHNpcycgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25FbGxpcHNpc10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2ZpcnN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkZpcnN0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbGFzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25MYXN0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ25leHQnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTmV4dF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlIHBhZ2UgJ251bWJlcicgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTnVtYmVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbk51bWJlckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdwcmV2aW91cycgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25QcmV2aW91c10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ1BhZ2VzJyB0ZW1wbGF0ZSBmb3IgdGhlIFBhZ2VzIHNsb3RcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25QYWdlc10nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uUGFnZXMgI3BhZ2VzIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdEBmb3IgKHBhZ2Ugb2Ygc3RhdGUucGFnZXM7IHRyYWNrIHBhZ2U7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHQ8bGlcblx0XHRcdFx0Y2xhc3M9XCJwYWdlLWl0ZW1cIlxuXHRcdFx0XHRbY2xhc3MuYWN0aXZlXT1cInBhZ2UgPT09IHN0YXRlLnBhZ2VcIlxuXHRcdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwid2lkZ2V0LmFwaS5pc0VsbGlwc2lzKHBhZ2UpIHx8IHN0YXRlLmRpc2FibGVkXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1jdXJyZW50XT1cInBhZ2UgPT09IHN0YXRlLnBhZ2UgPyAncGFnZScgOiBudWxsXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmICh3aWRnZXQuYXBpLmlzRWxsaXBzaXMocGFnZSkpIHtcblx0XHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGluayBhdS1lbGxpcHNpc1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEVsbGlwc2lzXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5wYWdlc0xhYmVsW2ldXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LXBhZ2VcIlxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnNlbGVjdChwYWdlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUuZGlzYWJsZWQgPyAnLTEnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLmRpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE51bWJlckxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBkaXNwbGF5ZWRQYWdlOiBwYWdlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRAaWYgKHN0YXRlLnBhZ2UgPT09IHBhZ2UpIHtcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hY3RpdmVMYWJlbCB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdH1cblx0XHRcdDwvbGk+XG5cdFx0fVxuXHQ8L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdwYWdlcycsIHtzdGF0aWM6IHRydWV9KSBwYWdlczogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+O1xufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgcGFnZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdwYWdlcycpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFBhZ2luYXRpb25Qcm9wcz4gPSB7XG5cdHNsb3RQYWdlczogcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQYWdpbmF0aW9uXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtBc3luY1BpcGUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCcsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmICh3aWRnZXQuc3RhdGUkIHwgYXN5bmM7IGFzIHN0YXRlKSB7XG5cdFx0XHQ8dWwgW2NsYXNzXT1cIidhdS1wYWdpbmF0aW9uIHBhZ2luYXRpb24nICsgKHN0YXRlLnNpemUgPyAnIHBhZ2luYXRpb24tJyArIHN0YXRlLnNpemUgOiAnJykgKyAnICcgKyBzdGF0ZS5jbGFzc05hbWVcIj5cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUZpcnN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1maXJzdFwiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmZpcnN0KCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGaXJzdFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYVByZXZpb3VzTGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1wcmV2aW91c1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLnByZXZpb3VzKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQcmV2aW91c1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90UGFnZXNcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5kaXJlY3Rpb25MaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYU5leHRMYWJlbFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwicGFnZS1saW5rIGF1LW5leHRcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5uZXh0KCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwic3RhdGUubmV4dERpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90TmV4dFwiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFMYXN0TGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGluayBhdS1sYXN0XCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMubGFzdCgpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInN0YXRlLm5leHREaXNhYmxlZCA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhc3RcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0XHQ8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q3VycmVudCBwYWdlIGlzIHt7IHN0YXRlLnBhZ2UgfX08L2Rpdj5cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFBhZ2luYXRpb25XaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgZWFjaCBcIlBhZ2VcIiBwYWdlIGJ1dHRvbi5cblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIHByb2Nlc3NQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhUGFnZUxhYmVsJykgYXJpYVBhZ2VMYWJlbDogKChwcm9jZXNzUGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdQYWdlIG5hdmlnYXRpb24nXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJyhjdXJyZW50KSdcblx0ICovXG5cdEBJbnB1dCgnYXVBY3RpdmVMYWJlbCcpIGFjdGl2ZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVByZXZpb3VzTGFiZWwnKSBhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYU5leHRMYWJlbCcpIGFyaWFOZXh0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJMYXN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbGFzdCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVQYWdpbmF0aW9uLFxuXHRcdHdpZGdldE5hbWU6ICdwYWdpbmF0aW9uJyxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKSxcblx0XHR9LFxuXHR9KTtcblxuXHRASW5wdXQoJ2F1U2xvdEVsbGlwc2lzJykgc2xvdEVsbGlwc2lzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RFbGxpcHNpc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RGaXJzdCcpIHNsb3RGaXJzdDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90Rmlyc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90UHJldmlvdXMnKSBzbG90UHJldmlvdXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFByZXZpb3VzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdE5leHQnKSBzbG90TmV4dDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROZXh0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TGFzdCcpIHNsb3RMYXN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdExhc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQYWdlcycpIHNsb3RQYWdlczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UGFnZXNGcm9tQ29udGVudDogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TnVtYmVyTGFiZWwnKSBzbG90TnVtYmVyTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50OiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHBhZ2luYXRpb24gbGlua3Mgd2lsbCBiZSBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUJvdW5kYXJ5TGlua3MnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXJlY3Rpb25MaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4geW91ciBwYWdpbmF0ZWQgY29sbGVjdGlvbi5cblx0ICpcblx0ICogTm90ZSwgdGhhdCB0aGlzIGlzIG5vdCB0aGUgbnVtYmVyIG9mIHBhZ2VzLiBQYWdlIG51bWJlcnMgYXJlIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgYmFzZWQgb25cblx0ICogYGNvbGxlY3Rpb25TaXplYCBhbmQgYHBhZ2VTaXplYC4gRXguIGlmIHlvdSBoYXZlIDEwMCBpdGVtcyBpbiB5b3VyIGNvbGxlY3Rpb24gYW5kIGRpc3BsYXlpbmcgMjAgaXRlbXMgcGVyIHBhZ2UsXG5cdCAqIHlvdSdsbCBlbmQgdXAgd2l0aCA1IHBhZ2VzLlxuXHQgKiBXaGF0ZXZlciB0aGUgY29sbGVjdGlvblNpemUgdGhlIHBhZ2UgbnVtYmVyIGlzIG9mIG1pbmltdW0gMS5cblx0ICogQGRlZmF1bHRWYWx1ZSAwXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDb2xsZWN0aW9uU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG5cdCAqIEBkZWZhdWx0VmFsdWUgMTBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVBhZ2VTaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuXHQgKi9cblx0QElucHV0KCdhdVNpemUnKSBzaXplOiAnc20nIHwgJ2xnJyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VzRmFjdG9yeScpIHBhZ2VzRmFjdG9yeTogKChwYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBudW1iZXJbXSkgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gdGhlIHBhZ2UgaXMgY2hhbmdlZC5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyB0aGUgbnVtYmVyIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVBhZ2VDaGFuZ2UnKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KHRydWUpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEVsbGlwc2lzOiB0aGlzLnNsb3RFbGxpcHNpc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RGaXJzdDogdGhpcy5zbG90Rmlyc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TGFzdDogdGhpcy5zbG90TGFzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3ROZXh0OiB0aGlzLnNsb3ROZXh0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdE51bWJlckxhYmVsOiB0aGlzLnNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RQYWdlczogdGhpcy5zbG90UGFnZXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90UHJldmlvdXM6IHRoaXMuc2xvdFByZXZpb3VzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
