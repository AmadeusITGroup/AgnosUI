import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<h3>Horizontal slider</h3>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderControl" [auRtl]="true"></div>
		<br />
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderRangeControl" [auRtl]="true"></div>
		<h3>Vertical slider</h3>
		<div class="d-flex" style="height: 350px">
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" [auRtl]="true" auStepSize="1" auVertical [formControl]="sliderControl" auClassName="my-0"></div>
			</div>
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" [auRtl]="true" auStepSize="1" auVertical [formControl]="sliderRangeControl" auClassName="my-0"></div>
			</div>
		</div>
	`,
})
export default class RtlSliderComponent {
	sliderControl = new FormControl([30]);
	sliderRangeControl = new FormControl([30, 70]);
}
