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
    i0.ɵɵproperty("auSlot", state_r2.ellipsisLabel)("auSlotProps", i0.ɵɵpureFunction3(3, _c2, state_r2, api_r3, directives_r4));
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
    const page_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const api_r3 = ctx_r0.api;
    const directives_r4 = ctx_r0.directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4, directives_r4.pageLink, i0.ɵɵpureFunction1(4, _c3, page_r5)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.numberLabel)("auSlotProps", i0.ɵɵpureFunction4(9, _c5, state_r2, api_r3, directives_r4, page_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.page === page_r5 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 7)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 14, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵclassProp("active", page_r5 === state_r2.page)("disabled", page_r5 === -1 || state_r2.disabled);
    i0.ɵɵadvance();
    i0.ɵɵconditional(page_r5 === -1 ? 1 : 2);
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
    const ctx_r5 = i0.ɵɵnextContext();
    const state_r7 = ctx_r5.state;
    const api_r8 = ctx_r5.api;
    const directives_r9 = ctx_r5.directives;
    i0.ɵɵclassProp("disabled", state_r7.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.firstPageLabel)("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
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
    i0.ɵɵclassProp("disabled", state_r7.previousDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pagePrev);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.previousPageLabel)("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
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
    i0.ɵɵclassProp("disabled", state_r7.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageNext);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.nextPageLabel)("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
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
    i0.ɵɵclassProp("disabled", state_r7.nextDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r9.pageLast);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r7.lastPageLabel)("auSlotProps", i0.ɵɵpureFunction3(5, _c2, state_r7, api_r8, directives_r9));
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
    i0.ɵɵclassMap("au-pagination pagination" + (state_r7.size ? " pagination-" + state_r7.size : "") + " " + state_r7.className);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.directionLinks ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r7.pagesDisplay)("auSlotProps", i0.ɵɵpureFunction3(9, _c2, state_r7, api_r8, directives_r9));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r7.ariaLiveLabelText);
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
export class PaginationDefaultSlotsComponent {
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
			@for (page of state.pages; track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page" [class.disabled]="page === -1 || state.disabled">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.ellipsisLabel" [auSlotProps]="{state, api, directives}"></ng-template>
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel }}</span>
					} @else {
						<a class="page-link" [auUse]="[directives.pageLink, {page}]">
							<ng-template [auSlot]="state.numberLabel" [auSlotProps]="{state, api, directives, displayedPage: page}"></ng-template>
							@if (state.page === page) {
								<span class="visually-hidden">{{ state.activeLabel }}</span>
							}
						</a>
					}
				</li>
			}
		</ng-template>
		<ng-template auPaginationStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a class="page-link" [auUse]="directives.pageFirst">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.firstPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.previousDisabled">
						<a class="page-link" [auUse]="directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.previousPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.pagesDisplay" [auSlotProps]="{state, api, directives}"></ng-template>
				@if (state.directionLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.nextPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks) {
					<li class="page-item" [class.disabled]="state.nextDisabled">
						<a class="page-link" [auUse]="directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.lastPageLabel" [auSlotProps]="{state, api, directives}"></ng-template>
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
    structure: paginationDefaultSlotStructure,
    pagesDisplay: paginationDefaultSlotPages,
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
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.pageChange = new EventEmitter();
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            structure: this.slotStructureFromContent?.templateRef,
            ellipsisLabel: this.slotEllipsisFromContent?.templateRef,
            firstPageLabel: this.slotFirstFromContent?.templateRef,
            previousPageLabel: this.slotPreviousFromContent?.templateRef,
            nextPageLabel: this.slotNextFromContent?.templateRef,
            lastPageLabel: this.slotLastFromContent?.templateRef,
            pagesDisplay: this.slotPagesFromContent?.templateRef,
            numberLabel: this.slotNumberLabelFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵPaginationComponent_BaseFactory; return function PaginationComponent_Factory(__ngFactoryType__) { return (ɵPaginationComponent_BaseFactory || (ɵPaginationComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PaginationComponent)))(__ngFactoryType__ || PaginationComponent); }; })(); }
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
        } }, inputs: { ariaPageLabel: [0, "auAriaPageLabel", "ariaPageLabel"], ariaLiveLabel: [0, "auAriaLiveLabel", "ariaLiveLabel"], ariaLabel: [0, "auAriaLabel", "ariaLabel"], activeLabel: [0, "auActiveLabel", "activeLabel"], ariaFirstLabel: [0, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [0, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [0, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [0, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [0, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [0, "auPageLink", "pageLink"], ellipsisLabel: [0, "auEllipsisLabel", "ellipsisLabel"], firstPageLabel: [0, "auFirstPageLabel", "firstPageLabel"], previousPageLabel: [0, "auPreviousPageLabel", "previousPageLabel"], nextPageLabel: [0, "auNextPageLabel", "nextPageLabel"], lastPageLabel: [0, "auLastPageLabel", "lastPageLabel"], pagesDisplay: [0, "auPagesDisplay", "pagesDisplay"], numberLabel: [0, "auNumberLabel", "numberLabel"], structure: [0, "auStructure", "structure"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [2, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [2, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [2, "auCollectionSize", "collectionSize", auNumberAttribute], page: [2, "auPage", "page", auNumberAttribute], pageSize: [2, "auPageSize", "pageSize", auNumberAttribute], size: [0, "auSize", "size"], pagesFactory: [0, "auPagesFactory", "pagesFactory"], className: [0, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c6, decls: 1, vars: 6, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(2, _c2, ctx.state(), ctx.api, ctx.directives))("auSlot", ctx.state().structure);
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
                template: \`<ng-template [auSlotProps]="{state: state(), api, directives}" [auSlot]="state().structure"></ng-template>\`,
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 206 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFdEosT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7O0lBbUc1Qyw4QkFBc0Q7SUFDckQsa0lBQXFGO0lBQ3RGLGlCQUFNO0lBQ04sK0JBQThCO0lBQUEsWUFBNkI7SUFBQSxpQkFBTzs7Ozs7O0lBRnBELGNBQThCO0lBQUMsQUFBL0IsK0NBQThCLDRFQUF5QztJQUV2RCxlQUE2QjtJQUE3QixnREFBNkI7Ozs7SUFLekQsK0JBQThCO0lBQUEsWUFBdUI7SUFBQSxpQkFBTzs7O0lBQTlCLGNBQXVCO0lBQXZCLDBDQUF1Qjs7O0lBSHZELDRCQUE2RDtJQUU1RCxBQURBLGtJQUF3Ryw4R0FDN0U7SUFHNUIsaUJBQUk7Ozs7Ozs7SUFMaUIsK0dBQXVDO0lBQzlDLGNBQTRCO0lBQUMsQUFBN0IsNkNBQTRCLHFGQUE4RDtJQUN2RyxjQUVDO0lBRkQsb0RBRUM7OztJQVhKLDZCQUE0RztJQU16RyxBQUxGLGtHQUFtQiw4RkFLVjtJQVFWLGlCQUFLOzs7O0lBZHNELEFB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QWxDLEtBQUs7bUJBQUMsZUFBZTtZQUV0QiwwQkFBMEI7a0JBRHpCLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBVWxDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUVwQix3QkFBd0I7a0JBRHZCLFlBQVk7bUJBQUMsNEJBQTRCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBUUUsUUFBUTtrQkFBcEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT08sYUFBYTtrQkFBOUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPRyxjQUFjO2tCQUFoRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQWNDLGNBQWM7a0JBQS9FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBU1IsSUFBSTtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBUU0sUUFBUTtrQkFBbkUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBU3pDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQW9CVSxZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGdCQUFnQjtZQWFDLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQU9BLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTs7a0ZBaFVSLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0RGlyZWN0aXZlLCBDb21wb25lbnRUZW1wbGF0ZSwgU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlLCBhdUJvb2xlYW5BdHRyaWJ1dGUsIGF1TnVtYmVyQXR0cmlidXRlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7UGFnaW5hdGlvbkNvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0LCBQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25XaWRnZXR9IGZyb20gJy4vcGFnaW5hdGlvbi5nZW4nO1xuaW1wb3J0IHtjcmVhdGVQYWdpbmF0aW9ufSBmcm9tICcuL3BhZ2luYXRpb24uZ2VuJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2VsbGlwc2lzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkVsbGlwc2lzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZmlyc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRmlyc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdsYXN0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbkxhc3RdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnbmV4dCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OZXh0XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgcGFnZSAnbnVtYmVyJyB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25OdW1iZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ3ByZXZpb3VzJyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblByZXZpb3VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnUGFnZXMnIHRlbXBsYXRlIGZvciB0aGUgUGFnZXMgc2xvdFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblBhZ2VzXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIHBhZ2luYXRpb24gd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvblN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UGFnaW5hdGlvblBhZ2VzICNwYWdlcyBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1hcGk9XCJhcGlcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIj5cblx0XHRcdEBmb3IgKHBhZ2Ugb2Ygc3RhdGUucGFnZXM7IHRyYWNrIHBhZ2U7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5hY3RpdmVdPVwicGFnZSA9PT0gc3RhdGUucGFnZVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlID09PSAtMSB8fCBzdGF0ZS5kaXNhYmxlZFwiPlxuXHRcdFx0XHRcdEBpZiAocGFnZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWxpbmsgYXUtZWxsaXBzaXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuZWxsaXBzaXNMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IHN0YXRlLmFyaWFFbGxpcHNpc0xhYmVsIH19PC9zcGFuPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiW2RpcmVjdGl2ZXMucGFnZUxpbmssIHtwYWdlfV1cIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubnVtYmVyTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGRpc3BsYXllZFBhZ2U6IHBhZ2V9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0QGlmIChzdGF0ZS5wYWdlID09PSBwYWdlKSB7XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hY3RpdmVMYWJlbCB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdVBhZ2luYXRpb25TdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1hcGk9XCJhcGlcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIj5cblx0XHRcdDx1bCBbY2xhc3NdPVwiJ2F1LXBhZ2luYXRpb24gcGFnaW5hdGlvbicgKyAoc3RhdGUuc2l6ZSA/ICcgcGFnaW5hdGlvbi0nICsgc3RhdGUuc2l6ZSA6ICcnKSArICcgJyArIHN0YXRlLmNsYXNzTmFtZVwiPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUucHJldmlvdXNEaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5wYWdlRmlyc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuZmlyc3RQYWdlTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGlmIChzdGF0ZS5kaXJlY3Rpb25MaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIFthdVVzZV09XCJkaXJlY3RpdmVzLnBhZ2VQcmV2XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnByZXZpb3VzUGFnZUxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnBhZ2VzRGlzcGxheVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLm5leHREaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5wYWdlTmV4dFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5uZXh0UGFnZUxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpZiAoc3RhdGUuYm91bmRhcnlMaW5rcykge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMucGFnZUxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubGFzdFBhZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hcmlhTGl2ZUxhYmVsVGV4dCB9fTwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdwYWdlcycsIHtzdGF0aWM6IHRydWV9KSBwYWdlcyE6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAncGFnZXMnKTtcbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHN0cnVjdHVyZVxuICovXG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQYWdpbmF0aW9uUHJvcHM+ID0ge1xuXHRzdHJ1Y3R1cmU6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0cGFnZXNEaXNwbGF5OiBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlcyxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVBhZ2luYXRpb25dJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCcsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIGFwaSwgZGlyZWN0aXZlc31cIiBbYXVTbG90XT1cInN0YXRlKCkuc3RydWN0dXJlXCI+PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxQYWdpbmF0aW9uV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBidXR0b24uXG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBwcm9jZXNzUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBgUGFnZSAke3Byb2Nlc3NQYWdlfSBvZiAke3BhZ2VDb3VudH1gXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQYWdlTGFiZWwnKSBhcmlhUGFnZUxhYmVsOiAoKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgdGhlIGFyaWEtbGl2ZSBlbGVtZW50XG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBjdXJyZW50UGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IGBDdXJyZW50IHBhZ2UgaXMgJHtjdXJyZW50UGFnZX1gXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMaXZlTGFiZWwnKSBhcmlhTGl2ZUxhYmVsOiAoKGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQYWdlIG5hdmlnYXRpb24nYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICcoY3VycmVudCknXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFjdGl2ZUxhYmVsJykgYWN0aXZlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJGaXJzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGZpcnN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQcmV2aW91c0xhYmVsJykgYXJpYVByZXZpb3VzTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTmV4dExhYmVsJykgYXJpYU5leHRMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkxhc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBsYXN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRWxsaXBzaXNcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0VsbGlwc2lzIHBhZ2UgZWxlbWVudCdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUVsbGlwc2lzTGFiZWwnKSBhcmlhRWxsaXBzaXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IGZ1bmN0aW9uIHByb3ZpZGluZyB0aGUgaHJlZiBmb3IgYSBcIlBhZ2VcIiBwYWdlIGFuY2hvcixcblx0ICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VOdW1iZXIgLSBUaGUgaW5kZXggdG8gdXNlIGluIHRoZSBsaW5rXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIpID0+IFBBR0VfTElOS19ERUZBVUxUXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VMaW5rJykgcGFnZUxpbms6ICgocGFnZU51bWJlcjogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUGFnaW5hdGlvbixcblx0XHR3aWRnZXROYW1lOiAncGFnaW5hdGlvbicsXG5cdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSksXG5cdFx0fSxcblx0fSk7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBlbGxpcHNpcyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oCmJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVFbGxpcHNpc0xhYmVsJykgZWxsaXBzaXNMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RWxsaXBzaXNGcm9tQ29udGVudDogUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZmlyc3Qgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ8KrJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVGaXJzdFBhZ2VMYWJlbCcpIGZpcnN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGaXJzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwcmV2aW91cyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC5J2Bcblx0ICovXG5cdEBJbnB1dCgnYXVQcmV2aW91c1BhZ2VMYWJlbCcpIHByZXZpb3VzUGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQcmV2aW91c0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBuZXh0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfigLonYFxuXHQgKi9cblx0QElucHV0KCdhdU5leHRQYWdlTGFiZWwnKSBuZXh0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE5leHRGcm9tQ29udGVudDogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBsYXN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCuydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TGFzdFBhZ2VMYWJlbCcpIGxhc3RQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90TGFzdEZyb21Db250ZW50OiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHBhZ2VzIHNsb3Rcblx0ICogVG8gdXNlIHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlld1xuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNEaXNwbGF5JykgcGFnZXNEaXNwbGF5OiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RQYWdlc0Zyb21Db250ZW50OiBQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBudW1iZXIgc2xvdFxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogQHBhcmFtIGRpc3BsYXllZFBhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7ZGlzcGxheWVkUGFnZX06IFBhZ2luYXRpb25OdW1iZXJDb250ZXh0KSA9PiBgJHtkaXNwbGF5ZWRQYWdlfWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TnVtYmVyTGFiZWwnKSBudW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZWxsaXBzaXNMYWJlbHxlbGxpcHNpc0xhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5maXJzdFBhZ2VMYWJlbHxmaXJzdFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucHJldmlvdXNQYWdlTGFiZWx8cHJldmlvdXNQYWdlTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLm5leHRQYWdlTGFiZWx8bmV4dFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubGFzdFBhZ2VMYWJlbHxsYXN0UGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5wYWdlc0Rpc3BsYXl8cGFnZXNEaXNwbGF5fSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5udW1iZXJMYWJlbHxudW1iZXJMYWJlbH0sXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVCb3VuZGFyeUxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBib3VuZGFyeUxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3MgYXJlIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlyZWN0aW9uTGlua3MnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuXG5cdCAqXG5cdCAqIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLCB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICpcblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDb2xsZWN0aW9uU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDFgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQHJlbWFya3MgbWluIHZhbHVlIGlzIDFcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVQYWdlU2l6ZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgcGFnaW5hdGlvbiBkaXNwbGF5IHNpemUuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBudWxsYFxuXHQgKi9cblx0QElucHV0KCdhdVNpemUnKSBzaXplOiAnc20nIHwgJ2xnJyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKiBAcGFyYW0gcGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiB7XG5cdCAqIFx0XHRjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcblx0ICogXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XG5cdCAqIFx0XHRcdHBhZ2VzLnB1c2goaSk7XG5cdCAqIFx0XHR9XG5cdCAqIFx0XHRyZXR1cm4gcGFnZXM7XG5cdCAqIFx0fVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVQYWdlc0ZhY3RvcnknKSBwYWdlc0ZhY3Rvcnk6ICgocGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4gbnVtYmVyW10pIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgdGhlIG51bWJlciBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVQYWdlQ2hhbmdlJykgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0ZWxsaXBzaXNMYWJlbDogdGhpcy5zbG90RWxsaXBzaXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRmaXJzdFBhZ2VMYWJlbDogdGhpcy5zbG90Rmlyc3RGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRwcmV2aW91c1BhZ2VMYWJlbDogdGhpcy5zbG90UHJldmlvdXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRuZXh0UGFnZUxhYmVsOiB0aGlzLnNsb3ROZXh0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0bGFzdFBhZ2VMYWJlbDogdGhpcy5zbG90TGFzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHBhZ2VzRGlzcGxheTogdGhpcy5zbG90UGFnZXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRudW1iZXJMYWJlbDogdGhpcy5zbG90TnVtYmVyTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
