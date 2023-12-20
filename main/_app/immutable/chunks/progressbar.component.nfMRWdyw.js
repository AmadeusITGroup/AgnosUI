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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarDefaultSlotsComponent, { className: "ProgressbarDefaultSlotsComponent", filePath: "progressbar/progressbar.component.ts", lineNumber: 45 }); })();
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressbarComponent, { className: "ProgressbarComponent", filePath: "progressbar/progressbar.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGlCQUFpQixHQUNqQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBZ0I5SCw4QkFBb0QsYUFBQTtJQVFsRCwrR0FBd0Y7SUFDekYsaUJBQU0sRUFBQTs7OztJQVRlLHlDQUE2QjtJQU1qRCxlQUFrQztJQUFsQyxpREFBa0M7SUFIbEMsd0RBQTRDLDRDQUFBO0lBRTVDLDRDQUEyQjtJQUdkLGVBQTRCO0lBQTVCLDZDQUE0QixpRUFBQTs7OztJQThCQSxrQkFBeUI7Ozs7QUFuRHZFLE1BQU0sT0FBTywyQkFBMkI7SUFEeEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStCLENBQUEsQ0FBQyxDQUFDO0tBSTdEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQWlDLEVBQUUsT0FBZ0I7UUFDaEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzRGQUpXLDJCQUEyQjtvRUFBM0IsMkJBQTJCOztpRkFBM0IsMkJBQTJCO2NBRHZDLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMs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O1lBQ3NDLHNCQUFzQjtrQkFBakYsWUFBWTttQkFBQywyQkFBMkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLdkMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBTTRDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUtDLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUs5QixlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjs7a0ZBbkRkLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQcm9ncmVzc2JhckNvbnRleHQsIFByb2dyZXNzYmFyUHJvcHMsIFByb2dyZXNzYmFyV2lkZ2V0LCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0QmFzZVdpZGdldERpcmVjdGl2ZSxcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REZWZhdWx0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUHJvZ3Jlc3NiYXIsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQcm9ncmVzc2JhckNvbnRlbnRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFByb2dyZXNzYmFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbTmdDbGFzcywgU2xvdERpcmVjdGl2ZSwgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQcm9ncmVzc2JhckNvbnRlbnQgI2NvbnRlbnQgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBbc3R5bGUuaGVpZ2h0XT1cInN0YXRlLmhlaWdodFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxuXHRcdFx0XHRcdFtjbGFzcy5wcm9ncmVzcy1iYXItc3RyaXBlZF09XCJzdGF0ZS5zdHJpcGVkXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXT1cInN0YXRlLmFuaW1hdGVkXCJcblx0XHRcdFx0XHRbbmdDbGFzc109XCJzdGF0ZS5jbGFzc05hbWVcIlxuXHRcdFx0XHRcdFtzdHlsZS53aWR0aC4lXT1cInN0YXRlLnBlcmNlbnRhZ2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgY29udGVudDogVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RDb250ZW50ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnY29udGVudCcpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFByb2dyZXNzYmFyUHJvcHM+ID0ge1xuXHRzbG90Q29udGVudDogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdENvbnRlbnQsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQcm9ncmVzc2Jhcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdHJvbGU6ICdwcm9ncmVzc2JhcicsXG5cdFx0J1thdHRyLmFyaWEtbGFiZWxdJzogJ3N0YXRlKCkuYXJpYUxhYmVsIHx8IHVuZGVmaW5lZCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3N0YXRlKCkudmFsdWUnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWluXSc6ICdzdGF0ZSgpLm1pbicsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ3N0YXRlKCkubWF4Jyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3N0YXRlKCkuYXJpYVZhbHVlVGV4dCcsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdENvbnRlbnRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFByb2dyZXNzYmFyV2lkZ2V0PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcyB7XG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZhbHVlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdENvbnRlbnQnKSBzbG90Q29udGVudDogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdENvbnRlbnRGcm9tQ29udGVudDogUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0cmlwZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhciwgd2lkZ2V0TmFtZTogJ3Byb2dyZXNzYmFyJywgZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsIGV2ZW50czoge319KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdHNsb3RDb250ZW50OiB0aGlzLnNsb3RDb250ZW50RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
