const l=`import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import type {OnInit} from '@angular/core';
import {Component, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [SliderComponent, ReactiveFormsModule, FormsModule],
	template: \`
		<h5>Slider with form control</h5>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="showMinMax" [(ngModel)]="showMinMax" />
			<label class="form-check-label" for="showMinMax">Min-Max label visibility</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="showValues" [(ngModel)]="showValues" />
			<label class="form-check-label" for="showValues">Value label visibility</label>
		</div>

		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderControl"
			[auShowMinMaxLabels]="showMinMax()"
			[auShowValueLabels]="showValues()"
		></div>
		Form control value:
		{{ sliderControlValue() }}
		<hr />

		<h5>Slider with value</h5>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [(auValues)]="sliderValues"></div>
		Value:
		{{ sliderValues() }}
		<hr />

		<h5>Disabled slider</h5>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="disabledControl" [auReadonly]="readonlyToggle()"></div>

		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="disabled" [(ngModel)]="disabledToggle" (change)="handleDisabled()" />
			<label class="form-check-label" for="disabled">Disabled</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="readonly" [(ngModel)]="readonlyToggle" />
			<label class="form-check-label" for="readonly">Readonly</label>
		</div>
	\`,
})
export default class DefaultSliderComponent implements OnInit {
	readonly sliderControl = new FormControl([70]);
	readonly sliderControlValue = toSignal(this.sliderControl.valueChanges, {initialValue: this.sliderControl.value});
	readonly disabledControl = new FormControl(60);
	readonly sliderValues = signal([20]);
	readonly disabledToggle = signal(true);
	readonly readonlyToggle = signal(true);
	readonly showMinMax = signal(true);
	readonly showValues = signal(true);

	ngOnInit() {
		this.disabledControl.disable();
	}

	handleDisabled() {
		if (this.disabledToggle()) {
			this.disabledControl.disable();
		} else {
			this.disabledControl.enable();
		}
	}
}
`;export{l as default};
