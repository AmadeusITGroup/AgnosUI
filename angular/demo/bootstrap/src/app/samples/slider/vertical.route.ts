import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<div class="d-flex" style="height: 350px">
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" auStepSize="1" auVertical [formControl]="sliderControl" auClassName="my-0"></div>
				<div class="mt-3">Form control values: {{ sliderControl.value?.join(', ') }}</div>
			</div>
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" auStepSize="1" auVertical [formControl]="sliderControlRange" auClassName="my-0"></div>
				<div class="mt-3">From control value: {{ sliderControlRange.value?.join(', ') }}</div>
			</div>
		</div>
	`,
})
export default class VerticalSliderComponent {
	sliderControl = new FormControl([10, 40]);
	sliderControlRange = new FormControl([40]);
}
