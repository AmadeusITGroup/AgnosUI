const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createToast, mergeDirectives, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import * as i0 from "@angular/core";
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
export class ToastBodyDirective {
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
export class ToastStructureDirective {
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
export class ToastHeaderDirective {
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
export class ToastDefaultSlotsComponent {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 75 }); })();
export const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: toastDefaultSlotStructure,
};
export class ToastComponent extends BaseWidgetDirective {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 99 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGVBQWUsR0FDZixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFrQ2xCLDRCQUFpRzs7O0lBQTFELGlFQUFnRDs7O0lBSHpGLDhCQUEwQjtJQUV6QixBQURBLHVIQUF5RSxxR0FDaEQ7SUFHMUIsaUJBQU07Ozs7O0lBSlEsY0FBMkI7SUFBQyxBQUE1Qiw0Q0FBMkIsZ0VBQWdDO0lBQ3hFLGNBRUM7SUFGRCxrREFFQzs7OztJQU9GLDRCQUFnSDs7O0lBQTFELGlFQUFnRDs7O0lBWnZHLGlHQUF3QjtJQVF4Qiw4QkFBd0I7SUFDdkIseUdBQTBFO0lBQzNFLGlCQUFNO0lBQ04sb0dBQThDOzs7O0lBWDlDLGlEQU9DO0lBRWEsZUFBNEI7SUFBQyxBQUE3Qiw2Q0FBNEIsZ0VBQWdDO0lBRTFFLGNBRUM7SUFGRCwwRUFFQzs7Ozs7SUFtQkEsa0JBQXlCOzs7O0lBR3pCLDhCQUFpSTtJQUNoSSw2RkFBdUY7SUFDeEYsaUJBQU07OztJQUZrRCxBQUFyQyxvREFBb0MsaURBQWdEO0lBQUMsNkNBQXdCO0lB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QUssRUFBQztZQUt4QixhQUFhO2tCQUF2QyxNQUFNO21CQUFDLGlCQUFpQjtZQUtMLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQUtDLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU1LLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQWNoQixjQUFjO2tGQW5HTixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50LCBUb2FzdENvbnRleHQsIFRvYXN0UHJvcHMsIFRvYXN0V2lkZ2V0LCBUcmFuc2l0aW9uRm59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENhY2hlZFByb3BlcnR5LFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVRvYXN0LFxuXHRtZXJnZURpcmVjdGl2ZXMsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0Qm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUb2FzdEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VG9hc3RDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogVG9hc3RCb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUb2FzdENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUb2FzdFN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1VG9hc3RIZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgVG9hc3RIZWFkZXJEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VG9hc3RDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogVG9hc3RIZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFRvYXN0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgYXVUb2FzdFN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdEBpZiAoc3RhdGUuc2xvdEhlYWRlcikge1xuXHRcdFx0PGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SGVhZGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdEBpZiAoc3RhdGUuZGlzbWlzc2libGUpIHtcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlIG1lLTAgbXMtYXV0b1wiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbG9zZUJ1dHRvbkRpcmVjdGl2ZVwiPjwvYnV0dG9uPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdFx0PGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIj5cblx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0PC9kaXY+XG5cdFx0QGlmIChzdGF0ZS5kaXNtaXNzaWJsZSAmJiAhc3RhdGUuc2xvdEhlYWRlcikge1xuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZSBidG4tY2xvc2Utd2hpdGUgbWUtMiBtLWF1dG9cIiBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuY2xvc2VCdXR0b25EaXJlY3RpdmVcIj48L2J1dHRvbj5cblx0XHR9XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3REZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgdG9hc3REZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFRvYXN0UHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiB0b2FzdERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1VG9hc3RdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0QGlmICghc3RhdGUoKS5oaWRkZW4pIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2FzdFwiIFtjbGFzcy5kLWZsZXhdPVwiIXN0YXRlKCkuc2xvdEhlYWRlclwiIFtjbGFzcy50b2FzdC1kaXNtaXNzaWJsZV09XCJzdGF0ZSgpLmRpc21pc3NpYmxlXCIgW2F1VXNlXT1cInRvYXN0RGlyZWN0aXZlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0fWAsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxUb2FzdFdpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkIG9mIHRoZSBldmVudCB3aXRoIHRoZSAoY2xvc2UpIG91dHB1dC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc21pc3NpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRkaXNtaXNzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIENvbW1vbkFsZXJ0UHJvcHMuYW5pbWF0ZWRPbkluaXQsIHRoZSBhbmltYXRpb24gY2FuIGJlIG9wdGlvbmFsbHkgc2tpcHBlZCBkdXJpbmcgdGhlIHNob3dpbmcgcHJvY2Vzcy5cblx0ICovXG5cdEBJbnB1dCgnYXVUcmFuc2l0aW9uJylcblx0dHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIGFsZXJ0IGlzIHZpc2libGUgdG8gdGhlIHVzZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgb3BlbmluZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIHRoZSBgLm9wZW4oKWAgZnVuY3Rpb24gaXMgY2FsbGVkXG5cdCAqIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWRPbkluaXQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGFuaW1hdGVkT25Jbml0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNsb3Npbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSxcblx0ICogdmlhIHRoZSBgLmNsb3NlKClgIGZ1bmN0aW9uIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgYXV0b21hdGljYWxseSBoaWRlcyB0aGUgdG9hc3QgYWZ0ZXIgdGhlIGRlbGF5LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QXV0b0hpZGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGF1dG9IaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGhpZGluZyB0aGUgdG9hc3QuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEZWxheScsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRkZWxheTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBY2Nlc3NpYmlsaXR5IGNsb3NlIGJ1dHRvbiBsYWJlbFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFDbG9zZUJ1dHRvbkxhYmVsJykgYXJpYUNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdERlZmF1bHQnKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChUb2FzdEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogVG9hc3RCb2R5RGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEhlYWRlcicpIHNsb3RIZWFkZXI6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVG9hc3RIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEhlYWRlckZyb21Db250ZW50OiBUb2FzdEhlYWRlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICovXG5cdEBPdXRwdXQoJ2F1VmlzaWJsZUNoYW5nZScpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBoaWRkZW4uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90czogV3JpdGFibGVTaWduYWw8UGFydGlhbDxUb2FzdFByb3BzPj4gPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlVG9hc3QsXG5cdFx0d2lkZ2V0TmFtZTogJ3RvYXN0Jyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0fSxcblx0fSk7XG5cblx0QENhY2hlZFByb3BlcnR5XG5cdGdldCB0b2FzdERpcmVjdGl2ZSgpIHtcblx0XHRyZXR1cm4gbWVyZ2VEaXJlY3RpdmVzKFxuXHRcdFx0dGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYXV0b0hpZGVEaXJlY3RpdmUsXG5cdFx0XHR0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlLFxuXHRcdFx0dGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYm9keURpcmVjdGl2ZSxcblx0XHQpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3REZWZhdWx0OiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
