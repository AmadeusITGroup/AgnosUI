const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createProgressbar, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.3", type: ProgressbarContentDirective, isStandalone: true, selector: "ng-template[auProgressbarContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
        }] });
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: ProgressbarDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarDefaultSlotsComponent, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.0.3", type: ProgressbarComponent, isStandalone: true, selector: "[auProgressbar]", inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], value: ["auValue", "value", auNumberAttribute], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated", auBooleanAttribute], striped: ["auStriped", "striped", auBooleanAttribute], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, host: { attributes: { "role": "progressbar" }, properties: { "attr.aria-label": "state().ariaLabel || undefined", "attr.aria-valuenow": "state().value", "attr.aria-valuemin": "state().min", "attr.aria-valuemax": "state().max", "attr.aria-valuetext": "state().ariaValueText" } }, queries: [{ propertyName: "slotContentFromContent", first: true, predicate: ProgressbarContentDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: ProgressbarComponent, decorators: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR2pJLE1BQU0sT0FBTywyQkFBMkI7SUFEeEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStCLENBQUEsQ0FBQyxDQUFDO0tBSTdEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQWlDLEVBQUUsT0FBZ0I7UUFDaEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLDJCQUEyQjtrR0FBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUR2QyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLG1DQUFtQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBNEI1RSxNQUFNLE9BQU8sZ0NBQWdDOzhHQUFoQyxnQ0FBZ0M7a0dBQWhDLGdDQUFnQywwTEFoQmxDOzs7Ozs7Ozs7Ozs7OztFQWNULDREQWZTLE9BQU8sb0ZBQUUsYUFBYSx3RkFWcEIsMkJB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Szt1QkFBQyxlQUFlO2dCQUNFLFdBQVc7c0JBQWxDLEtBQUs7dUJBQUMsZUFBZTtnQkFDc0Msc0JBQXNCO3NCQUFqRixZQUFZO3VCQUFDLDJCQUEyQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFLdkMsTUFBTTtzQkFBeEIsS0FBSzt1QkFBQyxVQUFVO2dCQU00QyxRQUFRO3NCQUFwRSxLQUFLO3VCQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7Z0JBS0MsT0FBTztzQkFBbEUsS0FBSzt1QkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO2dCQUs5QixlQUFlO3NCQUExQyxLQUFLO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQcm9ncmVzc2JhckNvbnRleHQsIFByb2dyZXNzYmFyUHJvcHMsIFByb2dyZXNzYmFyU3RhdGUsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0YXVOdW1iZXJBdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVQcm9ncmVzc2Jhcixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVByb2dyZXNzYmFyQ29udGVudF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgUHJvZ3Jlc3NiYXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0NsYXNzLCBTbG90RGlyZWN0aXZlLCBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVByb2dyZXNzYmFyQ29udGVudCAjY29udGVudCBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIFtzdHlsZS5oZWlnaHRdPVwic3RhdGUuaGVpZ2h0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cInByb2dyZXNzLWJhclwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXT1cInN0YXRlLnN0cmlwZWRcIlxuXHRcdFx0XHRcdFtjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdPVwic3RhdGUuYW5pbWF0ZWRcIlxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cInN0YXRlLmNsYXNzTmFtZVwiXG5cdFx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwic3RhdGUucGVyY2VudGFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RGVmYXVsdFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnY29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdENvbnRlbnQgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQsICdjb250ZW50Jyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8UHJvZ3Jlc3NiYXJQcm9wcz4gPSB7XG5cdHNsb3RDb250ZW50OiBwcm9ncmVzc2JhckRlZmF1bHRTbG90Q29udGVudCxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVByb2dyZXNzYmFyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBTbG90RGVmYXVsdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0cm9sZTogJ3Byb2dyZXNzYmFyJyxcblx0XHQnW2F0dHIuYXJpYS1sYWJlbF0nOiAnc3RhdGUoKS5hcmlhTGFiZWwgfHwgdW5kZWZpbmVkJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnc3RhdGUoKS52YWx1ZScsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtaW5dJzogJ3N0YXRlKCkubWluJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnc3RhdGUoKS5tYXgnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAnc3RhdGUoKS5hcmlhVmFsdWVUZXh0Jyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90Q29udGVudFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcyB7XG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1pbmltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNaW4nLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSkgbWluOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWF4JywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIG1heDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVZhbHVlJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pIHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRASW5wdXQoJ2F1U2xvdENvbnRlbnQnKSBzbG90Q29udGVudDogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdENvbnRlbnRGcm9tQ29udGVudDogUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1SGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0cmlwZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtmYWN0b3J5OiBjcmVhdGVQcm9ncmVzc2Jhciwgd2lkZ2V0TmFtZTogJ3Byb2dyZXNzYmFyJywgZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsIGV2ZW50czoge319KTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPFByb2dyZXNzYmFyU3RhdGU+ID0gdG9Bbmd1bGFyU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQpO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0c2xvdENvbnRlbnQ6IHRoaXMuc2xvdENvbnRlbnRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
