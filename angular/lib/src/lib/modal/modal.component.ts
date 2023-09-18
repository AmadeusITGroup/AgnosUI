import type {ModalBeforeCloseEvent, ModalContext, ModalProps, ModalState, SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	UseDirective,
	callWidgetFactory,
	createModal,
	mergeDirectives,
	patchSimpleChanges,
	toSlotContextWidget,
} from '@agnos-ui/angular-headless';
import {writable} from '@amadeus-it-group/tansu';
import {NgIf} from '@angular/common';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
	effect,
	inject,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';

/**
 * Directive to provide the slot structure for the modal widget.
 */
@Directive({selector: 'ng-template[auModalStructure]', standalone: true})
export class ModalStructureDirective {
	public templateRef = inject(TemplateRef<ModalContext>);
	static ngTemplateContextGuard(dir: ModalStructureDirective, context: unknown): context is ModalContext {
		return true;
	}
}

/**
 * Directive to provide the slot header for the modal widget.
 */
@Directive({selector: 'ng-template[auModalHeader]', standalone: true})
export class ModalHeaderDirective {
	public templateRef = inject(TemplateRef<ModalContext>);
	static ngTemplateContextGuard(_dir: ModalHeaderDirective, context: unknown): context is ModalContext {
		return true;
	}
}

/**
 * Directive to provide the slot title for the modal widget.
 */
@Directive({selector: 'ng-template[auModalTitle]', standalone: true})
export class ModalTitleDirective {
	public templateRef = inject(TemplateRef<ModalContext>);
	static ngTemplateContextGuard(_dir: ModalTitleDirective, context: unknown): context is ModalContext {
		return true;
	}
}

/**
 * Directive to provide the default slot for the modal widget.
 */
@Directive({selector: 'ng-template[auModalBody]', standalone: true})
export class ModalBodyDirective {
	public templateRef = inject(TemplateRef<ModalContext>);
	static ngTemplateContextGuard(_dir: ModalBodyDirective, context: unknown): context is ModalContext {
		return true;
	}
}

/**
 * Directive to provide the slot footer for the modal widget.
 */
@Directive({selector: 'ng-template[auModalFooter]', standalone: true})
export class ModalFooterDirective {
	public templateRef = inject(TemplateRef<ModalContext>);
	static ngTemplateContextGuard(_dir: ModalFooterDirective, context: unknown): context is ModalContext {
		return true;
	}
}

/**
 * Component containing the default slots for the modal.
 */
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgIf, SlotDirective, ModalHeaderDirective, ModalStructureDirective],
	template: `
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
	`,
})
export class ModalDefaultSlotsComponent {
	@ViewChild('header', {static: true}) header: TemplateRef<ModalContext>;
	@ViewChild('structure', {static: true}) structure: TemplateRef<ModalContext>;
}

/**
 * Default slot for modal header.
 */
export const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');

/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<ModalProps> = {
	slotHeader: modalDefaultSlotHeader,
	slotStructure: modalDefaultSlotStructure,
};

/**
 * Modal component.
 */
@Component({
	selector: '[auModal]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, NgIf, SlotDirective, SlotDefaultDirective],
	template: `
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<div *ngIf="!state().backdropHidden" class="modal-backdrop {{ state().backdropClass }}" [auUse]="backdropDirective"></div>
		<div *ngIf="!state().hidden" class="modal d-block {{ state().className }}" [auUse]="modalDirective" (click)="widget.actions.modalClick($event)">
			<div class="modal-dialog">
				<div class="modal-content">
					<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
				</div>
			</div>
		</div>
	`,
})
export class ModalComponent implements OnChanges, AfterContentChecked {
	/**
	 * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
	 */
	@Input('auAnimation') animation: boolean | undefined;

	/**
	 * The transition to use for the backdrop behind the modal (if present).
	 */
	@Input('auBackdropTransition') backdropTransition: TransitionFn | undefined;

	/**
	 * The transition to use for the modal.
	 */
	@Input('auModalTransition') modalTransition: TransitionFn | undefined;

	/**
	 * Whether the modal should be visible when the transition is completed.
	 */
	@Input('auVisible') visible: boolean | undefined;

	/**
	 * Whether a backdrop should be created behind the modal.
	 */
	@Input('auBackdrop') backdrop: boolean | undefined;

	/**
	 * Whether the modal should be closed when clicking on the viewport outside the modal.
	 */
	@Input('auCloseOnOutsideClick') closeOnOutsideClick: boolean | undefined;

	/**
	 * Which element should contain the modal and backdrop DOM elements.
	 * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 */
	@Input('auContainer') container: HTMLElement | null | undefined;

	/**
	 * Value of the aria-label attribute to put on the close button.
	 */
	@Input('auAriaCloseButtonLabel') ariaCloseButtonLabel: string | undefined;

	/**
	 * Classes to add on the backdrop DOM element.
	 */
	@Input('auBackdropClass') backdropClass: string | undefined;

	/**
	 * Whether to display the close button.
	 */
	@Input('auCloseButton') closeButton: boolean | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	@Input('auSlotStructure') slotStructure: SlotContent<ModalContext>;
	@ContentChild(ModalStructureDirective, {static: false})
	slotStructureFromContent: ModalStructureDirective | null;

	@Input('auSlotHeader') slotHeader: SlotContent<ModalContext>;
	@ContentChild(ModalHeaderDirective, {static: false})
	slotHeaderFromContent: ModalHeaderDirective | null;

	@Input('auSlotTitle') slotTitle: SlotContent<ModalContext>;
	@ContentChild(ModalTitleDirective, {static: false})
	slotTitleFromContent: ModalTitleDirective | null;

	@Input('auSlotDefault') slotDefault: SlotContent<ModalContext>;
	@ContentChild(ModalBodyDirective, {static: false})
	slotDefaultFromContent: ModalBodyDirective | null;

	@Input('auSlotFooter') slotFooter: SlotContent<ModalContext>;
	@ContentChild(ModalFooterDirective, {static: false})
	slotFooterFromContent: ModalFooterDirective | null;

	/**
	 * Event to be triggered when the visible property changes.
	 */
	@Output('auVisibleChange') visibleChange = new EventEmitter<boolean>();

	/**
	 * Event to be triggered when the modal is about to be closed (i.e. the close method was called).
	 */
	@Output('auBeforeClose') beforeClose = new EventEmitter<ModalBeforeCloseEvent>();

	/**
	 * Event to be triggered when the transition is completed and the modal is not visible.
	 */
	@Output('auHidden') hidden = new EventEmitter<void>();

	/**
	 * Event to be triggered when the transition is completed and the modal is visible.
	 */
	@Output('auShown') shown = new EventEmitter<void>();

	readonly defaultSlots = writable(defaultConfig);

	readonly _widget = callWidgetFactory(createModal, 'modal', this.defaultSlots);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	readonly modalDirective = mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
	readonly backdropDirective = mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);

	readonly state: Signal<ModalState> = toSignal(this._widget.state$, {requireSync: true});

	constructor() {
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

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotDefault: this.slotDefaultFromContent?.templateRef,
			slotFooter: this.slotFooterFromContent?.templateRef,
			slotHeader: this.slotHeaderFromContent?.templateRef,
			slotStructure: this.slotStructureFromContent?.templateRef,
			slotTitle: this.slotTitleFromContent?.templateRef,
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
