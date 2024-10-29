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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationNumberContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
 * This directive provides a template reference for the {@link PaginationContext}.
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 184 }); })();
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
export const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');
/**
 * The \`PaginationComponent\` is an Angular component that extends the \`BaseWidgetDirective\`
 * to provide a customizable pagination widget. It includes various input properties
 * to configure labels, templates, and behavior for accessibility and internationalization (i18n).
 */
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 213 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEosT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7O0lBMkc1Qyw4QkFBc0Q7SUFDckQsa0lBQXVGO0lBQ3hGLGlCQUFNO0lBQ04sK0JBQThCO0lBQUEsWUFBK0I7SUFBQSxpQkFBTzs7Ozs7O0lBRnRELGNBQWdDO0lBQUMsQUFBakMsaURBQWdDLDRFQUF5QztJQUV6RCxlQUErQjtJQUEvQixrREFBK0I7Ozs7SUFLM0QsK0JBQThCO0lBQUEsWUFBeUI7SUFBQSxpQkFBTzs7O0lBQWhDLGNBQXlCO0lBQXpCLDRDQUF5Qjs7O0lBSHpELDRCQUE2RDtJQUU1RCxBQURBLGtJQUEwRyw4R0FDN0U7SUFHOUIsaUJBQUk7Ozs7Ozs7SUFMaUIsK0dBQXVDO0lBQzlDLGNBQThCO0lBQUMsQUFBL0IsK0NBQThCLHFGQUE4RDtJQUN6RyxjQUVDO0lBRkQsc0RBRUM7OztJQVhKLDZCQUFnSDtJQU03RyxBQUxGLGtHQUFtQiw4RkFLVjtJQVFWLGlCQUFLOzs7O0lBZHdELEFBQXZDLHFEQUFzQyxtREFBbUQ7SUFDOUcsY0FZQztJQVpELHdDQVlDOzs7SUFkSCxpSUFnQkM7OztJQWhCRCxjQUFBLGdCQUFhLENBZ0JaOzs7O0lBT0csQUFERCxBQURELDZCQUFrRSxXQUNiLGVBQzFCO0lBQ3hCLDRIQUF3RjtJQUczRixBQURDLEFBREMsaUJBQU8sRUFDSixFQUNBOzs7Ozs7SUFOaUIsdURBQTJDO0lBQzNDLGNBQThCO0lBQTlCLCtDQUE4QjtJQUVwQyxlQUFpQztJQUFDLEFBQWxDLGtEQUFpQyw0RUFBeUM7Ozs7SUFReEYsQUFERCxBQURELDZCQUFrRSxXQUNkLGVBQ3pCO0lBQ3hCLDRIQUEyRjtJQUc5RixBQURDLEFBREMsaUJBQU8sRUFDSixFQUNBOzs7Ozs7SUFOaUIsdURBQTJDO0lBQzNDLGNBQTZCO0lBQTdCLDhDQUE2QjtJQUVuQyxlQUFvQztJQUFDLEFBQXJDLHFEQUFvQyw0RUFBeUM7Ozs7O0lBUzNGLEFBREQsQUFERCw2QkFBOEQsV0FDVixlQUN6QjtJQUN4Qiw0SEFBdUY7SUFHMUYsQUFEQyxBQURDLGlCQUFPLEVBQ0osRUFDQTs7Ozs7O0lBTmlCLG1EQUF1QztJQUN2QyxjQUE2QjtJQUE3Qiw4Q0FBNkI7SUFFbkMsZUFBZ0M7SUFBQyxBQUFqQyxpREFBZ0MsNEVBQXlDOzs7O0lBUXZGLEFBREQsQUFERCw2QkFBOEQsV0FDVixlQUN6QjtJQUN4Qiw0SEFBdUY7SUFHMUYsQUFEQyxBQURDLGlCQUFPLEVBQ0osRUFDQTs7Ozs7O0lBTmlCLG1EQUF1QztJQUN2QyxjQUE2QjtJQUE3Qiw4Q0FBNkI7SUFFbkMsZUFBZ0M7SUFBQyxBQUFqQyxpREFBZ0MsNEVBQXlDOzs7SUFqQzNGLDBCQUF5SDtJQTZCeEgsQUFUQSxBQURBLEFBVEEsQUFUQSxzR0FBNkIseUZBU0MsaUdBU3dELHlGQUN4RCx5RkFTRDtJQVM5QixpQkFBSztJQUNMLCtCQUFnRDtJQUFBLFlBQStCO0lBQUEsaUJBQU07Ozs7O0lBdkNqRixrSUFBb0g7SUFDdkgsY0FRQztJQVJELG1EQVFDO0lBQ0QsY0FRQztJQVJELG9EQVFDO0lBQ1ksY0FBK0I7SUFBQyxBQUFoQyxnREFBK0IsNEVBQXlDO0lBQ3JGLGNBUUM7SUFSRCxvREFRQztJQUNELGNBUUM7SUFSRCxtREFRQztJQUU4QyxlQUErQjtJQUEvQixrREFBK0I7Ozs7QUFoS2xGOzs7R0FHRztBQUVILE1BQU0sT0FBTywyQkFBMkI7SUFEeEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQWlDLEVBQUUsT0FBZ0I7UUFDaEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzRIQUpXLDJCQUEyQjtvRUFBM0IsMkJBQTJCOztpRkFBM0IsMkJBQTJCO2NBRHZDLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVE1RTs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUE4QixFQUFFLE9BQWdCO1FBQzdFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzt5SEFKVyx3QkFBd0I7b0VBQXhCLHdCQUF3Qjs7aUZBQXhCLHdCQUF3QjtjQURwQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRekU7OztHQUdHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBOEIsQ0FBQSxDQUFDLENBQUM7S0FJNUQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBNkIsRUFBRSxPQUFnQjtRQUM1RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7d0hBSlcsdUJBQXVCO29FQUF2Qix1QkFBdUI7O2lGQUF2Qix1QkFBdUI7Y0FEbkMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLCtCQUErQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUXhFOzs7R0FHRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQTZCLEVBQUUsT0FBZ0I7UUFDNUUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO3dIQUpXLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztpRkFBdkIsdUJBQXVCO2NBRG5DLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVF4RTs7O0dBR0c7QUFFSCxNQUFNLE9BQU8seUJBQXlCO0lBRHRDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFvQyxDQUFBLENBQUMsQ0FBQztLQUlsRTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUErQixFQUFFLE9BQWdCO1FBQzlFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzswSEFKVyx5QkFBeUI7b0VBQXpCLHlCQUF5Qjs7aUZBQXpCLHlCQUF5QjtjQURyQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRMUU7OztHQUdHO0FBRUgsTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBOEIsQ0FBQSxDQUFDLENBQUM7S0FJNUQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBaUMsRUFBRSxPQUFnQjtRQUNoRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7NEhBSlcsMkJBQTJCO29FQUEzQiwyQkFBMkI7O2lGQUEzQiwyQkFBMkI7Y0FEdkMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLG1DQUFtQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUTVFOzs7R0FHRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQThCLENBQUEsQ0FBQyxDQUFDO0tBSTVEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQThCLEVBQUUsT0FBZ0I7UUFDN0UsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO3lIQUpXLHdCQUF3QjtvRUFBeEIsd0JBQXdCOztpRkFBeEIsd0JBQXdCO2NBRHBDLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVF6RTs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sNEJBQTRCO0lBRHpDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUE4QixDQUFBLENBQUMsQ0FBQztLQUk1RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFrQyxFQUFFLE9BQWdCO1FBQ2pGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs2SEFKVyw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7aUZBQTVCLDRCQUE0QjtjQUR4QyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsb0NBQW9DLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRN0UsTUFvRU0sK0JBQStCO2dJQUEvQiwrQkFBK0I7b0VBQS9CLCtCQUErQjs7Ozs7Ozs7WUE1Q25DLEFBbkJBLDhIQUFrRyxrSEFtQlE7NEJBdEJqRyxhQUFhLEVBckJYLHdCQUF3QixFQVl4Qiw0QkFBNEIsRUFTeUMsWUFBWTs7aUZBa0V4RiwrQkFBK0I7Y0FwRXBDLFNBQVM7ZUFBQztnQkFDVixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLHdCQUF3QixFQUFFLDRCQUE0QixFQUFFLFlBQVksQ0FBQztnQkFDOUYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4RFQ7YUFDRDtnQkFFb0MsS0FBSztrQkFBeEMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ00sU0FBUztrQkFBaEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFGakMsK0JBQStCO0FBSXJDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQW1DLElBQUksaUJBQWlCLENBQUMsK0JBQStCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUk7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBbUMsSUFBSSxpQkFBaUIsQ0FBQywrQkFBK0IsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVsSjs7OztHQUlHO0FBWUgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFxQztJQXlUN0U7UUFDQyxLQUFLLENBQ0osaUJBQWlCLENBQUM7WUFDakIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixVQUFVLEVBQUUsWUFBWTtZQUN4QixhQUFhLEVBQUU7Z0JBQ2QsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsWUFBWSxFQUFFLDBCQUEwQjthQUN4QztZQUNELE1BQU0sRUFBRTtnQkFDUCxZQUFZLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMxRDtZQUNELGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFdBQVc7Z0JBQ3JELGFBQWEsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsV0FBVztnQkFDeEQsY0FBYyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxXQUFXO2dCQUN0RCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsV0FBVztnQkFDNUQsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxXQUFXO2dCQUNwRCxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFdBQVc7Z0JBQ3BELFlBQVksRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsV0FBVztnQkFDcEQsV0FBVyxFQUFFLElBQUksQ0FBQywwQkFBMEIsRUFBRSxXQUFXO2FBQ3pELENBQUM7U0FDRixDQUFDLENBQ0YsQ0FBQztRQTNDSDs7Ozs7Ozs7OztXQVVHO1FBQ3FCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBaUNoRSxDQUFDO29IQWpWVyxtQkFBbUI7b0VBQW5CLG1CQUFtQjt3Q0FrSWpCLDJCQUEyQjt3Q0FXM0Isd0JBQXdCO3dDQVd4QiwyQkFBMkI7d0NBVzNCLHVCQUF1Qjt3Q0FXdkIsdUJBQXVCO3dDQVN2Qix3QkFBd0I7d0NBZXhCLHlCQUF5Qjt3Q0FXekIsNEJBQTRCOzs7Ozs7Ozs7Ozs7eUNBak45QixxQkFBaUI7bWlDQXlOVyxrQkFBa0IsMERBT2Isa0JBQWtCLDZEQU9qQixrQkFBa0IsNkRBY2xCLGlCQUFpQiwrQkFTM0IsaUJBQWlCLDJDQVFiLGlCQUFpQjtZQXhROUMsb0ZBQW1GOztZQUE3QixBQUF6Qyw0RkFBd0MsaUNBQTZCOzRCQU5uRixhQUFhOztpRkFRWCxtQkFBbUI7Y0FYL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsbUJBQW1CLEVBQUUsbUJBQW1CO2lCQUN4QztnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG1HQUFtRzthQUM3RztvQkFlMEIsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFlRSxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQVVGLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQVlJLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQVlLLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBWUssaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQVlGLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBWUUsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFTTSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBWVAsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBU08sYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFFeEIsdUJBQXVCO2tCQUR0QixZQUFZO21CQUFDLDJCQUEyQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQVUvQixjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQUV6QixvQkFBb0I7a0JBRG5CLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBVXpCLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFFNUIsdUJBQXVCO2tCQUR0QixZQUFZO21CQUFDLDJCQUEyQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQVVoQyxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUV4QixtQkFBbUI7a0JBRGxCLFlBQVk7bUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBVTVCLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRXhCLG1CQUFtQjtrQkFEbEIsWUFBWTttQkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFRN0IsWUFBWTtrQkFBcEMsS0FBSzttQkFBQyxnQkFBZ0I7WUFFdkIsb0JBQW9CO2tCQURuQixZQUFZO21CQUFDLHdCQUF3QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQWMvQixXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7WUFFdEIsMEJBQTBCO2tCQUR6QixZQUFZO21CQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQVVsQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFFcEIsd0JBQXdCO2tCQUR2QixZQUFZO21CQUFDLDRCQUE0QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQVFFLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9PLGFBQWE7a0JBQTlFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0csY0FBYztrQkFBaEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFjQyxjQUFjO2tCQUEvRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVNSLElBQUk7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVFNLFFBQVE7a0JBQW5FLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQVN6QyxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVE7WUFvQlUsWUFBWTtrQkFBcEMsS0FBSzttQkFBQyxnQkFBZ0I7WUFhQyxVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFPQSxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7O2tGQXZUUixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QmFzZVdpZGdldERpcmVjdGl2ZSwgQ29tcG9uZW50VGVtcGxhdGUsIFNsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlLCBhdU51bWJlckF0dHJpYnV0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge1BhZ2luYXRpb25Db250ZXh0LCBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCwgUGFnaW5hdGlvbldpZGdldH0gZnJvbSAnLi9wYWdpbmF0aW9uLmdlbic7XG5pbXBvcnQge2NyZWF0ZVBhZ2luYXRpb259IGZyb20gJy4vcGFnaW5hdGlvbi5nZW4nO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAnZWxsaXBzaXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uRWxsaXBzaXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZSB0byB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAqIFRoaXMgZGlyZWN0aXZlIHByb3ZpZGVzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciB0aGUge0BsaW5rIFBhZ2luYXRpb25Db250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVBhZ2luYXRpb25GaXJzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQYWdpbmF0aW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB1c2UgdG8gZ2l2ZSB0aGUgJ2xhc3QnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICduZXh0JyBsaW5rIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgUGFnaW5hdGlvbkNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk5leHREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvbk5leHREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSBwYWdlICdudW1iZXInIHRlbXBsYXRlIHRvIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgUGFnaW5hdGlvbk51bWJlckNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UGFnaW5hdGlvbk51bWJlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHVzZSB0byBnaXZlIHRoZSAncHJldmlvdXMnIGxpbmsgdGVtcGxhdGUgdG8gdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUHJldmlvdXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gdXNlIHRvIGdpdmUgdGhlICdQYWdlcycgdGVtcGxhdGUgZm9yIHRoZSBQYWdlcyBzbG90XG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgcGFnaW5hdGlvbiB3aWRnZXQuXG4gKiBUaGlzIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHtAbGluayBQYWdpbmF0aW9uQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQYWdpbmF0aW9uU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUGFnaW5hdGlvblN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUGFnaW5hdGlvbkNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLCBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQYWdpbmF0aW9uUGFnZXMgI3BhZ2VzIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWFwaT1cImFwaVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiPlxuXHRcdFx0QGZvciAocGFnZSBvZiBzdGF0ZS5wYWdlcygpOyB0cmFjayBwYWdlOyBsZXQgaSA9ICRpbmRleCkge1xuXHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInBhZ2UgPT09IHN0YXRlLnBhZ2UoKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlID09PSAtMSB8fCBzdGF0ZS5kaXNhYmxlZCgpXCI+XG5cdFx0XHRcdFx0QGlmIChwYWdlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtbGluayBhdS1lbGxpcHNpc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5lbGxpcHNpc0xhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57eyBzdGF0ZS5hcmlhRWxsaXBzaXNMYWJlbCgpIH19PC9zcGFuPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiW2RpcmVjdGl2ZXMucGFnZUxpbmssIHtwYWdlfV1cIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubnVtYmVyTGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgZGlzcGxheWVkUGFnZTogcGFnZX1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRAaWYgKHN0YXRlLnBhZ2UoKSA9PT0gcGFnZSkge1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+e3sgc3RhdGUuYWN0aXZlTGFiZWwoKSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdVBhZ2luYXRpb25TdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1hcGk9XCJhcGlcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIj5cblx0XHRcdDx1bCBbY2xhc3NdPVwiJ2F1LXBhZ2luYXRpb24gcGFnaW5hdGlvbicgKyAoc3RhdGUuc2l6ZSgpID8gJyBwYWdpbmF0aW9uLScgKyBzdGF0ZS5zaXplKCkgOiAnJykgKyAnICcgKyBzdGF0ZS5jbGFzc05hbWUoKVwiPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmJvdW5kYXJ5TGlua3MoKSkge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5wcmV2aW91c0Rpc2FibGVkKClcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMucGFnZUZpcnN0XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmZpcnN0UGFnZUxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGlmIChzdGF0ZS5kaXJlY3Rpb25MaW5rcygpKSB7XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW2NsYXNzLmRpc2FibGVkXT1cInN0YXRlLnByZXZpb3VzRGlzYWJsZWQoKVwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5wYWdlUHJldlwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5wcmV2aW91c1BhZ2VMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnBhZ2VzRGlzcGxheSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlyZWN0aW9uTGlua3MoKSkge1xuXHRcdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJzdGF0ZS5uZXh0RGlzYWJsZWQoKVwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5wYWdlTmV4dFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5uZXh0UGFnZUxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGlmIChzdGF0ZS5ib3VuZGFyeUxpbmtzKCkpIHtcblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwic3RhdGUubmV4dERpc2FibGVkKClcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMucGFnZUxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUubGFzdFBhZ2VMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IHN0YXRlLmFyaWFMaXZlTGFiZWxUZXh0KCkgfX08L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmNsYXNzIFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdwYWdlcycsIHtzdGF0aWM6IHRydWV9KSBwYWdlcyE6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25Db250ZXh0Pjtcbn1cbi8qKlxuICogVGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIHBhZ2VzXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RQYWdlczogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFBhZ2luYXRpb25EZWZhdWx0U2xvdHNDb21wb25lbnQsICdwYWdlcycpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBzbG90IGZvciB0aGUgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGVmYXVsdFNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQYWdpbmF0aW9uRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbi8qKlxuICogVGhlIGBQYWdpbmF0aW9uQ29tcG9uZW50YCBpcyBhbiBBbmd1bGFyIGNvbXBvbmVudCB0aGF0IGV4dGVuZHMgdGhlIGBCYXNlV2lkZ2V0RGlyZWN0aXZlYFxuICogdG8gcHJvdmlkZSBhIGN1c3RvbWl6YWJsZSBwYWdpbmF0aW9uIHdpZGdldC4gSXQgaW5jbHVkZXMgdmFyaW91cyBpbnB1dCBwcm9wZXJ0aWVzXG4gKiB0byBjb25maWd1cmUgbGFiZWxzLCB0ZW1wbGF0ZXMsIGFuZCBiZWhhdmlvciBmb3IgYWNjZXNzaWJpbGl0eSBhbmQgaW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pLlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQYWdpbmF0aW9uXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUuYXJpYUxhYmVsKCknLFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCIgW2F1U2xvdF09XCJzdGF0ZS5zdHJ1Y3R1cmUoKVwiPjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UGFnaW5hdGlvbldpZGdldD4ge1xuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBidXR0b24uXG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBwcm9jZXNzUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBgUGFnZSAke3Byb2Nlc3NQYWdlfSBvZiAke3BhZ2VDb3VudH1gXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQYWdlTGFiZWwnKSBhcmlhUGFnZUxhYmVsOiAoKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgdGhlIGFyaWEtbGl2ZSBlbGVtZW50XG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBjdXJyZW50UGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IGBDdXJyZW50IHBhZ2UgaXMgJHtjdXJyZW50UGFnZX1gXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMaXZlTGFiZWwnKSBhcmlhTGl2ZUxhYmVsOiAoKGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQYWdlIG5hdmlnYXRpb24nYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICcoY3VycmVudCknXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFjdGl2ZUxhYmVsJykgYWN0aXZlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJGaXJzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGZpcnN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFGaXJzdExhYmVsJykgYXJpYUZpcnN0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFQcmV2aW91c0xhYmVsJykgYXJpYVByZXZpb3VzTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTmV4dExhYmVsJykgYXJpYU5leHRMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkxhc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBsYXN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYXN0TGFiZWwnKSBhcmlhTGFzdExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRWxsaXBzaXNcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0VsbGlwc2lzIHBhZ2UgZWxlbWVudCdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUVsbGlwc2lzTGFiZWwnKSBhcmlhRWxsaXBzaXNMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IGZ1bmN0aW9uIHByb3ZpZGluZyB0aGUgaHJlZiBmb3IgYSBcIlBhZ2VcIiBwYWdlIGFuY2hvcixcblx0ICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VOdW1iZXIgLSBUaGUgaW5kZXggdG8gdXNlIGluIHRoZSBsaW5rXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIpID0+IFBBR0VfTElOS19ERUZBVUxUXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VMaW5rJykgcGFnZUxpbms6ICgocGFnZU51bWJlcjogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZWxsaXBzaXMgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ+KApidgXG5cdCAqL1xuXHRASW5wdXQoJ2F1RWxsaXBzaXNMYWJlbCcpIGVsbGlwc2lzTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGZpcnN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCqydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Rmlyc3RQYWdlTGFiZWwnKSBmaXJzdFBhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90Rmlyc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgcHJldmlvdXMgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ+KAuSdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1UHJldmlvdXNQYWdlTGFiZWwnKSBwcmV2aW91c1BhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UHJldmlvdXNGcm9tQ29udGVudDogUGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbmV4dCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC6J2Bcblx0ICovXG5cdEBJbnB1dCgnYXVOZXh0UGFnZUxhYmVsJykgbmV4dFBhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROZXh0RnJvbUNvbnRlbnQ6IFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbGFzdCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnwrsnYFxuXHQgKi9cblx0QElucHV0KCdhdUxhc3RQYWdlTGFiZWwnKSBsYXN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdExhc3RGcm9tQ29udGVudDogUGFnaW5hdGlvbkxhc3REaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwYWdlcyBzbG90XG5cdCAqIFRvIHVzZSB0byBjdXN0b21pemUgdGhlIHBhZ2VzIHZpZXdcblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKi9cblx0QElucHV0KCdhdVBhZ2VzRGlzcGxheScpIHBhZ2VzRGlzcGxheTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90UGFnZXNGcm9tQ29udGVudDogUGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbnVtYmVyIHNsb3Rcblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIEBwYXJhbSBkaXNwbGF5ZWRQYWdlIC0gVGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe2Rpc3BsYXllZFBhZ2V9OiBQYWdpbmF0aW9uTnVtYmVyQ29udGV4dCkgPT4gYCR7ZGlzcGxheWVkUGFnZX1gXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdU51bWJlckxhYmVsJykgbnVtYmVyTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25OdW1iZXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3ROdW1iZXJMYWJlbEZyb21Db250ZW50OiBQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgc3RydWN0dXJlIG9mIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuXHQgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgdXNlcyB7QGxpbmsgUGFnaW5hdGlvblByb3BzLmVsbGlwc2lzTGFiZWx8ZWxsaXBzaXNMYWJlbH0sIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZmlyc3RQYWdlTGFiZWx8Zmlyc3RQYWdlTGFiZWx9LFxuXHQgKiB7QGxpbmsgUGFnaW5hdGlvblByb3BzLnByZXZpb3VzUGFnZUxhYmVsfHByZXZpb3VzUGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5uZXh0UGFnZUxhYmVsfG5leHRQYWdlTGFiZWx9LFxuXHQgKiB7QGxpbmsgUGFnaW5hdGlvblByb3BzLmxhc3RQYWdlTGFiZWx8bGFzdFBhZ2VMYWJlbH0sIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucGFnZXNEaXNwbGF5fHBhZ2VzRGlzcGxheX0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubnVtYmVyTGFiZWx8bnVtYmVyTGFiZWx9LFxuXHQgKi9cblx0QElucHV0KCdhdVN0cnVjdHVyZScpIHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHBhZ2luYXRpb24gbGlua3Mgd2lsbCBiZSBkaXNhYmxlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Qm91bmRhcnlMaW5rcycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYm91bmRhcnlMaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpcmVjdGlvbkxpbmtzJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB5b3VyIHBhZ2luYXRlZCBjb2xsZWN0aW9uLlxuXHQgKlxuXHQgKiBOb3RlLCB0aGF0IHRoaXMgaXMgbm90IHRoZSBudW1iZXIgb2YgcGFnZXMuIFBhZ2UgbnVtYmVycyBhcmUgY2FsY3VsYXRlZCBkeW5hbWljYWxseSBiYXNlZCBvblxuXHQgKiBgY29sbGVjdGlvblNpemVgIGFuZCBgcGFnZVNpemVgLlxuXHQgKlxuXHQgKiBFeC4gaWYgeW91IGhhdmUgMTAwIGl0ZW1zIGluIHlvdXIgY29sbGVjdGlvbiBhbmQgZGlzcGxheWluZyAyMCBpdGVtcyBwZXIgcGFnZSwgeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG5cdCAqXG5cdCAqIFdoYXRldmVyIHRoZSBjb2xsZWN0aW9uU2l6ZSB0aGUgcGFnZSBudW1iZXIgaXMgb2YgbWluaW11bSAxLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q29sbGVjdGlvblNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgY29sbGVjdGlvblNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcGFnZS5cblx0ICpcblx0ICogUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBwYWdlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG5cdCAqIEByZW1hcmtzIG1pbiB2YWx1ZSBpcyAxXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDEwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1UGFnZVNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgcGFnZVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHBhZ2luYXRpb24gZGlzcGxheSBzaXplLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgY3VycmVudGx5IHN1cHBvcnRzIHNtYWxsIGFuZCBsYXJnZSBzaXplcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgbnVsbGBcblx0ICovXG5cdEBJbnB1dCgnYXVTaXplJykgc2l6ZTogJ3NtJyB8ICdsZycgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBwYWdlc0ZhY3RvcnkgcmV0dXJucyBhIGZ1bmN0aW9uIGNvbXB1dGluZyB0aGUgYXJyYXkgb2YgcGFnZXMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIGFzIG51bWJlciAoLTEgYXJlIHRyZWF0ZWQgYXMgZWxsaXBzaXMpLlxuXHQgKiBVc2UgUGFnZSBzbG90IHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlldyBhbmQgbm90IHRoaXNcblx0ICogQHBhcmFtIHBhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKiBAcGFyYW0gcGFnZUNvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChfcGFnZTogbnVtYmVyLCBwYWdlQ291bnQ6IG51bWJlcikgPT4ge1xuXHQgKiBcdFx0Y29uc3QgcGFnZXM6IG51bWJlcltdID0gW107XG5cdCAqIFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBwYWdlQ291bnQ7IGkrKykge1xuXHQgKiBcdFx0XHRwYWdlcy5wdXNoKGkpO1xuXHQgKiBcdFx0fVxuXHQgKiBcdFx0cmV0dXJuIHBhZ2VzO1xuXHQgKiBcdH1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1UGFnZXNGYWN0b3J5JykgcGFnZXNGYWN0b3J5OiAoKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1UGFnZUNoYW5nZScpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVQYWdpbmF0aW9uLFxuXHRcdFx0XHR3aWRnZXROYW1lOiAncGFnaW5hdGlvbicsXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0XHRcdFx0XHRwYWdlc0Rpc3BsYXk6IHBhZ2luYXRpb25EZWZhdWx0U2xvdFBhZ2VzLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PiAoe1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGVsbGlwc2lzTGFiZWw6IHRoaXMuc2xvdEVsbGlwc2lzRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGZpcnN0UGFnZUxhYmVsOiB0aGlzLnNsb3RGaXJzdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRwcmV2aW91c1BhZ2VMYWJlbDogdGhpcy5zbG90UHJldmlvdXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0bmV4dFBhZ2VMYWJlbDogdGhpcy5zbG90TmV4dEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRsYXN0UGFnZUxhYmVsOiB0aGlzLnNsb3RMYXN0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdHBhZ2VzRGlzcGxheTogdGhpcy5zbG90UGFnZXNGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0bnVtYmVyTGFiZWw6IHRoaXMuc2xvdE51bWJlckxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
