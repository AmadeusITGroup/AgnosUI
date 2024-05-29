const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, } from '@agnos-ui/angular-headless';
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
    i0.ɵɵconditional(state_r2.closeButton ? 2 : -1);
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
    i0.ɵɵconditional(state_r4.slotTitle ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c2, state_r4, widget_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.slotFooter ? 3 : -1);
} }
const _c3 = ["auModal", ""];
const _c4 = ["*"];
const _c5 = (a0, a1) => [a0, a1];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ModalComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(1, _c5, ctx_r0.widget.directives.backdropPortalDirective, ctx_r0.widget.directives.backdropDirective));
} }
function ModalComponent_Conditional_2_ng_template_3_Template(rf, ctx) { }
function ModalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "div", 3);
    i0.ɵɵtemplate(3, ModalComponent_Conditional_2_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(6, _c5, ctx_r0.widget.directives.modalPortalDirective, ctx_r0.widget.directives.modalDirective));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("modal-dialog ", ctx_r0.state().fullscreen ? "modal-fullscreen" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(9, _c2, ctx_r0.state(), ctx_r0.widget));
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDefaultSlotsComponent, { className: "ModalDefaultSlotsComponent", filePath: "components/modal/modal.component.ts", lineNumber: 117 }); })();
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
        } }, inputs: { animated: [2, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [0, "auBackdropTransition", "backdropTransition"], modalTransition: [0, "auModalTransition", "modalTransition"], visible: [2, "auVisible", "visible", auBooleanAttribute], backdrop: [2, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [2, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [0, "auContainer", "container"], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [0, "auBackdropClass", "backdropClass"], closeButton: [2, "auCloseButton", "closeButton", auBooleanAttribute], className: [0, "auClassName", "className"], fullscreen: [2, "auFullscreen", "fullscreen", auBooleanAttribute], slotStructure: [0, "auSlotStructure", "slotStructure"], slotHeader: [0, "auSlotHeader", "slotHeader"], slotTitle: [0, "auSlotTitle", "slotTitle"], slotDefault: [0, "auSlotDefault", "slotDefault"], slotFooter: [0, "auSlotFooter", "slotFooter"], contentData: [0, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 3, consts: [[3, "auSlotDefault"], [1, "modal-backdrop", 3, "auUseMulti"], [1, "modal", "d-block", 3, "auUseMulti"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ModalComponent_Conditional_1_Template, 1, 4, "div", 1)(2, ModalComponent_Conditional_2_Template, 4, 12, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().backdropHidden ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().hidden ? 2 : -1);
        } }, dependencies: [UseMultiDirective, SlotDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: '[auModal]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseMultiDirective, SlotDirective, SlotDefaultDirective],
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop" [auUseMulti]="[widget.directives.backdropPortalDirective, widget.directives.backdropDirective]"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block" [auUseMulti]="[widget.directives.modalPortalDirective, widget.directives.modalDirective]">
				<div class="modal-dialog {{ state().fullscreen ? 'modal-fullscreen' : '' }}">
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
        }], fullscreen: [{
            type: Input,
            args: [{ alias: 'auFullscreen', transform: auBooleanAttribute }]
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "components/modal/modal.component.ts", lineNumber: 161 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQXNFM0MsNEJBQW9GOzs7SUFBMUQsaUVBQWdEOzs7SUFKM0UsNkJBQXdCO0lBQ3ZCLHlHQUF3RTtJQUN6RSxpQkFBSztJQUNMLG9HQUF5Qjs7OztJQUZYLGNBQTBCO0lBQUMsQUFBM0IsMkNBQTBCLGdFQUFnQztJQUV4RSxjQUVDO0lBRkQsK0NBRUM7Ozs7SUFJQSw4QkFBMEI7SUFDekIsdUhBQXlFO0lBQzFFLGlCQUFNOzs7OztJQURRLGNBQTJCO0lBQUMsQUFBNUIsNENBQTJCLGdFQUFnQzs7Ozs7SUFPekUsOEJBQTBCO0lBQ3pCLHVIQUF5RTtJQUMxRSxpQkFBTTs7Ozs7SUFEUSxjQUEyQjtJQUFDLEFBQTVCLDRDQUEyQixnRUFBZ0M7OztJQVYxRSxpR0FBdUI7SUFLdkIsOEJBQXdCO0lBQ3ZCLHlHQUEwRTtJQUMzRSxpQkFBTTtJQUNOLGlHQUF3Qjs7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RSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLeEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBSzJDLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUVuQyxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUV4Qix3QkFBd0I7a0JBRHZCLFlBQVk7bUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRy9CLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUVyQixxQkFBcUI7a0JBRHBCLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRzdCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUVwQixvQkFBb0I7a0JBRG5CLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRzFCLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUV0QixzQkFBc0I7a0JBRHJCLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRzFCLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUVyQixxQkFBcUI7a0JBRHBCLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTTNCLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUtLLGFBQWE7a0JBQXZDLE1BQU07bUJBQUMsaUJBQWlCO1lBS0EsV0FBVztrQkFBbkMsTUFBTTttQkFBQyxlQUFlO1lBS0gsTUFBTTtrQkFBekIsTUFBTTttQkFBQyxVQUFVO1lBS0MsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTOztrRkExR0wsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge01vZGFsQ29udGV4dCwgTW9kYWxQcm9wcywgTW9kYWxXaWRnZXQsIE1vZGFsQmVmb3JlQ2xvc2VFdmVudH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQge2NyZWF0ZU1vZGFsfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihkaXI6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgaGVhZGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxIZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsSGVhZGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgdGl0bGUgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbFRpdGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBzbG90IGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxCb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgZm9vdGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxGb290ZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsRm9vdGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgc2xvdHMgZm9yIHRoZSBtb2RhbC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgTW9kYWxIZWFkZXJEaXJlY3RpdmUsIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsSGVhZGVyICNoZWFkZXIgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90VGl0bGVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvaDU+XG5cdFx0XHRAaWYgKHN0YXRlLmNsb3NlQnV0dG9uKSB7XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tY2xvc2VcIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY2xvc2VCdXR0b25EaXJlY3RpdmVcIj48L2J1dHRvbj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHRAaWYgKHN0YXRlLnNsb3RUaXRsZSkge1xuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEhlYWRlclwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUuc2xvdEZvb3Rlcikge1xuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEZvb3RlclwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudDxEYXRhPiB7XG5cdEBWaWV3Q2hpbGQoJ2hlYWRlcicsIHtzdGF0aWM6IHRydWV9KSBoZWFkZXI6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj47XG59XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90SGVhZGVyID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnaGVhZGVyJyk7XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8TW9kYWxQcm9wczxhbnk+PiA9IHtcblx0c2xvdEhlYWRlcjogbW9kYWxEZWZhdWx0U2xvdEhlYWRlcixcblx0c2xvdFN0cnVjdHVyZTogbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbi8qKlxuICogTW9kYWwgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVNb2RhbF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZU11bHRpRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdEBpZiAoIXN0YXRlKCkuYmFja2Ryb3BIaWRkZW4pIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcFwiIFthdVVzZU11bHRpXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcFBvcnRhbERpcmVjdGl2ZSwgd2lkZ2V0LmRpcmVjdGl2ZXMuYmFja2Ryb3BEaXJlY3RpdmVdXCI+PC9kaXY+XG5cdFx0fVxuXHRcdEBpZiAoIXN0YXRlKCkuaGlkZGVuKSB7XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwgZC1ibG9ja1wiIFthdVVzZU11bHRpXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5tb2RhbFBvcnRhbERpcmVjdGl2ZSwgd2lkZ2V0LmRpcmVjdGl2ZXMubW9kYWxEaXJlY3RpdmVdXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cge3sgc3RhdGUoKS5mdWxsc2NyZWVuID8gJ21vZGFsLWZ1bGxzY3JlZW4nIDogJycgfX1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudDxEYXRhPiBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8TW9kYWxXaWRnZXQ8RGF0YT4+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBhbmQgaXRzIGJhY2tkcm9wIChpZiBwcmVzZW50KSBzaG91bGQgYmUgYW5pbWF0ZWQgd2hlbiBzaG93biBvciBoaWRkZW4uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGJhY2tkcm9wIGJlaGluZCB0aGUgbW9kYWwgKGlmIHByZXNlbnQpLlxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wVHJhbnNpdGlvbicpIGJhY2tkcm9wVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVNb2RhbFRyYW5zaXRpb24nKSBtb2RhbFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgc2hvdWxkIGJlIHZpc2libGUgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSB2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIGEgYmFja2Ryb3Agc2hvdWxkIGJlIGNyZWF0ZWQgYmVoaW5kIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUJhY2tkcm9wJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBiYWNrZHJvcDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGNsaWNraW5nIG9uIHRoZSB2aWV3cG9ydCBvdXRzaWRlIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT25PdXRzaWRlQ2xpY2snLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoaWNoIGVsZW1lbnQgc2hvdWxkIGNvbnRhaW4gdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMuXG5cdCAqIElmIGl0IGlzIG5vdCBudWxsLCB0aGUgbW9kYWwgYW5kIGJhY2tkcm9wIERPTSBlbGVtZW50cyBhcmUgbW92ZWQgdG8gdGhlIHNwZWNpZmllZCBjb250YWluZXIuXG5cdCAqIE90aGVyd2lzZSwgdGhleSBzdGF5IHdoZXJlIHRoZSB3aWRnZXQgaXMgbG9jYXRlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVDb250YWluZXInKSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVmFsdWUgb2YgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlIHRvIHB1dCBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFDbG9zZUJ1dHRvbkxhYmVsJykgYXJpYUNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGJhY2tkcm9wIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wQ2xhc3MnKSBiYWNrZHJvcENsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VCdXR0b24nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogT3B0aW9uIHRvIGNyZWF0ZSBhIGZ1bGxzY3JlZW4gbW9kYWwsIGFjY29yZGluZyB0byB0aGUgYm9vdHN0cmFwIGRvY3VtZW50YXRpb24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVGdWxsc2NyZWVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBmdWxsc2NyZWVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEhlYWRlcicpIHNsb3RIZWFkZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RUaXRsZScpIHNsb3RUaXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdERlZmF1bHQnKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+IHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEZvb3RlcicpIHNsb3RGb290ZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZvb3RlckZyb21Db250ZW50OiBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0LyoqXG5cdCAqIERhdGEgdG8gdXNlIGluIGNvbnRlbnQgc2xvdHNcblx0ICovXG5cdEBJbnB1dCgnYXVDb250ZW50RGF0YScpIGNvbnRlbnREYXRhOiBEYXRhIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlzaWJsZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGFsIGlzIGFib3V0IHRvIGJlIGNsb3NlZCAoaS5lLiB0aGUgY2xvc2UgbWV0aG9kIHdhcyBjYWxsZWQpLlxuXHQgKi9cblx0QE91dHB1dCgnYXVCZWZvcmVDbG9zZScpIGJlZm9yZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbEJlZm9yZUNsb3NlRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIG5vdCB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PE1vZGFsV2lkZ2V0PERhdGE+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlTW9kYWwsXG5cdFx0d2lkZ2V0TmFtZTogJ21vZGFsJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHRcdG9uQmVmb3JlQ2xvc2U6IChldmVudCkgPT4gdGhpcy5iZWZvcmVDbG9zZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0fSk7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3REZWZhdWx0OiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEZvb3RlcjogdGhpcy5zbG90Rm9vdGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFRpdGxlOiB0aGlzLnNsb3RUaXRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
