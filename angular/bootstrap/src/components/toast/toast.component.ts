import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
	auNumberAttribute,
} from '@agnos-ui/angular-headless';
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

import type {ToastContext, ToastWidget} from './toast.gen';
import {createToast} from './toast.gen';

@Directive({selector: 'ng-template[auToastBody]', standalone: true})
export class ToastBodyDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastBodyDirective, context: unknown): context is ToastContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auToastStructure]', standalone: true})
export class ToastStructureDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastStructureDirective, context: unknown): context is ToastContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auToastHeader]', standalone: true})
export class ToastHeaderDirective {
	public templateRef = inject(TemplateRef<ToastContext>);
	static ngTemplateContextGuard(_dir: ToastHeaderDirective, context: unknown): context is ToastContext {
		return true;
	}
}
@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, ToastStructureDirective, UseDirective],
	template: ` <ng-template auToastStructure #structure let-state="state" let-api="api" let-directives="directives">
		@if (state.header()) {
			<div class="toast-header">
				<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}"></ng-template>
				@if (state.dismissible()) {
					<button class="btn-close me-0 ms-auto" [auUse]="directives.closeButtonDirective"></button>
				}
			</div>
		}
		<div class="toast-body">
			<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}"></ng-template>
		</div>
		@if (state.dismissible() && !state.header()) {
			<button class="btn-close btn-close-white me-2 m-auto" [auUse]="directives.closeButtonDirective"></button>
		}
	</ng-template>`,
})
class ToastDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<ToastContext>;
}

export const toastDefaultSlotStructure = new ComponentTemplate(ToastDefaultSlotsComponent, 'structure');

@Component({
	selector: '[auToast]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, UseMultiDirective],
	template: ` <ng-template #content>
			<ng-content></ng-content>
		</ng-template>
		@if (!state.hidden()) {
			<div
				class="toast"
				[class.d-flex]="!state.header()"
				[class.toast-dismissible]="state.dismissible()"
				[auUseMulti]="[directives.autoHideDirective, directives.transitionDirective, directives.bodyDirective]"
			>
				<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template>
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
	 * If `true` automatically hides the toast after the delay.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auAutoHide', transform: auBooleanAttribute})
	autoHide: boolean | undefined;

	/**
	 * Delay in milliseconds before hiding the toast.
	 *
	 * @defaultValue `5000`
	 */
	@Input({alias: 'auDelay', transform: auNumberAttribute})
	delay: number | undefined;

	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	@Input('auAriaCloseButtonLabel') ariaCloseButtonLabel: string | undefined;

	/**
	 * Template for the toast content
	 */
	@Input('auChildren') children: SlotContent<ToastContext>;
	@ContentChild(ToastBodyDirective, {static: false})
	slotDefaultFromContent: ToastBodyDirective | undefined;

	/**
	 * Global template for the toast component
	 */
	@Input('auStructure') structure: SlotContent<ToastContext>;
	@ContentChild(ToastStructureDirective, {static: false}) slotStructureFromContent: ToastStructureDirective | undefined;

	/**
	 * Header template for the toast component
	 */
	@Input('auHeader') header: SlotContent<ToastContext>;
	@ContentChild(ToastHeaderDirective, {static: false}) slotHeaderFromContent: ToastHeaderDirective | undefined;

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
					children: this.slotDefaultFromContent?.templateRef,
					structure: this.slotStructureFromContent?.templateRef,
					header: this.slotHeaderFromContent?.templateRef,
				}),
				slotChildren: () => this.slotChildren,
			}),
		);
	}
}
