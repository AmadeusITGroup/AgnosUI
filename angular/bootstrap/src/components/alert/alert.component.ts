import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
} from '@agnos-ui/angular-headless';
import type {AlertContext, AlertProps, AlertWidget} from './alert';
import {createAlert} from './alert';
import {type WritableSignal, writable} from '@amadeus-it-group/tansu';
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
import type {BSContextualClass} from '@agnos-ui/core-bootstrap/types';

@Directive({selector: 'ng-template[auAlertBody]', standalone: true})
export class AlertBodyDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(dir: AlertBodyDirective, context: unknown): context is AlertContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAlertStructure]', standalone: true})
export class AlertStructureDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(dir: AlertStructureDirective, context: unknown): context is AlertContext {
		return true;
	}
}
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, AlertStructureDirective],
	template: ` <ng-template auAlertStructure #structure let-state="state" let-widget="widget">
		<div class="alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
		</div>
		@if (state.dismissible) {
			<button type="button" class="btn-close" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
		}
	</ng-template>`,
})
export class AlertDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<AlertContext>;
}

export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');

export type PartialAlertProps = Partial<AlertProps>;
const defaultConfig: PartialAlertProps = {
	slotStructure: alertDefaultSlotStructure,
};

@Component({
	selector: '[auAlert]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseDirective, SlotDefaultDirective],
	template: ` <ng-template [auSlotDefault]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>

		@if (!state().hidden) {
			<div
				[auUse]="widget.directives.transitionDirective"
				class="au-alert alert alert-{{ state().type }} {{ state().className }} {{ state().dismissible ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
			</div>
		}`,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> implements AfterContentChecked {
	/**
	 * Type of the alert, following bootstrap types.
	 */
	@Input('auType')
	type: BSContextualClass | undefined;

	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 */
	@Input({alias: 'auDismissible', transform: auBooleanAttribute})
	dismissible: boolean | undefined;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of CommonAlertProps.animatedOnInit, the animation can be optionally skipped during the showing process.
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
	@Input({alias: 'auAnimatedOnInit', transform: auBooleanAttribute})
	animatedOnInit: boolean | undefined;

	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute})
	animated: boolean | undefined;

	/**
	 * Accessibility close button label
	 */
	@Input('auAriaCloseButtonLabel') ariaCloseButtonLabel: string | undefined;

	@Input('auSlotDefault') slotDefault: SlotContent<AlertContext>;
	@ContentChild(AlertBodyDirective, {static: false})
	slotDefaultFromContent: AlertBodyDirective | undefined;

	@Input('auSlotStructure') slotStructure: SlotContent<AlertContext>;
	@ContentChild(AlertStructureDirective, {static: false}) slotStructureFromContent: AlertStructureDirective | undefined;

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

	readonly defaultSlots: WritableSignal<PartialAlertProps> = writable(defaultConfig);
	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	readonly _widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		defaultConfig: this.defaultSlots,
		events: {
			onVisibleChange: (event) => this.visibleChange.emit(event),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		},
	});

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotDefault: this.slotDefaultFromContent?.templateRef,
			slotStructure: this.slotStructureFromContent?.templateRef,
		});
	}
}
