const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute } from '@agnos-ui/angular-headless';
import { createAlert } from './alert.gen';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
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
    i0.ɵɵtemplate(2, AlertDefaultSlotsComponent_ng_template_0_Conditional_2_Template, 1, 1, "button", 4);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const api_r2 = ctx.api;
    const directives_r4 = ctx.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.children())("auSlotProps", i0.ɵɵpureFunction3(3, _c1, state_r3, api_r2, directives_r4));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible() ? 2 : -1);
} }
const _c2 = ["content"];
const _c3 = ["auAlert", ""];
const _c4 = ["*"];
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
    i0.ɵɵclassMapInterpolate3("au-alert alert alert-", ctx_r0.state.type(), " ", ctx_r0.state.className(), " ", ctx_r0.state.dismissible() ? "alert-dismissible" : "", "");
    i0.ɵɵproperty("auUse", ctx_r0.directives.transitionDirective);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(8, _c1, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
export class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertBodyDirective)(); }; }
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
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function AlertStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AlertStructureDirective, selectors: [["ng-template", "auAlertStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
    }], null, null); })();
class AlertDefaultSlotsComponent {
    static { this.ɵfac = function AlertDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function AlertDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auAlertStructure", ""], [1, "alert-body"], [3, "auSlot", "auSlotProps"], ["type", "button", 1, "btn-close"], ["type", "button", 1, "btn-close", 3, "click"]], template: function AlertDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertDefaultSlotsComponent_ng_template_0_Template, 3, 7, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, AlertStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, AlertStructureDirective],
                template: \` <ng-template auAlertStructure #structure let-state="state" let-api="api" let-directives="directives">
		<div class="alert-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
		</div>
		@if (state.dismissible()) {
			<button type="button" class="btn-close" (click)="api.close()" [attr.aria-label]="state.ariaCloseButtonLabel()"></button>
		}
	</ng-template>\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertDefaultSlotsComponent, { className: "AlertDefaultSlotsComponent", filePath: "components/alert/alert.component.ts", lineNumber: 48 }); })();
export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
export class AlertComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createAlert,
            widgetName: 'alert',
            defaultConfig: {
                structure: alertDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            slotTemplates: () => ({
                children: this.slotDefaultFromContent?.templateRef,
                structure: this.slotStructureFromContent?.templateRef,
            }),
            slotChildren: () => this.slotChildren,
        }));
        /**
         * Callback called when the alert visibility changed.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.visibleChange = new EventEmitter();
        /**
         * Callback called when the alert is hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = new EventEmitter();
        /**
         * Callback called when the alert is shown.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = new EventEmitter();
    }
    static { this.ɵfac = function AlertComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["", "auAlert", ""]], contentQueries: function AlertComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AlertBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, AlertStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotChildren = _t.first);
        } }, inputs: { type: [0, "auType", "type"], dismissible: [2, "auDismissible", "dismissible", auBooleanAttribute], transition: [0, "auTransition", "transition"], visible: [2, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], className: [0, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 1, consts: [["content", ""], ["role", "alert", 3, "auUse", "class"], ["role", "alert", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, AlertComponent_Conditional_2_Template, 2, 12, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.hidden() ? 2 : -1);
        } }, dependencies: [SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: '[auAlert]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseDirective],
                template: \` <ng-template #content>
			<ng-content></ng-content>
		</ng-template>

		@if (!state.hidden()) {
			<div
				[auUse]="directives.transitionDirective"
				class="au-alert alert alert-{{ state.type() }} {{ state.className() }} {{ state.dismissible() ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
			</div>
		}\`,
            }]
    }], () => [], { type: [{
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
        }], children: [{
            type: Input,
            args: ['auChildren']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [AlertBodyDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
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
        }], slotChildren: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "components/alert/alert.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFbkksT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQTJCNUMsaUNBQStHO0lBQXZFLGdOQUFTLGNBQVcsS0FBQztJQUFrRCxpQkFBUzs7Ozs7O0lBSnpILDhCQUF3QjtJQUN2Qix5R0FBa0Y7SUFDbkYsaUJBQU07SUFDTixvR0FBMkI7Ozs7O0lBRmIsY0FBMkI7SUFBQyxBQUE1Qiw0Q0FBMkIsNEVBQXlDO0lBRWxGLGNBRUM7SUFGRCxpREFFQzs7Ozs7O0lBZUEsa0JBQXlCOzs7O0lBSXpCLDhCQUlDO0lBQ0EsNkZBQW1GO0lBQ3BGLGlCQUFNOzs7SUFKTCxzS0FBNEg7SUFENUgsNkRBQXdDO0lBSTNCLGNBQTRCO0lBQUMsQUFBN0IsaURBQTRCLHdGQUF5Qzs7QUFoRHRGLE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXlCLENBQUEsQ0FBQyxDQUFDO0tBSXZEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQXdCLEVBQUUsT0FBZ0I7UUFDdkUsT0FBTyxJQUFJLENBQUM7SUFD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QUMsTUFBTSxFQUFFLElBQUksRUFBQzs7a0ZBbkh4QixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50LCBUcmFuc2l0aW9uRm59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QmFzZVdpZGdldERpcmVjdGl2ZSwgQ29tcG9uZW50VGVtcGxhdGUsIFNsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWxlcnRDb250ZXh0LCBBbGVydFdpZGdldH0gZnJvbSAnLi9hbGVydC5nZW4nO1xuaW1wb3J0IHtjcmVhdGVBbGVydH0gZnJvbSAnLi9hbGVydC5nZW4nO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7QlNDb250ZXh0dWFsQ2xhc3N9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRCb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFsZXJ0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBBbGVydEJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFsZXJ0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFsZXJ0U3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFsZXJ0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWxlcnRDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgYXVBbGVydFN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWFwaT1cImFwaVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydC1ib2R5XCI+XG5cdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5jaGlsZHJlbigpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0PC9kaXY+XG5cdFx0QGlmIChzdGF0ZS5kaXNtaXNzaWJsZSgpKSB7XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIChjbGljayk9XCJhcGkuY2xvc2UoKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWwoKVwiPjwvYnV0dG9uPlxuXHRcdH1cblx0PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmNsYXNzIEFsZXJ0RGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPEFsZXJ0Q29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBhbGVydERlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKEFsZXJ0RGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdUFsZXJ0XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlICNjb250ZW50PlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRAaWYgKCFzdGF0ZS5oaWRkZW4oKSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwiZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlXCJcblx0XHRcdFx0Y2xhc3M9XCJhdS1hbGVydCBhbGVydCBhbGVydC17eyBzdGF0ZS50eXBlKCkgfX0ge3sgc3RhdGUuY2xhc3NOYW1lKCkgfX0ge3sgc3RhdGUuZGlzbWlzc2libGUoKSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJyB9fVwiXG5cdFx0XHRcdHJvbGU9XCJhbGVydFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnN0cnVjdHVyZSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9YCxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPEFsZXJ0V2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydCwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ3ByaW1hcnknYFxuXHQgKi9cblx0QElucHV0KCdhdVR5cGUnKVxuXHR0eXBlOiBCU0NvbnRleHR1YWxDbGFzcyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzbWlzc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc21pc3NpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYGFuaW1hdGVkT25Jbml0YCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWRlVHJhbnNpdGlvbmBcblx0ICovXG5cdEBJbnB1dCgnYXVUcmFuc2l0aW9uJylcblx0dHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIGFsZXJ0IGlzIHZpc2libGUgdG8gdGhlIHVzZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgb3BlbmluZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIHRoZSBgLm9wZW4oKWAgZnVuY3Rpb24gaXMgY2FsbGVkXG5cdCAqIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkT25Jbml0JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZE9uSW5pdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29udGVudFxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoQWxlcnRCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IEFsZXJ0Qm9keURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29tcG9uZW50XG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCB2aXNpYmlsaXR5IGNoYW5nZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSlcblx0c2xvdENoaWxkcmVuPzogVGVtcGxhdGVSZWY8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZUFsZXJ0LFxuXHRcdFx0XHR3aWRnZXROYW1lOiAnYWxlcnQnLFxuXHRcdFx0XHRkZWZhdWx0Q29uZmlnOiB7XG5cdFx0XHRcdFx0c3RydWN0dXJlOiBhbGVydERlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNsb3RUZW1wbGF0ZXM6ICgpID0+ICh7XG5cdFx0XHRcdFx0Y2hpbGRyZW46IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0c3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRzbG90Q2hpbGRyZW46ICgpID0+IHRoaXMuc2xvdENoaWxkcmVuLFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxufVxuIl19`;export{t as default};
