const t=`import {AlertComponent} from '@agnos-ui/angular';
import type {AlertProps} from '@agnos-ui/angular';
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
	imports: [AlertComponent],
	template: \`
		@for (alert of alertContainerService.alerts; track alert) {
			<au-component
				auAlert
				[auAnimation]="alert.animation"
				[auAnimationOnInit]="alert.animationOnInit"
				[auDismissible]="alert.dismissible"
				[auType]="alert.type"
				[auSlotDefault]="alert.slotDefault"
				(auHidden)="removeAlert(alert)"
			></au-component>
		}
	\`,
})
export class ChildComponent {
	constructor(readonly alertContainerService: AlertContainerService) {}

	removeAlert(type: Partial<AlertProps>) {
		this.alertContainerService.remove(type);
	}
}

@Component({
	standalone: true,
	imports: [ChildComponent],
	template: \`
		<button class="btn btn-primary addError me-1" (click)="addError()">Add error</button>
		<button class="btn btn-primary addInfo me-1" (click)="addInfo()">Add info</button>
		<button class="btn btn-primary addWarning me-1" (click)="addWarning()">Add warning</button>
		<br />
		<div class="alertCount mb-3">Alerts in the service: {{ alertContainerService.alerts.length }}</div>
		<app-alert-child />
	\`,
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
`;export{t as default};
