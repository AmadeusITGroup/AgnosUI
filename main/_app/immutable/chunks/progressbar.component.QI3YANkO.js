const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createProgressbar, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["content"];
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r2 = ctx.state;
    const widget_r3 = ctx.widget;
    i0.ɵɵstyleProp("height", state_r2.height);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", state_r2.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r2.striped)("progress-bar-animated", state_r2.animated);
    i0.ɵɵproperty("ngClass", state_r2.className);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r2.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, state_r2, widget_r3));
} }
const _c2 = ["auProgressbar", ""];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { }
const _c3 = ["*"];
export class ProgressbarContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarContentDirective_Factory(t) { return new (t || ProgressbarContentDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarContentDirective, selectors: [["ng-template", "auProgressbarContent", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarContentDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
    }], null, null); })();
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(t) { return new (t || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["auProgressbarContent", ""], ["content", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 14, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarContentDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarContentDirective],
                template: \`
		<ng-template auProgressbarContent #content let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.className"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 45 }); })();
export const progressbarDefaultSlotContent = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'content');
const defaultConfig = {
    slotContent: progressbarDefaultSlotContent,
};
export class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({ factory: createProgressbar, widgetName: 'progressbar', defaultConfig: this.defaultSlots, events: {} });
    }
    ngAfterContentChecked() {
        this._widget.patch({
            slotContent: this.slotContentFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(t) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(t || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotContentFromContent = _t.first);
        } }, hostAttrs: ["role", "progressbar"], hostVars: 5, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.state().ariaLabel || undefined)("aria-valuenow", ctx.state().value)("aria-valuemin", ctx.state().min)("aria-valuemax", ctx.state().max)("aria-valuetext", ctx.state().ariaValueText);
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], value: ["auValue", "value", auNumberAttribute], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated", auBooleanAttribute], striped: ["auStriped", "striped", auBooleanAttribute], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auSlotDefault"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("auSlot", ctx.state().slotContent)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget));
        } }, dependencies: [SlotDirective, SlotDefaultDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                standalone: true,
                imports: [SlotDirective, SlotDefaultDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    role: 'progressbar',
                    '[attr.aria-label]': 'state().ariaLabel || undefined',
                    '[attr.aria-valuenow]': 'state().value',
                    '[attr.aria-valuemin]': 'state().min',
                    '[attr.aria-valuemax]': 'state().max',
                    '[attr.aria-valuetext]': 'state().ariaValueText',
                },
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`,
            }]
    }], null, { ariaLabel: [{
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
        }], slotDefault: [{
            type: Input,
            args: ['auSlotDefault']
        }], slotContent: [{
            type: Input,
            args: ['auSlotContent']
        }], slotContentFromContent: [{
            type: ContentChild,
            args: [ProgressbarContentDirective, { static: false }]
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2pCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFnQjlILDhCQUFvRCxhQUFBO0lBUWxELCtHQUF3RjtJQUN6RixpQkFBTSxFQUFBOzs7O0lBVGUseUNBQTZCO0lBTWpELGVBQWtDO0lBQWxDLGlEQUFrQztJQUhsQyx3REFBNEMsNENBQUE7SUFFNUMsNENBQTJCO0lBR2QsZUFBNEI7SUFBNUIsNkNBQTRCLGlFQUFBOzs7O0lBOEJBLGtCQUF5Qjs7OztBQW5EdkUsTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0IsQ0FBQSxDQUFDLENBQUM7S0FJN0Q7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBaUMsRUFBRSxPQUFnQjtRQUNoRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7NEZBSlcsMkJBQTJCO29FQUEzQiwyQkFBMkI7O2lGQUEzQiwyQkFBMkI7Y0FEdkMsU0FBUztlQUFDLEVBQUMsUUFB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QUFLO21CQUFDLGVBQWU7WUFDc0Msc0JBQXNCO2tCQUFqRixZQUFZO21CQUFDLDJCQUEyQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUt2QyxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFNNEMsUUFBUTtrQkFBcEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBS0MsT0FBTztrQkFBbEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBSzlCLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1COztrRkFuRGQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Byb2dyZXNzYmFyQ29udGV4dCwgUHJvZ3Jlc3NiYXJQcm9wcywgUHJvZ3Jlc3NiYXJXaWRnZXQsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVQcm9ncmVzc2Jhcixcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVByb2dyZXNzYmFyQ29udGVudF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUHJvZ3Jlc3NiYXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0NsYXNzLCBTbG90RGlyZWN0aXZlLCBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVByb2dyZXNzYmFyQ29udGVudCAjY29udGVudCBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIFtzdHlsZS5oZWlnaHRdPVwic3RhdGUuaGVpZ2h0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cInByb2dyZXNzLWJhclwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXT1cInN0YXRlLnN0cmlwZWRcIlxuXHRcdFx0XHRcdFtjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdPVwic3RhdGUuYW5pbWF0ZWRcIlxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cInN0YXRlLmNsYXNzTmFtZVwiXG5cdFx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwic3RhdGUucGVyY2VudGFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RGVmYXVsdFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnY29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdENvbnRlbnQgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQsICdjb250ZW50Jyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8UHJvZ3Jlc3NiYXJQcm9wcz4gPSB7XG5cdHNsb3RDb250ZW50OiBwcm9ncmVzc2JhckRlZmF1bHRTbG90Q29udGVudCxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVByb2dyZXNzYmFyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0cm9sZTogJ3Byb2dyZXNzYmFyJyxcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUoKS5hcmlhTGFiZWwgfHwgdW5kZWZpbmVkJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnc3RhdGUoKS52YWx1ZScsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtaW5dJzogJ3N0YXRlKCkubWluJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnc3RhdGUoKS5tYXgnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAnc3RhdGUoKS5hcmlhVmFsdWVUZXh0Jyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90Q29udGVudFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8UHJvZ3Jlc3NiYXJXaWRnZXQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzIHtcblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWluaW11bSB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1pbicsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KSBtaW46IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmFsdWUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cdEBJbnB1dCgnYXVTbG90Q29udGVudCcpIHNsb3RDb250ZW50OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90Q29udGVudEZyb21Db250ZW50OiBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbmltYXRlcyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqIFRha2VzIGVmZmVjdCBvbmx5IGZvciBicm93c2VycyBzdXBwb3J0aW5nIENTUzMgYW5pbWF0aW9ucywgYW5kIGlmIGBzdHJpcGVkYCBpcyBgdHJ1ZWAuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgc2hvd3MgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RyaXBlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc3RyaXBlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHRGbicpIGFyaWFWYWx1ZVRleHRGbjogKCh2YWx1ZTogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIsIG1heGltdW06IG51bWJlcikgPT4gc3RyaW5nIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe2ZhY3Rvcnk6IGNyZWF0ZVByb2dyZXNzYmFyLCB3aWRnZXROYW1lOiAncHJvZ3Jlc3NiYXInLCBkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cywgZXZlbnRzOiB7fX0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0c2xvdENvbnRlbnQ6IHRoaXMuc2xvdENvbnRlbnRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
