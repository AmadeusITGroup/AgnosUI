import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute} from '@agnos-ui/angular-headless';
import type {AlertContext, AlertWidget} from './alert.gen';
import {createAlert} from './alert.gen';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, output, viewChild, contentChild} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {BSContextualClass} from '@agnos-ui/core-bootstrap/types';

/**
 * Directive to be used as a structural directive for the body of an alert component.
 *
 * This directive allows the use of a template reference for the alert body content, with type {@link AlertContext}.
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
 * This directive uses a `TemplateRef` to inject the template reference of the {@link AlertContext}.
 */
@Directive({selector: 'ng-template[auAlertStructure]', standalone: true})
export class AlertStructureDirective {
	public templateRef = inject(TemplateRef<AlertContext>);
	static ngTemplateContextGuard(_dir: AlertStructureDirective, context: unknown): context is AlertContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, AlertStructureDirective],
	template: ` <ng-template auAlertStructure #structure let-state="state" let-api="api" let-directives="directives">
		<div class="alert-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
		</div>
		@if (state.dismissible()) {
			<button type="button" class="btn-close" (click)="api.close()" [attr.aria-label]="state.ariaCloseButtonLabel()"></button>
		}
	</ng-template>`,
})
class AlertDefaultSlotsComponent {
	readonly structure = viewChild.required<TemplateRef<AlertContext>>('structure');
}

/**
 * Represents the default slot structure for the alert component.
 */
export const alertDefaultSlotStructure: SlotContent<AlertContext> = new ComponentTemplate(AlertDefaultSlotsComponent, 'structure');

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
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseDirective],
	template: ` <ng-template #content>
			<ng-content />
		</ng-template>

		@if (!state.hidden()) {
			<div
				[auUse]="directives.transitionDirective"
				class="au-alert alert alert-{{ state.type() }} {{ state.className() }} {{ state.dismissible() ? 'alert-dismissible' : '' }}"
				role="alert"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
			</div>
		}`,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> {
	/**
	 * Type of the alert, following bootstrap types.
	 *
	 * @defaultValue `'primary'`
	 */
	readonly type = input<BSContextualClass>(undefined, {alias: 'auType'});

	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 *
	 * @defaultValue `true`
	 */
	readonly dismissible = input(undefined, {alias: 'auDismissible', transform: auBooleanAttribute});

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue `fadeTransition`
	 */
	readonly transition = input<TransitionFn>(undefined, {alias: 'auTransition'});

	/**
	 * If `true` the alert is visible to the user
	 *
	 * @defaultValue `true`
	 */
	readonly visible = input(undefined, {alias: 'auVisible', transform: auBooleanAttribute});

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 *
	 * @defaultValue `false`
	 */
	readonly animatedOnInit = input(undefined, {alias: 'auAnimatedOnInit', transform: auBooleanAttribute});

	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 *
	 * @defaultValue `true`
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	readonly ariaCloseButtonLabel = input<string>(undefined, {alias: 'auAriaCloseButtonLabel'});

	/**
	 * Template for the alert content
	 */
	readonly children = input<SlotContent<AlertContext>>(undefined, {alias: 'auChildren'});
	readonly slotDefaultFromContent = contentChild(AlertBodyDirective);

	/**
	 * Global template for the alert component
	 */
	readonly structure = input<SlotContent<AlertContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(AlertStructureDirective);

	/**
	 * Callback called when the alert visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly visibleChange = output<boolean>({alias: 'auVisibleChange'});

	/**
	 * Callback called when the alert is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly hidden = output<void>({alias: 'auHidden'});

	/**
	 * Callback called when the alert is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly shown = output<void>({alias: 'auShown'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	readonly slotChildren = viewChild<TemplateRef<void>>('content');

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
					children: this.slotDefaultFromContent()?.templateRef,
					structure: this.slotStructureFromContent()?.templateRef,
				}),
				slotChildren: () => this.slotChildren(),
			}),
		);
	}
}
