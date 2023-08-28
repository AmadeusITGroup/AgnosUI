import {writable} from '@amadeus-it-group/tansu';
import type {AlertContext as AlertCoreContext, TransitionFn, WidgetProps, WidgetState} from '@agnos-ui/core';
import {createAlert, toSlotContextWidget} from '@agnos-ui/core';
import {NgIf} from '@angular/common';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	inject,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {AdaptSlotContentProps, AdaptWidgetSlots, SlotContent} from '../slot.directive';
import {callWidgetFactory, ComponentTemplate, SlotDirective} from '../slot.directive';
import {SlotDefaultDirective} from '../slotDefault.directive';
import {UseDirective} from '../transition/use.directive';
import {patchSimpleChanges} from '../utils';

export type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;
export type AlertState = WidgetState<AlertWidget>;
export type AlertProps = WidgetProps<AlertWidget>;

export type AlertContext = AdaptSlotContentProps<AlertCoreContext>;

@Directive({selector: 'ng-template[auAlertBody]', standalone: true})
export class AlertBodyDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<AlertContext>>);
	static ngTemplateContextGuard(dir: AlertBodyDirective, context: unknown): context is AlertCoreContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAlertStructure]', standalone: true})
export class AlertStructureDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(dir: AlertStructureDirective, context: unknown): context is AlertCoreContext {
		return true;
	}
}
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgIf, SlotDirective, AlertStructureDirective],
	template: ` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
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
	</ng-template>`,
})
export class AlertDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure: TemplateRef<AlertCoreContext>;
}

export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<AlertProps> = {
	slotStructure: alertDefaultSlotStructure,
};

@Component({
	selector: 'au-alert',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgIf, SlotDirective, UseDirective, SlotDefaultDirective],
	template: ` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		<div
			*ngIf="!state().hidden"
			[auUse]="widget.directives.transitionDirective"
			class="au-alert d-flex w-100 alert alert-{{ state().type }} {{ state().className }}"
			role="alert"
		>
			<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
		</div>`,
})
export class AlertComponent implements OnChanges, AfterContentChecked {
	/**
	 * Type of the alert.
	 * There are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.
	 */
	@Input()
	type: string | undefined;

	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 */
	@Input()
	dismissible: boolean | undefined;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of AlertProps.animationOnInit, the animation can be optionally skipped during the showing process.
	 */
	@Input()
	transition: TransitionFn | undefined;

	/**
	 * If `true` the alert is visible to the user
	 */
	@Input()
	visible: boolean | undefined;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 */
	@Input()
	animationOnInit: boolean | undefined;

	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 */
	@Input()
	animation: boolean | undefined;

	/**
	 * Accessibility close button label
	 */
	@Input() ariaCloseButtonLabel: string | undefined;

	@Input() slotDefault: SlotContent<AdaptSlotContentProps<AlertCoreContext>>;
	@ContentChild(AlertBodyDirective, {static: false})
	slotDefaultFromContent: AlertBodyDirective | null;

	@Input() slotStructure: SlotContent<AdaptSlotContentProps<AlertCoreContext>>;
	@ContentChild(AlertStructureDirective, {static: false}) slotStructureFromContent: AlertStructureDirective | undefined;

	/**
	 * Callback called when the alert visibility changed.
	 */
	@Output() visibleChange = new EventEmitter<boolean>();

	/**
	 * Callback called when the alert is hidden.
	 */
	@Output() hidden = new EventEmitter<void>();

	/**
	 * Callback called when the alert is shown.
	 */
	@Output() shown = new EventEmitter<void>();

	readonly defaultSlots = writable(defaultConfig);
	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input() className: string | undefined;

	readonly _widget = callWidgetFactory(createAlert, 'alert', this.defaultSlots);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	readonly state: Signal<AlertState> = toSignal(this._widget.state$, {requireSync: true});

	constructor() {
		this._widget.patch({
			onVisibleChange: (event) => this.visibleChange.emit(event),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		});
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotDefault: this.slotDefaultFromContent?.templateRef,
			slotStructure: this.slotStructureFromContent?.templateRef,
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
