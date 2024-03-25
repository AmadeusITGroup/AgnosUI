const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAlert, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
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
    i0.ɵɵproperty("auSlot", state_r3.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, state_r3, widget_r2));
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, state_r3.dismissible ? 2 : -1);
} }
const _c2 = ["auAlert", ""];
const _c3 = ["*"];
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
    i0.ɵɵproperty("auSlot", ctx_r0.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(8, _c1, ctx_r0.state(), ctx_r0.widget));
} }
export class AlertBodyDirective {
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
export class AlertStructureDirective {
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
export class AlertDefaultSlotsComponent {
    static { this.ɵfac = function AlertDefaultSlotsComponent_Factory(t) { return new (t || AlertDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AlertDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 55 }); })();
export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: alertDefaultSlotStructure,
};
export class AlertComponent extends BaseWidgetDirective {
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
        } }, inputs: { type: [i0.ɵɵInputFlags.None, "auType", "type"], dismissible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDismissible", "dismissible", auBooleanAttribute], transition: [i0.ɵɵInputFlags.None, "auTransition", "transition"], visible: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], ariaCloseButtonLabel: [i0.ɵɵInputFlags.None, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "components/alert/alert.component.ts", lineNumber: 85 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsV0FBVyxHQUNYLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBMEJwQixpQ0FBb0g7SUFBNUUsc05BQVMscUJBQWtCLEtBQUM7SUFBZ0QsaUJBQVM7Ozs7OztJQUo5SCw4QkFBd0I7SUFDdkIseUdBQTBFO0lBQzNFLGlCQUFNO0lBQ04sb0dBQXlCOzs7O0lBRlgsY0FBNEI7SUFBQyxBQUE3Qiw2Q0FBNEIsZ0VBQWdDO0lBRTFFLGNBRUM7SUFGRCxrREFFQzs7Ozs7SUFvQkEsa0JBQXlCOzs7O0lBSXpCLDhCQUlDO0lBQ0EsNkZBQXVGO0lBQ3hGLGlCQUFNOzs7SUFKTCxzS0FBNEg7SUFENUgsb0VBQStDO0lBSWxDLGNBQWdDO0lBQUMsQUFBakMscURBQWdDLDBFQUF5Qzs7QUFyRDFGLE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXlCLENBQUEsQ0FBQyxDQUFDO0tBSXZEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQXVCLEVBQUUsT0FBZ0I7UUFDdEUsT0FBTyxJQUFJLENBQUM7SUFD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TUFBTTttQkFBQyxTQUFTO1lBTUssU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhOztrRkE5RVIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBbGVydENvbnRleHQsIEFsZXJ0UHJvcHMsIEFsZXJ0V2lkZ2V0LCBTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlQWxlcnQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7dHlwZSBXcml0YWJsZVNpZ25hbCwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRCb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFsZXJ0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFsZXJ0Qm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWxlcnRDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWxlcnRTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFsZXJ0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIGF1QWxlcnRTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblx0XHRAaWYgKHN0YXRlLmRpc21pc3NpYmxlKSB7XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIChjbGljayk9XCJ3aWRnZXQuYXBpLmNsb3NlKClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFDbG9zZUJ1dHRvbkxhYmVsXCI+PC9idXR0b24+XG5cdFx0fVxuXHQ8L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0RGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IGFsZXJ0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuZXhwb3J0IHR5cGUgUGFydGlhbEFsZXJ0UHJvcHMgPSBQYXJ0aWFsPEFsZXJ0UHJvcHM+O1xuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbEFsZXJ0UHJvcHMgPSB7XG5cdHNsb3RTdHJ1Y3R1cmU6IGFsZXJ0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVBbGVydF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdEBpZiAoIXN0YXRlKCkuaGlkZGVuKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlXCJcblx0XHRcdFx0Y2xhc3M9XCJhdS1hbGVydCBhbGVydCBhbGVydC17eyBzdGF0ZSgpLnR5cGUgfX0ge3sgc3RhdGUoKS5jbGFzc05hbWUgfX0ge3sgc3RhdGUoKS5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJyB9fVwiXG5cdFx0XHRcdHJvbGU9XCJhbGVydFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0fWAsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBbGVydFdpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIGFsZXJ0LlxuXHQgKiBUaGVyZSBhcmUgdGhlIGZvbGxvd2luZyB0eXBlczogJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdsaWdodCcgYW5kICdkYXJrJy5cblx0ICovXG5cdEBJbnB1dCgnYXVUeXBlJylcblx0dHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNhbiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuXG5cdCAqIFRoZSBjbG9zZSBidXR0b24gKMOXKSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgeW91IGNhbiBiZSBub3RpZmllZCBvZiB0aGUgZXZlbnQgd2l0aCB0aGUgKGNsb3NlKSBvdXRwdXQuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNtaXNzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0ZGlzbWlzc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgYWxlcnQgaXMgZGlzcGxheWVkIG9yIGhpZGRlbi5cblx0ICpcblx0ICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBDb21tb25BbGVydFByb3BzLmFuaW1hdGVkT25Jbml0LCB0aGUgYW5pbWF0aW9uIGNhbiBiZSBvcHRpb25hbGx5IHNraXBwZWQgZHVyaW5nIHRoZSBzaG93aW5nIHByb2Nlc3MuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHJhbnNpdGlvbicpXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHR2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiB0aGUgYC5vcGVuKClgIGZ1bmN0aW9uIGlzIGNhbGxlZFxuXHQgKiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkT25Jbml0JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZE9uSW5pdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWxlcnRCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IEFsZXJ0Qm9keURpcmVjdGl2ZSB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCB2aXNpYmlsaXR5IGNoYW5nZWQuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxBbGVydFByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVBbGVydCxcblx0XHR3aWRnZXROYW1lOiAnYWxlcnQnLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
