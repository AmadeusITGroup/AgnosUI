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
/**
 * Directive to represent the body of a toast notification.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
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
/**
 * Directive to define the structure of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
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
/**
 * Directive representing the header of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastDefaultSlotsComponent, { className: "ToastDefaultSlotsComponent", filePath: "components/toast/toast.component.ts", lineNumber: 84 }); })();
/**
 * Represents the default slot structure for the toast component.
 */
export const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');
/**
 * The \`ToastComponent\` is a UI component that displays a toast notification.
 * It extends the \`BaseWidgetDirective\` and provides various configurable properties
 * and events to control the behavior and appearance of the toast.
 */
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "components/toast/toast.component.ts", lineNumber: 117 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDakIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUcvQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7SUE4Q25DLDRCQUEwRjs7O0lBQW5ELDBEQUF5Qzs7O0lBSGxGLDhCQUEwQjtJQUV6QixBQURBLHVIQUFnRixxR0FDckQ7SUFHNUIsaUJBQU07Ozs7OztJQUpRLGNBQXlCO0lBQUMsQUFBMUIsMENBQXlCLDRFQUF5QztJQUMvRSxjQUVDO0lBRkQsaURBRUM7Ozs7SUFPRiw0QkFBeUc7OztJQUFuRCwwREFBeUM7OztJQVpoRyxpR0FBc0I7SUFRdEIsOEJBQXdCO0lBQ3ZCLHlHQUFrRjtJQUNuRixpQkFBTTtJQUNOLG9HQUE4Qzs7Ozs7SUFYOUMsNENBT0M7SUFFYSxlQUEyQjtJQUFDLEFBQTVCLDRDQUEyQiw0RUFBeUM7SUFFbEYsY0FFQztJQUZELHVFQUVDOzs7Ozs7O0lBdUJBLGtCQUF5Qjs7OztJQUd6Qiw4QkFLQztJQUNBLDZGQUFtRjtJQUNwRixpQkFBTTs7O0lBSkwsQUFEQSxnREFBZ0MsaURBQ2U7SUFDL0Msb0tBQXVHO0lBRTFG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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRVc2VNdWx0aURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB0eXBlIHtUb2FzdENvbnRleHQsIFRvYXN0V2lkZ2V0fSBmcm9tICcuL3RvYXN0Lmdlbic7XG5pbXBvcnQge2NyZWF0ZVRvYXN0fSBmcm9tICcuL3RvYXN0Lmdlbic7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHJlcHJlc2VudCB0aGUgYm9keSBvZiBhIHRvYXN0IG5vdGlmaWNhdGlvbi5cbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgVG9hc3RDb250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0Qm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUb2FzdEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VG9hc3RDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFRvYXN0Qm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBkZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiBhIHRvYXN0IGNvbXBvbmVudC5cbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgVG9hc3RDb250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0U3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRvYXN0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUb2FzdFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSByZXByZXNlbnRpbmcgdGhlIGhlYWRlciBvZiBhIHRvYXN0IGNvbXBvbmVudC5cbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgVG9hc3RDb250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRvYXN0SGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRvYXN0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUb2FzdEhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVG9hc3RDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUsIFVzZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBhdVRvYXN0U3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0QGlmIChzdGF0ZS5oZWFkZXIoKSkge1xuXHRcdFx0PGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5oZWFkZXIoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRAaWYgKHN0YXRlLmRpc21pc3NpYmxlKCkpIHtcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlIG1lLTAgbXMtYXV0b1wiIFthdVVzZV09XCJkaXJlY3RpdmVzLmNsb3NlQnV0dG9uRGlyZWN0aXZlXCI+PC9idXR0b24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW4oKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PlxuXHRcdEBpZiAoc3RhdGUuZGlzbWlzc2libGUoKSAmJiAhc3RhdGUuaGVhZGVyKCkpIHtcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tY2xvc2UgYnRuLWNsb3NlLXdoaXRlIG1lLTIgbS1hdXRvXCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMuY2xvc2VCdXR0b25EaXJlY3RpdmVcIj48L2J1dHRvbj5cblx0XHR9XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5jbGFzcyBUb2FzdERlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmUhOiBUZW1wbGF0ZVJlZjxUb2FzdENvbnRleHQ+O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGRlZmF1bHQgc2xvdCBzdHJ1Y3R1cmUgZm9yIHRoZSB0b2FzdCBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCB0b2FzdERlZmF1bHRTbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFRvYXN0RGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbi8qKlxuICogVGhlIGBUb2FzdENvbXBvbmVudGAgaXMgYSBVSSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIHRvYXN0IG5vdGlmaWNhdGlvbi5cbiAqIEl0IGV4dGVuZHMgdGhlIGBCYXNlV2lkZ2V0RGlyZWN0aXZlYCBhbmQgcHJvdmlkZXMgdmFyaW91cyBjb25maWd1cmFibGUgcHJvcGVydGllc1xuICogYW5kIGV2ZW50cyB0byBjb250cm9sIHRoZSBiZWhhdmlvciBhbmQgYXBwZWFyYW5jZSBvZiB0aGUgdG9hc3QuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVRvYXN0XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgVXNlTXVsdGlEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRAaWYgKCFzdGF0ZS5oaWRkZW4oKSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cInRvYXN0XCJcblx0XHRcdFx0W2NsYXNzLmQtZmxleF09XCIhc3RhdGUuaGVhZGVyKClcIlxuXHRcdFx0XHRbY2xhc3MudG9hc3QtZGlzbWlzc2libGVdPVwic3RhdGUuZGlzbWlzc2libGUoKVwiXG5cdFx0XHRcdFthdVVzZU11bHRpXT1cIltkaXJlY3RpdmVzLmF1dG9IaWRlRGlyZWN0aXZlLCBkaXJlY3RpdmVzLnRyYW5zaXRpb25EaXJlY3RpdmUsIGRpcmVjdGl2ZXMuYm9keURpcmVjdGl2ZV1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zdHJ1Y3R1cmUoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0fWAsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxUb2FzdFdpZGdldD4ge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzbWlzc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc21pc3NpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYGFuaW1hdGVkT25Jbml0YCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWRlVHJhbnNpdGlvbmBcblx0ICovXG5cdEBJbnB1dCgnYXVUcmFuc2l0aW9uJylcblx0dHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIGFsZXJ0IGlzIHZpc2libGUgdG8gdGhlIHVzZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZpc2libGUnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgb3BlbmluZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIHRoZSBgLm9wZW4oKWAgZnVuY3Rpb24gaXMgY2FsbGVkXG5cdCAqIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkT25Jbml0JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZE9uSW5pdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGF1dG9tYXRpY2FsbHkgaGlkZXMgdGhlIHRvYXN0IGFmdGVyIHRoZSBkZWxheS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUF1dG9IaWRlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRhdXRvSGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBoaWRpbmcgdGhlIHRvYXN0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGA1MDAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGVsYXknLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0ZGVsYXk6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29udGVudFxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVG9hc3RCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IFRvYXN0Qm9keURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlYWRlciB0ZW1wbGF0ZSBmb3IgdGhlIHRvYXN0IGNvbXBvbmVudFxuXHQgKi9cblx0QElucHV0KCdhdUhlYWRlcicpIGhlYWRlcjogU2xvdENvbnRlbnQ8VG9hc3RDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChUb2FzdEhlYWRlckRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90SGVhZGVyRnJvbUNvbnRlbnQ6IFRvYXN0SGVhZGVyRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgdmlzaWJpbGl0eSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pXG5cdHNsb3RDaGlsZHJlbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVUb2FzdCxcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ3RvYXN0Jyxcblx0XHRcdFx0ZGVmYXVsdENvbmZpZzoge1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdG9hc3REZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PiAoe1xuXHRcdFx0XHRcdGNoaWxkcmVuOiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0c2xvdENoaWxkcmVuOiAoKSA9PiB0aGlzLnNsb3RDaGlsZHJlbixcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
