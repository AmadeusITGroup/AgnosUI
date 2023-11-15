const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, callWidgetFactory, createProgressbar, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class ProgressbarContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ProgressbarContentDirective, isStandalone: true, selector: "ng-template[auProgressbarContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
        }] });
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ProgressbarDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: \`
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
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: ProgressbarContentDirective, selector: "ng-template[auProgressbarContent]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarDefaultSlotsComponent, decorators: [{
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
        }], propDecorators: { content: [{
                type: ViewChild,
                args: ['content', { static: true }]
            }] } });
export const progressbarDefaultSlotContent = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'content');
const defaultConfig = {
    slotContent: progressbarDefaultSlotContent,
};
export class ProgressbarComponent {
    constructor() {
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({ factory: createProgressbar, widgetName: 'progressbar', defaultConfig: this.defaultSlots, events: {} });
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state = toAngularSignal(this._widget.state$);
    }
    ngAfterContentChecked() {
        this._widget.patch({
            slotContent: this.slotContentFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ProgressbarComponent, isStandalone: true, selector: "[auProgressbar]", inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min"], max: ["auMax", "max"], value: ["auValue", "value"], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated"], striped: ["auStriped", "striped"], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, host: { attributes: { "role": "progressbar" }, properties: { "attr.aria-label": "state().ariaLabel || undefined", "attr.aria-valuenow": "state().value", "attr.aria-valuemin": "state().min", "attr.aria-valuemax": "state().max", "attr.aria-valuetext": "state().ariaValueText" } }, queries: [{ propertyName: "slotContentFromContent", first: true, predicate: ProgressbarContentDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ProgressbarComponent, decorators: [{
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
        }], propDecorators: { ariaLabel: [{
                type: Input,
                args: ['auAriaLabel']
            }], min: [{
                type: Input,
                args: ['auMin']
            }], max: [{
                type: Input,
                args: ['auMax']
            }], value: [{
                type: Input,
                args: ['auValue']
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
                args: ['auAnimated']
            }], striped: [{
                type: Input,
                args: ['auStriped']
            }], ariaValueTextFn: [{
                type: Input,
                args: ['auAriaValueTextFn']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUdqSSxNQUFNLE9BQU8sMkJBQTJCO0lBRHhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQixDQUFBLENBQUMsQ0FBQztLQUk3RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFpQyxFQUFFLE9BQWdCO1FBQ2hGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVywyQkFBMkI7a0dBQTNCLDJCQUEyQjs7MkZBQTNCLDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQTRCNUUsTUFBTSxPQUFPLGdDQUFnQzs4R0FBaEMsZ0NBQWdDO2tHQUFoQyxnQ0FBZ0MsMExBaEJsQzs7Ozs7Ozs7Ozs7Ozs7RUFjVCw0REFmUyxPQUFPLG9GQUFFLGFBQWEsd0ZBVnBCLDJCQUEyQjs7MkZBMkIzQixnQ0FBZ0M7a0JBcEI1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QUtVLGVBQWU7c0JBQTFDLEtBQUs7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Byb2dyZXNzYmFyQ29udGV4dCwgUHJvZ3Jlc3NiYXJQcm9wcywgUHJvZ3Jlc3NiYXJTdGF0ZSwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVByb2dyZXNzYmFyLFxuXHRwYXRjaFNpbXBsZUNoYW5nZXMsXG5cdHRvQW5ndWxhclNpZ25hbCxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UHJvZ3Jlc3NiYXJDb250ZW50XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nQ2xhc3MsIFNsb3REaXJlY3RpdmUsIFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UHJvZ3Jlc3NiYXJDb250ZW50ICNjb250ZW50IGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJzdGF0ZS5oZWlnaHRcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdPVwic3RhdGUuc3RyaXBlZFwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZFwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwic3RhdGUuY2xhc3NOYW1lXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2JhckRlZmF1bHRTbG90Q29udGVudCA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2NvbnRlbnQnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQcm9ncmVzc2JhclByb3BzPiA9IHtcblx0c2xvdENvbnRlbnQ6IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RDb250ZW50LFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UHJvZ3Jlc3NiYXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHRyb2xlOiAncHJvZ3Jlc3NiYXInLFxuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCB8fCB1bmRlZmluZWQnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICdzdGF0ZSgpLnZhbHVlJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1pbl0nOiAnc3RhdGUoKS5taW4nLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdzdGF0ZSgpLm1heCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdzdGF0ZSgpLmFyaWFWYWx1ZVRleHQnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90RGVmYXVsdF09XCJkZWZhdWx0U2xvdHNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RDb250ZW50XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzIHtcblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWluaW11bSB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVNaW4nKSBtaW46IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWF4JykgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKi9cblx0QElucHV0KCdhdVZhbHVlJykgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cdEBJbnB1dCgnYXVTbG90Q29udGVudCcpIHNsb3RDb250ZW50OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90Q29udGVudEZyb21Db250ZW50OiBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbmltYXRlcyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqIFRha2VzIGVmZmVjdCBvbmx5IGZvciBicm93c2VycyBzdXBwb3J0aW5nIENTUzMgYW5pbWF0aW9ucywgYW5kIGlmIGBzdHJpcGVkYCBpcyBgdHJ1ZWAuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QW5pbWF0ZWQnKSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBzaG93cyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RyaXBlZCcpIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhciwgd2lkZ2V0TmFtZTogJ3Byb2dyZXNzYmFyJywgZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsIGV2ZW50czoge319KTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPFByb2dyZXNzYmFyU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0c2xvdENvbnRlbnQ6IHRoaXMuc2xvdENvbnRlbnRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
