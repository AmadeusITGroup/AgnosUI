import {Component} from '@angular/core';
import {AlertComponent} from './alert.component';

@Component({
	imports: [AlertComponent],
	template: `
		<button class="btn btn-primary" (click)="reset()">Reset Alert</button>
		<div class="flex flex-col gap-3 mt-3">
			<app-alert className="alert-success" [(visible)]="visible">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span>Alert is a success!</span>
			</app-alert>
			<app-alert className="alert-error" dismissible="false">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>Alert is an error!</span>
			</app-alert>
		</div>
	`,
})
export default class DefaultAlertComponent {
	visible = true;
	reset() {
		this.visible = true;
	}
}
