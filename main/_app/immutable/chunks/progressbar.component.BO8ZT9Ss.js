const t=`import { BaseWidgetDirective, ComponentTemplate, ContentAsSlotDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { createProgressbar } from './progressbar.gen';
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
    i0.ɵɵproperty("auSlot", state_r1.children)("auSlotProps", i0.ɵɵpureFunction2(11, _c1, state_r1, widget_r2));
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
					<ng-template [auSlot]="state.children" [auSlotProps]="{state, widget}"></ng-template>
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
    structure: progressbarDefaultSlotStructure,
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
            children: undefined,
            structure: this.slotStructureFromContent?.templateRef,
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
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], value: [2, "auValue", "value", auNumberAttribute], className: [0, "auClassName", "className"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], height: [0, "auHeight", "height"], animated: [2, "auAnimated", "animated", auBooleanAttribute], striped: [2, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [0, "auAriaValueTextFn", "ariaValueTextFn"], type: [0, "auType", "type"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 6, consts: [[3, "auContentAsSlot"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auContentAsSlot", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().structure)("auSlotProps", i0.ɵɵpureFunction2(3, _c1, ctx.state(), ctx.widget));
        } }, dependencies: [SlotDirective, ContentAsSlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: '[auProgressbar]',
                standalone: true,
                imports: [SlotDirective, ContentAsSlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': 'state().className',
                },
                template: \`
		<ng-template [auContentAsSlot]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), widget}"></ng-template>
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
        }], children: [{
            type: Input,
            args: ['auChildren']
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "components/progressbar/progressbar.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0lBa0IzQyxBQURELDhCQUFvRCxhQU9sRDtJQUNBLCtHQUF1RTtJQUV6RSxBQURDLGlCQUFNLEVBQ0Q7Ozs7SUFWZ0IseUNBQTZCO0lBTWpELGNBQWtDO0lBQWxDLGlEQUFrQztJQUZsQyxBQURBLHdEQUE0Qyw0Q0FDRTtJQUM5QyxnRkFBNEQ7SUFHL0MsY0FBeUI7SUFBQyxBQUExQiwwQ0FBeUIsaUVBQWdDOzs7OztJQTBCM0Isa0JBQXlCOzs7QUEvQ3pFLE1BQU0sT0FBTyw2QkFBNkI7SUFEMUM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStCLENBQUEsQ0FBQyxDQUFDO0tBSTdEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQW1DLEVBQUUsT0FB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RUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFPakMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS0MsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBS0csU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBQzBDLHdCQUF3QjtrQkFBckYsWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFPekMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBUTRDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9DLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQWE5QixlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUtULElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTs7a0ZBdkZILG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRDb250ZW50QXNTbG90RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7dHlwZSBXcml0YWJsZVNpZ25hbCwgd3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Byb2dyZXNzYmFyQ29udGV4dCwgUHJvZ3Jlc3NiYXJQcm9wcywgUHJvZ3Jlc3NiYXJXaWRnZXR9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuZ2VuJztcbmltcG9ydCB7Y3JlYXRlUHJvZ3Jlc3NiYXJ9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuZ2VuJztcblxuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtCU0NvbnRleHR1YWxDbGFzc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVByb2dyZXNzYmFyU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUHJvZ3Jlc3NiYXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0NsYXNzLCBTbG90RGlyZWN0aXZlLCBQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UHJvZ3Jlc3NiYXJTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIFtzdHlsZS5oZWlnaHRdPVwic3RhdGUuaGVpZ2h0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cInByb2dyZXNzLWJhclwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXT1cInN0YXRlLnN0cmlwZWRcIlxuXHRcdFx0XHRcdFtjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdPVwic3RhdGUuYW5pbWF0ZWRcIlxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cInN0YXRlLnR5cGUgPyAndGV4dC1iZy0nICsgc3RhdGUudHlwZSA6IHVuZGVmaW5lZFwiXG5cdFx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwic3RhdGUucGVyY2VudGFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5jaGlsZHJlblwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2JhckRlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmV4cG9ydCB0eXBlIFBhcnRpYWxQcm9ncmVzc2JhclByb3BzID0gUGFydGlhbDxQcm9ncmVzc2JhclByb3BzPjtcbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWxQcm9ncmVzc2JhclByb3BzID0ge1xuXHRzdHJ1Y3R1cmU6IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQcm9ncmVzc2Jhcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgQ29udGVudEFzU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnc3RhdGUoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVDb250ZW50QXNTbG90XT1cImRlZmF1bHRTbG90c1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxQcm9ncmVzc2JhcldpZGdldD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzOiBXcml0YWJsZVNpZ25hbDxQYXJ0aWFsUHJvZ3Jlc3NiYXJQcm9wcz4gPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWwuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQcm9ncmVzc2JhcidgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtaW5pbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZhbHVlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGFiZWwgb2YgdGhlIHByb2dyZXNzLlxuXHQgKi9cblx0QElucHV0KCdhdUNoaWxkcmVuJykgY2hpbGRyZW46IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIFByb2dyZXNzYmFyLlxuXHQgKi9cblx0QElucHV0KCdhdVN0cnVjdHVyZScpIHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUhlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFuaW1hdGVzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgc2hvd3MgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0cmlwZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICogQHBhcmFtIHZhbHVlIC0gY3VycmVudCB2YWx1ZVxuXHQgKiBAcGFyYW0gbWluaW11bSAtIG1pbmltdW0gdmFsdWVcblx0ICogQHBhcmFtIG1heGltdW0gLSBtYXhpbXVtIHZhbHVlXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4gdW5kZWZpbmVkXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHRGbicpIGFyaWFWYWx1ZVRleHRGbjogKCh2YWx1ZTogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIsIG1heGltdW06IG51bWJlcikgPT4gc3RyaW5nIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVHlwZSBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGZvbGxvd2luZyBib290c3RyYXAgdHlwZXMuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHlwZScpIHR5cGU6IEJTQ29udGV4dHVhbENsYXNzIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0ZmFjdG9yeTogY3JlYXRlUHJvZ3Jlc3NiYXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3Byb2dyZXNzYmFyJyxcblx0XHRkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cyxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYXJpYURpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdGNoaWxkcmVuOiB1bmRlZmluZWQsXG5cdFx0XHRzdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
