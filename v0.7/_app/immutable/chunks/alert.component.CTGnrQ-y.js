const e=`import type {AlertWidget} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	UseDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createAlert,
	createSimpleClassTransition,
} from '@agnos-ui/angular-headless';

import {ChangeDetectionStrategy, Component, inject, input, model, output} from '@angular/core';
import closeIcon from './close_icon.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-alert',
	imports: [UseDirective],
	template: \`
		@if (!state.hidden()) {
			<div role="alert" class="flex alert {{ state.className() }}" [auUse]="directives.transitionDirective">
				<ng-content />
				@if (state.dismissible()) {
					<button
						class="btn btn-sm btn-circle btn-ghost ms-auto"
						(click)="api.close()"
						[attr.aria-label]="state.ariaCloseButtonLabel()"
						[innerHTML]="closeIcon"
					></button>
				}
			</div>
		}
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseWidgetDirective<AlertWidget> {
	readonly closeIcon = inject(DomSanitizer).bypassSecurityTrustHtml(closeIcon);

	readonly dismissible = input(undefined, {transform: auBooleanAttribute});
	readonly visible = model(false);
	readonly ariaCloseButtonLable = input<string>();
	readonly className = input<string>();
	readonly hidden = output();
	readonly shown = output();

	constructor() {
		super(
			callWidgetFactory({
				factory: createAlert,
				widgetName: 'alert',
				events: {
					onVisibleChange: (event) => this.visible.set(event),
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
				},
				defaultConfig: {
					transition: createSimpleClassTransition({
						showClasses: ['transition-opacity'],
						hideClasses: ['opacity-0'],
						animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
					}),
				},
			}),
		);
	}
}
`;export{e as default};
