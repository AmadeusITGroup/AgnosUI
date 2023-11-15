import {AgnosUIAngularModule} from '@agnos-ui/angular';
import type {AlertComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

export enum AlertStatus {
	success = 'success',
	info = 'info',
	warning = 'warning',
	danger = 'danger',
	primary = 'primary',
	secondary = 'secondary',
	light = 'light',
	dark = 'dark',
}

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

			<label><input class="form-check-input me-1" type="checkbox" [(ngModel)]="animationOnInit" />Animation on init</label>
			<label><input class="form-check-input me-1" type="checkbox" [(ngModel)]="animation" />Animation</label>
			<label><input class="dismissibleInput form-check-input me-1" type="checkbox" [(ngModel)]="dismissible" />Dismissible</label>
		</div>

		<br />
		<br />

		<au-component auAlert #alert [auAnimation]="animation" [auAnimationOnInit]="animationOnInit" [auDismissible]="dismissible" [auType]="type">
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

	animationOnInit = true;
	animation = true;
	dismissible = true;
	type = this.styleList[0].value;

	async showAlert(alert: AlertComponent) {
		alert.api.open();
	}
}
