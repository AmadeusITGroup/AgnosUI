import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotChildrenDirective,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
} from '@agnos-ui/angular-headless';
import type {ModalContext, ModalProps, ModalWidget, ModalBeforeCloseEvent} from './modal';
import {createModal} from './modal';
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
import {callWidgetFactory} from '../../config';

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
	imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective],
	template: `
		<ng-template auModalHeader #header let-state="state" let-widget="widget">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.title" [auSlotProps]="{state, widget}"></ng-template>
			</h5>
			@if (state.closeButton) {
				<button class="btn-close" [auUse]="widget.directives.closeButtonDirective"></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-widget="widget">
			@if (state.title) {
				<div class="modal-header">
					<ng-template [auSlot]="state.header" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.children" [auSlotProps]="{state, widget}"></ng-template>
			</div>
			@if (state.footer) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.footer" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			}
		</ng-template>
	`,
})
export class ModalDefaultSlotsComponent<Data> {
	@ViewChild('header', {static: true}) header!: TemplateRef<ModalContext<Data>>;
	@ViewChild('structure', {static: true}) structure!: TemplateRef<ModalContext<Data>>;
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
	header: modalDefaultSlotHeader,
	structure: modalDefaultSlotStructure,
};

/**
 * Modal component.
 */
@Component({
	selector: '[auModal]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseMultiDirective, SlotDirective, SlotChildrenDirective],
	template: `
		<ng-template [auSlotChildren]="defaultSlots"><ng-content></ng-content></ng-template>
		@if (!state().backdropHidden) {
			<div class="modal-backdrop" [auUseMulti]="[widget.directives.backdropPortalDirective, widget.directives.backdropDirective]"></div>
		}
		@if (!state().hidden) {
			<div class="modal d-block" [auUseMulti]="[widget.directives.modalPortalDirective, widget.directives.modalDirective]">
				<div class="modal-dialog {{ state().fullscreen ? 'modal-fullscreen' : '' }}">
					<div class="modal-content">
						<ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), widget}"></ng-template>
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
	@Input({alias: 'auAnimated', transform: auBooleanAttribute}) animated: boolean | undefined;

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

	/**
	 * Option to create a fullscreen modal, according to the bootstrap documentation.
	 */
	@Input({alias: 'auFullscreen', transform: auBooleanAttribute}) fullscreen: boolean | undefined;

	/**
	 * Structure of the modal.
	 * The default structure uses {@link ModalCommonPropsAndState.header|header}, {@link ModalCommonPropsAndState.children|children} and {@link ModalCommonPropsAndState.footer|footer}.
	 */
	@Input('auStructure') structure: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalStructureDirective, {static: false})
	slotStructureFromContent: ModalStructureDirective<Data> | undefined;

	/**
	 * Header of the modal. The default header includes {@link ModalCommonPropsAndState.title|title}.
	 */
	@Input('auHeader') header: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalHeaderDirective, {static: false})
	slotHeaderFromContent: ModalHeaderDirective<Data> | undefined;

	/**
	 * Title of the modal.
	 */
	@Input('auTitle') title: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalTitleDirective, {static: false})
	slotTitleFromContent: ModalTitleDirective<Data> | undefined;

	/**
	 * Body of the modal.
	 */
	@Input('auChildren') children: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalBodyDirective, {static: false})
	slotChildrenFromContent: ModalBodyDirective<Data> | undefined;

	/**
	 * Footer of the modal.
	 */
	@Input('auFooter') footer: SlotContent<ModalContext<Data>>;
	@ContentChild(ModalFooterDirective, {static: false})
	slotFooterFromContent: ModalFooterDirective<Data> | undefined;

	/**
	 * Data to use in content slots
	 */
	// eslint-disable-next-line @agnos-ui/angular-check-props
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

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			children: this.slotChildrenFromContent?.templateRef,
			footer: this.slotFooterFromContent?.templateRef,
			header: this.slotHeaderFromContent?.templateRef,
			structure: this.slotStructureFromContent?.templateRef,
			title: this.slotTitleFromContent?.templateRef,
		} as any);
	}
}
