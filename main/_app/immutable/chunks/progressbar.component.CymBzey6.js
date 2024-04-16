const t=`import { BaseWidgetDirective, ComponentTemplate, SlotDefaultDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { createProgressbar } from './progressbar';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1) => ({ state: a0, widget: a1 });
function ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template(rf, ctx) { }
function ProgressbarDefaultSlotsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProgressbarDefaultSlotsComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const widget_r2 = ctx.widget;
    i0.ɵɵstyleProp("height", state_r1.height);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r1.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r1.striped)("progress-bar-animated", state_r1.animated);
    i0.ɵɵproperty("ngClass", state_r1.type ? "text-bg-" + state_r1.type : undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotDefault)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, state_r1, widget_r2));
} }
const _c2 = ["auProgressbar", ""];
const _c3 = ["*"];
function ProgressbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { }
export class ProgressbarStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(t) { return new (t || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]', standalone: true }]
    }], null, null); })();
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = function ProgressbarDefaultSlotsComponent_Factory(t) { return new (t || ProgressbarDefaultSlotsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarDefaultSlotsComponent, selectors: [["ng-component"]], viewQuery: function ProgressbarDefaultSlotsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auProgressbarStructure", ""], [1, "progress"], [1, "progress-bar", 3, "ngClass"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarDefaultSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarDefaultSlotsComponent_ng_template_0_Template, 3, 14, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [NgClass, SlotDirective, ProgressbarStructureDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarDefaultSlotsComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
                template: \`
		<ng-template auProgressbarStructure #structure let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.type ? 'text-bg-' + state.type : undefined"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 49 }); })();
export const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: progressbarDefaultSlotStructure,
};
export class ProgressbarComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: createProgressbar,
            widgetName: 'progressbar',
            defaultConfig: this.defaultSlots,
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.ariaDirective);
            },
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: undefined,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(t) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(t || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.state().className);
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], min: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMin", "min", auNumberAttribute], max: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auMax", "max", auNumberAttribute], value: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auValue", "value", auNumberAttribute], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], slotDefault: [i0.ɵɵInputFlags.None, "auSlotDefault", "slotDefault"], slotStructure: [i0.ɵɵInputFlags.None, "auSlotStructure", "slotStructure"], height: [i0.ɵɵInputFlags.None, "auHeight", "height"], animated: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auAnimated", "animated", auBooleanAttribute], striped: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [i0.ɵɵInputFlags.None, "auAriaValueTextFn", "ariaValueTextFn"], type: [i0.ɵɵInputFlags.None, "auType", "type"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auSlotDefault"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlotDefault", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().slotStructure)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget));
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
                    '[class]': 'state().className',
                },
                template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
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
        }], slotStructure: [{
            type: Input,
            args: ['auSlotStructure']
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7OztJQWtCM0MsQUFERCw4QkFBb0QsYUFPbEQ7SUFDQSwrR0FBMEU7SUFFNUUsQUFEQyxpQkFBTSxFQUNEOzs7O0lBVmdCLHlDQUE2QjtJQU1qRCxjQUFrQztJQUFsQyxpREFBa0M7SUFGbEMsQUFEQSx3REFBNEMsNENBQ0U7SUFDOUMsZ0ZBQTREO0lBRy9DLGNBQTRCO0lBQUMsQUFBN0IsNkNBQTRCLGlFQUFnQzs7Ozs7SUEwQmhDLGtCQUF5Qjs7O0FBL0N2RSxNQUFNLE9BQU8sNkJBQTZCO0lBRDFDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQixDQUFBLENBQUMsQ0FBQztLQUk3RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFtQyxFQUFFLE9BQWdC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QUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBS2pDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQUVJLFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTtZQUVJLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBQ3NDLHdCQUF3QjtrQkFBckYsWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLekMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBTTRDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtDLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUs5QixlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUtULElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTs7a0ZBekRILG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRhdU51bWJlckF0dHJpYnV0ZSxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge3R5cGUgV3JpdGFibGVTaWduYWwsIHdyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtQcm9ncmVzc2JhckNvbnRleHQsIFByb2dyZXNzYmFyUHJvcHMsIFByb2dyZXNzYmFyV2lkZ2V0fSBmcm9tICcuL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7Y3JlYXRlUHJvZ3Jlc3NiYXJ9IGZyb20gJy4vcHJvZ3Jlc3NiYXInO1xuXG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge0JTQ29udGV4dHVhbENsYXNzfSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nQ2xhc3MsIFNsb3REaXJlY3RpdmUsIFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQcm9ncmVzc2JhclN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJzdGF0ZS5oZWlnaHRcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdPVwic3RhdGUuc3RyaXBlZFwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZFwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwic3RhdGUudHlwZSA/ICd0ZXh0LWJnLScgKyBzdGF0ZS50eXBlIDogdW5kZWZpbmVkXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5leHBvcnQgdHlwZSBQYXJ0aWFsUHJvZ3Jlc3NiYXJQcm9wcyA9IFBhcnRpYWw8UHJvZ3Jlc3NiYXJQcm9wcz47XG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsUHJvZ3Jlc3NiYXJQcm9wcyA9IHtcblx0c2xvdFN0cnVjdHVyZTogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVByb2dyZXNzYmFyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnc3RhdGUoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90RGVmYXVsdF09XCJkZWZhdWx0U2xvdHNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFByb2dyZXNzYmFyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxQcm9ncmVzc2JhclByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZhbHVlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0cmlwZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIHByb2dyZXNzYmFyLCBmb2xsb3dpbmcgYm9vdHN0cmFwIHR5cGVzLlxuXHQgKi9cblx0QElucHV0KCdhdVR5cGUnKSB0eXBlOiBCU0NvbnRleHR1YWxDbGFzcyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVByb2dyZXNzYmFyLFxuXHRcdHdpZGdldE5hbWU6ICdwcm9ncmVzc2JhcicsXG5cdFx0ZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmFyaWFEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RGVmYXVsdDogdW5kZWZpbmVkLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
