const t=`import { BaseWidgetDirective, ComponentTemplate, ContentAsSlotDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
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
    i0.ɵɵstyleProp("height", state_r1.height);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", state_r1.percentage, "%");
    i0.ɵɵclassProp("progress-bar-striped", state_r1.striped)("progress-bar-animated", state_r1.animated);
    i0.ɵɵproperty("ngClass", state_r1.type ? "text-bg-" + state_r1.type : undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.children)("auSlotProps", i0.ɵɵpureFunction3(11, _c1, state_r1, api_r2, directives_r3));
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
    static { this.ɵfac = function ProgressbarStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProgressbarStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProgressbarStructureDirective, selectors: [["ng-template", "auProgressbarStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auProgressbarStructure]', standalone: true }]
    }], null, null); })();
export class ProgressbarDefaultSlotsComponent {
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
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.type ? 'text-bg-' + state.type : undefined"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.children" [auSlotProps]="{state, api, directives}"></ng-template>
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
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProgressbarComponent_BaseFactory; return function ProgressbarComponent_Factory(__ngFactoryType__) { return (ɵProgressbarComponent_BaseFactory || (ɵProgressbarComponent_BaseFactory = i0.ɵɵgetInheritedFactory(ProgressbarComponent)))(__ngFactoryType__ || ProgressbarComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["", "auProgressbar", ""]], contentQueries: function ProgressbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ProgressbarStructureDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.state().className);
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], min: [2, "auMin", "min", auNumberAttribute], max: [2, "auMax", "max", auNumberAttribute], value: [2, "auValue", "value", auNumberAttribute], className: [0, "auClassName", "className"], children: [0, "auChildren", "children"], structure: [0, "auStructure", "structure"], height: [0, "auHeight", "height"], animated: [2, "auAnimated", "animated", auBooleanAttribute], striped: [2, "auStriped", "striped", auBooleanAttribute], ariaValueTextFn: [0, "auAriaValueTextFn", "ariaValueTextFn"], type: [0, "auType", "type"] }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c2, ngContentSelectors: _c3, decls: 2, vars: 7, consts: [[3, "auContentAsSlot"], [3, "auSlot", "auSlotProps"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_0_Template, 1, 0, "ng-template", 0)(1, ProgressbarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("auContentAsSlot", ctx.defaultSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auSlot", ctx.state().structure)("auSlotProps", i0.ɵɵpureFunction3(3, _c1, ctx.state(), ctx.api, ctx.directives));
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
		<ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), api, directives}"></ng-template>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0lBa0IzQyxBQURELDhCQUFvRCxhQU9sRDtJQUNBLCtHQUFnRjtJQUVsRixBQURDLGlCQUFNLEVBQ0Q7Ozs7O0lBVmdCLHlDQUE2QjtJQU1qRCxjQUFrQztJQUFsQyxpREFBa0M7SUFGbEMsQUFEQSx3REFBNEMsNENBQ0U7SUFDOUMsZ0ZBQTREO0lBRy9DLGNBQXlCO0lBQUMsQUFBMUIsMENBQXlCLDZFQUF5Qzs7Ozs7SUEwQnBDLGtCQUF5Qjs7O0FBL0N6RSxNQUFNLE9BQU8sNkJBQTZCO0lBRDFDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQixDQUFBLENBQUMsQ0FBQztLQUk3RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFtQyxFQUFFLE9B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UyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztZQU9qQyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFLQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFLRyxTQUFTO2tCQUE5QixLQUFLO21CQUFDLGFBQWE7WUFDMEMsd0JBQXdCO2tCQUFyRixZQUFZO21CQUFDLDZCQUE2QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQU96QyxNQUFNO2tCQUF4QixLQUFLO21CQUFDLFVBQVU7WUFRNEMsUUFBUTtrQkFBcEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0MsT0FBTztrQkFBbEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBYTlCLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBS1QsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFROztrRkF2Rkgsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdENvbnRlbnRBc1Nsb3REaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt0eXBlIFdyaXRhYmxlU2lnbmFsLCB3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UHJvZ3Jlc3NiYXJDb250ZXh0LCBQcm9ncmVzc2JhclByb3BzLCBQcm9ncmVzc2JhcldpZGdldH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5nZW4nO1xuaW1wb3J0IHtjcmVhdGVQcm9ncmVzc2Jhcn0gZnJvbSAnLi9wcm9ncmVzc2Jhci5nZW4nO1xuXG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge0JTQ29udGV4dHVhbENsYXNzfSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nQ2xhc3MsIFNsb3REaXJlY3RpdmUsIFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQcm9ncmVzc2JhclN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWFwaT1cImFwaVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJzdGF0ZS5oZWlnaHRcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdPVwic3RhdGUuc3RyaXBlZFwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZFwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwic3RhdGUudHlwZSA/ICd0ZXh0LWJnLScgKyBzdGF0ZS50eXBlIDogdW5kZWZpbmVkXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLmNoaWxkcmVuXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlITogVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuZXhwb3J0IHR5cGUgUGFydGlhbFByb2dyZXNzYmFyUHJvcHMgPSBQYXJ0aWFsPFByb2dyZXNzYmFyUHJvcHM+O1xuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbFByb2dyZXNzYmFyUHJvcHMgPSB7XG5cdHN0cnVjdHVyZTogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVByb2dyZXNzYmFyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBDb250ZW50QXNTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdUNvbnRlbnRBc1Nsb3RdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCBhcGksIGRpcmVjdGl2ZXN9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFByb2dyZXNzYmFyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHM6IFdyaXRhYmxlU2lnbmFsPFBhcnRpYWxQcm9ncmVzc2JhclByb3BzPiA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1Byb2dyZXNzYmFyJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMDBgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmFsdWUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMYWJlbCBvZiB0aGUgcHJvZ3Jlc3MuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2hpbGRyZW4nKSBjaGlsZHJlbjogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0PjtcblxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgUHJvZ3Jlc3NiYXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogUHJvZ3Jlc3NiYXJTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBzaG93cyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RyaXBlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgc3RyaXBlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0gdmFsdWUgLSBjdXJyZW50IHZhbHVlXG5cdCAqIEBwYXJhbSBtaW5pbXVtIC0gbWluaW11bSB2YWx1ZVxuXHQgKiBAcGFyYW0gbWF4aW11bSAtIG1heGltdW0gdmFsdWVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB1bmRlZmluZWRcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYVZhbHVlVGV4dEZuJykgYXJpYVZhbHVlVGV4dEZuOiAoKHZhbHVlOiBudW1iZXIsIG1pbmltdW06IG51bWJlciwgbWF4aW11bTogbnVtYmVyKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBwcm9ncmVzc2JhciwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICovXG5cdEBJbnB1dCgnYXVUeXBlJykgdHlwZTogQlNDb250ZXh0dWFsQ2xhc3MgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhcixcblx0XHR3aWRnZXROYW1lOiAncHJvZ3Jlc3NiYXInLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5hcmlhRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0Y2hpbGRyZW46IHVuZGVmaW5lZCxcblx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
