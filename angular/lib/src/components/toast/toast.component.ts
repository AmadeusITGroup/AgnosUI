import type {SlotContent, ToastContext, ToastProps, ToastWidget, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	CachedProperty,
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createToast,
	mergeDirectives,
} from '@agnos-ui/angular-headless';
import type {WritableSignal} from '@amadeus-it-group/tansu';
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

@Directive({selector: 'ng-template[auToastBody]', standalone: true})
export class ToastBodyDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(dir: ToastBodyDirective, context: unknown): context is ToastContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auToastStructure]', standalone: true})
export class ToastStructureDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(dir: ToastStructureDirective, context: unknown): context is ToastContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auToastHeader]', standalone: true})
export class ToastHeaderDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(dir: ToastHeaderDirective, context: unknown): context is ToastContext {
		return true;
	}
}
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, ToastStructureDirective],
	template: ` <ng-template auToastStructure #structure let-state="state" let-widget="widget">
		@if (state.slotHeader) {
			<div class="toast-header">
				<ng-template [auSlot]="state.slotHeader" [auSlotProps]="{state, widget}"></ng-template>
				@if (state.dismissible) {
					<button type="button" class="btn-close me-0 ms-auto" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible && !state.slotHeader) {
			<button
				type="button"
				class="btn-close btn-close-white me-2 m-auto"
				(click)="widget.api.close()"
				[attr.aria-label]="state.ariaCloseButtonLabel"
			></button>
		}
	</ng-template>`,
})
export class ToastDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure: TemplateRef<ToastContext>;
}

export const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<ToastProps> = {
	slotStructure: toastDefaultSlotStructure,
};

@Component({
	selector: '[auToast]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseDirective, SlotDefaultDirective],
	template: ` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>
		@if (!state().hidden) {
			<div
				[auUse]="toastDirective"
				class="au-toast toast {{ state().className }}"
				[class.d-flex]="!state().slotHeader"
				[class.toast-dismissible]="state().dismissible"
				role="alert"
				aria-atomic="true"
			>
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}`,
})
export class ToastComponent extends BaseWidgetDirective<ToastWidget> implements AfterContentChecked {
	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 */
	@Input({alias: 'auDismissible', transform: auBooleanAttribute})
	dismissible: boolean | undefined;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of CommonAlertProps.animationOnInit, the animation can be optionally skipped during the showing process.
	 */
	@Input('auTransition')
	transition: TransitionFn | undefined;

	/**
	 * If `true` the alert is visible to the user
	 */
	@Input({alias: 'auVisible', transform: auBooleanAttribute})
	visible: boolean | undefined;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 */
	@Input({alias: 'auAnimationOnInit', transform: auBooleanAttribute})
	animationOnInit: boolean | undefined;

	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 */
	@Input({alias: 'auAnimation', transform: auBooleanAttribute})
	animation: boolean | undefined;

	/**
	 * If `true` automatically hides the toast after the delay.
	 */
	@Input({alias: 'auAutohide', transform: auBooleanAttribute})
	autohide: boolean | undefined;

	/**
	 * Delay in milliseconds before hiding the toast.
	 */
	@Input({alias: 'auDelay', transform: auNumberAttribute})
	delay: number | undefined;

	/**
	 * Accessibility close button label
	 */
	@Input('auAriaCloseButtonLabel') ariaCloseButtonLabel: string | undefined;

	@Input('auSlotDefault') slotDefault: SlotContent<ToastContext>;
	@ContentChild(ToastBodyDirective, {static: false})
	slotDefaultFromContent: ToastBodyDirective | null;

	@Input('auSlotStructure') slotStructure: SlotContent<ToastContext>;
	@ContentChild(ToastStructureDirective, {static: false}) slotStructureFromContent: ToastStructureDirective | undefined;

	@Input('auSlotHeader') slotHeader: SlotContent<ToastContext>;
	@ContentChild(ToastHeaderDirective, {static: false}) slotHeaderFromContent: ToastHeaderDirective | undefined;

	/**
	 * Callback called when the alert visibility changed.
	 */
	@Output('auVisibleChange') visibleChange = new EventEmitter<boolean>();

	/**
	 * Callback called when the alert is hidden.
	 */
	@Output('auHidden') hidden = new EventEmitter<void>();

	/**
	 * Callback called when the alert is shown.
	 */
	@Output('auShown') shown = new EventEmitter<void>();

	readonly defaultSlots: WritableSignal<Partial<ToastProps>> = writable(defaultConfig);
	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	readonly _widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		defaultConfig: this.defaultSlots,
		events: {
			onVisibleChange: (event) => this.visibleChange.emit(event),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		},
	});

	@CachedProperty
	get toastDirective() {
		return mergeDirectives(this._widget.directives.autohideDirective, this._widget.directives.transitionDirective);
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotDefault: this.slotDefaultFromContent?.templateRef,
			slotStructure: this.slotStructureFromContent?.templateRef,
			slotHeader: this.slotHeaderFromContent?.templateRef,
		});
	}
}
