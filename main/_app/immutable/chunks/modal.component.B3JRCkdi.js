const t=`import { BaseWidgetDirective, ComponentTemplate, ContentAsSlotDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, } from '@agnos-ui/angular-headless';
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
    i0.ɵɵproperty("auSlot", state_r2.title)("auSlotProps", i0.ɵɵpureFunction2(3, _c2, state_r2, widget_r1));
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
    i0.ɵɵproperty("auSlot", state_r4.header)("auSlotProps", i0.ɵɵpureFunction2(2, _c2, state_r4, widget_r5));
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
    i0.ɵɵproperty("auSlot", state_r4.footer)("auSlotProps", i0.ɵɵpureFunction2(2, _c2, state_r4, widget_r5));
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
    i0.ɵɵconditional(state_r4.title ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.children)("auSlotProps", i0.ɵɵpureFunction2(4, _c2, state_r4, widget_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.footer ? 3 : -1);
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
    i0.ɵɵproperty("auSlot", ctx_r0.state().structure)("auSlotProps", i0.ɵɵpureFunction2(9, _c2, ctx_r0.state(), ctx_r0.widget));
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
				<ng-template [auSlot]="state.title" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button class="btn-close" [auUse]="widget.directives.closeButtonDirective"></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			@if (state.title) {
				<div class="modal-header">
					<ng-template [auSlot]="state.header" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.children" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			@if (state.footer) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.footer" [auSlotProps]="{state, widget}"></ng-template>
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
    header: modalDefaultSlotHeader,
    structure: modalDefaultSlotStructure,
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
         * Event to be triggered when the modal is about to be closed (i.e. the ModalApi.closeclose  method was called).
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
            children: this.slotDefaultFromContent?.templateRef,
            footer: this.slotFooterFromContent?.templateRef,
            header: this.slotHeaderFromContent?.templateRef,
            structure: this.slotStructureFromContent?.templateRef,
            title: this.slotTitleFromContent?.templateRef,
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
        } }, inputs: { animated: [2, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [0, "auBackdropTransition", "backdropTransition"], modalTransition: [0, "auModalTransition", "modalTransition"], visible: [2, "auVisible", "visible", auBooleanAttribute], backdrop: [2, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [2, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [0, "auContainer", "container"], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [0, "auBackdropClass", "backdropClass"], closeButton: [2, "auCloseButton", "closeButton", auBooleanAttribute], className: [0, "auClassName", "className"], fullscreen: [2, "auFullscreen", "fullscreen", auBooleanAttribute], structure: [0, "auStructure", "structure"], header: [0, "auHeader", "header"], title: [0, "auTitle", "title"], children: [0, "auChildren", "children"], footer: [0, "auFooter", "footer"], contentData: [0, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 3, consts: [[3, "auContentAsSlot"], [1, "modal-backdrop", 3, "auUseMulti"], [1, "modal", "d-block", 3, "auUseMulti"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ModalComponent_Conditional_1_Template, 1, 4, "div", 1)(2, ModalComponent_Conditional_2_Template, 4, 12, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("auContentAsSlot", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().backdropHidden ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().hidden ? 2 : -1);
        } }, dependencies: [UseMultiDirective, SlotDirective, ContentAsSlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: '[auModal]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseMultiDirective, SlotDirective, ContentAsSlotDirective],
                template: \`
		<ng-template [auContentAsSlot]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop" [auUseMulti]="[widget.directives.backdropPortalDirective, widget.directives.backdropDirective]"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block" [auUseMulti]="[widget.directives.modalPortalDirective, widget.directives.modalDirective]">
				<div class="modal-dialog {{ state().fullscreen ? 'modal-fullscreen' : '' }}">
					<div class="modal-content">
						<ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), widget}"></ng-template>
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
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ModalStructureDirective, { static: false }]
        }], header: [{
            type: Input,
            args: ['auHeader']
        }], slotHeaderFromContent: [{
            type: ContentChild,
            args: [ModalHeaderDirective, { static: false }]
        }], title: [{
            type: Input,
            args: ['auTitle']
        }], slotTitleFromContent: [{
            type: ContentChild,
            args: [ModalTitleDirective, { static: false }]
        }], children: [{
            type: Input,
            args: ['auChildren']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [ModalBodyDirective, { static: false }]
        }], footer: [{
            type: Input,
            args: ['auFooter']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQXNFM0MsNEJBQW9GOzs7SUFBMUQsaUVBQWdEOzs7SUFKM0UsNkJBQXdCO0lBQ3ZCLHlHQUFvRTtJQUNyRSxpQkFBSztJQUNMLG9HQUF5Qjs7OztJQUZYLGNBQXNCO0lBQUMsQUFBdkIsdUNBQXNCLGdFQUFnQztJQUVwRSxjQUVDO0lBRkQsK0NBRUM7Ozs7SUFJQSw4QkFBMEI7SUFDekIsdUhBQXFFO0lBQ3RFLGlCQUFNOzs7OztJQURRLGNBQXVCO0lBQUMsQUFBeEIsd0NBQXVCLGdFQUFnQzs7Ozs7SUFPckUsOEJBQTBCO0lBQ3pCLHVIQUFxRTtJQUN0RSxpQkFBTTs7Ozs7SUFEUSxjQUF1QjtJQUFDLEFBQXhCLHdDQUF1QixnRUFBZ0M7OztJQVZ0RSxpR0FBbUI7SUFLbkIsOEJBQXdCO0lBQ3ZCLHlHQUF1RTtJQUN4RSxpQkFBTTtJQUNOLGlHQUFvQjs7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RSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLeEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBSzJDLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU12QyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFFcEIsd0JBQXdCO2tCQUR2QixZQUFZO21CQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1uQyxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFFakIscUJBQXFCO2tCQURwQixZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU1qQyxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFFaEIsb0JBQW9CO2tCQURuQixZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU03QixRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFFbkIsc0JBQXNCO2tCQURyQixZQUFZO21CQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU05QixNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFFakIscUJBQXFCO2tCQURwQixZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU0zQixXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7WUFLSyxhQUFhO2tCQUF2QyxNQUFNO21CQUFDLGlCQUFpQjtZQUtBLFdBQVc7a0JBQW5DLE1BQU07bUJBQUMsZUFBZTtZQUtILE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQUtDLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUzs7a0ZBMUhMLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnQsIFRyYW5zaXRpb25Gbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdENvbnRlbnRBc1Nsb3REaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge01vZGFsQ29udGV4dCwgTW9kYWxQcm9wcywgTW9kYWxXaWRnZXQsIE1vZGFsQmVmb3JlQ2xvc2VFdmVudH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQge2NyZWF0ZU1vZGFsfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihkaXI6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgaGVhZGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxIZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsSGVhZGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgdGl0bGUgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbFRpdGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBzbG90IGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxCb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgZm9vdGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxGb290ZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsRm9vdGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgc2xvdHMgZm9yIHRoZSBtb2RhbC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgTW9kYWxIZWFkZXJEaXJlY3RpdmUsIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsSGVhZGVyICNoZWFkZXIgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS50aXRsZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9oNT5cblx0XHRcdEBpZiAoc3RhdGUuY2xvc2VCdXR0b24pIHtcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbG9zZUJ1dHRvbkRpcmVjdGl2ZVwiPjwvYnV0dG9uPlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBpZiAoc3RhdGUudGl0bGUpIHtcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmhlYWRlclwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmNoaWxkcmVuXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUuZm9vdGVyKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5mb290ZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQ8RGF0YT4ge1xuXHRAVmlld0NoaWxkKCdoZWFkZXInLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyITogVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj47XG59XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90SGVhZGVyID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnaGVhZGVyJyk7XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8TW9kYWxQcm9wczxhbnk+PiA9IHtcblx0aGVhZGVyOiBtb2RhbERlZmF1bHRTbG90SGVhZGVyLFxuXHRzdHJ1Y3R1cmU6IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1TW9kYWxdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgQ29udGVudEFzU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdUNvbnRlbnRBc1Nsb3RdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0QGlmICghc3RhdGUoKS5iYWNrZHJvcEhpZGRlbikge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCIgW2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLmJhY2tkcm9wUG9ydGFsRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcERpcmVjdGl2ZV1cIj48L2Rpdj5cblx0XHR9XG5cdFx0QGlmICghc3RhdGUoKS5oaWRkZW4pIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbCBkLWJsb2NrXCIgW2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLm1vZGFsUG9ydGFsRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZV1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyB7eyBzdGF0ZSgpLmZ1bGxzY3JlZW4gPyAnbW9kYWwtZnVsbHNjcmVlbicgOiAnJyB9fVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQ8RGF0YT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPE1vZGFsV2lkZ2V0PERhdGE+PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgYW5kIGl0cyBiYWNrZHJvcCAoaWYgcHJlc2VudCkgc2hvdWxkIGJlIGFuaW1hdGVkIHdoZW4gc2hvd24gb3IgaGlkZGVuLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBiYWNrZHJvcCBiZWhpbmQgdGhlIG1vZGFsIChpZiBwcmVzZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcFRyYW5zaXRpb24nKSBiYWNrZHJvcFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TW9kYWxUcmFuc2l0aW9uJykgbW9kYWxUcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgdmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciBhIGJhY2tkcm9wIHNob3VsZCBiZSBjcmVhdGVkIGJlaGluZCB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVCYWNrZHJvcCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYmFja2Ryb3A6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBjbGlja2luZyBvbiB0aGUgdmlld3BvcnQgb3V0c2lkZSB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDbG9zZU9uT3V0c2lkZUNsaWNrJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGljaCBlbGVtZW50IHNob3VsZCBjb250YWluIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzLlxuXHQgKiBJZiBpdCBpcyBub3QgbnVsbCwgdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMgYXJlIG1vdmVkIHRvIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyLlxuXHQgKiBPdGhlcndpc2UsIHRoZXkgc3RheSB3aGVyZSB0aGUgd2lkZ2V0IGlzIGxvY2F0ZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q29udGFpbmVyJykgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFZhbHVlIG9mIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZSB0byBwdXQgb24gdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBiYWNrZHJvcCBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcENsYXNzJykgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlQnV0dG9uJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBjbG9zZUJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE9wdGlvbiB0byBjcmVhdGUgYSBmdWxsc2NyZWVuIG1vZGFsLCBhY2NvcmRpbmcgdG8gdGhlIGJvb3RzdHJhcCBkb2N1bWVudGF0aW9uLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RnVsbHNjcmVlbicsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZnVsbHNjcmVlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU3RydWN0dXJlIG9mIHRoZSBtb2RhbC5cblx0ICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIHVzZXMgTW9kYWxDb21tb25Qcm9wc0FuZFN0YXRlLmhlYWRlciBoZWFkZXIsIE1vZGFsQ29tbW9uUHJvcHNBbmRTdGF0ZS5jaGlsZHJlbiBjaGlsZHJlbiBhbmQgTW9kYWxDb21tb25Qcm9wc0FuZFN0YXRlLmZvb3RlciBmb290ZXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlYWRlciBvZiB0aGUgbW9kYWwuIFRoZSBkZWZhdWx0IGhlYWRlciBpbmNsdWRlcyBNb2RhbENvbW1vblByb3BzQW5kU3RhdGUudGl0bGUgdGl0bGUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVhZGVyJykgaGVhZGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RIZWFkZXJGcm9tQ29udGVudDogTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRpdGxlIG9mIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVUaXRsZScpIHRpdGxlOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsVGl0bGVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFRpdGxlRnJvbUNvbnRlbnQ6IE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEJvZHkgb2YgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRm9vdGVyIG9mIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVGb290ZXInKSBmb290ZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZvb3RlckZyb21Db250ZW50OiBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGF0YSB0byB1c2UgaW4gY29udGVudCBzbG90c1xuXHQgKi9cblx0QElucHV0KCdhdUNvbnRlbnREYXRhJykgY29udGVudERhdGE6IERhdGEgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB2aXNpYmxlIHByb3BlcnR5IGNoYW5nZXMuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kYWwgaXMgYWJvdXQgdG8gYmUgY2xvc2VkIChpLmUuIHRoZSBNb2RhbEFwaS5jbG9zZWNsb3NlICBtZXRob2Qgd2FzIGNhbGxlZCkuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUJlZm9yZUNsb3NlJykgYmVmb3JlQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsQmVmb3JlQ2xvc2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgbm90IHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8TW9kYWxXaWRnZXQ8RGF0YT4+KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVNb2RhbCxcblx0XHR3aWRnZXROYW1lOiAnbW9kYWwnLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25CZWZvcmVDbG9zZTogKGV2ZW50KSA9PiB0aGlzLmJlZm9yZUNsb3NlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0Y2hpbGRyZW46IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRmb290ZXI6IHRoaXMuc2xvdEZvb3RlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdGhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHR0aXRsZTogdGhpcy5zbG90VGl0bGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSBhcyBhbnkpO1xuXHR9XG59XG4iXX0=`;export{t as default};
