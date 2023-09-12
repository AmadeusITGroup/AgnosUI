const t=`import { writable } from '@amadeus-it-group/tansu';
import { createAlert, toSlotContextWidget } from '@agnos-ui/core';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, inject, Input, Output, TemplateRef, ViewChild, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { callWidgetFactory, ComponentTemplate, SlotDirective } from '../slot.directive';
import { SlotDefaultDirective } from '../slotDefault.directive';
import { UseDirective } from '../transition/use.directive';
import { patchSimpleChanges } from '../utils';
import * as i0 from "@angular/core";
export class AlertBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AlertBodyDirective, isStandalone: true, selector: "ng-template[auAlertBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: AlertStructureDirective, isStandalone: true, selector: "ng-template[auAlertStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
        }] });
export class AlertDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AlertDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		<button
			*ngIf="state.dismissible"
			type="button"
			class="btn-close ms-auto"
			(click)="widget.api.close()"
			[attr.aria-label]="state.ariaCloseButtonLabel"
		></button>
	</ng-template>\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: AlertStructureDirective, selector: "ng-template[auAlertStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, AlertStructureDirective],
                    template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		<button
			*ngIf="state.dismissible"
			type="button"
			class="btn-close ms-auto"
			(click)="widget.api.close()"
			[attr.aria-label]="state.ariaCloseButtonLabel"
		></button>
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
        this._widget = callWidgetFactory(createAlert, 'alert', this.defaultSlots);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onVisibleChange: (event) => this.visibleChange.emit(event),
            onShown: () => this.shown.emit(),
            onHidden: () => this.hidden.emit(),
        });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: AlertComponent, isStandalone: true, selector: "au-alert", inputs: { type: "type", dismissible: "dismissible", transition: "transition", visible: "visible", animationOnInit: "animationOnInit", animation: "animation", ariaCloseButtonLabel: "ariaCloseButtonLabel", slotDefault: "slotDefault", slotStructure: "slotStructure", className: "className" }, outputs: { visibleChange: "visibleChange", hidden: "hidden", shown: "shown" }, queries: [{ propertyName: "slotDefaultFromContent", first: true, predicate: AlertBodyDirective, descendants: true }, { propertyName: "slotStructureFromContent", first: true, predicate: AlertStructureDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }} {{ state().className }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-alert',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, UseDirective, SlotDefaultDirective],
                    template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }} {{ state().className }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>\`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], transition: [{
                type: Input
            }], visible: [{
                type: Input
            }], animationOnInit: [{
                type: Input
            }], animation: [{
                type: Input
            }], ariaCloseButtonLabel: [{
                type: Input
            }], slotDefault: [{
                type: Input
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [AlertBodyDirective, { static: false }]
            }], slotStructure: [{
                type: Input
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [AlertStructureDirective, { static: false }]
            }], visibleChange: [{
                type: Output
            }], hidden: [{
                type: Output
            }], shown: [{
                type: Output
            }], className: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sVUFBVSxDQUFDOztBQVM1QyxNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFnRCxDQUFBLENBQUMsQ0FBQztLQUk5RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUF1QixFQUFFLE9BQWdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSww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QWM7a0dBQWQsY0FBYyx5ZUFxRFosa0JBQWtCLDJGQUlsQix1QkFBdUIscUVBdEUzQjs7Ozs7Ozs7Ozs7U0FXRiw0REFaRSxJQUFJLDZGQUFFLGFBQWEsd0ZBQUUsWUFBWSxzRkFBRSxvQkFBb0I7OzJGQWNyRCxjQUFjO2tCQWxCMUIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDbEUsUUFBUSxFQUFFOzs7Ozs7Ozs7OztTQVdGO2lCQUNSOzBFQU9BLElBQUk7c0JBREgsS0FBSztnQkFRTixXQUFXO3NCQURWLEtBQUs7Z0JBU04sVUFBVTtzQkFEVCxLQUFLO2dCQU9OLE9BQU87c0JBRE4sS0FBSztnQkFVTixlQUFlO3NCQURkLEtBQUs7Z0JBVU4sU0FBUztzQkFEUixLQUFLO2dCQU1HLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVOLHNCQUFzQjtzQkFEckIsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBR3hDLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ2tELHdCQUF3QjtzQkFBL0UsWUFBWTt1QkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBSzVDLGFBQWE7c0JBQXRCLE1BQU07Z0JBS0csTUFBTTtzQkFBZixNQUFNO2dCQUtHLEtBQUs7c0JBQWQsTUFBTTtnQkFNRSxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0FsZXJ0Q29udGV4dCBhcyBBbGVydENvcmVDb250ZXh0LCBUcmFuc2l0aW9uRm4sIFdpZGdldFByb3BzLCBXaWRnZXRTdGF0ZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtjcmVhdGVBbGVydCwgdG9TbG90Q29udGV4dFdpZGdldH0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdGluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBBZGFwdFdpZGdldFNsb3RzLCBTbG90Q29udGVudH0gZnJvbSAnLi4vc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeSwgQ29tcG9uZW50VGVtcGxhdGUsIFNsb3REaXJlY3RpdmV9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7U2xvdERlZmF1bHREaXJlY3RpdmV9IGZyb20gJy4uL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1VzZURpcmVjdGl2ZX0gZnJvbSAnLi4vdHJhbnNpdGlvbi91c2UuZGlyZWN0aXZlJztcbmltcG9ydCB7cGF0Y2hTaW1wbGVDaGFuZ2VzfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIEFsZXJ0V2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVBbGVydD4+O1xuZXhwb3J0IHR5cGUgQWxlcnRTdGF0ZSA9IFdpZGdldFN0YXRlPEFsZXJ0V2lkZ2V0PjtcbmV4cG9ydCB0eXBlIEFsZXJ0UHJvcHMgPSBXaWRnZXRQcm9wczxBbGVydFdpZGdldD47XG5cbmV4cG9ydCB0eXBlIEFsZXJ0Q29udGV4dCA9IEFkYXB0U2xvdENvbnRlbnRQcm9wczxBbGVydENvcmVDb250ZXh0PjtcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdUFsZXJ0Qm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBbGVydEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPEFsZXJ0Q29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBbGVydEJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFsZXJ0Q29yZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydFN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBbGVydENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgQWxlcnRDb3JlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nSWYsIFNsb3REaXJlY3RpdmUsIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIGF1QWxlcnRTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQtYm9keVwiPlxuXHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8YnV0dG9uXG5cdFx0XHQqbmdJZj1cInN0YXRlLmRpc21pc3NpYmxlXCJcblx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0Y2xhc3M9XCJidG4tY2xvc2UgbXMtYXV0b1wiXG5cdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFwaS5jbG9zZSgpXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWxcIlxuXHRcdD48L2J1dHRvbj5cblx0PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydERlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPEFsZXJ0Q29yZUNvbnRleHQ+O1xufVxuXG5leHBvcnQgY29uc3QgYWxlcnREZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShBbGVydERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPEFsZXJ0UHJvcHM+ID0ge1xuXHRzbG90U3RydWN0dXJlOiBhbGVydERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXUtYWxlcnQnLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nSWYsIFNsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxkaXZcblx0XHRcdCpuZ0lmPVwiIXN0YXRlKCkuaGlkZGVuXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy50cmFuc2l0aW9uRGlyZWN0aXZlXCJcblx0XHRcdGNsYXNzPVwiYXUtYWxlcnQgZC1mbGV4IHctMTAwIGFsZXJ0IGFsZXJ0LXt7IHN0YXRlKCkudHlwZSB9fSB7eyBzdGF0ZSgpLmNsYXNzTmFtZSB9fVwiXG5cdFx0XHRyb2xlPVwiYWxlcnRcIlxuXHRcdD5cblx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIGFsZXJ0LlxuXHQgKiBUaGVyZSBhcmUgdGhlIGZvbGxvd2luZyB0eXBlczogJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdsaWdodCcgYW5kICdkYXJrJy5cblx0ICovXG5cdEBJbnB1dCgpXG5cdHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKi9cblx0QElucHV0KClcblx0ZGlzbWlzc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgYWxlcnQgaXMgZGlzcGxheWVkIG9yIGhpZGRlbi5cblx0ICpcblx0ICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBBbGVydFByb3BzLmFuaW1hdGlvbk9uSW5pdCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKi9cblx0QElucHV0KClcblx0dHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIGFsZXJ0IGlzIHZpc2libGUgdG8gdGhlIHVzZXJcblx0ICovXG5cdEBJbnB1dCgpXG5cdHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgb3BlbmluZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIHRoZSBgLm9wZW4oKWAgZnVuY3Rpb24gaXMgY2FsbGVkXG5cdCAqIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKi9cblx0QElucHV0KClcblx0YW5pbWF0aW9uT25Jbml0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNsb3Npbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSxcblx0ICogdmlhIHRoZSBgLmNsb3NlKClgIGZ1bmN0aW9uIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKi9cblx0QElucHV0KClcblx0YW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBY2Nlc3NpYmlsaXR5IGNsb3NlIGJ1dHRvbiBsYWJlbFxuXHQgKi9cblx0QElucHV0KCkgYXJpYUNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8QWRhcHRTbG90Q29udGVudFByb3BzPEFsZXJ0Q29yZUNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChBbGVydEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogQWxlcnRCb2R5RGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoKSBzbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWxlcnRDb3JlQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCB2aXNpYmlsaXR5IGNoYW5nZWQuXG5cdCAqL1xuXHRAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi5cblx0ICovXG5cdEBPdXRwdXQoKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICovXG5cdEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KGNyZWF0ZUFsZXJ0LCAnYWxlcnQnLCB0aGlzLmRlZmF1bHRTbG90cyk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxBbGVydFN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3REZWZhdWx0OiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
