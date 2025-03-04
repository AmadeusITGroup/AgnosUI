import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import CoffeeSliderComponent from './coffee-slider.component';

@Component({
	imports: [SliderComponent, ReactiveFormsModule, FormsModule],
	template: `
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderControl"
			auVertical
			auClassName="custom-slider"
			[auStructure]="sliderCoffeeSlotStructure"
		></div>
	`,
	styles: "@use '@agnos-ui/common/samples/slider/custom.scss';",
	encapsulation: ViewEncapsulation.None,
})
export default class CustomSliderComponent {
	readonly sliderCoffeeSlotStructure = CoffeeSliderComponent;
	readonly sliderControl = new FormControl([50]);
}
