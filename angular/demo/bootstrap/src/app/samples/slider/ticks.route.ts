import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	imports: [SliderComponent, ReactiveFormsModule, FormsModule],
	template: `
		<h2>With intermediate steps</h2>
		<div auSlider auMin="0" auMax="100" auStepSize="1" [formControl]="sliderControl" auShowTicks="true" auTickStep="25"></div>
		<br />
		<h2>Ticks as steps</h2>
		<div auSlider auMin="0" auMax="100" auStepSize="25" [formControl]="sliderRangeControl" auShowTicks="true"></div>

		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" role="switch" id="disabled" [(ngModel)]="disabledToggle" (change)="handleDisabled()" />
			<label class="form-check-label" for="disabled">Disabled</label>
		</div>

		<h2>Without tick labels</h2>
		<div auSlider auMin="0" auMax="100" auStepSize="25" [formControl]="sliderRangeControlLabels" auShowTicks="true" auShowTickValues="false"></div>
		<p>If <i>showTickValues</i> is set to <i>false</i> automatically put the min/max/current label display to <i>true</i></p>
	`,
})
export default class TicksSliderComponent {
	readonly sliderControl = new FormControl([30]);

	readonly sliderRangeControl = new FormControl([30, 70]);
	readonly disabledToggle = signal(false);

	readonly sliderRangeControlLabels = new FormControl([30, 70]);

	handleDisabled() {
		if (this.disabledToggle()) {
			this.sliderRangeControl.disable();
		} else {
			this.sliderRangeControl.enable();
		}
	}
}
