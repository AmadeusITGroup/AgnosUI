const e=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: \`
		<h2>Slider with form control</h2>
		<au-component auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [formControl]="sliderControl"></au-component> Form control values:
		{{ sliderControl.value }}
		<hr />

		<h2>Slider with value</h2>
		<au-component auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [(auValues)]="sliderValues"></au-component> Values:
		{{ sliderValues }}
		<hr />

		<h2>Disabled slider</h2>
		<au-component auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [formControl]="disabledControl" [auReadonly]="readonlyToggle"></au-component>

		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="disabled" [(ngModel)]="disabledToggle" (change)="handleDisabled()" />
			<label class="form-check-label" for="disabled">Disabled</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="readonly" [(ngModel)]="readonlyToggle" />
			<label class="form-check-label" for="readonly">Readonly</label>
		</div>
	\`,
})
export default class DefaultSliderComponent implements OnInit {
	sliderControl = new FormControl([70]);
	disabledControl = new FormControl(60);
	sliderValues = [20];
	disabledToggle = true;
	readonlyToggle = true;

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
`;export{e as default};
