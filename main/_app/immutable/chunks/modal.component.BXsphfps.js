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
    i0.ɵɵproperty("auSlot", state_r4.children)("auSlotProps", i0.ɵɵpureFunction2(4, _c2, state_r4, widget_r5));
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
				<ng-template [auSlot]="state.children" [auSlotProps]="{state, widget}"></ng-template>
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
        } }, inputs: { animated: [2, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [0, "auBackdropTransition", "backdropTransition"], modalTransition: [0, "auModalTransition", "modalTransition"], visible: [2, "auVisible", "visible", auBooleanAttribute], backdrop: [2, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [2, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [0, "auContainer", "container"], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [0, "auBackdropClass", "backdropClass"], closeButton: [2, "auCloseButton", "closeButton", auBooleanAttribute], className: [0, "auClassName", "className"], fullscreen: [2, "auFullscreen", "fullscreen", auBooleanAttribute], slotStructure: [0, "auSlotStructure", "slotStructure"], slotHeader: [0, "auSlotHeader", "slotHeader"], slotTitle: [0, "auSlotTitle", "slotTitle"], children: [0, "auChildren", "children"], slotFooter: [0, "auSlotFooter", "slotFooter"], contentData: [0, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 3, consts: [[3, "auContentAsSlot"], [1, "modal-backdrop", 3, "auUseMulti"], [1, "modal", "d-block", 3, "auUseMulti"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], children: [{
            type: Input,
            args: ['auChildren']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQXNFM0MsNEJBQW9GOzs7SUFBMUQsaUVBQWdEOzs7SUFKM0UsNkJBQXdCO0lBQ3ZCLHlHQUF3RTtJQUN6RSxpQkFBSztJQUNMLG9HQUF5Qjs7OztJQUZYLGNBQTBCO0lBQUMsQUFBM0IsMkNBQTBCLGdFQUFnQztJQUV4RSxjQUVDO0lBRkQsK0NBRUM7Ozs7SUFJQSw4QkFBMEI7SUFDekIsdUhBQXlFO0lBQzFFLGlCQUFNOzs7OztJQURRLGNBQTJCO0lBQUMsQUFBNUIsNENBQTJCLGdFQUFnQzs7Ozs7SUFPekUsOEJBQTBCO0lBQ3pCLHVIQUF5RTtJQUMxRSxpQkFBTTs7Ozs7SUFEUSxjQUEyQjtJQUFDLEFBQTVCLDRDQUEyQixnRUFBZ0M7OztJQVYxRSxpR0FBdUI7SUFLdkIsOEJBQXdCO0lBQ3ZCLHlHQUF1RTtJQUN4RSxpQkFBTTtJQUNOLGlHQUF3Qjs7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RSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLeEMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBSzJDLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU1uQyxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUV4Qix3QkFBd0I7a0JBRHZCLFlBQVk7bUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTS9CLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUVyQixxQkFBcUI7a0JBRHBCLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTTdCLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUVwQixvQkFBb0I7a0JBRG5CLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTTdCLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUVuQixzQkFBc0I7a0JBRHJCLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTTFCLFVBQVU7a0JBQWhDLEtBQUs7bUJBQUMsY0FBYztZQUVyQixxQkFBcUI7a0JBRHBCLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBTTNCLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUtLLGFBQWE7a0JBQXZDLE1BQU07bUJBQUMsaUJBQWlCO1lBS0EsV0FBVztrQkFBbkMsTUFBTTttQkFBQyxlQUFlO1lBS0gsTUFBTTtrQkFBekIsTUFBTTttQkFBQyxVQUFVO1lBS0MsS0FBSztrQkFBdkIsTUFBTTttQkFBQyxTQUFTOztrRkExSEwsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0Q29udGVudEFzU2xvdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRVc2VNdWx0aURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7TW9kYWxDb250ZXh0LCBNb2RhbFByb3BzLCBNb2RhbFdpZGdldCwgTW9kYWxCZWZvcmVDbG9zZUV2ZW50fSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7Y3JlYXRlTW9kYWx9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KGRpcjogTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBoZWFkZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCB0aXRsZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsVGl0bGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxUaXRsZURpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxUaXRsZURpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbEJvZHlEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBmb290ZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEZvb3Rlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgY29udGFpbmluZyB0aGUgZGVmYXVsdCBzbG90cyBmb3IgdGhlIG1vZGFsLlxuICovXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBNb2RhbEhlYWRlckRpcmVjdGl2ZSwgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxIZWFkZXIgI2hlYWRlciBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RUaXRsZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9oNT5cblx0XHRcdEBpZiAoc3RhdGUuY2xvc2VCdXR0b24pIHtcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbG9zZUJ1dHRvbkRpcmVjdGl2ZVwiPjwvYnV0dG9uPlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdEBpZiAoc3RhdGUuc2xvdFRpdGxlKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SGVhZGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW5cIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZS5zbG90Rm9vdGVyKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90Rm9vdGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50PERhdGE+IHtcblx0QFZpZXdDaGlsZCgnaGVhZGVyJywge3N0YXRpYzogdHJ1ZX0pIGhlYWRlciE6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+O1xufVxuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgaGVhZGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdEhlYWRlciA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2hlYWRlcicpO1xuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgc3RydWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPE1vZGFsUHJvcHM8YW55Pj4gPSB7XG5cdHNsb3RIZWFkZXI6IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIsXG5cdHNsb3RTdHJ1Y3R1cmU6IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1TW9kYWxdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgQ29udGVudEFzU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdUNvbnRlbnRBc1Nsb3RdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0QGlmICghc3RhdGUoKS5iYWNrZHJvcEhpZGRlbikge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCIgW2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLmJhY2tkcm9wUG9ydGFsRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcERpcmVjdGl2ZV1cIj48L2Rpdj5cblx0XHR9XG5cdFx0QGlmICghc3RhdGUoKS5oaWRkZW4pIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbCBkLWJsb2NrXCIgW2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLm1vZGFsUG9ydGFsRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZV1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyB7eyBzdGF0ZSgpLmZ1bGxzY3JlZW4gPyAnbW9kYWwtZnVsbHNjcmVlbicgOiAnJyB9fVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50PERhdGE+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxNb2RhbFdpZGdldDxEYXRhPj4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIGFuZCBpdHMgYmFja2Ryb3AgKGlmIHByZXNlbnQpIHNob3VsZCBiZSBhbmltYXRlZCB3aGVuIHNob3duIG9yIGhpZGRlbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgYmFja2Ryb3AgYmVoaW5kIHRoZSBtb2RhbCAoaWYgcHJlc2VudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFja2Ryb3BUcmFuc2l0aW9uJykgYmFja2Ryb3BUcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdU1vZGFsVHJhbnNpdGlvbicpIG1vZGFsVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYSBiYWNrZHJvcCBzaG91bGQgYmUgY3JlYXRlZCBiZWhpbmQgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QmFja2Ryb3AnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGJhY2tkcm9wOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlIHZpZXdwb3J0IG91dHNpZGUgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VPbk91dHNpZGVDbGljaycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgY2xvc2VPbk91dHNpZGVDbGljazogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hpY2ggZWxlbWVudCBzaG91bGQgY29udGFpbiB0aGUgbW9kYWwgYW5kIGJhY2tkcm9wIERPTSBlbGVtZW50cy5cblx0ICogSWYgaXQgaXMgbm90IG51bGwsIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzIGFyZSBtb3ZlZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRhaW5lci5cblx0ICogT3RoZXJ3aXNlLCB0aGV5IHN0YXkgd2hlcmUgdGhlIHdpZGdldCBpcyBsb2NhdGVkLlxuXHQgKi9cblx0QElucHV0KCdhdUNvbnRhaW5lcicpIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSBvZiB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgdG8gcHV0IG9uIHRoZSBjbG9zZSBidXR0b24uXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYmFja2Ryb3AgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFja2Ryb3BDbGFzcycpIGJhY2tkcm9wQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0byBkaXNwbGF5IHRoZSBjbG9zZSBidXR0b24uXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVDbG9zZUJ1dHRvbicsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgY2xvc2VCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBPcHRpb24gdG8gY3JlYXRlIGEgZnVsbHNjcmVlbiBtb2RhbCwgYWNjb3JkaW5nIHRvIHRoZSBib290c3RyYXAgZG9jdW1lbnRhdGlvbi5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUZ1bGxzY3JlZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGZ1bGxzY3JlZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFN0cnVjdHVyZSBvZiB0aGUgbW9kYWwuXG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIE1vZGFsQ29tbW9uUHJvcHNBbmRTdGF0ZS5zbG90SGVhZGVyIHNsb3RIZWFkZXIsIE1vZGFsQ29tbW9uUHJvcHNBbmRTdGF0ZS5jaGlsZHJlbiBjaGlsZHJlbiBhbmQgTW9kYWxDb21tb25Qcm9wc0FuZFN0YXRlLnNsb3RGb290ZXIgc2xvdEZvb3Rlci5cblx0ICovXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWFkZXIgb2YgdGhlIG1vZGFsLiBUaGUgZGVmYXVsdCBoZWFkZXIgaW5jbHVkZXMgTW9kYWxDb21tb25Qcm9wc0FuZFN0YXRlLnNsb3RUaXRsZSBzbG90VGl0bGUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2xvdEhlYWRlcicpIHNsb3RIZWFkZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGl0bGUgb2YgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdVNsb3RUaXRsZScpIHNsb3RUaXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBCb2R5IG9mIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVDaGlsZHJlbicpIGNoaWxkcmVuOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsQm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBNb2RhbEJvZHlEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZvb3RlciBvZiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2xvdEZvb3RlcicpIHNsb3RGb290ZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZvb3RlckZyb21Db250ZW50OiBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGF0YSB0byB1c2UgaW4gY29udGVudCBzbG90c1xuXHQgKi9cblx0QElucHV0KCdhdUNvbnRlbnREYXRhJykgY29udGVudERhdGE6IERhdGEgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB2aXNpYmxlIHByb3BlcnR5IGNoYW5nZXMuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kYWwgaXMgYWJvdXQgdG8gYmUgY2xvc2VkIChpLmUuIHRoZSBNb2RhbEFwaS5jbG9zZWNsb3NlICBtZXRob2Qgd2FzIGNhbGxlZCkuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUJlZm9yZUNsb3NlJykgYmVmb3JlQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsQmVmb3JlQ2xvc2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgbm90IHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8TW9kYWxXaWRnZXQ8RGF0YT4+KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVNb2RhbCxcblx0XHR3aWRnZXROYW1lOiAnbW9kYWwnLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25CZWZvcmVDbG9zZTogKGV2ZW50KSA9PiB0aGlzLmJlZm9yZUNsb3NlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0Y2hpbGRyZW46IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rm9vdGVyOiB0aGlzLnNsb3RGb290ZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SGVhZGVyOiB0aGlzLnNsb3RIZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90VGl0bGU6IHRoaXMuc2xvdFRpdGxlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0gYXMgYW55KTtcblx0fVxufVxuIl19`;export{t as default};
