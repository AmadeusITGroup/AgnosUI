import {Component, inject, ChangeDetectionStrategy, input, effect, computed} from '@angular/core';
import {ToastComponent} from './toast.component';
import {ToasterService} from './toaster.service';
import {UseDirective} from '@agnos-ui/angular-headless';
import {toastPositions} from './toast.gen';

@Component({
	selector: '[auToaster]',
	imports: [UseDirective, ToastComponent],
	host: {
		class: 'au-toaster',
		'aria-live': 'polite',
		'aria-atomic': 'true',
	},
	template: `
		<div [class]="'au-toaster-container toast-container ' + positionClass()">
			@if (toasterService.options().closeAll && toasterService.toasts().length > 1) {
				<div class="d-flex position-relative align-items-end pb-2">
					<button class="au-toaster-closeAll btn btn-secondary me-0 ms-auto pe-auto" (click)="toasterService.closeAll()">
						{{ toasterService.options().closeAllLabel || 'Close all' }}
					</button>
				</div>
			}
			@for (toast of toasterService.toasts(); track toast.id) {
				<div [auUse]="[toasterService.eventsDirective, toast.id]">
					<au-component
						auToast
						[auDismissible]="toast.props.dismissible ?? toasterService.options().dismissible"
						[auAnimated]="toast.props.animated"
						[auAutoHide]="false"
						[auClassName]="toast.props.className"
						[auAriaCloseButtonLabel]="toast.props.ariaCloseButtonLabel"
						[auStructure]="toast.props.structure"
						(auHidden)="handleHidden(toast)"
						(auVisibleChange)="(toast.props.onVisibleChange)"
						[auChildren]="toast.props.children"
						[auHeader]="toast.props.header"
					/>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent {
	readonly toasterService = inject(ToasterService);

	readonly auDismissible = input(this.toasterService.options().dismissible);
	readonly auDuration = input(this.toasterService.options().duration);
	readonly auPosition = input(this.toasterService.options().position);
	readonly auLimit = input(this.toasterService.options().limit);
	readonly auPauseOnHover = input(this.toasterService.options().pauseOnHover);
	readonly auCloseAll = input(this.toasterService.options().closeAll);
	readonly auCloseAllLabel = input(this.toasterService.options().closeAllLabel);

	readonly positionClass = computed(() => toastPositions[this.toasterService.options().position]);

	constructor() {
		effect(() => {
			this.toasterService.options.update((options) => ({
				...options,
				dismissible: this.auDismissible(),
				duration: this.auDuration(),
				position: this.auPosition(),
				limit: this.auLimit(),
				pauseOnHover: this.auPauseOnHover(),
				closeAll: this.auCloseAll(),
				closeAllLabel: this.auCloseAllLabel(),
			}));
		});
	}

	handleHidden(toast: any) {
		this.toasterService.removeToast(toast.id);
		toast.props.onHidden?.();
	}
}
