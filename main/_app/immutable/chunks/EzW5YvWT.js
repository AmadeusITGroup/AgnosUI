const o=`import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import CoffeeSliderComponent from './coffee-slider.component';

@Component({
	imports: [SliderComponent, ReactiveFormsModule],
	template: \`
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
	styles: "@use './custom.scss';",
	encapsulation: ViewEncapsulation.None,
})
export default class CustomSliderComponent {
	readonly sliderCoffeeSlotStructure = CoffeeSliderComponent;
	readonly sliderControl = new FormControl([50]);
}
`;export{o as default};
