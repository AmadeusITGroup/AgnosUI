import {SliderComponent, SliderLabelDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import CustomHandleSliderComponent from './custom-handle.component';

@Component({
	standalone: true,
	imports: [SliderComponent, SliderLabelDirective, ReactiveFormsModule, FormsModule],
	template: `
		<h3>Slider with custom labels</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderCustomLabelControl" auClassName="au-custom-slider-container">
			<ng-template auSliderLabel let-value="value">{{ value }}%</ng-template>
		</div>
		<hr />

		<h3>Slider with custom handle</h3>
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderCustomHandleControl"
			auClassName="au-custom-slider-container"
			[auHandle]="sliderCustomSlotHandle"
		></div>
	`,
	styles: "@import '@agnos-ui/common/samples/slider/custom.scss';",
})
export default class CustomSliderComponent {
	readonly sliderCustomSlotHandle = CustomHandleSliderComponent;

	sliderCustomLabelControl = new FormControl([70]);
	sliderCustomHandleControl = new FormControl([50]);
}
