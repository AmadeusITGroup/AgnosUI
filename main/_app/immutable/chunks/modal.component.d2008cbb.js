const t=`import { writable } from '@amadeus-it-group/tansu';
import { createModal, mergeDirectives, toSlotContextWidget } from '@agnos-ui/core';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, effect, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ComponentTemplate, SlotDirective, callWidgetFactory } from '../slot.directive';
import { SlotDefaultDirective } from '../slotDefault.directive';
import { UseDirective } from '../transition/use.directive';
import { patchSimpleChanges } from '../utils';
import * as i0 from "@angular/core";
/**
 * Directive to provide the slot structure for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalStructureDirective, isStandalone: true, selector: "ng-template[auModalStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalStructure]', standalone: true }]
        }] });
/**
 * Directive to provide the slot header for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalHeaderDirective, isStandalone: true, selector: "ng-template[auModalHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalHeader]', standalone: true }]
        }] });
/**
 * Directive to provide the slot title for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalTitleDirective, isStandalone: true, selector: "ng-template[auModalTitle]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalTitleDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalTitle]', standalone: true }]
        }] });
/**
 * Directive to provide the default slot for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalBodyDirective, isStandalone: true, selector: "ng-template[auModalBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalBody]', standalone: true }]
        }] });
/**
 * Directive to provide the slot footer for the modal widget.
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalFooterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: ModalFooterDirective, isStandalone: true, selector: "ng-template[auModalFooter]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalFooterDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalFooter]', standalone: true }]
        }] });
/**
 * Component containing the default slots for the modal.
 */
export class ModalDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ModalDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true, static: true }, { propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			<button
				*ngIf="state.closeButton"
				type="button"
				class="btn-close"
				[attr.aria-label]="state.ariaCloseButtonLabel"
				(click)="widget.actions.closeButtonClick($event)"
			></button>
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			<div class="modal-header" *ngIf="state.slotTitle">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-footer" *ngIf="state.slotFooter">
				<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
			</div>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: ModalHeaderDirective, selector: "ng-template[auModalHeader]" }, { kind: "directive", type: ModalStructureDirective, selector: "ng-template[auModalStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgIf, SlotDirective, ModalHeaderDirective, ModalStructureDirective],
                    template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			<button
				*ngIf="state.closeButton"
				type="button"
				class="btn-close"
				[attr.aria-label]="state.ariaCloseButtonLabel"
				(click)="widget.actions.closeButtonClick($event)"
			></button>
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			<div class="modal-header" *ngIf="state.slotTitle">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			<div class="modal-footer" *ngIf="state.slotFooter">
				<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
			</div>
		</ng-template>
	\`,
                }]
        }], propDecorators: { header: [{
                type: ViewChild,
                args: ['header', { static: true }]
            }], structure: [{
                type: ViewChild,
                args: ['structure', { static: true }]
            }] } });
/**
 * Default slot for modal header.
 */
export const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');
/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');
const defaultConfig = {
    slotHeader: modalDefaultSlotHeader,
    slotStructure: modalDefaultSlotStructure,
};
/**
 * Modal component.
 */
export class ModalComponent {
    constructor() {
        /**
         * Event to be triggered when the visible property changes.
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event to be triggered when the modal is about to be closed (i.e. the close method was called).
         */
        this.beforeClose = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is not visible.
         */
        this.hidden = new EventEmitter();
        /**
         * Event to be triggered when the transition is completed and the modal is visible.
         */
        this.shown = new EventEmitter();
        this.defaultSlots = writable(defaultConfig);
        this._widget = callWidgetFactory(createModal, 'modal', this.defaultSlots);
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.modalDirective = mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
        this.backdropDirective = mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);
        this.state = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onShown: () => this.shown.emit(),
            onHidden: () => this.hidden.emit(),
            onBeforeClose: (event) => this.beforeClose.emit(event),
            onVisibleChange: (event) => this.visibleChange.emit(event),
        });
        effect(() => {
            // TODO: workaround to be removed when https://github.com/angular/angular/issues/50320 is fixed
            this.state();
        });
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotDefault: this.slotDefaultFromContent?.templateRef,
            slotFooter: this.slotFooterFromContent?.templateRef,
            slotHeader: this.slotHeaderFromContent?.templateRef,
            slotStructure: this.slotStructureFromContent?.templateRef,
            slotTitle: this.slotTitleFromContent?.templateRef,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ModalComponent, isStandalone: true, selector: "au-modal", inputs: { animation: "animation", backdropTransition: "backdropTransition", modalTransition: "modalTransition", visible: "visible", backdrop: "backdrop", closeOnOutsideClick: "closeOnOutsideClick", container: "container", ariaCloseButtonLabel: "ariaCloseButtonLabel", backdropClass: "backdropClass", closeButton: "closeButton", modalClass: "modalClass", slotStructure: "slotStructure", slotHeader: "slotHeader", slotTitle: "slotTitle", slotDefault: "slotDefault", slotFooter: "slotFooter" }, outputs: { visibleChange: "visibleChange", beforeClose: "beforeClose", hidden: "hidden", shown: "shown" }, queries: [{ propertyName: "slotStructureFromContent", first: true, predicate: ModalStructureDirective, descendants: true }, { propertyName: "slotHeaderFromContent", first: true, predicate: ModalHeaderDirective, descendants: true }, { propertyName: "slotTitleFromContent", first: true, predicate: ModalTitleDirective, descendants: true }, { propertyName: "slotDefaultFromContent", first: true, predicate: ModalBodyDirective, descendants: true }, { propertyName: "slotFooterFromContent", first: true, predicate: ModalFooterDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().modalClass }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'au-modal',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, NgIf, SlotDirective, SlotDefaultDirective],
                    template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().modalClass }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { animation: [{
                type: Input
            }], backdropTransition: [{
                type: Input
            }], modalTransition: [{
                type: Input
            }], visible: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], closeOnOutsideClick: [{
                type: Input
            }], container: [{
                type: Input
            }], ariaCloseButtonLabel: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], closeButton: [{
                type: Input
            }], modalClass: [{
                type: Input
            }], slotStructure: [{
                type: Input
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [ModalStructureDirective, { static: false }]
            }], slotHeader: [{
                type: Input
            }], slotHeaderFromContent: [{
                type: ContentChild,
                args: [ModalHeaderDirective, { static: false }]
            }], slotTitle: [{
                type: Input
            }], slotTitleFromContent: [{
                type: ContentChild,
                args: [ModalTitleDirective, { static: false }]
            }], slotDefault: [{
                type: Input
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [ModalBodyDirective, { static: false }]
            }], slotFooter: [{
                type: Input
            }], slotFooterFromContent: [{
                type: ContentChild,
                args: [ModalFooterDirective, { static: false }]
            }], visibleChange: [{
                type: Output
            }], beforeClose: [{
                type: Output
            }], hidden: [{
                type: Output
            }], shown: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVyQyxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxVQUFVLENBQUM7O0FBTzVDOztHQUVHO0FBQ0gsOERBQThEO0FBRTlELE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXlCLENBQUEsQ0FBQyxDQUFDO0tBSXZEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQTRCLEVBQUUsT0FBZ0I7UUFDM0UsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLHVCQUF1QjtrR0FBdkIsdUJBQXVCOzsyRkFB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QkFBbkIsS0FBSztnQkFFTixzQkFBc0I7c0JBRHJCLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUd4QyxVQUFVO3NCQUFsQixLQUFLO2dCQUVOLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBTXpDLGFBQWE7c0JBQXRCLE1BQU07Z0JBS0csV0FBVztzQkFBcEIsTUFBTTtnQkFLRyxNQUFNO3NCQUFmLE1BQU07Z0JBS0csS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge01vZGFsQmVmb3JlQ2xvc2VFdmVudCwgTW9kYWxDb250ZXh0IGFzIE1vZGFsQ29yZUNvbnRleHQsIFRyYW5zaXRpb25GbiwgV2lkZ2V0UHJvcHMsIFdpZGdldFN0YXRlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge2NyZWF0ZU1vZGFsLCBtZXJnZURpcmVjdGl2ZXMsIHRvU2xvdENvbnRleHRXaWRnZXR9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRlZmZlY3QsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBBZGFwdFdpZGdldFNsb3RzLCBTbG90Q29udGVudH0gZnJvbSAnLi4vc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb21wb25lbnRUZW1wbGF0ZSwgU2xvdERpcmVjdGl2ZSwgY2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7U2xvdERlZmF1bHREaXJlY3RpdmV9IGZyb20gJy4uL3Nsb3REZWZhdWx0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1VzZURpcmVjdGl2ZX0gZnJvbSAnLi4vdHJhbnNpdGlvbi91c2UuZGlyZWN0aXZlJztcbmltcG9ydCB7cGF0Y2hTaW1wbGVDaGFuZ2VzfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsV2lkZ2V0ID0gQWRhcHRXaWRnZXRTbG90czxSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVNb2RhbD4+O1xuZXhwb3J0IHR5cGUgTW9kYWxQcm9wcyA9IFdpZGdldFByb3BzPE1vZGFsV2lkZ2V0PjtcbmV4cG9ydCB0eXBlIE1vZGFsU3RhdGUgPSBXaWRnZXRTdGF0ZTxNb2RhbFdpZGdldD47XG5leHBvcnQgdHlwZSBNb2RhbENvbnRleHQgPSBBZGFwdFNsb3RDb250ZW50UHJvcHM8TW9kYWxDb3JlQ29udGV4dD47XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgaGVhZGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IE1vZGFsSGVhZGVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgdGl0bGUgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxUaXRsZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFRpdGxlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IE1vZGFsVGl0bGVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBzbG90IGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogTW9kYWxCb2R5RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgZm9vdGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsRm9vdGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChkaXI6IE1vZGFsRm9vdGVyRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgc2xvdHMgZm9yIHRoZSBtb2RhbC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbTmdJZiwgU2xvdERpcmVjdGl2ZSwgTW9kYWxIZWFkZXJEaXJlY3RpdmUsIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVNb2RhbEhlYWRlciAjaGVhZGVyIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFRpdGxlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2g1PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHQqbmdJZj1cInN0YXRlLmNsb3NlQnV0dG9uXCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzPVwiYnRuLWNsb3NlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJzdGF0ZS5hcmlhQ2xvc2VCdXR0b25MYWJlbFwiXG5cdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbG9zZUJ1dHRvbkNsaWNrKCRldmVudClcIlxuXHRcdFx0PjwvYnV0dG9uPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxTdHJ1Y3R1cmUgI3N0cnVjdHVyZSBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiAqbmdJZj1cInN0YXRlLnNsb3RUaXRsZVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SGVhZGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3REZWZhdWx0XCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIiAqbmdJZj1cInN0YXRlLnNsb3RGb290ZXJcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEZvb3RlclwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdoZWFkZXInLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+O1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+O1xufVxuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgaGVhZGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdEhlYWRlciA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2hlYWRlcicpO1xuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgc3RydWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPE1vZGFsUHJvcHM+ID0ge1xuXHRzbG90SGVhZGVyOiBtb2RhbERlZmF1bHRTbG90SGVhZGVyLFxuXHRzbG90U3RydWN0dXJlOiBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlLFxufTtcblxuLyoqXG4gKiBNb2RhbCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1LW1vZGFsJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIE5nSWYsIFNsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PGRpdiAqbmdJZj1cIiFzdGF0ZSgpLmJhY2tkcm9wSGlkZGVuXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCB7eyBzdGF0ZSgpLmJhY2tkcm9wQ2xhc3MgfX1cIiBbYXVVc2VdPVwiYmFja2Ryb3BEaXJlY3RpdmVcIj48L2Rpdj5cblx0XHQ8ZGl2ICpuZ0lmPVwiIXN0YXRlKCkuaGlkZGVuXCIgY2xhc3M9XCJtb2RhbCBkLWJsb2NrIHt7IHN0YXRlKCkubW9kYWxDbGFzcyB9fVwiIFthdVVzZV09XCJtb2RhbERpcmVjdGl2ZVwiIChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5tb2RhbENsaWNrKCRldmVudClcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZSgpLnNsb3RTdHJ1Y3R1cmVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlOiBzdGF0ZSgpLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgYW5kIGl0cyBiYWNrZHJvcCAoaWYgcHJlc2VudCkgc2hvdWxkIGJlIGFuaW1hdGVkIHdoZW4gc2hvd24gb3IgaGlkZGVuLlxuXHQgKi9cblx0QElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBiYWNrZHJvcCBiZWhpbmQgdGhlIG1vZGFsIChpZiBwcmVzZW50KS5cblx0ICovXG5cdEBJbnB1dCgpIGJhY2tkcm9wVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgpIG1vZGFsVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICovXG5cdEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYSBiYWNrZHJvcCBzaG91bGQgYmUgY3JlYXRlZCBiZWhpbmQgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCkgYmFja2Ryb3A6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBjbGlja2luZyBvbiB0aGUgdmlld3BvcnQgb3V0c2lkZSB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGljaCBlbGVtZW50IHNob3VsZCBjb250YWluIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzLlxuXHQgKiBJZiBpdCBpcyBub3QgbnVsbCwgdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMgYXJlIG1vdmVkIHRvIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyLlxuXHQgKiBPdGhlcndpc2UsIHRoZXkgc3RheSB3aGVyZSB0aGUgd2lkZ2V0IGlzIGxvY2F0ZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVmFsdWUgb2YgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlIHRvIHB1dCBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KCkgYXJpYUNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGJhY2tkcm9wIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgpIGNsb3NlQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzc2VzIHRvIGFkZCBvbiB0aGUgbW9kYWwgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBtb2RhbENsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCkgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoKSBzbG90SGVhZGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RIZWFkZXJGcm9tQ29udGVudDogTW9kYWxIZWFkZXJEaXJlY3RpdmUgfCBudWxsO1xuXG5cdEBJbnB1dCgpIHNsb3RUaXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogTW9kYWxCb2R5RGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoKSBzbG90Rm9vdGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGb290ZXJGcm9tQ29udGVudDogTW9kYWxGb290ZXJEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlzaWJsZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuXHQgKi9cblx0QE91dHB1dCgpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RhbCBpcyBhYm91dCB0byBiZSBjbG9zZWQgKGkuZS4gdGhlIGNsb3NlIG1ldGhvZCB3YXMgY2FsbGVkKS5cblx0ICovXG5cdEBPdXRwdXQoKSBiZWZvcmVDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxCZWZvcmVDbG9zZUV2ZW50PigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQgYW5kIHRoZSBtb2RhbCBpcyBub3QgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeShjcmVhdGVNb2RhbCwgJ21vZGFsJywgdGhpcy5kZWZhdWx0U2xvdHMpO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHJlYWRvbmx5IG1vZGFsRGlyZWN0aXZlID0gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLm1vZGFsUG9ydGFsRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZSk7XG5cdHJlYWRvbmx5IGJhY2tkcm9wRGlyZWN0aXZlID0gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmJhY2tkcm9wUG9ydGFsRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcERpcmVjdGl2ZSk7XG5cblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxNb2RhbFN0YXRlPiA9IHRvU2lnbmFsKHRoaXMuX3dpZGdldC5zdGF0ZSQsIHtyZXF1aXJlU3luYzogdHJ1ZX0pO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkJlZm9yZUNsb3NlOiAoZXZlbnQpID0+IHRoaXMuYmVmb3JlQ2xvc2UuZW1pdChldmVudCksXG5cdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0pO1xuXHRcdGVmZmVjdCgoKSA9PiB7XG5cdFx0XHQvLyBUT0RPOiB3b3JrYXJvdW5kIHRvIGJlIHJlbW92ZWQgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy81MDMyMCBpcyBmaXhlZFxuXHRcdFx0dGhpcy5zdGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3REZWZhdWx0OiB0aGlzLnNsb3REZWZhdWx0RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEZvb3RlcjogdGhpcy5zbG90Rm9vdGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEhlYWRlcjogdGhpcy5zbG90SGVhZGVyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdFRpdGxlOiB0aGlzLnNsb3RUaXRsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxufVxuIl19`;export{t as default};
