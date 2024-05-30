import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import type {AlertComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AlertStatus} from '@agnos-ui/common/samples/alert/alert-status.enum';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, FormsModule],
	template: ` <button class="btn btn-primary showAlert" (click)="showAlert(alert)" type="button">Show alert</button>
		<br />
		<br />
		<div class="d-flex flex-column">
			<div class="d-flex form-group">
				<label class="align-self-center me-3" for="typeSelect">Alert type: </label>
				<select id="typeSelect" class="form-select w-auto" [(ngModel)]="type">
					@for (style of styleList; track style) {
						<option [value]="style.value">{{ style.label }}</option>
					}
				</select>
			</div>

			<label><input class="form-check-input me-1" type="checkbox" [(ngModel)]="animatedOnInit" />Animated on init</label>
			<label><input class="form-check-input me-1" type="checkbox" [(ngModel)]="animated" />Animated</label>
			<label><input class="dismissibleInput form-check-input me-1" type="checkbox" [(ngModel)]="dismissible" />Dismissible</label>
		</div>

		<br />
		<br />

		<au-component auAlert #alert [auAnimated]="animated" [auAnimatedOnInit]="animatedOnInit" [auDismissible]="dismissible" [auType]="type">
			<h4 class="alert-heading">Well done!</h4>
			<p>
				Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
				within an alert works with this kind of content.
			</p>
			<hr />
			<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
		</au-component>`,
})
export default class ConfigAlertComponent {
	styleList = Object.entries(AlertStatus).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});

	animatedOnInit = true;
	animated = true;
	dismissible = true;
	type = this.styleList[0].value;

	async showAlert(alert: AlertComponent) {
		alert.api.open();
	}
}
