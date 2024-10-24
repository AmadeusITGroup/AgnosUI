const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createPagination } from './pagination.gen';
import * as i0 from "@angular/core";
const _c0 = ["pages"];
const _c1 = ["structure"];
const _c2 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
const _c3 = a0 => ({ page: a0 });
const _c4 = (a0, a1) => [a0, a1];
const _c5 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, displayedPage: a3 });
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
    const api_r3 = ctx_r0.api;
    const directives_r4 = ctx_r0.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.ellipsisLabel())("auSlotProps", i0.ɵɵpureFunction3(3, _c2, state_r2, api_r3, directives_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r2.ariaEllipsisLabel());
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext(3).state;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(state_r2.activeLabel());
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 8)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const api_r3 = ctx_r0.api;
    const directives_r4 = ctx_r0.directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4, directives_r4.pageLink, i0.ɵɵpureFunction1(4, _c3, page_r5)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.numberLabel())("auSlotProps", i0.ɵɵpureFunction4(9, _c5, state_r2, api_r3, directives_r4, page_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.page() === page_r5 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 7)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 14, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵclassProp("active", page_r5 === state_r2.page())("disabled", page_r5 === -1 || state_r2.disabled());
    i0.ɵɵadvance();
    i0.ɵɵconditional(page_r5 === -1 ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 5, "li", 4, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.pages());
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const state_r7 = ctx_r5.state;
    const api_r8 = ctx_r5.api;
    const directives_r9 = ctx_r5.directives;
    i0.ɵɵclassProp("disabled", state_r7.previousDisabled());
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.firstPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const state_r7 = ctx_r5.state;
    const api_r8 = ctx_r5.api;
    const directives_r9 = ctx_r5.directives;
    i0.ɵɵclassProp("disabled", state_r7.previousDisabled());
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pagePrev);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.previousPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
} }
function PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const state_r7 = ctx_r5.state;
    const api_r8 = ctx_r5.api;
    const directives_r9 = ctx_r5.directives;
    i0.ɵɵclassProp("disabled", state_r7.nextDisabled());
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageNext);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.nextPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template(rf, ctx) { }
function PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6)(2, "span", 12);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const state_r7 = ctx_r5.state;
    const api_r8 = ctx_r5.api;
    const directives_r9 = ctx_r5.directives;
    i0.ɵɵclassProp("disabled", state_r7.nextDisabled());
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageLast);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.lastPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 9, "li", 10)(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 9, "li", 10)(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 8)(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 9, "li", 10)(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 9, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = ctx.state;
    const api_r8 = ctx.api;
    const directives_r9 = ctx.directives;
    i0.ɵɵclassMap("au-pagination pagination" + (state_r7.size() ? " pagination-" + state_r7.size() : "") + " " + state_r7.className());
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.boundaryLinks() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.directionLinks() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r7.pagesDisplay())("auSlotProps", i0.ɵɵpureFunction3(9, _c2, state_r7, api_r8, directives_r9));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.directionLinks() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.boundaryLinks() ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r7.ariaLiveLabelText());
} }
const _c6 = ["auPagination", ""];
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
    static { this.ɵfac = function PaginationEllipsisDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationEllipsisDirective)(); }; }
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
    static { this.ɵfac = function PaginationFirstDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationFirstDirective)(); }; }
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
    static { this.ɵfac = function PaginationLastDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationLastDirective)(); }; }
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
    static { this.ɵfac = function PaginationNextDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationNextDirective)(); }; }
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
    static { this.ɵfac = function PaginationNumberDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationNumberDirective)(); }; }
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
    static { this.ɵfac = function PaginationPreviousDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationPreviousDirective)(); }; }
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
    static { this.ɵfac = function PaginationPagesDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationPagesDirective)(); }; }
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
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationStructureDirective, selectors: [["ng-template", "auPaginationStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationStructure]', standalone: true }]
    }], null, null); })();
class PaginationDefaultSlotsComponent {
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pages = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["pages", ""], ["structure", ""], ["auPaginationPages", ""], ["auPaginationStructure", ""], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], [1, "page-link", 3, "auUse"], ["aria-hidden", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "visually-hidden"], [1, "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], ["aria-hidden", "true"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, PaginationDefaultSlotsComponent_ng_template_2_Template, 8, 13, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template auPaginationPages #pages let-state="state" let-api="api" let-directives="directives">
			@for (page of state.pages(); track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page()" [class.disabled]="page === -1 || state.disabled()">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.ellipsisLabel()" [auSlotProps]="{state, api, directives}"></ng-template>
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel() }}</span>
					} @else {
						<a class="page-link" [auUse]="[directives.pageLink, {page}]">
							<ng-template [auSlot]="state.numberLabel()" [auSlotProps]="{state, api, directives, displayedPage: page}"></ng-template>
							@if (state.page() === page) {
								<span class="visually-hidden">{{ state.activeLabel() }}</span>
							}
						</a>
					}
				</li>
			}
		</ng-template>
		<ng-template auPaginationStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ul [class]="'au-pagination pagination' + (state.size() ? ' pagination-' + state.size() : '') + ' ' + state.className()">
				@if (state.boundaryLinks()) {
					<li class="page-item" [class.disabled]="state.previousDisabled()">
						<a class="page-link" [auUse]="directives.pageFirst">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.firstPageLabel()" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.previousDisabled()">
						<a class="page-link" [auUse]="directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.previousPageLabel()" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.pagesDisplay()" [auSlotProps]="{state, api, directives}"></ng-template>
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.nextPageLabel()" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.lastPageLabel()" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">{{ state.ariaLiveLabelText() }}</div>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 176 }); })();
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
export const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');
export class PaginationComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createPagination,
            widgetName: 'pagination',
            defaultConfig: {
                structure: paginationDefaultSlotStructure,
                pagesDisplay: paginationDefaultSlotPages,
            },
            events: {
                onPageChange: (page) => this.pageChange.emit(page),
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent?.templateRef,
                ellipsisLabel: this.slotEllipsisFromContent?.templateRef,
                firstPageLabel: this.slotFirstFromContent?.templateRef,
                previousPageLabel: this.slotPreviousFromContent?.templateRef,
                nextPageLabel: this.slotNextFromContent?.templateRef,
                lastPageLabel: this.slotLastFromContent?.templateRef,
                pagesDisplay: this.slotPagesFromContent?.templateRef,
                numberLabel: this.slotNumberLabelFromContent?.templateRef,
            }),
        }));
        /**
         * An event fired when the page is changed.
         *
         * Event payload is the number of the newly selected page.
         *
         * Page numbers start with \`1\`.
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.pageChange = new EventEmitter();
    }
    static { this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationComponent)(); }; }
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
            i0.ɵɵattribute("aria-label", ctx.state.ariaLabel());
        } }, inputs: { ariaPageLabel: [0, "auAriaPageLabel", "ariaPageLabel"], ariaLiveLabel: [0, "auAriaLiveLabel", "ariaLiveLabel"], ariaLabel: [0, "auAriaLabel", "ariaLabel"], activeLabel: [0, "auActiveLabel", "activeLabel"], ariaFirstLabel: [0, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [0, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [0, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [0, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [0, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [0, "auPageLink", "pageLink"], ellipsisLabel: [0, "auEllipsisLabel", "ellipsisLabel"], firstPageLabel: [0, "auFirstPageLabel", "firstPageLabel"], previousPageLabel: [0, "auPreviousPageLabel", "previousPageLabel"], nextPageLabel: [0, "auNextPageLabel", "nextPageLabel"], lastPageLabel: [0, "auLastPageLabel", "lastPageLabel"], pagesDisplay: [0, "auPagesDisplay", "pagesDisplay"], numberLabel: [0, "auNumberLabel", "numberLabel"], structure: [0, "auStructure", "structure"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [2, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [2, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [2, "auCollectionSize", "collectionSize", auNumberAttribute], page: [2, "auPage", "page", auNumberAttribute], pageSize: [2, "auPageSize", "pageSize", auNumberAttribute], size: [0, "auSize", "size"], pagesFactory: [0, "auPagesFactory", "pagesFactory"], className: [0, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c6, decls: 1, vars: 6, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(2, _c2, ctx.state, ctx.api, ctx.directives))("auSlot", ctx.state.structure());
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
                    '[attr.aria-label]': 'state.ariaLabel()',
                },
                encapsulation: ViewEncapsulation.None,
                template: \`<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()"></ng-template>\`,
            }]
    }], () => [], { ariaPageLabel: [{
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
        }], ellipsisLabel: [{
            type: Input,
            args: ['auEllipsisLabel']
        }], slotEllipsisFromContent: [{
            type: ContentChild,
            args: [PaginationEllipsisDirective, { static: false }]
        }], firstPageLabel: [{
            type: Input,
            args: ['auFirstPageLabel']
        }], slotFirstFromContent: [{
            type: ContentChild,
            args: [PaginationFirstDirective, { static: false }]
        }], previousPageLabel: [{
            type: Input,
            args: ['auPreviousPageLabel']
        }], slotPreviousFromContent: [{
            type: ContentChild,
            args: [PaginationPreviousDirective, { static: false }]
        }], nextPageLabel: [{
            type: Input,
            args: ['auNextPageLabel']
        }], slotNextFromContent: [{
            type: ContentChild,
            args: [PaginationNextDirective, { static: false }]
        }], lastPageLabel: [{
            type: Input,
            args: ['auLastPageLabel']
        }], slotLastFromContent: [{
            type: ContentChild,
            args: [PaginationLastDirective, { static: false }]
        }], pagesDisplay: [{
            type: Input,
            args: ['auPagesDisplay']
        }], slotPagesFromContent: [{
            type: ContentChild,
            args: [PaginationPagesDirective, { static: false }]
        }], numberLabel: [{
            type: Input,
            args: ['auNumberLabel']
        }], slotNumberLabelFromContent: [{
            type: ContentChild,
            args: [PaginationNumberDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 200 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEosT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7O0lBbUc1Qyw4QkFBc0Q7SUFDckQsa0lBQXVGO0lBQ3hGLGlCQUFNO0lBQ04sK0JBQThCO0lBQUEsWUFBK0I7SUFBQSxpQkFBTzs7Ozs7O0lBRnRELGNBQWdDO0lBQUMsQUFBakMsaURBQWdDLDRFQUF5QztJQUV6RCxlQUErQjtJQUEvQixrREFBK0I7Ozs7SUFLM0QsK0JBQThCO0lBQUEsWUFBeUI7SUFBQSxpQkFBTzs7O0lBQWhDLGNBQXlCO0lBQXpCLDRDQUF5Qjs7O0lBSHpELDRCQUE2RDtJQUU1RCxBQURBLGtJQUEwRyw4R0FDN0U7SUFHOUIsaUJBQUk7Ozs7Ozs7SUFMaUIsK0dBQXVDO0lBQzlDLGNBQThCO0lBQUMsQUFBL0IsK0NBQThCLHFGQUE4RDtJQUN6RyxjQUVDO0lBRkQsc0RBRUM7OztJQVhKLDZCQUFnSDtJQU03RyxBQUxGLGtHQUFtQiw4RkFLVjtJQVFWLGlCQUFLOzs7O0lBZHdELEFB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WUFBWTttQkFBQyx5QkFBeUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFVbEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBRXBCLHdCQUF3QjtrQkFEdkIsWUFBWTttQkFBQyw0QkFBNEIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFRRSxRQUFRO2tCQUFwRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPTyxhQUFhO2tCQUE5RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9HLGNBQWM7a0JBQWhGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBY0MsY0FBYztrQkFBL0UsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFTUixJQUFJO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFRTSxRQUFRO2tCQUFuRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFTekMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBb0JVLFlBQVk7a0JBQXBDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBYUMsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBT0EsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhOztrRkF2VFIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge0Jhc2VXaWRnZXREaXJlY3RpdmUsIENvbXBvbmVudFRlbXBsYXRlLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIGF1Qm9vbGVhbkF0dHJpYnV0ZSwgYXVOdW1iZXJBdHRyaWJ1dGV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtQYWdpbmF0aW9uQ29udGV4dCwgUGFnaW5hdGlvbk51bWJlckNvbnRleHQsIFBhZ2luYXRpb25XaWRnZXR9IGZyb20gJy4vcGFnaW5hdGlvbi5nZW4nO1xuaW1wb3J0IHtjcmVhdGVQYWdpbmF0aW9ufSBmcm9tICcuL3BhZ2luYXRpb24uZ2VuJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2VsbGlwc2lzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkVsbGlwc2lzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZmlyc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRmlyc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdsYXN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkxhc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbmV4dCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OZXh0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgcGFnZSAnbnVtYmVyJyB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OdW1iZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ3ByZXZpb3VzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblByZXZpb3VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnUGFnZXMnIHRlbXBsYXRlIGZvciB0aGUgUGFnZXMgc2xvdFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblBhZ2VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIHBhZ2luYXRpb24gd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblBhZ2VzICNwYWdlcyBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1hcGk9XCJhcGlcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIj5cblx0XHRcdEBmb3IgKHBhZ2Ugb2Ygc3RhdGUucGFnZXMoKTsgdHJhY2sgcGFnZTsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJwYWdlID09PSBzdGF0ZS5wYWdlKClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZSA9PT0gLTEgfHwgc3RhdGUuZGlzYWJsZWQoKVwiPlxuXHRcdFx0XHRcdEBpZiAocGFnZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWxpbmsgYXUtZWxsaXBzaXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuZWxsaXBzaXNMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYXJpYUVsbGlwc2lzTGFiZWwoKSB9fTwvc3Bhbj5cblx0XHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cIltkaXJlY3RpdmVzLnBhZ2VMaW5rLCB7cGFnZX1dXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLm51bWJlckxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGRpc3BsYXllZFBhZ2U6IHBhZ2V9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0QGlmIChzdGF0ZS5wYWdlKCkgPT09IHBhZ2UpIHtcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IHN0YXRlLmFjdGl2ZUxhYmVsKCkgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0XHQ8dWwgW2NsYXNzXT1cIidhdS1wYWdpbmF0aW9uIHBhZ2luYXRpb24nICsgKHN0YXRlLnNpemUoKSA/ICcgcGFnaW5hdGlvbi0nICsgc3RhdGUuc2l6ZSgpIDogJycpICsgJyAnICsgc3RhdGUuY2xhc3NOYW1lKClcIj5cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKCkpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZCgpXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIFthdVVzZV09XCJkaXJlY3RpdmVzLnBhZ2VGaXJzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5maXJzdFBhZ2VMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MoKSkge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkKClcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMucGFnZVByZXZcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUucHJldmlvdXNQYWdlTGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5wYWdlc0Rpc3BsYXkoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKCkpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkKClcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMucGFnZU5leHRcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubmV4dFBhZ2VMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuYm91bmRhcnlMaW5rcygpKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZCgpXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIFthdVVzZV09XCJkaXJlY3RpdmVzLnBhZ2VMYXN0XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmxhc3RQYWdlTGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hcmlhTGl2ZUxhYmVsVGV4dCgpIH19PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgncGFnZXMnLCB7c3RhdGljOiB0cnVlfSkgcGFnZXMhOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD47XG59XG4vKipcbiAqIFRoZSBkZWZhdWx0IHNsb3QgZm9yIHRoZSBwYWdlc1xuICovXG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUGFnaW5hdGlvbkRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3BhZ2VzJyk7XG4vKipcbiAqIFRoZSBkZWZhdWx0IHNsb3QgZm9yIHRoZSBzdHJ1Y3R1cmVcbiAqL1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25EZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVBhZ2luYXRpb25dJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZS5hcmlhTGFiZWwoKScsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIiBbYXVTbG90XT1cInN0YXRlLnN0cnVjdHVyZSgpXCI+PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxQYWdpbmF0aW9uV2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgZWFjaCBcIlBhZ2VcIiBwYWdlIGJ1dHRvbi5cblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIHByb2Nlc3NQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAocHJvY2Vzc1BhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IGBQYWdlICR7cHJvY2Vzc1BhZ2V9IG9mICR7cGFnZUNvdW50fWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVBhZ2VMYWJlbCcpIGFyaWFQYWdlTGFiZWw6ICgocHJvY2Vzc1BhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFByb3ZpZGUgdGhlIGxhYmVsIGZvciB0aGUgYXJpYS1saXZlIGVsZW1lbnRcblx0ICogVGhpcyBpcyB1c2VkIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogQHBhcmFtIGN1cnJlbnRQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoY3VycmVudFBhZ2U6IG51bWJlcikgPT4gYEN1cnJlbnQgcGFnZSBpcyAke2N1cnJlbnRQYWdlfWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxpdmVMYWJlbCcpIGFyaWFMaXZlTGFiZWw6ICgoY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIG5hdiBlbGVtZW50LlxuXHQgKlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1BhZ2UgbmF2aWdhdGlvbidgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiYWN0aXZlXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJyhjdXJyZW50KSdcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWN0aXZlTGFiZWwnKSBhY3RpdmVMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkZpcnN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgZmlyc3QgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUZpcnN0TGFiZWwnKSBhcmlhRmlyc3RMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIlByZXZpb3VzXCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgcHJldmlvdXMgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVByZXZpb3VzTGFiZWwnKSBhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIk5leHRcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBuZXh0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFOZXh0TGFiZWwnKSBhcmlhTmV4dExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTGFzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGxhc3QgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhc3RMYWJlbCcpIGFyaWFMYXN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJFbGxpcHNpc1wiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnRWxsaXBzaXMgcGFnZSBlbGVtZW50J2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhRWxsaXBzaXNMYWJlbCcpIGFyaWFFbGxpcHNpc0xhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgZnVuY3Rpb24gcHJvdmlkaW5nIHRoZSBocmVmIGZvciBhIFwiUGFnZVwiIHBhZ2UgYW5jaG9yLFxuXHQgKiBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZU51bWJlciAtIFRoZSBpbmRleCB0byB1c2UgaW4gdGhlIGxpbmtcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoX3BhZ2U6IG51bWJlcikgPT4gUEFHRV9MSU5LX0RFRkFVTFRcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZUxpbmsnKSBwYWdlTGluazogKChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBlbGxpcHNpcyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oCmJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVFbGxpcHNpc0xhYmVsJykgZWxsaXBzaXNMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RWxsaXBzaXNGcm9tQ29udGVudDogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZmlyc3Qgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ8KrJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVGaXJzdFBhZ2VMYWJlbCcpIGZpcnN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGaXJzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwcmV2aW91cyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC5J2Bcblx0ICovXG5cdEBJbnB1dCgnYXVQcmV2aW91c1BhZ2VMYWJlbCcpIHByZXZpb3VzUGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQcmV2aW91c0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBuZXh0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfigLonYFxuXHQgKi9cblx0QElucHV0KCdhdU5leHRQYWdlTGFiZWwnKSBuZXh0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE5leHRGcm9tQ29udGVudDogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBsYXN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCuydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TGFzdFBhZ2VMYWJlbCcpIGxhc3RQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TGFzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHBhZ2VzIHNsb3Rcblx0ICogVG8gdXNlIHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlld1xuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNEaXNwbGF5JykgcGFnZXNEaXNwbGF5OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQYWdlc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBudW1iZXIgc2xvdFxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogQHBhcmFtIGRpc3BsYXllZFBhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7ZGlzcGxheWVkUGFnZX06IFBhZ2luYXRpb25OdW1iZXJDb250ZXh0KSA9PiBgJHtkaXNwbGF5ZWRQYWdlfWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TnVtYmVyTGFiZWwnKSBudW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZWxsaXBzaXNMYWJlbHxlbGxpcHNpc0xhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5maXJzdFBhZ2VMYWJlbHxmaXJzdFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucHJldmlvdXNQYWdlTGFiZWx8cHJldmlvdXNQYWdlTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLm5leHRQYWdlTGFiZWx8bmV4dFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubGFzdFBhZ2VMYWJlbHxsYXN0UGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5wYWdlc0Rpc3BsYXl8cGFnZXNEaXNwbGF5fSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5udW1iZXJMYWJlbHxudW1iZXJMYWJlbH0sXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVCb3VuZGFyeUxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBib3VuZGFyeUxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlyZWN0aW9uTGlua3MnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuXG5cdCAqXG5cdCAqIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLCB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICpcblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDb2xsZWN0aW9uU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDFgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQHJlbWFya3MgbWluIHZhbHVlIGlzIDFcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgcGFnaW5hdGlvbiBkaXNwbGF5IHNpemUuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBudWxsYFxuXHQgKi9cblx0QElucHV0KCdhdVNpemUnKSBzaXplOiAnc20nIHwgJ2xnJyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKiBAcGFyYW0gcGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiB7XG5cdCAqIFx0XHRjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcblx0ICogXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XG5cdCAqIFx0XHRcdHBhZ2VzLnB1c2goaSk7XG5cdCAqIFx0XHR9XG5cdCAqIFx0XHRyZXR1cm4gcGFnZXM7XG5cdCAqIFx0fVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlc0ZhY3RvcnknKSBwYWdlc0ZhY3Rvcnk6ICgocGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gbnVtYmVyW10pIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG51bWJlciBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVQYWdlQ2hhbmdlJykgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZVBhZ2luYXRpb24sXG5cdFx0XHRcdHdpZGdldE5hbWU6ICdwYWdpbmF0aW9uJyxcblx0XHRcdFx0ZGVmYXVsdENvbmZpZzoge1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogcGFnaW5hdGlvbkRlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHRcdHBhZ2VzRGlzcGxheTogcGFnaW5hdGlvbkRlZmF1bHRTbG90UGFnZXMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNsb3RUZW1wbGF0ZXM6ICgpID0+ICh7XG5cdFx0XHRcdFx0c3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0ZWxsaXBzaXNMYWJlbDogdGhpcy5zbG90RWxsaXBzaXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0Zmlyc3RQYWdlTGFiZWw6IHRoaXMuc2xvdEZpcnN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdHByZXZpb3VzUGFnZUxhYmVsOiB0aGlzLnNsb3RQcmV2aW91c0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRuZXh0UGFnZUxhYmVsOiB0aGlzLnNsb3ROZXh0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGxhc3RQYWdlTGFiZWw6IHRoaXMuc2xvdExhc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0cGFnZXNEaXNwbGF5OiB0aGlzLnNsb3RQYWdlc0Zyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRudW1iZXJMYWJlbDogdGhpcy5zbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdH0pLFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxufVxuIl19`;export{t as default};
