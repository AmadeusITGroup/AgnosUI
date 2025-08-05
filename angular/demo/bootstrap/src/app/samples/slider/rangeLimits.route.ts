import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<h2>Simple range</h2>
		<div auSlider auMin="0" auMax="100" auMinRange="10" auMaxRange="30" auPushRange="true" auStepSize="1" [(auValues)]="sliderValues"></div>
		Values: {{ sliderValues().join(', ') }}
		<hr />
		<h2>Multiple ranges</h2>
		<div auSlider auMin="0" auMax="100" auMinRange="10" auMaxRange="30" auPushRange="true" auStepSize="1" [formControl]="sliderControl"></div>
		Form control values: {{ sliderControlValues()?.join(', ') }}
	`,
})
export default class RangeSliderComponent {
	readonly sliderControl = new FormControl([10, 40, 50, 60, 90]);
	readonly sliderControlValues = toSignal(this.sliderControl.valueChanges, {
		initialValue: this.sliderControl.value,
	});
	readonly sliderValues = signal([10, 40]);
}
