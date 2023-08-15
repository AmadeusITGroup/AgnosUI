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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AlertBodyDirective, isStandalone: true, selector: "ng-template[auAlertBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.0", type: AlertStructureDirective, isStandalone: true, selector: "ng-template[auAlertStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auAlertStructure]', standalone: true }]
        }] });
export class AlertDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: AlertDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertDefaultSlotsComponent, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: AlertComponent, isStandalone: true, selector: "au-alert", inputs: { type: "type", dismissible: "dismissible", transition: "transition", visible: "visible", animationOnInit: "animationOnInit", animation: "animation", ariaCloseButtonLabel: "ariaCloseButtonLabel", slotDefault: "slotDefault", slotStructure: "slotStructure" }, outputs: { visibleChange: "visibleChange", hidden: "hidden", shown: "shown" }, queries: [{ propertyName: "slotDefaultFromContent", first: true, predicate: AlertBodyDirective, descendants: true }, { propertyName: "slotStructureFromContent", first: true, predicate: AlertStructureDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: AlertComponent, decorators: [{
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
			class="au-alert d-flex w-100 alert alert-{{ state().type }}"
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sVUFBVSxDQUFDOztBQVM1QyxNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFnRCxDQUFBLENBQUMsQ0FBQztLQUk5RTtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUF1QixFQUFFLE9BQWdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSww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QWM7a0dBQWQsY0FBYyxpZEFxRFosa0JBQWtCLDJGQUlsQix1QkFBdUIscUVBdEUzQjs7Ozs7Ozs7Ozs7U0FXRiw0REFaRSxJQUFJLDZGQUFFLGFBQWEsd0ZBQUUsWUFBWSxzRkFBRSxvQkFBb0I7OzJGQWNyRCxjQUFjO2tCQWxCMUIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDbEUsUUFBUSxFQUFFOzs7Ozs7Ozs7OztTQVdGO2lCQUNSOzBFQU9BLElBQUk7c0JBREgsS0FBSztnQkFRTixXQUFXO3NCQURWLEtBQUs7Z0JBU04sVUFBVTtzQkFEVCxLQUFLO2dCQU9OLE9BQU87c0JBRE4sS0FBSztnQkFVTixlQUFlO3NCQURkLEtBQUs7Z0JBVU4sU0FBUztzQkFEUixLQUFLO2dCQU1HLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVOLHNCQUFzQjtzQkFEckIsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBR3hDLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ2tELHdCQUF3QjtzQkFBL0UsWUFBWTt1QkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBSzVDLGFBQWE7c0JBQXRCLE1BQU07Z0JBS0csTUFBTTtzQkFBZixNQUFNO2dCQUtHLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBbGVydENvbnRleHQgYXMgQWxlcnRDb3JlQ29udGV4dCwgVHJhbnNpdGlvbkZuLCBXaWRnZXRQcm9wcywgV2lkZ2V0U3RhdGV9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7Y3JlYXRlQWxlcnQsIHRvU2xvdENvbnRleHRXaWRnZXR9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRpbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0b1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgQWRhcHRXaWRnZXRTbG90cywgU2xvdENvbnRlbnR9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnksIENvbXBvbmVudFRlbXBsYXRlLCBTbG90RGlyZWN0aXZlfSBmcm9tICcuLi9zbG90LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Nsb3REZWZhdWx0RGlyZWN0aXZlfSBmcm9tICcuLi9zbG90RGVmYXVsdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtVc2VEaXJlY3RpdmV9IGZyb20gJy4uL3RyYW5zaXRpb24vdXNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge3BhdGNoU2ltcGxlQ2hhbmdlc30gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBbGVydFdpZGdldCA9IEFkYXB0V2lkZ2V0U2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQWxlcnQ+PjtcbmV4cG9ydCB0eXBlIEFsZXJ0U3RhdGUgPSBXaWRnZXRTdGF0ZTxBbGVydFdpZGdldD47XG5leHBvcnQgdHlwZSBBbGVydFByb3BzID0gV2lkZ2V0UHJvcHM8QWxlcnRXaWRnZXQ+O1xuXG5leHBvcnQgdHlwZSBBbGVydENvbnRleHQgPSBBZGFwdFNsb3RDb250ZW50UHJvcHM8QWxlcnRDb3JlQ29udGV4dD47XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVBbGVydEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRCb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxBbGVydENvbnRleHQ+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWxlcnRCb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBBbGVydENvcmVDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1QWxlcnRTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWxlcnRDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIEFsZXJ0Q29yZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0lmLCBTbG90RGlyZWN0aXZlLCBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBhdUFsZXJ0U3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0LWJvZHlcIj5cblx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0PC9kaXY+XG5cdFx0PGJ1dHRvblxuXHRcdFx0Km5nSWY9XCJzdGF0ZS5kaXNtaXNzaWJsZVwiXG5cdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdGNsYXNzPVwiYnRuLWNsb3NlIG1zLWF1dG9cIlxuXHRcdFx0KGNsaWNrKT1cIndpZGdldC5hcGkuY2xvc2UoKVwiXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFDbG9zZUJ1dHRvbkxhYmVsXCJcblx0XHQ+PC9idXR0b24+XG5cdDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxBbGVydENvcmVDb250ZXh0Pjtcbn1cblxuZXhwb3J0IGNvbnN0IGFsZXJ0RGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoQWxlcnREZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxBbGVydFByb3BzPiA9IHtcblx0c2xvdFN0cnVjdHVyZTogYWxlcnREZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1LWFsZXJ0Jyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0lmLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFthdVNsb3REZWZhdWx0XT1cImRlZmF1bHRTbG90c1wiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8ZGl2XG5cdFx0XHQqbmdJZj1cIiFzdGF0ZSgpLmhpZGRlblwiXG5cdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMudHJhbnNpdGlvbkRpcmVjdGl2ZVwiXG5cdFx0XHRjbGFzcz1cImF1LWFsZXJ0IGQtZmxleCB3LTEwMCBhbGVydCBhbGVydC17eyBzdGF0ZSgpLnR5cGUgfX1cIlxuXHRcdFx0cm9sZT1cImFsZXJ0XCJcblx0XHQ+XG5cdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydC5cblx0ICogVGhlIGFyZSB0aGUgZm9sbG93aW5nIHR5cGVzOiAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2xpZ2h0JyBhbmQgJ2RhcmsnLlxuXHQgKi9cblx0QElucHV0KClcblx0dHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNhbiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuXG5cdCAqIFRoZSBjbG9zZSBidXR0b24gKMOXKSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgeW91IGNhbiBiZSBub3RpZmllZCBvZiB0aGUgZXZlbnQgd2l0aCB0aGUgKGNsb3NlKSBvdXRwdXQuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRkaXNtaXNzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIEFsZXJ0UHJvcHMuYW5pbWF0aW9uT25Jbml0LCB0aGUgYW5pbWF0aW9uIGNhbiBiZSBvcHRpb25hbGx5IHNraXBwZWQgZHVyaW5nIHRoZSBzaG93aW5nIHByb2Nlc3MuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHR0cmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKi9cblx0QElucHV0KClcblx0dmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gdGhlIGAub3BlbigpYCBmdW5jdGlvbiBpcyBjYWxsZWRcblx0ICogb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRhbmltYXRpb25PbkluaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuXHQgKlxuXHQgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkICB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpLFxuXHQgKiB2aWEgdGhlIGAuY2xvc2UoKWAgZnVuY3Rpb24gb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRhbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgpIHNsb3REZWZhdWx0OiBTbG90Q29udGVudDxBZGFwdFNsb3RDb250ZW50UHJvcHM8QWxlcnRDb3JlQ29udGV4dD4+O1xuXHRAQ29udGVudENoaWxkKEFsZXJ0Qm9keURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90RGVmYXVsdEZyb21Db250ZW50OiBBbGVydEJvZHlEaXJlY3RpdmUgfCBudWxsO1xuXG5cdEBJbnB1dCgpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFkYXB0U2xvdENvbnRlbnRQcm9wczxBbGVydENvcmVDb250ZXh0Pj47XG5cdEBDb250ZW50Q2hpbGQoQWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICovXG5cdEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKi9cblx0QE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIHNob3duLlxuXHQgKi9cblx0QE91dHB1dCgpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkoY3JlYXRlQWxlcnQsICdhbGVydCcsIHRoaXMuZGVmYXVsdFNsb3RzKTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPEFsZXJ0U3RhdGU+ID0gdG9TaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCwge3JlcXVpcmVTeW5jOiB0cnVlfSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdG9uVmlzaWJsZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
