import type {SlotContent, TransitionFn, Directive as AuDirective} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
	auNumberAttribute,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, output, viewChild, contentChild} from '@angular/core';
import {callWidgetFactory} from '../../config';

import type {ToastContext, ToastWidget} from './toast.gen';
import {createToast} from './toast.gen';

/**
 * Directive to represent the body of a toast notification.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
@Directive({selector: 'ng-template[auToastBody]'})
export class ToastBodyDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastBodyDirective, context: unknown): context is ToastContext {
		return true;
	}
}

/**
 * Directive to define the structure of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
@Directive({selector: 'ng-template[auToastStructure]'})
export class ToastStructureDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastStructureDirective, context: unknown): context is ToastContext {
		return true;
	}
}

/**
 * Directive representing the header of a toast component.
 * This directive uses a template reference to render the {@link ToastContext}.
 */
@Directive({selector: 'ng-template[auToastHeader]'})
export class ToastHeaderDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastHeaderDirective, context: unknown): context is ToastContext {
		return true;
	}
}
@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, ToastStructureDirective, UseDirective],
	template: ` <ng-template auToastStructure #structure let-state="state" let-api="api" let-directives="directives">
		@if (state.header()) {
			<div class="toast-header">
				<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
				@if (state.dismissible()) {
					<button class="btn-close me-0 ms-auto" [auUse]="directives.closeButtonDirective"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
		</div>
		@if (state.dismissible() && !state.header()) {
			<button class="btn-close btn-close-white me-2 m-auto" [auUse]="directives.closeButtonDirective"></button>
		}
	</ng-template>`,
})
class ToastDefaultSlotsComponent {
	readonly structure = viewChild.required<TemplateRef<ToastContext>>('structure');
}

/**
 * Represents the default slot structure for the toast component.
 */
export const toastDefaultSlotStructure: SlotContent<ToastContext> = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');

/**
 * The `ToastComponent` is a UI component that displays a toast notification.
 * It extends the `BaseWidgetDirective` and provides various configurable properties
 * and events to control the behavior and appearance of the toast.
 */
@Component({
	selector: '[auToast]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseMultiDirective],
	template: ` <ng-template #content>
			<ng-content />
		</ng-template>
		@if (!state.hidden()) {
			<div
				[class.d-flex]="!state.header()"
				[class.toast-dismissible]="state.dismissible()"
				[auUseMulti]="[directives.autoHideDirective, directives.transitionDirective, directives.bodyDirective]"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
			</div>
		}`,
})
export class ToastComponent extends BaseWidgetDirective<ToastWidget> {
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
	 * If `true` automatically hides the toast after the delay.
	 *
	 * @defaultValue `true`
	 */
	readonly autoHide = input(undefined, {alias: 'auAutoHide', transform: auBooleanAttribute});

	/**
	 * Delay in milliseconds before hiding the toast.
	 *
	 * @defaultValue `5000`
	 */
	readonly delay = input(undefined, {alias: 'auDelay', transform: auNumberAttribute});

	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	readonly ariaCloseButtonLabel = input<string>(undefined, {alias: 'auAriaCloseButtonLabel'});

	/**
	 * Template for the toast content
	 */
	readonly children = input<SlotContent<ToastContext>>(undefined, {alias: 'auChildren'});
	readonly slotDefaultFromContent = contentChild(ToastBodyDirective);

	/**
	 * Global template for the toast component
	 */
	readonly structure = input<SlotContent<ToastContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(ToastStructureDirective);

	/**
	 * Header template for the toast component
	 */
	readonly header = input<SlotContent<ToastContext>>(undefined, {alias: 'auHeader'});
	readonly slotHeaderFromContent = contentChild(ToastHeaderDirective);

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
				factory: createToast,
				widgetName: 'toast',
				defaultConfig: {
					structure: toastDefaultSlotStructure,
				},
				events: {
					onVisibleChange: (event) => this.visibleChange.emit(event),
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
				},
				slotTemplates: () => ({
					children: this.slotDefaultFromContent()?.templateRef,
					structure: this.slotStructureFromContent()?.templateRef,
					header: this.slotHeaderFromContent()?.templateRef,
				}),
				slotChildren: () => this.slotChildren(),
			}),
		);
	}
}
