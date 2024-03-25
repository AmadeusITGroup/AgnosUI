import {BaseWidgetDirective, type ToastWidget, auBooleanAttribute, callWidgetFactory, createToast} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-toast',
	template: `
		@if (!state().hidden) {
			<div class="alert {{ state().className }}">
				<ng-content />
				@if (state().dismissible) {
					<button class="btn btn-sm btn-circle btn-ghost justify-self-end" (click)="api.close()" [attr.aria-label]="state().ariaCloseButtonLabel">
						✕
					</button>
				}
			</div>
		}
	`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends BaseWidgetDirective<ToastWidget> {
	@Input({transform: auBooleanAttribute})
	visible: boolean | undefined;
	@Input({transform: auBooleanAttribute})
	dismissible: boolean | undefined;
	@Input() ariaCloseButtonLabel: string | undefined;
	@Input() className: string | undefined;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Output() hidden = new EventEmitter<void>();
	@Output() shown = new EventEmitter<void>();
	readonly _widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		defaultConfig: {},
		events: {onVisibleChange: (event) => this.visibleChange.emit(event), onShown: () => this.shown.emit(), onHidden: () => this.hidden.emit()},
	});
}
