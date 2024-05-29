const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, auNumberAttribute, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createToast } from './toast';
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
    i0.ɵɵconditional(state_r3.dismissible ? 2 : -1);
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
    i0.ɵɵconditional(state_r3.slotHeader ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r3.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(4, _c1, state_r3, widget_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible && !state_r3.slotHeader ? 3 : -1);
} }
const _c2 = ["auToast", ""];
const _c3 = ["*"];
const _c4 = (a0, a1, a2) => [a0, a1, a2];
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
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(7, _c4, ctx_r0.widget.directives.autoHideDirective, ctx_r0.widget.directives.transitionDirective, ctx_r0.widget.directives.bodyDirective));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, ctx_r0.state(), ctx_r0.widget));
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 76 }); })();
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
        } }, inputs: { dismissible: [2, "auDismissible", "dismissible", auBooleanAttribute], transition: [0, "auTransition", "transition"], visible: [2, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], autoHide: [2, "auAutoHide", "autoHide", auBooleanAttribute], delay: [2, "auDelay", "delay", auNumberAttribute], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: [0, "auSlotDefault", "slotDefault"], slotStructure: [0, "auSlotStructure", "slotStructure"], slotHeader: [0, "auSlotHeader", "slotHeader"], className: [0, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], [1, "toast", 3, "d-flex", "toast-dismissible", "auUseMulti"], [1, "toast", 3, "auUseMulti"], [3, "auSlot", "auSlotProps"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ToastComponent_Conditional_1_Template, 2, 14, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().hidden ? 1 : -1);
        } }, dependencies: [SlotDirective, UseMultiDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: '[auToast]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseMultiDirective, SlotDefaultDirective],
                template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>
		@if (!state().hidden) {
			<div
				class="toast"
				[class.d-flex]="!state().slotHeader"
				[class.toast-dismissible]="state().dismissible"
				[auUseMulti]="[widget.directives.autoHideDirective, widget.directives.transitionDirective, widget.directives.bodyDirective]"
			>
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 105 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsaUJBQWlCLEdBQ2pCLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRy9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7OztJQWtDL0IsNEJBQWlHOzs7SUFBMUQsaUVBQWdEOzs7SUFIekYsOEJBQTBCO0lBRXpCLEFBREEsdUhBQXlFLHFHQUNoRDtJQUcxQixpQkFBTTs7Ozs7SUFKUSxjQUEyQjtJQUFDLEFBQTVCLDRDQUEyQixnRUFBZ0M7SUFDeEUsY0FFQztJQUZELCtDQUVDOzs7O0lBT0YsNEJBQWdIOzs7SUFBMUQsaUVBQWdEOzs7SUFadkcsaUdBQXdCO0lBUXhCLDhCQUF3QjtJQUN2Qix5R0FBMEU7SUFDM0UsaUJBQU07SUFDTixvR0FBOEM7Ozs7SUFYOUMsOENBT0M7SUFFYSxlQUE0QjtJQUFDLEFBQTdCLDZDQUE0QixnRUFBZ0M7SUFFMUUsY0FFQztJQUZELHVFQUVDOzs7Ozs7SUFtQkEsa0JBQXlCOzs7O0lBR3pCLDhCQUtDO0lBQ0EsNkZBQXVGO0lB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OztrRkFyRlIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB0eXBlIHtUb2FzdENvbnRleHQsIFRvYXN0UHJvcHMsIFRvYXN0V2lkZ2V0fSBmcm9tICcuL3RvYXN0JztcbmltcG9ydCB7Y3JlYXRlVG9hc3R9IGZyb20gJy4vdG9hc3QnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1VG9hc3RCb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0Qm9keURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBUb2FzdEJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFRvYXN0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0U3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRvYXN0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUb2FzdENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUb2FzdEhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUb2FzdEhlYWRlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBUb2FzdEhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBhdVRvYXN0U3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0QGlmIChzdGF0ZS5zbG90SGVhZGVyKSB7XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIZWFkZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5kaXNtaXNzaWJsZSkge1xuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tY2xvc2UgbWUtMCBtcy1hdXRvXCIgW2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLmNsb3NlQnV0dG9uRGlyZWN0aXZlXCI+PC9idXR0b24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblx0XHRAaWYgKHN0YXRlLmRpc21pc3NpYmxlICYmICFzdGF0ZS5zbG90SGVhZGVyKSB7XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlIGJ0bi1jbG9zZS13aGl0ZSBtZS0yIG0tYXV0b1wiIFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5jbG9zZUJ1dHRvbkRpcmVjdGl2ZVwiPjwvYnV0dG9uPlxuXHRcdH1cblx0PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgdG9hc3REZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFRvYXN0UHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiB0b2FzdERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1VG9hc3RdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRAaWYgKCFzdGF0ZSgpLmhpZGRlbikge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cInRvYXN0XCJcblx0XHRcdFx0W2NsYXNzLmQtZmxleF09XCIhc3RhdGUoKS5zbG90SGVhZGVyXCJcblx0XHRcdFx0W2NsYXNzLnRvYXN0LWRpc21pc3NpYmxlXT1cInN0YXRlKCkuZGlzbWlzc2libGVcIlxuXHRcdFx0XHRbYXVVc2VNdWx0aV09XCJbd2lkZ2V0LmRpcmVjdGl2ZXMuYXV0b0hpZGVEaXJlY3RpdmUsIHdpZGdldC5kaXJlY3RpdmVzLnRyYW5zaXRpb25EaXJlY3RpdmUsIHdpZGdldC5kaXJlY3RpdmVzLmJvZHlEaXJlY3RpdmVdXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9YCxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFRvYXN0V2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzbWlzc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc21pc3NpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgQ29tbW9uQWxlcnRQcm9wcy5hbmltYXRlZE9uSW5pdCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKi9cblx0QElucHV0KCdhdVRyYW5zaXRpb24nKVxuXHR0cmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gdGhlIGAub3BlbigpYCBmdW5jdGlvbiBpcyBjYWxsZWRcblx0ICogb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZE9uSW5pdCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWRPbkluaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpLFxuXHQgKiB2aWEgdGhlIGAuY2xvc2UoKWAgZnVuY3Rpb24gb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBhdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSB0b2FzdCBhZnRlciB0aGUgZGVsYXkuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBdXRvSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YXV0b0hpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgaGlkaW5nIHRoZSB0b2FzdC5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURlbGF5JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdGRlbGF5OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRvYXN0Qm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBUb2FzdEJvZHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RIZWFkZXInKSBzbG90SGVhZGVyOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRvYXN0SGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RIZWFkZXJGcm9tQ29udGVudDogVG9hc3RIZWFkZXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCB2aXNpYmlsaXR5IGNoYW5nZWQuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWw8VG9hc3RQcm9wcz4+ID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVRvYXN0LFxuXHRcdHdpZGdldE5hbWU6ICd0b2FzdCcsXG5cdFx0ZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdH0sXG5cdH0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RGVmYXVsdDogdGhpcy5zbG90RGVmYXVsdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RIZWFkZXI6IHRoaXMuc2xvdEhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
