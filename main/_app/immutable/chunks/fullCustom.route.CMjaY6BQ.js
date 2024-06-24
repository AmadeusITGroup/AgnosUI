const o=`import {SliderComponent, SliderStructureDirective} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import CoffeeSliderComponent from './coffee-slider.component';

@Component({
	standalone: true,
	imports: [SliderComponent, SliderStructureDirective, ReactiveFormsModule, FormsModule],
	template: \`
		<h2>Fully custom slider</h2>
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
	\`,
	styles: "@import './custom.scss';",
	encapsulation: ViewEncapsulation.None,
})
export default class CustomSliderComponent {
	readonly sliderCoffeeSlotStructure = CoffeeSliderComponent;

	sliderControl = new FormControl([50]);
}
`;export{o as default};
