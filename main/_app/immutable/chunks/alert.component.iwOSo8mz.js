const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, auBooleanAttribute, } from '@agnos-ui/angular-headless';
import { createAlert } from './alert';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
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
    i0.ɵɵconditional(state_r3.dismissible ? 2 : -1);
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 57 }); })();
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
        } }, inputs: { type: [0, "auType", "type"], dismissible: [2, "auDismissible", "dismissible", auBooleanAttribute], transition: [0, "auTransition", "transition"], visible: [2, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: [0, "auSlotDefault", "slotDefault"], slotStructure: [0, "auSlotStructure", "slotStructure"], className: [0, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 2, consts: [[3, "auSlotDefault"], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, AlertComponent_Conditional_1_Template, 2, 11, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.state().hidden ? 1 : -1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixHQUNsQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQTJCNUMsaUNBQW9IO0lBQTVFLHNOQUFTLHFCQUFrQixLQUFDO0lBQWdELGlCQUFTOzs7Ozs7SUFKOUgsOEJBQXdCO0lBQ3ZCLHlHQUEwRTtJQUMzRSxpQkFBTTtJQUNOLG9HQUF5Qjs7OztJQUZYLGNBQTRCO0lBQUMsQUFBN0IsNkNBQTRCLGdFQUFnQztJQUUxRSxjQUVDO0lBRkQsK0NBRUM7Ozs7O0lBb0JBLGtCQUF5Qjs7OztJQUl6Qiw4QkFJQztJQUNBLDZGQUF1RjtJQUN4RixpQkFBTTs7O0lBSkwsc0tBQTRIO0lBRDVILG9FQUErQztJQUlsQyxjQUFnQztJQUFDLEFBQWpDLHFEQUFnQywwRUFBeUM7O0FBckQxRixNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF5QixDQUFBLENBQUMsQ0FBQztLQUl2RDtJQUhBLE1B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QUFDLGlCQUFpQjtZQUtMLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQUtDLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQU1LLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTs7a0ZBN0VSLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnQsIFRyYW5zaXRpb25Gbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REZWZhdWx0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FsZXJ0Q29udGV4dCwgQWxlcnRQcm9wcywgQWxlcnRXaWRnZXR9IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IHtjcmVhdGVBbGVydH0gZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQge3R5cGUgV3JpdGFibGVTaWduYWwsIHdyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtCU0NvbnRleHR1YWxDbGFzc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFsZXJ0Qm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBbGVydEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWxlcnRCb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBbGVydENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydFN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBbGVydENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWxlcnRDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgYXVBbGVydFN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ib2R5XCI+XG5cdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RGVmYXVsdFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PlxuXHRcdEBpZiAoc3RhdGUuZGlzbWlzc2libGUpIHtcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgKGNsaWNrKT1cIndpZGdldC5hcGkuY2xvc2UoKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWxcIj48L2J1dHRvbj5cblx0XHR9XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlITogVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IGFsZXJ0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuZXhwb3J0IHR5cGUgUGFydGlhbEFsZXJ0UHJvcHMgPSBQYXJ0aWFsPEFsZXJ0UHJvcHM+O1xuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbEFsZXJ0UHJvcHMgPSB7XG5cdHNsb3RTdHJ1Y3R1cmU6IGFsZXJ0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVBbGVydF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdEBpZiAoIXN0YXRlKCkuaGlkZGVuKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlXCJcblx0XHRcdFx0Y2xhc3M9XCJhdS1hbGVydCBhbGVydCBhbGVydC17eyBzdGF0ZSgpLnR5cGUgfX0ge3sgc3RhdGUoKS5jbGFzc05hbWUgfX0ge3sgc3RhdGUoKS5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJyB9fVwiXG5cdFx0XHRcdHJvbGU9XCJhbGVydFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0fWAsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxBbGVydFdpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIGFsZXJ0LCBmb2xsb3dpbmcgYm9vdHN0cmFwIHR5cGVzLlxuXHQgKi9cblx0QElucHV0KCdhdVR5cGUnKVxuXHR0eXBlOiBCU0NvbnRleHR1YWxDbGFzcyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzbWlzc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc21pc3NpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgQ29tbW9uQWxlcnRQcm9wcy5hbmltYXRlZE9uSW5pdCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKi9cblx0QElucHV0KCdhdVRyYW5zaXRpb24nKVxuXHR0cmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gdGhlIGAub3BlbigpYCBmdW5jdGlvbiBpcyBjYWxsZWRcblx0ICogb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZE9uSW5pdCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWRPbkluaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpLFxuXHQgKiB2aWEgdGhlIGAuY2xvc2UoKWAgZnVuY3Rpb24gb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0Qm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBBbGVydEJvZHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RTdHJ1Y3R1cmUnKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCB2aXNpYmlsaXR5IGNoYW5nZWQuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxBbGVydFByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVBbGVydCxcblx0XHR3aWRnZXROYW1lOiAnYWxlcnQnLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
