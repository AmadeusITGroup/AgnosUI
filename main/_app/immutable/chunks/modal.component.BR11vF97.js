const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute } from '@agnos-ui/angular-headless';
import { createModal } from './modal.gen';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["header"];
const _c1 = ["structure"];
const _c2 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 6);
} if (rf & 2) {
    const directives_r1 = i0.ɵɵnextContext().directives;
    i0.ɵɵproperty("auUse", directives_r1.closeButtonDirective);
} }
function ModalDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 4);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 6);
} if (rf & 2) {
    const state_r2 = ctx.state;
    const api_r3 = ctx.api;
    const directives_r1 = ctx.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.title())("auSlotProps", i0.ɵɵpureFunction3(3, _c2, state_r2, api_r3, directives_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.closeButton() ? 2 : -1);
} }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const state_r5 = ctx_r3.state;
    const api_r6 = ctx_r3.api;
    const directives_r7 = ctx_r3.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.header())("auSlotProps", i0.ɵɵpureFunction3(2, _c2, state_r5, api_r6, directives_r7));
} }
function ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template(rf, ctx) { }
function ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const state_r5 = ctx_r3.state;
    const api_r6 = ctx_r3.api;
    const directives_r7 = ctx_r3.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.footer())("auSlotProps", i0.ɵɵpureFunction3(2, _c2, state_r5, api_r6, directives_r7));
} }
function ModalDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template, 2, 6, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template, 2, 6, "div", 9);
} if (rf & 2) {
    const state_r5 = ctx.state;
    const api_r6 = ctx.api;
    const directives_r7 = ctx.directives;
    i0.ɵɵconditional(state_r5.title() ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r5.children())("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r5, api_r6, directives_r7));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r5.footer() ? 3 : -1);
} }
const _c3 = ["content"];
const _c4 = ["auModal", ""];
const _c5 = ["*"];
const _c6 = (a0, a1) => [a0, a1];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ModalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(1, _c6, ctx_r0.directives.backdropPortalDirective, ctx_r0.directives.backdropDirective));
} }
function ModalComponent_Conditional_3_ng_template_3_Template(rf, ctx) { }
function ModalComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "div", 3);
    i0.ɵɵtemplate(3, ModalComponent_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(6, _c6, ctx_r0.directives.modalPortalDirective, ctx_r0.directives.modalDirective));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("modal-dialog ", ctx_r0.state.fullscreen() ? "modal-fullscreen" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(9, _c2, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
/**
 * Directive to provide the slot structure for the modal widget.
 */
export class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalStructureDirective)(); }; }
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
    static { this.ɵfac = function ModalHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalHeaderDirective)(); }; }
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
    static { this.ɵfac = function ModalTitleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalTitleDirective)(); }; }
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
    static { this.ɵfac = function ModalBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalBodyDirective)(); }; }
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
    static { this.ɵfac = function ModalFooterDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalFooterDirective)(); }; }
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
    static { this.ɵfac = function ModalDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ModalDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 0, consts: [["header", ""], ["structure", ""], ["auModalHeader", ""], ["auModalStructure", ""], [1, "modal-title"], [3, "auSlot", "auSlotProps"], [1, "btn-close", 3, "auUse"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"]], template: function ModalDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_0_Template, 3, 7, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, ModalDefaultSlotsComponent_ng_template_2_Template, 4, 8, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective],
                template: \`
		<ng-template auModalHeader #header let-state="state" let-api="api" let-directives="directives">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.title()" [auSlotProps]="{state, api, directives}"></ng-template>
			</h5>
			@if (state.closeButton()) {
				<button class="btn-close" [auUse]="directives.closeButtonDirective"></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-api="api" let-directives="directives">
			@if (state.title()) {
				<div class="modal-header">
					<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
			</div>
			@if (state.footer()) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.footer()" [auSlotProps]="{state, api, directives}"></ng-template>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDefaultSlotsComponent, { className: "ModalDefaultSlotsComponent", filePath: "components/modal/modal.component.ts", lineNumber: 107 }); })();
/**
 * Default slot for modal header.
 */
export const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
/**
 * Modal component.
 */
export class ModalComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createModal,
            widgetName: 'modal',
            defaultConfig: {
                header: modalDefaultSlotHeader,
                structure: modalDefaultSlotStructure,
            },
            events: {
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
                onBeforeClose: (event) => this.beforeClose.emit(event),
                onVisibleChange: (event) => this.visibleChange.emit(event),
            },
            slotTemplates: () => ({
                children: this.slotDefaultFromContent?.templateRef,
                footer: this.slotFooterFromContent?.templateRef,
                header: this.slotHeaderFromContent?.templateRef,
                structure: this.slotStructureFromContent?.templateRef,
                title: this.slotTitleFromContent?.templateRef,
            }),
            slotChildren: () => this.slotChildren,
        }));
        /**
         * Event to be triggered when the visible property changes.
         *
         * @param visible - new value of the visible propery
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
         *
         * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
         * to cancel the close process.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.beforeClose = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is not visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = new EventEmitter();
    }
    static { this.ɵfac = function ModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalComponent)(); }; }
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
        } }, viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c3, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotChildren = _t.first);
        } }, inputs: { animated: [2, "auAnimated", "animated", auBooleanAttribute], backdropTransition: [0, "auBackdropTransition", "backdropTransition"], modalTransition: [0, "auModalTransition", "modalTransition"], visible: [2, "auVisible", "visible", auBooleanAttribute], backdrop: [2, "auBackdrop", "backdrop", auBooleanAttribute], closeOnOutsideClick: [2, "auCloseOnOutsideClick", "closeOnOutsideClick", auBooleanAttribute], container: [0, "auContainer", "container"], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [0, "auBackdropClass", "backdropClass"], closeButton: [2, "auCloseButton", "closeButton", auBooleanAttribute], className: [0, "auClassName", "className"], fullscreen: [2, "auFullscreen", "fullscreen", auBooleanAttribute], structure: [0, "auStructure", "structure"], header: [0, "auHeader", "header"], title: [0, "auTitle", "title"], children: [0, "auChildren", "children"], footer: [0, "auFooter", "footer"], contentData: [0, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c4, ngContentSelectors: _c5, decls: 4, vars: 2, consts: [["content", ""], [1, "modal-backdrop", 3, "auUseMulti"], [1, "modal", "d-block", 3, "auUseMulti"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ModalComponent_Conditional_2_Template, 1, 4, "div", 1)(3, ModalComponent_Conditional_3_Template, 4, 13, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.backdropHidden() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state.hidden() ? 3 : -1);
        } }, dependencies: [UseMultiDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: '[auModal]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseMultiDirective, SlotDirective],
                template: \`
		<ng-template #content><ng-content></ng-content></ng-template>
		@if (!state.backdropHidden()) {
			<div class="modal-backdrop" [auUseMulti]="[directives.backdropPortalDirective, directives.backdropDirective]"></div>
		}
		@if (!state.hidden()) {
			<div class="modal d-block" [auUseMulti]="[directives.modalPortalDirective, directives.modalDirective]">
				<div class="modal-dialog {{ state.fullscreen() ? 'modal-fullscreen' : '' }}">
					<div class="modal-content">
						<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
					</div>
				</div>
			</div>
		}
	\`,
            }]
    }], () => [], { animated: [{
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
        }], slotChildren: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "components/modal/modal.component.ts", lineNumber: 146 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFdEosT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQXNFM0MsNEJBQTZFOzs7SUFBbkQsMERBQXlDOzs7SUFKcEUsNkJBQXdCO0lBQ3ZCLHlHQUErRTtJQUNoRixpQkFBSztJQUNMLG9HQUEyQjs7Ozs7SUFGYixjQUF3QjtJQUFDLEFBQXpCLHlDQUF3Qiw0RUFBeUM7SUFFL0UsY0FFQztJQUZELGlEQUVDOzs7O0lBSUEsOEJBQTBCO0lBQ3pCLHVIQUFnRjtJQUNqRixpQkFBTTs7Ozs7O0lBRFEsY0FBeUI7SUFBQyxBQUExQiwwQ0FBeUIsNEVBQXlDOzs7OztJQU9oRiw4QkFBMEI7SUFDekIsdUhBQWdGO0lBQ2pGLGlCQUFNOzs7Ozs7SUFEUSxjQUF5QjtJQUFDLEFBQTFCLDBDQUF5Qiw0RUFBeUM7OztJQVZqRixpR0FBcUI7SUFLckIsOEJBQXdCO0lBQ3ZCLHlHQUFrRjtJQUNuRixpQkFBTTtJQUNOLGlHQUFzQjs7Ozs7SUFSdEIsMkNBSUM7SUFFYSxlQUEyQjtJQUFDLEFBQTVCLDRDQUEyQiw0RUFBeUM7SUFFbEYs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QWtCLEVBQUM7WUFNdkMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBRXBCLHdCQUF3QjtrQkFEdkIsWUFBWTttQkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNbkMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBRWpCLHFCQUFxQjtrQkFEcEIsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNakMsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRWhCLG9CQUFvQjtrQkFEbkIsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNN0IsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRW5CLHNCQUFzQjtrQkFEckIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNOUIsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBRWpCLHFCQUFxQjtrQkFEcEIsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNM0IsV0FBVztrQkFBbEMsS0FBSzttQkFBQyxlQUFlO1lBWUssYUFBYTtrQkFBdkMsTUFBTTttQkFBQyxpQkFBaUI7WUFhQSxXQUFXO2tCQUFuQyxNQUFNO21CQUFDLGVBQWU7WUFVSCxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFVQyxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVM7WUFHakIsWUFBWTtrQkFEWCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tGQWhMeEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge0Jhc2VXaWRnZXREaXJlY3RpdmUsIENvbXBvbmVudFRlbXBsYXRlLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIFVzZU11bHRpRGlyZWN0aXZlLCBhdUJvb2xlYW5BdHRyaWJ1dGV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtNb2RhbENvbnRleHQsIE1vZGFsV2lkZ2V0LCBNb2RhbEJlZm9yZUNsb3NlRXZlbnR9IGZyb20gJy4vbW9kYWwuZ2VuJztcbmltcG9ydCB7Y3JlYXRlTW9kYWx9IGZyb20gJy4vbW9kYWwuZ2VuJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IGhlYWRlciBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbEhlYWRlckRpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHRpdGxlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxUaXRsZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJvZHlEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IGZvb3RlciBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsRm9vdGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihfZGlyOiBNb2RhbEZvb3RlckRpcmVjdGl2ZTxEYXRhPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0PERhdGE+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBjb250YWluaW5nIHRoZSBkZWZhdWx0IHNsb3RzIGZvciB0aGUgbW9kYWwuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIE1vZGFsSGVhZGVyRGlyZWN0aXZlLCBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVNb2RhbEhlYWRlciAjaGVhZGVyIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWFwaT1cImFwaVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiPlxuXHRcdFx0PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUudGl0bGUoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9oNT5cblx0XHRcdEBpZiAoc3RhdGUuY2xvc2VCdXR0b24oKSkge1xuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMuY2xvc2VCdXR0b25EaXJlY3RpdmVcIj48L2J1dHRvbj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0XHRAaWYgKHN0YXRlLnRpdGxlKCkpIHtcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmhlYWRlcigpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW4oKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLmZvb3RlcigpKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5mb290ZXIoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmNsYXNzIE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50PERhdGE+IHtcblx0QFZpZXdDaGlsZCgnaGVhZGVyJywge3N0YXRpYzogdHJ1ZX0pIGhlYWRlciE6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+O1xufVxuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgaGVhZGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdEhlYWRlciA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2hlYWRlcicpO1xuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgc3RydWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1TW9kYWxdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlICNjb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdEBpZiAoIXN0YXRlLmJhY2tkcm9wSGlkZGVuKCkpIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcFwiIFthdVVzZU11bHRpXT1cIltkaXJlY3RpdmVzLmJhY2tkcm9wUG9ydGFsRGlyZWN0aXZlLCBkaXJlY3RpdmVzLmJhY2tkcm9wRGlyZWN0aXZlXVwiPjwvZGl2PlxuXHRcdH1cblx0XHRAaWYgKCFzdGF0ZS5oaWRkZW4oKSkge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsIGQtYmxvY2tcIiBbYXVVc2VNdWx0aV09XCJbZGlyZWN0aXZlcy5tb2RhbFBvcnRhbERpcmVjdGl2ZSwgZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZV1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyB7eyBzdGF0ZS5mdWxsc2NyZWVuKCkgPyAnbW9kYWwtZnVsbHNjcmVlbicgOiAnJyB9fVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zdHJ1Y3R1cmUoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQ8RGF0YT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPE1vZGFsV2lkZ2V0PERhdGE+PiB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBhbmQgaXRzIGJhY2tkcm9wIChpZiBwcmVzZW50KSBzaG91bGQgYmUgYW5pbWF0ZWQgd2hlbiBzaG93biBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGJhY2tkcm9wIGJlaGluZCB0aGUgbW9kYWwgKGlmIHByZXNlbnQpLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWRlVHJhbnNpdGlvbmBcblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcFRyYW5zaXRpb24nKSBiYWNrZHJvcFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgbW9kYWwuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhZGVUcmFuc2l0aW9uYFxuXHQgKi9cblx0QElucHV0KCdhdU1vZGFsVHJhbnNpdGlvbicpIG1vZGFsVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSB2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIGEgYmFja2Ryb3Agc2hvdWxkIGJlIGNyZWF0ZWQgYmVoaW5kIHRoZSBtb2RhbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUJhY2tkcm9wJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBiYWNrZHJvcDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGNsaWNraW5nIG9uIHRoZSB2aWV3cG9ydCBvdXRzaWRlIHRoZSBtb2RhbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUNsb3NlT25PdXRzaWRlQ2xpY2snLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoaWNoIGVsZW1lbnQgc2hvdWxkIGNvbnRhaW4gdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMuXG5cdCAqIElmIGl0IGlzIG5vdCBudWxsLCB0aGUgbW9kYWwgYW5kIGJhY2tkcm9wIERPTSBlbGVtZW50cyBhcmUgbW92ZWQgdG8gdGhlIHNwZWNpZmllZCBjb250YWluZXIuXG5cdCAqIE90aGVyd2lzZSwgdGhleSBzdGF5IHdoZXJlIHRoZSB3aWRnZXQgaXMgbG9jYXRlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmJvZHkgOiBudWxsXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUNvbnRhaW5lcicpIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSBvZiB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgdG8gcHV0IG9uIHRoZSBjbG9zZSBidXR0b24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdDbG9zZSdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgYmFja2Ryb3AgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wQ2xhc3MnKSBiYWNrZHJvcENsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1Q2xvc2VCdXR0b24nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE9wdGlvbiB0byBjcmVhdGUgYSBmdWxsc2NyZWVuIG1vZGFsLCBhY2NvcmRpbmcgdG8gdGhlIGJvb3RzdHJhcCBkb2N1bWVudGF0aW9uLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUZ1bGxzY3JlZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGZ1bGxzY3JlZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFN0cnVjdHVyZSBvZiB0aGUgbW9kYWwuXG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIHtAbGluayBNb2RhbFByb3BzLmhlYWRlcnxoZWFkZXJ9LCB7QGxpbmsgTW9kYWxQcm9wcy5jaGlsZHJlbnxjaGlsZHJlbn0gYW5kIHtAbGluayBNb2RhbFByb3BzLmZvb3Rlcnxmb290ZXJ9LlxuXHQgKi9cblx0QElucHV0KCdhdVN0cnVjdHVyZScpIHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWFkZXIgb2YgdGhlIG1vZGFsLiBUaGUgZGVmYXVsdCBoZWFkZXIgaW5jbHVkZXMge0BsaW5rIE1vZGFsUHJvcHMudGl0bGV8dGl0bGV9LlxuXHQgKi9cblx0QElucHV0KCdhdUhlYWRlcicpIGhlYWRlcjogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbEhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90SGVhZGVyRnJvbUNvbnRlbnQ6IE1vZGFsSGVhZGVyRGlyZWN0aXZlPERhdGE+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaXRsZSBvZiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VGl0bGUnKSB0aXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0PERhdGE+Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlPERhdGE+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBCb2R5IG9mIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVDaGlsZHJlbicpIGNoaWxkcmVuOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsQm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBNb2RhbEJvZHlEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZvb3RlciBvZiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Rm9vdGVyJykgZm9vdGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGb290ZXJGcm9tQ29udGVudDogTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERhdGEgdG8gdXNlIGluIGNvbnRlbnQgc2xvdHNcblx0ICovXG5cdEBJbnB1dCgnYXVDb250ZW50RGF0YScpIGNvbnRlbnREYXRhOiBEYXRhIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlzaWJsZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdmlzaWJsZSAtIG5ldyB2YWx1ZSBvZiB0aGUgdmlzaWJsZSBwcm9wZXJ5XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kYWwgaXMgYWJvdXQgdG8gYmUgY2xvc2VkIChpLmUuIHRoZSB7QGxpbmsgTW9kYWxBcGkuY2xvc2V8Y2xvc2V9IG1ldGhvZCB3YXMgY2FsbGVkKS5cblx0ICpcblx0ICogQHBhcmFtIGV2ZW50IC0gZXZlbnQgZ2l2aW5nIGFjY2VzcyB0byB0aGUgYXJndW1lbnQgZ2l2ZW4gdG8gdGhlIHtAbGluayBNb2RhbEFwaS5jbG9zZXxjbG9zZX0gbWV0aG9kIGFuZCBhbGxvd2luZ1xuXHQgKiB0byBjYW5jZWwgdGhlIGNsb3NlIHByb2Nlc3MuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUJlZm9yZUNsb3NlJykgYmVmb3JlQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsQmVmb3JlQ2xvc2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgbm90IHZpc2libGUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pXG5cdHNsb3RDaGlsZHJlbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnk8TW9kYWxXaWRnZXQ8RGF0YT4+KHtcblx0XHRcdFx0ZmFjdG9yeTogY3JlYXRlTW9kYWwsXG5cdFx0XHRcdHdpZGdldE5hbWU6ICdtb2RhbCcsXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRoZWFkZXI6IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIsXG5cdFx0XHRcdFx0c3RydWN0dXJlOiBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0XHRcdG9uQmVmb3JlQ2xvc2U6IChldmVudCkgPT4gdGhpcy5iZWZvcmVDbG9zZS5lbWl0KGV2ZW50KSxcblx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PlxuXHRcdFx0XHRcdCh7XG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogdGhpcy5zbG90RGVmYXVsdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRcdGZvb3RlcjogdGhpcy5zbG90Rm9vdGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdFx0aGVhZGVyOiB0aGlzLnNsb3RIZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLnNsb3RUaXRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHR9KSBhcyBhbnksXG5cdFx0XHRcdHNsb3RDaGlsZHJlbjogKCkgPT4gdGhpcy5zbG90Q2hpbGRyZW4sXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG59XG4iXX0=`;export{t as default};
