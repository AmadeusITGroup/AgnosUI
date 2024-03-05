const n=`import type {SliderComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {getSliderDefaultConfig} from '@agnos-ui/core';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getSliderDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('slider'),
	template: \`<div auSlider #widget></div>\`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: SliderComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
`;export{n as default};
