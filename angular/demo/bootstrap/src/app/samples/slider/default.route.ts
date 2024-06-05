import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<h3>Slider with form control</h3>
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderControl"
			[auShowMinMaxLabels]="showMinMax"
			[auShowValueLabels]="showValues"
		></div>
		Form control value:
		{{ sliderControl.value }}
		<hr />

		<h3>Slider with value</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [(auValues)]="sliderValues"></div>
		Value:
		{{ sliderValues }}
		<hr />

		<h3>Disabled slider</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="disabledControl" [auReadonly]="readonlyToggle"></div>

		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="disabled" [(ngModel)]="disabledToggle" (change)="handleDisabled()" />
			<label class="form-check-label" for="disabled">Disabled</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="readonly" [(ngModel)]="readonlyToggle" />
			<label class="form-check-label" for="readonly">Readonly</label>
		</div>

		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="showMinMax" [(ngModel)]="showMinMax" />
			<label class="form-check-label" for="showMinMax">Min-Max label visibility</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="showValues" [(ngModel)]="showValues" />
			<label class="form-check-label" for="showValues">Value label visibility</label>
		</div>
	`,
})
export default class DefaultSliderComponent implements OnInit {
	sliderControl = new FormControl([70]);
	disabledControl = new FormControl(60);
	sliderValues = [20];
	disabledToggle = true;
	readonlyToggle = true;
	showMinMax = true;
	showValues = true;

	ngOnInit() {
		this.disabledControl.disable();
	}

	handleDisabled() {
		if (this.disabledToggle) {
			this.disabledControl.disable();
		} else {
			this.disabledControl.enable();
		}
	}
}
