import type {RatingComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {getRatingDefaultConfig} from '@agnos-ui/core';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getRatingDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('rating'),
	template: `<au-rating #widget />`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: RatingComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
