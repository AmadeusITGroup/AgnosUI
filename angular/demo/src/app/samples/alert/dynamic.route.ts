import {AlertComponent} from '@agnos-ui/angular';
import type {AlertProps} from '@agnos-ui/angular';
import {NgFor} from '@angular/common';
import {Component, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
class AlertContainerService {
	alerts: Partial<AlertProps>[] = [];
	add(alert: Partial<AlertProps>) {
		this.alerts.push(alert);
	}

	remove(type: Partial<AlertProps>) {
		this.alerts = this.alerts.filter((al) => al !== type);
	}

	clear() {
		this.alerts = [];
	}
}

@Component({
	selector: 'app-alert-child',
	standalone: true,
	imports: [AlertComponent, NgFor],
	template: `
		<au-alert
			*ngFor="let alert of alertContainerService.alerts"
			[animation]="alert.animation"
			[animationOnInit]="alert.animationOnInit"
			[dismissible]="alert.dismissible"
			[type]="alert.type"
			[slotDefault]="alert.slotDefault"
			(hidden)="removeAlert(alert)"
		>
		</au-alert>
	`,
})
class ChildComponent {
	constructor(readonly alertContainerService: AlertContainerService) {}

	removeAlert(type: Partial<AlertProps>) {
		this.alertContainerService.remove(type);
	}
}

@Component({
	standalone: true,
	imports: [ChildComponent],
	template: `
		<button class="btn btn-primary addError me-1" (click)="addError()">Add error</button>
		<button class="btn btn-primary addInfo me-1" (click)="addInfo()">Add info</button>
		<button class="btn btn-primary addWarning me-1" (click)="addWarning()">Add warning</button>
		<br />
		<div class="alertCount mb-3">Alerts in the service: {{ alertContainerService.alerts.length }}</div>
		<app-alert-child />
	`,
})
export default class ParentComponent {
	constructor(readonly alertContainerService: AlertContainerService) {}

	addError() {
		this.alertContainerService.add({type: 'danger', slotDefault: 'Error', dismissible: true, animation: true});
	}

	addWarning() {
		this.alertContainerService.add({type: 'warning', slotDefault: 'Warning', dismissible: true, animation: true});
	}

	addInfo() {
		this.alertContainerService.add({type: 'info', slotDefault: 'Info', dismissible: true, animation: true});
	}
}
