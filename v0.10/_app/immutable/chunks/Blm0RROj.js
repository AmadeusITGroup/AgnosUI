const o=`import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [SliderComponent, ReactiveFormsModule],
	template: \`
		<div class="d-flex" style="height: 350px">
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" auStepSize="1" auVertical [formControl]="sliderControlRange" auClassName="my-0"></div>
				<div class="mt-3">Form control values: {{ sliderControlRangeValues()?.join(', ') }}</div>
			</div>
			<div class="col-6" style="height: 300px">
				<div auSlider auMin="0" auMax="100" auStepSize="25" auVertical [formControl]="sliderControl" auClassName="my-0" auShowTicks></div>
				<div class="mt-3">From control value: {{ sliderControlValues() }}</div>
			</div>
		</div>
	\`,
})
export default class VerticalSliderComponent {
	readonly sliderControlRange = new FormControl([10, 40]);
	readonly sliderControlRangeValues = toSignal(this.sliderControlRange.valueChanges, {
		initialValue: this.sliderControlRange.value,
	});
	readonly sliderControl = new FormControl([40]);
	readonly sliderControlValues = toSignal(this.sliderControl.valueChanges, {initialValue: this.sliderControl.value});
}
`;export{o as default};
