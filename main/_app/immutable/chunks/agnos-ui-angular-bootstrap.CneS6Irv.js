const t=`import { widgetsConfigFactory, SlotDirective, UseDirective, ComponentTemplate, BaseWidgetDirective, mergeDirectives, auBooleanAttribute, SlotDefaultDirective, CachedProperty, auNumberAttribute, useDirectiveForHost } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/angular-headless';
import * as i0 from '@angular/core';
import { InjectionToken, inject, TemplateRef, Directive, Component, ChangeDetectionStrategy, ViewChild, EventEmitter, Input, ContentChild, Output, ViewEncapsulation, forwardRef, NgZone, NgModule, Injector, ApplicationRef, createComponent, EnvironmentInjector, Injectable } from '@angular/core';
import { __decorate } from 'tslib';
import { createModal as createModal$1 } from '@agnos-ui/core-bootstrap/components/modal';
export * from '@agnos-ui/core-bootstrap/components/modal';
export { getModalDefaultConfig } from '@agnos-ui/core-bootstrap/components/modal';
import { writable } from '@amadeus-it-group/tansu';
import { createPagination as createPagination$1 } from '@agnos-ui/core-bootstrap/components/pagination';
export * from '@agnos-ui/core-bootstrap/components/pagination';
export { getPaginationDefaultConfig } from '@agnos-ui/core-bootstrap/components/pagination';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { createRating as createRating$1 } from '@agnos-ui/core-bootstrap/components/rating';
export * from '@agnos-ui/core-bootstrap/components/rating';
export { getRatingDefaultConfig } from '@agnos-ui/core-bootstrap/components/rating';
import { createSelect as createSelect$1 } from '@agnos-ui/core-bootstrap/components/select';
export * from '@agnos-ui/core-bootstrap/components/select';
export { getSelectDefaultConfig } from '@agnos-ui/core-bootstrap/components/select';
import { createAlert as createAlert$1 } from '@agnos-ui/core-bootstrap/components/alert';
export * from '@agnos-ui/core-bootstrap/components/alert';
export { getAlertDefaultConfig } from '@agnos-ui/core-bootstrap/components/alert';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { createAccordion as createAccordion$1 } from '@agnos-ui/core-bootstrap/components/accordion';
export * from '@agnos-ui/core-bootstrap/components/accordion';
export { getAccordionDefaultConfig } from '@agnos-ui/core-bootstrap/components/accordion';
import { take } from 'rxjs';
import { createSlider as createSlider$1 } from '@agnos-ui/core-bootstrap/components/slider';
export * from '@agnos-ui/core-bootstrap/components/slider';
export { getSliderDefaultConfig } from '@agnos-ui/core-bootstrap/components/slider';
import { createProgressbar as createProgressbar$1 } from '@agnos-ui/core-bootstrap/components/progressbar';
export * from '@agnos-ui/core-bootstrap/components/progressbar';
export { getProgressbarDefaultConfig } from '@agnos-ui/core-bootstrap/components/progressbar';
import { createToast as createToast$1 } from '@agnos-ui/core-bootstrap/components/toast';
export * from '@agnos-ui/core-bootstrap/components/toast';
export { getToastDefaultConfig } from '@agnos-ui/core-bootstrap/components/toast';
export * from '@agnos-ui/core-bootstrap/services/transitions';
export * from '@agnos-ui/core-bootstrap/types';

const createModal = createModal$1;

const widgetFactories = widgetsConfigFactory(new InjectionToken('bootstrapWidgetsConfig'));
const { widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory } = widgetFactories;

const _c0$8 = ["header"];
const _c1$8 = ["structure"];
const _c2$6 = (a0, a1) => ({ state: a0, widget: a1 });
function ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 6);
} if (rf & 2) {
    const widget_r1 = i0.ɵɵnextContext().widget;
    i0.ɵɵproperty("auUse", widget_r1.directives.closeButtonDirective);
} }
function ModalDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 4);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 6);
} if (rf & 2) {
    const state_r2 = ctx.state;
    const widget_r1 = ctx.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.slotTitle)("auSlotProps", i0.ɵɵpureFunction2(3, _c2$6, state_r2, widget_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r2.closeButton ? 2 : -1);
} }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r5 = ctx_r2.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotHeader)("auSlotProps", i0.ɵɵpureFunction2(2, _c2$6, state_r4, widget_r5));
} }
function ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r5 = ctx_r2.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotFooter)("auSlotProps", i0.ɵɵpureFunction2(2, _c2$6, state_r4, widget_r5));
} }
function ModalDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template, 2, 5, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template, 2, 5, "div", 9);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const widget_r5 = ctx.widget;
    i0.ɵɵconditional(0, state_r4.slotTitle ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c2$6, state_r4, widget_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r4.slotFooter ? 3 : -1);
} }
const _c3$5 = ["auModal", ""];
const _c4$2 = ["*"];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ModalComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", ctx_r0.backdropDirective);
} }
function ModalComponent_Conditional_2_ng_template_3_Template(rf, ctx) { }
function ModalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, ModalComponent_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", ctx_r0.modalDirective);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(3, _c2$6, ctx_r0.state(), ctx_r0.widget));
} }
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
            i0.ɵɵviewQuery(_c0$8, 7);
            i0.ɵɵviewQuery(_c1$8, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["header", ""], ["structure", ""], ["auModalHeader", ""], ["auModalStructure", ""], [1, "modal-title"], [3, "auSlot", "auSlotProps"], [1, "btn-close", 3, "auUse"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"]], template: function ModalDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_0_Template, 3, 6, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, ModalDefaultSlotsComponent_ng_template_2_Template, 4, 7, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective],
                template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button class="btn-close" [auUse]="widget.directives.closeButtonDirective"></button>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDefaultSlotsComponent, { className: "ModalDefaultSlotsComponent", filePath: "components/modal/modal.component.ts", lineNumber: 118 }); })();
/**
 * Default slot for modal header.
 */
const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
const defaultConfig$6 = {
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
        this.defaultSlots = writable(defaultConfig$6);
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
        } }, inputs: { animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [i0.ɵɵInputFlags.None, "auBackdropTransition", "backdropTransition"], modalTransition: [i0.ɵɵInputFlags.None, "auModalTransition", "modalTransition"], visible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVisible", "visible", auBooleanAttribute], backdrop: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [i0.ɵɵInputFlags.None, "auContainer", "container"], ariaCloseButtonLabel: [i0.ɵɵInputFlags.None, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [i0.ɵɵInputFlags.None, "auBackdropClass", "backdropClass"], closeButton: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseButton", "closeButton", auBooleanAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHeader: [i0.ɵɵInputFlags.None, "auSlotHeader", "slotHeader"], slotTitle: [i0.ɵɵInputFlags.None, "auSlotTitle", "slotTitle"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotFooter: [i0.ɵɵInputFlags.None, "auSlotFooter", "slotFooter"], contentData: [i0.ɵɵInputFlags.None, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3$5, ngContentSelectors: _c4$2, decls: 3, vars: 3, consts: [[3, "auSlotDefault"], [1, "modal-backdrop", 3, "auUse"], [1, "modal", "d-block", 3, "auUse"], [1, "modal-dialog"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ModalComponent_Conditional_1_Template, 1, 1, "div", 1)(2, ModalComponent_Conditional_2_Template, 4, 6, "div", 2);
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
			<div class="modal-backdrop" [auUse]="backdropDirective"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block" [auUse]="modalDirective">
				<div class="modal-dialog">
					<div class="modal-content">
						<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
					</div>
				</div>
			</div>
		}
	\`,
            }]
    }], null, { animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "components/modal/modal.component.ts", lineNumber: 162 }); })();

const createPagination = createPagination$1;

const _c0$7 = ["pages"];
const _c1$7 = ["structure"];
const _c2$5 = (a0, a1) => ({ state: a0, widget: a1 });
const _c3$4 = (a0, a1, a2) => ({ state: a0, widget: a1, displayedPage: a2 });
const _c4$1 = (a0, a1) => ({ widget: a0, state: a1 });
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
    i0.ɵɵproperty("auSlot", state_r2.slotEllipsis)("auSlotProps", i0.ɵɵpureFunction2(3, _c2$5, state_r2, widget_r3));
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
    i0.ɵɵproperty("auSlot", state_r2.slotNumberLabel)("auSlotProps", i0.ɵɵpureFunction3(7, _c3$4, state_r2, widget_r3, page_r5));
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
    i0.ɵɵproperty("auSlot", state_r11.slotFirst)("auSlotProps", i0.ɵɵpureFunction2(8, _c4$1, widget_r9, state_r11));
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
    i0.ɵɵproperty("auSlot", state_r11.slotPrevious)("auSlotProps", i0.ɵɵpureFunction2(8, _c4$1, widget_r9, state_r11));
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
    i0.ɵɵproperty("auSlot", state_r11.slotNext)("auSlotProps", i0.ɵɵpureFunction2(8, _c4$1, widget_r9, state_r11));
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
    i0.ɵɵproperty("auSlot", state_r11.slotLast)("auSlotProps", i0.ɵɵpureFunction2(8, _c4$1, widget_r9, state_r11));
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
    i0.ɵɵproperty("auSlot", state_r11.slotPages)("auSlotProps", i0.ɵɵpureFunction2(9, _c4$1, widget_r9, state_r11));
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r11.directionLinks ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(5, state_r11.boundaryLinks ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current page is ", state_r11.page, "");
} }
const _c5$1 = ["auPagination", ""];
function PaginationComponent_ng_template_0_Template(rf, ctx) { }
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
/**
 * Directive to provide the slot structure for the pagination widget.
 */
class PaginationStructureDirective {
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
class PaginationDefaultSlotsComponent {
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(t) { return new (t || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$7, 7);
            i0.ɵɵviewQuery(_c1$7, 7);
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
const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');
const defaultConfig$5 = {
    slotStructure: paginationDefaultSlotStructure,
    slotPages: paginationDefaultSlotPages,
};
class PaginationComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this._widget = callWidgetFactory({
            factory: createPagination,
            widgetName: 'pagination',
            defaultConfig: defaultConfig$5,
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
        } }, inputs: { ariaPageLabel: [i0.ɵɵInputFlags.None, "auAriaPageLabel", "ariaPageLabel"], ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], activeLabel: [i0.ɵɵInputFlags.None, "auActiveLabel", "activeLabel"], ariaFirstLabel: [i0.ɵɵInputFlags.None, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [i0.ɵɵInputFlags.None, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [i0.ɵɵInputFlags.None, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [i0.ɵɵInputFlags.None, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [i0.ɵɵInputFlags.None, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [i0.ɵɵInputFlags.None, "auPageLink", "pageLink"], slotEllipsis: [i0.ɵɵInputFlags.None, "auSlotEllipsis", "slotEllipsis"], slotFirst: [i0.ɵɵInputFlags.None, "auSlotFirst", "slotFirst"], slotPrevious: [i0.ɵɵInputFlags.None, "auSlotPrevious", "slotPrevious"], slotNext: [i0.ɵɵInputFlags.None, "auSlotNext", "slotNext"], slotLast: [i0.ɵɵInputFlags.None, "auSlotLast", "slotLast"], slotPages: [i0.ɵɵInputFlags.None, "auSlotPages", "slotPages"], slotNumberLabel: [i0.ɵɵInputFlags.None, "auSlotNumberLabel", "slotNumberLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], boundaryLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auBoundaryLinks", "boundaryLinks", auBooleanAttribute], directionLinks: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDirectionLinks", "directionLinks", auBooleanAttribute], collectionSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCollectionSize", "collectionSize", auNumberAttribute], page: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPage", "page", auNumberAttribute], pageSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auPageSize", "pageSize", auNumberAttribute], size: [i0.ɵɵInputFlags.None, "auSize", "size"], pagesFactory: [i0.ɵɵInputFlags.None, "auPagesFactory", "pagesFactory"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c5$1, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(2, _c2$5, ctx.state(), ctx.widget))("auSlot", ctx.state().slotStructure);
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

const createRating = createRating$1;

const _c0$6 = ["auRating", ""];
function _forTrack0$1($index, $item) { return this.trackByIndex($index); }
const _c1$6 = a0 => ({ index: a0 });
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r1 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", index_r1 < ctx_r1.state().visibleRating ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", ctx_r1._widget.directives.starDirective)("auUseParams", i0.ɵɵpureFunction1(5, _c1$6, index_r1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state().slotStar)("auSlotProps", ctx_r1.state().stars[index_r1]);
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
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.containerDirective);
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
        } }, hostAttrs: [1, "d-inline-flex"], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
        } }, inputs: { ariaValueTextFn: [i0.ɵɵInputFlags.None, "auAriaValueTextFn", "ariaValueTextFn"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], maxRating: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMaxRating", "maxRating", auNumberAttribute], rating: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRating", "rating", auNumberAttribute], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], resettable: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auResettable", "resettable", auBooleanAttribute], slotStar: [i0.ɵɵInputFlags.None, "auSlotStar", "slotStar"], tabindex: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auTabindex", "tabindex", auNumberAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [i0.ɵɵInputFlags.None, "auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0$6, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [3, "auUse", "auUseParams"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 7, null, null, _forTrack0$1, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state().stars);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: '[auRating]',
                standalone: true,
                imports: [UseDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'd-inline-flex',
                    '(blur)': 'onTouched()',
                },
                template: \`
		@for (item of state().stars; track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state().visibleRating ? '*' : ' ' }})</span>
			<span [auUse]="_widget.directives.starDirective" [auUseParams]="{index}">
				<ng-template [auSlot]="state().slotStar" [auSlotProps]="state().stars[index]"></ng-template>
			</span>
		}
	\`,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
            }]
    }], null, { ariaValueTextFn: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "components/rating/rating.component.ts", lineNumber: 58 }); })();

const createSelect = createSelect$1;

const _c0$5 = ["auSelect", ""];
const _c1$5 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Conditional_1_For_1_Template_div_keydown_0_listener($event) { const itemContext_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3._widget.actions.onBadgeKeydown($event, itemContext_r3.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r3 = ctx.$implicit;
    const state_r5 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(state_r5.badgeClassName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c1$5, state_r5, ctx_r3.widget, itemContext_r3));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 8, "div", 3, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵlistener("click", function SelectComponent_Conditional_0_Conditional_3_For_2_Template_li_click_0_listener() { const itemContext_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.widget.api.toggleItem(itemContext_r8.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r8 = ctx.$implicit;
    const state_r5 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("cursor", "pointer");
    i0.ɵɵclassProp("text-bg-primary", itemContext_r8 === state_r5.highlighted)("selected", itemContext_r8.selected);
    i0.ɵɵattribute("aria-selected", itemContext_r8.selected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotItem)("auSlotProps", i0.ɵɵpureFunction3(9, _c1$5, state_r5, ctx_r3.widget, itemContext_r8));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵlistener("mousedown", function SelectComponent_Conditional_0_Conditional_3_Template_ul_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 13, "li", 7, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r5 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dropdown-menu show " + (ctx_r3.menuClassName || ""));
    i0.ɵɵproperty("id", state_r5.id + "-menu")("auUse", ctx_r3.menuDirective);
    i0.ɵɵattribute("data-popper-placement", state_r5.placement);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r5.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._widget.actions.onInput($event)); })("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._widget.actions.onInputKeydown($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 5, "ul", 2);
} if (rf & 2) {
    let tmp_5_0;
    const state_r5 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", ctx_r3.controlContainerDirective);
    i0.ɵɵattribute("aria-controls", state_r5.id + "-menu")("aria-expanded", state_r5.open);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (tmp_5_0 = state_r5.selectedContexts) ? 1 : -1, tmp_5_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", state_r5.filterText);
    i0.ɵɵattribute("id", state_r5.id)("aria-label", state_r5.ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r5.open && state_r5.visibleItems.length ? 3 : -1);
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
    get controlContainerDirective() {
        return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.inputContainerDirective);
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
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], id: [i0.ɵɵInputFlags.None, "auId", "id"], items: [i0.ɵɵInputFlags.None, "auItems", "items"], allowedPlacements: [i0.ɵɵInputFlags.None, "auAllowedPlacements", "allowedPlacements"], open: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auOpen", "open", auBooleanAttribute], filterText: [i0.ɵɵInputFlags.None, "auFilterText", "filterText"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], selected: [i0.ɵɵInputFlags.None, "auSelected", "selected"], loading: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auLoading", "loading", auBooleanAttribute], itemIdFn: [i0.ɵɵInputFlags.None, "auItemIdFn", "itemIdFn"], menuClassName: [i0.ɵɵInputFlags.None, "auMenuClassName", "menuClassName"], slotBadgeLabel: [i0.ɵɵInputFlags.None, "auSlotBadgeLabel", "slotBadgeLabel"], slotItem: [i0.ɵɵInputFlags.None, "auSlotItem", "slotItem"], menuItemClassName: [i0.ɵɵInputFlags.None, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [i0.ɵɵInputFlags.None, "auBadgeClassName", "badgeClassName"], navSelector: [i0.ɵɵInputFlags.None, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0$5, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "input", "keydown", "value"], ["role", "listbox", 3, "id", "auUse", "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "keydown"], [3, "auSlot", "auSlotProps"], ["role", "listbox", 3, "mousedown", "id", "auUse"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "text-bg-primary", "selected", "cursor"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 8);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional(0, (tmp_0_0 = ctx.state()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], SelectComponent.prototype, "menuDirective", null);
__decorate([
    CachedProperty
], SelectComponent.prototype, "controlContainerDirective", null);
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
				[auUse]="controlContainerDirective"
				role="combobox"
				class="d-flex align-items-center flex-wrap"
				[attr.aria-controls]="state.id + '-menu'"
				aria-haspopup="listbox"
				[attr.aria-expanded]="state.open"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div
							tabindex="-1"
							class="au-select-badge me-1"
							[class]="state.badgeClassName"
							(keydown)="_widget.actions.onBadgeKeydown($event, itemContext.item)"
						>
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
					(input)="_widget.actions.onInput($event)"
					(keydown)="_widget.actions.onInputKeydown($event)"
				/>
			</div>
			@if (state.open && state.visibleItems.length) {
				<ul
					role="listbox"
					[id]="state.id + '-menu'"
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							role="option"
							[attr.aria-selected]="itemContext.selected"
							class="au-select-item dropdown-item position-relative "
							[class.text-bg-primary]="itemContext === state.highlighted"
							[class.selected]="itemContext.selected"
							(click)="widget.api.toggleItem(itemContext.item)"
							[style.cursor]="'pointer'"
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
        }], navSelector: [{
            type: Input,
            args: ['auNavSelector']
        }], menuDirective: [], controlContainerDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 105 }); })();

const createAlert = createAlert$1;

const _c0$4 = ["structure"];
const _c1$4 = (a0, a1) => ({ state: a0, widget: a1 });
function AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const widget_r2 = i0.ɵɵnextContext().widget; return i0.ɵɵresetView(widget_r2.api.close()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = i0.ɵɵnextContext().state;
    i0.ɵɵattribute("aria-label", state_r3.ariaCloseButtonLabel);
} }
function AlertDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 4);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(3, _c1$4, state_r3, widget_r2));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r3.dismissible ? 2 : -1);
} }
const _c2$4 = ["auAlert", ""];
const _c3$3 = ["*"];
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AlertComponent_Conditional_1_ng_template_1_Template(rf, ctx) { }
function AlertComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("au-alert alert alert-", ctx_r0.state().type, " ", ctx_r0.state().className, " ", ctx_r0.state().dismissible ? "alert-dismissible" : "", "");
    i0.ɵɵproperty("auUse", ctx_r0.widget.directives.transitionDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(8, _c1$4, ctx_r0.state(), ctx_r0.widget));
} }
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
            i0.ɵɵviewQuery(_c0$4, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auAlertStructure", ""], [1, "alert-body"], [3, "auSlot", "auSlotProps"], ["type", "button", 1, "btn-close"], ["type", "button", 1, "btn-close", 3, "click"]], template: function AlertDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertDefaultSlotsComponent_ng_template_0_Template, 3, 6, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 57 }); })();
const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
const defaultConfig$4 = {
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
        this.defaultSlots = writable(defaultConfig$4);
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
        } }, inputs: { type: [i0.ɵɵInputFlags.None, "auType", "type"], dismissible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDismissible", "dismissible", auBooleanAttribute], transition: [i0.ɵɵInputFlags.None, "auTransition", "transition"], visible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], ariaCloseButtonLabel: [i0.ɵɵInputFlags.None, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2$4, ngContentSelectors: _c3$3, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], animatedOnInit: [{
            type: Input,
            args: [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "components/alert/alert.component.ts", lineNumber: 87 }); })();

const createAccordion = createAccordion$1;

const _c0$3 = ["structure"];
const _c1$3 = (a0, a1) => ({ state: a0, widget: a1 });
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
    i0.ɵɵelementStart(0, "h1", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 10);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r7 = i0.ɵɵnextContext().widget;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", widget_r7.directives.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const widget_r7 = ctx_r8.widget;
    i0.ɵɵproperty("auUse", widget_r7.directives.buttonDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(3, _c1$3, state_r10, widget_r7))("auSlot", state_r10.slotItemHeader);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 13);
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const widget_r7 = ctx_r8.widget;
    i0.ɵɵproperty("auUse", widget_r7.directives.bodyContainerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r7.directives.bodyDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(4, _c1$3, state_r10, widget_r7))("auSlot", state_r10.slotItemBody);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1)(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 7, "div", 8);
} if (rf & 2) {
    let tmp_11_0;
    const state_r10 = ctx.state;
    i0.ɵɵconditional(0, (tmp_11_0 = state_r10.itemHeadingTag) === "h1" ? 0 : tmp_11_0 === "h2" ? 1 : tmp_11_0 === "h3" ? 2 : tmp_11_0 === "h4" ? 3 : tmp_11_0 === "h5" ? 4 : tmp_11_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(21, state_r10.shouldBeInDOM ? 21 : -1);
} }
const _c2$3 = ["auAccordionItem", ""];
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
            i0.ɵɵviewQuery(_c0$3, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], [1, "accordion-collapse", 3, "auUse"], [3, "ngTemplateOutlet"], [1, "accordion-header", 3, "auUse"], [1, "accordion-button", 3, "auUse"], [3, "auSlotProps", "auSlot"], [1, "accordion-body", 3, "auUse"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
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
				<h1 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="widget.directives.buttonDirective">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 132 }); })();
const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
const defaultConfig$3 = {
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
            defaultConfig: defaultConfig$3,
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
        } }, hostAttrs: [1, "accordion-item"], inputs: { slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordionItem"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2$3, decls: 1, vars: 5, consts: [[3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction2(2, _c1$3, ctx.state(), ctx.widget))("auSlot", ctx.state().slotItemStructure);
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
        }], itemAnimated: [{
            type: Input,
            args: [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]
        }], itemHeaderClass: [{
            type: Input,
            args: ['auItemHeaderClass']
        }], itemButtonClass: [{
            type: Input,
            args: ['auItemButtonClass']
        }], itemBodyContainerClass: [{
            type: Input,
            args: ['auItemBodyContainerClass']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 152 }); })();
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
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostAttrs: [1, "accordion"], inputs: { closeOthers: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseOthers", "closeOthers", auBooleanAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], itemId: [i0.ɵɵInputFlags.None, "auItemId", "itemId"], itemDestroyOnHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDestroyOnHide", "itemDestroyOnHide", auBooleanAttribute], itemDisabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemDisabled", "itemDisabled", auBooleanAttribute], itemVisible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemVisible", "itemVisible", auBooleanAttribute], itemAnimated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auItemAnimated", "itemAnimated", auBooleanAttribute], itemTransition: [i0.ɵɵInputFlags.None, "auItemTransition", "itemTransition"], slotItemStructure: [i0.ɵɵInputFlags.None, "auSlotItemStructure", "slotItemStructure"], slotItemBody: [i0.ɵɵInputFlags.None, "auSlotItemBody", "slotItemBody"], slotItemHeader: [i0.ɵɵInputFlags.None, "auSlotItemHeader", "slotItemHeader"], itemClass: [i0.ɵɵInputFlags.None, "auItemClass", "itemClass"], itemHeaderClass: [i0.ɵɵInputFlags.None, "auItemHeaderClass", "itemHeaderClass"], itemButtonClass: [i0.ɵɵInputFlags.None, "auItemButtonClass", "itemButtonClass"], itemBodyContainerClass: [i0.ɵɵInputFlags.None, "auItemBodyContainerClass", "itemBodyContainerClass"], itemBodyClass: [i0.ɵɵInputFlags.None, "auItemBodyClass", "itemBodyClass"], itemHeadingTag: [i0.ɵɵInputFlags.None, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", itemShown: "auItemShown", itemHidden: "auItemHidden", itemVisibleChange: "auItemVisibleChange" }, exportAs: ["auAccordion"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
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
        }], itemAnimated: [{
            type: Input,
            args: [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]
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
        }], itemBodyContainerClass: [{
            type: Input,
            args: ['auItemBodyContainerClass']
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

const createSlider = createSlider$1;

const _c0$2 = ["handle"];
const _c1$2 = a0 => ({ item: a0 });
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtext(1, "\\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r1 = ctx.widget;
    const item_r2 = ctx.item;
    i0.ɵɵproperty("auUse", widget_r1.directives.handleDirective)("auUseParams", i0.ɵɵpureFunction1(2, _c1$2, item_r2));
} }
const _c2$2 = ["structure"];
const _forTrack0 = ($index, $item) => $item.id;
const _c3$2 = a0 => ({ option: a0 });
const _c4 = (a0, a1, a2) => ({ state: a0, widget: a1, value: a2 });
const _c5 = (a0, a1, a2) => ({ state: a0, widget: a1, item: a2 });
const _c6 = a0 => ({ index: a0 });
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const widget_r2 = i0.ɵɵnextContext().widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.progressDisplayDirective)("auUseParams", i0.ɵɵpureFunction1(2, _c3$2, option_r1));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c4, state_r4, widget_r2, state_r4.min));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", widget_r2.directives.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(10, _c4, state_r4, widget_r2, state_r4.max));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c4, state_r4, widget_r2, state_r4.sortedValues[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c4, state_r4, widget_r2, state_r4.sortedValues[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c4, state_r4, widget_r2, state_r4.sortedValues[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c4, state_r4, widget_r2, state_r4.sortedValues[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 12)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.combinedHandleLabelDisplayDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r4.rtl ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().$index;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auUse", widget_r2.directives.handleLabelDisplayDirective)("auUseParams", i0.ɵɵpureFunction1(4, _c6, i_r5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.slotLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c4, state_r4, widget_r2, state_r4.values[i_r5]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 4)(1, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Conditional_1_Template, 2, 10, "div", 2);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const widget_r2 = ctx_r2.widget;
    i0.ɵɵproperty("auSlot", state_r4.slotHandle)("auSlotProps", i0.ɵɵpureFunction3(3, _c5, state_r4, widget_r2, item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, state_r4.showValueLabels && !state_r4.combinedLabelDisplay ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 4, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 14)(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 2, "div", 3);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 2, 7, null, null, _forTrack0);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵrepeater(state_r4.progressDisplayOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auUse", widget_r2.directives.clickableAreaDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r4.showMinMaxLabels ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(4, state_r4.showValueLabels && state_r4.combinedLabelDisplay ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r4.sortedHandles);
} }
const _c7 = ["auSlider", ""];
const _c8 = (a0, a1) => ({ state: a0, widget: a1 });
function SliderComponent_ng_template_0_Template(rf, ctx) { }
class SliderLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderLabelDirective, selectors: [["ng-template", "auSliderLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderLabel]', standalone: true }]
    }], null, null); })();
class SliderHandleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderHandleDirective, selectors: [["ng-template", "auSliderHandle", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderHandleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderHandle]', standalone: true }]
    }], null, null); })();
class SliderDefaultHandleSlotComponent {
    constructor() {
        this._zone = inject(NgZone);
    }
    onKeyDown(event, handleId, widgetOnKeyDownFn) {
        widgetOnKeyDownFn(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = function SliderDefaultHandleSlotComponent_Factory(t) { return new (t || SliderDefaultHandleSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultHandleSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultHandleSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handle = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["handle", ""], ["auSliderHandle", ""], [3, "auUse", "auUseParams"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 2, 4, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SliderHandleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultHandleSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SliderHandleDirective],
                template: \`
		<ng-template auSliderHandle #handle let-state="state" let-widget="widget" let-item="item">
			<button [auUse]="widget.directives.handleDirective" [auUseParams]="{item}">&nbsp;</button>
		</ng-template>
	\`,
            }]
    }], null, { handle: [{
            type: ViewChild,
            args: ['handle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 61 }); })();
const sliderDefaultSlotHandle = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');
class SliderStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderStructureDirective_Factory(t) { return new (t || SliderStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderStructureDirective, selectors: [["ng-template", "auSliderStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderStructure]', standalone: true }]
    }], null, null); })();
class SliderDefaultStructureSlotComponent {
    static { this.ɵfac = function SliderDefaultStructureSlotComponent_Factory(t) { return new (t || SliderDefaultStructureSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultStructureSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultStructureSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2$2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auSliderStructure", ""], [3, "auUse", "auUseParams"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Template, 7, 3, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, SliderStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultStructureSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, SliderStructureDirective, UseDirective],
                template: \`
		<ng-template auSliderStructure #structure let-state="state" let-widget="widget">
			@for (option of state.progressDisplayOptions; track option) {
				<div [auUse]="widget.directives.progressDisplayDirective" [auUseParams]="{option}"></div>
			}
			<div [auUse]="widget.directives.clickableAreaDirective"></div>
			@if (state.showMinMaxLabels) {
				<div [auUse]="widget.directives.minLabelDirective">
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.min}"></ng-template>
				</div>
				<div [auUse]="widget.directives.maxLabelDirective">
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.max}"></ng-template>
				</div>
			}
			@if (state.showValueLabels && state.combinedLabelDisplay) {
				<div [auUse]="widget.directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl) {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template>
					} @else {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template>
					}
				</div>
			}
			@for (item of state.sortedHandles; track item.id; let i = $index) {
				<ng-template [auSlot]="state.slotHandle" [auSlotProps]="{state, widget, item}"></ng-template>
				@if (state.showValueLabels && !state.combinedLabelDisplay) {
					<div [auUse]="widget.directives.handleLabelDisplayDirective" [auUseParams]="{index: i}">
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.values[i]}"></ng-template>
					</div>
				}
			}
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 124 }); })();
const sliderDefaultSlotStructure = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');
const defaultConfig$2 = {
    slotStructure: sliderDefaultSlotStructure,
    slotHandle: sliderDefaultSlotHandle,
};
class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig$2);
        this._widget = callWidgetFactory({
            factory: createSlider,
            widgetName: 'slider',
            defaultConfig: this.defaultSlots,
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
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotHandle: this.slotHandleFromContent?.templateRef,
            slotLabel: this.slotLabelFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSliderComponent_BaseFactory; return function SliderComponent_Factory(t) { return (ɵSliderComponent_BaseFactory || (ɵSliderComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SliderComponent)))(t || SliderComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SliderLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SliderStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SliderHandleDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHandleFromContent = _t.first);
        } }, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } }, inputs: { className: [i0.ɵɵInputFlags.None, "auClassName", "className"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], stepSize: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStepSize", "stepSize", auNumberAttribute], values: [i0.ɵɵInputFlags.None, "auValues", "values"], rtl: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auRtl", "rtl", auBooleanAttribute], showValueLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowValueLabels", "showValueLabels", auBooleanAttribute], showMinMaxLabels: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auShowMinMaxLabels", "showMinMaxLabels", auBooleanAttribute], ariaLabelHandle: [i0.ɵɵInputFlags.None, "auAriaLabelHandle", "ariaLabelHandle"], ariaValueText: [i0.ɵɵInputFlags.None, "auAriaValueText", "ariaValueText"], readonly: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auReadonly", "readonly", auBooleanAttribute], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], vertical: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVertical", "vertical", auBooleanAttribute], slotLabel: [i0.ɵɵInputFlags.None, "auSlotLabel", "slotLabel"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHandle: [i0.ɵɵInputFlags.None, "auSlotHandle", "slotHandle"] }, outputs: { valuesChange: "auValuesChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c7, decls: 1, vars: 5, consts: [[3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(2, _c8, ctx.state(), ctx.widget));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: '[auSlider]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                imports: [SlotDirective, SlotDefaultDirective],
                host: {
                    '(blur)': 'handleBlur()',
                },
                template: \` <ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template> \`,
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
        }], ariaValueText: [{
            type: Input,
            args: ['auAriaValueText']
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
        }], slotLabel: [{
            type: Input,
            args: ['auSlotLabel']
        }], slotLabelFromContent: [{
            type: ContentChild,
            args: [SliderLabelDirective, { static: false }]
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [SliderStructureDirective, { static: false }]
        }], slotHandle: [{
            type: Input,
            args: ['auSlotHandle']
        }], slotHandleFromContent: [{
            type: ContentChild,
            args: [SliderHandleDirective, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 148 }); })();

const createProgressbar = createProgressbar$1;

const _c0$1 = ["structure"];
const _c1$1 = (a0, a1) => ({ state: a0, widget: a1 });
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵstyleProp("height", state_r1.height);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r1.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r1.striped)("progress-bar-animated", state_r1.animated);
    i0.ɵɵproperty("ngClass", state_r1.type ? "text-bg-" + state_r1.type : undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(11, _c1$1, state_r1, widget_r2));
} }
const _c2$1 = ["auProgressbar", ""];
const _c3$1 = ["*"];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { }
class ProgressbarStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(t) { return new (t || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]', standalone: true }]
    }], null, null); })();
class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(t) { return new (t || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auProgressbarStructure", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 14, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
                template: \`
		<ng-template auProgressbarStructure #structure let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.type ? 'text-bg-' + state.type : undefined"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 49 }); })();
const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');
const defaultConfig$1 = {
    slotStructure: progressbarDefaultSlotStructure,
};
class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig$1);
        this._widget = callWidgetFactory({
            factory: createProgressbar,
            widgetName: 'progressbar',
            defaultConfig: this.defaultSlots,
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.ariaDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: undefined,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(t) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(t || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.state().className);
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], value: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auValue", "value", auNumberAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], height: [i0.ɵɵInputFlags.None, "auHeight", "height"], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], striped: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [i0.ɵɵInputFlags.None, "auAriaValueTextFn", "ariaValueTextFn"], type: [i0.ɵɵInputFlags.None, "auType", "type"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2$1, ngContentSelectors: _c3$1, decls: 2, vars: 6, consts: [[3, "auSlotDefault"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(3, _c1$1, ctx.state(), ctx.widget));
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
                    '[class]': 'state().className',
                },
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
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
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ProgressbarStructureDirective, { static: false }]
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
        }], type: [{
            type: Input,
            args: ['auType']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 73 }); })();

const createToast = createToast$1;

const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 6);
} if (rf & 2) {
    const widget_r1 = i0.ɵɵnextContext(2).widget;
    i0.ɵɵproperty("auUse", widget_r1.directives.closeButtonDirective);
} }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 4)(2, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 1, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const state_r3 = ctx_r1.state;
    const widget_r1 = ctx_r1.widget;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.slotHeader)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, state_r3, widget_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r3.dismissible ? 2 : -1);
} }
function ToastDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 5);
} if (rf & 2) {
    const widget_r1 = i0.ɵɵnextContext().widget;
    i0.ɵɵproperty("auUse", widget_r1.directives.closeButtonDirective);
} }
function ToastDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template, 3, 6, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ToastDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ToastDefaultSlotsComponent_ng_template_0_Conditional_3_Template, 1, 1, "button", 5);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const widget_r1 = ctx.widget;
    i0.ɵɵconditional(0, state_r3.slotHeader ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r3.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c1, state_r3, widget_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r3.dismissible && !state_r3.slotHeader ? 3 : -1);
} }
const _c2 = ["auToast", ""];
const _c3 = ["*"];
function ToastComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ToastComponent_Conditional_1_ng_template_1_Template(rf, ctx) { }
function ToastComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ToastComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("d-flex", !ctx_r0.state().slotHeader)("toast-dismissible", ctx_r0.state().dismissible);
    i0.ɵɵproperty("auUse", ctx_r0.toastDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(7, _c1, ctx_r0.state(), ctx_r0.widget));
} }
class ToastBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastBodyDirective_Factory(t) { return new (t || ToastBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastBodyDirective, selectors: [["ng-template", "auToastBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastBody]', standalone: true }]
    }], null, null); })();
class ToastStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastStructureDirective_Factory(t) { return new (t || ToastStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastStructureDirective, selectors: [["ng-template", "auToastStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastStructure]', standalone: true }]
    }], null, null); })();
class ToastHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastHeaderDirective_Factory(t) { return new (t || ToastHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastHeaderDirective, selectors: [["ng-template", "auToastHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastHeader]', standalone: true }]
    }], null, null); })();
class ToastDefaultSlotsComponent {
    static { this.ɵfac = function ToastDefaultSlotsComponent_Factory(t) { return new (t || ToastDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ToastDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auToastStructure", ""], [1, "toast-header"], [1, "toast-body"], [3, "auSlot", "auSlotProps"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "auUse"], [1, "btn-close", "me-0", "ms-auto", 3, "auUse"]], template: function ToastDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ToastDefaultSlotsComponent_ng_template_0_Template, 4, 7, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ToastStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ToastStructureDirective, UseDirective],
                template: \` <ng-template auToastStructure #structure let-state="state" let-widget="widget">
		@if (state.slotHeader) {
			<div class="toast-header">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
				@if (state.dismissible) {
					<button class="btn-close me-0 ms-auto" [auUse]="widget.directives.closeButtonDirective"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible && !state.slotHeader) {
			<button class="btn-close btn-close-white me-2 m-auto" [auUse]="widget.directives.closeButtonDirective"></button>
		}
	</ng-template>\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 77 }); })();
const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: toastDefaultSlotStructure,
};
class ToastComponent extends BaseWidgetDirective {
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
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: createToast,
            widgetName: 'toast',
            defaultConfig: this.defaultSlots,
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
        });
    }
    get toastDirective() {
        return mergeDirectives(this._widget.directives.autoHideDirective, this._widget.directives.transitionDirective, this._widget.directives.bodyDirective);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotHeader: this.slotHeaderFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵToastComponent_BaseFactory; return function ToastComponent_Factory(t) { return (ɵToastComponent_BaseFactory || (ɵToastComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ToastComponent)))(t || ToastComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["", "auToast", ""]], contentQueries: function ToastComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ToastBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ToastStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ToastHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHeaderFromContent = _t.first);
        } }, inputs: { dismissible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDismissible", "dismissible", auBooleanAttribute], transition: [i0.ɵɵInputFlags.None, "auTransition", "transition"], visible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], autoHide: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAutoHide", "autoHide", auBooleanAttribute], delay: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDelay", "delay", auNumberAttribute], ariaCloseButtonLabel: [i0.ɵɵInputFlags.None, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHeader: [i0.ɵɵInputFlags.None, "auSlotHeader", "slotHeader"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], [1, "toast", 3, "d-flex", "toast-dismissible", "auUse"], [1, "toast", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ToastComponent_Conditional_1_Template, 2, 10, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(1, !ctx.state().hidden ? 1 : -1);
        } }, dependencies: [SlotDirective, UseDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], ToastComponent.prototype, "toastDirective", null);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: '[auToast]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseDirective, SlotDefaultDirective],
                template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>
		@if (!state().hidden) {
			<div class="toast" [class.d-flex]="!state().slotHeader" [class.toast-dismissible]="state().dismissible" [auUse]="toastDirective">
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}\`,
            }]
    }], null, { dismissible: [{
            type: Input,
            args: [{ alias: 'auDismissible', transform: auBooleanAttribute }]
        }], transition: [{
            type: Input,
            args: ['auTransition']
        }], visible: [{
            type: Input,
            args: [{ alias: 'auVisible', transform: auBooleanAttribute }]
        }], animatedOnInit: [{
            type: Input,
            args: [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], autoHide: [{
            type: Input,
            args: [{ alias: 'auAutoHide', transform: auBooleanAttribute }]
        }], delay: [{
            type: Input,
            args: [{ alias: 'auDelay', transform: auNumberAttribute }]
        }], ariaCloseButtonLabel: [{
            type: Input,
            args: ['auAriaCloseButtonLabel']
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [ToastBodyDirective, { static: false }]
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ToastStructureDirective, { static: false }]
        }], slotHeader: [{
            type: Input,
            args: ['auSlotHeader']
        }], slotHeaderFromContent: [{
            type: ContentChild,
            args: [ToastHeaderDirective, { static: false }]
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
        }], toastDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 101 }); })();

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
    PaginationStructureDirective,
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
    SliderHandleDirective,
    SliderLabelDirective,
    SliderStructureDirective,
    ProgressbarComponent,
    ProgressbarStructureDirective,
    ToastComponent,
    ToastStructureDirective,
    ToastBodyDirective,
    ToastHeaderDirective,
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
        PaginationStructureDirective,
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
        SliderHandleDirective,
        SliderLabelDirective,
        SliderStructureDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective], exports: [SlotDirective,
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
        PaginationStructureDirective,
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
        SliderHandleDirective,
        SliderLabelDirective,
        SliderStructureDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective] }); })();

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
 * Public API Surface of @agnos-ui/angular-bootstrap
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionBodyDirective, AccordionDirective, AccordionHeaderDirective, AccordionItemComponent, AccordionItemDefaultSlotsComponent, AccordionItemStructureDirective, AgnosUIAngularModule, AlertBodyDirective, AlertComponent, AlertDefaultSlotsComponent, AlertStructureDirective, ModalBodyDirective, ModalComponent, ModalDefaultSlotsComponent, ModalFooterDirective, ModalHeaderDirective, ModalService, ModalStructureDirective, ModalTitleDirective, PaginationComponent, PaginationDefaultSlotsComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, PaginationStructureDirective, ProgressbarComponent, ProgressbarDefaultSlotsComponent, ProgressbarStructureDirective, RatingComponent, RatingStarDirective, SelectBadgeLabelDirective, SelectComponent, SelectItemDirective, SliderComponent, SliderDefaultHandleSlotComponent, SliderDefaultStructureSlotComponent, SliderHandleDirective, SliderLabelDirective, SliderStructureDirective, ToastBodyDirective, ToastComponent, ToastDefaultSlotsComponent, ToastHeaderDirective, ToastStructureDirective, accordionItemDefaultSlotItemStructure, alertDefaultSlotStructure, callWidgetFactory, createAccordion, createAlert, createModal, createPagination, createProgressbar, createRating, createSelect, createSlider, createToast, injectWidgetConfig, injectWidgetsConfig, modalDefaultSlotHeader, modalDefaultSlotStructure, paginationDefaultSlotPages, paginationDefaultSlotStructure, progressbarDefaultSlotStructure, provideWidgetsConfig, sliderDefaultSlotHandle, sliderDefaultSlotStructure, toastDefaultSlotStructure, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular-bootstrap.mjs.map
`;export{t as default};
