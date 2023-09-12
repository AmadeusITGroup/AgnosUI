import type {RatingComponent} from '@agnos-ui/angular';
import {ProgressbarComponent} from '@agnos-ui/angular';
import {getProgressbarDefaultConfig} from '@agnos-ui/core';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getProgressbarDefaultConfig());

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: provideHashConfig('progressbar'),
	template: `<div au-progressbar #widget></div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: RatingComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
