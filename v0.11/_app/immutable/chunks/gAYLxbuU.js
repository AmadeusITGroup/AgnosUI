const e=`import {SliderComponent, SliderLabelDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import CustomHandleSliderComponent from './custom-handle.component';

@Component({
	imports: [SliderComponent, SliderLabelDirective, ReactiveFormsModule],
	template: \`
		<h5>Slider with custom labels</h5>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderCustomLabelControl" auClassName="au-custom-slider-container">
			<ng-template auSliderLabel let-value="value">{{ value }}%</ng-template>
		</div>
		<hr />

		<h5>Slider with custom handle</h5>
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderCustomHandleControl"
			auClassName="au-custom-slider-container"
			[auHandle]="sliderCustomSlotHandle"
		></div>
	\`,
	styles: "@use './custom.scss';",
})
export default class CustomSliderComponent {
	readonly sliderCustomSlotHandle = CustomHandleSliderComponent;

	sliderCustomLabelControl = new FormControl([70]);
	sliderCustomHandleControl = new FormControl([50]);
}
`;export{e as default};
