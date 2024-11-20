import {AlertComponent} from '@agnos-ui/angular-bootstrap';
import type {AlertProps} from '@agnos-ui/angular-bootstrap';
import {Component, inject, Injectable} from '@angular/core';

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
	imports: [AlertComponent],
	template: `
		@for (alert of alertContainerService.alerts; track alert) {
			<au-component
				auAlert
				[auAnimated]="alert.animated"
				[auAnimatedOnInit]="alert.animatedOnInit"
				[auDismissible]="alert.dismissible"
				[auType]="alert.type"
				[auChildren]="alert.children"
				(auHidden)="removeAlert(alert)"
			/>
		}
	`,
})
export class ChildComponent {
	readonly alertContainerService = inject(AlertContainerService);

	removeAlert(type: Partial<AlertProps>) {
		this.alertContainerService.remove(type);
	}
}

@Component({
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
	readonly alertContainerService = inject(AlertContainerService);

	addError() {
		this.alertContainerService.add({type: 'danger', children: 'Error', dismissible: true, animated: true});
	}

	addWarning() {
		this.alertContainerService.add({type: 'warning', children: 'Warning', dismissible: true, animated: true});
	}

	addInfo() {
		this.alertContainerService.add({type: 'info', children: 'Info', dismissible: true, animated: true});
	}
}
