import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute} from '@agnos-ui/angular-headless';
import type {ModalContext, ModalWidget, ModalBeforeCloseEvent} from './modal.gen';
import {createModal} from './modal.gen';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, output, viewChild, contentChild} from '@angular/core';
import {callWidgetFactory} from '../../config';

/**
 * Directive to provide the slot structure for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
 */
@Directive({selector: 'ng-template[auModalStructure]', standalone: true})
export class ModalStructureDirective<Data> {
	public templateRef = inject(TemplateRef<ModalContext<Data>>);
	static ngTemplateContextGuard<Data>(_dir: ModalStructureDirective<Data>, context: unknown): context is ModalContext<Data> {
		return true;
	}
}

/**
 * Directive to provide the slot header for the modal widget.
 * This directive provides a template reference for the {@link ModalContext<Data>}.
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
 * This directive provides a template reference for the {@link ModalContext<Data>}.
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
 * This directive provides a template reference for the {@link ModalContext<Data>}.
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
 * This directive provides a template reference for the {@link ModalContext<Data>}.
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
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, ModalHeaderDirective, ModalStructureDirective, UseDirective],
	template: `
		<ng-template auModalHeader #header let-state="state" let-api="api" let-directives="directives">
			<h5 class="modal-title">
				<ng-template [auSlot]="state.title()" [auSlotProps]="{state, api, directives}" />
			</h5>
			@if (state.closeButton()) {
				<button class="btn-close" [auUse]="directives.closeButtonDirective"></button>
			}
		</ng-template>
		<ng-template auModalStructure #structure let-state="state" let-api="api" let-directives="directives">
			@if (state.title()) {
				<div class="modal-header">
					<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
				</div>
			}
			<div class="modal-body">
				<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
			</div>
			@if (state.footer()) {
				<div class="modal-footer">
					<ng-template [auSlot]="state.footer()" [auSlotProps]="{state, api, directives}" />
				</div>
			}
		</ng-template>
	`,
})
class ModalDefaultSlotsComponent<Data> {
	readonly header = viewChild.required<TemplateRef<ModalContext<Data>>>('header');
	readonly structure = viewChild.required<TemplateRef<ModalContext<Data>>>('structure');
}

/**
 * Default slot for modal header.
 */
export const modalDefaultSlotHeader: SlotContent<ModalContext<any>> = new ComponentTemplate(ModalDefaultSlotsComponent, 'header');

/**
 * Default slot for modal structure.
 */
export const modalDefaultSlotStructure: SlotContent<ModalContext<any>> = new ComponentTemplate(ModalDefaultSlotsComponent, 'structure');

/**
 * Modal component.
 */
@Component({
	selector: '[auModal]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseMultiDirective, SlotDirective],
	template: `
		<ng-template #content><ng-content /></ng-template>
		@if (!state.backdropHidden()) {
			<div class="modal-backdrop" [auUseMulti]="[directives.backdropPortalDirective, directives.backdropDirective]"></div>
		}
		@if (!state.hidden()) {
			<div class="modal d-block" [auUseMulti]="[directives.modalPortalDirective, directives.modalDirective]">
				<div class="modal-dialog {{ state.fullscreen() ? 'modal-fullscreen' : '' }}">
					<div class="modal-content">
						<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
					</div>
				</div>
			</div>
		}
	`,
})
export class ModalComponent<Data> extends BaseWidgetDirective<ModalWidget<Data>> {
	/**
	 * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
	 *
	 * @defaultValue `true`
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * The transition to use for the backdrop behind the modal (if present).
	 *
	 * @defaultValue `fadeTransition`
	 */
	readonly backdropTransition = input<TransitionFn>(undefined, {alias: 'auBackdropTransition'});

	/**
	 * The transition to use for the modal.
	 *
	 * @defaultValue `fadeTransition`
	 */
	readonly modalTransition = input<TransitionFn>(undefined, {alias: 'auModalTransition'});

	/**
	 * Whether the modal should be visible when the transition is completed.
	 *
	 * @defaultValue `false`
	 */
	readonly visible = input(undefined, {alias: 'auVisible', transform: auBooleanAttribute});

	/**
	 * Whether a backdrop should be created behind the modal.
	 *
	 * @defaultValue `true`
	 */
	readonly backdrop = input(undefined, {alias: 'auBackdrop', transform: auBooleanAttribute});

	/**
	 * Whether the modal should be closed when clicking on the viewport outside the modal.
	 *
	 * @defaultValue `true`
	 */
	readonly closeOnOutsideClick = input(undefined, {alias: 'auCloseOnOutsideClick', transform: auBooleanAttribute});

	/**
	 * Which element should contain the modal and backdrop DOM elements.
	 * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 *
	 * @defaultValue
	 * ```ts
	 * typeof window !== 'undefined' ? document.body : null
	 * ```
	 */
	readonly container = input<HTMLElement | null>(undefined, {alias: 'auContainer'});

	/**
	 * Value of the aria-label attribute to put on the close button.
	 *
	 * @defaultValue `'Close'`
	 */
	readonly ariaCloseButtonLabel = input<string>(undefined, {alias: 'auAriaCloseButtonLabel'});

	/**
	 * Classes to add on the backdrop DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly backdropClass = input<string>(undefined, {alias: 'auBackdropClass'});

	/**
	 * Whether to display the close button.
	 *
	 * @defaultValue `true`
	 */
	readonly closeButton = input(undefined, {alias: 'auCloseButton', transform: auBooleanAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * Option to create a fullscreen modal, according to the bootstrap documentation.
	 *
	 * @defaultValue `false`
	 */
	readonly fullscreen = input(undefined, {alias: 'auFullscreen', transform: auBooleanAttribute});

	/**
	 * Structure of the modal.
	 * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
	 */
	readonly structure = input<SlotContent<ModalContext<Data>>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(ModalStructureDirective);

	/**
	 * Header of the modal. The default header includes {@link ModalProps.title|title}.
	 */
	readonly header = input<SlotContent<ModalContext<Data>>>(undefined, {alias: 'auHeader'});
	readonly slotHeaderFromContent = contentChild(ModalHeaderDirective);

	/**
	 * Title of the modal.
	 */
	readonly title = input<SlotContent<ModalContext<Data>>>(undefined, {alias: 'auTitle'});
	readonly slotTitleFromContent = contentChild(ModalTitleDirective);

	/**
	 * Body of the modal.
	 */
	readonly children = input<SlotContent<ModalContext<Data>>>(undefined, {alias: 'auChildren'});
	readonly slotDefaultFromContent = contentChild(ModalBodyDirective);

	/**
	 * Footer of the modal.
	 */
	readonly footer = input<SlotContent<ModalContext<Data>>>(undefined, {alias: 'auFooter'});
	readonly slotFooterFromContent = contentChild(ModalFooterDirective);

	/**
	 * Data to use in content slots
	 */
	readonly contentData = input<Data>(undefined, {alias: 'auContentData'});

	/**
	 * Event to be triggered when the visible property changes.
	 *
	 * @param visible - new value of the visible propery
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly visibleChange = output<boolean>({alias: 'auVisibleChange'});

	/**
	 * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
	 *
	 * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
	 * to cancel the close process.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly beforeClose = output<ModalBeforeCloseEvent>({alias: 'auBeforeClose'});

	/**
	 * Event to be triggered when the transition is completed and the modal is not visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly hidden = output<void>({alias: 'auHidden'});

	/**
	 * Event to be triggered when the transition is completed and the modal is visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly shown = output<void>({alias: 'auShown'});

	readonly slotChildren = viewChild<TemplateRef<void>>('content');

	constructor() {
		super(
			callWidgetFactory<ModalWidget<Data>>({
				factory: createModal,
				widgetName: 'modal',
				defaultConfig: {
					header: modalDefaultSlotHeader,
					structure: modalDefaultSlotStructure,
				},
				events: {
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
					onBeforeClose: (event) => this.beforeClose.emit(event),
					onVisibleChange: (event) => this.visibleChange.emit(event),
				},
				slotTemplates: () =>
					({
						children: this.slotDefaultFromContent()?.templateRef,
						footer: this.slotFooterFromContent()?.templateRef,
						header: this.slotHeaderFromContent()?.templateRef,
						structure: this.slotStructureFromContent()?.templateRef,
						title: this.slotTitleFromContent()?.templateRef,
					}) as any,
				slotChildren: () => this.slotChildren(),
			}),
		);
	}
}
