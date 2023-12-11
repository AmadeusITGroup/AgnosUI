import type {ToastProps} from '@agnos-ui/angular';
import {AgnosUIAngularModule, ToastComponent, provideWidgetsConfig} from '@agnos-ui/angular';
import {Component, Injectable} from '@angular/core';
import {FormsModule} from '@angular/forms';

export enum ToastPositions {
	topLeft = 'top-0 start-0',
	topCenter = 'top-0 start-50 translate-middle-x',
	topRight = 'top-0 end-0',
	middleLeft = 'top-50 start-0 translate-middle-y',
	middleCenter = 'top-50 start-50 translate-middle',
	middleRight = 'top-50 end-0 translate-middle-y',
	bottomLeft = 'bottom-0 start-0',
	bottomCenter = 'bottom-0 start-50 translate-middle-x',
	bottomRight = 'bottom-0 end-0',
}

@Injectable({providedIn: 'root'})
class ToastService {
	toasts: Partial<ToastProps>[] = [];

	add(toast: Partial<ToastProps>) {
		this.toasts.push(toast);
	}

	remove(toast: Partial<ToastProps>) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts = [];
	}
}

@Component({
	selector: 'app-toast-container',
	standalone: true,
	imports: [ToastComponent],
	template: ` <div
		class="d-flex position-relative"
		aria-live="polite"
		aria-atomic="true"
		style="height: 500px; width: 600px; background-color: gray;"
	>
		@for (toast of toastContainerService.toasts; track toast) {
			<div class="toast-container p-3 {{ toast.className }}" id="toastPlacement">
				<au-component auToast (auHidden)="removeToast(toast)" auSlotHeader="I am header" [auAutohide]="toast.autohide" [auDelay]="toast.delay"
					>Simple toast</au-component
				>
			</div>
		}
	</div>`,
})
class ToastContainerComponent {
	constructor(readonly toastContainerService: ToastService) {}

	removeToast(toast: Partial<ToastProps>) {
		this.toastContainerService.remove(toast);
	}
}

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ToastContainerComponent, FormsModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.toast = {...config.toast, dismissible: true, autohide: false};
			return config;
		}),
	],
	template: `
		<div class="d-flex justify-content-between">
			<div class="d-flex form-group">
				<label class="align-self-center me-3" for="positionSelect">Toast position: </label>
				<select id="positionSelect" class="form-select w-auto" [(ngModel)]="position">
					@for (position of positionList; track position) {
						<option [value]="position.value">{{ position.label }}</option>
					}
				</select>
			</div>
			<button class="btn btn-primary addToast" (click)="addToast()">Show toast</button>
		</div>
		<div class="toastCount mb-3">Toasts in the service: {{ toastContainerService.toasts.length }}</div>

		<app-toast-container />
	`,
})
export default class DynamicToastComponent {
	constructor(readonly toastContainerService: ToastService) {}

	positionList = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});

	position = this.positionList[0].value;

	addToast() {
		this.toastContainerService.add({autohide: false, delay: 1000, className: this.position});
	}
}
