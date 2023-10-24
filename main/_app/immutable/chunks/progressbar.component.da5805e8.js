const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, callWidgetFactory, createProgressbar, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class ProgressbarContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ProgressbarContentDirective, isStandalone: true, selector: "ng-template[auProgressbarContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auProgressbarContent]', standalone: true }]
        }] });
export class ProgressbarDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ProgressbarDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarDefaultSlotsComponent, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ProgressbarComponent, isStandalone: true, selector: "[auProgressbar]", inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], min: ["auMin", "min"], max: ["auMax", "max"], value: ["auValue", "value"], className: ["auClassName", "className"], slotDefault: ["auSlotDefault", "slotDefault"], slotContent: ["auSlotContent", "slotContent"], height: ["auHeight", "height"], animated: ["auAnimated", "animated"], striped: ["auStriped", "striped"], ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"] }, host: { attributes: { "role": "progressbar" }, properties: { "attr.aria-label": "state().ariaLabel || undefined", "attr.aria-valuenow": "state().value", "attr.aria-valuemin": "state().min", "attr.aria-valuemax": "state().max", "attr.aria-valuetext": "state().ariaValueText" } }, queries: [{ propertyName: "slotContentFromContent", first: true, predicate: ProgressbarContentDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressbarComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFHakksTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBK0IsQ0FBQSxDQUFDLENBQUM7S0FJN0Q7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBaUMsRUFBRSxPQUFnQjtRQUNoRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7K0dBSlcsMkJBQTJCO21HQUEzQiwyQkFBMkI7OzRGQUEzQiwyQkFBMkI7a0JBRHZDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUE0QjVFLE1BQU0sT0FBTyxnQ0FBZ0M7K0dBQWhDLGdDQUFnQzttR0FBaEMsZ0NBQWdDLDBMQWhCbEM7Ozs7Ozs7Ozs7Ozs7O0VBY1QsNERBZlMsT0FBTyxvRkFBUSxhQUFhLHdGQVYxQiwyQkFBMkI7OzRGQTJCM0IsZ0NB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QixLQUFLO3VCQUFDLFdBQVc7Z0JBS1UsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UHJvZ3Jlc3NiYXJDb250ZXh0LCBQcm9ncmVzc2JhclByb3BzLCBQcm9ncmVzc2JhclN0YXRlLCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q29tcG9uZW50VGVtcGxhdGUsXG5cdFNsb3REZWZhdWx0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlUHJvZ3Jlc3NiYXIsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9Bbmd1bGFyU2lnbmFsLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge3dyaXRhYmxlfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQge05nQ2xhc3MsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVQcm9ncmVzc2JhckNvbnRlbnRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFByb2dyZXNzYmFyQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFByb2dyZXNzYmFyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbTmdDbGFzcywgTmdJZiwgU2xvdERpcmVjdGl2ZSwgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVQcm9ncmVzc2JhckNvbnRlbnQgI2NvbnRlbnQgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBbc3R5bGUuaGVpZ2h0XT1cInN0YXRlLmhlaWdodFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxuXHRcdFx0XHRcdFtjbGFzcy5wcm9ncmVzcy1iYXItc3RyaXBlZF09XCJzdGF0ZS5zdHJpcGVkXCJcblx0XHRcdFx0XHRbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXT1cInN0YXRlLmFuaW1hdGVkXCJcblx0XHRcdFx0XHRbbmdDbGFzc109XCJzdGF0ZS5jbGFzc05hbWVcIlxuXHRcdFx0XHRcdFtzdHlsZS53aWR0aC4lXT1cInN0YXRlLnBlcmNlbnRhZ2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckRlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgY29udGVudDogVGVtcGxhdGVSZWY8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzYmFyRGVmYXVsdFNsb3RDb250ZW50ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFByb2dyZXNzYmFyRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnY29udGVudCcpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFByb2dyZXNzYmFyUHJvcHM+ID0ge1xuXHRzbG90Q29udGVudDogcHJvZ3Jlc3NiYXJEZWZhdWx0U2xvdENvbnRlbnQsXG59O1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVQcm9ncmVzc2Jhcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdHJvbGU6ICdwcm9ncmVzc2JhcicsXG5cdFx0J1thdHRyLmFyaWEtbGFiZWxdJzogJ3N0YXRlKCkuYXJpYUxhYmVsIHx8IHVuZGVmaW5lZCcsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3N0YXRlKCkudmFsdWUnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWluXSc6ICdzdGF0ZSgpLm1pbicsXG5cdFx0J1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ3N0YXRlKCkubWF4Jyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3N0YXRlKCkuYXJpYVZhbHVlVGV4dCcsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdENvbnRlbnRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMge1xuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBtaW5pbXVtIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KCdhdU1pbicpIG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSB2YWx1ZS5cblx0ICovXG5cdEBJbnB1dCgnYXVNYXgnKSBtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgdmFsdWUuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWUnKSB2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdERlZmF1bHQnKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0QElucHV0KCdhdVNsb3RDb250ZW50Jykgc2xvdENvbnRlbnQ6IFNsb3RDb250ZW50PFByb2dyZXNzYmFyQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RDb250ZW50RnJvbUNvbnRlbnQ6IFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSGVpZ2h0IG9mIHRoZSBwcm9ncmVzc2JhciwgY2FuIGJlIGFueSB2YWxpZCBjc3MgaGVpZ2h0IHZhbHVlLlxuXHQgKi9cblx0QElucHV0KCdhdUhlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFuaW1hdGVzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cblx0ICovXG5cdEBJbnB1dCgnYXVBbmltYXRlZCcpIGFuaW1hdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICovXG5cdEBJbnB1dCgnYXVTdHJpcGVkJykgc3RyaXBlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHRGbicpIGFyaWFWYWx1ZVRleHRGbjogKCh2YWx1ZTogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIsIG1heGltdW06IG51bWJlcikgPT4gc3RyaW5nIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe2ZhY3Rvcnk6IGNyZWF0ZVByb2dyZXNzYmFyLCB3aWRnZXROYW1lOiAncHJvZ3Jlc3NiYXInLCBkZWZhdWx0Q29uZmlnOiB0aGlzLmRlZmF1bHRTbG90cywgZXZlbnRzOiB7fX0pO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8UHJvZ3Jlc3NiYXJTdGF0ZT4gPSB0b0FuZ3VsYXJTaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCk7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRzbG90Q29udGVudDogdGhpcy5zbG90Q29udGVudEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxufVxuIl19`;export{t as default};
