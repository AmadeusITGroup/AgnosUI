const o=`import {SliderComponent, SliderLabelDirective} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import CustomHandleSliderComponent from './custom-handle.component';

@Component({
	standalone: true,
	imports: [SliderComponent, SliderLabelDirective, ReactiveFormsModule, FormsModule],
	template: \`
		<h2>Slider with custom labels</h2>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderCustomLabelControl" auClassName="au-custom-slider-container">
			<ng-template auSliderLabel let-value="value">{{ value }}%</ng-template>
		</div>
		<hr />

		<h2>Slider with custom handle</h2>
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderCustomHandleControl"
			auClassName="au-custom-slider-container"
			[auSlotHandle]="sliderCustomSlotHandle"
		></div>
	\`,
	styles: "@import './custom.scss';",
})
export default class CustomSliderComponent {
	readonly sliderCustomSlotHandle = CustomHandleSliderComponent;

	sliderCustomLabelControl = new FormControl([70]);
	sliderCustomHandleControl = new FormControl([50]);
}
`;export{o as default};
