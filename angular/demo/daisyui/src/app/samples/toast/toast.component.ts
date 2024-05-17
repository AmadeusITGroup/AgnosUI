import {BaseWidgetDirective, type ToastWidget, auBooleanAttribute, callWidgetFactory, createToast} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, inject, input, model, output} from '@angular/core';
import closeIcon from '@agnos-ui/common/samples/common/close_icon.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-toast',
	template: `
		@if (!state().hidden) {
			<div class="alert {{ state().className }} flex">
				<ng-content />
				@if (state().dismissible) {
					<button
						class="btn btn-sm btn-circle btn-ghost"
						(click)="api.close()"
						[attr.aria-label]="state().ariaCloseButtonLabel"
						[innerHTML]="closeIcon"
					></button>
				}
			</div>
		}
	`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends BaseWidgetDirective<ToastWidget> {
	readonly closeIcon = inject(DomSanitizer).bypassSecurityTrustHtml(closeIcon);

	readonly visible = model(false);
	readonly dismissible = input(undefined, {transform: auBooleanAttribute});
	readonly ariaCloseButtonLabel = input<string>();
	readonly className = input<string>();
	readonly hidden = output();
	readonly shown = output();

	readonly _widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		events: {onVisibleChange: this.visible.set, onShown: this.shown.emit, onHidden: this.hidden.emit},
	});
}
