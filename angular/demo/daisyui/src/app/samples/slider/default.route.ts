import {SliderComponent} from './slider.component';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [SliderComponent],
	template: `
		<h2 class="text-lg mb-2">DaisyUI Example</h2>

		<app-slider min="0" max="100" stepSize="1" [values]="values" (valuesChange)="valuesChange($event)" />
		Value: {{ values }}
	`,
})
export default class DefaultSliderComponent {
	values = [20];

	valuesChange(event: number[]) {
		this.values = event;
	}
}
