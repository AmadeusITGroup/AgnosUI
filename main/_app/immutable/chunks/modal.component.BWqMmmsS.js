const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, mergeDirectives, } from '@agnos-ui/angular-headless';
import { createModal } from './modal';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["header"];
const _c1 = ["structure"];
const _c2 = (a0, a1) => ({ state: a0, widget: a1 });
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
    i0.ɵɵproperty("auSlot", state_r2.slotTitle)("auSlotProps", i0.ɵɵpureFunction2(3, _c2, state_r2, widget_r1));
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
    i0.ɵɵproperty("auSlot", state_r4.slotHeader)("auSlotProps", i0.ɵɵpureFunction2(2, _c2, state_r4, widget_r5));
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
    i0.ɵɵproperty("auSlot", state_r4.slotFooter)("auSlotProps", i0.ɵɵpureFunction2(2, _c2, state_r4, widget_r5));
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
    i0.ɵɵproperty("auSlot", state_r4.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c2, state_r4, widget_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r4.slotFooter ? 3 : -1);
} }
const _c3 = ["auModal", ""];
const _c4 = ["*"];
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
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(3, _c2, ctx_r0.state(), ctx_r0.widget));
} }
/**
 * Directive to provide the slot structure for the modal widget.
 */
export class ModalStructureDirective {
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
export class ModalHeaderDirective {
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
export class ModalTitleDirective {
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
export class ModalBodyDirective {
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
export class ModalFooterDirective {
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
export class ModalDefaultSlotsComponent {
    static { this.ɵfac = function ModalDefaultSlotsComponent_Factory(t) { return new (t || ModalDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ModalDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
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
export const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotHeader: modalDefaultSlotHeader,
    slotStructure: modalDefaultSlotStructure,
};
/**
 * Modal component.
 */
export class ModalComponent extends BaseWidgetDirective {
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
        this.defaultSlots = writable(defaultConfig);
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
        } }, inputs: { animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [i0.ɵɵInputFlags.None, "auBackdropTransition", "backdropTransition"], modalTransition: [i0.ɵɵInputFlags.None, "auModalTransition", "modalTransition"], visible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVisible", "visible", auBooleanAttribute], backdrop: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [i0.ɵɵInputFlags.None, "auContainer", "container"], ariaCloseButtonLabel: [i0.ɵɵInputFlags.None, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [i0.ɵɵInputFlags.None, "auBackdropClass", "backdropClass"], closeButton: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auCloseButton", "closeButton", auBooleanAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], slotHeader: [i0.ɵɵInputFlags.None, "auSlotHeader", "slotHeader"], slotTitle: [i0.ɵɵInputFlags.None, "auSlotTitle", "slotTitle"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotFooter: [i0.ɵɵInputFlags.None, "auSlotFooter", "slotFooter"], contentData: [i0.ɵɵInputFlags.None, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 3, consts: [[3, "auSlotDefault"], [1, "modal-backdrop", 3, "auUse"], [1, "modal", "d-block", 3, "auUse"], [1, "modal-dialog"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsR0FDZixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0lBc0UzQyw0QkFBb0Y7OztJQUExRCxpRUFBZ0Q7OztJQUozRSw2QkFBd0I7SUFDdkIseUdBQXdFO0lBQ3pFLGlCQUFLO0lBQ0wsb0dBQXlCOzs7O0lBRlgsY0FBMEI7SUFBQyxBQUEzQiwyQ0FBMEIsZ0VBQWdDO0lBRXhFLGNBRUM7SUFGRCxrREFFQzs7OztJQUlBLDhCQUEwQjtJQUN6Qix1SEFBeUU7SUFDMUUsaUJBQU07Ozs7O0lBRFEsY0FBMkI7SUFBQyxBQUE1Qiw0Q0FBMkIsZ0VBQWdDOzs7OztJQU96RSw4QkFBMEI7SUFDekIsdUhBQXlFO0lBQzFFLGlCQUFNOzs7OztJQURRLGNBQTJCO0lBQUMsQUFBNUIsNENBQTJCLGdFQUFnQzs7O0lBVjFFLGlHQUF1QjtJQUt2Qiw4QkFBd0I7SUFDdkIseUdBQTBFO0lBQzNFLGlCQUFNO0lBQ04s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TUFBTTttQkFBQyxpQkFBaUI7WUFLQSxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWU7WUFLSCxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFLQyxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFpQmIsY0FBYyxNQUtkLGlCQUFpQjtrRkEzSFQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDYWNoZWRQcm9wZXJ0eSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REZWZhdWx0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0bWVyZ2VEaXJlY3RpdmVzLFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7TW9kYWxDb250ZXh0LCBNb2RhbFByb3BzLCBNb2RhbFdpZGdldCwgTW9kYWxCZWZvcmVDbG9zZUV2ZW50fSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7Y3JlYXRlTW9kYWx9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KGRpcjogTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBoZWFkZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCB0aXRsZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsVGl0bGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxUaXRsZURpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxUaXRsZURpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbEJvZHlEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBmb290ZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEZvb3Rlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgY29udGFpbmluZyB0aGUgZGVmYXVsdCBzbG90cyBmb3IgdGhlIG1vZGFsLlxuICovXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBNb2RhbEhlYWRlckRpcmVjdGl2ZSwgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxIZWFkZXIgI2hlYWRlciBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RUaXRsZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9oNT5cblx0XHRcdEBpZiAoc3RhdGUuY2xvc2VCdXR0b24pIHtcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbG9zZUJ1dHRvbkRpcmVjdGl2ZVwiPjwvYnV0dG9uPlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBpZiAoc3RhdGUuc2xvdFRpdGxlKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SGVhZGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZS5zbG90Rm9vdGVyKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90Rm9vdGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50PERhdGE+IHtcblx0QFZpZXdDaGlsZCgnaGVhZGVyJywge3N0YXRpYzogdHJ1ZX0pIGhlYWRlcjogVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pjtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHNsb3QgZm9yIG1vZGFsIGhlYWRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQsICdoZWFkZXInKTtcblxuLyoqXG4gKiBEZWZhdWx0IHNsb3QgZm9yIG1vZGFsIHN0cnVjdHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxNb2RhbFByb3BzPGFueT4+ID0ge1xuXHRzbG90SGVhZGVyOiBtb2RhbERlZmF1bHRTbG90SGVhZGVyLFxuXHRzbG90U3RydWN0dXJlOiBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuLyoqXG4gKiBNb2RhbCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdU1vZGFsXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdEBpZiAoIXN0YXRlKCkuYmFja2Ryb3BIaWRkZW4pIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcFwiIFthdVVzZV09XCJiYWNrZHJvcERpcmVjdGl2ZVwiPjwvZGl2PlxuXHRcdH1cblx0XHRAaWYgKCFzdGF0ZSgpLmhpZGRlbikge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsIGQtYmxvY2tcIiBbYXVVc2VdPVwibW9kYWxEaXJlY3RpdmVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50PERhdGE+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxNb2RhbFdpZGdldDxEYXRhPj4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIGFuZCBpdHMgYmFja2Ryb3AgKGlmIHByZXNlbnQpIHNob3VsZCBiZSBhbmltYXRlZCB3aGVuIHNob3duIG9yIGhpZGRlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYmFja2Ryb3AgYmVoaW5kIHRoZSBtb2RhbCAoaWYgcHJlc2VudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFja2Ryb3BUcmFuc2l0aW9uJykgYmFja2Ryb3BUcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdU1vZGFsVHJhbnNpdGlvbicpIG1vZGFsVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYSBiYWNrZHJvcCBzaG91bGQgYmUgY3JlYXRlZCBiZWhpbmQgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QmFja2Ryb3AnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGJhY2tkcm9wOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlIHZpZXdwb3J0IG91dHNpZGUgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VPbk91dHNpZGVDbGljaycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgY2xvc2VPbk91dHNpZGVDbGljazogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hpY2ggZWxlbWVudCBzaG91bGQgY29udGFpbiB0aGUgbW9kYWwgYW5kIGJhY2tkcm9wIERPTSBlbGVtZW50cy5cblx0ICogSWYgaXQgaXMgbm90IG51bGwsIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzIGFyZSBtb3ZlZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRhaW5lci5cblx0ICogT3RoZXJ3aXNlLCB0aGV5IHN0YXkgd2hlcmUgdGhlIHdpZGdldCBpcyBsb2NhdGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUNvbnRhaW5lcicpIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSBvZiB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgdG8gcHV0IG9uIHRoZSBjbG9zZSBidXR0b24uXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYmFja2Ryb3AgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFja2Ryb3BDbGFzcycpIGJhY2tkcm9wQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBjbG9zZSBidXR0b24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDbG9zZUJ1dHRvbicsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgY2xvc2VCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEhlYWRlcicpIHNsb3RIZWFkZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RUaXRsZScpIHNsb3RUaXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdERlZmF1bHQnKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEZvb3RlcicpIHNsb3RGb290ZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZvb3RlckZyb21Db250ZW50OiBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0LyoqXG5cdCAqIERhdGEgdG8gdXNlIGluIGNvbnRlbnQgc2xvdHNcblx0ICovXG5cdEBJbnB1dCgnYXVDb250ZW50RGF0YScpIGNvbnRlbnREYXRhOiBEYXRhIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlzaWJsZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGFsIGlzIGFib3V0IHRvIGJlIGNsb3NlZCAoaS5lLiB0aGUgY2xvc2UgbWV0aG9kIHdhcyBjYWxsZWQpLlxuXHQgKi9cblx0QE91dHB1dCgnYXVCZWZvcmVDbG9zZScpIGJlZm9yZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbEJlZm9yZUNsb3NlRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIG5vdCB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PE1vZGFsV2lkZ2V0PERhdGE+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlTW9kYWwsXG5cdFx0d2lkZ2V0TmFtZTogJ21vZGFsJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uQmVmb3JlQ2xvc2U6IChldmVudCkgPT4gdGhpcy5iZWZvcmVDbG9zZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0fSk7XG5cblx0QENhY2hlZFByb3BlcnR5XG5cdGdldCBtb2RhbERpcmVjdGl2ZSgpIHtcblx0XHRyZXR1cm4gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLm1vZGFsUG9ydGFsRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZSk7XG5cdH1cblxuXHRAQ2FjaGVkUHJvcGVydHlcblx0Z2V0IGJhY2tkcm9wRGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiBtZXJnZURpcmVjdGl2ZXModGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYmFja2Ryb3BQb3J0YWxEaXJlY3RpdmUsIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmJhY2tkcm9wRGlyZWN0aXZlKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RGVmYXVsdDogdGhpcy5zbG90RGVmYXVsdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RGb290ZXI6IHRoaXMuc2xvdEZvb3RlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RIZWFkZXI6IHRoaXMuc2xvdEhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RUaXRsZTogdGhpcy5zbG90VGl0bGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
