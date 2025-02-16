const o=`import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [SliderComponent, ReactiveFormsModule, FormsModule],
	template: \`
		<h2>Horizontal slider</h2>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderControl" [auRtl]="true"></div>
		<br />
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderRangeControl" [auRtl]="true"></div>
		<h2>Vertical slider</h2>
		<div class="d-flex" style="height: 350px">
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" [auRtl]="true" auStepSize="1" auVertical [formControl]="sliderControl" auClassName="my-0"></div>
			</div>
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" [auRtl]="true" auStepSize="1" auVertical [formControl]="sliderRangeControl" auClassName="my-0"></div>
			</div>
		</div>
	\`,
})
export default class RtlSliderComponent {
	sliderControl = new FormControl([30]);
	sliderRangeControl = new FormControl([30, 70]);
}
`;export{o as default};
