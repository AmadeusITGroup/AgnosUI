import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute} from '@agnos-ui/angular-headless';
import type {AlertContext, AlertWidget} from './alert.gen';
import {createAlert} from './alert.gen';
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

/**
 * Directive to be used as a structural directive for the body of an alert component.
 *
 * This directive allows the use of a template reference for the alert body content.
 *
 * @template AlertContext - The context type for the alert body template.
 */
@Directive({selector: 'ng-template[auAlertBody]', standalone: true})
export class AlertBodyDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(_dir: AlertBodyDirective, context: unknown): context is AlertContext {
		return true;
	}
}

/**
 * Directive to define the structure of an alert component.
 *
 * This directive uses a `TemplateRef` to inject the template reference of the alert context.
 * It also includes a static method to guard the template context type.
 *
 * @template AlertContext - The context type for the alert template.
 */
@Directive({selector: 'ng-template[auAlertStructure]', standalone: true})
export class AlertStructureDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(_dir: AlertStructureDirective, context: unknown): context is AlertContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, AlertStructureDirective],
	template: ` <ng-template auAlertStructure #structure let-state="state" let-api="api" let-directives="directives">
		<div class="alert-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
		</div>
		@if (state.dismissible()) {
			<button type="button" class="btn-close" (click)="api.close()" [attr.aria-label]="state.ariaCloseButtonLabel()"></button>
		}
	</ng-template>`,
})
class AlertDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<AlertContext>;
}

/**
 * Represents the default slot structure for the alert component.
 *
 * This constant is an instance of `ComponentTemplate` which uses
 * `AlertDefaultSlotsComponent` as the component and 'structure' as the template type.
 */
export const alertDefaultSlotStructure = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');

/**
 * AlertComponent is a UI component that extends BaseWidgetDirective to provide
 * an alert box with various customizable properties and behaviors.
 *
 * @remarks
 * This component is designed to be used with Bootstrap styles and supports
 * various Bootstrap contextual classes for different alert types.
 */
@Component({
	selector: '[auAlert]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseDirective],
	template: ` <ng-template #content>
			<ng-content></ng-content>
		</ng-template>

		@if (!state.hidden()) {
			<div
				[auUse]="directives.transitionDirective"
				class="au-alert alert alert-{{ state.type() }} {{ state.className() }} {{ state.dismissible() ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
			</div>
		}`,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> {
	/**
	 * Type of the alert, following bootstrap types.
	 *
	 * @defaultValue `'primary'`
	 */
	@Input('auType')
	type: BSContextualClass | undefined;

	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auDismissible', transform: auBooleanAttribute})
	dismissible: boolean | undefined;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue `fadeTransition`
	 */
	@Input('auTransition')
	transition: TransitionFn | undefined;

	/**
	 * If `true` the alert is visible to the user
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auVisible', transform: auBooleanAttribute})
	visible: boolean | undefined;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auAnimatedOnInit', transform: auBooleanAttribute})
	animatedOnInit: boolean | undefined;

	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute})
	animated: boolean | undefined;

	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	@Input('auAriaCloseButtonLabel') ariaCloseButtonLabel: string | undefined;

	/**
	 * Template for the alert content
	 */
	@Input('auChildren') children: SlotContent<AlertContext>;
	@ContentChild(AlertBodyDirective, {static: false})
	slotDefaultFromContent: AlertBodyDirective | undefined;

	/**
	 * Global template for the alert component
	 */
	@Input('auStructure') structure: SlotContent<AlertContext>;
	@ContentChild(AlertStructureDirective, {static: false}) slotStructureFromContent: AlertStructureDirective | undefined;

	/**
	 * Callback called when the alert visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auVisibleChange') visibleChange = new EventEmitter<boolean>();

	/**
	 * Callback called when the alert is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auHidden') hidden = new EventEmitter<void>();

	/**
	 * Callback called when the alert is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auShown') shown = new EventEmitter<void>();

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	@ViewChild('content', {static: true})
	slotChildren?: TemplateRef<void>;

	constructor() {
		super(
			callWidgetFactory({
				factory: createAlert,
				widgetName: 'alert',
				defaultConfig: {
					structure: alertDefaultSlotStructure,
				},
				events: {
					onVisibleChange: (event) => this.visibleChange.emit(event),
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
				},
				slotTemplates: () => ({
					children: this.slotDefaultFromContent?.templateRef,
					structure: this.slotStructureFromContent?.templateRef,
				}),
				slotChildren: () => this.slotChildren,
			}),
		);
	}
}
