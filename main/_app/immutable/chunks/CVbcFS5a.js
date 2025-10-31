const e=`import { widgetsConfigFactory, SlotDirective, UseDirective, ComponentTemplate, BaseWidgetDirective, auBooleanAttribute, UseMultiDirective, auNumberAttribute, useDirectiveForHost, callWidgetFactory as callWidgetFactory$1, ToasterService as ToasterService$1 } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/angular-headless';
import * as i0 from '@angular/core';
import { InjectionToken, inject, TemplateRef, Directive, viewChild, ChangeDetectionStrategy, Component, input, contentChild, output, ViewEncapsulation, forwardRef, Injector, runInInjectionContext, Injectable, computed, effect, NgModule, ApplicationRef, createComponent, outputBinding, inputBinding, EnvironmentInjector } from '@angular/core';
import { getModalDefaultConfig, createModal, modalOutsideClick, modalCloseButtonClick, modalCloseEscape } from '@agnos-ui/core-bootstrap/components/modal';
import { getPaginationDefaultConfig, createPagination } from '@agnos-ui/core-bootstrap/components/pagination';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getRatingDefaultConfig, createRating } from '@agnos-ui/core-bootstrap/components/rating';
import { getSelectDefaultConfig, createSelect } from '@agnos-ui/core-bootstrap/components/select';
import { getAlertDefaultConfig, createAlert } from '@agnos-ui/core-bootstrap/components/alert';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { getAccordionDefaultConfig, createAccordionItem, createAccordion, factoryCreateAccordion } from '@agnos-ui/core-bootstrap/components/accordion';
import { getSliderDefaultConfig, createSlider } from '@agnos-ui/core-bootstrap/components/slider';
import { getProgressbarDefaultConfig, createProgressbar } from '@agnos-ui/core-bootstrap/components/progressbar';
import { getToastDefaultConfig, createToast, toastPositions, defaultToasterProps } from '@agnos-ui/core-bootstrap/components/toast';
import { createCollapse, getCollapseDefaultConfig } from '@agnos-ui/core-bootstrap/components/collapse';
import { getTreeDefaultConfig, createTree } from '@agnos-ui/core-bootstrap/components/tree';
import { getCarouselDefaultConfig, createCarousel } from '@agnos-ui/core-bootstrap/components/carousel';
import { getDrawerDefaultConfig, createDrawer } from '@agnos-ui/core-bootstrap/components/drawer';
export * from '@agnos-ui/core-bootstrap/services/transitions';
export * from '@agnos-ui/core-bootstrap/types';

/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
const export_getModalDefaultConfig = getModalDefaultConfig;
/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
const export_createModal = createModal;
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
const export_modalOutsideClick = modalOutsideClick;
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
const export_modalCloseButtonClick = modalCloseButtonClick;
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by pressing the Escape key.
 */
const export_modalCloseEscape = modalCloseEscape;

const widgetFactories = widgetsConfigFactory(new InjectionToken('bootstrapWidgetsConfig'));
/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
const widgetsConfigInjectionToken = widgetFactories.widgetsConfigInjectionToken;
/**
 * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
 * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
 * the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
 * {@link injectWidgetsConfig}.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
 * Angular dependency injection system.
 *
 * @returns DI provider to be included a list of \`providers\` (for example at a component level or
 * any other level of the Angular dependency injection system)
 *
 * @example
 * \`\`\`typescript
 * @Component({
 *   // ...
 *   providers: [
 *     provideWidgetsConfig((parentConfig) => {
 *       // first step configuration: transforms the parent configuration
 *       parentConfig.rating = parentConfig.rating ?? {};
 *       parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
 *       return parentConfig;
 *     })
 *   ]
 * })
 * class MyComponent {
 *   widgetsConfig = injectWidgetsConfig();
 *   constructor() {
 *     this.widgetsConfig.set({
 *       // second step configuration: overrides the parent configuration
 *       rating: {
 *         slotStar: MyCustomSlotStar
 *       }
 *     });
 *   }
 *   // ...
 * }
 * \`\`\`
 */
const provideWidgetsConfig = widgetFactories.provideWidgetsConfig;
/**
 * Returns the widgets default configuration store that was provided in the current injection context.
 * Throws if the no widgets default configuration store was provided.
 *
 * @param defaultConfig - values to set as soon as the config is injected
 * @remarks
 * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
 * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
 *
 * @returns the widgets default configuration store.
 */
const injectWidgetsConfig = widgetFactories.injectWidgetsConfig;
/**
 * Injects the configuration for a specific widget.
 *
 * @template N - The key of the widget configuration in the \`Config\` type.
 * @param widgetName - The name of the widget whose configuration is to be injected.
 * @returns A \`ReadableSignal\` that provides a partial configuration of the specified widget or \`undefined\` if the configuration is not available.
 */
const injectWidgetConfig = widgetFactories.injectWidgetConfig;
/**
 * Creates and initializes a widget using the provided factory and configuration options.
 *
 * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
 *
 * @template W - The type of the widget.
 * @param factory - The factory function to create the widget.
 * @param options - The options for creating the widget.
 * @param options.defaultConfig - The default configuration for the widget.
 * @param options.events - The event handlers for the widget.
 * @param options.slotTemplates - A function that returns the slot templates for the widget.
 * @param options.slotChildren - A function that returns the slot children for the widget.
 * @param options.afterInit - A callback function to be called after the widget is initialized.
 * @returns The initialized widget.
 */
const callWidgetFactory = widgetFactories.callWidgetFactory;

const _c0$c = ["header"];
const _c1$c = ["structure"];
const _c2$b = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
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
    i0.ɵɵconditionalCreate(2, ModalDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 6);
} if (rf & 2) {
    const state_r2 = ctx.state;
    const api_r3 = ctx.api;
    const directives_r1 = ctx.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.title())("auSlotProps", i0.ɵɵpureFunction3(3, _c2$b, state_r2, api_r3, directives_r1));
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
    i0.ɵɵproperty("auSlot", state_r5.header())("auSlotProps", i0.ɵɵpureFunction3(2, _c2$b, state_r5, api_r6, directives_r7));
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
    i0.ɵɵproperty("auSlot", state_r5.footer())("auSlotProps", i0.ɵɵpureFunction3(2, _c2$b, state_r5, api_r6, directives_r7));
} }
function ModalDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ModalDefaultSlotsComponent_ng_template_2_Conditional_0_Template, 2, 6, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, ModalDefaultSlotsComponent_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, ModalDefaultSlotsComponent_ng_template_2_Conditional_3_Template, 2, 6, "div", 9);
} if (rf & 2) {
    const state_r5 = ctx.state;
    const api_r6 = ctx.api;
    const directives_r7 = ctx.directives;
    i0.ɵɵconditional(state_r5.title() ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r5.children())("auSlotProps", i0.ɵɵpureFunction3(4, _c2$b, state_r5, api_r6, directives_r7));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r5.footer() ? 3 : -1);
} }
const _c3$a = ["content"];
const _c4$9 = ["auModal", ""];
const _c5$7 = ["*"];
const _c6$3 = (a0, a1) => [a0, a1];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ModalComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(1, _c6$3, ctx_r0.directives.backdropPortalDirective, ctx_r0.directives.backdropDirective));
} }
function ModalComponent_Conditional_3_ng_template_3_Template(rf, ctx) { }
function ModalComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "div", 3);
    i0.ɵɵtemplate(3, ModalComponent_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(6, _c6$3, ctx_r0.directives.modalPortalDirective, ctx_r0.directives.modalDirective));
    i0.ɵɵadvance();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("modal-dialog ", ctx_r0.state.fullscreen() ? "modal-fullscreen" : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(9, _c2$b, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
/**
 * Directive to provide the slot structure for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalStructureDirective, selectors: [["ng-template", "auModalStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalStructure]' }]
    }], null, null); })();
/**
 * Directive to provide the slot header for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalHeaderDirective, selectors: [["ng-template", "auModalHeader", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalHeader]' }]
    }], null, null); })();
/**
 * Directive to provide the slot title for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalTitleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalTitleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalTitleDirective, selectors: [["ng-template", "auModalTitle", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalTitleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalTitle]' }]
    }], null, null); })();
/**
 * Directive to provide the default slot for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalBodyDirective, selectors: [["ng-template", "auModalBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalBody]' }]
    }], null, null); })();
/**
 * Directive to provide the slot footer for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ModalFooterDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalFooterDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ModalFooterDirective, selectors: [["ng-template", "auModalFooter", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalFooterDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auModalFooter]' }]
    }], null, null); })();
/**
 * Component containing the default slots for the modal.
 */
class ModalDefaultSlotsComponent {
    constructor() {
        this.header = viewChild.required('header');
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function ModalDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ModalDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.header, _c0$c, 5);
            i0.ɵɵviewQuerySignal(ctx.structure, _c1$c, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, decls: 4, vars: 0, consts: [["header", ""], ["structure", ""], ["auModalHeader", ""], ["auModalStructure", ""], [1, "modal-title"], [3, "auSlot", "auSlotProps"], [1, "btn-close", 3, "auUse"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"]], template: function ModalDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModalDefaultSlotsComponent_ng_template_0_Template, 3, 7, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, ModalDefaultSlotsComponent_ng_template_2_Template, 4, 8, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective],
                template: \`
		<ng-template auModalHeader #header let-state="state" let-api="api" let-directives="directives">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.title()" [auSlotProps]="{state, api, directives}" />
			</h5>
			@if (state.closeButton()) {
				<button class="btn-close" [auUse]="directives.closeButtonDirective"></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-api="api" let-directives="directives">
			@if (state.title()) {
				<div class="modal-header">
					<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
			</div>
			@if (state.footer()) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.footer()" [auSlotProps]="{state, api, directives}" />
				</div>
			}
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDefaultSlotsComponent, { className: "ModalDefaultSlotsComponent", filePath: "components/modal/modal.component.ts", lineNumber: 100 }); })();
/**
 * Default slot for modal header.
 */
const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
/**
 * Modal component.
 */
class ModalComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createModal, {
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
                children: this.slotDefaultFromContent()?.templateRef,
                footer: this.slotFooterFromContent()?.templateRef,
                header: this.slotHeaderFromContent()?.templateRef,
                structure: this.slotStructureFromContent()?.templateRef,
                title: this.slotTitleFromContent()?.templateRef,
            }),
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
         *
         * @defaultValue \`true\`
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * The transition to use for the backdrop behind the modal (if present).
         *
         * @defaultValue \`fadeTransition\`
         */
        this.backdropTransition = input(undefined, ...(ngDevMode ? [{ debugName: "backdropTransition", alias: 'auBackdropTransition' }] : [{ alias: 'auBackdropTransition' }]));
        /**
         * The transition to use for the modal.
         *
         * @defaultValue \`fadeTransition\`
         */
        this.modalTransition = input(undefined, ...(ngDevMode ? [{ debugName: "modalTransition", alias: 'auModalTransition' }] : [{ alias: 'auModalTransition' }]));
        /**
         * Whether the modal should be visible when the transition is completed.
         *
         * @defaultValue \`false\`
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * Whether a backdrop should be created behind the modal.
         *
         * @defaultValue \`true\`
         */
        this.backdrop = input(undefined, ...(ngDevMode ? [{ debugName: "backdrop", alias: 'auBackdrop', transform: auBooleanAttribute }] : [{ alias: 'auBackdrop', transform: auBooleanAttribute }]));
        /**
         * Whether the modal should be closed when clicking on the viewport outside the modal.
         *
         * @defaultValue \`true\`
         */
        this.closeOnOutsideClick = input(undefined, ...(ngDevMode ? [{ debugName: "closeOnOutsideClick", alias: 'auCloseOnOutsideClick', transform: auBooleanAttribute }] : [{ alias: 'auCloseOnOutsideClick', transform: auBooleanAttribute }]));
        /**
         * Which element should contain the modal and backdrop DOM elements.
         * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
         * Otherwise, they stay where the widget is located.
         *
         * @defaultValue
         * \`\`\`ts
         * typeof window !== 'undefined' ? document.body : null
         * \`\`\`
         */
        this.container = input(undefined, ...(ngDevMode ? [{ debugName: "container", alias: 'auContainer' }] : [{ alias: 'auContainer' }]));
        /**
         * Value of the aria-label attribute to put on the close button.
         *
         * @defaultValue \`'Close'\`
         */
        this.ariaCloseButtonLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaCloseButtonLabel", alias: 'auAriaCloseButtonLabel' }] : [{ alias: 'auAriaCloseButtonLabel' }]));
        /**
         * Classes to add on the backdrop DOM element.
         *
         * @defaultValue \`''\`
         */
        this.backdropClass = input(undefined, ...(ngDevMode ? [{ debugName: "backdropClass", alias: 'auBackdropClass' }] : [{ alias: 'auBackdropClass' }]));
        /**
         * Whether to display the close button.
         *
         * @defaultValue \`true\`
         */
        this.closeButton = input(undefined, ...(ngDevMode ? [{ debugName: "closeButton", alias: 'auCloseButton', transform: auBooleanAttribute }] : [{ alias: 'auCloseButton', transform: auBooleanAttribute }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * Option to create a fullscreen modal, according to the bootstrap documentation.
         *
         * @defaultValue \`false\`
         */
        this.fullscreen = input(undefined, ...(ngDevMode ? [{ debugName: "fullscreen", alias: 'auFullscreen', transform: auBooleanAttribute }] : [{ alias: 'auFullscreen', transform: auBooleanAttribute }]));
        /**
         * Structure of the modal.
         * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(ModalStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Header of the modal. The default header includes {@link ModalProps.title|title}.
         */
        this.header = input(undefined, ...(ngDevMode ? [{ debugName: "header", alias: 'auHeader' }] : [{ alias: 'auHeader' }]));
        this.slotHeaderFromContent = contentChild(ModalHeaderDirective, ...(ngDevMode ? [{ debugName: "slotHeaderFromContent" }] : []));
        /**
         * Title of the modal.
         */
        this.title = input(undefined, ...(ngDevMode ? [{ debugName: "title", alias: 'auTitle' }] : [{ alias: 'auTitle' }]));
        this.slotTitleFromContent = contentChild(ModalTitleDirective, ...(ngDevMode ? [{ debugName: "slotTitleFromContent" }] : []));
        /**
         * Body of the modal.
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotDefaultFromContent = contentChild(ModalBodyDirective, ...(ngDevMode ? [{ debugName: "slotDefaultFromContent" }] : []));
        /**
         * Footer of the modal.
         */
        this.footer = input(undefined, ...(ngDevMode ? [{ debugName: "footer", alias: 'auFooter' }] : [{ alias: 'auFooter' }]));
        this.slotFooterFromContent = contentChild(ModalFooterDirective, ...(ngDevMode ? [{ debugName: "slotFooterFromContent" }] : []));
        /**
         * Data to use in content slots
         */
        this.contentData = input(undefined, ...(ngDevMode ? [{ debugName: "contentData", alias: 'auContentData' }] : [{ alias: 'auContentData' }]));
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
        this.visibleChange = output({ alias: 'auVisibleChange' });
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
        this.beforeClose = output({ alias: 'auBeforeClose' });
        /**
         * Event to be triggered when the transition is completed and the modal is not visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * Event to be triggered when the transition is completed and the modal is visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = output({ alias: 'auShown' });
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    static { this.ɵfac = function ModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["", "auModal", ""]], contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, ModalStructureDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotHeaderFromContent, ModalHeaderDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotTitleFromContent, ModalTitleDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotDefaultFromContent, ModalBodyDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotFooterFromContent, ModalFooterDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(5);
        } }, viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c3$a, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, inputs: { animated: [1, "auAnimated", "animated"], backdropTransition: [1, "auBackdropTransition", "backdropTransition"], modalTransition: [1, "auModalTransition", "modalTransition"], visible: [1, "auVisible", "visible"], backdrop: [1, "auBackdrop", "backdrop"], closeOnOutsideClick: [1, "auCloseOnOutsideClick", "closeOnOutsideClick"], container: [1, "auContainer", "container"], ariaCloseButtonLabel: [1, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: [1, "auBackdropClass", "backdropClass"], closeButton: [1, "auCloseButton", "closeButton"], className: [1, "auClassName", "className"], fullscreen: [1, "auFullscreen", "fullscreen"], structure: [1, "auStructure", "structure"], header: [1, "auHeader", "header"], title: [1, "auTitle", "title"], children: [1, "auChildren", "children"], footer: [1, "auFooter", "footer"], contentData: [1, "auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c4$9, ngContentSelectors: _c5$7, decls: 4, vars: 2, consts: [["content", ""], [1, "modal-backdrop", 3, "auUseMulti"], [1, "modal", "d-block", 3, "auUseMulti"], [1, "modal-content"], [3, "auSlot", "auSlotProps"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵconditionalCreate(2, ModalComponent_Conditional_2_Template, 1, 4, "div", 1);
            i0.ɵɵconditionalCreate(3, ModalComponent_Conditional_3_Template, 4, 13, "div", 2);
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseMultiDirective, SlotDirective],
                template: \`
		<ng-template #content><ng-content /></ng-template>
		@if (!state.backdropHidden()) {
			<div class="modal-backdrop" [auUseMulti]="[directives.backdropPortalDirective, directives.backdropDirective]"></div>
		}
		@if (!state.hidden()) {
			<div class="modal d-block" [auUseMulti]="[directives.modalPortalDirective, directives.modalDirective]">
				<div class="modal-dialog {{ state.fullscreen() ? 'modal-fullscreen' : '' }}">
					<div class="modal-content">
						<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
					</div>
				</div>
			</div>
		}
	\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "components/modal/modal.component.ts", lineNumber: 138 }); })();

/**
 * Retrieve a shallow copy of the default Pagination config
 * @returns the default Pagination config
 */
const export_getPaginationDefaultConfig = getPaginationDefaultConfig;
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
 * @returns a PaginationWidget
 */
const export_createPagination = createPagination;

const _c0$b = ["pages"];
const _c1$b = ["structure"];
const _c2$a = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
const _c3$9 = a0 => ({ page: a0 });
const _c4$8 = (a0, a1) => [a0, a1];
const _c5$6 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, displayedPage: a3 });
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
    i0.ɵɵproperty("auSlot", state_r2.ellipsisLabel())("auSlotProps", i0.ɵɵpureFunction3(3, _c2$a, state_r2, api_r3, directives_r4));
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
    i0.ɵɵtemplate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵconditionalCreate(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const api_r3 = ctx_r0.api;
    const directives_r4 = ctx_r0.directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4$8, directives_r4.pageLink, i0.ɵɵpureFunction1(4, _c3$9, page_r5)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.numberLabel())("auSlotProps", i0.ɵɵpureFunction4(9, _c5$6, state_r2, api_r3, directives_r4, page_r5));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.page() === page_r5 ? 2 : -1);
} }
function PaginationDefaultSlotsComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵconditionalCreate(1, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_1_Template, 4, 7)(2, PaginationDefaultSlotsComponent_ng_template_0_For_1_Conditional_2_Template, 3, 14, "a", 6);
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
    i0.ɵɵproperty("auSlot", state_r7.firstPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2$a, state_r7, api_r8, directives_r9));
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
    i0.ɵɵproperty("auSlot", state_r7.previousPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2$a, state_r7, api_r8, directives_r9));
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
    i0.ɵɵproperty("auSlot", state_r7.nextPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2$a, state_r7, api_r8, directives_r9));
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
    i0.ɵɵproperty("auSlot", state_r7.lastPageLabel())("auSlotProps", i0.ɵɵpureFunction3(5, _c2$a, state_r7, api_r8, directives_r9));
} }
function PaginationDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵconditionalCreate(1, PaginationDefaultSlotsComponent_ng_template_2_Conditional_1_Template, 4, 9, "li", 10);
    i0.ɵɵconditionalCreate(2, PaginationDefaultSlotsComponent_ng_template_2_Conditional_2_Template, 4, 9, "li", 10);
    i0.ɵɵtemplate(3, PaginationDefaultSlotsComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 8);
    i0.ɵɵconditionalCreate(4, PaginationDefaultSlotsComponent_ng_template_2_Conditional_4_Template, 4, 9, "li", 10);
    i0.ɵɵconditionalCreate(5, PaginationDefaultSlotsComponent_ng_template_2_Conditional_5_Template, 4, 9, "li", 10);
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
    i0.ɵɵproperty("auSlot", state_r7.pagesDisplay())("auSlotProps", i0.ɵɵpureFunction3(9, _c2$a, state_r7, api_r8, directives_r9));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.directionLinks() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r7.boundaryLinks() ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r7.ariaLiveLabelText());
} }
const _c6$2 = ["auPagination", ""];
function PaginationComponent_ng_template_0_Template(rf, ctx) { }
/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationEllipsisDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationEllipsisDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationEllipsisDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationEllipsisDirective, selectors: [["ng-template", "auPaginationEllipsis", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationEllipsisDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationEllipsis]' }]
    }], null, null); })();
/**
 * A directive to use to give the 'first' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationFirstDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationFirstDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationFirstDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationFirstDirective, selectors: [["ng-template", "auPaginationFirst", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationFirstDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationFirst]' }]
    }], null, null); })();
/**
 * A directive to use to give the 'last' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationLastDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationLastDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationLastDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationLastDirective, selectors: [["ng-template", "auPaginationLast", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationLastDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationLast]' }]
    }], null, null); })();
/**
 * A directive to use to give the 'next' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationNextDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationNextDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationNextDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationNextDirective, selectors: [["ng-template", "auPaginationNext", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationNextDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationNext]' }]
    }], null, null); })();
/**
 * A directive to use to give the page 'number' template to the pagination component
 * This directive provides a template reference for the {@link PaginationNumberContext}.
 */
class PaginationNumberDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationNumberDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationNumberDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationNumberDirective, selectors: [["ng-template", "auPaginationNumber", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationNumberDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationNumber]' }]
    }], null, null); })();
/**
 * A directive to use to give the 'previous' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationPreviousDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationPreviousDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationPreviousDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationPreviousDirective, selectors: [["ng-template", "auPaginationPrevious", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationPreviousDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationPrevious]' }]
    }], null, null); })();
/**
 * A directive to use to give the 'Pages' template for the Pages slot
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationPagesDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationPagesDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationPagesDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationPagesDirective, selectors: [["ng-template", "auPaginationPages", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationPagesDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationPages]' }]
    }], null, null); })();
/**
 * Directive to provide the slot structure for the pagination widget.
 * This directive provides a template reference for the {@link PaginationContext}.
 */
class PaginationStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function PaginationStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaginationStructureDirective, selectors: [["ng-template", "auPaginationStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auPaginationStructure]' }]
    }], null, null); })();
class PaginationDefaultSlotsComponent {
    constructor() {
        this.pages = viewChild.required('pages');
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function PaginationDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function PaginationDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.pages, _c0$b, 5);
            i0.ɵɵviewQuerySignal(ctx.structure, _c1$b, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, decls: 4, vars: 0, consts: [["pages", ""], ["structure", ""], ["auPaginationPages", ""], ["auPaginationStructure", ""], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], [1, "page-link", 3, "auUse"], ["aria-hidden", "true", 1, "page-link", "au-ellipsis"], [3, "auSlot", "auSlotProps"], [1, "visually-hidden"], [1, "page-item", 3, "disabled"], ["aria-live", "polite", 1, "visually-hidden"], ["aria-hidden", "true"]], template: function PaginationDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationDefaultSlotsComponent_ng_template_0_Template, 2, 0, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, PaginationDefaultSlotsComponent_ng_template_2_Template, 8, 13, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationDefaultSlotsComponent, [{
        type: Component,
        args: [{
                imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template auPaginationPages #pages let-state="state" let-api="api" let-directives="directives">
			@for (page of state.pages(); track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page()" [class.disabled]="page === -1 || state.disabled()">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.ellipsisLabel()" [auSlotProps]="{state, api, directives}" />
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel() }}</span>
					} @else {
						<a class="page-link" [auUse]="[directives.pageLink, {page}]">
							<ng-template [auSlot]="state.numberLabel()" [auSlotProps]="{state, api, directives, displayedPage: page}" />
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
								<ng-template [auSlot]="state.firstPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.previousDisabled()">
						<a class="page-link" [auUse]="directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.previousPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.pagesDisplay()" [auSlotProps]="{state, api, directives}" />
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.nextPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.lastPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">{{ state.ariaLiveLabelText() }}</div>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationDefaultSlotsComponent, { className: "PaginationDefaultSlotsComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 182 }); })();
/**
 * The default slot for the pages
 */
const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
const paginationDefaultSlotStructure = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');
/**
 * The \`PaginationComponent\` is an Angular component that extends the \`BaseWidgetDirective\`
 * to provide a customizable pagination widget. It includes various input properties
 * to configure labels, templates, and behavior for accessibility and internationalization (i18n).
 */
class PaginationComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createPagination, {
            defaultConfig: {
                structure: paginationDefaultSlotStructure,
                pagesDisplay: paginationDefaultSlotPages,
            },
            events: {
                onPageChange: (page) => this.pageChange.emit(page),
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                ellipsisLabel: this.slotEllipsisFromContent()?.templateRef,
                firstPageLabel: this.slotFirstFromContent()?.templateRef,
                previousPageLabel: this.slotPreviousFromContent()?.templateRef,
                nextPageLabel: this.slotNextFromContent()?.templateRef,
                lastPageLabel: this.slotLastFromContent()?.templateRef,
                pagesDisplay: this.slotPagesFromContent()?.templateRef,
                numberLabel: this.slotNumberLabelFromContent()?.templateRef,
            }),
        }));
        /**
         * Provide the label for each "Page" page button.
         * This is used for accessibility purposes.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         * @param processPage - The current page number
         * @param pageCount - The total number of pages
         *
         * @defaultValue
         * \`\`\`ts
         * (processPage: number, pageCount: number) => \`Page \${processPage} of \${pageCount}\`
         * \`\`\`
         */
        this.ariaPageLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaPageLabel", alias: 'auAriaPageLabel' }] : [{ alias: 'auAriaPageLabel' }]));
        /**
         * Provide the label for the aria-live element
         * This is used for accessibility purposes.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         * @param currentPage - The current page number
         * @param pageCount - The total number of pages
         *
         * @defaultValue
         * \`\`\`ts
         * (currentPage: number) => \`Current page is \${currentPage}\`
         * \`\`\`
         */
        this.ariaLiveLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLiveLabel", alias: 'auAriaLiveLabel' }] : [{ alias: 'auAriaLiveLabel' }]));
        /**
         * The label for the nav element.
         *
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'Page navigation'\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * The label for the "active" page.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue
         * \`\`\`ts
         * '(current)'
         * \`\`\`
         */
        this.activeLabel = input(undefined, ...(ngDevMode ? [{ debugName: "activeLabel", alias: 'auActiveLabel' }] : [{ alias: 'auActiveLabel' }]));
        /**
         * The label for the "First" page button.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue
         * \`\`\`ts
         * 'Action link for first page'
         * \`\`\`
         */
        this.ariaFirstLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaFirstLabel", alias: 'auAriaFirstLabel' }] : [{ alias: 'auAriaFirstLabel' }]));
        /**
         * The label for the "Previous" page button.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue
         * \`\`\`ts
         * 'Action link for previous page'
         * \`\`\`
         */
        this.ariaPreviousLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaPreviousLabel", alias: 'auAriaPreviousLabel' }] : [{ alias: 'auAriaPreviousLabel' }]));
        /**
         * The label for the "Next" page button.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue
         * \`\`\`ts
         * 'Action link for next page'
         * \`\`\`
         */
        this.ariaNextLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaNextLabel", alias: 'auAriaNextLabel' }] : [{ alias: 'auAriaNextLabel' }]));
        /**
         * The label for the "Last" page button.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue
         * \`\`\`ts
         * 'Action link for last page'
         * \`\`\`
         */
        this.ariaLastLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLastLabel", alias: 'auAriaLastLabel' }] : [{ alias: 'auAriaLastLabel' }]));
        /**
         * The label for the "Ellipsis" page.
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'Ellipsis page element'\`
         */
        this.ariaEllipsisLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaEllipsisLabel", alias: 'auAriaEllipsisLabel' }] : [{ alias: 'auAriaEllipsisLabel' }]));
        /**
         * Factory function providing the href for a "Page" page anchor,
         * based on the current page number
         * @param pageNumber - The index to use in the link
         *
         * @defaultValue
         * \`\`\`ts
         * (_page: number) => PAGE_LINK_DEFAULT
         * \`\`\`
         */
        this.pageLink = input(undefined, ...(ngDevMode ? [{ debugName: "pageLink", alias: 'auPageLink' }] : [{ alias: 'auPageLink' }]));
        /**
         * The template to use for the ellipsis slot
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'…'\`
         */
        this.ellipsisLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ellipsisLabel", alias: 'auEllipsisLabel' }] : [{ alias: 'auEllipsisLabel' }]));
        this.slotEllipsisFromContent = contentChild(PaginationEllipsisDirective, ...(ngDevMode ? [{ debugName: "slotEllipsisFromContent" }] : []));
        /**
         * The template to use for the first slot
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'«'\`
         */
        this.firstPageLabel = input(undefined, ...(ngDevMode ? [{ debugName: "firstPageLabel", alias: 'auFirstPageLabel' }] : [{ alias: 'auFirstPageLabel' }]));
        this.slotFirstFromContent = contentChild(PaginationFirstDirective, ...(ngDevMode ? [{ debugName: "slotFirstFromContent" }] : []));
        /**
         * The template to use for the previous slot
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'‹'\`
         */
        this.previousPageLabel = input(undefined, ...(ngDevMode ? [{ debugName: "previousPageLabel", alias: 'auPreviousPageLabel' }] : [{ alias: 'auPreviousPageLabel' }]));
        this.slotPreviousFromContent = contentChild(PaginationPreviousDirective, ...(ngDevMode ? [{ debugName: "slotPreviousFromContent" }] : []));
        /**
         * The template to use for the next slot
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'›'\`
         */
        this.nextPageLabel = input(undefined, ...(ngDevMode ? [{ debugName: "nextPageLabel", alias: 'auNextPageLabel' }] : [{ alias: 'auNextPageLabel' }]));
        this.slotNextFromContent = contentChild(PaginationNextDirective, ...(ngDevMode ? [{ debugName: "slotNextFromContent" }] : []));
        /**
         * The template to use for the last slot
         * for I18n, we suggest to use the global configuration
         * override any configuration parameters provided for this
         *
         * @defaultValue \`'»'\`
         */
        this.lastPageLabel = input(undefined, ...(ngDevMode ? [{ debugName: "lastPageLabel", alias: 'auLastPageLabel' }] : [{ alias: 'auLastPageLabel' }]));
        this.slotLastFromContent = contentChild(PaginationLastDirective, ...(ngDevMode ? [{ debugName: "slotLastFromContent" }] : []));
        /**
         * The template to use for the pages slot
         * To use to customize the pages view
         * override any configuration parameters provided for this
         */
        this.pagesDisplay = input(undefined, ...(ngDevMode ? [{ debugName: "pagesDisplay", alias: 'auPagesDisplay' }] : [{ alias: 'auPagesDisplay' }]));
        this.slotPagesFromContent = contentChild(PaginationPagesDirective, ...(ngDevMode ? [{ debugName: "slotPagesFromContent" }] : []));
        /**
         * The template to use for the number slot
         * override any configuration parameters provided for this
         * for I18n, we suggest to use the global configuration
         * @param displayedPage - The current page number
         *
         * @defaultValue
         * \`\`\`ts
         * ({displayedPage}: PaginationNumberContext) => \`\${displayedPage}\`
         * \`\`\`
         */
        this.numberLabel = input(undefined, ...(ngDevMode ? [{ debugName: "numberLabel", alias: 'auNumberLabel' }] : [{ alias: 'auNumberLabel' }]));
        this.slotNumberLabelFromContent = contentChild(PaginationNumberDirective, ...(ngDevMode ? [{ debugName: "slotNumberLabelFromContent" }] : []));
        /**
         * The template to use for the structure of the pagination component
         * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
         * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
         * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
         * {@link PaginationProps.numberLabel|numberLabel},
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(PaginationStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * If \`true\`, pagination links will be disabled.
         *
         * @defaultValue \`false\`
         */
        this.disabled = input(undefined, ...(ngDevMode ? [{ debugName: "disabled", alias: 'auDisabled', transform: auBooleanAttribute }] : [{ alias: 'auDisabled', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, the "First" and "Last" page links are shown.
         *
         * @defaultValue \`false\`
         */
        this.boundaryLinks = input(undefined, ...(ngDevMode ? [{ debugName: "boundaryLinks", alias: 'auBoundaryLinks', transform: auBooleanAttribute }] : [{ alias: 'auBoundaryLinks', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, the "Next" and "Previous" page links are shown.
         *
         * @defaultValue \`true\`
         */
        this.directionLinks = input(undefined, ...(ngDevMode ? [{ debugName: "directionLinks", alias: 'auDirectionLinks', transform: auBooleanAttribute }] : [{ alias: 'auDirectionLinks', transform: auBooleanAttribute }]));
        /**
         * The number of items in your paginated collection.
         *
         * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
         * \`collectionSize\` and \`pageSize\`.
         *
         * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
         *
         * Whatever the collectionSize the page number is of minimum 1.
         *
         * @defaultValue \`0\`
         */
        this.collectionSize = input(undefined, ...(ngDevMode ? [{ debugName: "collectionSize", alias: 'auCollectionSize', transform: auNumberAttribute }] : [{ alias: 'auCollectionSize', transform: auNumberAttribute }]));
        /**
         * The current page.
         *
         * Page numbers start with \`1\`.
         *
         * @defaultValue \`1\`
         */
        this.page = input(undefined, ...(ngDevMode ? [{ debugName: "page", alias: 'auPage', transform: auNumberAttribute }] : [{ alias: 'auPage', transform: auNumberAttribute }]));
        /**
         * The number of items per page.
         * @remarks min value is 1
         *
         * @defaultValue \`10\`
         */
        this.pageSize = input(undefined, ...(ngDevMode ? [{ debugName: "pageSize", alias: 'auPageSize', transform: auNumberAttribute }] : [{ alias: 'auPageSize', transform: auNumberAttribute }]));
        /**
         * The pagination display size.
         *
         * Bootstrap currently supports small and large sizes.
         *
         * @defaultValue \`null\`
         */
        this.size = input(undefined, ...(ngDevMode ? [{ debugName: "size", alias: 'auSize' }] : [{ alias: 'auSize' }]));
        /**
         * pagesFactory returns a function computing the array of pages to be displayed
         * as number (-1 are treated as ellipsis).
         * Use Page slot to customize the pages view and not this
         * @param page - The current page number
         * @param pageCount - The total number of pages
         *
         * @defaultValue
         * \`\`\`ts
         * (_page: number, pageCount: number) => {
         * 		const pages: number[] = [];
         * 		for (let i = 1; i <= pageCount; i++) {
         * 			pages.push(i);
         * 		}
         * 		return pages;
         * 	}
         * \`\`\`
         */
        this.pagesFactory = input(undefined, ...(ngDevMode ? [{ debugName: "pagesFactory", alias: 'auPagesFactory' }] : [{ alias: 'auPagesFactory' }]));
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
        this.pageChange = output({ alias: 'auPageChange' });
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
    }
    static { this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["", "auPagination", ""]], contentQueries: function PaginationComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotEllipsisFromContent, PaginationEllipsisDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotFirstFromContent, PaginationFirstDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotPreviousFromContent, PaginationPreviousDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotNextFromContent, PaginationNextDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotLastFromContent, PaginationLastDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotPagesFromContent, PaginationPagesDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotNumberLabelFromContent, PaginationNumberDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, PaginationStructureDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(8);
        } }, hostVars: 1, hostBindings: function PaginationComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.state.ariaLabel());
        } }, inputs: { ariaPageLabel: [1, "auAriaPageLabel", "ariaPageLabel"], ariaLiveLabel: [1, "auAriaLiveLabel", "ariaLiveLabel"], ariaLabel: [1, "auAriaLabel", "ariaLabel"], activeLabel: [1, "auActiveLabel", "activeLabel"], ariaFirstLabel: [1, "auAriaFirstLabel", "ariaFirstLabel"], ariaPreviousLabel: [1, "auAriaPreviousLabel", "ariaPreviousLabel"], ariaNextLabel: [1, "auAriaNextLabel", "ariaNextLabel"], ariaLastLabel: [1, "auAriaLastLabel", "ariaLastLabel"], ariaEllipsisLabel: [1, "auAriaEllipsisLabel", "ariaEllipsisLabel"], pageLink: [1, "auPageLink", "pageLink"], ellipsisLabel: [1, "auEllipsisLabel", "ellipsisLabel"], firstPageLabel: [1, "auFirstPageLabel", "firstPageLabel"], previousPageLabel: [1, "auPreviousPageLabel", "previousPageLabel"], nextPageLabel: [1, "auNextPageLabel", "nextPageLabel"], lastPageLabel: [1, "auLastPageLabel", "lastPageLabel"], pagesDisplay: [1, "auPagesDisplay", "pagesDisplay"], numberLabel: [1, "auNumberLabel", "numberLabel"], structure: [1, "auStructure", "structure"], disabled: [1, "auDisabled", "disabled"], boundaryLinks: [1, "auBoundaryLinks", "boundaryLinks"], directionLinks: [1, "auDirectionLinks", "directionLinks"], collectionSize: [1, "auCollectionSize", "collectionSize"], page: [1, "auPage", "page"], pageSize: [1, "auPageSize", "pageSize"], size: [1, "auSize", "size"], pagesFactory: [1, "auPagesFactory", "pagesFactory"], className: [1, "auClassName", "className"] }, outputs: { pageChange: "auPageChange" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c6$2, decls: 1, vars: 6, consts: [[3, "auSlotProps", "auSlot"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(2, _c2$a, ctx.state, ctx.api, ctx.directives))("auSlot", ctx.state.structure());
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: '[auPagination]',
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[attr.aria-label]': 'state.ariaLabel()',
                },
                encapsulation: ViewEncapsulation.None,
                template: \`<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()" />\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 210 }); })();

/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
const export_getRatingDefaultConfig = getRatingDefaultConfig;
/**
 * Create a RatingWidget with given config props
 * @param config - an optional rating config
 * @returns a RatingWidget
 */
const export_createRating = createRating;

const _c0$a = ["auRating", ""];
const _c1$a = a0 => ({ index: a0 });
const _c2$9 = (a0, a1) => [a0, a1];
function RatingComponent_For_1_ng_template_3_Template(rf, ctx) { }
function RatingComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵtemplate(3, RatingComponent_For_1_ng_template_3_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_1_r1 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", ɵ$index_1_r1 < ctx_r1.state.visibleRating() ? "*" : " ", ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c2$9, ctx_r1.directives.starDirective, i0.ɵɵpureFunction1(4, _c1$a, ɵ$index_1_r1)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state.star())("auSlotProps", ctx_r1.state.stars()[ɵ$index_1_r1]);
} }
/**
 * Directive to represent a rating star.
 *
 * This directive uses a template reference to render the {@link StarContext}.
 */
class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function RatingStarDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RatingStarDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RatingStarDirective, selectors: [["ng-template", "auRatingStar", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingStarDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auRatingStar]' }]
    }], null, null); })();
/**
 * The \`RatingComponent\` is an Angular component that allows users to provide a rating.
 * It extends \`BaseWidgetDirective\` and implements \`ControlValueAccessor\` to integrate with Angular forms.
 */
class RatingComponent extends BaseWidgetDirective {
    writeValue(value) {
        this['_widget'].patch({ rating: value });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this['_widget'].patch({ disabled });
    }
    constructor() {
        super(callWidgetFactory(export_createRating, {
            events: {
                onHover: (event) => this.hover.emit(event),
                onLeave: (event) => this.leave.emit(event),
                onRatingChange: (rating) => {
                    this.ratingChange.emit(rating);
                    this.onChange(rating);
                },
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.containerDirective);
            },
            slotTemplates: () => ({
                star: this.slotStarFromContent()?.templateRef,
            }),
        }));
        this.onChange = (_) => { };
        this.onTouched = () => { };
        /**
         * Return the value for the 'aria-valuetext' attribute.
         * @param rating - Current rating value.
         * @param maxRating - maxRating value.
         *
         * @defaultValue
         * \`\`\`ts
         * (rating: number, maxRating: number) => \`\${rating} out of \${maxRating}\`
         * \`\`\`
         */
        this.ariaValueTextFn = input(undefined, ...(ngDevMode ? [{ debugName: "ariaValueTextFn", alias: 'auAriaValueTextFn' }] : [{ alias: 'auAriaValueTextFn' }]));
        /**
         * If \`true\`, the rating is disabled.
         *
         * @defaultValue \`false\`
         */
        this.disabled = input(undefined, ...(ngDevMode ? [{ debugName: "disabled", alias: 'auDisabled', transform: auBooleanAttribute }] : [{ alias: 'auDisabled', transform: auBooleanAttribute }]));
        /**
         * The maximum rating that can be given.
         *
         * @defaultValue \`10\`
         */
        this.maxRating = input(undefined, ...(ngDevMode ? [{ debugName: "maxRating", alias: 'auMaxRating', transform: auNumberAttribute }] : [{ alias: 'auMaxRating', transform: auNumberAttribute }]));
        /**
         * The current rating. Could be a decimal value like \`3.75\`.
         *
         * @defaultValue \`0\`
         */
        this.rating = input(undefined, ...(ngDevMode ? [{ debugName: "rating", alias: 'auRating', transform: auNumberAttribute }] : [{ alias: 'auRating', transform: auNumberAttribute }]));
        /**
         * If \`true\`, the rating can't be changed.
         *
         * @defaultValue \`false\`
         */
        this.readonly = input(undefined, ...(ngDevMode ? [{ debugName: "readonly", alias: 'auReadonly', transform: auBooleanAttribute }] : [{ alias: 'auReadonly', transform: auBooleanAttribute }]));
        /**
         * Define if the rating can be reset.
         *
         * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
         *
         * @defaultValue \`true\`
         */
        this.resettable = input(undefined, ...(ngDevMode ? [{ debugName: "resettable", alias: 'auResettable', transform: auBooleanAttribute }] : [{ alias: 'auResettable', transform: auBooleanAttribute }]));
        /**
         * The template to override the way each star is displayed.
         *
         * @defaultValue
         * \`\`\`ts
         * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
         * \`\`\`
         */
        this.star = input(undefined, ...(ngDevMode ? [{ debugName: "star", alias: 'auStar' }] : [{ alias: 'auStar' }]));
        this.slotStarFromContent = contentChild(RatingStarDirective, ...(ngDevMode ? [{ debugName: "slotStarFromContent" }] : []));
        /**
         * Allows setting a custom rating tabindex.
         * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
         *
         * @defaultValue \`0\`
         */
        this.tabindex = input(undefined, ...(ngDevMode ? [{ debugName: "tabindex", alias: 'auTabindex', transform: auNumberAttribute }] : [{ alias: 'auTabindex', transform: auNumberAttribute }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * The aria label
         *
         * @defaultValue \`'Rating'\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * The aria labelled by
         *
         * @defaultValue \`''\`
         */
        this.ariaLabelledBy = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabelledBy", alias: 'auAriaLabelledBy' }] : [{ alias: 'auAriaLabelledBy' }]));
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload is equal to the rating being hovered over.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hover = output({ alias: 'auHover' });
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.leave = output({ alias: 'auLeave' });
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.ratingChange = output({ alias: 'auRatingChange' });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = function RatingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RatingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["", "auRating", ""]], contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStarFromContent, RatingStarDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, hostAttrs: [1, "d-inline-flex"], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function RatingComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
        } }, inputs: { ariaValueTextFn: [1, "auAriaValueTextFn", "ariaValueTextFn"], disabled: [1, "auDisabled", "disabled"], maxRating: [1, "auMaxRating", "maxRating"], rating: [1, "auRating", "rating"], readonly: [1, "auReadonly", "readonly"], resettable: [1, "auResettable", "resettable"], star: [1, "auStar", "star"], tabindex: [1, "auTabindex", "tabindex"], className: [1, "auClassName", "className"], ariaLabel: [1, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [1, "auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }]), i0.ɵɵInheritDefinitionFeature], attrs: _c0$a, decls: 2, vars: 0, consts: [[1, "visually-hidden"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, RatingComponent_For_1_Template, 4, 9, null, null, ctx.trackByIndex, true);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.state.stars());
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: '[auRating]',
                imports: [UseDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'd-inline-flex',
                    '(blur)': 'onTouched()',
                },
                template: \`
		@for (item of state.stars(); track trackByIndex(index); let index = $index) {
			<span class="visually-hidden">({{ index < state.visibleRating() ? '*' : ' ' }})</span>
			<span [auUse]="[directives.starDirective, {index}]">
				<ng-template [auSlot]="state.star()" [auSlotProps]="state.stars()[index]" />
			</span>
		}
	\`,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RatingComponent, { className: "RatingComponent", filePath: "components/rating/rating.component.ts", lineNumber: 64 }); })();

/**
 * Retrieve a shallow copy of the default Select config
 * @returns the default Select config
 */
const export_getSelectDefaultConfig = getSelectDefaultConfig;
/**
 * Creates a new select widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new select widget instance
 */
const export_createSelect = createSelect;

const _c0$9 = ["auSelect", ""];
const _c1$9 = (a0, a1) => [a0, a1];
const _c2$8 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, itemContext: a3 });
const _c3$8 = (a0, a1, a2) => [a0, a1, a2];
function SelectComponent_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c1$9, ctx_r1.directives.badgeAttributesDirective, itemContext_r1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state.badgeLabel())("auSlotProps", i0.ɵɵpureFunction4(6, _c2$8, ctx_r1.state, ctx_r1.api, ctx_r1.directives, itemContext_r1));
} }
function SelectComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_1_For_1_Template, 2, 11, "div", 3, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("text-bg-primary", itemContext_r3 === ctx_r1.state.highlighted());
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c1$9, ctx_r1.directives.itemAttributesDirective, itemContext_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state.itemLabel())("auSlotProps", i0.ɵɵpureFunction4(8, _c2$8, ctx_r1.state, ctx_r1.api, ctx_r1.directives, itemContext_r3));
} }
function SelectComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_3_For_2_Template, 2, 13, "li", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(1, _c3$8, ctx_r1.directives.hasFocusDirective, ctx_r1.directives.floatingDirective, ctx_r1.directives.menuAttributesDirective));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.state.visibleItems());
} }
/**
 * Directive to provide a custom template for the badge label in a select component.
 *
 * @template Item - The type of the item in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
class SelectBadgeLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectBadgeLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectBadgeLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectBadgeLabelDirective, selectors: [["ng-template", "auSelectBadgeLabel", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectBadgeLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectBadgeLabel]' }]
    }], null, null); })();
/**
 * Directive to provide a custom label template for select items.
 *
 * This directive allows you to define a custom template for the labels of items
 * in a select component. The template can be specified using an Angular \`TemplateRef\`.
 *
 * @template Item - The type of the items in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
class SelectItemLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectItemLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectItemLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectItemLabelDirective, selectors: [["ng-template", "auSelectItemLabel", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectItemLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectItemLabel]' }]
    }], null, null); })();
/**
 * A component that represents a customizable select dropdown widget.
 *
 * @template Item - The type of items in the select dropdown.
 */
class SelectComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createSelect, {
            events: {
                onOpenChange: (event) => this.openChange.emit(event),
                onSelectedChange: (event) => this.selectedChange.emit(event),
                onFilterTextChange: (event) => this.filterTextChange.emit(event),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.referenceDirective);
            },
            slotTemplates: () => ({
                badgeLabel: this.slotSelectBadgeLabelFromContent()?.templateRef,
                itemLabel: this.slotSelectItemLabelFromContent()?.templateRef,
            }),
        }));
        /**
         * aria-label used for the input inside the select
         *
         * @defaultValue \`'Select'\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * id used for the input inside the select
         */
        this.id = input(undefined, ...(ngDevMode ? [{ debugName: "id", alias: 'auId' }] : [{ alias: 'auId' }]));
        /**
         * List of available items for the dropdown
         *
         * @defaultValue \`[]\`
         */
        this.items = input(undefined, ...(ngDevMode ? [{ debugName: "items", alias: 'auItems' }] : [{ alias: 'auItems' }]));
        /**
         * List of allowed placements for the dropdown.
         * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
         *
         * @defaultValue
         * \`\`\`ts
         * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
         * \`\`\`
         */
        this.allowedPlacements = input(undefined, ...(ngDevMode ? [{ debugName: "allowedPlacements", alias: 'auAllowedPlacements' }] : [{ alias: 'auAllowedPlacements' }]));
        /**
         * true if the select is open
         *
         * @defaultValue \`false\`
         */
        this.open = input(undefined, ...(ngDevMode ? [{ debugName: "open", alias: 'auOpen', transform: auBooleanAttribute }] : [{ alias: 'auOpen', transform: auBooleanAttribute }]));
        /**
         * Filtered text to be display in the filter input
         *
         * @defaultValue \`''\`
         */
        this.filterText = input(undefined, ...(ngDevMode ? [{ debugName: "filterText", alias: 'auFilterText' }] : [{ alias: 'auFilterText' }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * true if the select is disabled
         *
         * @defaultValue \`false\`
         */
        this.disabled = input(undefined, ...(ngDevMode ? [{ debugName: "disabled", alias: 'auDisabled', transform: auBooleanAttribute }] : [{ alias: 'auDisabled', transform: auBooleanAttribute }]));
        /**
         * List of selected item ids
         *
         * @defaultValue \`[]\`
         */
        this.selected = input(undefined, ...(ngDevMode ? [{ debugName: "selected", alias: 'auSelected' }] : [{ alias: 'auSelected' }]));
        /**
         * true if a loading process is being done
         *
         * @defaultValue \`false\`
         */
        this.loading = input(undefined, ...(ngDevMode ? [{ debugName: "loading", alias: 'auLoading', transform: auBooleanAttribute }] : [{ alias: 'auLoading', transform: auBooleanAttribute }]));
        /**
         * Custom function to get the id of an item
         * By default, the item is returned
         *
         * @defaultValue
         * \`\`\`ts
         * (item: any) => '' + item
         * \`\`\`
         */
        this.itemIdFn = input(undefined, ...(ngDevMode ? [{ debugName: "itemIdFn", alias: 'auItemIdFn' }] : [{ alias: 'auItemIdFn' }]));
        /**
         * Class to be added on the dropdown menu container
         *
         * @defaultValue \`''\`
         */
        this.menuClassName = input(undefined, ...(ngDevMode ? [{ debugName: "menuClassName", alias: 'auMenuClassName' }] : [{ alias: 'auMenuClassName' }]));
        /**
         * The template to override the way each badge on the left of the input is displayed.
         * This define the content of the badge inside the badge container.
         *
         * @defaultValue
         * \`\`\`ts
         * ({itemContext}: SelectItemContext<any>) => itemContext.item
         * \`\`\`
         */
        this.badgeLabel = input(undefined, ...(ngDevMode ? [{ debugName: "badgeLabel", alias: 'auBadgeLabel' }] : [{ alias: 'auBadgeLabel' }]));
        this.slotSelectBadgeLabelFromContent = contentChild(SelectBadgeLabelDirective, ...(ngDevMode ? [{ debugName: "slotSelectBadgeLabelFromContent" }] : []));
        /**
         * The template to override the way each item is displayed in the list.
         * This define the content of the badge inside the badge container.
         *
         * @defaultValue
         * \`\`\`ts
         * ({itemContext}: SelectItemContext<any>) => itemContext.item
         * \`\`\`
         */
        this.itemLabel = input(undefined, ...(ngDevMode ? [{ debugName: "itemLabel", alias: 'auItemLabel' }] : [{ alias: 'auItemLabel' }]));
        this.slotSelectItemLabelFromContent = contentChild(SelectItemLabelDirective, ...(ngDevMode ? [{ debugName: "slotSelectItemLabelFromContent" }] : []));
        /**
         * Callback called when the text filter change
         * @param text - Filtered text
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.filterTextChange = output({ alias: 'auFilterTextChange' });
        /**
         * Callback called when the selection change
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.selectedChange = output({ alias: 'auSelectedChange' });
        /**
         * Callback called dropdown open state change
         * @param isOpen - updated open state
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.openChange = output({ alias: 'auOpenChange' });
        /**
         * Class to be added on menu items
         *
         * @defaultValue \`''\`
         */
        this.menuItemClassName = input(undefined, ...(ngDevMode ? [{ debugName: "menuItemClassName", alias: 'auMenuItemClassName' }] : [{ alias: 'auMenuItemClassName' }]));
        /**
         * Class to be added on selected items (displayed in the input zone)
         *
         * @defaultValue \`''\`
         */
        this.badgeClassName = input(undefined, ...(ngDevMode ? [{ debugName: "badgeClassName", alias: 'auBadgeClassName' }] : [{ alias: 'auBadgeClassName' }]));
        /**
         * Retrieves navigable elements within an HTML element containing badges and the input.
         *
         * @param node - HTMLElement that contains the badges and the input
         *
         * @defaultValue
         * \`\`\`ts
         * (node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
         * \`\`\`
         */
        this.navSelector = input(undefined, ...(ngDevMode ? [{ debugName: "navSelector", alias: 'auNavSelector' }] : [{ alias: 'auNavSelector' }]));
    }
    itemCtxTrackBy(_, itemContext) {
        return itemContext.id;
    }
    static { this.ɵfac = function SelectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["", "auSelect", ""]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotSelectBadgeLabelFromContent, SelectBadgeLabelDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotSelectItemLabelFromContent, SelectItemLabelDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state.className());
        } }, inputs: { ariaLabel: [1, "auAriaLabel", "ariaLabel"], id: [1, "auId", "id"], items: [1, "auItems", "items"], allowedPlacements: [1, "auAllowedPlacements", "allowedPlacements"], open: [1, "auOpen", "open"], filterText: [1, "auFilterText", "filterText"], className: [1, "auClassName", "className"], disabled: [1, "auDisabled", "disabled"], selected: [1, "auSelected", "selected"], loading: [1, "auLoading", "loading"], itemIdFn: [1, "auItemIdFn", "itemIdFn"], menuClassName: [1, "auMenuClassName", "menuClassName"], badgeLabel: [1, "auBadgeLabel", "badgeLabel"], itemLabel: [1, "auItemLabel", "itemLabel"], menuItemClassName: [1, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [1, "auBadgeClassName", "badgeClassName"], navSelector: [1, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$9, decls: 4, vars: 8, consts: [[1, "d-flex", "align-items-center", "flex-wrap", "gap-1", 3, "auUseMulti"], [3, "auUse", "value"], [1, "dropdown-menu", "show", 3, "auUseMulti"], [3, "auUse"], [3, "auSlot", "auSlotProps"], [1, "dropdown-item", "position-relative", 3, "auUse", "text-bg-primary"], [1, "dropdown-item", "position-relative", 3, "auUse"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, SelectComponent_Conditional_1_Template, 2, 0);
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, SelectComponent_Conditional_3_Template, 3, 5, "ul", 2);
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(5, _c1$9, ctx.directives.hasFocusDirective, ctx.directives.inputContainerDirective));
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_1_0 = ctx.state.selectedContexts()) ? 1 : -1, tmp_1_0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auUse", ctx.directives.inputDirective)("value", ctx.state.filterText());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.open() && ctx.state.visibleItems().length ? 3 : -1);
        } }, dependencies: [UseMultiDirective, SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                imports: [UseMultiDirective, SlotDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auSelect]',
                host: {
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state.className()',
                },
                template: \`
		<div [auUseMulti]="[directives.hasFocusDirective, directives.inputContainerDirective]" class="d-flex align-items-center flex-wrap gap-1">
			@if (state.selectedContexts(); as selectedContexts) {
				@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
					<div [auUse]="[directives.badgeAttributesDirective, itemContext]">
						<ng-template [auSlot]="state.badgeLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
					</div>
				}
			}
			<input [auUse]="directives.inputDirective" [value]="state.filterText()" />
		</div>
		@if (state.open() && state.visibleItems().length) {
			<ul [auUseMulti]="[directives.hasFocusDirective, directives.floatingDirective, directives.menuAttributesDirective]" class="dropdown-menu show">
				@for (itemContext of state.visibleItems(); track itemCtxTrackBy($index, itemContext)) {
					<li
						class="dropdown-item position-relative"
						[auUse]="[directives.itemAttributesDirective, itemContext]"
						[class.text-bg-primary]="itemContext === state.highlighted()"
					>
						<ng-template [auSlot]="state.itemLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
					</li>
				}
			</ul>
		}
	\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 87 }); })();

/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
const export_getAlertDefaultConfig = getAlertDefaultConfig;
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
const export_createAlert = createAlert;

const _c0$8 = ["structure"];
const _c1$8 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const api_r2 = i0.ɵɵnextContext().api; return i0.ɵɵresetView(api_r2.close()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = i0.ɵɵnextContext().state;
    i0.ɵɵattribute("aria-label", state_r3.ariaCloseButtonLabel());
} }
function AlertDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertDefaultSlotsComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 4);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const api_r2 = ctx.api;
    const directives_r4 = ctx.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.children())("auSlotProps", i0.ɵɵpureFunction3(3, _c1$8, state_r3, api_r2, directives_r4));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible() ? 2 : -1);
} }
const _c2$7 = ["content"];
const _c3$7 = ["auAlert", ""];
const _c4$7 = ["*"];
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AlertComponent_Conditional_2_ng_template_1_Template(rf, ctx) { }
function AlertComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, AlertComponent_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate3("au-alert alert alert-", ctx_r0.state.type(), " ", ctx_r0.state.className(), " ", ctx_r0.state.dismissible() ? "alert-dismissible" : ""));
    i0.ɵɵproperty("auUse", ctx_r0.directives.transitionDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(8, _c1$8, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
/**
 * Directive to be used as a structural directive for the body of an alert component.
 *
 * This directive allows the use of a template reference for the alert body content, with type {@link AlertContext}.
 */
class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AlertBodyDirective, selectors: [["ng-template", "auAlertBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAlertBody]' }]
    }], null, null); })();
/**
 * Directive to define the structure of an alert component.
 *
 * This directive uses a \`TemplateRef\` to inject the template reference of the {@link AlertContext}.
 */
class AlertStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AlertStructureDirective, selectors: [["ng-template", "auAlertStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAlertStructure]' }]
    }], null, null); })();
class AlertDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function AlertDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AlertDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$8, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auAlertStructure", ""], [1, "alert-body"], [3, "auSlot", "auSlotProps"], ["type", "button", 1, "btn-close"], ["type", "button", 1, "btn-close", 3, "click"]], template: function AlertDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertDefaultSlotsComponent_ng_template_0_Template, 3, 7, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, AlertStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, AlertStructureDirective],
                template: \` <ng-template auAlertStructure #structure let-state="state" let-api="api" let-directives="directives">
		<div class="alert-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
		</div>
		@if (state.dismissible()) {
			<button type="button" class="btn-close" (click)="api.close()" [attr.aria-label]="state.ariaCloseButtonLabel()"></button>
		}
	</ng-template>\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 47 }); })();
/**
 * Represents the default slot structure for the alert component.
 */
const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
/**
 * AlertComponent is a UI component that extends BaseWidgetDirective to provide
 * an alert box with various customizable properties and behaviors.
 *
 * @remarks
 * This component is designed to be used with Bootstrap styles and supports
 * various Bootstrap contextual classes for different alert types.
 */
class AlertComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createAlert, {
            defaultConfig: {
                structure: alertDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            slotTemplates: () => ({
                children: this.slotDefaultFromContent()?.templateRef,
                structure: this.slotStructureFromContent()?.templateRef,
            }),
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * Type of the alert, following bootstrap types.
         *
         * @defaultValue \`'primary'\`
         */
        this.type = input(undefined, ...(ngDevMode ? [{ debugName: "type", alias: 'auType' }] : [{ alias: 'auType' }]));
        /**
         * If \`true\`, alert can be dismissed by the user.
         * The close button (×) will be displayed and you can be notified of the event with the (close) output.
         *
         * @defaultValue \`true\`
         */
        this.dismissible = input(undefined, ...(ngDevMode ? [{ debugName: "dismissible", alias: 'auDismissible', transform: auBooleanAttribute }] : [{ alias: 'auDismissible', transform: auBooleanAttribute }]));
        /**
         * The transition function will be executed when the alert is displayed or hidden.
         *
         * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
         *
         * @defaultValue \`fadeTransition\`
         */
        this.transition = input(undefined, ...(ngDevMode ? [{ debugName: "transition", alias: 'auTransition' }] : [{ alias: 'auTransition' }]));
        /**
         * If \`true\` the alert is visible to the user
         *
         * @defaultValue \`true\`
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, alert opening will be animated.
         *
         * Animation is triggered  when the \`.open()\` function is called
         * or the visible prop is changed
         *
         * @defaultValue \`false\`
         */
        this.animatedOnInit = input(undefined, ...(ngDevMode ? [{ debugName: "animatedOnInit", alias: 'auAnimatedOnInit', transform: auBooleanAttribute }] : [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, alert closing will be animated.
         *
         * Animation is triggered  when clicked on the close button (×),
         * via the \`.close()\` function or the visible prop is changed
         *
         * @defaultValue \`true\`
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * Accessibility close button label
         *
         * @defaultValue \`'Close'\`
         */
        this.ariaCloseButtonLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaCloseButtonLabel", alias: 'auAriaCloseButtonLabel' }] : [{ alias: 'auAriaCloseButtonLabel' }]));
        /**
         * Template for the alert content
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotDefaultFromContent = contentChild(AlertBodyDirective, ...(ngDevMode ? [{ debugName: "slotDefaultFromContent" }] : []));
        /**
         * Global template for the alert component
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(AlertStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Callback called when the alert visibility changed.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.visibleChange = output({ alias: 'auVisibleChange' });
        /**
         * Callback called when the alert is hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * Callback called when the alert is shown.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = output({ alias: 'auShown' });
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    static { this.ɵfac = function AlertComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["", "auAlert", ""]], contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotDefaultFromContent, AlertBodyDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, AlertStructureDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c2$7, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, inputs: { type: [1, "auType", "type"], dismissible: [1, "auDismissible", "dismissible"], transition: [1, "auTransition", "transition"], visible: [1, "auVisible", "visible"], animatedOnInit: [1, "auAnimatedOnInit", "animatedOnInit"], animated: [1, "auAnimated", "animated"], ariaCloseButtonLabel: [1, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], children: [1, "auChildren", "children"], structure: [1, "auStructure", "structure"], className: [1, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c3$7, ngContentSelectors: _c4$7, decls: 3, vars: 1, consts: [["content", ""], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵconditionalCreate(2, AlertComponent_Conditional_2_Template, 2, 12, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.hidden() ? 2 : -1);
        } }, dependencies: [SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: '[auAlert]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseDirective],
                template: \` <ng-template #content>
			<ng-content />
		</ng-template>

		@if (!state.hidden()) {
			<div
				[auUse]="directives.transitionDirective"
				class="au-alert alert alert-{{ state.type() }} {{ state.className() }} {{ state.dismissible() ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
			</div>
		}\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "components/alert/alert.component.ts", lineNumber: 82 }); })();

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
const export_getAccordionDefaultConfig = getAccordionDefaultConfig;
/**
 * Create an AccordionItemWidget with given config props
 * @param config - an optional AccordionItem config
 * @returns an AccordionItemWidget
 */
const export_createAccordionItem = createAccordionItem;
/**
 * Create an AccordionWidget with given config props
 * @param config - an optional accordion config
 * @returns an AccordionWidget
 */
const export_createAccordion = createAccordion;
/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
const export_factoryCreateAccordion = factoryCreateAccordion;

const _c0$7 = ["structure"];
const _c1$7 = (a0, a1, a2) => ({ state: a0, directives: a1, api: a2 });
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
    i0.ɵɵelementStart(0, "h1", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 11);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r7 = i0.ɵɵnextContext().directives;
    const button_r8 = i0.ɵɵreference(20);
    i0.ɵɵproperty("auUse", directives_r7.headerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", button_r8);
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtemplate(1, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const api_r11 = ctx_r8.api;
    const directives_r7 = ctx_r8.directives;
    i0.ɵɵproperty("auUse", directives_r7.buttonDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(3, _c1$7, state_r10, directives_r7, api_r11))("auSlot", state_r10.header());
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template(rf, ctx) { }
function AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 14);
    i0.ɵɵtemplate(2, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const state_r10 = ctx_r8.state;
    const api_r11 = ctx_r8.api;
    const directives_r7 = ctx_r8.directives;
    i0.ɵɵproperty("auUse", directives_r7.bodyContainerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r7.bodyDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(4, _c1$7, state_r10, directives_r7, api_r11))("auSlot", state_r10.children());
} }
function AccordionItemDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Case_0_Template, 1, 1, "ng-container", 9)(1, AccordionItemDefaultSlotsComponent_ng_template_0_Case_1_Template, 1, 1, "ng-container", 9)(2, AccordionItemDefaultSlotsComponent_ng_template_0_Case_2_Template, 1, 1, "ng-container", 9)(3, AccordionItemDefaultSlotsComponent_ng_template_0_Case_3_Template, 1, 1, "ng-container", 9)(4, AccordionItemDefaultSlotsComponent_ng_template_0_Case_4_Template, 1, 1, "ng-container", 9)(5, AccordionItemDefaultSlotsComponent_ng_template_0_Case_5_Template, 1, 1, "ng-container", 9)(6, AccordionItemDefaultSlotsComponent_ng_template_0_Case_6_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(7, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_7_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_9_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_11_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_13_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_15_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(17, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_17_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(19, AccordionItemDefaultSlotsComponent_ng_template_0_ng_template_19_Template, 2, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵconditionalCreate(21, AccordionItemDefaultSlotsComponent_ng_template_0_Conditional_21_Template, 3, 8, "div", 10);
} if (rf & 2) {
    let tmp_12_0;
    const state_r10 = ctx.state;
    i0.ɵɵconditional((tmp_12_0 = state_r10.headingTag()) === "h1" ? 0 : tmp_12_0 === "h2" ? 1 : tmp_12_0 === "h3" ? 2 : tmp_12_0 === "h4" ? 3 : tmp_12_0 === "h5" ? 4 : tmp_12_0 === "h6" ? 5 : 6);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(state_r10.shouldBeInDOM() ? 21 : -1);
} }
const _c2$6 = ["content"];
const _c3$6 = ["auAccordionItem", ""];
const _c4$6 = ["*"];
const _c5$5 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function AccordionItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AccordionItemComponent_ng_template_2_Template(rf, ctx) { }
/**
 * Directive to represent the body of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
class AccordionBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionBodyDirective, selectors: [["ng-template", "auAccordionItemBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemBody]' }]
    }], null, null); })();
/**
 * Directive to be used as an accordion header.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
class AccordionHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionHeaderDirective, selectors: [["ng-template", "auAccordionItemHeader", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemHeader]' }]
    }], null, null); })();
/**
 * Directive that represents the structure of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 * It also includes a static method to guard the template context type.
 */
class AccordionItemStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AccordionItemStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionItemStructureDirective, selectors: [["ng-template", "auAccordionItemStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAccordionItemStructure]' }]
    }], null, null); })();
class AccordionItemDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function AccordionItemDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AccordionItemDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$7, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["h1", ""], ["h2", ""], ["h3", ""], ["h4", ""], ["h5", ""], ["h6", ""], ["button", ""], ["auAccordionItemStructure", ""], [3, "ngTemplateOutlet"], [1, "accordion-collapse", 3, "auUse"], [1, "accordion-header", 3, "auUse"], [1, "accordion-button", 3, "auUse"], [3, "auSlotProps", "auSlot"], [1, "accordion-body", 3, "auUse"]], template: function AccordionItemDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionItemDefaultSlotsComponent_ng_template_0_Template, 22, 2, "ng-template", 8, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, NgTemplateOutlet, AccordionItemStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, NgTemplateOutlet, AccordionItemStructureDirective],
                template: \`
		<ng-template auAccordionItemStructure #structure let-state="state" let-api="api" let-directives="directives">
			@switch (state.headingTag()) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1" />
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2" />
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3" />
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4" />
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5" />
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6" />
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2" />
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="directives.buttonDirective">
					<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.header()" />
				</button>
			</ng-template>
			@if (state.shouldBeInDOM()) {
				<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="directives.bodyDirective">
						<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.children()" />
					</div>
				</div>
			}
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemDefaultSlotsComponent, { className: "AccordionItemDefaultSlotsComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 136 }); })();
/**
 * Represents the default slot structure for an accordion item.
 */
const accordionItemDefaultSlotStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');
/**
 * AccordionItemComponent is a component that represents an item within an accordion.
 */
class AccordionItemComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory((arg) => inject(AccordionDirective).api.registerItem(arg), {
            defaultConfig: {
                structure: accordionItemDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (visible) => this.visibleChange.emit(visible),
                onHidden: () => this.hidden.emit(),
                onShown: () => this.shown.emit(),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.itemDirective);
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                header: this.slotHeaderFromContent()?.templateRef,
                children: this.slotBodyFromContent()?.templateRef,
            }),
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * Content present in the accordion button inside the accordion header.
         *
         * It is a prop of the accordion-item.
         */
        this.header = input(undefined, ...(ngDevMode ? [{ debugName: "header", alias: 'auHeader' }] : [{ alias: 'auHeader' }]));
        this.slotHeaderFromContent = contentChild(AccordionHeaderDirective, ...(ngDevMode ? [{ debugName: "slotHeaderFromContent" }] : []));
        /**
         * Content present in the accordion body.
         *
         * It is a prop of the accordion-item.
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotBodyFromContent = contentChild(AccordionBodyDirective, ...(ngDevMode ? [{ debugName: "slotBodyFromContent" }] : []));
        /**
         * Structure of the accordion-item. The default item structure is: accordion-item
         * contains accordion header and accordion-item body container; the accordion header contains the accordion button
         * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
         * The itemTransition is applied on this element.
         *
         * It is a prop of the accordion-item.
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(AccordionItemStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
         */
        this.id = input(undefined, ...(ngDevMode ? [{ debugName: "id", alias: 'auId' }] : [{ alias: 'auId' }]));
        /**
         * The transition to use for the accordion-item body-container when the accordion-item is toggled.
         */
        this.transition = input(undefined, ...(ngDevMode ? [{ debugName: "transition", alias: 'auTransition' }] : [{ alias: 'auTransition' }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
         */
        this.destroyOnHide = input(undefined, ...(ngDevMode ? [{ debugName: "destroyOnHide", alias: 'auDestroyOnHide', transform: auBooleanAttribute }] : [{ alias: 'auDestroyOnHide', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, the accordion-item will be disabled.
         * It will not react to user's clicks, but still will be possible to toggle programmatically.
         */
        this.disabled = input(undefined, ...(ngDevMode ? [{ debugName: "disabled", alias: 'auDisabled', transform: auBooleanAttribute }] : [{ alias: 'auDisabled', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, accordion-item will be animated.
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * CSS classes to add on the accordion-item header DOM element.
         */
        this.headerClassName = input(undefined, ...(ngDevMode ? [{ debugName: "headerClassName", alias: 'auHeaderClassName' }] : [{ alias: 'auHeaderClassName' }]));
        /**
         * CSS classes to add on the accordion-item collapse DOM element.
         */
        this.buttonClassName = input(undefined, ...(ngDevMode ? [{ debugName: "buttonClassName", alias: 'auButtonClassName' }] : [{ alias: 'auButtonClassName' }]));
        /**
         * CSS classes to add on the accordion-item body container DOM element.
         * The accordion-item body container is the DOM element on what the itemTransition is applied.
         */
        this.bodyContainerClassName = input(undefined, ...(ngDevMode ? [{ debugName: "bodyContainerClassName", alias: 'auBodyContainerClassName' }] : [{ alias: 'auBodyContainerClassName' }]));
        /**
         * CSS classes to add on the accordion-item body DOM element.
         */
        this.bodyClassName = input(undefined, ...(ngDevMode ? [{ debugName: "bodyClassName", alias: 'auBodyClassName' }] : [{ alias: 'auBodyClassName' }]));
        /**
         * The html tag to use for the accordion-item-header.
         */
        this.headingTag = input(undefined, ...(ngDevMode ? [{ debugName: "headingTag", alias: 'auHeadingTag' }] : [{ alias: 'auHeadingTag' }]));
        /**
         * An event fired when an item is shown.
         */
        this.shown = output({ alias: 'auShown' });
        /**
         * An event fired when an item is hidden.
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * An event fired when the \`visible\` value changes.
         *
         * Event payload is the new value of visible.
         */
        this.visibleChange = output({ alias: 'auVisibleChange' });
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.api.initDone());
    }
    static { this.ɵfac = function AccordionItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemComponent, selectors: [["", "auAccordionItem", ""]], contentQueries: function AccordionItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotHeaderFromContent, AccordionHeaderDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotBodyFromContent, AccordionBodyDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, AccordionItemStructureDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(3);
        } }, viewQuery: function AccordionItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c2$6, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, hostAttrs: [1, "accordion-item"], inputs: { header: [1, "auHeader", "header"], children: [1, "auChildren", "children"], structure: [1, "auStructure", "structure"], id: [1, "auId", "id"], transition: [1, "auTransition", "transition"], className: [1, "auClassName", "className"], destroyOnHide: [1, "auDestroyOnHide", "destroyOnHide"], disabled: [1, "auDisabled", "disabled"], visible: [1, "auVisible", "visible"], animated: [1, "auAnimated", "animated"], headerClassName: [1, "auHeaderClassName", "headerClassName"], buttonClassName: [1, "auButtonClassName", "buttonClassName"], bodyContainerClassName: [1, "auBodyContainerClassName", "bodyContainerClassName"], bodyClassName: [1, "auBodyClassName", "bodyClassName"], headingTag: [1, "auHeadingTag", "headingTag"] }, outputs: { shown: "auShown", hidden: "auHidden", visibleChange: "auVisibleChange" }, exportAs: ["auAccordionItem"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c3$6, ngContentSelectors: _c4$6, decls: 3, vars: 6, consts: [["content", ""], [3, "auSlotProps", "auSlot"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AccordionItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, AccordionItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("auSlotProps", i0.ɵɵpureFunction3(2, _c5$5, ctx.state, ctx.api, ctx.directives))("auSlot", ctx.state.structure());
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemComponent, [{
        type: Component,
        args: [{
                selector: '[auAccordionItem]',
                exportAs: 'auAccordionItem',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'accordion-item',
                },
                imports: [SlotDirective],
                template: \`
		<ng-template #content><ng-content /></ng-template>
		<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()" />
	\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "components/accordion/accordion.component.ts", lineNumber: 163 }); })();
/**
 * Directive for creating an accordion component.
 *
 * This directive extends the \`BaseWidgetDirective\` and provides various inputs and outputs
 * to customize the behavior and appearance of the accordion and its items.
 *
 */
class AccordionDirective extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createAccordion, {
            events: {
                onItemShown: (id) => this.itemShown.emit(id),
                onItemHidden: (id) => this.itemHidden.emit(id),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.accordionDirective);
            },
        }));
        /**
         * If \`true\`, only one accordion-item at the time can stay open.
         *
         * @defaultValue \`false\`
         */
        this.closeOthers = input(undefined, ...(ngDevMode ? [{ debugName: "closeOthers", alias: 'auCloseOthers', transform: auBooleanAttribute }] : [{ alias: 'auCloseOthers', transform: auBooleanAttribute }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * An event fired when an item is shown.
         *
         * Event payload is the id of the item.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.itemShown = output({ alias: 'auItemShown' });
        /**
         * An event fired when an item is hidden.
         *
         * Event payload is the id of the item.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.itemHidden = output({ alias: 'auItemHidden' });
        /**
         * If \`true\`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
         *
         * @defaultValue \`true\`
         */
        this.itemDestroyOnHide = input(undefined, ...(ngDevMode ? [{ debugName: "itemDestroyOnHide", alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }] : [{ alias: 'auItemDestroyOnHide', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, accordion-item will be animated.
         *
         * @defaultValue \`true\`
         */
        this.itemAnimated = input(undefined, ...(ngDevMode ? [{ debugName: "itemAnimated", alias: 'auItemAnimated', transform: auBooleanAttribute }] : [{ alias: 'auItemAnimated', transform: auBooleanAttribute }]));
        /**
         * The transition to use for the accordion-item body-container when the accordion-item is toggled.
         *
         * @defaultValue
         * \`\`\`ts
         * collapseVerticalTransition
         * \`\`\`
         */
        this.itemTransition = input(undefined, ...(ngDevMode ? [{ debugName: "itemTransition", alias: 'auItemTransition' }] : [{ alias: 'auItemTransition' }]));
        /**
         * Structure of the accordion-item. The default item structure is: accordion-item
         * contains accordion header and accordion-item body container; the accordion header contains the accordion button
         * (that contains \`header\`), while the accordion-item body container contains the accordion body (that contains \`children\`).
         * The itemTransition is applied on this element.
         *
         * It is a prop of the accordion-item.
         */
        this.itemStructure = input(undefined, ...(ngDevMode ? [{ debugName: "itemStructure", alias: 'auItemStructure' }] : [{ alias: 'auItemStructure' }]));
        /**
         * CSS classes to add on the accordion-item DOM element.
         *
         * @defaultValue \`''\`
         */
        this.itemClassName = input(undefined, ...(ngDevMode ? [{ debugName: "itemClassName", alias: 'auItemClassName' }] : [{ alias: 'auItemClassName' }]));
        /**
         * CSS classes to add on the accordion-item header DOM element.
         *
         * @defaultValue \`''\`
         */
        this.itemHeaderClassName = input(undefined, ...(ngDevMode ? [{ debugName: "itemHeaderClassName", alias: 'auItemHeaderClassName' }] : [{ alias: 'auItemHeaderClassName' }]));
        /**
         * CSS classes to add on the accordion-item toggle button DOM element.
         *
         * @defaultValue \`''\`
         */
        this.itemButtonClassName = input(undefined, ...(ngDevMode ? [{ debugName: "itemButtonClassName", alias: 'auItemButtonClassName' }] : [{ alias: 'auItemButtonClassName' }]));
        /**
         * CSS classes to add on the accordion-item body container DOM element.
         * The accordion-item body container is the DOM element on what the itemTransition is applied.
         *
         * @defaultValue \`''\`
         */
        this.itemBodyContainerClassName = input(undefined, ...(ngDevMode ? [{ debugName: "itemBodyContainerClassName", alias: 'auItemBodyContainerClassName' }] : [{ alias: 'auItemBodyContainerClassName' }]));
        /**
         * CSS classes to add on the accordion-item body DOM element.
         *
         * @defaultValue \`''\`
         */
        this.itemBodyClassName = input(undefined, ...(ngDevMode ? [{ debugName: "itemBodyClassName", alias: 'auItemBodyClassName' }] : [{ alias: 'auItemBodyClassName' }]));
        /**
         * The html tag to use for the accordion-item-header.
         *
         * @defaultValue \`''\`
         */
        this.itemHeadingTag = input(undefined, ...(ngDevMode ? [{ debugName: "itemHeadingTag", alias: 'auItemHeadingTag' }] : [{ alias: 'auItemHeadingTag' }]));
    }
    static { this.ɵfac = function AccordionDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AccordionDirective, selectors: [["", "auAccordion", ""]], hostAttrs: [1, "accordion"], inputs: { closeOthers: [1, "auCloseOthers", "closeOthers"], className: [1, "auClassName", "className"], itemDestroyOnHide: [1, "auItemDestroyOnHide", "itemDestroyOnHide"], itemAnimated: [1, "auItemAnimated", "itemAnimated"], itemTransition: [1, "auItemTransition", "itemTransition"], itemStructure: [1, "auItemStructure", "itemStructure"], itemClassName: [1, "auItemClassName", "itemClassName"], itemHeaderClassName: [1, "auItemHeaderClassName", "itemHeaderClassName"], itemButtonClassName: [1, "auItemButtonClassName", "itemButtonClassName"], itemBodyContainerClassName: [1, "auItemBodyContainerClassName", "itemBodyContainerClassName"], itemBodyClassName: [1, "auItemBodyClassName", "itemBodyClassName"], itemHeadingTag: [1, "auItemHeadingTag", "itemHeadingTag"] }, outputs: { itemShown: "auItemShown", itemHidden: "auItemHidden" }, exportAs: ["auAccordion"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionDirective, [{
        type: Directive,
        args: [{
                selector: '[auAccordion]',
                exportAs: 'auAccordion',
                host: {
                    class: 'accordion',
                },
            }]
    }], () => [], null); })();

/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
const export_getSliderDefaultConfig = getSliderDefaultConfig;
/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
const export_createSlider = createSlider;

const _c0$6 = ["handle"];
const _c1$6 = a0 => ({ item: a0 });
const _c2$5 = (a0, a1) => [a0, a1];
function SliderDefaultHandleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("keydown", function SliderDefaultHandleSlotComponent_ng_template_0_Template_button_keydown_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKeyDown($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directives_r3 = ctx.directives;
    const item_r4 = ctx.item;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2$5, directives_r3.handleDirective, i0.ɵɵpureFunction1(1, _c1$6, item_r4)));
} }
const _c3$5 = ["tick"];
const _c4$5 = a0 => ({ tick: a0 });
function SliderDefaultTickSlotComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const directives_r2 = ctx_r0.directives;
    const tick_r3 = ctx_r0.tick;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(4, _c2$5, directives_r2.tickLabelDirective, i0.ɵɵpureFunction1(2, _c4$5, tick_r3)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tick_r3.value, " ");
} }
function SliderDefaultTickSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 5);
} }
function SliderDefaultTickSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, SliderDefaultTickSlotComponent_ng_template_0_Conditional_0_Template, 2, 7, "span", 2);
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 3);
    i0.ɵɵelement(3, "circle", 4);
    i0.ɵɵconditionalCreate(4, SliderDefaultTickSlotComponent_ng_template_0_Conditional_4_Template, 1, 0, ":svg:circle", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r4 = ctx.state;
    const directives_r2 = ctx.directives;
    const tick_r3 = ctx.tick;
    i0.ɵɵconditional(tick_r3.displayLabel ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(9, _c2$5, directives_r2.tickDirective, i0.ɵɵpureFunction1(7, _c4$5, tick_r3)));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("au-slider-tick-disabled", state_r4.disabled())("au-slider-tick-selected", tick_r3.selected);
    i0.ɵɵadvance();
    i0.ɵɵconditional(tick_r3.selected ? 4 : -1);
} }
const _c5$4 = ["structure"];
const _c6$1 = a0 => ({ option: a0 });
const _c7$1 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, value: a3 });
const _c8$1 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, tick: a3 });
const _c9 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, item: a3 });
const _c10 = a0 => ({ index: a0 });
const _forTrack0$2 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.position;
function SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const directives_r2 = i0.ɵɵnextContext().directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c2$5, directives_r2.progressDisplayDirective, i0.ɵɵpureFunction1(1, _c6$1, option_r1)));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵtemplate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_ng_template_3_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auUse", directives_r2.minLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(6, _c7$1, state_r4, api_r5, directives_r2, state_r4.min()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r2.maxLabelDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(11, _c7$1, state_r4, api_r5, directives_r2, state_r4.max()));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(4, _c7$1, state_r4, api_r5, directives_r2, state_r4.sortedValues()[1]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(9, _c7$1, state_r4, api_r5, directives_r2, state_r4.sortedValues()[0]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵtemplate(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(4, _c7$1, state_r4, api_r5, directives_r2, state_r4.sortedValues()[0]));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(9, _c7$1, state_r4, api_r5, directives_r2, state_r4.sortedValues()[1]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵconditionalCreate(1, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_1_Template, 3, 14)(2, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Conditional_2_Template, 3, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    i0.ɵɵproperty("auUse", directives_r2.combinedHandleLabelDisplayDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.rtl() ? 1 : 2);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_6_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const tick_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.tick())("auSlotProps", i0.ɵɵpureFunction4(2, _c8$1, state_r4, api_r5, directives_r2, tick_r6));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_8_ng_template_0_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_8_Conditional_1_ng_template_1_Template(rf, ctx) { }
function SliderDefaultStructureSlotComponent_ng_template_0_For_8_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_8_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_35_r7 = i0.ɵɵnextContext().$index;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c2$5, directives_r2.handleLabelDisplayDirective, i0.ɵɵpureFunction1(3, _c10, ɵ$index_35_r7)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r4.label())("auSlotProps", i0.ɵɵpureFunction4(8, _c7$1, state_r4, api_r5, directives_r2, state_r4.values()[ɵ$index_35_r7]));
} }
function SliderDefaultStructureSlotComponent_ng_template_0_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_8_ng_template_0_Template, 0, 0, "ng-template", 3);
    i0.ɵɵconditionalCreate(1, SliderDefaultStructureSlotComponent_ng_template_0_For_8_Conditional_1_Template, 2, 13, "div", 2);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const state_r4 = ctx_r2.state;
    const directives_r2 = ctx_r2.directives;
    const api_r5 = ctx_r2.api;
    i0.ɵɵproperty("auSlot", state_r4.handle())("auSlotProps", i0.ɵɵpureFunction4(3, _c9, state_r4, api_r5, directives_r2, item_r8));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels() && !state_r4.combinedLabelDisplay() ? 1 : -1);
} }
function SliderDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SliderDefaultStructureSlotComponent_ng_template_0_For_1_Template, 1, 6, "div", 2, _forTrack0$2);
    i0.ɵɵelement(2, "div", 2);
    i0.ɵɵconditionalCreate(3, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_3_Template, 4, 16);
    i0.ɵɵconditionalCreate(4, SliderDefaultStructureSlotComponent_ng_template_0_Conditional_4_Template, 3, 2, "div", 2);
    i0.ɵɵrepeaterCreate(5, SliderDefaultStructureSlotComponent_ng_template_0_For_6_Template, 1, 7, null, 3, _forTrack1);
    i0.ɵɵrepeaterCreate(7, SliderDefaultStructureSlotComponent_ng_template_0_For_8_Template, 2, 8, null, null, _forTrack0$2);
} if (rf & 2) {
    const state_r4 = ctx.state;
    const directives_r2 = ctx.directives;
    i0.ɵɵrepeater(state_r4.progressDisplayOptions());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auUse", directives_r2.clickableAreaDirective);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showMinMaxLabels() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r4.showValueLabels() && state_r4.combinedLabelDisplay() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r4.ticks());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(state_r4.sortedHandles());
} }
const _c11 = ["auSlider", ""];
const _c12 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function SliderComponent_ng_template_1_Template(rf, ctx) { }
/**
 * Directive to provide a template reference for slider labels.
 *
 * This directive uses a template reference to render the {@link SliderSlotLabelContext}.
 */
class SliderLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderLabelDirective, selectors: [["ng-template", "auSliderLabel", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderLabel]' }]
    }], null, null); })();
/**
 * Directive representing a handle for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotHandleContext}.
 */
class SliderHandleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderHandleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderHandleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderHandleDirective, selectors: [["ng-template", "auSliderHandle", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderHandleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderHandle]' }]
    }], null, null); })();
class SliderDefaultHandleSlotComponent {
    constructor() {
        this.handle = viewChild.required('handle');
    }
    /**
     * Key handler that sets the refocus element only on the key strokes that move
     * the element up the DOM
     * @param event object containting key stroke and the target element
     */
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'Home':
            case 'ArrowUp':
            case 'ArrowRight':
            case 'End':
                clearTimeout(this.updateTimeout);
                this.updateTimeout = setTimeout(() => {
                    event.target?.focus();
                });
                break;
            default:
                break;
        }
    }
    ngOnDestroy() {
        clearTimeout(this.updateTimeout);
    }
    static { this.ɵfac = function SliderDefaultHandleSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderDefaultHandleSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultHandleSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultHandleSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.handle, _c0$6, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["handle", ""], ["auSliderHandle", ""], [3, "keydown", "auUse"]], template: function SliderDefaultHandleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultHandleSlotComponent_ng_template_0_Template, 1, 6, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SliderHandleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultHandleSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SliderHandleDirective],
                template: \`
		<ng-template auSliderHandle #handle let-state="state" let-directives="directives" let-item="item">
			<button [auUse]="[directives.handleDirective, {item}]" (keydown)="onKeyDown($event)"></button>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultHandleSlotComponent, { className: "SliderDefaultHandleSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 64 }); })();
/**
 * A constant representing the default slot handle for the slider component.
 */
const sliderDefaultSlotHandle = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');
/**
 * Directive representing a tick for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotTickContext}.
 */
class SliderTickDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderTickDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderTickDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderTickDirective, selectors: [["ng-template", "auSliderTick", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderTickDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderTick]' }]
    }], null, null); })();
class SliderDefaultTickSlotComponent {
    constructor() {
        this.tick = viewChild.required('tick');
    }
    static { this.ɵfac = function SliderDefaultTickSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderDefaultTickSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultTickSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultTickSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.tick, _c3$5, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["tick", ""], ["auSliderTick", ""], [3, "auUse"], ["xmlns", "http://www.w3.org/2000/svg"], [1, "au-slider-tick-outer"], [1, "au-slider-tick-inner", "au-slider-tick-selected"]], template: function SliderDefaultTickSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultTickSlotComponent_ng_template_0_Template, 5, 12, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SliderTickDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultTickSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SliderTickDirective],
                template: \`
		<ng-template auSliderTick #tick let-state="state" let-directives="directives" let-tick="tick">
			@if (tick.displayLabel) {
				<span [auUse]="[directives.tickLabelDirective, {tick}]">
					{{ tick.value }}
				</span>
			}
			<span [auUse]="[directives.tickDirective, {tick}]">
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle class="au-slider-tick-outer" [class.au-slider-tick-disabled]="state.disabled()" [class.au-slider-tick-selected]="tick.selected" />
					@if (tick.selected) {
						<circle class="au-slider-tick-inner au-slider-tick-selected" />
					}
				</svg>
			</span>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultTickSlotComponent, { className: "SliderDefaultTickSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 136 }); })();
/**
 * A constant representing the default slot tick for the slider component.
 */
const sliderDefaultSlotTick = new ComponentTemplate(SliderDefaultTickSlotComponent, 'tick');
/**
 * Directive that provides structure for the slider component.
 *
 * This directive uses a \`TemplateRef\` to handle the context of the slider slot.
 */
class SliderStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SliderStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderStructureDirective, selectors: [["ng-template", "auSliderStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSliderStructure]' }]
    }], null, null); })();
class SliderDefaultStructureSlotComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function SliderDefaultStructureSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderDefaultStructureSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderDefaultStructureSlotComponent, selectors: [["ng-component"]], viewQuery: function SliderDefaultStructureSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c5$4, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auSliderStructure", ""], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SliderDefaultStructureSlotComponent_ng_template_0_Template, 9, 3, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, SliderStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDefaultStructureSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, SliderStructureDirective, UseDirective],
                template: \`
		<ng-template auSliderStructure #structure let-state="state" let-directives="directives" let-api="api">
			@for (option of state.progressDisplayOptions(); track option.id) {
				<div [auUse]="[directives.progressDisplayDirective, {option}]"></div>
			}
			<div [auUse]="directives.clickableAreaDirective"></div>
			@if (state.showMinMaxLabels()) {
				<div [auUse]="directives.minLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.min()}" />
				</div>
				<div [auUse]="directives.maxLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.max()}" />
				</div>
			}
			@if (state.showValueLabels() && state.combinedLabelDisplay()) {
				<div [auUse]="directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl()) {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}" /> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}" />
					} @else {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}" /> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}" />
					}
				</div>
			}
			@for (tick of state.ticks(); track tick.position) {
				<ng-template [auSlot]="state.tick()" [auSlotProps]="{state, api, directives, tick}" />
			}
			@for (item of state.sortedHandles(); track item.id; let i = $index) {
				<ng-template [auSlot]="state.handle()" [auSlotProps]="{state, api, directives, item}" />
				@if (state.showValueLabels() && !state.combinedLabelDisplay()) {
					<div [auUse]="[directives.handleLabelDisplayDirective, {index: i}]">
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.values()[i]}" />
					</div>
				}
			}
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderDefaultStructureSlotComponent, { className: "SliderDefaultStructureSlotComponent", filePath: "components/slider/slider.component.ts", lineNumber: 200 }); })();
/**
 * Represents the default slot structure for the slider component.
 */
const sliderDefaultSlotStructure = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');
/**
 * SliderComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable slider widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
class SliderComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createSlider, {
            defaultConfig: {
                structure: sliderDefaultSlotStructure,
                handle: sliderDefaultSlotHandle,
                tick: sliderDefaultSlotTick,
            },
            events: {
                onValuesChange: (event) => {
                    this.onChange(event);
                    this.onTouched();
                    this.valuesChange.emit(event);
                },
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.containerDirective);
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                handle: this.slotHandleFromContent()?.templateRef,
                label: this.slotLabelFromContent()?.templateRef,
                tick: this.slotTickFromContent()?.templateRef,
            }),
        }));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * Minimum value that can be assigned to the slider
         *
         * @defaultValue \`0\`
         */
        this.min = input(undefined, ...(ngDevMode ? [{ debugName: "min", alias: 'auMin', transform: auNumberAttribute }] : [{ alias: 'auMin', transform: auNumberAttribute }]));
        /**
         * Maximum value that can be assigned to the slider
         *
         * @defaultValue \`100\`
         */
        this.max = input(undefined, ...(ngDevMode ? [{ debugName: "max", alias: 'auMax', transform: auNumberAttribute }] : [{ alias: 'auMax', transform: auNumberAttribute }]));
        /**
         * Minimum distance between two values.
         * When set to 0, no minimum distance constraint is applied.
         *
         * @defaultValue 0
         */
        this.minRange = input(undefined, ...(ngDevMode ? [{ debugName: "minRange", alias: 'auMinRange', transform: auNumberAttribute }] : [{ alias: 'auMinRange', transform: auNumberAttribute }]));
        /**
         * Maximum distance between two values
         * When set to 0, no maximum distance constraint is applied.
         *
         * @defaultValue 0
         */
        this.maxRange = input(undefined, ...(ngDevMode ? [{ debugName: "maxRange", alias: 'auMaxRange', transform: auNumberAttribute }] : [{ alias: 'auMaxRange', transform: auNumberAttribute }]));
        /**
         * When true, if moving a value would break the minRange or maxRange constraint,
         * it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.
         *
         * @defaultValue false
         */
        this.pushRange = input(undefined, ...(ngDevMode ? [{ debugName: "pushRange", alias: 'auPushRange', transform: auBooleanAttribute }] : [{ alias: 'auPushRange', transform: auBooleanAttribute }]));
        /**
         * Unit value between slider steps
         *
         * @defaultValue \`1\`
         */
        this.stepSize = input(undefined, ...(ngDevMode ? [{ debugName: "stepSize", alias: 'auStepSize', transform: auNumberAttribute }] : [{ alias: 'auStepSize', transform: auNumberAttribute }]));
        /**
         * Current slider values
         *
         * @defaultValue \`[0]\`
         */
        this.values = input(undefined, ...(ngDevMode ? [{ debugName: "values", alias: 'auValues' }] : [{ alias: 'auValues' }]));
        /**
         * It \`true\` slider display is inversed
         *
         * @defaultValue \`false\`
         */
        this.rtl = input(undefined, ...(ngDevMode ? [{ debugName: "rtl", alias: 'auRtl', transform: auBooleanAttribute }] : [{ alias: 'auRtl', transform: auBooleanAttribute }]));
        /**
         * If \`true\` the value labels are displayed on the slider
         *
         * @defaultValue \`true\`
         */
        this.showValueLabels = input(undefined, ...(ngDevMode ? [{ debugName: "showValueLabels", alias: 'auShowValueLabels', transform: auBooleanAttribute }] : [{ alias: 'auShowValueLabels', transform: auBooleanAttribute }]));
        /**
         * If \`true\` the min and max labels are displayed on the slider
         *
         * @defaultValue \`true\`
         */
        this.showMinMaxLabels = input(undefined, ...(ngDevMode ? [{ debugName: "showMinMaxLabels", alias: 'auShowMinMaxLabels', transform: auBooleanAttribute }] : [{ alias: 'auShowMinMaxLabels', transform: auBooleanAttribute }]));
        /**
         * Return the value for the 'aria-label' attribute for the handle
         * @param sortedIndex - index of the handle in the sorted list
         *
         * @defaultValue
         * \`\`\`ts
         * () => 'Value'
         * \`\`\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * Return the value for the 'aria-labelledBy' attribute for the handle
         * @param sortedIndex - index of the handle in the sorted list
         *
         * @defaultValue
         * \`\`\`ts
         * () => ''
         * \`\`\`
         */
        this.ariaLabelledBy = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabelledBy", alias: 'auAriaLabelledBy' }] : [{ alias: 'auAriaLabelledBy' }]));
        /**
         * Return the value for the 'aria-valuetext' attribute for the handle
         * @param value - value of the handle
         * @param sortedIndex - index of the handle in the sorted list
         *
         * @defaultValue
         * \`\`\`ts
         * (value: number) => ''
         * \`\`\`
         */
        this.ariaValueText = input(undefined, ...(ngDevMode ? [{ debugName: "ariaValueText", alias: 'auAriaValueText' }] : [{ alias: 'auAriaValueText' }]));
        /**
         * If \`true\` slider value cannot be changed but the slider is still focusable
         *
         * @defaultValue \`false\`
         */
        this.readonly = input(undefined, ...(ngDevMode ? [{ debugName: "readonly", alias: 'auReadonly', transform: auBooleanAttribute }] : [{ alias: 'auReadonly', transform: auBooleanAttribute }]));
        /**
         * If \`true\` slider value cannot be changed and the slider cannot be focused
         *
         * @defaultValue \`false\`
         */
        this.disabled = input(undefined, ...(ngDevMode ? [{ debugName: "disabled", alias: 'auDisabled', transform: auBooleanAttribute }] : [{ alias: 'auDisabled', transform: auBooleanAttribute }]));
        /**
         * If \`true\` is vertically positioned otherwise it is horizontal
         *
         * @defaultValue \`false\`
         */
        this.vertical = input(undefined, ...(ngDevMode ? [{ debugName: "vertical", alias: 'auVertical', transform: auBooleanAttribute }] : [{ alias: 'auVertical', transform: auBooleanAttribute }]));
        /**
         * If \`true\` the ticks are displayed on the slider
         *
         * @defaultValue \`false\`
         */
        this.showTicks = input(undefined, ...(ngDevMode ? [{ debugName: "showTicks", alias: 'auShowTicks', transform: auBooleanAttribute }] : [{ alias: 'auShowTicks', transform: auBooleanAttribute }]));
        /**
         * Unit value between the ticks
         * If value is set to \`0\` the {@link stepSize} is used to space the ticks
         *
         * @defaultValue \`0\`
         */
        this.tickInterval = input(undefined, ...(ngDevMode ? [{ debugName: "tickInterval", alias: 'auTickInterval', transform: auNumberAttribute }] : [{ alias: 'auTickInterval', transform: auNumberAttribute }]));
        /**
         * If \`true\` the tick values are displayed on the slider
         *
         * @defaultValue \`true\`
         */
        this.showTickValues = input(undefined, ...(ngDevMode ? [{ debugName: "showTickValues", alias: 'auShowTickValues', transform: auBooleanAttribute }] : [{ alias: 'auShowTickValues', transform: auBooleanAttribute }]));
        /**
         * An event emitted when slider values are changed
         *
         * Event payload equals to the updated slider values
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.valuesChange = output({ alias: 'auValuesChange' });
        /**
         * Slot to change the default labels of the slider
         *
         * @defaultValue
         * \`\`\`ts
         * ({value}: SliderSlotLabelContext) => '' + value
         * \`\`\`
         */
        this.label = input(undefined, ...(ngDevMode ? [{ debugName: "label", alias: 'auLabel' }] : [{ alias: 'auLabel' }]));
        this.slotLabelFromContent = contentChild(SliderLabelDirective, ...(ngDevMode ? [{ debugName: "slotLabelFromContent" }] : []));
        /**
         * Slot to change the default display of the slider
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(SliderStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Slot to change the handlers
         */
        this.handle = input(undefined, ...(ngDevMode ? [{ debugName: "handle", alias: 'auHandle' }] : [{ alias: 'auHandle' }]));
        this.slotHandleFromContent = contentChild(SliderHandleDirective, ...(ngDevMode ? [{ debugName: "slotHandleFromContent" }] : []));
        /**
         * Slot to change the ticks
         */
        this.tick = input(undefined, ...(ngDevMode ? [{ debugName: "tick", alias: 'auTick' }] : [{ alias: 'auTick' }]));
        this.slotTickFromContent = contentChild(SliderTickDirective, ...(ngDevMode ? [{ debugName: "slotTickFromContent" }] : []));
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
            this['_widget'].patch({
                values: value,
            });
        }
        else {
            this['_widget'].patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this['_widget'].patch({
            disabled: isDisabled,
        });
    }
    handleBlur() {
        this.onTouched();
    }
    static { this.ɵfac = function SliderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["", "auSlider", ""]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotLabelFromContent, SliderLabelDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, SliderStructureDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotHandleFromContent, SliderHandleDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotTickFromContent, SliderTickDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(4);
        } }, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function SliderComponent_blur_HostBindingHandler() { return ctx.handleBlur(); });
        } }, inputs: { className: [1, "auClassName", "className"], min: [1, "auMin", "min"], max: [1, "auMax", "max"], minRange: [1, "auMinRange", "minRange"], maxRange: [1, "auMaxRange", "maxRange"], pushRange: [1, "auPushRange", "pushRange"], stepSize: [1, "auStepSize", "stepSize"], values: [1, "auValues", "values"], rtl: [1, "auRtl", "rtl"], showValueLabels: [1, "auShowValueLabels", "showValueLabels"], showMinMaxLabels: [1, "auShowMinMaxLabels", "showMinMaxLabels"], ariaLabel: [1, "auAriaLabel", "ariaLabel"], ariaLabelledBy: [1, "auAriaLabelledBy", "ariaLabelledBy"], ariaValueText: [1, "auAriaValueText", "ariaValueText"], readonly: [1, "auReadonly", "readonly"], disabled: [1, "auDisabled", "disabled"], vertical: [1, "auVertical", "vertical"], showTicks: [1, "auShowTicks", "showTicks"], tickInterval: [1, "auTickInterval", "tickInterval"], showTickValues: [1, "auShowTickValues", "showTickValues"], label: [1, "auLabel", "label"], structure: [1, "auStructure", "structure"], handle: [1, "auHandle", "handle"], tick: [1, "auTick", "tick"] }, outputs: { valuesChange: "auValuesChange" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }]), i0.ɵɵInheritDefinitionFeature], attrs: _c11, decls: 2, vars: 7, consts: [[3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SliderComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("auUse", ctx.directives.sliderDirective);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(3, _c12, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: '[auSlider]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                imports: [SlotDirective, UseDirective],
                host: {
                    '(blur)': 'handleBlur()',
                },
                template: \`
		<div [auUse]="directives.sliderDirective">
			<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
		</div>
	\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "components/slider/slider.component.ts", lineNumber: 229 }); })();

/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
const export_getProgressbarDefaultConfig = getProgressbarDefaultConfig;
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
const export_createProgressbar = createProgressbar;

const _c0$5 = ["structure"];
const _c1$5 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const api_r2 = ctx.api;
    const directives_r3 = ctx.directives;
    i0.ɵɵstyleProp("height", state_r1.height());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r1.percentage(), "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r1.striped())("progress-bar-animated", state_r1.animated());
    i0.ɵɵproperty("ngClass", state_r1.type() ? "text-bg-" + state_r1.type() : undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.children())("auSlotProps", i0.ɵɵpureFunction3(11, _c1$5, state_r1, api_r2, directives_r3));
} }
const _c2$4 = ["content"];
const _c3$4 = ["auProgressbar", ""];
const _c4$4 = ["*"];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_2_Template(rf, ctx) { }
/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
class ProgressbarBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarBodyDirective, selectors: [["ng-template", "auProgressbarBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarBody]' }]
    }], null, null); })();
/**
 * Directive to define the structure of a progress bar.
 *
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
class ProgressbarStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]' }]
    }], null, null); })();
class ProgressbarDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$5, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auProgressbarStructure", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 15, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
                template: \`
		<ng-template auProgressbarStructure #structure let-state="state" let-api="api" let-directives="directives">
			<div class="progress" [style.height]="state.height()">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped()"
					[class.progress-bar-animated]="state.animated()"
					[ngClass]="state.type() ? 'text-bg-' + state.type() : undefined"
					[style.width.%]="state.percentage()"
				>
					<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 62 }); })();
/**
 * Represents the default slot structure for the progress bar component.
 */
const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');
/**
 * ProgressbarComponent is a UI component that extends the BaseWidgetDirective
 * to create a customizable progress bar widget. It provides various inputs
 * to configure the appearance and behavior of the progress bar.
 *
 */
class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createProgressbar, {
            defaultConfig: {
                structure: progressbarDefaultSlotStructure,
            },
            afterInit: (widget) => useDirectiveForHost(widget.directives.ariaDirective),
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                children: this.slotDefaultFromContent()?.templateRef,
            }),
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * The aria label.
         *
         * @defaultValue \`'Progressbar'\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * The minimum value.
         *
         * @defaultValue \`0\`
         */
        this.min = input(undefined, ...(ngDevMode ? [{ debugName: "min", alias: 'auMin', transform: auNumberAttribute }] : [{ alias: 'auMin', transform: auNumberAttribute }]));
        /**
         * The maximum value.
         *
         * @defaultValue \`100\`
         */
        this.max = input(undefined, ...(ngDevMode ? [{ debugName: "max", alias: 'auMax', transform: auNumberAttribute }] : [{ alias: 'auMax', transform: auNumberAttribute }]));
        /**
         * The current value.
         *
         * @defaultValue \`0\`
         */
        this.value = input(undefined, ...(ngDevMode ? [{ debugName: "value", alias: 'auValue', transform: auNumberAttribute }] : [{ alias: 'auValue', transform: auNumberAttribute }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * Label of the progress.
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotDefaultFromContent = contentChild(ProgressbarBodyDirective, ...(ngDevMode ? [{ debugName: "slotDefaultFromContent" }] : []));
        /**
         * Global template for the Progressbar.
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(ProgressbarStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Height of the progressbar, can be any valid css height value.
         *
         * @defaultValue \`''\`
         */
        this.height = input(undefined, ...(ngDevMode ? [{ debugName: "height", alias: 'auHeight' }] : [{ alias: 'auHeight' }]));
        /**
         * If \`true\`, animates a striped progressbar.
         * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
         *
         * @defaultValue \`false\`
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, shows a striped progressbar.
         *
         * @defaultValue \`false\`
         */
        this.striped = input(undefined, ...(ngDevMode ? [{ debugName: "striped", alias: 'auStriped', transform: auBooleanAttribute }] : [{ alias: 'auStriped', transform: auBooleanAttribute }]));
        /**
         * Return the value for the 'aria-valuetext' attribute.
         * @param value - current value
         * @param minimum - minimum value
         * @param maximum - maximum value
         *
         * @defaultValue
         * \`\`\`ts
         * () => undefined
         * \`\`\`
         */
        this.ariaValueTextFn = input(undefined, ...(ngDevMode ? [{ debugName: "ariaValueTextFn", alias: 'auAriaValueTextFn' }] : [{ alias: 'auAriaValueTextFn' }]));
        /**
         * Type of the progressbar, following bootstrap types.
         */
        this.type = input(undefined, ...(ngDevMode ? [{ debugName: "type", alias: 'auType' }] : [{ alias: 'auType' }]));
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    static { this.ɵfac = function ProgressbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotDefaultFromContent, ProgressbarBodyDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, viewQuery: function ProgressbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c2$4, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, hostVars: 2, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.state.className());
        } }, inputs: { ariaLabel: [1, "auAriaLabel", "ariaLabel"], min: [1, "auMin", "min"], max: [1, "auMax", "max"], value: [1, "auValue", "value"], className: [1, "auClassName", "className"], children: [1, "auChildren", "children"], structure: [1, "auStructure", "structure"], height: [1, "auHeight", "height"], animated: [1, "auAnimated", "animated"], striped: [1, "auStriped", "striped"], ariaValueTextFn: [1, "auAriaValueTextFn", "ariaValueTextFn"], type: [1, "auType", "type"] }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c3$4, ngContentSelectors: _c4$4, decls: 3, vars: 6, consts: [["content", ""], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ProgressbarComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c1$5, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': 'state.className()',
                },
                template: \`
		<ng-template #content><ng-content /></ng-template>
		<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
	\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 89 }); })();

/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
const export_getToastDefaultConfig = getToastDefaultConfig;
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
const export_createToast = createToast;
/**
 * A mapping of toast position keys to their corresponding CSS class strings of bootstrap.
 * These classes define the positioning of toast notifications on the screen.
 *
 * The keys represent various positions on the screen, such as top-left, top-center,
 * middle-right, etc., and the values are the CSS classes of bootstrap that apply the respective
 * positioning styles.
 *
 * Example usage:
 * \`\`\`typescript
 * const positionClass = toastPositions.topLeft; // "top-0 start-0"
 * \`\`\`
 */
const export_toastPositions = toastPositions;
const export_defaultToasterProps = defaultToasterProps;

const _c0$4 = ["structure"];
const _c1$4 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 6);
} if (rf & 2) {
    const directives_r1 = i0.ɵɵnextContext(2).directives;
    i0.ɵɵproperty("auUse", directives_r1.closeButtonDirective);
} }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵconditionalCreate(2, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 1, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const state_r3 = ctx_r1.state;
    const api_r4 = ctx_r1.api;
    const directives_r1 = ctx_r1.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.header())("auSlotProps", i0.ɵɵpureFunction3(3, _c1$4, state_r3, api_r4, directives_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible() ? 2 : -1);
} }
function ToastDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 5);
} if (rf & 2) {
    const directives_r1 = i0.ɵɵnextContext().directives;
    i0.ɵɵproperty("auUse", directives_r1.closeButtonDirective);
} }
function ToastDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template, 3, 7, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ToastDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, ToastDefaultSlotsComponent_ng_template_0_Conditional_3_Template, 1, 1, "button", 5);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const api_r4 = ctx.api;
    const directives_r1 = ctx.directives;
    i0.ɵɵconditional(state_r3.header() ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r3.children())("auSlotProps", i0.ɵɵpureFunction3(4, _c1$4, state_r3, api_r4, directives_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible() && !state_r3.header() ? 3 : -1);
} }
const _c2$3 = ["content"];
const _c3$3 = ["auToast", ""];
const _c4$3 = ["*"];
const _c5$3 = (a0, a1, a2) => [a0, a1, a2];
function ToastComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ToastComponent_Conditional_2_ng_template_1_Template(rf, ctx) { }
function ToastComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ToastComponent_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("d-flex", !ctx_r0.state.header())("toast-dismissible", ctx_r0.state.dismissible());
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(7, _c5$3, ctx_r0.directives.autoHideDirective, ctx_r0.directives.transitionDirective, ctx_r0.directives.bodyDirective));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(11, _c1$4, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
/**
 * Directive to represent the body of a toast notification.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
class ToastBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastBodyDirective, selectors: [["ng-template", "auToastBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastBody]' }]
    }], null, null); })();
/**
 * Directive to define the structure of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
class ToastStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastStructureDirective, selectors: [["ng-template", "auToastStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastStructure]' }]
    }], null, null); })();
/**
 * Directive representing the header of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
class ToastHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastHeaderDirective, selectors: [["ng-template", "auToastHeader", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastHeader]' }]
    }], null, null); })();
class ToastDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function ToastDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ToastDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$4, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auToastStructure", ""], [1, "toast-header"], [1, "toast-body"], [3, "auSlot", "auSlotProps"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "auUse"], [1, "btn-close", "me-0", "ms-auto", 3, "auUse"]], template: function ToastDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ToastDefaultSlotsComponent_ng_template_0_Template, 4, 8, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ToastStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ToastStructureDirective, UseDirective],
                template: \` <ng-template auToastStructure #structure let-state="state" let-api="api" let-directives="directives">
		@if (state.header()) {
			<div class="toast-header">
				<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
				@if (state.dismissible()) {
					<button class="btn-close me-0 ms-auto" [auUse]="directives.closeButtonDirective"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
		</div>
		@if (state.dismissible() && !state.header()) {
			<button class="btn-close btn-close-white me-2 m-auto" [auUse]="directives.closeButtonDirective"></button>
		}
	</ng-template>\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 72 }); })();
/**
 * Represents the default slot structure for the toast component.
 */
const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');
/**
 * The \`ToastComponent\` is a UI component that displays a toast notification.
 * It extends the \`BaseWidgetDirective\` and provides various configurable properties
 * and events to control the behavior and appearance of the toast.
 */
class ToastComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createToast, {
            defaultConfig: {
                structure: toastDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            slotTemplates: () => ({
                children: this.slotDefaultFromContent()?.templateRef,
                structure: this.slotStructureFromContent()?.templateRef,
                header: this.slotHeaderFromContent()?.templateRef,
            }),
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * If \`true\`, alert can be dismissed by the user.
         * The close button (×) will be displayed and you can be notified of the event with the (close) output.
         *
         * @defaultValue \`true\`
         */
        this.dismissible = input(undefined, ...(ngDevMode ? [{ debugName: "dismissible", alias: 'auDismissible', transform: auBooleanAttribute }] : [{ alias: 'auDismissible', transform: auBooleanAttribute }]));
        /**
         * The transition function will be executed when the alert is displayed or hidden.
         *
         * Depending on the value of \`animatedOnInit\`, the animation can be optionally skipped during the showing process.
         *
         * @defaultValue \`fadeTransition\`
         */
        this.transition = input(undefined, ...(ngDevMode ? [{ debugName: "transition", alias: 'auTransition' }] : [{ alias: 'auTransition' }]));
        /**
         * If \`true\` the alert is visible to the user
         *
         * @defaultValue \`true\`
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, alert opening will be animated.
         *
         * Animation is triggered  when the \`.open()\` function is called
         * or the visible prop is changed
         *
         * @defaultValue \`false\`
         */
        this.animatedOnInit = input(undefined, ...(ngDevMode ? [{ debugName: "animatedOnInit", alias: 'auAnimatedOnInit', transform: auBooleanAttribute }] : [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, alert closing will be animated.
         *
         * Animation is triggered  when clicked on the close button (×),
         * via the \`.close()\` function or the visible prop is changed
         *
         * @defaultValue \`true\`
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * If \`true\` automatically hides the toast after the delay.
         *
         * @defaultValue \`true\`
         */
        this.autoHide = input(undefined, ...(ngDevMode ? [{ debugName: "autoHide", alias: 'auAutoHide', transform: auBooleanAttribute }] : [{ alias: 'auAutoHide', transform: auBooleanAttribute }]));
        /**
         * Delay in milliseconds before hiding the toast.
         *
         * @defaultValue \`5000\`
         */
        this.delay = input(undefined, ...(ngDevMode ? [{ debugName: "delay", alias: 'auDelay', transform: auNumberAttribute }] : [{ alias: 'auDelay', transform: auNumberAttribute }]));
        /**
         * Accessibility close button label
         *
         * @defaultValue \`'Close'\`
         */
        this.ariaCloseButtonLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaCloseButtonLabel", alias: 'auAriaCloseButtonLabel' }] : [{ alias: 'auAriaCloseButtonLabel' }]));
        /**
         * Template for the toast content
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotDefaultFromContent = contentChild(ToastBodyDirective, ...(ngDevMode ? [{ debugName: "slotDefaultFromContent" }] : []));
        /**
         * Global template for the toast component
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(ToastStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Header template for the toast component
         */
        this.header = input(undefined, ...(ngDevMode ? [{ debugName: "header", alias: 'auHeader' }] : [{ alias: 'auHeader' }]));
        this.slotHeaderFromContent = contentChild(ToastHeaderDirective, ...(ngDevMode ? [{ debugName: "slotHeaderFromContent" }] : []));
        /**
         * Callback called when the alert visibility changed.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.visibleChange = output({ alias: 'auVisibleChange' });
        /**
         * Callback called when the alert is hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * Callback called when the alert is shown.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = output({ alias: 'auShown' });
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    static { this.ɵfac = function ToastComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["", "auToast", ""]], contentQueries: function ToastComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotDefaultFromContent, ToastBodyDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, ToastStructureDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotHeaderFromContent, ToastHeaderDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(3);
        } }, viewQuery: function ToastComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c2$3, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, inputs: { dismissible: [1, "auDismissible", "dismissible"], transition: [1, "auTransition", "transition"], visible: [1, "auVisible", "visible"], animatedOnInit: [1, "auAnimatedOnInit", "animatedOnInit"], animated: [1, "auAnimated", "animated"], autoHide: [1, "auAutoHide", "autoHide"], delay: [1, "auDelay", "delay"], ariaCloseButtonLabel: [1, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], children: [1, "auChildren", "children"], structure: [1, "auStructure", "structure"], header: [1, "auHeader", "header"], className: [1, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c3$3, ngContentSelectors: _c4$3, decls: 3, vars: 1, consts: [["content", ""], [3, "d-flex", "toast-dismissible", "auUseMulti"], [3, "auUseMulti"], [3, "auSlot", "auSlotProps"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵconditionalCreate(2, ToastComponent_Conditional_2_Template, 2, 15, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.hidden() ? 2 : -1);
        } }, dependencies: [SlotDirective, UseMultiDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: '[auToast]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseMultiDirective],
                template: \` <ng-template #content>
			<ng-content />
		</ng-template>
		@if (!state.hidden()) {
			<div
				[class.d-flex]="!state.header()"
				[class.toast-dismissible]="state.dismissible()"
				[auUseMulti]="[directives.autoHideDirective, directives.transitionDirective, directives.bodyDirective]"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
			</div>
		}\`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 103 }); })();

/**
 * Directive to control the collapse behavior of an element.
 */
class CollapseDirective extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(createCollapse, {
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.collapseDirective);
            },
        }));
        /**
         * If \`true\`, collapse opening will be animated at init time.
         *
         * @defaultValue \`false\`
         */
        this.animatedOnInit = input(undefined, ...(ngDevMode ? [{ debugName: "animatedOnInit", alias: 'auAnimatedOnInit', transform: auBooleanAttribute }] : [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, collapse closing and opening will be animated.
         *
         * @defaultValue \`true\`
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * If \`true\`, collapse will be done horizontally.
         *
         * @defaultValue \`false\`
         */
        this.horizontal = input(undefined, ...(ngDevMode ? [{ debugName: "horizontal", alias: 'auHorizontal', transform: auBooleanAttribute }] : [{ alias: 'auHorizontal', transform: auBooleanAttribute }]));
        /**
         * If \`true\` the collapse is visible to the user
         *
         * @defaultValue \`true\`
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * id of the collapse
         *
         * @defaultValue \`''\`
         */
        this.id = input(undefined, ...(ngDevMode ? [{ debugName: "id", alias: 'auId' }] : [{ alias: 'auId' }]));
        /**
         * Callback called when the collapse visibility changed.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         * @param visible - The new visibility state of the collapse.
         */
        this.visibleChange = output({ alias: 'auVisibleChange' });
        /**
         * Callback called when the collapse is hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * Callback called when the collapse is shown.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = output({ alias: 'auShown' });
    }
    static { this.ɵfac = function CollapseDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CollapseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "auCollapse", ""]], inputs: { animatedOnInit: [1, "auAnimatedOnInit", "animatedOnInit"], animated: [1, "auAnimated", "animated"], className: [1, "auClassName", "className"], horizontal: [1, "auHorizontal", "horizontal"], visible: [1, "auVisible", "visible"], id: [1, "auId", "id"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, exportAs: ["auCollapse"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[auCollapse]',
                exportAs: 'auCollapse',
            }]
    }], () => [], null); })();
class CollapseTriggerDirective {
    constructor() {
        this.auCollapseTrigger = input.required(...(ngDevMode ? [{ debugName: "auCollapseTrigger" }] : []));
        this.injector = inject(Injector);
    }
    async ngOnInit() {
        await this.auCollapseTrigger()['_widget'].initialized;
        runInInjectionContext(this.injector, () => {
            useDirectiveForHost(this.auCollapseTrigger().directives.triggerDirective);
        });
    }
    static { this.ɵfac = function CollapseTriggerDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CollapseTriggerDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseTriggerDirective, selectors: [["", "auCollapseTrigger", ""]], inputs: { auCollapseTrigger: [1, "auCollapseTrigger"] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[auCollapseTrigger]',
            }]
    }], null, null); })();

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
const export_getCollapseDefaultConfig = getCollapseDefaultConfig;
/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
const export_createCollapse = createCollapse;

/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
const export_getTreeDefaultConfig = getTreeDefaultConfig;
/**
 * Create a Tree with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
const export_createTree = createTree;

const _c0$3 = ["structure"];
const _c1$3 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, item: a3 });
function TreeDefaultStructureSlotComponent_ng_template_0_For_2_ng_template_0_Template(rf, ctx) { }
function TreeDefaultStructureSlotComponent_ng_template_0_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeDefaultStructureSlotComponent_ng_template_0_For_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    const state_r3 = ctx_r1.state;
    const directives_r4 = ctx_r1.directives;
    const api_r5 = ctx_r1.api;
    i0.ɵɵproperty("auSlot", state_r3.item())("auSlotProps", i0.ɵɵpureFunction4(2, _c1$3, state_r3, api_r5, directives_r4, node_r1));
} }
function TreeDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, TreeDefaultStructureSlotComponent_ng_template_0_For_2_Template, 1, 7, null, 3, i0.ɵɵcomponentInstance().trackNode, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = ctx.state;
    const directives_r4 = ctx.directives;
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("au-tree ", state_r3.className()));
    i0.ɵɵproperty("auUse", directives_r4.navigationDirective);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r3.normalizedNodes());
} }
const _c2$2 = ["toggle"];
const _c3$2 = a0 => ({ item: a0 });
const _c4$2 = (a0, a1) => [a0, a1];
function TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 4);
    i0.ɵɵelement(2, "path", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const directives_r2 = ctx_r0.directives;
    const item_r3 = ctx_r0.item;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c4$2, directives_r2.itemToggleDirective, i0.ɵɵpureFunction1(1, _c3$2, item_r3)));
} }
function TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} }
function TreeDefaultItemToggleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_0_Template, 3, 6, "button", 2)(1, TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_1_Template, 1, 0, "span", 3);
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵconditional(item_r3.children.length > 0 ? 0 : 1);
} }
const _c5$2 = ["treeItemContent"];
function TreeDefaultItemContentSlotComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function TreeDefaultItemContentSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtemplate(1, TreeDefaultItemContentSlotComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const directives_r2 = ctx.directives;
    const item_r3 = ctx.item;
    const api_r4 = ctx.api;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.itemToggle())("auSlotProps", i0.ɵɵpureFunction4(3, _c1$3, state_r1, api_r4, directives_r2, item_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
const _c6 = ["treeItem"];
function TreeDefaultItemSlotComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_ng_template_0_Template(rf, ctx) { }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const state_r3 = ctx_r1.state;
    const directives_r4 = ctx_r1.directives;
    const api_r5 = ctx_r1.api;
    i0.ɵɵproperty("auSlot", state_r3.item())("auSlotProps", i0.ɵɵpureFunction4(2, _c1$3, state_r3, api_r5, directives_r4, child_r1));
} }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵrepeaterCreate(1, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_Template, 1, 7, null, 3, i0.ɵɵcomponentInstance().trackNode, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().item;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r6.children);
} }
function TreeDefaultItemSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵtemplate(1, TreeDefaultItemSlotComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵconditionalCreate(2, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_Template, 3, 0, "ul", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = ctx.state;
    const directives_r4 = ctx.directives;
    const item_r6 = ctx.item;
    const api_r5 = ctx.api;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4$2, directives_r4.itemAttributesDirective, i0.ɵɵpureFunction1(4, _c3$2, item_r6)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.itemContent())("auSlotProps", i0.ɵɵpureFunction4(9, _c1$3, state_r3, api_r5, directives_r4, item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.expandedMap().get(item_r6) ? 2 : -1);
} }
const _c7 = ["auTree", ""];
const _c8 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function TreeComponent_ng_template_0_Template(rf, ctx) { }
/**
 * Directive to provide a template reference for tree structure.
 *
 * This directive uses a template reference to render the {@link TreeContext}.
 */
class TreeStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeStructureDirective, selectors: [["ng-template", "auTreeStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeStructure]' }]
    }], null, null); })();
class TreeDefaultStructureSlotComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    trackNode(index, node) {
        return node.label + node.level + index;
    }
    static { this.ɵfac = function TreeDefaultStructureSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultStructureSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultStructureSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultStructureSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$3, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auTreeStructure", ""], ["role", "tree", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function TreeDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultStructureSlotComponent_ng_template_0_Template, 3, 4, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, TreeStructureDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultStructureSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, TreeStructureDirective, SlotDirective],
                template: \`
		<ng-template auTreeStructure #structure let-state="state" let-directives="directives" let-api="api">
			<ul role="tree" class="au-tree {{ state.className() }}" [auUse]="directives.navigationDirective">
				@for (node of state.normalizedNodes(); track trackNode($index, node)) {
					<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: node}" />
				}
			</ul>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultStructureSlotComponent, { className: "TreeDefaultStructureSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 33 }); })();
/**
 * A constant representing the default slot for tree structure.
 */
const treeDefaultSlotStructure = new ComponentTemplate(TreeDefaultStructureSlotComponent, 'structure');
/**
 * Directive to provide a template reference for tree item toggle.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
class TreeItemToggleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemToggleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemToggleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemToggleDirective, selectors: [["ng-template", "auTreeItemToggle", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemToggleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItemToggle]' }]
    }], null, null); })();
class TreeDefaultItemToggleSlotComponent {
    constructor() {
        this.toggle = viewChild.required('toggle');
    }
    static { this.ɵfac = function TreeDefaultItemToggleSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemToggleSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemToggleSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemToggleSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.toggle, _c2$2, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["toggle", ""], ["auTreeItemToggle", ""], [3, "auUse"], [1, "au-tree-expand-icon-placeholder"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 10 10", 1, "au-tree-expand-icon-svg"], ["d", "M3 1 L7 5 L3 9", "stroke-width", "1", "fill", "none", 1, "au-tree-expand-icon-svg-fill"]], template: function TreeDefaultItemToggleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemToggleSlotComponent_ng_template_0_Template, 2, 1, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, TreeItemToggleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemToggleSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, TreeItemToggleDirective],
                template: \`
		<ng-template auTreeItemToggle #toggle let-directives="directives" let-item="item">
			@if (item.children.length > 0) {
				<button [auUse]="[directives.itemToggleDirective, {item}]">
					<svg class="au-tree-expand-icon-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10">
						<path d="M3 1 L7 5 L3 9" class="au-tree-expand-icon-svg-fill" stroke-width="1" fill="none" />
					</svg>
				</button>
			} @else {
				<span class="au-tree-expand-icon-placeholder"></span>
			}
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemToggleSlotComponent, { className: "TreeDefaultItemToggleSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 76 }); })();
/**
 * A constant representing the default slot for tree item toggle.
 */
const treeDefaultItemToggle = new ComponentTemplate(TreeDefaultItemToggleSlotComponent, 'toggle');
/**
 * Directive to provide a template reference for tree item content.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
class TreeItemContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemContentDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemContentDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemContentDirective, selectors: [["ng-template", "auTreeItemContent", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemContentDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItemContent]' }]
    }], null, null); })();
class TreeDefaultItemContentSlotComponent {
    constructor() {
        this.treeItemContent = viewChild.required('treeItemContent');
    }
    static { this.ɵfac = function TreeDefaultItemContentSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemContentSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemContentSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemContentSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.treeItemContent, _c5$2, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["treeItemContent", ""], ["auTreeItemContent", ""], [1, "au-tree-item"], [3, "auSlot", "auSlotProps"]], template: function TreeDefaultItemContentSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemContentSlotComponent_ng_template_0_Template, 3, 8, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, TreeItemContentDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemContentSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, TreeItemContentDirective],
                template: \`
		<ng-template auTreeItemContent #treeItemContent let-state="state" let-directives="directives" let-item="item" let-api="api">
			<span class="au-tree-item">
				<ng-template [auSlot]="state.itemToggle()" [auSlotProps]="{state, api, directives, item}" />
				{{ item.label }}
			</span>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemContentSlotComponent, { className: "TreeDefaultItemContentSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 110 }); })();
/**
 * A constant representing the default slot for tree item.
 */
const treeDefaultSlotItemContent = new ComponentTemplate(TreeDefaultItemContentSlotComponent, 'treeItemContent');
/**
 * Directive to provide a template reference for tree item.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
class TreeItemDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemDirective, selectors: [["ng-template", "auTreeItem", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItem]' }]
    }], null, null); })();
class TreeDefaultItemSlotComponent {
    constructor() {
        this.treeItem = viewChild.required('treeItem');
    }
    trackNode(index, node) {
        return node.label + node.level + index;
    }
    static { this.ɵfac = function TreeDefaultItemSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.treeItem, _c6, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["treeItem", ""], ["auTreeItem", ""], [3, "auUse"], [3, "auSlot", "auSlotProps"], ["role", "group"]], template: function TreeDefaultItemSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemSlotComponent_ng_template_0_Template, 3, 14, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, TreeItemDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemSlotComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, TreeItemDirective],
                template: \`
		<ng-template auTreeItem #treeItem let-state="state" let-directives="directives" let-item="item" let-api="api">
			<li [auUse]="[directives.itemAttributesDirective, {item}]">
				<ng-template [auSlot]="state.itemContent()" [auSlotProps]="{state, api, directives, item}" />
				@if (state.expandedMap().get(item)) {
					<ul role="group">
						@for (child of item.children; track trackNode($index, child)) {
							<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: child}" />
						}
					</ul>
				}
			</li>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemSlotComponent, { className: "TreeDefaultItemSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 153 }); })();
/**
 * A constant representing the default slot for tree item.
 */
const treeDefaultSlotItem = new ComponentTemplate(TreeDefaultItemSlotComponent, 'treeItem');
/**
 * TreeComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable tree widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
class TreeComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory$1(export_createTree, {
            defaultConfig: {
                structure: treeDefaultSlotStructure,
                item: treeDefaultSlotItem,
                itemContent: treeDefaultSlotItemContent,
                itemToggle: treeDefaultItemToggle,
            },
            events: {
                onExpandToggle: (item) => this.expandToggle.emit(item),
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                item: this.slotItemFromContent()?.templateRef,
                itemContent: this.slotItemContentFromContent()?.templateRef,
                itemToggle: this.slotItemToggleFromContent()?.templateRef,
            }),
        }));
        /**
         * Optional accessibility label for the tree if there is no explicit label
         *
         * @defaultValue \`''\`
         */
        this.ariaLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabel", alias: 'auAriaLabel' }] : [{ alias: 'auAriaLabel' }]));
        /**
         * Array of the tree nodes to display
         *
         * @defaultValue \`[]\`
         */
        this.nodes = input(undefined, ...(ngDevMode ? [{ debugName: "nodes", alias: 'auNodes' }] : [{ alias: 'auNodes' }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * Retrieves expand items of the TreeItem
         *
         * @param node - HTML element that is representing the expand item
         *
         * @defaultValue
         * \`\`\`ts
         * (node: HTMLElement) => node.querySelectorAll('button')
         * \`\`\`
         */
        this.navSelector = input(undefined, ...(ngDevMode ? [{ debugName: "navSelector", alias: 'auNavSelector' }] : [{ alias: 'auNavSelector' }]));
        /**
         * Return the value for the 'aria-label' attribute of the toggle
         * @param label - tree item label
         *
         * @defaultValue
         * \`\`\`ts
         * (label: string) => \`Toggle \${label}\`
         * \`\`\`
         */
        this.ariaLabelToggleFn = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabelToggleFn", alias: 'auAriaLabelToggleFn' }] : [{ alias: 'auAriaLabelToggleFn' }]));
        /**
         * An event emitted when the user toggles the expand of the TreeItem.
         *
         * Event payload is equal to the TreeItem clicked.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.expandToggle = output({ alias: 'auExpandToggle' });
        /**
         * Slot to change the default tree item content
         */
        this.itemContent = input(undefined, ...(ngDevMode ? [{ debugName: "itemContent", alias: 'auItemContent' }] : [{ alias: 'auItemContent' }]));
        this.slotItemContentFromContent = contentChild(TreeItemContentDirective, ...(ngDevMode ? [{ debugName: "slotItemContentFromContent" }] : []));
        /**
         * Slot to change the default display of the tree
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(TreeStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Slot to change the default tree item toggle
         */
        this.itemToggle = input(undefined, ...(ngDevMode ? [{ debugName: "itemToggle", alias: 'auItemToggle' }] : [{ alias: 'auItemToggle' }]));
        this.slotItemToggleFromContent = contentChild(TreeItemToggleDirective, ...(ngDevMode ? [{ debugName: "slotItemToggleFromContent" }] : []));
        /**
         * Slot to change the default tree item
         */
        this.item = input(undefined, ...(ngDevMode ? [{ debugName: "item", alias: 'auItem' }] : [{ alias: 'auItem' }]));
        this.slotItemFromContent = contentChild(TreeItemDirective, ...(ngDevMode ? [{ debugName: "slotItemFromContent" }] : []));
    }
    static { this.ɵfac = function TreeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeComponent, selectors: [["", "auTree", ""]], contentQueries: function TreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotItemContentFromContent, TreeItemContentDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, TreeStructureDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotItemToggleFromContent, TreeItemToggleDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotItemFromContent, TreeItemDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(4);
        } }, inputs: { ariaLabel: [1, "auAriaLabel", "ariaLabel"], nodes: [1, "auNodes", "nodes"], className: [1, "auClassName", "className"], navSelector: [1, "auNavSelector", "navSelector"], ariaLabelToggleFn: [1, "auAriaLabelToggleFn", "ariaLabelToggleFn"], itemContent: [1, "auItemContent", "itemContent"], structure: [1, "auStructure", "structure"], itemToggle: [1, "auItemToggle", "itemToggle"], item: [1, "auItem", "item"] }, outputs: { expandToggle: "auExpandToggle" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c7, decls: 1, vars: 6, consts: [[3, "auSlot", "auSlotProps"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c8, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auTree]',
                imports: [SlotDirective],
                template: \` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> \`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "components/tree/tree.component.ts", lineNumber: 178 }); })();

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
const export_getCarouselDefaultConfig = getCarouselDefaultConfig;
/**
 * Create a Carousel with given config props
 *
 * @template SlideData - The type of the data for each slide.
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
const export_createCarousel = createCarousel;

const _c0$2 = ["structure"];
const _c1$2 = ["navigation"];
const _c2$1 = (a0, a1) => ({ index: a0, id: a1 });
const _c3$1 = (a0, a1) => [a0, a1];
const _c4$1 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
const _forTrack0$1 = ($index, $item) => $item.id;
function CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r0.state;
    const directives_r3 = ctx_r0.directives;
    const prevBtnClassPrefix_r4 = state_r2.direction() === "rtl" ? "carousel-control-next" : "carousel-control-prev";
    i0.ɵɵclassMap(prevBtnClassPrefix_r4);
    i0.ɵɵproperty("auUse", directives_r3.scrollPrev);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("", prevBtnClassPrefix_r4, "-icon"));
} }
function CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r0.state;
    const directives_r3 = ctx_r0.directives;
    const nextBtnClassPrefix_r5 = state_r2.direction() === "ltr" ? "carousel-control-next" : "carousel-control-prev";
    i0.ɵɵclassMap(nextBtnClassPrefix_r5);
    i0.ɵɵproperty("auUse", directives_r3.scrollNext);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("", nextBtnClassPrefix_r5, "-icon"));
} }
function CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_0_Template, 2, 6, "button", 5);
    i0.ɵɵconditionalCreate(1, CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_1_Template, 2, 6, "button", 5);
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext().state;
    i0.ɵɵconditional(state_r2.canScrollPrev() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.canScrollNext() ? 1 : -1);
} }
function CarouselDefaultSlotsComponent_ng_template_0_Conditional_1_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 7);
} if (rf & 2) {
    const slideData_r6 = ctx.$implicit;
    const ɵ$index_19_r7 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    const state_r2 = ctx_r0.state;
    const directives_r3 = ctx_r0.directives;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c3$1, directives_r3.tabIndicator, i0.ɵɵpureFunction2(2, _c2$1, ɵ$index_19_r7, slideData_r6.id)));
    i0.ɵɵattribute("class", state_r2.selectedScrollSnap() === ɵ$index_19_r7 ? "active" : undefined);
} }
function CarouselDefaultSlotsComponent_ng_template_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, CarouselDefaultSlotsComponent_ng_template_0_Conditional_1_For_2_Template, 1, 8, "button", 7, _forTrack0$1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const directives_r3 = ctx_r0.directives;
    i0.ɵɵproperty("auUse", directives_r3.tabList);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r2.slidesData());
} }
function CarouselDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, CarouselDefaultSlotsComponent_ng_template_0_Conditional_0_Template, 2, 2);
    i0.ɵɵconditionalCreate(1, CarouselDefaultSlotsComponent_ng_template_0_Conditional_1_Template, 3, 1, "div", 4);
} if (rf & 2) {
    const state_r2 = ctx.state;
    i0.ɵɵconditional(state_r2.showNavigationArrows() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.showNavigationIndicators() ? 1 : -1);
} }
function CarouselDefaultSlotsComponent_ng_template_2_ng_template_0_Template(rf, ctx) { }
function CarouselDefaultSlotsComponent_ng_template_2_For_3_ng_template_1_Template(rf, ctx) { }
function CarouselDefaultSlotsComponent_ng_template_2_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, CarouselDefaultSlotsComponent_ng_template_2_For_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slideData_r8 = ctx.$implicit;
    const ɵ$index_28_r9 = ctx.$index;
    const ctx_r9 = i0.ɵɵnextContext();
    const state_r11 = ctx_r9.state;
    const api_r12 = ctx_r9.api;
    const directives_r13 = ctx_r9.directives;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c3$1, directives_r13.slide, i0.ɵɵpureFunction2(3, _c2$1, ɵ$index_28_r9, slideData_r8.id)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r11.slide())("auSlotProps", ctx_r13.toSlideContext(slideData_r8, i0.ɵɵpureFunction3(9, _c4$1, state_r11, api_r12, directives_r13)));
} }
function CarouselDefaultSlotsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CarouselDefaultSlotsComponent_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 8);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵrepeaterCreate(2, CarouselDefaultSlotsComponent_ng_template_2_For_3_Template, 2, 13, "div", 6, _forTrack0$1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r11 = ctx.state;
    const api_r12 = ctx.api;
    const directives_r13 = ctx.directives;
    i0.ɵɵproperty("auSlot", state_r11.navigation())("auSlotProps", i0.ɵɵpureFunction3(3, _c4$1, state_r11, api_r12, directives_r13));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", directives_r13.container);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r11.slidesData());
} }
const _c5$1 = ["auCarousel", ""];
function CarouselComponent_ng_template_0_Template(rf, ctx) { }
/**
 * Directive that provides a template reference for the carousel structure using the {@link CarouselContext}.
 */
class CarouselStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function CarouselStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarouselStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselStructureDirective, selectors: [["ng-template", "auCarouselStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auCarouselStructure]' }]
    }], null, null); })();
/**
 * Directive that provides a template reference for the carousel navigation using the {@link CarouselContext}.
 */
class CarouselNavigationDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function CarouselNavigationDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarouselNavigationDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselNavigationDirective, selectors: [["ng-template", "auCarouselNavigation", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselNavigationDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auCarouselNavigation]' }]
    }], null, null); })();
/**
 * Directive that provides a template reference for the carousel slide  using the {@link CarouselSlideContext}.
 */
class CarouselSlideDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function CarouselSlideDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarouselSlideDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselSlideDirective, selectors: [["ng-template", "auCarouselSlide", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselSlideDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auCarouselSlide]' }]
    }], null, null); })();
class CarouselDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
        this.navigation = viewChild.required('navigation');
    }
    toSlideContext(slideData, carouselContext) {
        return {
            ...slideData,
            ...carouselContext,
        };
    }
    static { this.ɵfac = function CarouselDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarouselDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function CarouselDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0$2, 5);
            i0.ɵɵviewQuerySignal(ctx.navigation, _c1$2, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, decls: 4, vars: 0, consts: [["navigation", ""], ["structure", ""], ["auCarouselNavigation", ""], ["auCarouselStructure", ""], [1, "carousel-indicators", 3, "auUse"], [3, "class", "auUse"], [3, "auUse"], ["data-bs-target", "true", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function CarouselDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CarouselDefaultSlotsComponent_ng_template_0_Template, 2, 2, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor)(2, CarouselDefaultSlotsComponent_ng_template_2_Template, 4, 7, "ng-template", 3, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, CarouselStructureDirective, CarouselNavigationDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselDefaultSlotsComponent, [{
        type: Component,
        args: [{
                imports: [SlotDirective, CarouselStructureDirective, CarouselNavigationDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: \`
		<ng-template auCarouselNavigation #navigation let-state="state" let-api="api" let-directives="directives">
			@if (state.showNavigationArrows()) {
				@if (state.canScrollPrev()) {
					@let prevBtnClassPrefix = state.direction() === 'rtl' ? 'carousel-control-next' : 'carousel-control-prev';
					<button class="{{ prevBtnClassPrefix }}" [auUse]="directives.scrollPrev">
						<span class="{{ prevBtnClassPrefix }}-icon"></span>
					</button>
				}
				@if (state.canScrollNext()) {
					@let nextBtnClassPrefix = state.direction() === 'ltr' ? 'carousel-control-next' : 'carousel-control-prev';
					<button class="{{ nextBtnClassPrefix }}" [auUse]="directives.scrollNext">
						<span class="{{ nextBtnClassPrefix }}-icon"></span>
					</button>
				}
			}
			@if (state.showNavigationIndicators()) {
				<div class="carousel-indicators" [auUse]="directives.tabList">
					@for (slideData of state.slidesData(); track slideData.id; let index = $index) {
						<button
							data-bs-target="true"
							[attr.class]="state.selectedScrollSnap() === index ? 'active' : undefined"
							[auUse]="[directives.tabIndicator, {index, id: slideData.id}]"
						></button>
					}
				</div>
			}
		</ng-template>
		<ng-template auCarouselStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ng-template [auSlot]="state.navigation()" [auSlotProps]="{state, api, directives}" />
			<div [auUse]="directives.container">
				@for (slideData of state.slidesData(); track slideData.id; let index = $index) {
					<div [auUse]="[directives.slide, {index, id: slideData.id}]">
						<ng-template [auSlot]="state.slide()" [auSlotProps]="toSlideContext(slideData, {state, api, directives})" />
					</div>
				}
			</div>
		</ng-template>
	\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarouselDefaultSlotsComponent, { className: "CarouselDefaultSlotsComponent", filePath: "components/carousel/carousel.component.ts", lineNumber: 107 }); })();
/**
 * The default slot for the structure
 */
const carouselDefaultSlotStructure = new ComponentTemplate(CarouselDefaultSlotsComponent, 'structure');
/**
 * The default slot for the navigation
 */
const carouselDefaultSlotNavigation = new ComponentTemplate(CarouselDefaultSlotsComponent, 'navigation');
/**
 * CarouselComponent is an Angular Component that extends {@link BaseWidgetDirective}<{@link CarouselWidget}>
 * to create a customizable carousel widget. It provides various inputs (see {@link CarouselProps})
 * to configure the appearance and behavior of the carousel.
 */
class CarouselComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory(export_createCarousel, {
            afterInit: (widget) => useDirectiveForHost(widget.directives.root),
            defaultConfig: {
                structure: carouselDefaultSlotStructure,
                navigation: carouselDefaultSlotNavigation,
            },
            slotTemplates: () => ({
                slide: this.slotSlideFromContent()?.templateRef,
                structure: this.slotStructureFromContent()?.templateRef,
                navigation: this.slotNavigationFromContent()?.templateRef,
            }),
        }));
        /**
         * Aria label for navigation indicators
         */
        this.ariaIndicatorLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaIndicatorLabel", alias: 'auAriaIndicatorLabel' }] : [{ alias: 'auAriaIndicatorLabel' }]));
        /**
         * Aria label for previous button
         */
        this.ariaPrevLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaPrevLabel", alias: 'auAriaPrevLabel' }] : [{ alias: 'auAriaPrevLabel' }]));
        /**
         * Aria label for next button
         */
        this.ariaNextLabel = input(undefined, ...(ngDevMode ? [{ debugName: "ariaNextLabel", alias: 'auAriaNextLabel' }] : [{ alias: 'auAriaNextLabel' }]));
        /**
         * Choose content direction between \`ltr\` and \`rtl\`
         *
         * @see {@link https://www.embla-carousel.com/api/options/#direction}
         * @defaultValue \`'ltr'\`
         */
        this.direction = input(undefined, ...(ngDevMode ? [{ debugName: "direction", alias: 'auDirection' }] : [{ alias: 'auDirection' }]));
        /**
         * Enables momentum scrolling
         *
         * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
         * @defaultValue \`false\`
         */
        this.dragFree = input(undefined, ...(ngDevMode ? [{ debugName: "dragFree", alias: 'auDragFree', transform: auBooleanAttribute }] : [{ alias: 'auDragFree', transform: auBooleanAttribute }]));
        /**
         * Drag threshold in pixels
         *
         * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
         * @defaultValue \`10\`
         */
        this.dragThreshold = input(undefined, ...(ngDevMode ? [{ debugName: "dragThreshold", alias: 'auDragThreshold', transform: auNumberAttribute }] : [{ alias: 'auDragThreshold', transform: auNumberAttribute }]));
        /**
         * Set scroll duration when triggered by any of the API methods
         *
         * @see {@link https://www.embla-carousel.com/api/options/#duration}
         * @defaultValue \`25\`
         */
        this.duration = input(undefined, ...(ngDevMode ? [{ debugName: "duration", alias: 'auDuration', transform: auNumberAttribute }] : [{ alias: 'auDuration', transform: auNumberAttribute }]));
        /**
         * Enables infinite looping
         *
         * @see {@link https://www.embla-carousel.com/api/options/#loop}
         * @defaultValue \`false\`
         */
        this.loop = input(undefined, ...(ngDevMode ? [{ debugName: "loop", alias: 'auLoop', transform: auBooleanAttribute }] : [{ alias: 'auLoop', transform: auBooleanAttribute }]));
        /**
         * Allow the carousel to skip scroll snaps if it's dragged vigorously
         *
         * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
         * @defaultValue \`false\`
         */
        this.skipSnaps = input(undefined, ...(ngDevMode ? [{ debugName: "skipSnaps", alias: 'auSkipSnaps', transform: auBooleanAttribute }] : [{ alias: 'auSkipSnaps', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
         */
        this.showNavigationArrows = input(undefined, ...(ngDevMode ? [{ debugName: "showNavigationArrows", alias: 'auShowNavigationArrows', transform: auBooleanAttribute }] : [{ alias: 'auShowNavigationArrows', transform: auBooleanAttribute }]));
        /**
         * If \`true\`, navigation indicators at the bottom of the slide will be visible.
         */
        this.showNavigationIndicators = input(undefined, ...(ngDevMode ? [{ debugName: "showNavigationIndicators", alias: 'auShowNavigationIndicators', transform: auBooleanAttribute }] : [{ alias: 'auShowNavigationIndicators', transform: auBooleanAttribute }]));
        /**
         * Plugins to extend the carousel with additional features
         * @defaultValue \`[]\`
         */
        this.plugins = input(undefined, ...(ngDevMode ? [{ debugName: "plugins", alias: 'auPlugins' }] : [{ alias: 'auPlugins' }]));
        /**
         * Align the slides relative to the carousel viewport
         *
         * @see {@link https://www.embla-carousel.com/api/options/#align}
         * @defaultValue \`'center'\`
         */
        this.align = input(undefined, ...(ngDevMode ? [{ debugName: "align", alias: 'auAlign' }] : [{ alias: 'auAlign' }]));
        /**
         * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
         *
         * @see {@link https://www.embla-carousel.com/api/options/#container}
         */
        this.container = input(undefined, ...(ngDevMode ? [{ debugName: "container", alias: 'auContainer' }] : [{ alias: 'auContainer' }]));
        /**
         * Clear leading and trailing empty space that causes excessive scrolling
         *
         * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
         * @defaultValue \`'trimSnaps'\`
         */
        this.containScroll = input(undefined, ...(ngDevMode ? [{ debugName: "containScroll", alias: 'auContainScroll' }] : [{ alias: 'auContainScroll' }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * Class name to apply to the container of the carousel.
         *
         * @defaultValue \`''\`
         */
        this.containerClass = input(undefined, ...(ngDevMode ? [{ debugName: "containerClass", alias: 'auContainerClass' }] : [{ alias: 'auContainerClass' }]));
        /**
         * Class name to apply to each slide in the carousel.
         *
         * @defaultValue \`''\`
         */
        this.slideClass = input(undefined, ...(ngDevMode ? [{ debugName: "slideClass", alias: 'auSlideClass' }] : [{ alias: 'auSlideClass' }]));
        /**
         * The aria-live attribute value for the carousel container.
         *
         * @defaultValue \`'polite'\`
         */
        this.ariaLive = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLive", alias: 'auAriaLive' }] : [{ alias: 'auAriaLive' }]));
        /**
         * The data for each slide in the carousel.
         *
         * @defaultValue \`[]\`
         */
        this.slidesData = input(undefined, ...(ngDevMode ? [{ debugName: "slidesData", alias: 'auSlidesData' }] : [{ alias: 'auSlidesData' }]));
        /**
         * The structure of the carousel.
         *
         * @defaultValue \`undefined\`
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        /**
         * The navigation layer of the carousel.
         *
         * @defaultValue \`undefined\`
         */
        this.navigation = input(undefined, ...(ngDevMode ? [{ debugName: "navigation", alias: 'auNavigation' }] : [{ alias: 'auNavigation' }]));
        /**
         * The content of each slide in the carousel.
         *
         * @defaultValue \`undefined\`
         */
        this.slide = input(undefined, ...(ngDevMode ? [{ debugName: "slide", alias: 'auSlide' }] : [{ alias: 'auSlide' }]));
        this.slotSlideFromContent = contentChild((CarouselSlideDirective), ...(ngDevMode ? [{ debugName: "slotSlideFromContent" }] : []));
        this.slotStructureFromContent = contentChild((CarouselStructureDirective), ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        this.slotNavigationFromContent = contentChild((CarouselNavigationDirective), ...(ngDevMode ? [{ debugName: "slotNavigationFromContent" }] : []));
    }
    static { this.ɵfac = function CarouselComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CarouselComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["", "auCarousel", ""]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotSlideFromContent, (CarouselSlideDirective), 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, (CarouselStructureDirective), 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotNavigationFromContent, (CarouselNavigationDirective), 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(3);
        } }, inputs: { ariaIndicatorLabel: [1, "auAriaIndicatorLabel", "ariaIndicatorLabel"], ariaPrevLabel: [1, "auAriaPrevLabel", "ariaPrevLabel"], ariaNextLabel: [1, "auAriaNextLabel", "ariaNextLabel"], direction: [1, "auDirection", "direction"], dragFree: [1, "auDragFree", "dragFree"], dragThreshold: [1, "auDragThreshold", "dragThreshold"], duration: [1, "auDuration", "duration"], loop: [1, "auLoop", "loop"], skipSnaps: [1, "auSkipSnaps", "skipSnaps"], showNavigationArrows: [1, "auShowNavigationArrows", "showNavigationArrows"], showNavigationIndicators: [1, "auShowNavigationIndicators", "showNavigationIndicators"], plugins: [1, "auPlugins", "plugins"], align: [1, "auAlign", "align"], container: [1, "auContainer", "container"], containScroll: [1, "auContainScroll", "containScroll"], className: [1, "auClassName", "className"], containerClass: [1, "auContainerClass", "containerClass"], slideClass: [1, "auSlideClass", "slideClass"], ariaLive: [1, "auAriaLive", "ariaLive"], slidesData: [1, "auSlidesData", "slidesData"], structure: [1, "auStructure", "structure"], navigation: [1, "auNavigation", "navigation"], slide: [1, "auSlide", "slide"] }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c5$1, decls: 1, vars: 6, consts: [[3, "auSlot", "auSlotProps"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CarouselComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c4$1, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: '[auCarousel]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective],
                template: \` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> \`,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "components/carousel/carousel.component.ts", lineNumber: 138 }); })();

class ToasterService extends ToasterService$1 {
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵToasterService_BaseFactory; return function ToasterService_Factory(__ngFactoryType__) { return (ɵToasterService_BaseFactory || (ɵToasterService_BaseFactory = i0.ɵɵgetInheritedFactory(ToasterService)))(__ngFactoryType__ || ToasterService); }; })(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToasterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const _c0$1 = ["auToaster", ""];
const _c1$1 = (a0, a1) => [a0, a1];
const _forTrack0 = ($index, $item) => $item.id;
function ToasterComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 2);
    i0.ɵɵlistener("click", function ToasterComponent_Conditional_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toasterService.closeAll()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.toasterService.options().closeAllLabel || "Close all", " ");
} }
function ToasterComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "au-component", 3);
    i0.ɵɵlistener("auHidden", function ToasterComponent_For_3_Template_au_component_auHidden_1_listener() { const toast_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleHidden(toast_r4)); })("auVisibleChange", function ToasterComponent_For_3_Template_au_component_auVisibleChange_1_listener() { const toast_r4 = i0.ɵɵrestoreView(_r3).$implicit; return i0.ɵɵresetView(toast_r4.props.onVisibleChange); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const toast_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(9, _c1$1, ctx_r1.toasterService.eventsDirective, toast_r4.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auDismissible", toast_r4.props.dismissible ?? ctx_r1.toasterService.options().dismissible)("auAnimated", toast_r4.props.animated)("auAutoHide", false)("auClassName", toast_r4.props.className)("auAriaCloseButtonLabel", toast_r4.props.ariaCloseButtonLabel)("auStructure", toast_r4.props.structure)("auChildren", toast_r4.props.children)("auHeader", toast_r4.props.header);
} }
class ToasterComponent {
    constructor() {
        this.toasterService = inject(ToasterService);
        this.auDismissible = input(this.toasterService.options().dismissible, ...(ngDevMode ? [{ debugName: "auDismissible" }] : []));
        this.auDuration = input(this.toasterService.options().duration, ...(ngDevMode ? [{ debugName: "auDuration" }] : []));
        this.auPosition = input(this.toasterService.options().position, ...(ngDevMode ? [{ debugName: "auPosition" }] : []));
        this.auLimit = input(this.toasterService.options().limit, ...(ngDevMode ? [{ debugName: "auLimit" }] : []));
        this.auPauseOnHover = input(this.toasterService.options().pauseOnHover, ...(ngDevMode ? [{ debugName: "auPauseOnHover" }] : []));
        this.auCloseAll = input(this.toasterService.options().closeAll, ...(ngDevMode ? [{ debugName: "auCloseAll" }] : []));
        this.auCloseAllLabel = input(this.toasterService.options().closeAllLabel, ...(ngDevMode ? [{ debugName: "auCloseAllLabel" }] : []));
        this.positionClass = computed(() => export_toastPositions[this.toasterService.options().position], ...(ngDevMode ? [{ debugName: "positionClass" }] : []));
        effect(() => {
            this.toasterService.options.update((options) => ({
                ...options,
                dismissible: this.auDismissible(),
                duration: this.auDuration(),
                position: this.auPosition(),
                limit: this.auLimit(),
                pauseOnHover: this.auPauseOnHover(),
                closeAll: this.auCloseAll(),
                closeAllLabel: this.auCloseAllLabel(),
            }));
        });
    }
    handleHidden(toast) {
        this.toasterService.removeToast(toast.id);
        toast.props.onHidden?.();
    }
    static { this.ɵfac = function ToasterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToasterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToasterComponent, selectors: [["", "auToaster", ""]], hostAttrs: ["aria-live", "polite", "aria-atomic", "true", 1, "au-toaster"], inputs: { auDismissible: [1, "auDismissible"], auDuration: [1, "auDuration"], auPosition: [1, "auPosition"], auLimit: [1, "auLimit"], auPauseOnHover: [1, "auPauseOnHover"], auCloseAll: [1, "auCloseAll"], auCloseAllLabel: [1, "auCloseAllLabel"] }, attrs: _c0$1, decls: 4, vars: 3, consts: [[1, "d-flex", "position-relative", "align-items-end", "pb-2"], [3, "auUse"], [1, "au-toaster-closeAll", "btn", "btn-secondary", "me-0", "ms-auto", "pe-auto", 3, "click"], ["auToast", "", 3, "auHidden", "auVisibleChange", "auDismissible", "auAnimated", "auAutoHide", "auClassName", "auAriaCloseButtonLabel", "auStructure", "auChildren", "auHeader"]], template: function ToasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵconditionalCreate(1, ToasterComponent_Conditional_1_Template, 3, 1, "div", 0);
            i0.ɵɵrepeaterCreate(2, ToasterComponent_For_3_Template, 2, 12, "div", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap("au-toaster-container toast-container " + ctx.positionClass());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.toasterService.options().closeAll && ctx.toasterService.toasts().length > 1 ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toasterService.toasts());
        } }, dependencies: [UseDirective, ToastComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToasterComponent, [{
        type: Component,
        args: [{
                selector: '[auToaster]',
                imports: [UseDirective, ToastComponent],
                host: {
                    class: 'au-toaster',
                    'aria-live': 'polite',
                    'aria-atomic': 'true',
                },
                template: \`
		<div [class]="'au-toaster-container toast-container ' + positionClass()">
			@if (toasterService.options().closeAll && toasterService.toasts().length > 1) {
				<div class="d-flex position-relative align-items-end pb-2">
					<button class="au-toaster-closeAll btn btn-secondary me-0 ms-auto pe-auto" (click)="toasterService.closeAll()">
						{{ toasterService.options().closeAllLabel || 'Close all' }}
					</button>
				</div>
			}
			@for (toast of toasterService.toasts(); track toast.id) {
				<div [auUse]="[toasterService.eventsDirective, toast.id]">
					<au-component
						auToast
						[auDismissible]="toast.props.dismissible ?? toasterService.options().dismissible"
						[auAnimated]="toast.props.animated"
						[auAutoHide]="false"
						[auClassName]="toast.props.className"
						[auAriaCloseButtonLabel]="toast.props.ariaCloseButtonLabel"
						[auStructure]="toast.props.structure"
						(auHidden)="handleHidden(toast)"
						(auVisibleChange)="(toast.props.onVisibleChange)"
						[auChildren]="toast.props.children"
						[auHeader]="toast.props.header"
					/>
				</div>
			}
		</div>
	\`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToasterComponent, { className: "ToasterComponent", filePath: "components/toast/toaster.component.ts", lineNumber: 45 }); })();

/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
const export_getDrawerDefaultConfig = getDrawerDefaultConfig;
/**
 * Create a Drawer with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
const export_createDrawer = createDrawer;

const _c0 = ["structure"];
const _c1 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function DrawerDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template(rf, ctx) { }
function DrawerDefaultSlotsComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, DrawerDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const state_r2 = ctx_r0.state;
    const api_r3 = ctx_r0.api;
    const directives_r4 = ctx_r0.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.header())("auSlotProps", i0.ɵɵpureFunction3(2, _c1, state_r2, api_r3, directives_r4));
} }
function DrawerDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function DrawerDefaultSlotsComponent_ng_template_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const directives_r4 = i0.ɵɵnextContext().directives;
    i0.ɵɵproperty("auUse", directives_r4.splitterDirective);
} }
function DrawerDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DrawerDefaultSlotsComponent_ng_template_0_Conditional_0_Template, 2, 6, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, DrawerDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, DrawerDefaultSlotsComponent_ng_template_0_Conditional_3_Template, 1, 1, "div", 5);
} if (rf & 2) {
    const state_r2 = ctx.state;
    const api_r3 = ctx.api;
    const directives_r4 = ctx.directives;
    i0.ɵɵconditional(state_r2.header() ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r2.children())("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r2, api_r3, directives_r4));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.resizable() ? 3 : -1);
} }
const _c2 = ["content"];
const _c3 = ["auDrawer", ""];
const _c4 = ["*"];
const _c5 = (a0, a1) => [a0, a1];
function DrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function DrawerComponent_Conditional_2_ng_template_2_Template(rf, ctx) { }
function DrawerComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, DrawerComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(4, _c5, ctx_r0.directives.drawerPortalDirective, ctx_r0.directives.drawerDirective));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", ctx_r0.directives.containerDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(7, _c1, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
function DrawerComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(1, _c5, ctx_r0.directives.backdropPortalDirective, ctx_r0.directives.backdropDirective));
} }
/**
 * Directive to define the structure of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
class DrawerStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function DrawerStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DrawerStructureDirective, selectors: [["ng-template", "auDrawerStructure", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auDrawerStructure]' }]
    }], null, null); })();
/**
 * Directive representing the header of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
class DrawerHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function DrawerHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DrawerHeaderDirective, selectors: [["ng-template", "auDrawerHeader", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auDrawerHeader]' }]
    }], null, null); })();
/**
 * Directive to represent the body of a drawer notification.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
class DrawerBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function DrawerBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DrawerBodyDirective, selectors: [["ng-template", "auDrawerBody", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auDrawerBody]' }]
    }], null, null); })();
class DrawerDefaultSlotsComponent {
    constructor() {
        this.structure = viewChild.required('structure');
    }
    static { this.ɵfac = function DrawerDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawerDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function DrawerDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.structure, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 2, vars: 0, consts: [["structure", ""], ["auDrawerStructure", ""], [1, "au-drawer-header"], [1, "au-drawer-body"], [3, "auSlot", "auSlotProps"], [3, "auUse"]], template: function DrawerDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DrawerDefaultSlotsComponent_ng_template_0_Template, 4, 8, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, DrawerStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerDefaultSlotsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, DrawerStructureDirective, UseDirective],
                template: \` <ng-template auDrawerStructure #structure let-state="state" let-api="api" let-directives="directives">
		@if (state.header()) {
			<div class="au-drawer-header">
				<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
			</div>
		}
		<div class="au-drawer-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
		</div>
		@if (state.resizable()) {
			<div [auUse]="directives.splitterDirective"></div>
		}
	</ng-template>\`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawerDefaultSlotsComponent, { className: "DrawerDefaultSlotsComponent", filePath: "components/drawer/drawer.component.ts", lineNumber: 80 }); })();
/**
 * Represents the default slot structure for the drawer component.
 */
const drawerDefaultSlotStructure = new ComponentTemplate(DrawerDefaultSlotsComponent, 'structure');
/**
 * DrawerComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable drawer widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
class DrawerComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory$1(export_createDrawer, {
            defaultConfig: {
                structure: drawerDefaultSlotStructure,
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent()?.templateRef,
                header: this.slotHeaderFromContent()?.templateRef,
                children: this.slotBodyFromContent()?.templateRef,
            }),
            events: {
                onHidden: () => this.hidden.emit(),
                onShown: () => this.shown.emit(),
                onWidthChange: (width) => {
                    this.widthChange.emit(width);
                },
                onHeightChange: (height) => {
                    this.heightChange.emit(height);
                },
                onVisibleChange: (event) => this.visibleChange.emit(event),
            },
            slotChildren: () => this.slotChildren(),
        }));
        /**
         * If \`true\` opening and closing will be animated.
         */
        this.animated = input(undefined, ...(ngDevMode ? [{ debugName: "animated", alias: 'auAnimated', transform: auBooleanAttribute }] : [{ alias: 'auAnimated', transform: auBooleanAttribute }]));
        /**
         * aria-labelledby attribute to use for the drawer element.
         */
        this.ariaLabelledBy = input(undefined, ...(ngDevMode ? [{ debugName: "ariaLabelledBy", alias: 'auAriaLabelledBy' }] : [{ alias: 'auAriaLabelledBy' }]));
        /**
         * aria-describedby attribute to use for the drawer element.
         */
        this.ariaDescribedBy = input(undefined, ...(ngDevMode ? [{ debugName: "ariaDescribedBy", alias: 'auAriaDescribedBy' }] : [{ alias: 'auAriaDescribedBy' }]));
        /**
         * If \`true\`, the drawer is shown; otherwise, it is hidden.
         *
         * @defaultValue \`false\`
         */
        this.visible = input(undefined, ...(ngDevMode ? [{ debugName: "visible", alias: 'auVisible', transform: auBooleanAttribute }] : [{ alias: 'auVisible', transform: auBooleanAttribute }]));
        /**
         * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.verticalTransition = input(undefined, ...(ngDevMode ? [{ debugName: "verticalTransition", alias: 'auVerticalTransition' }] : [{ alias: 'auVerticalTransition' }]));
        /**
         * The transition function will be executed when the drawer is displayed or hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.transition = input(undefined, ...(ngDevMode ? [{ debugName: "transition", alias: 'auTransition' }] : [{ alias: 'auTransition' }]));
        /**
         * The transition to use for the backdrop behind the drawer (if present).
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.backdropTransition = input(undefined, ...(ngDevMode ? [{ debugName: "backdropTransition", alias: 'auBackdropTransition' }] : [{ alias: 'auBackdropTransition' }]));
        /**
         * Which element should contain the drawer and backdrop DOM elements.
         * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
         * Otherwise, they stay where the widget is located.
         *
         * @defaultValue
         * \`\`\`ts
         * typeof window !== 'undefined' ? document.body : null
         * \`\`\`
         */
        this.container = input(undefined, ...(ngDevMode ? [{ debugName: "container", alias: 'auContainer' }] : [{ alias: 'auContainer' }]));
        /**
         * If \`true\` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
         */
        this.backdrop = input(undefined, ...(ngDevMode ? [{ debugName: "backdrop", alias: 'auBackdrop', transform: auBooleanAttribute }] : [{ alias: 'auBackdrop', transform: auBooleanAttribute }]));
        /**
         * If \`true\` allows body scrolling when the drawer is open.
         */
        this.bodyScroll = input(undefined, ...(ngDevMode ? [{ debugName: "bodyScroll", alias: 'auBodyScroll', transform: auBooleanAttribute }] : [{ alias: 'auBodyScroll', transform: auBooleanAttribute }]));
        /**
         * Classes to add on the backdrop DOM element.
         *
         * @defaultValue \`''\`
         */
        this.backdropClass = input(undefined, ...(ngDevMode ? [{ debugName: "backdropClass", alias: 'auBackdropClass' }] : [{ alias: 'auBackdropClass' }]));
        /**
         * CSS classes to be applied on the widget main container
         *
         * @defaultValue \`''\`
         */
        this.className = input(undefined, ...(ngDevMode ? [{ debugName: "className", alias: 'auClassName' }] : [{ alias: 'auClassName' }]));
        /**
         * If \`true\`, the drawer can be resized by the user.
         *
         * @defaultValue \`false\`
         */
        this.resizable = input(undefined, ...(ngDevMode ? [{ debugName: "resizable", alias: 'auResizable', transform: auBooleanAttribute }] : [{ alias: 'auResizable', transform: auBooleanAttribute }]));
        /**
         * The width of the drawer in pixels.
         */
        this.width = input(undefined, ...(ngDevMode ? [{ debugName: "width", alias: 'auWidth', transform: auNumberAttribute }] : [{ alias: 'auWidth', transform: auNumberAttribute }]));
        /**
         * The height of the drawer in pixels.
         */
        this.height = input(undefined, ...(ngDevMode ? [{ debugName: "height", alias: 'auHeight', transform: auNumberAttribute }] : [{ alias: 'auHeight', transform: auNumberAttribute }]));
        /**
         * An event emitted when the width is changed.
         *
         * Event payload is equal to the newly selected width.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.widthChange = output({ alias: 'auWidthChange' });
        /**
         * An event emitted when the height is changed.
         *
         * Event payload is equal to the newly selected height.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.heightChange = output({ alias: 'auHeightChange' });
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
        this.visibleChange = output({ alias: 'auVisibleChange' });
        /**
         * Event to be triggered when the transition is completed and the drawer is not visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = output({ alias: 'auHidden' });
        /**
         * Event to be triggered when the transition is completed and the drawer is visible.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = output({ alias: 'auShown' });
        /**
         * Global template for the drawer component
         */
        this.structure = input(undefined, ...(ngDevMode ? [{ debugName: "structure", alias: 'auStructure' }] : [{ alias: 'auStructure' }]));
        this.slotStructureFromContent = contentChild(DrawerStructureDirective, ...(ngDevMode ? [{ debugName: "slotStructureFromContent" }] : []));
        /**
         * Template for the drawer header
         */
        this.header = input(undefined, ...(ngDevMode ? [{ debugName: "header", alias: 'auHeader' }] : [{ alias: 'auHeader' }]));
        this.slotHeaderFromContent = contentChild(DrawerHeaderDirective, ...(ngDevMode ? [{ debugName: "slotHeaderFromContent" }] : []));
        /**
         * Template for the drawer body
         */
        this.children = input(undefined, ...(ngDevMode ? [{ debugName: "children", alias: 'auChildren' }] : [{ alias: 'auChildren' }]));
        this.slotBodyFromContent = contentChild(DrawerBodyDirective, ...(ngDevMode ? [{ debugName: "slotBodyFromContent" }] : []));
        this.slotChildren = viewChild('content', ...(ngDevMode ? [{ debugName: "slotChildren" }] : []));
    }
    static { this.ɵfac = function DrawerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawerComponent, selectors: [["", "auDrawer", ""]], contentQueries: function DrawerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotStructureFromContent, DrawerStructureDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotHeaderFromContent, DrawerHeaderDirective, 5);
            i0.ɵɵcontentQuerySignal(dirIndex, ctx.slotBodyFromContent, DrawerBodyDirective, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(3);
        } }, viewQuery: function DrawerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.slotChildren, _c2, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, inputs: { animated: [1, "auAnimated", "animated"], ariaLabelledBy: [1, "auAriaLabelledBy", "ariaLabelledBy"], ariaDescribedBy: [1, "auAriaDescribedBy", "ariaDescribedBy"], visible: [1, "auVisible", "visible"], verticalTransition: [1, "auVerticalTransition", "verticalTransition"], transition: [1, "auTransition", "transition"], backdropTransition: [1, "auBackdropTransition", "backdropTransition"], container: [1, "auContainer", "container"], backdrop: [1, "auBackdrop", "backdrop"], bodyScroll: [1, "auBodyScroll", "bodyScroll"], backdropClass: [1, "auBackdropClass", "backdropClass"], className: [1, "auClassName", "className"], resizable: [1, "auResizable", "resizable"], width: [1, "auWidth", "width"], height: [1, "auHeight", "height"], structure: [1, "auStructure", "structure"], header: [1, "auHeader", "header"], children: [1, "auChildren", "children"] }, outputs: { widthChange: "auWidthChange", heightChange: "auHeightChange", visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c3, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [["content", ""], [3, "auUseMulti"], [3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, DrawerComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵconditionalCreate(2, DrawerComponent_Conditional_2_Template, 3, 11, "div", 1);
            i0.ɵɵconditionalCreate(3, DrawerComponent_Conditional_3_Template, 1, 4, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.hidden() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state.backdropHidden() ? 3 : -1);
        } }, dependencies: [UseMultiDirective, SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseMultiDirective, SlotDirective, UseDirective],
                selector: '[auDrawer]',
                template: \`
		<ng-template #content><ng-content /></ng-template>
		@if (!state.hidden()) {
			<div [auUseMulti]="[directives.drawerPortalDirective, directives.drawerDirective]">
				<div [auUse]="directives.containerDirective">
					<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
				</div>
			</div>
		}
		@if (!state.backdropHidden()) {
			<div [auUseMulti]="[directives.backdropPortalDirective, directives.backdropDirective]"></div>
		}
	\`,
                encapsulation: ViewEncapsulation.None,
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawerComponent, { className: "DrawerComponent", filePath: "components/drawer/drawer.component.ts", lineNumber: 113 }); })();

// [import-placeholder]
/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
    SelectBadgeLabelDirective,
    SelectItemLabelDirective,
    UseDirective,
    UseMultiDirective,
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
    SliderTickDirective,
    ProgressbarComponent,
    ProgressbarStructureDirective,
    ProgressbarBodyDirective,
    ToastComponent,
    ToastStructureDirective,
    ToastBodyDirective,
    ToastHeaderDirective,
    ToasterComponent,
    CollapseDirective,
    CollapseTriggerDirective,
    TreeComponent,
    TreeStructureDirective,
    TreeItemToggleDirective,
    TreeItemContentDirective,
    TreeItemDirective,
    CarouselComponent,
    CarouselSlideDirective,
    CarouselStructureDirective,
    CarouselNavigationDirective,
    DrawerComponent,
    DrawerStructureDirective,
    DrawerHeaderDirective,
    DrawerBodyDirective,
    // [content-placeholder]
];
class AgnosUIAngularModule {
    static { this.ɵfac = function AgnosUIAngularModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AgnosUIAngularModule)(); }; }
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
        SelectItemLabelDirective,
        UseDirective,
        UseMultiDirective,
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
        SliderTickDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ProgressbarBodyDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective,
        ToasterComponent,
        CollapseDirective,
        CollapseTriggerDirective,
        TreeComponent,
        TreeStructureDirective,
        TreeItemToggleDirective,
        TreeItemContentDirective,
        TreeItemDirective,
        CarouselComponent,
        CarouselSlideDirective,
        CarouselStructureDirective,
        CarouselNavigationDirective,
        DrawerComponent,
        DrawerStructureDirective,
        DrawerHeaderDirective,
        DrawerBodyDirective], exports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemLabelDirective,
        UseDirective,
        UseMultiDirective,
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
        SliderTickDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ProgressbarBodyDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective,
        ToasterComponent,
        CollapseDirective,
        CollapseTriggerDirective,
        TreeComponent,
        TreeStructureDirective,
        TreeItemToggleDirective,
        TreeItemContentDirective,
        TreeItemDirective,
        CarouselComponent,
        CarouselSlideDirective,
        CarouselStructureDirective,
        CarouselNavigationDirective,
        DrawerComponent,
        DrawerStructureDirective,
        DrawerHeaderDirective,
        DrawerBodyDirective] }); })();

/**
 * Service to handle the opening and management of modal components.
 */
class ModalService {
    constructor() {
        this._injector = inject(Injector);
        this._applicationRef = inject(ApplicationRef);
    }
    /**
     * Opens a modal dialog with the specified options.
     *
     * @template Data - The type of data that the modal will handle.
     * @param options - The options to configure the modal.
     * @param injector - The injector to use when creating the modal component
     * @returns A promise that resolves when the modal is closed.
     */
    async open(options, injector = this._injector) {
        const component = createComponent(ModalComponent, {
            environmentInjector: injector.get(EnvironmentInjector),
            elementInjector: injector,
            bindings: Object.entries(options).map(([key, value]) => {
                if (key.startsWith('on')) {
                    return outputBinding(\`au\${key.substring(2)}\`, value);
                }
                else {
                    return inputBinding(\`au\${key[0].toUpperCase()}\${key.substring(1)}\`, () => value);
                }
            }),
        });
        try {
            this._applicationRef.attachView(component.hostView);
            await component.instance['_widget'].initialized;
            return await component.instance.api.open();
        }
        finally {
            component.destroy();
        }
    }
    static { this.ɵfac = function ModalService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalService)(); }; }
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

export { AccordionBodyDirective, AccordionDirective, AccordionHeaderDirective, AccordionItemComponent, AccordionItemStructureDirective, AgnosUIAngularModule, AlertBodyDirective, AlertComponent, AlertStructureDirective, CarouselComponent, CarouselNavigationDirective, CarouselSlideDirective, CarouselStructureDirective, CollapseDirective, CollapseTriggerDirective, DrawerBodyDirective, DrawerComponent, DrawerHeaderDirective, DrawerStructureDirective, ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalService, ModalStructureDirective, ModalTitleDirective, PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, PaginationStructureDirective, ProgressbarBodyDirective, ProgressbarComponent, ProgressbarStructureDirective, RatingComponent, RatingStarDirective, SelectBadgeLabelDirective, SelectComponent, SelectItemLabelDirective, SliderComponent, SliderHandleDirective, SliderLabelDirective, SliderStructureDirective, SliderTickDirective, ToastBodyDirective, ToastComponent, ToastHeaderDirective, ToastStructureDirective, ToasterComponent, ToasterService, TreeComponent, TreeItemContentDirective, TreeItemDirective, TreeItemToggleDirective, TreeStructureDirective, accordionItemDefaultSlotStructure, alertDefaultSlotStructure, callWidgetFactory, carouselDefaultSlotNavigation, carouselDefaultSlotStructure, export_createAccordion as createAccordion, export_createAccordionItem as createAccordionItem, export_createAlert as createAlert, export_createCarousel as createCarousel, export_createCollapse as createCollapse, export_createDrawer as createDrawer, export_createModal as createModal, export_createPagination as createPagination, export_createProgressbar as createProgressbar, export_createRating as createRating, export_createSelect as createSelect, export_createSlider as createSlider, export_createToast as createToast, export_createTree as createTree, export_defaultToasterProps as defaultToasterProps, drawerDefaultSlotStructure, export_factoryCreateAccordion as factoryCreateAccordion, export_getAccordionDefaultConfig as getAccordionDefaultConfig, export_getAlertDefaultConfig as getAlertDefaultConfig, export_getCarouselDefaultConfig as getCarouselDefaultConfig, export_getCollapseDefaultConfig as getCollapseDefaultConfig, export_getDrawerDefaultConfig as getDrawerDefaultConfig, export_getModalDefaultConfig as getModalDefaultConfig, export_getPaginationDefaultConfig as getPaginationDefaultConfig, export_getProgressbarDefaultConfig as getProgressbarDefaultConfig, export_getRatingDefaultConfig as getRatingDefaultConfig, export_getSelectDefaultConfig as getSelectDefaultConfig, export_getSliderDefaultConfig as getSliderDefaultConfig, export_getToastDefaultConfig as getToastDefaultConfig, export_getTreeDefaultConfig as getTreeDefaultConfig, injectWidgetConfig, injectWidgetsConfig, export_modalCloseButtonClick as modalCloseButtonClick, export_modalCloseEscape as modalCloseEscape, modalDefaultSlotHeader, modalDefaultSlotStructure, export_modalOutsideClick as modalOutsideClick, paginationDefaultSlotPages, paginationDefaultSlotStructure, progressbarDefaultSlotStructure, provideWidgetsConfig, sliderDefaultSlotHandle, sliderDefaultSlotStructure, sliderDefaultSlotTick, toastDefaultSlotStructure, export_toastPositions as toastPositions, treeDefaultItemToggle, treeDefaultSlotItem, treeDefaultSlotItemContent, treeDefaultSlotStructure, widgetsConfigInjectionToken };
//# sourceMappingURL=agnos-ui-angular-bootstrap.mjs.map
`;export{e as default};
