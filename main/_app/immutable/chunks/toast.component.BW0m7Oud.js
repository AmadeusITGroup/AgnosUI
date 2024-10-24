const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, auNumberAttribute, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createToast } from './toast.gen';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template(rf, ctx) { }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 6);
} if (rf & 2) {
    const directives_r1 = i0.ɵɵnextContext(2).directives;
    i0.ɵɵproperty("auUse", directives_r1.closeButtonDirective);
} }
function ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 4)(2, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 1, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const state_r3 = ctx_r1.state;
    const api_r4 = ctx_r1.api;
    const directives_r1 = ctx_r1.directives;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.header())("auSlotProps", i0.ɵɵpureFunction3(3, _c1, state_r3, api_r4, directives_r1));
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
    i0.ɵɵtemplate(0, ToastDefaultSlotsComponent_ng_template_0_Conditional_0_Template, 3, 7, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ToastDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ToastDefaultSlotsComponent_ng_template_0_Conditional_3_Template, 1, 1, "button", 5);
} if (rf & 2) {
    const state_r3 = ctx.state;
    const api_r4 = ctx.api;
    const directives_r1 = ctx.directives;
    i0.ɵɵconditional(state_r3.header() ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("auSlot", state_r3.children())("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r3, api_r4, directives_r1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.dismissible() && !state_r3.header() ? 3 : -1);
} }
const _c2 = ["content"];
const _c3 = ["auToast", ""];
const _c4 = ["*"];
const _c5 = (a0, a1, a2) => [a0, a1, a2];
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
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(7, _c5, ctx_r0.directives.autoHideDirective, ctx_r0.directives.transitionDirective, ctx_r0.directives.bodyDirective));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r0.state.structure())("auSlotProps", i0.ɵɵpureFunction3(11, _c1, ctx_r0.state, ctx_r0.api, ctx_r0.directives));
} }
export class ToastBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastBodyDirective)(); }; }
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
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastStructureDirective)(); }; }
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
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ToastHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastHeaderDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToastHeaderDirective, selectors: [["ng-template", "auToastHeader", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auToastHeader]', standalone: true }]
    }], null, null); })();
class ToastDefaultSlotsComponent {
    static { this.ɵfac = function ToastDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ToastDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auToastStructure", ""], [1, "toast-header"], [1, "toast-body"], [3, "auSlot", "auSlotProps"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "auUse"], [1, "btn-close", "me-0", "ms-auto", 3, "auUse"]], template: function ToastDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ToastDefaultSlotsComponent_ng_template_0_Template, 4, 8, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective, ToastStructureDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, ToastStructureDirective, UseDirective],
                template: \` <ng-template auToastStructure #structure let-state="state" let-api="api" let-directives="directives">
		@if (state.header()) {
			<div class="toast-header">
				<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}"></ng-template>
				@if (state.dismissible()) {
					<button class="btn-close me-0 ms-auto" [auUse]="directives.closeButtonDirective"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
		</div>
		@if (state.dismissible() && !state.header()) {
			<button class="btn-close btn-close-white me-2 m-auto" [auUse]="directives.closeButtonDirective"></button>
		}
	</ng-template>\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 72 }); })();
export const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');
export class ToastComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createToast,
            widgetName: 'toast',
            defaultConfig: {
                structure: toastDefaultSlotStructure,
            },
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            slotTemplates: () => ({
                children: this.slotDefaultFromContent?.templateRef,
                structure: this.slotStructureFromContent?.templateRef,
                header: this.slotHeaderFromContent?.templateRef,
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
    static { this.ɵfac = function ToastComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["", "auToast", ""]], contentQueries: function ToastComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ToastBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ToastStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ToastHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotHeaderFromContent = _t.first);
        } }, viewQuery: function ToastComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotChildren = _t.first);
        } }, inputs: { dismissible: [2, "auDismissible", "dismissible", auBooleanAttribute], transition: [0, "auTransition", "transition"], visible: [2, "auVisible", "visible", auBooleanAttribute], animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], autoHide: [2, "auAutoHide", "autoHide", auBooleanAttribute], delay: [2, "auDelay", "delay", auNumberAttribute], ariaCloseButtonLabel: [0, "auAriaCloseButtonLabel", "ariaCloseButtonLabel"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], header: [0, "auHeader", "header"], className: [0, "auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 1, consts: [["content", ""], [1, "toast", 3, "d-flex", "toast-dismissible", "auUseMulti"], [1, "toast", 3, "auUseMulti"], [3, "auSlot", "auSlotProps"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ToastComponent_Conditional_2_Template, 2, 15, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.state.hidden() ? 2 : -1);
        } }, dependencies: [SlotDirective, UseMultiDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: '[auToast]',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [SlotDirective, UseMultiDirective],
                template: \` <ng-template #content>
			<ng-content></ng-content>
		</ng-template>
		@if (!state.hidden()) {
			<div
				class="toast"
				[class.d-flex]="!state.header()"
				[class.toast-dismissible]="state.dismissible()"
				[auUseMulti]="[directives.autoHideDirective, directives.transitionDirective, directives.bodyDirective]"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
			</div>
		}\`,
            }]
    }], () => [], { dismissible: [{
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
        }], children: [{
            type: Input,
            args: ['auChildren']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [ToastBodyDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ToastStructureDirective, { static: false }]
        }], header: [{
            type: Input,
            args: ['auHeader']
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
        }], slotChildren: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 97 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDakIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUcvQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7SUFrQ25DLDRCQUEwRjs7O0lBQW5ELDBEQUF5Qzs7O0lBSGxGLDhCQUEwQjtJQUV6QixBQURBLHVIQUFnRixxR0FDckQ7SUFHNUIsaUJBQU07Ozs7OztJQUpRLGNBQXlCO0lBQUMsQUFBMUIsMENBQXlCLDRFQUF5QztJQUMvRSxjQUVDO0lBRkQsaURBRUM7Ozs7SUFPRiw0QkFBeUc7OztJQUFuRCwwREFBeUM7OztJQVpoRyxpR0FBc0I7SUFRdEIsOEJBQXdCO0lBQ3ZCLHlHQUFrRjtJQUNuRixpQkFBTTtJQUNOLG9HQUE4Qzs7Ozs7SUFYOUMsNENBT0M7SUFFYSxlQUEyQjtJQUFDLEFBQTVCLDRDQUEyQiw0RUFBeUM7SUFFbEYsY0FFQztJQUZELHVFQUVDOzs7Ozs7O0lBZUEsa0JBQXlCOzs7O0lBR3pCLDhCQUtDO0lBQ0EsNkZBQW1GO0lBQ3BGLGlCQUFNOzs7SUFKTCxBQURBLGdEQUFnQyxpREFDZTtJQUMvQyxvS0FBdUc7SUFFMUYs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bSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgdHlwZSB7VG9hc3RDb250ZXh0LCBUb2FzdFdpZGdldH0gZnJvbSAnLi90b2FzdC5nZW4nO1xuaW1wb3J0IHtjcmVhdGVUb2FzdH0gZnJvbSAnLi90b2FzdC5nZW4nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1VG9hc3RCb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0Qm9keURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogVG9hc3RCb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUb2FzdENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUb2FzdFN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFRvYXN0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0SGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRvYXN0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUb2FzdEhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBhdVRvYXN0U3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0QGlmIChzdGF0ZS5oZWFkZXIoKSkge1xuXHRcdFx0PGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5oZWFkZXIoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpc21pc3NpYmxlKCkpIHtcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlIG1lLTAgbXMtYXV0b1wiIFthdVVzZV09XCJkaXJlY3RpdmVzLmNsb3NlQnV0dG9uRGlyZWN0aXZlXCI+PC9idXR0b24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW4oKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PlxuXHRcdEBpZiAoc3RhdGUuZGlzbWlzc2libGUoKSAmJiAhc3RhdGUuaGVhZGVyKCkpIHtcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tY2xvc2UgYnRuLWNsb3NlLXdoaXRlIG1lLTIgbS1hdXRvXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMuY2xvc2VCdXR0b25EaXJlY3RpdmVcIj48L2J1dHRvbj5cblx0XHR9XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5jbGFzcyBUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgdG9hc3REZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVUb2FzdF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFVzZU11bHRpRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlICNjb250ZW50PlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0QGlmICghc3RhdGUuaGlkZGVuKCkpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJ0b2FzdFwiXG5cdFx0XHRcdFtjbGFzcy5kLWZsZXhdPVwiIXN0YXRlLmhlYWRlcigpXCJcblx0XHRcdFx0W2NsYXNzLnRvYXN0LWRpc21pc3NpYmxlXT1cInN0YXRlLmRpc21pc3NpYmxlKClcIlxuXHRcdFx0XHRbYXVVc2VNdWx0aV09XCJbZGlyZWN0aXZlcy5hdXRvSGlkZURpcmVjdGl2ZSwgZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlLCBkaXJlY3RpdmVzLmJvZHlEaXJlY3RpdmVdXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc3RydWN0dXJlKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdH1gLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8VG9hc3RXaWRnZXQ+IHtcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkIG9mIHRoZSBldmVudCB3aXRoIHRoZSAoY2xvc2UpIG91dHB1dC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc21pc3NpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRkaXNtaXNzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGBhbmltYXRlZE9uSW5pdGAsIHRoZSBhbmltYXRpb24gY2FuIGJlIG9wdGlvbmFsbHkgc2tpcHBlZCBkdXJpbmcgdGhlIHNob3dpbmcgcHJvY2Vzcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFkZVRyYW5zaXRpb25gXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHJhbnNpdGlvbicpXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHR2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiB0aGUgYC5vcGVuKClgIGZ1bmN0aW9uIGlzIGNhbGxlZFxuXHQgKiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZE9uSW5pdCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWRPbkluaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpLFxuXHQgKiB2aWEgdGhlIGAuY2xvc2UoKWAgZnVuY3Rpb24gb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBhdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSB0b2FzdCBhZnRlciB0aGUgZGVsYXkuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBdXRvSGlkZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0YXV0b0hpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgaGlkaW5nIHRoZSB0b2FzdC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgNTAwMGBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURlbGF5JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdGRlbGF5OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdDbG9zZSdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUZW1wbGF0ZSBmb3IgdGhlIHRvYXN0IGNvbnRlbnRcblx0ICovXG5cdEBJbnB1dCgnYXVDaGlsZHJlbicpIGNoaWxkcmVuOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRvYXN0Qm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBUb2FzdEJvZHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIHRvYXN0IGNvbXBvbmVudFxuXHQgKi9cblx0QElucHV0KCdhdVN0cnVjdHVyZScpIHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWFkZXIgdGVtcGxhdGUgZm9yIHRoZSB0b2FzdCBjb21wb25lbnRcblx0ICovXG5cdEBJbnB1dCgnYXVIZWFkZXInKSBoZWFkZXI6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVG9hc3RIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEhlYWRlckZyb21Db250ZW50OiBUb2FzdEhlYWRlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmlzaWJsZUNoYW5nZScpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QFZpZXdDaGlsZCgnY29udGVudCcsIHtzdGF0aWM6IHRydWV9KVxuXHRzbG90Q2hpbGRyZW4/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRcdFx0ZmFjdG9yeTogY3JlYXRlVG9hc3QsXG5cdFx0XHRcdHdpZGdldE5hbWU6ICd0b2FzdCcsXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRvYXN0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRcdFx0b25IaWRkZW46ICgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2xvdFRlbXBsYXRlczogKCkgPT4gKHtcblx0XHRcdFx0XHRjaGlsZHJlbjogdGhpcy5zbG90RGVmYXVsdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRoZWFkZXI6IHRoaXMuc2xvdEhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0fSksXG5cdFx0XHRcdHNsb3RDaGlsZHJlbjogKCkgPT4gdGhpcy5zbG90Q2hpbGRyZW4sXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG59XG4iXX0=`;export{t as default};
