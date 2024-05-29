const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createPagination } from './pagination';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
const _c1 = ["structure"];
const _c2 = (a0, a1) => ({ state: a0, widget: a1 });
const _c3 = a0 => ({ page: a0 });
const _c4 = (a0, a1) => [a0, a1];
const _c5 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
const _c6 = (a0, a1) => ({ widget: a0, state: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 9);
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
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext(3).state;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(state_r2.activeLabel);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 8)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const widget_r3 = ctx_r0.widget;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4, widget_r3.directives.pageLink, i0.ɵɵpureFunction1(4, _c3, page_r4)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(9, _c5, state_r2, widget_r3, page_r4));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.page === page_r4 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 6)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 13, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵclassProp("active", page_r4 === state_r2.page)("disabled", page_r4 === -1 || state_r2.disabled);
    i0.ɵɵadvance();
    i0.ɵɵconditional(page_r4 === -1 ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 5, "li", 4, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.pages);
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const state_r6 = ctx_r4.state;
    const widget_r7 = ctx_r4.widget;
    i0.ɵɵclassProp("disabled", state_r6.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.pageFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r6.slotFirst)("auSlotProps", i0.ɵɵpureFunction2(5, _c6, widget_r7, state_r6));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const state_r6 = ctx_r4.state;
    const widget_r7 = ctx_r4.widget;
    i0.ɵɵclassProp("disabled", state_r6.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.pagePrev);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r6.slotPrevious)("auSlotProps", i0.ɵɵpureFunction2(5, _c6, widget_r7, state_r6));
} }
function PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const state_r6 = ctx_r4.state;
    const widget_r7 = ctx_r4.widget;
    i0.ɵɵclassProp("disabled", state_r6.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.pageNext);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r6.slotNext)("auSlotProps", i0.ɵɵpureFunction2(5, _c6, widget_r7, state_r6));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const state_r6 = ctx_r4.state;
    const widget_r7 = ctx_r4.widget;
    i0.ɵɵclassProp("disabled", state_r6.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.pageLast);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r6.slotLast)("auSlotProps", i0.ɵɵpureFunction2(5, _c6, widget_r7, state_r6));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 8, "li", 10)(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 8, "li", 10)(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 8)(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 8, "li", 10)(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 8, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r6 = ctx.state;
    const widget_r7 = ctx.widget;
    i0.ɵɵclassMap("au-pagination pagination" + (state_r6.size ? " pagination-" + state_r6.size : "") + " " + state_r6.className);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r6.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r6.directionLinks ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r6.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c6, widget_r7, state_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r6.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r6.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r6.ariaLiveLabelText);
} }
const _c7 = ["auPagination", ""];
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
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["pages", ""], ["structure", ""], ["auPaginationPages", ""], ["auPaginationStructure", ""], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], [1, "page-link", 3, "auUse"], ["aria-hidden", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "visually-hidden"], [1, "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], ["aria-hidden", "true"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, PaginationDefaultSlotsComponent_ng_template_2_Template, 8, 12, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
			@for (page of state.pages; track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page" [class.disabled]="page === -1 || state.disabled">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel }}</span>
					} @else {
						<a class="page-link" [auUse]="[widget.directives.pageLink, {page}]">
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
						<a class="page-link" [auUse]="widget.directives.pageFirst">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a class="page-link" [auUse]="widget.directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="widget.directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="widget.directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">{{ state.ariaLiveLabelText }}</div>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 177 }); })();
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
        } }, inputs: { ariaPageLabel: [0, "auAriaPageLabel", "ariaPageLabel"], ariaLiveLabel: [0, "auAriaLiveLabel", "ariaLiveLabel"], ariaLabel: [0, "auAriaLabel", "ariaLabel"], activeLabel: [0, "auActiveLabel", "activeLabel"], ariaFirstLabel: [0, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [0, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [0, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [0, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [0, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [0, "auPageLink", "pageLink"], slotEllipsis: [0, "auSlotEllipsis", "slotEllipsis"], slotFirst: [0, "auSlotFirst", "slotFirst"], slotPrevious: [0, "auSlotPrevious", "slotPrevious"], slotNext: [0, "auSlotNext", "slotNext"], slotLast: [0, "auSlotLast", "slotLast"], slotPages: [0, "auSlotPages", "slotPages"], slotNumberLabel: [0, "auSlotNumberLabel", "slotNumberLabel"], slotStructure: [0, "auSlotStructure", "slotStructure"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [2, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [2, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [2, "auCollectionSize", "collectionSize", auNumberAttribute], page: [2, "auPage", "page", auNumberAttribute], pageSize: [2, "auPageSize", "pageSize", auNumberAttribute], size: [0, "auSize", "size"], pagesFactory: [0, "auPagesFactory", "pagesFactory"], className: [0, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c7, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], ariaLiveLabel: [{
            type: Input,
            args: ['auAriaLiveLabel']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 206 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFdEosT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7SUFtR3hDLDhCQUFzRDtJQUNyRCxrSUFBMkU7SUFDNUUsaUJBQU07SUFDTiwrQkFBOEI7SUFBQSxZQUE2QjtJQUFBLGlCQUFPOzs7OztJQUZwRCxjQUE2QjtJQUFDLEFBQTlCLDhDQUE2QixnRUFBZ0M7SUFFN0MsZUFBNkI7SUFBN0IsZ0RBQTZCOzs7O0lBS3pELCtCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQU87OztJQUE5QixjQUF1QjtJQUF2QiwwQ0FBdUI7OztJQUh2RCw0QkFBb0U7SUFFbkUsQUFEQSxrSUFBbUcsOEdBQ3hFO0lBRzVCLGlCQUFJOzs7Ozs7SUFMaUIsc0hBQThDO0lBQ3JELGNBQWdDO0lBQUMsQUFBakMsaURBQWdDLHlFQUFxRDtJQUNsRyxjQUVDO0lBRkQsb0RBRUM7OztJQVhKLDZCQUE0RztJQU16RyxBQUxGLGtHQUFtQiw4RkFLVjtJQVFWLGlCQUFLOzs7O0lBZHNELEFBQXJD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QiwwQkFBMEI7a0JBRHpCLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRzlCLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRXhCLHdCQUF3QjtrQkFEdkIsWUFBWTttQkFBQyw0QkFBNEIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNRSxRQUFRO2tCQUFwRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLTyxhQUFhO2tCQUE5RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtHLGNBQWM7a0JBQWhGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBV0MsY0FBYztrQkFBL0UsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFRUixJQUFJO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFNTSxRQUFRO2tCQUFuRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFRekMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBT1UsWUFBWTtrQkFBcEMsS0FBSzttQkFBQyxnQkFBZ0I7WUFTQyxVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLQSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7O2tGQWhNUixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QmFzZVdpZGdldERpcmVjdGl2ZSwgQ29tcG9uZW50VGVtcGxhdGUsIFNsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlLCBhdU51bWJlckF0dHJpYnV0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge1BhZ2luYXRpb25Db250ZXh0LCBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCwgUGFnaW5hdGlvblByb3BzLCBQYWdpbmF0aW9uV2lkZ2V0fSBmcm9tICcuL3BhZ2luYXRpb24nO1xuaW1wb3J0IHtjcmVhdGVQYWdpbmF0aW9ufSBmcm9tICcuL3BhZ2luYXRpb24nO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZWxsaXBzaXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRWxsaXBzaXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25GaXJzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2xhc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICduZXh0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk5leHREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSBwYWdlICdudW1iZXInIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk51bWJlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUHJldmlvdXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdQYWdlcycgdGVtcGxhdGUgZm9yIHRoZSBQYWdlcyBzbG90XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgcGFnaW5hdGlvbiB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVBhZ2luYXRpb25QYWdlcyAjcGFnZXMgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHRAZm9yIChwYWdlIG9mIHN0YXRlLnBhZ2VzOyB0cmFjayBwYWdlOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInBhZ2UgPT09IHN0YXRlLnBhZ2VcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZSA9PT0gLTEgfHwgc3RhdGUuZGlzYWJsZWRcIj5cblx0XHRcdFx0XHRAaWYgKHBhZ2UgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1saW5rIGF1LWVsbGlwc2lzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RFbGxpcHNpc1wiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IHN0YXRlLmFyaWFFbGxpcHNpc0xhYmVsIH19PC9zcGFuPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiW3dpZGdldC5kaXJlY3RpdmVzLnBhZ2VMaW5rLCB7cGFnZX1dXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3ROdW1iZXJMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgZGlzcGxheWVkUGFnZTogcGFnZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRAaWYgKHN0YXRlLnBhZ2UgPT09IHBhZ2UpIHtcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IHN0YXRlLmFjdGl2ZUxhYmVsIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PHVsIFtjbGFzc109XCInYXUtcGFnaW5hdGlvbiBwYWdpbmF0aW9uJyArIChzdGF0ZS5zaXplID8gJyBwYWdpbmF0aW9uLScgKyBzdGF0ZS5zaXplIDogJycpICsgJyAnICsgc3RhdGUuY2xhc3NOYW1lXCI+XG5cdFx0XHRcdEBpZiAoc3RhdGUuYm91bmRhcnlMaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5wYWdlRmlyc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEZpcnN0XCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMucGFnZVByZXZcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFByZXZpb3VzXCIgW2F1U2xvdFByb3BzXT1cInt3aWRnZXQsIHN0YXRlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RQYWdlc1wiIFthdVNsb3RQcm9wc109XCJ7d2lkZ2V0LCBzdGF0ZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMucGFnZU5leHRcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdE5leHRcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMucGFnZUxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdExhc3RcIiBbYXVTbG90UHJvcHNdPVwie3dpZGdldCwgc3RhdGV9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0XHQ8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYXJpYUxpdmVMYWJlbFRleHQgfX08L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgncGFnZXMnLCB7c3RhdGljOiB0cnVlfSkgcGFnZXM6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+O1xufVxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgcGFnZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdwYWdlcycpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUGFnaW5hdGlvbkRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFBhZ2luYXRpb25Qcm9wcz4gPSB7XG5cdHNsb3RTdHJ1Y3R1cmU6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0c2xvdFBhZ2VzOiBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVBhZ2luYXRpb25dJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCcsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIiBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiPjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UGFnaW5hdGlvbldpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFByb3ZpZGUgdGhlIGxhYmVsIGZvciBlYWNoIFwiUGFnZVwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBUaGlzIGlzIHVzZWQgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAcGFyYW0gcHJvY2Vzc1BhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZUNvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQYWdlTGFiZWwnKSBhcmlhUGFnZUxhYmVsOiAoKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgdGhlIGFyaWEtbGl2ZSBlbGVtZW50XG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxpdmVMYWJlbCcpIGFyaWFMaXZlTGFiZWw6ICgoY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIG5hdiBlbGVtZW50LlxuXHQgKlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnUGFnZSBuYXZpZ2F0aW9uJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICcoY3VycmVudCknXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWN0aXZlTGFiZWwnKSBhY3RpdmVMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkZpcnN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgZmlyc3QgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhRmlyc3RMYWJlbCcpIGFyaWFGaXJzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiUHJldmlvdXNcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0FjdGlvbiBsaW5rIGZvciBwcmV2aW91cyBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQcmV2aW91c0xhYmVsJykgYXJpYVByZXZpb3VzTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBAZGVmYXVsdFZhbHVlICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKi9cblx0QElucHV0KCdhdUFyaWFOZXh0TGFiZWwnKSBhcmlhTmV4dExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTGFzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQGRlZmF1bHRWYWx1ZSAnQWN0aW9uIGxpbmsgZm9yIGxhc3QgcGFnZSdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFzdExhYmVsJykgYXJpYUxhc3RMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkVsbGlwc2lzXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBkZWZhdWx0VmFsdWUgJ0VsbGlwc2lzIHBhZ2UgZWxlbWVudCdcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhRWxsaXBzaXNMYWJlbCcpIGFyaWFFbGxpcHNpc0xhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgZnVuY3Rpb24gcHJvdmlkaW5nIHRoZSBocmVmIGZvciBhIFwiUGFnZVwiIHBhZ2UgYW5jaG9yLFxuXHQgKiBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZU51bWJlciAtIFRoZSBpbmRleCB0byB1c2UgaW4gdGhlIGxpbmtcblx0ICpcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlTGluaycpIHBhZ2VMaW5rOiAoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVBhZ2luYXRpb24sXG5cdFx0d2lkZ2V0TmFtZTogJ3BhZ2luYXRpb24nLFxuXHRcdGRlZmF1bHRDb25maWcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpLFxuXHRcdH0sXG5cdH0pO1xuXG5cdEBJbnB1dCgnYXVTbG90RWxsaXBzaXMnKSBzbG90RWxsaXBzaXM6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEZpcnN0Jykgc2xvdEZpcnN0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGaXJzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RQcmV2aW91cycpIHNsb3RQcmV2aW91czogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UHJldmlvdXNGcm9tQ29udGVudDogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90TmV4dCcpIHNsb3ROZXh0OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE5leHRGcm9tQ29udGVudDogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RMYXN0Jykgc2xvdExhc3Q6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TGFzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFBhZ2VzJykgc2xvdFBhZ2VzOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQYWdlc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3ROdW1iZXJMYWJlbCcpIHNsb3ROdW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Qm91bmRhcnlMaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYm91bmRhcnlMaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpcmVjdGlvbkxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB5b3VyIHBhZ2luYXRlZCBjb2xsZWN0aW9uLlxuXHQgKlxuXHQgKiBOb3RlLCB0aGF0IHRoaXMgaXMgbm90IHRoZSBudW1iZXIgb2YgcGFnZXMuIFBhZ2UgbnVtYmVycyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBiYXNlZCBvblxuXHQgKiBgY29sbGVjdGlvblNpemVgIGFuZCBgcGFnZVNpemVgLiBFeC4gaWYgeW91IGhhdmUgMTAwIGl0ZW1zIGluIHlvdXIgY29sbGVjdGlvbiBhbmQgZGlzcGxheWluZyAyMCBpdGVtcyBwZXIgcGFnZSxcblx0ICogeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG5cdCAqIFdoYXRldmVyIHRoZSBjb2xsZWN0aW9uU2l6ZSB0aGUgcGFnZSBudW1iZXIgaXMgb2YgbWluaW11bSAxLlxuXHQgKiBAZGVmYXVsdFZhbHVlIDBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNvbGxlY3Rpb25TaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIGNvbGxlY3Rpb25TaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZSAxXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQGRlZmF1bHRWYWx1ZSAxMFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZVNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHBhZ2luYXRpb24gZGlzcGxheSBzaXplLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgY3VycmVudGx5IHN1cHBvcnRzIHNtYWxsIGFuZCBsYXJnZSBzaXplcy5cblx0ICogQGRlZmF1bHRWYWx1ZSBudWxsXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2l6ZScpIHNpemU6ICdzbScgfCAnbGcnIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogcGFnZXNGYWN0b3J5IHJldHVybnMgYSBmdW5jdGlvbiBjb21wdXRpbmcgdGhlIGFycmF5IG9mIHBhZ2VzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBhcyBudW1iZXIgKC0xIGFyZSB0cmVhdGVkIGFzIGVsbGlwc2lzKS5cblx0ICogVXNlIFBhZ2Ugc2xvdCB0byBjdXN0b21pemUgdGhlIHBhZ2VzIHZpZXcgYW5kIG5vdCB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNGYWN0b3J5JykgcGFnZXNGYWN0b3J5OiAoKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICovXG5cdEBPdXRwdXQoJ2F1UGFnZUNoYW5nZScpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RFbGxpcHNpczogdGhpcy5zbG90RWxsaXBzaXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rmlyc3Q6IHRoaXMuc2xvdEZpcnN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdExhc3Q6IHRoaXMuc2xvdExhc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90TmV4dDogdGhpcy5zbG90TmV4dEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3ROdW1iZXJMYWJlbDogdGhpcy5zbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90UGFnZXM6IHRoaXMuc2xvdFBhZ2VzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFByZXZpb3VzOiB0aGlzLnNsb3RQcmV2aW91c0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
