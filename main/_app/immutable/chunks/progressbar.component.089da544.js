const t=`import { ComponentTemplate, SlotDirective, callWidgetFactory, createProgressbar, patchSimpleChanges, toSlotContextWidget, SlotDefaultDirective, } from '@agnos-ui/angular-headless';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { writable } from '@amadeus-it-group/tansu';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
export class ProgressbarContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.8", type: ProgressbarContentDirective, isStandalone: true, selector: "ng-template[auProgressbarContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
        }] });
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ProgressbarDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgClass, NgIf, SlotDirective, ProgressbarContentDirective],
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
        this._widget = callWidgetFactory(createProgressbar, 'progressbar', this.defaultSlots);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state = toSignal(this._widget.state$, { requireSync: true });
    }
    ngAfterContentChecked() {
        this._widget.patch({
            slotContent: this.slotContentFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.8", type: ProgressbarComponent, isStandalone: true, selector: "[auProgressbar]", inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min"], max: ["auMax", "max"], value: ["auValue", "value"], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated"], striped: ["auStriped", "striped"], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, host: { attributes: { "role": "progressbar" }, properties: { "attr.aria-label": "state().ariaLabel || undefined", "attr.aria-valuenow": "state().value", "attr.aria-valuemin": "state().min", "attr.aria-valuemax": "state().max", "attr.aria-valuetext": "state().ariaValueText" } }, queries: [{ propertyName: "slotContentFromContent", first: true, predicate: ProgressbarContentDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.8", ngImport: i0, type: ProgressbarComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixvQkFBb0IsR0FDcEIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0IsQ0FBQSxDQUFDLENBQUM7S0FJN0Q7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBaUMsRUFBRSxPQUFnQjtRQUNoRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OEdBSlcsMkJBQTJCO2tHQUEzQiwyQkFBMkI7OzJGQUEzQiwyQkFBMkI7a0JBRHZDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUE0QjVFLE1BQU0sT0FBTyxnQ0FBZ0M7OEdBQWhDLGdDQUFnQztrR0FBaEMsZ0NBQWdDLDBMQWhCbEM7Ozs7Ozs7Ozs7Ozs7O0VBY1QsNERBZlMsT0FBTyxvRkFB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QUExQixLQUFLO3VCQUFDLFdBQVc7Z0JBS1UsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UHJvZ3Jlc3NiYXJDb250ZXh0LCBQcm9ncmVzc2JhclByb3BzLCBQcm9ncmVzc2JhclN0YXRlLCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVQcm9ncmVzc2Jhcixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDbGFzcywgTmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHt0b1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UHJvZ3Jlc3NiYXJDb250ZW50XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxQcm9ncmVzc2JhckNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBQcm9ncmVzc2JhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nQ2xhc3MsIE5nSWYsIFNsb3REaXJlY3RpdmUsIFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1UHJvZ3Jlc3NiYXJDb250ZW50ICNjb250ZW50IGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJzdGF0ZS5oZWlnaHRcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdPVwic3RhdGUuc3RyaXBlZFwiXG5cdFx0XHRcdFx0W2NsYXNzLnByb2dyZXNzLWJhci1hbmltYXRlZF09XCJzdGF0ZS5hbmltYXRlZFwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwic3RhdGUuY2xhc3NOYW1lXCJcblx0XHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJzdGF0ZS5wZXJjZW50YWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD47XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2JhckRlZmF1bHRTbG90Q29udGVudCA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2NvbnRlbnQnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxQcm9ncmVzc2JhclByb3BzPiA9IHtcblx0c2xvdENvbnRlbnQ6IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RDb250ZW50LFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1UHJvZ3Jlc3NiYXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHRyb2xlOiAncHJvZ3Jlc3NiYXInLFxuXHRcdCdbYXR0ci5hcmlhLWxhYmVsXSc6ICdzdGF0ZSgpLmFyaWFMYWJlbCB8fCB1bmRlZmluZWQnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICdzdGF0ZSgpLnZhbHVlJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZW1pbl0nOiAnc3RhdGUoKS5taW4nLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdzdGF0ZSgpLm1heCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdzdGF0ZSgpLmFyaWFWYWx1ZVRleHQnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90RGVmYXVsdF09XCJkZWZhdWx0U2xvdHNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RDb250ZW50XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzIHtcblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWluaW11bSB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVNaW4nKSBtaW46IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIG1heGltdW0gdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWF4JykgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKi9cblx0QElucHV0KCdhdVZhbHVlJykgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cdEBJbnB1dCgnYXVTbG90Q29udGVudCcpIHNsb3RDb250ZW50OiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90Q29udGVudEZyb21Db250ZW50OiBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVIZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbmltYXRlcyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqIFRha2VzIGVmZmVjdCBvbmx5IGZvciBicm93c2VycyBzdXBwb3J0aW5nIENTUzMgYW5pbWF0aW9ucywgYW5kIGlmIGBzdHJpcGVkYCBpcyBgdHJ1ZWAuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QW5pbWF0ZWQnKSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBzaG93cyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RyaXBlZCcpIHN0cmlwZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhVmFsdWVUZXh0Rm4nKSBhcmlhVmFsdWVUZXh0Rm46ICgodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KGNyZWF0ZVByb2dyZXNzYmFyLCAncHJvZ3Jlc3NiYXInLCB0aGlzLmRlZmF1bHRTbG90cyk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxQcm9ncmVzc2JhclN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0c2xvdENvbnRlbnQ6IHRoaXMuc2xvdENvbnRlbnRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
