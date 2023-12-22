import type {ModalBeforeCloseEvent, ModalContext, ModalProps, ModalWidget, SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	CachedProperty,
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createModal,
	mergeDirectives,
} from '@agnos-ui/angular-headless';
import {writable} from '@amadeus-it-group/tansu';
import type {AfterContentChecked} from '@angular/core';
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
	inject,
} from '@angular/core';

/**
 * Directive to provide the slot structure for the modal widget.
 */
@Directive({selector: 'ng-template[auModalStructure]', standalone: true})
export class ModalStructureDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(dir: ModalStructureDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Directive to provide the slot header for the modal widget.
 */
@Directive({selector: 'ng-template[auModalHeader]', standalone: true})
export class ModalHeaderDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(_dir: ModalHeaderDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Directive to provide the slot title for the modal widget.
 */
@Directive({selector: 'ng-template[auModalTitle]', standalone: true})
export class ModalTitleDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(_dir: ModalTitleDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Directive to provide the default slot for the modal widget.
 */
@Directive({selector: 'ng-template[auModalBody]', standalone: true})
export class ModalBodyDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(_dir: ModalBodyDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Directive to provide the slot footer for the modal widget.
 */
@Directive({selector: 'ng-template[auModalFooter]', standalone: true})
export class ModalFooterDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(_dir: ModalFooterDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Component containing the default slots for the modal.
 */
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective],
	template: `
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
	`,
})
export class ModalDefaultSlotsComponent<Data> {
	@ViewChild('header', {static: true}) header: TemplateRef<ModalContext<Data>>;
	@ViewChild('structure', {static: true}) structure: TemplateRef<ModalContext<Data>>;
}

/**
 * Default slot for modal header.
 */
export const modalDefaultSlotHeader = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');

/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<ModalProps<any>> = {
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
	imports: [UseDirective, SlotDirective, SlotDefaultDirective],
	template: `
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
	`,
})
export class ModalComponent<Data> extends BaseWidgetDirective<ModalWidget<Data>> implements AfterContentChecked {
	/**
	 * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
	 */
	@Input({alias: 'auAnimation', transform: auBooleanAttribute}) animation: boolean | undefined;

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
	@Input({alias: 'auVisible', transform: auBooleanAttribute}) visible: boolean | undefined;

	/**
	 * Whether a backdrop should be created behind the modal.
	 */
	@Input({alias: 'auBackdrop', transform: auBooleanAttribute}) backdrop: boolean | undefined;

	/**
	 * Whether the modal should be closed when clicking on the viewport outside the modal.
	 */
	@Input({alias: 'auCloseOnOutsideClick', transform: auBooleanAttribute}) closeOnOutsideClick: boolean | undefined;

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
	@Input({alias: 'auCloseButton', transform: auBooleanAttribute}) closeButton: boolean | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	@Input('auSlotStructure') slotStructure: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalStructureDirective, {static: false})
	slotStructureFromContent: ModalStructureDirective<Data> | null;

	@Input('auSlotHeader') slotHeader: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalHeaderDirective, {static: false})
	slotHeaderFromContent: ModalHeaderDirective<Data> | null;

	@Input('auSlotTitle') slotTitle: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalTitleDirective, {static: false})
	slotTitleFromContent: ModalTitleDirective<Data> | null;

	@Input('auSlotDefault') slotDefault: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalBodyDirective, {static: false})
	slotDefaultFromContent: ModalBodyDirective<Data> | null;

	@Input('auSlotFooter') slotFooter: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalFooterDirective, {static: false})
	slotFooterFromContent: ModalFooterDirective<Data> | null;

	/**
	 * Data to use in content slots
	 */
	@Input('auContentData') contentData: Data | undefined;

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

	readonly _widget = callWidgetFactory<ModalWidget<Data>>({
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

	@CachedProperty
	get modalDirective() {
		return mergeDirectives(this._widget.directives.modalPortalDirective, this._widget.directives.modalDirective);
	}

	@CachedProperty
	get backdropDirective() {
		return mergeDirectives(this._widget.directives.backdropPortalDirective, this._widget.directives.backdropDirective);
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
}
