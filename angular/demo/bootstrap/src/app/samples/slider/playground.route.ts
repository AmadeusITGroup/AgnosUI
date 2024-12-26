import {SliderComponent} from '@agnos-ui/angular-bootstrap';
import {getSliderDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getSliderDefaultConfig());

@Component({
	imports: [SliderComponent],
	providers: provideHashConfig('slider'),
	template: `<div auSlider #widget></div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<SliderComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
