const o=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: \`
		<h2>Slider with form control</h2>
		<div auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [formControl]="sliderControl"></div>
		Form control values: {{ sliderControl.value?.join(', ') }}
		<hr />

		<h2>Slider with values</h2>
		<div auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [(auValues)]="sliderValues"></div>
		Values: {{ sliderValues.join(', ') }}
	\`,
})
export default class RangeSliderComponent {
	sliderControl = new FormControl([10, 40, 50, 60, 90]);
	sliderValues = [10, 40];
}
`;export{o as default};
