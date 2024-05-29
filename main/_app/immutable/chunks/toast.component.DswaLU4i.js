const t=`import {BaseWidgetDirective, type ToastWidget, type ToastProps, auBooleanAttribute, callWidgetFactory, createToast} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject} from '@angular/core';
import closeIcon from './close_icon.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-toast',
	template: \`
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
	\`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends BaseWidgetDirective<ToastWidget> {
	readonly closeIcon = inject(DomSanitizer).bypassSecurityTrustHtml(closeIcon);

	@Input({transform: auBooleanAttribute})
	visible?: ToastProps['visible'];
	@Input({transform: auBooleanAttribute})
	dismissible?: ToastProps['dismissible'];
	@Input() ariaCloseButtonLabel?: ToastProps['ariaCloseButtonLabel'];
	@Input() className?: ToastProps['className'];
	@Output() visibleChange = new EventEmitter<boolean>();
	@Output() hidden = new EventEmitter<void>();
	@Output() shown = new EventEmitter<void>();

	readonly _widget = callWidgetFactory({
		factory: createToast,
		widgetName: 'toast',
		events: {onVisibleChange: (event) => this.visibleChange.emit(event), onShown: () => this.shown.emit(), onHidden: () => this.hidden.emit()},
	});
}
`;export{t as default};
