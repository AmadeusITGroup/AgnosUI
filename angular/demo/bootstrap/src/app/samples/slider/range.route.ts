import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<h3>Slider with form control</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderControl"></div>
		Form control values: {{ sliderControl.value?.join(', ') }}
		<hr />

		<h3>Slider with values</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [(auValues)]="sliderValues"></div>
		Values: {{ sliderValues.join(', ') }}
	`,
})
export default class RangeSliderComponent {
	sliderControl = new FormControl([10, 40, 50, 60, 90]);
	sliderValues = [10, 40];
}
