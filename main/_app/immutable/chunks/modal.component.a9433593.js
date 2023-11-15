const t=`import { ComponentTemplate, SlotDefaultDirective, SlotDirective, UseDirective, callWidgetFactory, createModal, mergeDirectives, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
import { writable } from '@amadeus-it-group/tansu';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalStructureDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ModalStructureDirective, isStandalone: true, selector: "ng-template[auModalStructure]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalStructureDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ModalHeaderDirective, isStandalone: true, selector: "ng-template[auModalHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalHeaderDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ModalTitleDirective, isStandalone: true, selector: "ng-template[auModalTitle]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalTitleDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalBodyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ModalBodyDirective, isStandalone: true, selector: "ng-template[auModalBody]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalBodyDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalFooterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: ModalFooterDirective, isStandalone: true, selector: "ng-template[auModalFooter]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalFooterDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auModalFooter]', standalone: true }]
        }] });
/**
 * Component containing the default slots for the modal.
 */
export class ModalDefaultSlotsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalDefaultSlotsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: ModalDefaultSlotsComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true, static: true }, { propertyName: "structure", first: true, predicate: ["structure"], descendants: true, static: true }], ngImport: i0, template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button
					type="button"
					class="btn-close"
					[attr.aria-label]="state.ariaCloseButtonLabel"
					(click)="widget.actions.closeButtonClick($event)"
				></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			@if (state.slotTitle) {
				<div class="modal-header">
					<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			@if (state.slotFooter) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: ModalHeaderDirective, selector: "ng-template[auModalHeader]" }, { kind: "directive", type: ModalStructureDirective, selector: "ng-template[auModalStructure]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalDefaultSlotsComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective],
                    template: \`
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.slotTitle" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button
					type="button"
					class="btn-close"
					[attr.aria-label]="state.ariaCloseButtonLabel"
					(click)="widget.actions.closeButtonClick($event)"
				></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			@if (state.slotTitle) {
				<div class="modal-header">
					<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			@if (state.slotFooter) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.slotFooter" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
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
        this.state = toAngularSignal(this._widget.state$);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: ModalComponent, isStandalone: true, selector: "[auModal]", inputs: { animation: ["auAnimation", "animation"], backdropTransition: ["auBackdropTransition", "backdropTransition"], modalTransition: ["auModalTransition", "modalTransition"], visible: ["auVisible", "visible"], backdrop: ["auBackdrop", "backdrop"], closeOnOutsideClick: ["auCloseOnOutsideClick", "closeOnOutsideClick"], container: ["auContainer", "container"], ariaCloseButtonLabel: ["auAriaCloseButtonLabel", "ariaCloseButtonLabel"], backdropClass: ["auBackdropClass", "backdropClass"], closeButton: ["auCloseButton", "closeButton"], className: ["auClassName", "className"], slotStructure: ["auSlotStructure", "slotStructure"], slotHeader: ["auSlotHeader", "slotHeader"], slotTitle: ["auSlotTitle", "slotTitle"], slotDefault: ["auSlotDefault", "slotDefault"], slotFooter: ["auSlotFooter", "slotFooter"], contentData: ["auContentData", "contentData"] }, outputs: { visibleChange: "auVisibleChange", beforeClose: "auBeforeClose", hidden: "auHidden", shown: "auShown" }, queries: [{ propertyName: "slotStructureFromContent", first: true, predicate: ModalStructureDirective, descendants: true }, { propertyName: "slotHeaderFromContent", first: true, predicate: ModalHeaderDirective, descendants: true }, { propertyName: "slotTitleFromContent", first: true, predicate: ModalTitleDirective, descendants: true }, { propertyName: "slotDefaultFromContent", first: true, predicate: ModalBodyDirective, descendants: true }, { propertyName: "slotFooterFromContent", first: true, predicate: ModalFooterDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
				<div class="modal-dialog">
					<div class="modal-content">
						<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
					</div>
				</div>
			</div>
		}
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }, { kind: "directive", type: SlotDefaultDirective, selector: "[auSlotDefault]", inputs: ["auSlotDefault"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auModal]',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [UseDirective, SlotDirective, SlotDefaultDirective],
                    template: \`
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
				<div class="modal-dialog">
					<div class="modal-content">
						<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
					</div>
				</div>
			</div>
		}
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
            }], contentData: [{
                type: Input,
                args: ['auContentData']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFFdkI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBRVEsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUErQixDQUFBLENBQUMsQ0FBQztLQUk3RDtJQUhBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBTyxHQUFrQyxFQUFFLE9BQWdCO1FBQ3ZGLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs4R0FKVyx1QkFBdUI7a0dBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFEbkMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQVF4RTs7R0FFRztBQUVILE1BQU0sT0FBTyxvQkFBb0I7SUFEakM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStCLENBQUEsQ0FBQyxDQUFDO0tBSTdEO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFPLElBQWdDLEVBQUUsT0FBZ0I7UUFDckYs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QkFLSyxhQUFhO3NCQUF2QyxNQUFNO3VCQUFDLGlCQUFpQjtnQkFLQSxXQUFXO3NCQUFuQyxNQUFNO3VCQUFDLGVBQWU7Z0JBS0gsTUFBTTtzQkFBekIsTUFBTTt1QkFBQyxVQUFVO2dCQUtDLEtBQUs7c0JBQXZCLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtNb2RhbEJlZm9yZUNsb3NlRXZlbnQsIE1vZGFsQ29udGV4dCwgTW9kYWxQcm9wcywgTW9kYWxTdGF0ZSwgTW9kYWxXaWRnZXQsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENvbXBvbmVudFRlbXBsYXRlLFxuXHRTbG90RGVmYXVsdERpcmVjdGl2ZSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlTW9kYWwsXG5cdG1lcmdlRGlyZWN0aXZlcyxcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7d3JpdGFibGV9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxuXHRpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIHRoZSBzbG90IHN0cnVjdHVyZSBmb3IgdGhlIG1vZGFsIHdpZGdldC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdU1vZGFsU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE1vZGFsQ29udGV4dDxEYXRhPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxEYXRhPihkaXI6IE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgaGVhZGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxIZWFkZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsSGVhZGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgdGl0bGUgZm9yIHRoZSBtb2RhbCB3aWRnZXQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVNb2RhbFRpdGxlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsVGl0bGVEaXJlY3RpdmU8RGF0YT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIE1vZGFsQ29udGV4dDxEYXRhPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBzbG90IGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxCb2R5XScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8RGF0YT4oX2RpcjogTW9kYWxCb2R5RGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgdGhlIHNsb3QgZm9vdGVyIGZvciB0aGUgbW9kYWwgd2lkZ2V0LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1TW9kYWxGb290ZXJdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TW9kYWxDb250ZXh0PERhdGE+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPERhdGE+KF9kaXI6IE1vZGFsRm9vdGVyRGlyZWN0aXZlPERhdGE+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBNb2RhbENvbnRleHQ8RGF0YT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgc2xvdHMgZm9yIHRoZSBtb2RhbC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZSwgTW9kYWxIZWFkZXJEaXJlY3RpdmUsIE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVNb2RhbEhlYWRlciAjaGVhZGVyIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdFRpdGxlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2g1PlxuXHRcdFx0QGlmIChzdGF0ZS5jbG9zZUJ1dHRvbikge1xuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJidG4tY2xvc2VcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwic3RhdGUuYXJpYUNsb3NlQnV0dG9uTGFiZWxcIlxuXHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYWN0aW9ucy5jbG9zZUJ1dHRvbkNsaWNrKCRldmVudClcIlxuXHRcdFx0XHQ+PC9idXR0b24+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgYXVNb2RhbFN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LXdpZGdldD1cIndpZGdldFwiPlxuXHRcdFx0QGlmIChzdGF0ZS5zbG90VGl0bGUpIHtcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RIZWFkZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90RGVmYXVsdFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLnNsb3RGb290ZXIpIHtcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RGb290ZXJcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEZWZhdWx0U2xvdHNDb21wb25lbnQ8RGF0YT4ge1xuXHRAVmlld0NoaWxkKCdoZWFkZXInLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgc3RydWN0dXJlOiBUZW1wbGF0ZVJlZjxNb2RhbENvbnRleHQ8RGF0YT4+O1xufVxuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgaGVhZGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdEhlYWRlciA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ2hlYWRlcicpO1xuXG4vKipcbiAqIERlZmF1bHQgc2xvdCBmb3IgbW9kYWwgc3RydWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbW9kYWxEZWZhdWx0U2xvdFN0cnVjdHVyZSA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShNb2RhbERlZmF1bHRTbG90c0NvbXBvbmVudCwgJ3N0cnVjdHVyZScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPE1vZGFsUHJvcHM8YW55Pj4gPSB7XG5cdHNsb3RIZWFkZXI6IG1vZGFsRGVmYXVsdFNsb3RIZWFkZXIsXG5cdHNsb3RTdHJ1Y3R1cmU6IG1vZGFsRGVmYXVsdFNsb3RTdHJ1Y3R1cmUsXG59O1xuXG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1TW9kYWxdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIFNsb3REZWZhdWx0RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdERlZmF1bHRdPVwiZGVmYXVsdFNsb3RzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0QGlmICghc3RhdGUoKS5iYWNrZHJvcEhpZGRlbikge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wIHt7IHN0YXRlKCkuYmFja2Ryb3BDbGFzcyB9fVwiIFthdVVzZV09XCJiYWNrZHJvcERpcmVjdGl2ZVwiPjwvZGl2PlxuXHRcdH1cblx0XHRAaWYgKCFzdGF0ZSgpLmhpZGRlbikge1xuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsIGQtYmxvY2sge3sgc3RhdGUoKS5jbGFzc05hbWUgfX1cIiBbYXVVc2VdPVwibW9kYWxEaXJlY3RpdmVcIiAoY2xpY2spPVwid2lkZ2V0LmFjdGlvbnMubW9kYWxDbGljaygkZXZlbnQpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUoKS5zbG90U3RydWN0dXJlXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZTogc3RhdGUoKSwgd2lkZ2V0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudDxEYXRhPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBhbmQgaXRzIGJhY2tkcm9wIChpZiBwcmVzZW50KSBzaG91bGQgYmUgYW5pbWF0ZWQgd2hlbiBzaG93biBvciBoaWRkZW4uXG5cdCAqL1xuXHRASW5wdXQoJ2F1QW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiB0byB1c2UgZm9yIHRoZSBiYWNrZHJvcCBiZWhpbmQgdGhlIG1vZGFsIChpZiBwcmVzZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcFRyYW5zaXRpb24nKSBiYWNrZHJvcFRyYW5zaXRpb246IFRyYW5zaXRpb25GbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gdG8gdXNlIGZvciB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TW9kYWxUcmFuc2l0aW9uJykgbW9kYWxUcmFuc2l0aW9uOiBUcmFuc2l0aW9uRm4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZGFsIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuXHQgKi9cblx0QElucHV0KCdhdVZpc2libGUnKSB2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIGEgYmFja2Ryb3Agc2hvdWxkIGJlIGNyZWF0ZWQgYmVoaW5kIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcCcpIGJhY2tkcm9wOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBtb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlIHZpZXdwb3J0IG91dHNpZGUgdGhlIG1vZGFsLlxuXHQgKi9cblx0QElucHV0KCdhdUNsb3NlT25PdXRzaWRlQ2xpY2snKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGljaCBlbGVtZW50IHNob3VsZCBjb250YWluIHRoZSBtb2RhbCBhbmQgYmFja2Ryb3AgRE9NIGVsZW1lbnRzLlxuXHQgKiBJZiBpdCBpcyBub3QgbnVsbCwgdGhlIG1vZGFsIGFuZCBiYWNrZHJvcCBET00gZWxlbWVudHMgYXJlIG1vdmVkIHRvIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyLlxuXHQgKiBPdGhlcndpc2UsIHRoZXkgc3RheSB3aGVyZSB0aGUgd2lkZ2V0IGlzIGxvY2F0ZWQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q29udGFpbmVyJykgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFZhbHVlIG9mIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZSB0byBwdXQgb24gdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhQ2xvc2VCdXR0b25MYWJlbCcpIGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzZXMgdG8gYWRkIG9uIHRoZSBiYWNrZHJvcCBET00gZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgnYXVCYWNrZHJvcENsYXNzJykgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNsb3NlIGJ1dHRvbi5cblx0ICovXG5cdEBJbnB1dCgnYXVDbG9zZUJ1dHRvbicpIGNsb3NlQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdFN0cnVjdHVyZScpIHNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSlcblx0c2xvdFN0cnVjdHVyZUZyb21Db250ZW50OiBNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RIZWFkZXInKSBzbG90SGVhZGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsSGVhZGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RIZWFkZXJGcm9tQ29udGVudDogTW9kYWxIZWFkZXJEaXJlY3RpdmU8RGF0YT4gfCBudWxsO1xuXG5cdEBJbnB1dCgnYXVTbG90VGl0bGUnKSBzbG90VGl0bGU6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxUaXRsZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KVxuXHRzbG90VGl0bGVGcm9tQ29udGVudDogTW9kYWxUaXRsZURpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3REZWZhdWx0Jykgc2xvdERlZmF1bHQ6IFNsb3RDb250ZW50PE1vZGFsQ29udGV4dDxEYXRhPj47XG5cdEBDb250ZW50Q2hpbGQoTW9kYWxCb2R5RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3REZWZhdWx0RnJvbUNvbnRlbnQ6IE1vZGFsQm9keURpcmVjdGl2ZTxEYXRhPiB8IG51bGw7XG5cblx0QElucHV0KCdhdVNsb3RGb290ZXInKSBzbG90Rm9vdGVyOiBTbG90Q29udGVudDxNb2RhbENvbnRleHQ8RGF0YT4+O1xuXHRAQ29udGVudENoaWxkKE1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pXG5cdHNsb3RGb290ZXJGcm9tQ29udGVudDogTW9kYWxGb290ZXJEaXJlY3RpdmU8RGF0YT4gfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBEYXRhIHRvIHVzZSBpbiBjb250ZW50IHNsb3RzXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q29udGVudERhdGEnKSBjb250ZW50RGF0YTogRGF0YSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRXZlbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpc2libGUgcHJvcGVydHkgY2hhbmdlcy5cblx0ICovXG5cdEBPdXRwdXQoJ2F1VmlzaWJsZUNoYW5nZScpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RhbCBpcyBhYm91dCB0byBiZSBjbG9zZWQgKGkuZS4gdGhlIGNsb3NlIG1ldGhvZCB3YXMgY2FsbGVkKS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1QmVmb3JlQ2xvc2UnKSBiZWZvcmVDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxCZWZvcmVDbG9zZUV2ZW50PigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQgYW5kIHRoZSBtb2RhbCBpcyBub3QgdmlzaWJsZS5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQgYW5kIHRoZSBtb2RhbCBpcyB2aXNpYmxlLlxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGRlZmF1bHRTbG90cyA9IHdyaXRhYmxlKGRlZmF1bHRDb25maWcpO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeTxNb2RhbFdpZGdldDxEYXRhPj4oe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZU1vZGFsLFxuXHRcdHdpZGdldE5hbWU6ICdtb2RhbCcsXG5cdFx0ZGVmYXVsdENvbmZpZzogdGhpcy5kZWZhdWx0U2xvdHMsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0XHRvbkJlZm9yZUNsb3NlOiAoZXZlbnQpID0+IHRoaXMuYmVmb3JlQ2xvc2UuZW1pdChldmVudCksXG5cdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0sXG5cdH0pO1xuXHRyZWFkb25seSB3aWRnZXQgPSB0b1Nsb3RDb250ZXh0V2lkZ2V0KHRoaXMuX3dpZGdldCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cdHJlYWRvbmx5IG1vZGFsRGlyZWN0aXZlID0gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLm1vZGFsUG9ydGFsRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5tb2RhbERpcmVjdGl2ZSk7XG5cdHJlYWRvbmx5IGJhY2tkcm9wRGlyZWN0aXZlID0gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmJhY2tkcm9wUG9ydGFsRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5iYWNrZHJvcERpcmVjdGl2ZSk7XG5cblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxNb2RhbFN0YXRlPERhdGE+PiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdERlZmF1bHQ6IHRoaXMuc2xvdERlZmF1bHRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90Rm9vdGVyOiB0aGlzLnNsb3RGb290ZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SGVhZGVyOiB0aGlzLnNsb3RIZWFkZXJGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90U3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90VGl0bGU6IHRoaXMuc2xvdFRpdGxlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG59XG4iXX0=`;export{t as default};
