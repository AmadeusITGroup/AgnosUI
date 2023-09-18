const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, callWidgetFactory, createModal, mergeDirectives, patchSimpleChanges, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, effect, inject, } from '@angular/core';
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
export class ModalHeaderDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
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
export class ModalTitleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
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
export class ModalBodyDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
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
export class ModalFooterDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ModalComponent, isStandalone: true, selector: "[auModal]", inputs: { animation: ["auAnimation", "animation"], backdropTransition: ["auBackdropTransition", "backdropTransition"], modalTransition: ["auModalTransition", "modalTransition"], visible: ["auVisible", "visible"], backdrop: ["auBackdrop", "backdrop"], closeOnOutsideClick: ["auCloseOnOutsideClick", "closeOnOutsideClick"], container: ["auContainer", "container"], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: ["auBackdropClass", "backdropClass"], closeButton: ["auCloseButton", "closeButton"], className: ["auClassName", "className"], slotStructure: ["auSlotStructure", "slotStructure"], slotHeader: ["auSlotHeader", "slotHeader"], slotTitle: ["auSlotTitle", "slotTitle"], slotDefault: ["auSlotDefault", "slotDefault"], slotFooter: ["auSlotFooter", "slotFooter"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, queries: [{ propertyName: "slotStructureFromContent", first: true, predicate: ModalStructureDirective, descendants: true }, { propertyName: "slotHeaderFromContent", first: true, predicate: ModalHeaderDirective, descendants: true }, { propertyName: "slotTitleFromContent", first: true, predicate: ModalTitleDirective, descendants: true }, { propertyName: "slotDefaultFromContent", first: true, predicate: ModalBodyDirective, descendants: true }, { propertyName: "slotFooterFromContent", first: true, predicate: ModalFooterDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ModalComponent, decorators: [{
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
        }], ctorParameters: function () { return []; }, propDecorators: { animation: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDOztBQUVwRDs7R0FFRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXlCLENBQUEsQ0FBQyxDQUFDO0tBSXZEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQTRCLEVBQUUsT0FBZ0I7UUFDM0UsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLHVCQUF1QjtrR0FBdkIsdUJBQXVCOzsyRkFBdkIsdUJBQXVCO2tCQURuQyxTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLCtCQUErQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUXhFOztHQUVHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBeUIsQ0FBQSxDQUFDLENBQUM7S0FJdkQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBMEIsRUFBRSxPQUFnQjtRQUN6RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OEdBSlcsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRckU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUF5QixDQUFBLENBQUMsQ0FBQztLQUl2RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUF5QixFQUFFLE9BQWdCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyxtQkFBbUI7a0dBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFEL0IsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVFwRTs7R0FFRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXlCLENBQUEsQ0FBQyxDQUFDO0tBSXZEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQXdCLEVBQUUsT0FBZ0I7UUFDdkUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLGtCQUFrQjtrR0FBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUQ5QixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUW5FOztHQUVHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBeUIsQ0FBQSxDQUFDLENBQUM7S0FJdkQ7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBMEIsRUFBRSxPQUFnQjtRQUN6RSxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OEdBSlcsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs7QUFRckU7O0dBRUc7QUErQkgsTUFBTSxPQUFPLDBCQUEwQjs4R0FBMUIsMEJBQTBCO2tHQUExQiwwQkFBMEIsK1JBMUI1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0JULDREQXpCUyxJQUFJLDZGQUFFLGFBQWEsd0ZBOUNqQixvQkFBb0IsdUVBWHBCLHVCQUF1Qjs7MkZBb0Z2QiwwQkFBMEI7a0JBOUJ0QyxTQUFTO21CQUFDO29CQUNWLFVBQVUsRUFBRSxJQUFJO29CQUNoQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztvQkFDN0UsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF3QlQ7aUJBQ0Q7OEJBRXFDLE1BQU07c0JBQTFDLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztnQkFDSyxTQUFTO3NCQUFoRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0FBR3ZDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVsRzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLElBQUksaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFeEcsTUFBTSxhQUFhLEdBQXdCO0lBQzFDLFVBQVUsRUFBRSxzQkFBc0I7SUFDbEMsYUFBYSxFQUFFLHlCQUF5QjtDQUN4QyxDQUFDO0FBRUY7O0dBRUc7QUFrQkgsTUFBTSxPQUFPLGNBQWM7SUE0RzFCO1FBOUJBOztXQUVHO1FBQ3dCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV2RTs7V0FFRztRQUNzQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBRWpGOztXQUVHO1FBQ2lCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXREOztXQUVHO1FBQ2dCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTNDLGlCQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZDLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRSxXQUFNLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLFFBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2QixtQkFBYyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2SCxzQkFBaUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVoSSxVQUFLLEdBQXVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBR3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEQsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUQsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLCtGQUErRjtZQUMvRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxXQUFXO1lBQ3JELFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsV0FBVztZQUNuRCxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFdBQVc7WUFDbkQsYUFBYSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxXQUFXO1lBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsV0FBVztTQUNqRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7OEdBcklXLGNBQWM7a0dBQWQsY0FBYyx1aENBMkRaLHVCQUF1Qix3RkFJdkIsb0JBQW9CLHVGQUlwQixtQkFBbUIseUZBSW5CLGtCQUFrQix3RkFJbEIsb0JBQW9CLHFFQXZGeEI7Ozs7Ozs7Ozs7RUFVVCw0REFYUyxZQUFZLHNGQUFFLElBQUksNkZBQUUsYUFBYSx3RkFBRSxvQkFBb0I7OzJGQWFyRCxjQUFjO2tCQWpCMUIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztvQkFDbEUsUUFBUSxFQUFFOzs7Ozs7Ozs7O0VBVVQ7aUJBQ0Q7MEVBS3NCLFNBQVM7c0JBQTlCLEtBQUs7dUJBQUMsYUFBYTtnQkFLVyxrQkFBa0I7c0JBQWhELEtBQUs7dUJBQUMsc0JBQXNCO2dCQUtELGVBQWU7c0JBQTFDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUtOLE9BQU87c0JBQTFCLEtBQUs7dUJBQUMsV0FBVztnQkFLRyxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBS2EsbUJBQW1CO3NCQUFsRCxLQUFLO3VCQUFDLHVCQUF1QjtnQkFPUixTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBS2Esb0JBQW9CO3NCQUFwRCxLQUFLO3VCQUFDLHdCQUF3QjtnQkFLTCxhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFLQSxXQUFXO3NCQUFsQyxLQUFLO3VCQUFDLGVBQWU7Z0JBS0EsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQUVNLGFBQWE7c0JBQXRDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUV4Qix3QkFBd0I7c0JBRHZCLFlBQVk7dUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUcvQixVQUFVO3NCQUFoQyxLQUFLO3VCQUFDLGNBQWM7Z0JBRXJCLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBRzdCLFNBQVM7c0JBQTlCLEtBQUs7dUJBQUMsYUFBYTtnQkFFcEIsb0JBQW9CO3NCQURuQixZQUFZO3VCQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFHMUIsV0FBVztzQkFBbEMsS0FBSzt1QkFBQyxlQUFlO2dCQUV0QixzQkFBc0I7c0JBRHJCLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUcxQixVQUFVO3NCQUFoQyxLQUFLO3VCQUFDLGNBQWM7Z0JBRXJCLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Z0JBTXhCLGFBQWE7c0JBQXZDLE1BQU07dUJBQUMsaUJBQWlCO2dCQUtBLFdBQVc7c0JBQW5DLE1BQU07dUJBQUMsZUFBZTtnQkFLSCxNQUFNO3NCQUF6QixNQUFNO3VCQUFDLFVBQVU7Z0JBS0MsS0FBSztzQkFBdkIsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge01vZGFsQmVmb3JlQ2xvc2VFdmVudCwgTW9kYWxDb250ZXh0LCBNb2RhbFByb3BzLCBNb2RhbFN0YXRlLCBTbG90Q29udGVudCwgVHJhbnNpdGlvbkZufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRDb21wb25lbnRUZW1wbGF0ZSxcblx0U2xvdERlZmF1bHREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZU1vZGFsLFxuXHRtZXJnZURpcmVjdGl2ZXMsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsXG5cdGVmZmVjdCxcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgc2xvdCBzdHJ1Y3R1cmUgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbFN0cnVjdHVyZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoZGlyOiBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IGhlYWRlciBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsSGVhZGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBNb2RhbEhlYWRlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHRpdGxlIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxUaXRsZV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbFRpdGxlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBNb2RhbFRpdGxlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIGRlZmF1bHQgc2xvdCBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsQm9keV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJvZHlEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IE1vZGFsQm9keURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IGZvb3RlciBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsRm9vdGVyXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBNb2RhbEZvb3RlckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgTW9kYWxDb250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBjb250YWluaW5nIHRoZSBkZWZhdWx0IHNsb3RzIGZvciB0aGUgbW9kYWwuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW05nSWYsIFNsb3REaXJlY3RpdmUsIE1vZGFsSGVhZGVyRGlyZWN0aXZlLCBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1TW9kYWxIZWFkZXIgI2hlYWRlciBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC13aWRnZXQ9XCJ3aWRnZXRcIj5cblx0XHRcdDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RUaXRsZVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9oNT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Km5nSWY9XCJzdGF0ZS5jbG9zZUJ1dHRvblwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzcz1cImJ0bi1jbG9zZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWxcIlxuXHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMuY2xvc2VCdXR0b25DbGljaygkZXZlbnQpXCJcblx0XHRcdD48L2J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBhdU1vZGFsU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtd2lkZ2V0PVwid2lkZ2V0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgKm5nSWY9XCJzdGF0ZS5zbG90VGl0bGVcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEhlYWRlclwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RGVmYXVsdFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCIgKm5nSWY9XCJzdGF0ZS5zbG90Rm9vdGVyXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGb290ZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGVmYXVsdFNsb3RzQ29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnaGVhZGVyJywge3N0YXRpYzogdHJ1ZX0pIGhlYWRlcjogVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0Pjtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHN0cnVjdHVyZTogVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0Pjtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHNsb3QgZm9yIG1vZGFsIGhlYWRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQsICdoZWFkZXInKTtcblxuLyoqXG4gKiBEZWZhdWx0IHNsb3QgZm9yIG1vZGFsIHN0cnVjdHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUgPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogUGFydGlhbDxNb2RhbFByb3BzPiA9IHtcblx0c2xvdEhlYWRlcjogbW9kYWxEZWZhdWx0U2xvdEhlYWRlcixcblx0c2xvdFN0cnVjdHVyZTogbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSxcbn07XG5cbi8qKlxuICogTW9kYWwgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVNb2RhbF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgTmdJZiwgU2xvdERpcmVjdGl2ZSwgU2xvdERlZmF1bHREaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90RGVmYXVsdF09XCJkZWZhdWx0U2xvdHNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8ZGl2ICpuZ0lmPVwiIXN0YXRlKCkuYmFja2Ryb3BIaWRkZW5cIiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wIHt7IHN0YXRlKCkuYmFja2Ryb3BDbGFzcyB9fVwiIFthdVVzZV09XCJiYWNrZHJvcERpcmVjdGl2ZVwiPjwvZGl2PlxuXHRcdDxkaXYgKm5nSWY9XCIhc3RhdGUoKS5oaWRkZW5cIiBjbGFzcz1cIm1vZGFsIGQtYmxvY2sge3sgc3RhdGUoKS5jbGFzc05hbWUgfX1cIiBbYXVVc2VdPVwibW9kYWxEaXJlY3RpdmVcIiAoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMubW9kYWxDbGljaygkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIGFuZCBpdHMgYmFja2Ryb3AgKGlmIHByZXNlbnQpIHNob3VsZCBiZSBhbmltYXRlZCB3aGVuIHNob3duIG9yIGhpZGRlbi5cblx0ICovXG5cdEBJbnB1dCgnYXVBbmltYXRpb24nKSBhbmltYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0cmFuc2l0aW9uIHRvIHVzZSBmb3IgdGhlIGJhY2tkcm9wIGJlaGluZCB0aGUgbW9kYWwgKGlmIHByZXNlbnQpLlxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wVHJhbnNpdGlvbicpIGJhY2tkcm9wVHJhbnNpdGlvbjogVHJhbnNpdGlvbkZuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVNb2RhbFRyYW5zaXRpb24nKSBtb2RhbFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kYWwgc2hvdWxkIGJlIHZpc2libGUgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmlzaWJsZScpIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYSBiYWNrZHJvcCBzaG91bGQgYmUgY3JlYXRlZCBiZWhpbmQgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wJykgYmFja2Ryb3A6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBjbGlja2luZyBvbiB0aGUgdmlld3BvcnQgb3V0c2lkZSB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xvc2VPbk91dHNpZGVDbGljaycpIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoaWNoIGVsZW1lbnQgc2hvdWxkIGNvbnRhaW4gdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMuXG5cdCAqIElmIGl0IGlzIG5vdCBudWxsLCB0aGUgbW9kYWwgYW5kIGJhY2tkcm9wIERPTSBlbGVtZW50cyBhcmUgbW92ZWQgdG8gdGhlIHNwZWNpZmllZCBjb250YWluZXIuXG5cdCAqIE90aGVyd2lzZSwgdGhleSBzdGF5IHdoZXJlIHRoZSB3aWRnZXQgaXMgbG9jYXRlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVDb250YWluZXInKSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVmFsdWUgb2YgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlIHRvIHB1dCBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFDbG9zZUJ1dHRvbkxhYmVsJykgYXJpYUNsb3NlQnV0dG9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3NlcyB0byBhZGQgb24gdGhlIGJhY2tkcm9wIERPTSBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCdhdUJhY2tkcm9wQ2xhc3MnKSBiYWNrZHJvcENsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2xvc2UgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KCdhdUNsb3NlQnV0dG9uJykgY2xvc2VCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RydWN0dXJlJykgc2xvdFN0cnVjdHVyZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEhlYWRlcicpIHNsb3RIZWFkZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxIZWFkZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEhlYWRlckZyb21Db250ZW50OiBNb2RhbEhlYWRlckRpcmVjdGl2ZSB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RUaXRsZScpIHNsb3RUaXRsZTogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbFRpdGxlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RUaXRsZUZyb21Db250ZW50OiBNb2RhbFRpdGxlRGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdERlZmF1bHQnKSBzbG90RGVmYXVsdDogU2xvdENvbnRlbnQ8TW9kYWxDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChNb2RhbEJvZHlEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdERlZmF1bHRGcm9tQ29udGVudDogTW9kYWxCb2R5RGlyZWN0aXZlIHwgbnVsbDtcblxuXHRASW5wdXQoJ2F1U2xvdEZvb3RlcicpIHNsb3RGb290ZXI6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdEZvb3RlckZyb21Db250ZW50OiBNb2RhbEZvb3RlckRpcmVjdGl2ZSB8IG51bGw7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB2aXNpYmxlIHByb3BlcnR5IGNoYW5nZXMuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZpc2libGVDaGFuZ2UnKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kYWwgaXMgYWJvdXQgdG8gYmUgY2xvc2VkIChpLmUuIHRoZSBjbG9zZSBtZXRob2Qgd2FzIGNhbGxlZCkuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUJlZm9yZUNsb3NlJykgYmVmb3JlQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsQmVmb3JlQ2xvc2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgbm90IHZpc2libGUuXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkIGFuZCB0aGUgbW9kYWwgaXMgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1U2hvd24nKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBkZWZhdWx0U2xvdHMgPSB3cml0YWJsZShkZWZhdWx0Q29uZmlnKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkoY3JlYXRlTW9kYWwsICdtb2RhbCcsIHRoaXMuZGVmYXVsdFNsb3RzKTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXHRyZWFkb25seSBtb2RhbERpcmVjdGl2ZSA9IG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5tb2RhbFBvcnRhbERpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMubW9kYWxEaXJlY3RpdmUpO1xuXHRyZWFkb25seSBiYWNrZHJvcERpcmVjdGl2ZSA9IG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcFBvcnRhbERpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuYmFja2Ryb3BEaXJlY3RpdmUpO1xuXG5cdHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8TW9kYWxTdGF0ZT4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkLCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25TaG93bjogKCkgPT4gdGhpcy5zaG93bi5lbWl0KCksXG5cdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0b25CZWZvcmVDbG9zZTogKGV2ZW50KSA9PiB0aGlzLmJlZm9yZUNsb3NlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9KTtcblx0XHRlZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gVE9ETzogd29ya2Fyb3VuZCB0byBiZSByZW1vdmVkIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNTAzMjAgaXMgZml4ZWRcblx0XHRcdHRoaXMuc3RhdGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90RGVmYXVsdDogdGhpcy5zbG90RGVmYXVsdEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RGb290ZXI6IHRoaXMuc2xvdEZvb3RlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RIZWFkZXI6IHRoaXMuc2xvdEhlYWRlckZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RTdHJ1Y3R1cmU6IHRoaXMuc2xvdFN0cnVjdHVyZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RUaXRsZTogdGhpcy5zbG90VGl0bGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
