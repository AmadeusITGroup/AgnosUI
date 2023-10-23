const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, callWidgetFactory, createModal, mergeDirectives, patchSimpleChanges, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
/**
 * Directive to provide the slot structure for the modal widget.
 */
export class ModalStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalStructureDirective, isStandalone: true, selector: "ng-template[auModalStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalStructureDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalStructure]', standalone: true }]
        }] });
/**
 * Directive to provide the slot header for the modal widget.
 */
export class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalHeaderDirective, isStandalone: true, selector: "ng-template[auModalHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalHeader]', standalone: true }]
        }] });
/**
 * Directive to provide the slot title for the modal widget.
 */
export class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalTitleDirective, isStandalone: true, selector: "ng-template[auModalTitle]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalTitleDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalTitle]', standalone: true }]
        }] });
/**
 * Directive to provide the default slot for the modal widget.
 */
export class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalBodyDirective, isStandalone: true, selector: "ng-template[auModalBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalBodyDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalBody]', standalone: true }]
        }] });
/**
 * Directive to provide the slot footer for the modal widget.
 */
export class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalFooterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalFooterDirective, isStandalone: true, selector: "ng-template[auModalFooter]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalFooterDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalFooter]', standalone: true }]
        }] });
/**
 * Component containing the default slots for the modal.
 */
export class ModalDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ModalDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true, static: true }, { propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalDefaultSlotsComponent, decorators: [{
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
        this._widget = callWidgetFactory({
            factory: createModal,
            widgetName: 'modal',
            defaultConfig: this.defaultSlots,
            events: {
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
                onBeforeClose: (event) => this.beforeClose.emit(event),
                onVisibleChange: (event) => this.visibleChange.emit(event),
            },
        });
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.modalDirective = mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
        this.backdropDirective = mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);
        this.state = toSignal(this._widget.state$, { requireSync: true });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ModalComponent, isStandalone: true, selector: "[auModal]", inputs: { animation: ["auAnimation", "animation"], backdropTransition: ["auBackdropTransition", "backdropTransition"], modalTransition: ["auModalTransition", "modalTransition"], visible: ["auVisible", "visible"], backdrop: ["auBackdrop", "backdrop"], closeOnOutsideClick: ["auCloseOnOutsideClick", "closeOnOutsideClick"], container: ["auContainer", "container"], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: ["auBackdropClass", "backdropClass"], closeButton: ["auCloseButton", "closeButton"], className: ["auClassName", "className"], slotStructure: ["auSlotStructure", "slotStructure"], slotHeader: ["auSlotHeader", "slotHeader"], slotTitle: ["auSlotTitle", "slotTitle"], slotDefault: ["auSlotDefault", "slotDefault"], slotFooter: ["auSlotFooter", "slotFooter"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, queries: [{ propertyName: "slotStructureFromContent", first: true, predicate: ModalStructureDirective, descendants: true }, { propertyName: "slotHeaderFromContent", first: true, predicate: ModalHeaderDirective, descendants: true }, { propertyName: "slotTitleFromContent", first: true, predicate: ModalTitleDirective, descendants: true }, { propertyName: "slotDefaultFromContent", first: true, predicate: ModalBodyDirective, descendants: true }, { propertyName: "slotFooterFromContent", first: true, predicate: ModalFooterDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auModal]',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, NgIf, SlotDirective, SlotDefaultDirective],
                    template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	\`,
                }]
        }], propDecorators: { animation: [{
                type: Input,
                args: ['auAnimation']
            }], backdropTransition: [{
                type: Input,
                args: ['auBackdropTransition']
            }], modalTransition: [{
                type: Input,
                args: ['auModalTransition']
            }], visible: [{
                type: Input,
                args: ['auVisible']
            }], backdrop: [{
                type: Input,
                args: ['auBackdrop']
            }], closeOnOutsideClick: [{
                type: Input,
                args: ['auCloseOnOutsideClick']
            }], container: [{
                type: Input,
                args: ['auContainer']
            }], ariaCloseButtonLabel: [{
                type: Input,
                args: ['auAriaCloseButtonLabel']
            }], backdropClass: [{
                type: Input,
                args: ['auBackdropClass']
            }], closeButton: [{
                type: Input,
                args: ['auCloseButton']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }], slotStructure: [{
                type: Input,
                args: ['auSlotStructure']
            }], slotStructureFromContent: [{
                type: ContentChild,
                args: [ModalStructureDirective, { static: false }]
            }], slotHeader: [{
                type: Input,
                args: ['auSlotHeader']
            }], slotHeaderFromContent: [{
                type: ContentChild,
                args: [ModalHeaderDirective, { static: false }]
            }], slotTitle: [{
                type: Input,
                args: ['auSlotTitle']
            }], slotTitleFromContent: [{
                type: ContentChild,
                args: [ModalTitleDirective, { static: false }]
            }], slotDefault: [{
                type: Input,
                args: ['auSlotDefault']
            }], slotDefaultFromContent: [{
                type: ContentChild,
                args: [ModalBodyDirective, { static: false }]
            }], slotFooter: [{
                type: Input,
                args: ['auSlotFooter']
            }], slotFooterFromContent: [{
                type: ContentChild,
                args: [ModalFooterDirective, { static: false }]
            }], visibleChange: [{
                type: Output,
                args: ['auVisibleChange']
            }], beforeClose: [{
                type: Output,
                args: ['auBeforeClose']
            }], hidden: [{
                type: Output,
                args: ['auHidden']
            }], shown: [{
                type: Output,
                args: ['auShown']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7O0FBRXBEOztHQUVHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBeUIsQ0FBQSxDQUFDLENBQUM7S0FJdkQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBNEIsRUFBRSxPQUFnQjtRQUMzRSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7K0dBSlcsdUJBQXVCO21HQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBRG5DLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsK0JBQStCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFReEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxX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O3NCQUFoQyxLQUFLO3VCQUFDLGNBQWM7Z0JBRXJCLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBTXhCLGFBQWE7c0JBQXZDLE1BQU07dUJBQUMsaUJBQWlCO2dCQUtBLFdBQVc7c0JBQW5DLE1BQU07dUJBQUMsZUFBZTtnQkFLSCxNQUFNO3NCQUF6QixNQUFNO3VCQUFDLFVBQVU7Z0JBS0MsS0FBSztzQkFBdkIsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge01vZGFsQmVmb3JlQ2xvc2VFdmVudCwgTW9kYWxDb250ZXh0LCBNb2RhbFByb3BzLCBNb2RhbFN0YXRlLCBTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZU1vZGFsLFxuXHRtZXJnZURpcmVjdGl2ZXMsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3Qgc3RydWN0dXJlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKGRpcjogTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBoZWFkZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogTW9kYWxIZWFkZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCB0aXRsZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsVGl0bGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxUaXRsZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogTW9kYWxUaXRsZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEJvZHldJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxCb2R5RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBNb2RhbEJvZHlEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBmb290ZXIgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbEZvb3Rlcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEZvb3RlckRpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogTW9kYWxGb290ZXJEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgY29udGFpbmluZyB0aGUgZGVmYXVsdCBzbG90cyBmb3IgdGhlIG1vZGFsLlxuICovXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtOZ0lmLCBTbG90RGlyZWN0aXZlLCBNb2RhbEhlYWRlckRpcmVjdGl2ZSwgTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsSGVhZGVyICNoZWFkZXIgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90VGl0bGVcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvaDU+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdCpuZ0lmPVwic3RhdGUuY2xvc2VCdXR0b25cIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3M9XCJidG4tY2xvc2VcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXRlLmFyaWFDbG9zZUJ1dHRvbkxhYmVsXCJcblx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLmNsb3NlQnV0dG9uQ2xpY2soJGV2ZW50KVwiXG5cdFx0XHQ+PC9idXR0b24+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgYXVNb2RhbFN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiICpuZ0lmPVwic3RhdGUuc2xvdFRpdGxlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIZWFkZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdERlZmF1bHRcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiICpuZ0lmPVwic3RhdGUuc2xvdEZvb3RlclwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90Rm9vdGVyXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2hlYWRlcicsIHtzdGF0aWM6IHRydWV9KSBoZWFkZXI6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD47XG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHtzdGF0aWM6IHRydWV9KSBzdHJ1Y3R1cmU6IFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD47XG59XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90SGVhZGVyID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnaGVhZGVyJyk7XG5cbi8qKlxuICogRGVmYXVsdCBzbG90IGZvciBtb2RhbCBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBtb2RhbERlZmF1bHRTbG90U3RydWN0dXJlID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IFBhcnRpYWw8TW9kYWxQcm9wcz4gPSB7XG5cdHNsb3RIZWFkZXI6IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIsXG5cdHNsb3RTdHJ1Y3R1cmU6IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1TW9kYWxdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIE5nSWYsIFNsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PGRpdiAqbmdJZj1cIiFzdGF0ZSgpLmJhY2tkcm9wSGlkZGVuXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCB7eyBzdGF0ZSgpLmJhY2tkcm9wQ2xhc3MgfX1cIiBbYXVVc2VdPVwiYmFja2Ryb3BEaXJlY3RpdmVcIj48L2Rpdj5cblx0XHQ8ZGl2ICpuZ0lmPVwiIXN0YXRlKCkuaGlkZGVuXCIgY2xhc3M9XCJtb2RhbCBkLWJsb2NrIHt7IHN0YXRlKCkuY2xhc3NOYW1lIH19XCIgW2F1VXNlXT1cIm1vZGFsRGlyZWN0aXZlXCIgKGNsaWNrKT1cIndpZGdldC5hY3Rpb25zLm1vZGFsQ2xpY2soJGV2ZW50KVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlKCkuc2xvdFN0cnVjdHVyZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGU6IHN0YXRlKCksIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBhbmQgaXRzIGJhY2tkcm9wIChpZiBwcmVzZW50KSBzaG91bGQgYmUgYW5pbWF0ZWQgd2hlbiBzaG93biBvciBoaWRkZW4uXG5cdCAqL1xuXHRASW5wdXQoJ2F1QW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBiYWNrZHJvcCBiZWhpbmQgdGhlIG1vZGFsIChpZiBwcmVzZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcFRyYW5zaXRpb24nKSBiYWNrZHJvcFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TW9kYWxUcmFuc2l0aW9uJykgbW9kYWxUcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuXHQgKi9cblx0QElucHV0KCdhdVZpc2libGUnKSB2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIGEgYmFja2Ryb3Agc2hvdWxkIGJlIGNyZWF0ZWQgYmVoaW5kIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcCcpIGJhY2tkcm9wOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlIHZpZXdwb3J0IG91dHNpZGUgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdUNsb3NlT25PdXRzaWRlQ2xpY2snKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGljaCBlbGVtZW50IHNob3VsZCBjb250YWluIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzLlxuXHQgKiBJZiBpdCBpcyBub3QgbnVsbCwgdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMgYXJlIG1vdmVkIHRvIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyLlxuXHQgKiBPdGhlcndpc2UsIHRoZXkgc3RheSB3aGVyZSB0aGUgd2lkZ2V0IGlzIGxvY2F0ZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q29udGFpbmVyJykgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFZhbHVlIG9mIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZSB0byBwdXQgb24gdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBiYWNrZHJvcCBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcENsYXNzJykgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgnYXVDbG9zZUJ1dHRvbicpIGNsb3NlQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RIZWFkZXInKSBzbG90SGVhZGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RIZWFkZXJGcm9tQ29udGVudDogTW9kYWxIZWFkZXJEaXJlY3RpdmUgfCBudWxsO1xuXG5cdEBJbnB1dCgnYXVTbG90VGl0bGUnKSBzbG90VGl0bGU6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxUaXRsZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90VGl0bGVGcm9tQ29udGVudDogTW9kYWxUaXRsZURpcmVjdGl2ZSB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IE1vZGFsQm9keURpcmVjdGl2ZSB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RGb290ZXInKSBzbG90Rm9vdGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGb290ZXJGcm9tQ29udGVudDogTW9kYWxGb290ZXJEaXJlY3RpdmUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmlzaWJsZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGFsIGlzIGFib3V0IHRvIGJlIGNsb3NlZCAoaS5lLiB0aGUgY2xvc2UgbWV0aG9kIHdhcyBjYWxsZWQpLlxuXHQgKi9cblx0QE91dHB1dCgnYXVCZWZvcmVDbG9zZScpIGJlZm9yZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbEJlZm9yZUNsb3NlRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIG5vdCB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVIaWRkZW4nKSBoaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBhbmQgdGhlIG1vZGFsIGlzIHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZGVmYXVsdFNsb3RzID0gd3JpdGFibGUoZGVmYXVsdENvbmZpZyk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVNb2RhbCxcblx0XHR3aWRnZXROYW1lOiAnbW9kYWwnLFxuXHRcdGRlZmF1bHRDb25maWc6IHRoaXMuZGVmYXVsdFNsb3RzLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25CZWZvcmVDbG9zZTogKGV2ZW50KSA9PiB0aGlzLmJlZm9yZUNsb3NlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHR9KTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHRyZWFkb25seSBtb2RhbERpcmVjdGl2ZSA9IG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5tb2RhbFBvcnRhbERpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMubW9kYWxEaXJlY3RpdmUpO1xuXHRyZWFkb25seSBiYWNrZHJvcERpcmVjdGl2ZSA9IG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcFBvcnRhbERpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYmFja2Ryb3BEaXJlY3RpdmUpO1xuXG5cdHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8TW9kYWxTdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkLCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rm9vdGVyOiB0aGlzLnNsb3RGb290ZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SGVhZGVyOiB0aGlzLnNsb3RIZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90VGl0bGU6IHRoaXMuc2xvdFRpdGxlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
