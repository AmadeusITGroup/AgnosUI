import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [AgnosUIAngularModule, ReactiveFormsModule, FormsModule],
	template: `
		<div class="d-flex flex-column justify-content-between gap-2">
			<div class="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
				<div class="d-flex align-items-center justify-content-between">
					<label class="me-3" for="minRange">minRange: </label>
					<input id="minRange" type="number" min="0" class="form-control w-50" [(ngModel)]="minRange" />
				</div>
				<div class="d-flex align-items-center justify-content-between">
					<label class="me-3" for="maxRange">maxRange: </label>
					<input id="maxRange" type="number" min="0" class="form-control w-50" [(ngModel)]="maxRange" />
				</div>
				<div class="d-inline-flex align-items-center justify-content-between">
					<label class="me-3" for="pushRange">pushRange: </label>
					<input type="checkbox" class="form-check-input" id="pushRange" [(ngModel)]="pushRange" />
				</div>
			</div>
		</div>
		<h5>Simple range</h5>
		<div
			auSlider
			auMin="0"
			auMax="100"
			[auMinRange]="minRange()"
			[auMaxRange]="maxRange()"
			[auPushRange]="pushRange()"
			auStepSize="1"
			[(auValues)]="sliderValues"
		></div>
		Values: {{ sliderValues().join(', ') }}
		<hr />
		<h5>Multiple ranges</h5>
		<div
			auSlider
			auMin="0"
			auMax="100"
			[auMinRange]="minRange()"
			[auMaxRange]="maxRange()"
			[auPushRange]="pushRange()"
			auStepSize="1"
			[formControl]="sliderControl"
		></div>
		Form control values: {{ sliderControlValues()?.join(', ') }}
	`,
})
export default class RangeSliderComponent {
	readonly minRange = signal(10);
	readonly maxRange = signal(30);
	readonly pushRange = signal(false);
	readonly sliderControl = new FormControl([10, 40, 50, 60, 90]);
	readonly sliderControlValues = toSignal(this.sliderControl.valueChanges, {
		initialValue: this.sliderControl.value,
	});
	readonly sliderValues = signal([10, 40]);
}
