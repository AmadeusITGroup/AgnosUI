const t=`import { SlotDirective, ComponentTemplate, BaseWidgetDirective, createModal, callWidgetFactory, mergeDirectives, auBooleanAttribute, UseDirective, SlotDefaultDirective, CachedProperty, createPagination, auNumberAttribute, createRating, createSelect, useDirectiveForHost, createAlert, createAccordion, createSlider, createProgressbar } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/angular-headless';
import * as i0 from '@angular/core';
import { TemplateRef, inject, Directive, Component, ChangeDetectionStrategy, ViewChild, EventEmitter, Input, ContentChild, Output, ViewEncapsulation, forwardRef, HostBinding, NgZone, NgModule, Injector, ApplicationRef, EnvironmentInjector, createComponent, Injectable } from '@angular/core';
import { __decorate } from 'tslib';
import { writable } from '@amadeus-it-group/tansu';
import { AsyncPipe, NgTemplateOutlet, NgClass } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';

const _c0$7 = ["header"];
const _c1$5 = ["structure"];
function ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const widget_r5 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r5.actions.closeButtonClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r4 = i0.ɵɵnextContext().state;
    i0.ɵɵattribute("aria-label", state_r4.ariaCloseButtonLabel);
} }
const _c2$4 = (a0, a1) => ({ state: a0, widget: a1 });
function ModalDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 4);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 6);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const widget_r5 = ctx.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotTitle)("auSlotProps", i0.ɵɵpureFunction2(3, _c2$4, state_r4, widget_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r4.closeButton ? 2 : -1);
} }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext();
    const state_r12 = ctx_r18.state;
    const widget_r13 = ctx_r18.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r12.slotHeader)("auSlotProps", i0.ɵɵpureFunction2(2, _c2$4, state_r12, widget_r13));
} }
function ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    const state_r12 = ctx_r20.state;
    const widget_r13 = ctx_r20.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r12.slotFooter)("auSlotProps", i0.ɵɵpureFunction2(2, _c2$4, state_r12, widget_r13));
} }
function ModalDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template, 2, 5, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template, 2, 5, "div", 10);
} if (rf & 2) {
    const state_r12 = ctx.state;
    const widget_r13 = ctx.widget;
    i0.ɵɵconditional(0, state_r12.slotTitle ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r12.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c2$4, state_r12, widget_r13));
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r12.slotFooter ? 3 : -1);
} }
const _c3$3 = ["auModal", ""];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ModalComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("modal-backdrop ", ctx_r1.state().backdropClass, "");
    i0.ɵɵproperty("auUse", ctx_r1.backdropDirective);
} }
function ModalComponent_Conditional_2_ng_template_3_Template(rf, ctx) { }
function ModalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function ModalComponent_Conditional_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.widget.actions.modalClick($event)); });
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, ModalComponent_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("modal d-block ", ctx_r2.state().className, "");
    i0.ɵɵproperty("auUse", ctx_r2.modalDirective);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("auSlot", ctx_r2.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(6, _c2$4, ctx_r2.state(), ctx_r2.widget));
} }
const _c4$1 = ["*"];
/**
 * Directive to provide the slot structure for the modal widget.
 */
class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalStructureDirective_Factory(t) { return new (t || ModalStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalStructureDirective, selectors: [["ng-template", "auModalStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalStructure]', standalone: true }]
    }], null, null); })();
/**
 * Directive to provide the slot header for the modal widget.
 */
class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalHeaderDirective_Factory(t) { return new (t || ModalHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalHeaderDirective, selectors: [["ng-template", "auModalHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalHeader]', standalone: true }]
    }], null, null); })();
/**
 * Directive to provide the slot title for the modal widget.
 */
class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalTitleDirective_Factory(t) { return new (t || ModalTitleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalTitleDirective, selectors: [["ng-template", "auModalTitle", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalTitleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalTitle]', standalone: true }]
    }], null, null); })();
/**
 * Directive to provide the default slot for the modal widget.
 */
class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalBodyDirective_Factory(t) { return new (t || ModalBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalBodyDirective, selectors: [["ng-template", "auModalBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalBody]', standalone: true }]
    }], null, null); })();
/**
 * Directive to provide the slot footer for the modal widget.
 */
class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalFooterDirective_Factory(t) { return new (t || ModalFooterDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalFooterDirective, selectors: [["ng-template", "auModalFooter", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalFooterDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalFooter]', standalone: true }]
    }], null, null); })();
/**
 * Component containing the default slots for the modal.
 */
class ModalDefaultSlotsComponent {
    static { this.ɵfac = function ModalDefaultSlotsComponent_Factory(t) { return new (t || ModalDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ModalDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$7, 7);
            i0.ɵɵviewQuery(_c1$5, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["auModalHeader", ""], ["header", ""], ["auModalStructure", ""], ["structure", ""], [1, "modal-title"], [3, "auSlot", "auSlotProps"], ["type", "button", "class", "btn-close"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-header"], [1, "modal-body"], ["class", "modal-footer"], [1, "modal-header"], [1, "modal-footer"]], template: function ModalDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_0_Template, 3, 6, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor)(2, ModalDefaultSlotsComponent_ng_template_2_Template, 4, 7, "ng-template", 2, 3, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ModalHeaderDirective, ModalStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective],
                template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button
					type="button"
					class="btn-close"
					[attr.aria-label]="state.ariaCloseButtonLabel"
					(click)="widget.actions.closeButtonClick($event)"
				></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			@if (state.slotTitle) {
				<div class="modal-header">
					<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			@if (state.slotFooter) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
		</ng-template>
	\`,
            }]
    }], null, { header: [{
            type: ViewChild,
            args: ['header', { static: true }]
        }], structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDefaultSlotsComponent, { className: "ModalDefaultSlotsComponent", filePath: "components/modal/modal.component.ts", lineNumber: 122 }); })();
/**
 * Default slot for modal header.
 */
const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
const defaultConfig$4 = {
    slotHeader: modalDefaultSlotHeader,
    slotStructure: modalDefaultSlotStructure,
};
/**
 * Modal component.
 */
class ModalComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * Event to be triggered when the visible property changes.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event to be triggered when the modal is about to be closed (i.e. the close method was called).
         */
        this.beforeClose = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is not visible.
         */
        this.hidden = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is visible.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig$4);
        this._widget = callWidgetFactory({
            factory: createModal,
            widgetName: 'modal',
            defaultConfig: this.defaultSlots,
            events: {
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
                onBeforeClose: (event) => this.beforeClose.emit(event),
                onVisibleChange: (event) => this.visibleChange.emit(event),
            },
        });
    }
    get modalDirective() {
        return mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
    }
    get backdropDirective() {
        return mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotFooter: this.slotFooterFromContent?.templateRef,
            slotHeader: this.slotHeaderFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotTitle: this.slotTitleFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵModalComponent_BaseFactory; return function ModalComponent_Factory(t) { return (ɵModalComponent_BaseFactory || (ɵModalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ModalComponent)))(t || ModalComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["", "auModal", ""]], contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ModalStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ModalHeaderDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ModalTitleDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ModalBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ModalFooterDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHeaderFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotTitleFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotFooterFromContent = _t.first);
        } }, inputs: { animation: ["auAnimation", "animation", auBooleanAttribute], backdropTransition: ["auBackdropTransition", "backdropTransition"], modalTransition: ["auModalTransition", "modalTransition"], visible: ["auVisible", "visible", auBooleanAttribute], backdrop: ["auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: ["auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: ["auContainer", "container"], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: ["auBackdropClass", "backdropClass"], closeButton: ["auCloseButton", "closeButton", auBooleanAttribute], className: ["auClassName", "className"], slotStructure: ["auSlotStructure", "slotStructure"], slotHeader: ["auSlotHeader", "slotHeader"], slotTitle: ["auSlotTitle", "slotTitle"], slotDefault: ["auSlotDefault", "slotDefault"], slotFooter: ["auSlotFooter", "slotFooter"], contentData: ["auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3$3, ngContentSelectors: _c4$1, decls: 3, vars: 3, consts: [[3, "auSlotDefault"], [3, "class", "auUse"], [3, "auUse"], [3, "auUse", "click"], [1, "modal-dialog"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ModalComponent_Conditional_1_Template, 1, 4, "div", 1)(2, ModalComponent_Conditional_2_Template, 4, 9, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(1, !ctx.state().backdropHidden ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(2, !ctx.state().hidden ? 2 : -1);
        } }, dependencies: [UseDirective, SlotDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], ModalComponent.prototype, "modalDirective", null);
__decorate([
    CachedProperty
], ModalComponent.prototype, "backdropDirective", null);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: '[auModal]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, SlotDefaultDirective],
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
				<div class="modal-dialog">
					<div class="modal-content">
						<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
					</div>
				</div>
			</div>
		}
	\`,
            }]
    }], null, { animation: [{
            type: Input,
            args: [{ alias: 'auAnimation', transform: auBooleanAttribute }]
        }], backdropTransition: [{
            type: Input,
            args: ['auBackdropTransition']
        }], modalTransition: [{
            type: Input,
            args: ['auModalTransition']
        }], visible: [{
            type: Input,
            args: [{ alias: 'auVisible', transform: auBooleanAttribute }]
        }], backdrop: [{
            type: Input,
            args: [{ alias: 'auBackdrop', transform: auBooleanAttribute }]
        }], closeOnOutsideClick: [{
            type: Input,
            args: [{ alias: 'auCloseOnOutsideClick', transform: auBooleanAttribute }]
        }], container: [{
            type: Input,
            args: ['auContainer']
        }], ariaCloseButtonLabel: [{
            type: Input,
            args: ['auAriaCloseButtonLabel']
        }], backdropClass: [{
            type: Input,
            args: ['auBackdropClass']
        }], closeButton: [{
            type: Input,
            args: [{ alias: 'auCloseButton', transform: auBooleanAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ModalStructureDirective, { static: false }]
        }], slotHeader: [{
            type: Input,
            args: ['auSlotHeader']
        }], slotHeaderFromContent: [{
            type: ContentChild,
            args: [ModalHeaderDirective, { static: false }]
        }], slotTitle: [{
            type: Input,
            args: ['auSlotTitle']
        }], slotTitleFromContent: [{
            type: ContentChild,
            args: [ModalTitleDirective, { static: false }]
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [ModalBodyDirective, { static: false }]
        }], slotFooter: [{
            type: Input,
            args: ['auSlotFooter']
        }], slotFooterFromContent: [{
            type: ContentChild,
            args: [ModalFooterDirective, { static: false }]
        }], contentData: [{
            type: Input,
            args: ['auContentData']
        }], visibleChange: [{
            type: Output,
            args: ['auVisibleChange']
        }], beforeClose: [{
            type: Output,
            args: ['auBeforeClose']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }], modalDirective: [], backdropDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "components/modal/modal.component.ts", lineNumber: 166 }); })();

const _c0$6 = ["pages"];
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template(rf, ctx) { }
const _c1$4 = (a0, a1) => ({ state: a0, widget: a1 });
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r13.state;
    const widget_r3 = ctx_r13.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(2, _c1$4, state_r2, widget_r3));
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
const _c2$3 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
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
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c2$3, state_r2, widget_r3, page_r5));
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, widget_r3.api.isEllipsis(page_r5) ? 1 : 2);
} }
function PaginationDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, PaginationDefaultSlotsComponent_ng_template_0_For_1_Template, 3, 6, "li", 9, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵrepeater(state_r2.pages);
} }
const _c3$2 = ["auPagination", ""];
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
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
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx.boundaryLinks ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, ctx.directionLinks ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c4, ctx_r0.widget, ctx));
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, ctx.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(5, ctx.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current page is ", ctx.page, "");
} }
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
class PaginationEllipsisDirective {
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
class PaginationFirstDirective {
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
class PaginationLastDirective {
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
class PaginationNextDirective {
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
class PaginationNumberDirective {
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
class PaginationPreviousDirective {
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
class PaginationPagesDirective {
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
class PaginationDefaultSlotsComponent {
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(t) { return new (t || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$6, 7);
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 139 }); })();
/**
 * The default slot for the pages
 */
const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
const defaultConfig$3 = {
    slotPages: paginationDefaultSlotPages,
};
class PaginationComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._widget = callWidgetFactory({
            factory: createPagination,
            widgetName: 'pagination',
            defaultConfig: defaultConfig$3,
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
        } }, inputs: { ariaPageLabel: ["auAriaPageLabel", "ariaPageLabel"], ariaLabel: ["auAriaLabel", "ariaLabel"], activeLabel: ["auActiveLabel", "activeLabel"], ariaFirstLabel: ["auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: ["auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: ["auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: ["auAriaLastLabel", "ariaLastLabel"], slotEllipsis: ["auSlotEllipsis", "slotEllipsis"], slotFirst: ["auSlotFirst", "slotFirst"], slotPrevious: ["auSlotPrevious", "slotPrevious"], slotNext: ["auSlotNext", "slotNext"], slotLast: ["auSlotLast", "slotLast"], slotPages: ["auSlotPages", "slotPages"], slotNumberLabel: ["auSlotNumberLabel", "slotNumberLabel"], disabled: ["auDisabled", "disabled", auBooleanAttribute], boundaryLinks: ["auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: ["auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: ["auCollectionSize", "collectionSize", auNumberAttribute], page: ["auPage", "page", auNumberAttribute], pageSize: ["auPageSize", "pageSize", auNumberAttribute], size: ["auSize", "size"], pagesFactory: ["auPagesFactory", "pagesFactory"], className: ["auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3$2, decls: 1, vars: 1, consts: [["class", "page-item", 3, "disabled"], [3, "auSlot", "auSlotProps"], ["aria-live", "polite", 1, "visually-hidden"], [1, "page-item"], ["href", "#", 1, "page-link", "au-first", 3, "click"], ["aria-hidden", "true"], ["href", "#", 1, "page-link", "au-previous", 3, "click"], ["href", "#", 1, "page-link", "au-next", 3, "click"], ["href", "#", 1, "page-link", "au-last", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_Conditional_0_Template, 8, 12);
        } if (rf & 2) {
            let PaginationComponent_contFlowTmp;
            i0.ɵɵconditional(0, (PaginationComponent_contFlowTmp = ctx.state()) ? 0 : -1, PaginationComponent_contFlowTmp);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
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
		@if (state(); as state) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 233 }); })();

const _c0$5 = ["auRating", ""];
function _forTrack1$1($index, $item) { return this.trackByIndex($index); }
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵlistener("mouseenter", function RatingComponent_For_1_Template_span_mouseenter_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const index_r2 = restoredCtx.$index; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7._widget.actions.hover(index_r2 + 1)); })("click", function RatingComponent_For_1_Template_span_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const index_r2 = restoredCtx.$index; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9._widget.actions.click(index_r2 + 1)); });
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", index_r2 < ctx_r0.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("cursor", ctx_r0.state().isInteractive ? "pointer" : "default");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStar)("auSlotProps", ctx_r0.state().stars[index_r2]);
} }
class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function RatingStarDirective_Factory(t) { return new (t || RatingStarDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RatingStarDirective, selectors: [["ng-template", "auRatingStar", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingStarDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
    }], null, null); })();
class RatingComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._widget = callWidgetFactory({
            factory: createRating,
            widgetName: 'rating',
            events: {
                onHover: (event) => this.hover.emit(event),
                onLeave: (event) => this.leave.emit(event),
                onRatingChange: (rating) => {
                    this.ratingChange.emit(rating);
                    this.onChange(rating);
                },
            },
        });
        this.onChange = (_) => { };
        this.onTouched = () => { };
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload is equal to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         */
        this.ratingChange = new EventEmitter();
    }
    // TODO angular is failing when adding this host binding in decorator part
    get hostAriaLabelledBy() {
        return this.state().ariaLabelledBy || null;
    }
    writeValue(value) {
        this._widget.patch({ rating: value });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._widget.patch({ disabled });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStar: this.slotStarFromContent?.templateRef,
        });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵRatingComponent_BaseFactory; return function RatingComponent_Factory(t) { return (ɵRatingComponent_BaseFactory || (ɵRatingComponent_BaseFactory = i0.ɵɵgetInheritedFactory(RatingComponent)))(t || RatingComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["", "auRating", ""]], contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, RatingStarDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStarFromContent = _t.first);
        } }, hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex", "au-rating"], hostVars: 10, hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); })("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx._widget.actions.handleKey($event); })("mouseleave", function RatingComponent_mouseleave_HostBindingHandler() { return ctx._widget.actions.leave(); });
        } if (rf & 2) {
            i0.ɵɵhostProperty("tabindex", ctx.state().tabindex);
            i0.ɵɵattribute("aria-valuemax", ctx.state().maxRating)("aria-valuenow", ctx.state().visibleRating)("aria-valuetext", ctx.state().ariaValueText)("aria-disabled", ctx.state().disabled ? true : null)("aria-readonly", ctx.state().readonly ? true : null)("aria-label", ctx.state().ariaLabel || null)("aria-labelledby", ctx.hostAriaLabelledBy);
            i0.ɵɵclassMap(ctx.state().className);
        } }, inputs: { ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"], disabled: ["auDisabled", "disabled", auBooleanAttribute], maxRating: ["auMaxRating", "maxRating", auNumberAttribute], rating: ["auRating", "rating", auNumberAttribute], readonly: ["auReadonly", "readonly", auBooleanAttribute], resettable: ["auResettable", "resettable", auBooleanAttribute], slotStar: ["auSlotStar", "slotStar"], tabindex: ["auTabindex", "tabindex", auNumberAttribute], className: ["auClassName", "className"], ariaLabel: ["auAriaLabel", "ariaLabel"], ariaLabelledBy: ["auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0$5, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [1, "au-rating-star", 3, "mouseenter", "click"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 5, null, null, _forTrack1$1, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().stars);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: '[auRating]',
                standalone: true,
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'd-inline-flex au-rating',
                    '[tabindex]': 'state().tabindex',
                    role: 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'state().maxRating',
                    '[attr.aria-valuenow]': 'state().visibleRating',
                    '[attr.aria-valuetext]': 'state().ariaValueText',
                    '[attr.aria-disabled]': 'state().disabled ? true : null',
                    '[attr.aria-readonly]': 'state().readonly ? true : null',
                    '[attr.aria-label]': 'state().ariaLabel || null',
                    '(blur)': 'onTouched()',
                    '(keydown)': '_widget.actions.handleKey($event)',
                    '(mouseleave)': '_widget.actions.leave()',
                    '[class]': 'state().className',
                },
                template: \`
		@for (item of state().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state().slotStar" [auSlotProps]="state().stars[index]"></ng-template>
			</span>
		}
	\`,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
            }]
    }], null, { hostAriaLabelledBy: [{
            type: HostBinding,
            args: ['[attr.aria-labelledby]']
        }], ariaValueTextFn: [{
            type: Input,
            args: ['auAriaValueTextFn']
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], maxRating: [{
            type: Input,
            args: [{ alias: 'auMaxRating', transform: auNumberAttribute }]
        }], rating: [{
            type: Input,
            args: [{ alias: 'auRating', transform: auNumberAttribute }]
        }], readonly: [{
            type: Input,
            args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
        }], resettable: [{
            type: Input,
            args: [{ alias: 'auResettable', transform: auBooleanAttribute }]
        }], slotStar: [{
            type: Input,
            args: ['auSlotStar']
        }], slotStarFromContent: [{
            type: ContentChild,
            args: [RatingStarDirective, { static: false }]
        }], tabindex: [{
            type: Input,
            args: [{ alias: 'auTabindex', transform: auNumberAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], ariaLabelledBy: [{
            type: Input,
            args: ['auAriaLabelledBy']
        }], hover: [{
            type: Output,
            args: ['auHover']
        }], leave: [{
            type: Output,
            args: ['auLeave']
        }], ratingChange: [{
            type: Output,
            args: ['auRatingChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "components/rating/rating.component.ts", lineNumber: 66 }); })();

const _c0$4 = ["auSelect", ""];
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
const _c1$3 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r6 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(state_r1.badgeClassName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c1$3, state_r1, ctx_r5.widget, itemContext_r6));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 8, "div", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function SelectComponent_Conditional_0_Conditional_3_For_2_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r21); const itemContext_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r20.widget.api.toggleItem(itemContext_r14.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r14 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bg-light", itemContext_r14 === state_r1.highlighted)("selected", itemContext_r14.selected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotItem)("auSlotProps", i0.ɵɵpureFunction3(6, _c1$3, state_r1, ctx_r13.widget, itemContext_r14));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵlistener("mousedown", function SelectComponent_Conditional_0_Conditional_3_Template_ul_mousedown_0_listener($event) { return $event.preventDefault(); });
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 10, "li", 8, i0.ɵɵcomponentInstance().itemCtxTrackBy);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dropdown-menu show " + (ctx_r3.menuClassName || ""));
    i0.ɵɵproperty("auUse", ctx_r3.menuDirective);
    i0.ɵɵattribute("data-popper-placement", state_r1.placement);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r1.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25._widget.actions.onInputKeydown($event)); })("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27._widget.actions.onInput($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 4, "ul", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    let SelectComponent_Conditional_0_contFlowTmp;
    i0.ɵɵproperty("auUse", ctx_r0._widget.directives.hasFocusDirective);
    i0.ɵɵattribute("aria-expanded", ctx.open);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (SelectComponent_Conditional_0_contFlowTmp = ctx.selectedContexts) ? 1 : -1, SelectComponent_Conditional_0_contFlowTmp);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx.filterText);
    i0.ɵɵattribute("id", ctx.id)("aria-label", ctx.ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, ctx.open && ctx.visibleItems.length ? 3 : -1);
} }
class SelectBadgeLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectBadgeLabelDirective_Factory(t) { return new (t || SelectBadgeLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectBadgeLabelDirective, selectors: [["ng-template", "auSelectBadgeLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectBadgeLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectBadgeLabel]', standalone: true }]
    }], null, null); })();
class SelectItemDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectItemDirective_Factory(t) { return new (t || SelectItemDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectItemDirective, selectors: [["ng-template", "auSelectItem", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectItemDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectItem]', standalone: true }]
    }], null, null); })();
class SelectComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter();
        /**
         * Callback called when the selection change
         */
        this.selectedChange = new EventEmitter();
        /**
         * Callback called dropdown open state change
         */
        this.openChange = new EventEmitter();
        this._widget = callWidgetFactory({
            factory: createSelect,
            widgetName: 'select',
            events: {
                onOpenChange: (event) => this.openChange.emit(event),
                onSelectedChange: (event) => this.selectedChange.emit(event),
                onFilterTextChange: (event) => this.filterTextChange.emit(event),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.referenceDirective);
            },
        });
    }
    get menuDirective() {
        return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.floatingDirective);
    }
    itemCtxTrackBy(_, itemContext) {
        return itemContext.id;
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotBadgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
            slotItem: this.slotSelectItemFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSelectComponent_BaseFactory; return function SelectComponent_Factory(t) { return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SelectComponent)))(t || SelectComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["", "auSelect", ""]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SelectBadgeLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SelectItemDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectBadgeLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectItemFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state().className);
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], id: ["auId", "id"], items: ["auItems", "items"], allowedPlacements: ["auAllowedPlacements", "allowedPlacements"], open: ["auOpen", "open", auBooleanAttribute], filterText: ["auFilterText", "filterText"], className: ["auClassName", "className"], disabled: ["auDisabled", "disabled", auBooleanAttribute], selected: ["auSelected", "selected"], loading: ["auLoading", "loading", auBooleanAttribute], itemIdFn: ["auItemIdFn", "itemIdFn"], menuClassName: ["auMenuClassName", "menuClassName"], slotBadgeLabel: ["auSlotBadgeLabel", "slotBadgeLabel"], slotItem: ["auSlotItem", "slotItem"], menuItemClassName: ["auMenuItemClassName", "menuItemClassName"], badgeClassName: ["auBadgeClassName", "badgeClassName"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0$4, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "value", "keydown", "input"], [3, "auUse", "class"], [1, "au-select-badge", "me-1"], [3, "auSlot", "auSlotProps"], ["class", "au-select-badge me-1", 3, "class"], [3, "auUse", "mousedown"], [1, "au-select-item", "dropdown-item", "position-relative", 3, "click"], ["class", "au-select-item dropdown-item position-relative", 3, "bg-light", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 7);
        } if (rf & 2) {
            let SelectComponent_contFlowTmp;
            i0.ɵɵconditional(0, (SelectComponent_contFlowTmp = ctx.state()) ? 0 : -1, SelectComponent_contFlowTmp);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], SelectComponent.prototype, "menuDirective", null);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [UseDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auSelect]',
                host: {
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
                },
                template: \`
		@if (state(); as state) {
			<div
				[auUse]="_widget.directives.hasFocusDirective"
				role="combobox"
				class="d-flex align-items-center flex-wrap"
				aria-haspopup="listbox"
				[attr.aria-expanded]="state.open"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div class="au-select-badge me-1" [class]="state.badgeClassName">
							<ng-template [auSlot]="state.slotBadgeLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</div>
					}
				}
				<input
					attr.id="{{ state.id }}"
					attr.aria-label="{{ state.ariaLabel }}"
					type="text"
					class="au-select-input flex-grow-1 border-0"
					[value]="state.filterText"
					aria-autocomplete="list"
					autoCorrect="off"
					autoCapitalize="none"
					autoComplete="off"
					(keydown)="_widget.actions.onInputKeydown($event)"
					(input)="_widget.actions.onInput($event)"
				/>
			</div>
			@if (state.open && state.visibleItems.length) {
				<ul
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							class="au-select-item dropdown-item position-relative"
							[class.bg-light]="itemContext === state.highlighted"
							[class.selected]="itemContext.selected"
							(click)="widget.api.toggleItem(itemContext.item)"
						>
							<ng-template [auSlot]="state.slotItem" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</li>
					}
				</ul>
			}
		}
	\`,
            }]
    }], null, { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], id: [{
            type: Input,
            args: ['auId']
        }], items: [{
            type: Input,
            args: ['auItems']
        }], allowedPlacements: [{
            type: Input,
            args: ['auAllowedPlacements']
        }], open: [{
            type: Input,
            args: [{ alias: 'auOpen', transform: auBooleanAttribute }]
        }], filterText: [{
            type: Input,
            args: ['auFilterText']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], selected: [{
            type: Input,
            args: ['auSelected']
        }], loading: [{
            type: Input,
            args: [{ alias: 'auLoading', transform: auBooleanAttribute }]
        }], itemIdFn: [{
            type: Input,
            args: ['auItemIdFn']
        }], menuClassName: [{
            type: Input,
            args: ['auMenuClassName']
        }], slotBadgeLabel: [{
            type: Input,
            args: ['auSlotBadgeLabel']
        }], slotSelectBadgeLabelFromContent: [{
            type: ContentChild,
            args: [SelectBadgeLabelDirective, { static: false }]
        }], slotItem: [{
            type: Input,
            args: ['auSlotItem']
        }], slotSelectItemFromContent: [{
            type: ContentChild,
            args: [SelectItemDirective, { static: false }]
        }], filterTextChange: [{
            type: Output,
            args: ['auFilterTextChange']
        }], selectedChange: [{
            type: Output,
            args: ['auSelectedChange']
        }], openChange: [{
            type: Output,
            args: ['auOpenChange']
        }], menuItemClassName: [{
            type: Input,
            args: ['auMenuItemClassName']
        }], badgeClassName: [{
            type: Input,
            args: ['auBadgeClassName']
        }], menuDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 94 }); })();

const _c0$3 = ["structure"];
function AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const widget_r3 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r3.api.close()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵattribute("aria-label", state_r2.ariaCloseButtonLabel);
} }
const _c1$2 = (a0, a1) => ({ state: a0, widget: a1 });
function AlertDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 4);
} if (rf & 2) {
    const state_r2 = ctx.state;
    const widget_r3 = ctx.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(3, _c1$2, state_r2, widget_r3));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r2.dismissible ? 2 : -1);
} }
const _c2$2 = ["auAlert", ""];
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AlertComponent_Conditional_1_ng_template_1_Template(rf, ctx) { }
function AlertComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("au-alert alert alert-", ctx_r1.state().type, " ", ctx_r1.state().className, " ", ctx_r1.state().dismissible ? "alert-dismissible" : "", "");
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.transitionDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(8, _c1$2, ctx_r1.state(), ctx_r1.widget));
} }
const _c3$1 = ["*"];
class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertBodyDirective_Factory(t) { return new (t || AlertBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AlertBodyDirective, selectors: [["ng-template", "auAlertBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAlertBody]', standalone: true }]
    }], null, null); })();
class AlertStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertStructureDirective_Factory(t) { return new (t || AlertStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AlertStructureDirective, selectors: [["ng-template", "auAlertStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
    }], null, null); })();
class AlertDefaultSlotsComponent {
    static { this.ɵfac = function AlertDefaultSlotsComponent_Factory(t) { return new (t || AlertDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AlertDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$3, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auAlertStructure", ""], ["structure", ""], [1, "alert-body"], [3, "auSlot", "auSlotProps"], ["type", "button", "class", "btn-close"], ["type", "button", 1, "btn-close", 3, "click"]], template: function AlertDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertDefaultSlotsComponent_ng_template_0_Template, 3, 6, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, AlertStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, AlertStructureDirective],
                template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible) {
			<button type="button" class="btn-close" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
		}
	</ng-template>\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 55 }); })();
const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
const defaultConfig$2 = {
    slotStructure: alertDefaultSlotStructure,
};
class AlertComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * Callback called when the alert visibility changed.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Callback called when the alert is hidden.
         */
        this.hidden = new EventEmitter();
        /**
         * Callback called when the alert is shown.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig$2);
        this._widget = callWidgetFactory({
            factory: createAlert,
            widgetName: 'alert',
            defaultConfig: this.defaultSlots,
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAlertComponent_BaseFactory; return function AlertComponent_Factory(t) { return (ɵAlertComponent_BaseFactory || (ɵAlertComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AlertComponent)))(t || AlertComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["", "auAlert", ""]], contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AlertBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AlertStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, inputs: { type: ["auType", "type"], dismissible: ["auDismissible", "dismissible", auBooleanAttribute], transition: ["auTransition", "transition"], visible: ["auVisible", "visible", auBooleanAttribute], animationOnInit: ["auAnimationOnInit", "animationOnInit", auBooleanAttribute], animation: ["auAnimation", "animation", auBooleanAttribute], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: ["auSlotDefault", "slotDefault"], slotStructure: ["auSlotStructure", "slotStructure"], className: ["auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2$2, ngContentSelectors: _c3$1, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, AlertComponent_Conditional_1_Template, 2, 11, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(1, !ctx.state().hidden ? 1 : -1);
        } }, dependencies: [SlotDirective, UseDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: '[auAlert]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseDirective, SlotDefaultDirective],
                template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		@if (!state().hidden) {
			<div
				[auUse]="widget.directives.transitionDirective"
				class="au-alert alert alert-{{ state().type }} {{ state().className }} {{ state().dismissible ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}\`,
            }]
    }], null, { type: [{
            type: Input,
            args: ['auType']
        }], dismissible: [{
            type: Input,
            args: [{ alias: 'auDismissible', transform: auBooleanAttribute }]
        }], transition: [{
            type: Input,
            args: ['auTransition']
        }], visible: [{
            type: Input,
            args: [{ alias: 'auVisible', transform: auBooleanAttribute }]
        }], animationOnInit: [{
            type: Input,
            args: [{ alias: 'auAnimationOnInit', transform: auBooleanAttribute }]
        }], animation: [{
            type: Input,
            args: [{ alias: 'auAnimation', transform: auBooleanAttribute }]
        }], ariaCloseButtonLabel: [{
            type: Input,
            args: ['auAriaCloseButtonLabel']
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [AlertBodyDirective, { static: false }]
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [AlertStructureDirective, { static: false }]
        }], visibleChange: [{
            type: Output,
            args: ['auVisibleChange']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "components/alert/alert.component.ts", lineNumber: 85 }); })();

const _c0$2 = ["structure"];
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r12 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r14 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", _r14);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r16 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", _r16);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r18 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", _r18);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r20 = i0.ɵɵreference(16);
    i0.ɵɵproperty("ngTemplateOutlet", _r20);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r22 = i0.ɵɵreference(18);
    i0.ɵɵproperty("ngTemplateOutlet", _r22);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r14 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", _r14);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    const _r24 = i0.ɵɵreference(20);
    i0.ɵɵclassMapInterpolate1("accordion-header ", state_r2.itemHeaderClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r24);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
const _c1$1 = (a0, a1) => ({ state: a0, widget: a1 });
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const widget_r3 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r3.actions.click()); });
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext();
    const state_r2 = ctx_r42.state;
    const widget_r3 = ctx_r42.widget;
    i0.ɵɵclassMapInterpolate1("accordion-button ", state_r2.itemButtonClass, "");
    i0.ɵɵclassProp("collapsed", !state_r2.itemVisible);
    i0.ɵɵpropertyInterpolate1("id", "", state_r2.itemId, "-toggle");
    i0.ɵɵattributeInterpolate1("aria-controls", "", state_r2.itemId, "-collapse");
    i0.ɵɵproperty("disabled", state_r2.itemDisabled);
    i0.ɵɵattribute("aria-disabled", state_r2.itemDisabled)("aria-expanded", state_r2.itemVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(12, _c1$1, state_r2, widget_r3))("auSlot", state_r2.slotItemHeader);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div");
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const state_r2 = ctx_r44.state;
    const widget_r3 = ctx_r44.widget;
    i0.ɵɵclassMapInterpolate1("accordion-collapse ", state_r2.itemCollapseClass, "");
    i0.ɵɵattributeInterpolate1("aria-labelledby", "", state_r2.itemId, "-toggle");
    i0.ɵɵpropertyInterpolate1("id", "", state_r2.itemId, "-collapse");
    i0.ɵɵproperty("auUse", widget_r3.directives.collapseDirective);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-body ", state_r2.itemBodyClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(11, _c1$1, state_r2, widget_r3))("auSlot", state_r2.slotItemBody);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 4, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 15, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 14, "div", 8);
} if (rf & 2) {
    const state_r2 = ctx.state;
    let AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp;
    i0.ɵɵconditional(0, (AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp = state_r2.itemHeadingTag) === "h1" ? 0 : AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp === "h2" ? 1 : AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp === "h3" ? 2 : AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp === "h4" ? 3 : AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp === "h5" ? 4 : AccordionItemDefaultSlotsComponent_ng_template_0_contFlowTmp === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(21, state_r2.shouldBeInDOM ? 21 : -1);
} }
const _c2$1 = ["auAccordionItem", ""];
function AccordionItemComponent_ng_template_0_Template(rf, ctx) { }
class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionBodyDirective_Factory(t) { return new (t || AccordionBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionBodyDirective, selectors: [["ng-template", "auAccordionItemBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemBody]', standalone: true }]
    }], null, null); })();
class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionHeaderDirective_Factory(t) { return new (t || AccordionHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionHeaderDirective, selectors: [["ng-template", "auAccordionItemHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemHeader]', standalone: true }]
    }], null, null); })();
class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionItemStructureDirective_Factory(t) { return new (t || AccordionItemStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionItemStructureDirective, selectors: [["ng-template", "auAccordionItemStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemStructure]', standalone: true }]
    }], null, null); })();
class AccordionItemDefaultSlotsComponent {
    static { this.ɵfac = function AccordionItemDefaultSlotsComponent_Factory(t) { return new (t || AccordionItemDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AccordionItemDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], [3, "auUse", "id", "class"], [3, "ngTemplateOutlet"], ["type", "button", 3, "id", "disabled", "click"], [3, "auSlotProps", "auSlot"], [3, "auUse", "id"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Template, 22, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, AccordionHeaderDirective, AccordionBodyDirective, NgTemplateOutlet],
                template: \`
		<ng-template #structure let-state="state" let-widget="widget">
			@switch (state.itemHeadingTag) {
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
				<h1 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header {{ state.itemHeaderClass }}">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="!state.itemVisible"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="state.itemVisible"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div
					[auUse]="widget.directives.collapseDirective"
					attr.aria-labelledby="{{ state.itemId }}-toggle"
					id="{{ state.itemId }}-collapse"
					class="accordion-collapse {{ state.itemCollapseClass }}"
				>
					<div class="accordion-body {{ state.itemBodyClass }}">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 154 }); })();
const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig$1 = {
    slotItemStructure: accordionItemDefaultSlotItemStructure,
};
class AccordionItemComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         */
        this.itemVisibleChange = new EventEmitter();
        this.ad = inject(AccordionDirective);
        this._widget = callWidgetFactory({
            factory: ((arg) => this.ad.api.registerItem(arg)),
            defaultConfig: defaultConfig$1,
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.accordionItemDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotItemStructure: this.slotItemStructureFromContent?.templateRef,
            slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
            slotItemBody: this.slotItemBodyFromContent?.templateRef,
        });
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAccordionItemComponent_BaseFactory; return function AccordionItemComponent_Factory(t) { return (ɵAccordionItemComponent_BaseFactory || (ɵAccordionItemComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AccordionItemComponent)))(t || AccordionItemComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemComponent, selectors: [["", "auAccordionItem", ""]], contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AccordionHeaderDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AccordionItemStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemHeaderFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemBodyFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemStructureFromContent = _t.first);
        } }, hostVars: 3, hostBindings: function AccordionItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.state().itemId);
            i0.ɵɵclassMap("accordion-item " + ctx.state().itemClass);
        } }, inputs: { slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], itemId: ["auItemId", "itemId"], itemTransition: ["auItemTransition", "itemTransition"], itemClass: ["auItemClass", "itemClass"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: ["auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: ["auItemVisible", "itemVisible", auBooleanAttribute], itemAnimation: ["auItemAnimation", "itemAnimation", auBooleanAttribute], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"], itemHeadingTag: ["auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2$1, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(2, _c1$1, ctx.state(), ctx.widget))("auSlot", ctx.state().slotItemStructure);
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
                    '[class]': '"accordion-item " + state().itemClass',
                    '[id]': 'state().itemId',
                },
                imports: [SlotDirective, UseDirective],
                template: \` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> \`,
            }]
    }], null, { slotItemHeader: [{
            type: Input,
            args: ['auSlotItemHeader']
        }], slotItemHeaderFromContent: [{
            type: ContentChild,
            args: [AccordionHeaderDirective, { static: false }]
        }], slotItemBody: [{
            type: Input,
            args: ['auSlotItemBody']
        }], slotItemBodyFromContent: [{
            type: ContentChild,
            args: [AccordionBodyDirective, { static: false }]
        }], slotItemStructure: [{
            type: Input,
            args: ['auSlotItemStructure']
        }], slotItemStructureFromContent: [{
            type: ContentChild,
            args: [AccordionItemStructureDirective, { static: false }]
        }], itemId: [{
            type: Input,
            args: ['auItemId']
        }], itemTransition: [{
            type: Input,
            args: ['auItemTransition']
        }], itemClass: [{
            type: Input,
            args: ['auItemClass']
        }], itemDestroyOnHide: [{
            type: Input,
            args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
        }], itemDisabled: [{
            type: Input,
            args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
        }], itemVisible: [{
            type: Input,
            args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
        }], itemAnimation: [{
            type: Input,
            args: [{ alias: 'auItemAnimation', transform: auBooleanAttribute }]
        }], itemHeaderClass: [{
            type: Input,
            args: ['auItemHeaderClass']
        }], itemButtonClass: [{
            type: Input,
            args: ['auItemButtonClass']
        }], itemCollapseClass: [{
            type: Input,
            args: ['auItemCollapseClass']
        }], itemBodyClass: [{
            type: Input,
            args: ['auItemBodyClass']
        }], itemHeadingTag: [{
            type: Input,
            args: ['auItemHeadingTag']
        }], itemShown: [{
            type: Output,
            args: ['auItemShown']
        }], itemHidden: [{
            type: Output,
            args: ['auItemHidden']
        }], itemVisibleChange: [{
            type: Output,
            args: ['auItemVisibleChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 175 }); })();
class AccordionDirective extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         */
        this.shown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         */
        this.hidden = new EventEmitter();
        //should not be documented
        /**
         * An event fired when an item is shown.
         *
         * It is a prop of the accordion-item.
         */
        this.itemShown = new EventEmitter();
        /**
         * An event fired when an item is hidden.
         *
         * It is a prop of the accordion-item.
         */
        this.itemHidden = new EventEmitter();
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         *
         * It is a prop of the accordion-item.
         */
        this.itemVisibleChange = new EventEmitter();
        this._widget = callWidgetFactory({
            factory: createAccordion,
            widgetName: 'accordion',
            events: {
                onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
                onItemHidden: () => this.itemHidden.emit(),
                onItemShown: () => this.itemShown.emit(),
                onShown: (id) => this.shown.emit(id),
                onHidden: (id) => this.hidden.emit(id),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.accordionDirective);
            },
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAccordionDirective_BaseFactory; return function AccordionDirective_Factory(t) { return (ɵAccordionDirective_BaseFactory || (ɵAccordionDirective_BaseFactory = i0.ɵɵgetInheritedFactory(AccordionDirective)))(t || AccordionDirective); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostVars: 2, hostBindings: function AccordionDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("accordion " + ctx.state().className);
        } }, inputs: { closeOthers: ["auCloseOthers", "closeOthers", auBooleanAttribute], className: ["auClassName", "className"], itemId: ["auItemId", "itemId"], itemDestroyOnHide: ["auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: ["auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: ["auItemVisible", "itemVisible", auBooleanAttribute], itemAnimation: ["auItemAnimation", "itemAnimation", auBooleanAttribute], itemTransition: ["auItemTransition", "itemTransition"], slotItemStructure: ["auSlotItemStructure", "slotItemStructure"], slotItemBody: ["auSlotItemBody", "slotItemBody"], slotItemHeader: ["auSlotItemHeader", "slotItemHeader"], itemClass: ["auItemClass", "itemClass"], itemHeaderClass: ["auItemHeaderClass", "itemHeaderClass"], itemButtonClass: ["auItemButtonClass", "itemButtonClass"], itemCollapseClass: ["auItemCollapseClass", "itemCollapseClass"], itemBodyClass: ["auItemBodyClass", "itemBodyClass"], itemHeadingTag: ["auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionDirective, [{
        type: Directive,
        args: [{
                selector: '[auAccordion]',
                exportAs: 'auAccordion',
                standalone: true,
                host: {
                    '[class]': '"accordion " + state().className',
                },
            }]
    }], null, { closeOthers: [{
            type: Input,
            args: [{ alias: 'auCloseOthers', transform: auBooleanAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], itemId: [{
            type: Input,
            args: ['auItemId']
        }], itemDestroyOnHide: [{
            type: Input,
            args: [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]
        }], itemDisabled: [{
            type: Input,
            args: [{ alias: 'auItemDisabled', transform: auBooleanAttribute }]
        }], itemVisible: [{
            type: Input,
            args: [{ alias: 'auItemVisible', transform: auBooleanAttribute }]
        }], itemAnimation: [{
            type: Input,
            args: [{ alias: 'auItemAnimation', transform: auBooleanAttribute }]
        }], itemTransition: [{
            type: Input,
            args: ['auItemTransition']
        }], slotItemStructure: [{
            type: Input,
            args: ['auSlotItemStructure']
        }], slotItemBody: [{
            type: Input,
            args: ['auSlotItemBody']
        }], slotItemHeader: [{
            type: Input,
            args: ['auSlotItemHeader']
        }], itemClass: [{
            type: Input,
            args: ['auItemClass']
        }], itemHeaderClass: [{
            type: Input,
            args: ['auItemHeaderClass']
        }], itemButtonClass: [{
            type: Input,
            args: ['auItemButtonClass']
        }], itemCollapseClass: [{
            type: Input,
            args: ['auItemCollapseClass']
        }], itemBodyClass: [{
            type: Input,
            args: ['auItemBodyClass']
        }], itemHeadingTag: [{
            type: Input,
            args: ['auItemHeadingTag']
        }], itemShown: [{
            type: Output,
            args: ['auItemShown']
        }], itemHidden: [{
            type: Output,
            args: ['auItemHidden']
        }], itemVisibleChange: [{
            type: Output,
            args: ['auItemVisibleChange']
        }] }); })();

const _c0$1 = ["auSlider", ""];
const _forTrack1 = ($index, $item) => $item.id;
function SliderComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    i0.ɵɵstyleProp("left", option_r4.left, "%")("right", option_r4.right, "%")("bottom", option_r4.bottom, "%")("top", option_r4.top, "%")("width", option_r4.width, "%")("height", option_r4.height, "%");
} }
function SliderComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-min" : "au-slider-label au-slider-label-min");
    i0.ɵɵclassProp("au-slider-rtl", ctx_r1.state().rtl)("invisible", !ctx_r1.state().minValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().min, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max");
    i0.ɵɵclassProp("au-slider-rtl", ctx_r1.state().rtl)("invisible", !ctx_r1.state().maxValueLabelDisplay);
    i0.ɵɵproperty("auUse", ctx_r1.widget.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.state().max, " ");
} }
function SliderComponent_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r9.state().sortedValues[1], " - ", ctx_r9.state().sortedValues[0], " ");
} }
function SliderComponent_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r10.state().sortedValues[0], " - ", ctx_r10.state().sortedValues[1], " ");
} }
function SliderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SliderComponent_Conditional_4_Conditional_1_Template, 1, 2)(2, SliderComponent_Conditional_4_Conditional_2_Template, 1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r2.state().combinedLabelPositionLeft, "%")("top", ctx_r2.state().combinedLabelPositionTop, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r2.state().rtl ? 1 : 2);
} }
function SliderComponent_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r12 = i0.ɵɵnextContext().$index;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r16.state().vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now");
    i0.ɵɵstyleProp("left", ctx_r16.state().handleDisplayOptions[i_r12].left, "%")("top", ctx_r16.state().handleDisplayOptions[i_r12].top, "%");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r16.state().values[i_r12], " ");
} }
function SliderComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("keydown", function SliderComponent_For_6_Template_button_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onKeyDown($event, item_r11.id)); })("mousedown", function SliderComponent_For_6_Template_button_mousedown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.widget.actions.mouseDown($event, item_r11.id)); })("touchstart", function SliderComponent_For_6_Template_button_touchstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r11 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.widget.actions.touchStart($event, item_r11.id)); });
    i0.ɵɵtext(1, " \\u00A0 ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, SliderComponent_For_6_Conditional_2_Template, 2, 7, "div", 1);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.state().vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal");
    i0.ɵɵstyleProp("left", ctx_r3.state().handleDisplayOptions[item_r11.id].left, "%")("top", ctx_r3.state().handleDisplayOptions[item_r11.id].top, "%");
    i0.ɵɵproperty("disabled", ctx_r3.state().disabled);
    i0.ɵɵattribute("aria-valuemin", ctx_r3.state().min)("aria-valuemax", ctx_r3.state().max)("aria-readonly", ctx_r3.state().readonly ? true : null)("aria-disabled", ctx_r3.state().disabled ? true : null)("aria-valuenow", item_r11.value)("aria-valuetext", item_r11.value)("aria-label", item_r11.ariaLabel)("aria-orientation", ctx_r3.state().vertical ? "vertical" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(2, ctx_r3.state().showValueLabels && !ctx_r3.state().combinedLabelDisplay ? 2 : -1);
} }
class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._zone = inject(NgZone);
        this._widget = callWidgetFactory({
            factory: createSlider,
            widgetName: 'slider',
            events: {
                onValuesChange: (event) => {
                    this.onChange(event);
                    this.onTouched();
                    this.valuesChange.emit(event);
                },
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.sliderDirective);
            },
        });
        /**
         * An event emitted when slider values are changed
         *
         * Event payload equals to the updated slider values
         */
        this.valuesChange = new EventEmitter();
        /**
         * Control value accessor methods
         */
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (Array.isArray(value)) {
            this._widget.patch({
                values: value,
            });
        }
        else {
            this._widget.patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this._widget.patch({
            disabled: isDisabled,
        });
    }
    handleBlur() {
        this.onTouched();
    }
    sliderClick($event) {
        this.widget.actions.click($event);
    }
    onKeyDown(event, handleId) {
        this.widget.actions.keydown(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSliderComponent_BaseFactory; return function SliderComponent_Factory(t) { return (ɵSliderComponent_BaseFactory || (ɵSliderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SliderComponent)))(t || SliderComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], hostAttrs: [1, "au-slider"], hostVars: 4, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } if (rf & 2) {
            i0.ɵɵclassMap((ctx.state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + ctx.state().className);
            i0.ɵɵclassProp("disabled", ctx.state().disabled);
        } }, inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], rtl: ["auRtl", "rtl", auBooleanAttribute], showValueLabels: ["auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: ["auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0$1, decls: 7, vars: 4, consts: [[3, "click"], [3, "class", "left", "top"], [1, "au-slider-progress"], [3, "auUse"], ["role", "slider", 1, "au-slider-handle", 3, "disabled", "keydown", "mousedown", "touchstart"], ["class", "au-slider-progress", 3, "left", "right", "bottom", "top", "width", "height"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, SliderComponent_For_1_Template, 1, 12, "div", 5, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵlistener("click", function SliderComponent_Template_div_click_2_listener($event) { return ctx.sliderClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, SliderComponent_Conditional_3_Template, 4, 16)(4, SliderComponent_Conditional_4_Template, 3, 7, "div", 1);
            i0.ɵɵrepeaterCreate(5, SliderComponent_For_6_Template, 3, 16, null, null, _forTrack1);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().progressDisplayOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.state().vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area");
            i0.ɵɵadvance();
            i0.ɵɵconditional(3, ctx.state().showMinMaxLabels ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(4, ctx.state().showValueLabels && ctx.state().combinedLabelDisplay ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.state().sortedHandles);
        } }, dependencies: [UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: '[auSlider]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                imports: [UseDirective],
                host: {
                    class: \`au-slider\`,
                    '[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
                    '[class.disabled]': 'state().disabled',
                    '(blur)': 'handleBlur()',
                },
                template: \`
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.right.%]="option.right"
				[style.bottom.%]="option.bottom"
				[style.top.%]="option.top"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		@if (state().showMinMaxLabels) {
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
				[class.au-slider-rtl]="state().rtl"
				[class.invisible]="!state().minValueLabelDisplay"
				[auUse]="widget.directives.minLabelDirective"
			>
				{{ state().min }}
			</div>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
				[class.au-slider-rtl]="state().rtl"
				[class.invisible]="!state().maxValueLabelDisplay"
				[auUse]="widget.directives.maxLabelDirective"
			>
				{{ state().max }}
			</div>
		}
		@if (state().showValueLabels && state().combinedLabelDisplay) {
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
				[style.left.%]="state().combinedLabelPositionLeft"
				[style.top.%]="state().combinedLabelPositionTop"
			>
				@if (state().rtl) {
					{{ state().sortedValues[1] }} - {{ state().sortedValues[0] }}
				} @else {
					{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
				}
			</div>
		}
		@for (item of state().sortedHandles; track item.id; let i = $index) {
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state().vertical ? 'vertical' : null"
				[disabled]="state().disabled"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
				(touchstart)="widget.actions.touchStart($event, item.id)"
			>
				&nbsp;
			</button>
			@if (state().showValueLabels && !state().combinedLabelDisplay) {
				<div
					[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
					[style.left.%]="state().handleDisplayOptions[i].left"
					[style.top.%]="state().handleDisplayOptions[i].top"
				>
					{{ state().values[i] }}
				</div>
			}
		}
	\`,
            }]
    }], null, { className: [{
            type: Input,
            args: ['auClassName']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], stepSize: [{
            type: Input,
            args: [{ alias: 'auStepSize', transform: auNumberAttribute }]
        }], values: [{
            type: Input,
            args: ['auValues']
        }], rtl: [{
            type: Input,
            args: [{ alias: 'auRtl', transform: auBooleanAttribute }]
        }], showValueLabels: [{
            type: Input,
            args: [{ alias: 'auShowValueLabels', transform: auBooleanAttribute }]
        }], showMinMaxLabels: [{
            type: Input,
            args: [{ alias: 'auShowMinMaxLabels', transform: auBooleanAttribute }]
        }], ariaLabelHandle: [{
            type: Input,
            args: ['auAriaLabelHandle']
        }], readonly: [{
            type: Input,
            args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], vertical: [{
            type: Input,
            args: [{ alias: 'auVertical', transform: auBooleanAttribute }]
        }], valuesChange: [{
            type: Output,
            args: ['auValuesChange']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 106 }); })();

const _c0 = ["content"];
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r2 = ctx.state;
    const widget_r3 = ctx.widget;
    i0.ɵɵstyleProp("height", state_r2.height);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r2.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r2.striped)("progress-bar-animated", state_r2.animated);
    i0.ɵɵproperty("ngClass", state_r2.className);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, state_r2, widget_r3));
} }
const _c2 = ["auProgressbar", ""];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { }
const _c3 = ["*"];
class ProgressbarContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarContentDirective_Factory(t) { return new (t || ProgressbarContentDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarContentDirective, selectors: [["ng-template", "auProgressbarContent", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarContentDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
    }], null, null); })();
class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(t) { return new (t || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auProgressbarContent", ""], ["content", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 14, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarContentDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarContentDirective],
                template: \`
		<ng-template auProgressbarContent #content let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.className"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 45 }); })();
const progressbarDefaultSlotContent = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'content');
const defaultConfig = {
    slotContent: progressbarDefaultSlotContent,
};
class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({ factory: createProgressbar, widgetName: 'progressbar', defaultConfig: this.defaultSlots, events: {} });
    }
    ngAfterContentChecked() {
        this._widget.patch({
            slotContent: this.slotContentFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(t) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(t || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotContentFromContent = _t.first);
        } }, hostAttrs: ["role", "progressbar"], hostVars: 5, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.state().ariaLabel || undefined)("aria-valuenow", ctx.state().value)("aria-valuemin", ctx.state().min)("aria-valuemax", ctx.state().max)("aria-valuetext", ctx.state().ariaValueText);
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], value: ["auValue", "value", auNumberAttribute], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated", auBooleanAttribute], striped: ["auStriped", "striped", auBooleanAttribute], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auSlotDefault"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().slotContent)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget));
        } }, dependencies: [SlotDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                standalone: true,
                imports: [SlotDirective, SlotDefaultDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    role: 'progressbar',
                    '[attr.aria-label]': 'state().ariaLabel || undefined',
                    '[attr.aria-valuenow]': 'state().value',
                    '[attr.aria-valuemin]': 'state().min',
                    '[attr.aria-valuemax]': 'state().max',
                    '[attr.aria-valuetext]': 'state().ariaValueText',
                },
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`,
            }]
    }], null, { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], value: [{
            type: Input,
            args: [{ alias: 'auValue', transform: auNumberAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotContent: [{
            type: Input,
            args: ['auSlotContent']
        }], slotContentFromContent: [{
            type: ContentChild,
            args: [ProgressbarContentDirective, { static: false }]
        }], height: [{
            type: Input,
            args: ['auHeight']
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], striped: [{
            type: Input,
            args: [{ alias: 'auStriped', transform: auBooleanAttribute }]
        }], ariaValueTextFn: [{
            type: Input,
            args: ['auAriaValueTextFn']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 74 }); })();

/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
    SelectBadgeLabelDirective,
    SelectItemDirective,
    UseDirective,
    RatingComponent,
    RatingStarDirective,
    PaginationComponent,
    PaginationEllipsisDirective,
    PaginationFirstDirective,
    PaginationLastDirective,
    PaginationNextDirective,
    PaginationNumberDirective,
    PaginationPreviousDirective,
    PaginationPagesDirective,
    ModalComponent,
    ModalStructureDirective,
    ModalHeaderDirective,
    ModalTitleDirective,
    ModalBodyDirective,
    ModalFooterDirective,
    AlertComponent,
    AlertStructureDirective,
    AlertBodyDirective,
    AccordionDirective,
    AccordionItemComponent,
    AccordionHeaderDirective,
    AccordionBodyDirective,
    AccordionItemStructureDirective,
    SliderComponent,
    ProgressbarComponent,
    ProgressbarContentDirective,
];
class AgnosUIAngularModule {
    static { this.ɵfac = function AgnosUIAngularModule_Factory(t) { return new (t || AgnosUIAngularModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AgnosUIAngularModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgnosUIAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: components,
                exports: components,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AgnosUIAngularModule, { imports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        ProgressbarComponent,
        ProgressbarContentDirective], exports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        ProgressbarComponent,
        ProgressbarContentDirective] }); })();

class ModalService {
    constructor() {
        this._injector = inject(Injector);
        this._applicationRef = inject(ApplicationRef);
    }
    async open(options, { injector = this._injector } = {}) {
        const component = createComponent(ModalComponent, {
            environmentInjector: injector.get(EnvironmentInjector),
            elementInjector: injector,
        });
        const subscriptions = [];
        try {
            for (const prop of Object.keys(options)) {
                const value = options[prop];
                if (prop.startsWith('on')) {
                    const eventName = \`\${prop[2].toLowerCase()}\${prop.substring(3)}\`;
                    const eventEmitter = component.instance[eventName];
                    if (eventEmitter instanceof EventEmitter) {
                        subscriptions.push(eventEmitter.subscribe(value));
                    }
                }
                else {
                    component.setInput(\`au\${prop.substring(0, 1).toUpperCase()}\${prop.substring(1)}\`, value);
                }
            }
            this._applicationRef.attachView(component.hostView);
            await component.instance._widget.initialized;
            return await component.instance.api.open();
        }
        finally {
            component.destroy();
            for (const subscription of subscriptions) {
                subscription.unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/*
 * Public API Surface of @agnos-ui/angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionBodyDirective, AccordionDirective, AccordionHeaderDirective, AccordionItemComponent, AccordionItemDefaultSlotsComponent, AccordionItemStructureDirective, AgnosUIAngularModule, AlertBodyDirective, AlertComponent, AlertDefaultSlotsComponent, AlertStructureDirective, ModalBodyDirective, ModalComponent, ModalDefaultSlotsComponent, ModalFooterDirective, ModalHeaderDirective, ModalService, ModalStructureDirective, ModalTitleDirective, PaginationComponent, PaginationDefaultSlotsComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, ProgressbarComponent, ProgressbarContentDirective, ProgressbarDefaultSlotsComponent, RatingComponent, RatingStarDirective, SelectBadgeLabelDirective, SelectComponent, SelectItemDirective, SliderComponent, accordionItemDefaultSlotItemStructure, alertDefaultSlotStructure, modalDefaultSlotHeader, modalDefaultSlotStructure, paginationDefaultSlotPages, progressbarDefaultSlotContent };
//# sourceMappingURL=agnos-ui-angular.mjs.map
`;export{t as default};
