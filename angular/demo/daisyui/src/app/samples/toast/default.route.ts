import {Component} from '@angular/core';
import {ToastComponent} from './toast.component';

@Component({
	imports: [ToastComponent],
	template: `<div class="h-[215px]">
		<button class="btn btn-primary" (click)="reset()">Reset Toast</button>
		<div class="toast">
			<app-toast className="alert-success" [(visible)]="visible">This is a success toast</app-toast>
			<app-toast className="alert-error" dismissible="false">This is an error toast</app-toast>
		</div>
	</div>`,
})
export default class DefaultToastComponent {
	visible = true;
	reset() {
		this.visible = true;
	}
}
