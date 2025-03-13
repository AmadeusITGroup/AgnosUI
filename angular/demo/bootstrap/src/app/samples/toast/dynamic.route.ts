import type {ToastProps} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule, ToastComponent, ToastPositions} from '@agnos-ui/angular-bootstrap';
import {Component, Injectable, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Injectable({providedIn: 'root'})
class ToastService {
	toastMap: Map<string, Partial<ToastProps>[]> = new Map(Object.values(ToastPositions).map((entry) => [entry, []]));

	add(toast: Partial<ToastProps>) {
		this.toastMap.get(toast.className!)?.push(toast);
	}

	remove(toast: Partial<ToastProps>) {
		this.toastMap.set(
			toast.className!,
			this.toastMap.get(toast.className!)!.filter((t) => t !== toast),
		);
	}
}

@Component({
	selector: 'app-toast-container',
	imports: [ToastComponent],
	template: ` <div class="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style="height: 500px; background-color: gray;">
		@for (position of toastContainerService.toastMap.keys(); track position) {
			<div class="toast-container p-3 {{ position }}">
				@for (toast of toastContainerService.toastMap.get(position); track toast) {
					<au-component auToast (auHidden)="removeToast(toast)" auHeader="I am header" [auAutoHide]="toast.autoHide" [auDelay]="toast.delay"
						>Simple toast</au-component
					>
				}
			</div>
		}
	</div>`,
})
class ToastContainerComponent {
	readonly toastContainerService = inject(ToastService);

	removeToast(toast: Partial<ToastProps>) {
		this.toastContainerService.remove(toast);
	}
}

@Component({
	imports: [AgnosUIAngularModule, ToastContainerComponent, FormsModule],
	template: `
		<p class="mb-2">
			To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.
		</p>
		<p class="mb-2">To <strong>stack</strong> toasts vertically, put them in the same container.</p>
		<div class="d-flex justify-content-between">
			<div class="d-flex form-group align-items-center">
				<label class="me-3" for="positionSelect">Position: </label>
				<select id="positionSelect" class="form-select w-auto" [(ngModel)]="position">
					@for (position of positionList; track position) {
						<option [value]="position.value">{{ position.label }}</option>
					}
				</select>
				<button class="btn btn-primary addToast ms-2" (click)="addToast()">Show toast</button>
			</div>
		</div>

		<app-toast-container />
	`,
})
export default class DynamicToastComponent {
	readonly toastContainerService = inject(ToastService);
	readonly positionList = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	readonly position = signal(this.positionList[0].value);

	addToast() {
		this.toastContainerService.add({autoHide: true, delay: 3000, className: this.position()});
	}
}
