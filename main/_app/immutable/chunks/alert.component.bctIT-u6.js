const t=`import type {AlertProps, AlertWidget} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	UseDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createAlert,
	createSimpleClassTransition,
} from '@agnos-ui/angular-headless';

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject} from '@angular/core';
import closeIcon from './close_icon.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-alert',
	imports: [UseDirective],
	template: \`
		@if (!state().hidden) {
			<div role="alert" class="flex alert {{ state().className }}" [auUse]="widget.directives.transitionDirective">
				<ng-content />
				@if (state().dismissible) {
					<button
						class="btn btn-sm btn-circle btn-ghost ms-auto"
						(click)="api.close()"
						[attr.aria-label]="state().ariaCloseButtonLabel"
						[innerHTML]="closeIcon"
					></button>
				}
			</div>
		}
	\`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> {
	readonly closeIcon = inject(DomSanitizer).bypassSecurityTrustHtml(closeIcon);

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
