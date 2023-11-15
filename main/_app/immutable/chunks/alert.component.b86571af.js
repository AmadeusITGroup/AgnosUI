const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, callWidgetFactory, createAlert, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: AlertBodyDirective, isStandalone: true, selector: "ng-template[auAlertBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertBody]', standalone: true }]
        }] });
export class AlertStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: AlertStructureDirective, isStandalone: true, selector: "ng-template[auAlertStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
        }] });
export class AlertDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: AlertDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible) {
			<button type="button" class="btn-close ms-auto" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
		}
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: AlertStructureDirective, selector: "ng-template[auAlertStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [SlotDirective, AlertStructureDirective],
                    template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible) {
			<button type="button" class="btn-close ms-auto" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
		}
	</ng-template>\`,
                }]
        }], propDecorators: { structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotStructure: alertDefaultSlotStructure,
};
export class AlertComponent {
    constructor() {
        /**
         * Callback called when the alert visibility changed.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Callback called when the alert is hidden.
         */
        this.hidden = new EventEmitter();
        /**
         * Callback called when the alert is shown.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory({
            factory: createAlert,
            widgetName: 'alert',
            defaultConfig: this.defaultSlots,
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
        });
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state = toAngularSignal(this._widget.state$);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: AlertComponent, isStandalone: true, selector: "[auAlert]", inputs: { type: ["auType", "type"], dismissible: ["auDismissible", "dismissible"], transition: ["auTransition", "transition"], visible: ["auVisible", "visible"], animationOnInit: ["auAnimationOnInit", "animationOnInit"], animation: ["auAnimation", "animation"], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], slotDefault: ["auSlotDefault", "slotDefault"], slotStructure: ["auSlotStructure", "slotStructure"], className: ["auClassName", "className"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, queries: [{ propertyName: "slotDefaultFromContent", first: true, predicate: AlertBodyDirective, descendants: true }, { propertyName: "slotStructureFromContent", first: true, predicate: AlertStructureDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		@if (!state().hidden) {
			<div
				[auUse]="widget.directives.transitionDirective"
				class="au-alert d-flex w-100 alert alert-{{ state().type }} {{ state().className }}"
				role="alert"
			>
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auAlert]',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [SlotDirective, UseDirective, SlotDefaultDirective],
                    template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		@if (!state().hidden) {
			<div
				[auUse]="widget.directives.transitionDirective"
				class="au-alert d-flex w-100 alert alert-{{ state().type }} {{ state().className }}"
				role="alert"
			>
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}\`,
                }]
        }], propDecorators: { type: [{
                type: Input,
                args: ['auType']
            }], dismissible: [{
                type: Input,
                args: ['auDismissible']
            }], transition: [{
                type: Input,
                args: ['auTransition']
            }], visible: [{
                type: Input,
                args: ['auVisible']
            }], animationOnInit: [{
                type: Input,
                args: ['auAnimationOnInit']
            }], animation: [{
                type: Input,
                args: ['auAnimation']
            }], ariaCloseButtonLabel: [{
                type: Input,
                args: ['auAriaCloseButtonLabel']
            }], slotDefault: [{
                type: Input,
                args: ['auSlotDefault']
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [AlertBodyDirective, { static: false }]
            }], slotStructure: [{
                type: Input,
                args: ['auSlotStructure']
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [AlertStructureDirective, { static: false }]
            }], visibleChange: [{
                type: Output,
                args: ['auVisibleChange']
            }], hidden: [{
                type: Output,
                args: ['auHidden']
            }], shown: [{
                type: Output,
                args: ['auShown']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxHQUNOLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF5QixDQUFBLENBQUMsQ0FBQztLQUl2RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUF1QixFQUFFLE9BQWdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVNuRSxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF5QixDQUFBLENBQUMsQ0FBQztLQUl2RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUE0QixFQUFFLE9BQWdCO1FBQzNFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyx1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QUFFLG9CQUFvQixDQUFDO29CQUM1RCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztJQVlQO2lCQUNIOzhCQU9BLElBQUk7c0JBREgsS0FBSzt1QkFBQyxRQUFRO2dCQVFmLFdBQVc7c0JBRFYsS0FBSzt1QkFBQyxlQUFlO2dCQVN0QixVQUFVO3NCQURULEtBQUs7dUJBQUMsY0FBYztnQkFPckIsT0FBTztzQkFETixLQUFLO3VCQUFDLFdBQVc7Z0JBVWxCLGVBQWU7c0JBRGQsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBVTFCLFNBQVM7c0JBRFIsS0FBSzt1QkFBQyxhQUFhO2dCQU1hLG9CQUFvQjtzQkFBcEQsS0FBSzt1QkFBQyx3QkFBd0I7Z0JBRVAsV0FBVztzQkFBbEMsS0FBSzt1QkFBQyxlQUFlO2dCQUV0QixzQkFBc0I7c0JBRHJCLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUd2QixhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFDZ0Msd0JBQXdCO3NCQUEvRSxZQUFZO3VCQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFLM0IsYUFBYTtzQkFBdkMsTUFBTTt1QkFBQyxpQkFBaUI7Z0JBS0wsTUFBTTtzQkFBekIsTUFBTTt1QkFBQyxVQUFVO2dCQUtDLEtBQUs7c0JBQXZCLE1BQU07dUJBQUMsU0FBUztnQkFNSyxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWxlcnRDb250ZXh0LCBBbGVydFByb3BzLCBBbGVydFN0YXRlLCBTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZUFsZXJ0LFxuXHRwYXRjaFNpbXBsZUNoYW5nZXMsXG5cdHRvQW5ndWxhclNpZ25hbCxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRCb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFsZXJ0Q29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IEFsZXJ0Qm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWxlcnRDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWxlcnRTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFsZXJ0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmUsIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIGF1QWxlcnRTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblx0XHRAaWYgKHN0YXRlLmRpc21pc3NpYmxlKSB7XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZSBtcy1hdXRvXCIgKGNsaWNrKT1cIndpZGdldC5hcGkuY2xvc2UoKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWxcIj48L2J1dHRvbj5cblx0XHR9XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxBbGVydENvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgYWxlcnREZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShBbGVydERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFsZXJ0UHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiBhbGVydERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1QWxlcnRdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHRAaWYgKCFzdGF0ZSgpLmhpZGRlbikge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMudHJhbnNpdGlvbkRpcmVjdGl2ZVwiXG5cdFx0XHRcdGNsYXNzPVwiYXUtYWxlcnQgZC1mbGV4IHctMTAwIGFsZXJ0IGFsZXJ0LXt7IHN0YXRlKCkudHlwZSB9fSB7eyBzdGF0ZSgpLmNsYXNzTmFtZSB9fVwiXG5cdFx0XHRcdHJvbGU9XCJhbGVydFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0fWAsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIGFsZXJ0LlxuXHQgKiBUaGVyZSBhcmUgdGhlIGZvbGxvd2luZyB0eXBlczogJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdsaWdodCcgYW5kICdkYXJrJy5cblx0ICovXG5cdEBJbnB1dCgnYXVUeXBlJylcblx0dHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNhbiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuXG5cdCAqIFRoZSBjbG9zZSBidXR0b24gKMOXKSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgeW91IGNhbiBiZSBub3RpZmllZCBvZiB0aGUgZXZlbnQgd2l0aCB0aGUgKGNsb3NlKSBvdXRwdXQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1RGlzbWlzc2libGUnKVxuXHRkaXNtaXNzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIEFsZXJ0UHJvcHMuYW5pbWF0aW9uT25Jbml0LCB0aGUgYW5pbWF0aW9uIGNhbiBiZSBvcHRpb25hbGx5IHNraXBwZWQgZHVyaW5nIHRoZSBzaG93aW5nIHByb2Nlc3MuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VHJhbnNpdGlvbicpXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmlzaWJsZScpXG5cdHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgb3BlbmluZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIHRoZSBgLm9wZW4oKWAgZnVuY3Rpb24gaXMgY2FsbGVkXG5cdCAqIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKi9cblx0QElucHV0KCdhdUFuaW1hdGlvbk9uSW5pdCcpXG5cdGFuaW1hdGlvbk9uSW5pdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICovXG5cdEBJbnB1dCgnYXVBbmltYXRpb24nKVxuXHRhbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUNsb3NlQnV0dG9uTGFiZWwnKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90RGVmYXVsdCcpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxBbGVydENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0Qm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBBbGVydEJvZHlEaXJlY3RpdmUgfCBudWxsO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8QWxlcnRDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgdmlzaWJpbGl0eSBjaGFuZ2VkLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgc2hvd24uXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZUFsZXJ0LFxuXHRcdHdpZGdldE5hbWU6ICdhbGVydCcsXG5cdFx0ZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdH0sXG5cdH0pO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8QWxlcnRTdGF0ZT4gPSB0b0FuZ3VsYXJTaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCk7XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3REZWZhdWx0OiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
