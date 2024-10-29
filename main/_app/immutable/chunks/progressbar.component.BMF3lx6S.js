const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { createProgressbar } from './progressbar.gen';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
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
    i0.ɵɵproperty("auSlot", state_r1.children())("auSlotProps", i0.ɵɵpureFunction3(11, _c1, state_r1, api_r2, directives_r3));
} }
const _c2 = ["content"];
const _c3 = ["auProgressbar", ""];
const _c4 = ["*"];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_2_Template(rf, ctx) { }
/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
export class ProgressbarBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarBodyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarBodyDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarBodyDirective, selectors: [["ng-template", "auProgressbarBody", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarBodyDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarBody]', standalone: true }]
    }], null, null); })();
/**
 * Directive to define the structure of a progress bar.
 *
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
export class ProgressbarStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]', standalone: true }]
    }], null, null); })();
class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auProgressbarStructure", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 15, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
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
					<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 63 }); })();
/**
 * Represents the default slot structure for the progress bar component.
 */
export const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');
/**
 * ProgressbarComponent is a UI component that extends the BaseWidgetDirective
 * to create a customizable progress bar widget. It provides various inputs
 * to configure the appearance and behavior of the progress bar.
 *
 */
export class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createProgressbar,
            widgetName: 'progressbar',
            defaultConfig: {
                structure: progressbarDefaultSlotStructure,
            },
            afterInit: (widget) => useDirectiveForHost(widget.directives.ariaDirective),
            slotTemplates: () => ({
                structure: this.slotStructureFromContent?.templateRef,
                children: this.slotDefaultFromContent?.templateRef,
            }),
            slotChildren: () => this.slotChildren,
        }));
    }
    static { this.ɵfac = function ProgressbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarBodyDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotDefaultFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, viewQuery: function ProgressbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotChildren = _t.first);
        } }, hostVars: 2, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.state.className());
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], value: [2, "auValue", "value", auNumberAttribute], className: [0, "auClassName", "className"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], height: [0, "auHeight", "height"], animated: [2, "auAnimated", "animated", auBooleanAttribute], striped: [2, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [0, "auAriaValueTextFn", "ariaValueTextFn"], type: [0, "auType", "type"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c3, ngContentSelectors: _c4, decls: 3, vars: 6, consts: [["content", ""], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ProgressbarComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c1, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                standalone: true,
                imports: [SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': 'state.className()',
                },
                template: \`
		<ng-template #content><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
	\`,
            }]
    }], () => [], { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], min: [{
            type: Input,
            args: [{ alias: 'auMin', transform: auNumberAttribute }]
        }], max: [{
            type: Input,
            args: [{ alias: 'auMax', transform: auNumberAttribute }]
        }], value: [{
            type: Input,
            args: [{ alias: 'auValue', transform: auNumberAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], children: [{
            type: Input,
            args: ['auChildren']
        }], slotDefaultFromContent: [{
            type: ContentChild,
            args: [ProgressbarBodyDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [ProgressbarStructureDirective, { static: false }]
        }], height: [{
            type: Input,
            args: ['auHeight']
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], striped: [{
            type: Input,
            args: [{ alias: 'auStriped', transform: auBooleanAttribute }]
        }], ariaValueTextFn: [{
            type: Input,
            args: ['auAriaValueTextFn']
        }], type: [{
            type: Input,
            args: ['auType']
        }], slotChildren: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 91 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0lBbUMzQyxBQURELDhCQUFzRCxhQU9wRDtJQUNBLCtHQUFrRjtJQUVwRixBQURDLGlCQUFNLEVBQ0Q7Ozs7O0lBVmdCLDJDQUErQjtJQU1uRCxjQUFvQztJQUFwQyxtREFBb0M7SUFGcEMsQUFEQSwwREFBOEMsOENBQ0U7SUFDaEQsb0ZBQWdFO0lBR25ELGNBQTJCO0lBQUMsQUFBNUIsNENBQTJCLDZFQUF5Qzs7Ozs7O0lBOEI5RCxrQkFBeUI7OztBQXJFakQ7OztHQUdHO0FBRUgsTUFBTSxPQUFPLHdCQUF3QjtJQURyQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0IsQ0FBQSxDQUFDLENBQUM7S0FJN0Q7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBbUMsRUFBRSxPQUFnQjtRQUNsRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7eUhBSlcsd0JB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QUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPRSxHQUFHO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPSSxLQUFLO2tCQUE3RCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPakMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS0MsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRW5CLHNCQUFzQjtrQkFEckIsWUFBWTttQkFBQyx3QkFBd0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFNakMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBQzBDLHdCQUF3QjtrQkFBckYsWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFPekMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBUTRDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9DLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQWE5QixlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUtULElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUdmLFlBQVk7a0JBRFgsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkF6RnhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Byb2dyZXNzYmFyQ29udGV4dCwgUHJvZ3Jlc3NiYXJXaWRnZXR9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuZ2VuJztcbmltcG9ydCB7Y3JlYXRlUHJvZ3Jlc3NiYXJ9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuZ2VuJztcblxuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtCU0NvbnRleHR1YWxDbGFzc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL3R5cGVzJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdGhlIHByb2dyZXNzIGJhciBjb250ZXh0LlxuICogVGhpcyBkaXJlY3RpdmUgcHJvdmlkZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRoZSB7QGxpbmsgUHJvZ3Jlc3NiYXJDb250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVByb2dyZXNzYmFyQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIGRlZmluZSB0aGUgc3RydWN0dXJlIG9mIGEgcHJvZ3Jlc3MgYmFyLlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHByb3ZpZGVzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciB0aGUge0BsaW5rIFByb2dyZXNzYmFyQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQcm9ncmVzc2JhclN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFByb2dyZXNzYmFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbTmdDbGFzcywgU2xvdERpcmVjdGl2ZSwgUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVByb2dyZXNzYmFyU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtYXBpPVwiYXBpXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBbc3R5bGUuaGVpZ2h0XT1cInN0YXRlLmhlaWdodCgpXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cInByb2dyZXNzLWJhclwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXT1cInN0YXRlLnN0cmlwZWQoKVwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZCgpXCJcblx0XHRcdFx0XHRbbmdDbGFzc109XCJzdGF0ZS50eXBlKCkgPyAndGV4dC1iZy0nICsgc3RhdGUudHlwZSgpIDogdW5kZWZpbmVkXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlKClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuY2hpbGRyZW4oKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlITogVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBkZWZhdWx0IHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgcHJvZ3Jlc3MgYmFyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD4gPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuLyoqXG4gKiBQcm9ncmVzc2JhckNvbXBvbmVudCBpcyBhIFVJIGNvbXBvbmVudCB0aGF0IGV4dGVuZHMgdGhlIEJhc2VXaWRnZXREaXJlY3RpdmVcbiAqIHRvIGNyZWF0ZSBhIGN1c3RvbWl6YWJsZSBwcm9ncmVzcyBiYXIgd2lkZ2V0LiBJdCBwcm92aWRlcyB2YXJpb3VzIGlucHV0c1xuICogdG8gY29uZmlndXJlIHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICpcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UHJvZ3Jlc3NiYXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ3N0YXRlLmNsYXNzTmFtZSgpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgI2NvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc3RydWN0dXJlKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFByb2dyZXNzYmFyV2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1Byb2dyZXNzYmFyJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmFsdWUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMYWJlbCBvZiB0aGUgcHJvZ3Jlc3MuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2hpbGRyZW4nKSBjaGlsZHJlbjogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhckJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogUHJvZ3Jlc3NiYXJCb2R5RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBHbG9iYWwgdGVtcGxhdGUgZm9yIHRoZSBQcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCgnYXVTdHJ1Y3R1cmUnKSBzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSGVpZ2h0IG9mIHRoZSBwcm9ncmVzc2JhciwgY2FuIGJlIGFueSB2YWxpZCBjc3MgaGVpZ2h0IHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVIZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbmltYXRlcyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqIFRha2VzIGVmZmVjdCBvbmx5IGZvciBicm93c2VycyBzdXBwb3J0aW5nIENTUzMgYW5pbWF0aW9ucywgYW5kIGlmIGBzdHJpcGVkYCBpcyBgdHJ1ZWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVTdHJpcGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBzdHJpcGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUuXG5cdCAqIEBwYXJhbSB2YWx1ZSAtIGN1cnJlbnQgdmFsdWVcblx0ICogQHBhcmFtIG1pbmltdW0gLSBtaW5pbXVtIHZhbHVlXG5cdCAqIEBwYXJhbSBtYXhpbXVtIC0gbWF4aW11bSB2YWx1ZVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHVuZGVmaW5lZFxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIHByb2dyZXNzYmFyLCBmb2xsb3dpbmcgYm9vdHN0cmFwIHR5cGVzLlxuXHQgKi9cblx0QElucHV0KCdhdVR5cGUnKSB0eXBlOiBCU0NvbnRleHR1YWxDbGFzcyB8IHVuZGVmaW5lZDtcblxuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pXG5cdHNsb3RDaGlsZHJlbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhcixcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ3Byb2dyZXNzYmFyJyxcblx0XHRcdFx0ZGVmYXVsdENvbmZpZzoge1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YWZ0ZXJJbml0OiAod2lkZ2V0KSA9PiB1c2VEaXJlY3RpdmVGb3JIb3N0KHdpZGdldC5kaXJlY3RpdmVzLmFyaWFEaXJlY3RpdmUpLFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PiAoe1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0c2xvdENoaWxkcmVuOiAoKSA9PiB0aGlzLnNsb3RDaGlsZHJlbixcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
