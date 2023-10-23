import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<h2>Vertical slider</h2>
		<div class="d-flex" style="height: 350px">
			<div class="col-6" style="height: 300px">
				<au-component auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [auVertical]="true" [formControl]="sliderControl"></au-component>
				Form control values: {{ sliderControl.value }}
			</div>
			<div class="col-6" style="height: 300px">
				<au-component auSlider [auMin]="0" [auMax]="100" [auStepSize]="1" [auVertical]="true" [formControl]="sliderControlRange"></au-component>
				From control values: {{ sliderControlRange.value }}
			</div>
		</div>
	`,
})
export default class VerticalSliderComponent {
	sliderControl = new FormControl([10, 40]);
	sliderControlRange = new FormControl([40]);
}
