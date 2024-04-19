const t=`import type {AlertProps, AlertWidget} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	UseDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createAlert,
	createSimpleClassTransition,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-alert',
	imports: [UseDirective],
	template: \`
		@if (!state().hidden) {
			<div role="alert" class="alert {{ state().className }}" [auUse]="widget.directives.transitionDirective">
				<ng-content />
				@if (state().dismissible) {
					<button class="btn btn-sm btn-circle btn-ghost justify-self-end" (click)="api.close()" [attr.aria-label]="state().ariaCloseButtonLabel">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				}
			</div>
		}
	\`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> {
	@Input({transform: auBooleanAttribute})
	dismissible?: AlertProps['dismissible'];
	@Input({transform: auBooleanAttribute})
	visible?: AlertProps['visible'];
	@Input() ariaCloseButtonLabel?: AlertProps['ariaCloseButtonLabel'];
	@Input() className?: AlertProps['className'];
	@Output() visibleChange = new EventEmitter<boolean>();
	@Output() hidden = new EventEmitter<void>();
	@Output() shown = new EventEmitter<void>();

	readonly transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	readonly _widget = callWidgetFactory({
		factory: createAlert,
		widgetName: 'alert',
		events: {
			onVisibleChange: (event) => this.visibleChange.emit(event),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		},
		defaultConfig: {transition: this.transition},
	});
}
`;export{t as default};
