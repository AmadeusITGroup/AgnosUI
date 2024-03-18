import {SliderComponent, SliderStructureDirective} from '@agnos-ui/angular';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import CoffeeSliderComponent from './coffee-slider.component';

@Component({
	standalone: true,
	imports: [SliderComponent, SliderStructureDirective, ReactiveFormsModule, FormsModule],
	template: `
		<h2>Fully custom slider</h2>
		<div
			auSlider
			auMin="0"
			auMax="100"
			auStepSize="1"
			[formControl]="sliderControl"
			auVertical
			auClassName="custom-slider"
			[auSlotStructure]="sliderCoffeeSlotStructure"
		></div>
	`,
	styles: "@import '@agnos-ui/common/samples/slider/custom.scss';",
	encapsulation: ViewEncapsulation.None,
})
export default class CustomSliderComponent {
	readonly sliderCoffeeSlotStructure = CoffeeSliderComponent;

	sliderControl = new FormControl([50]);
}
