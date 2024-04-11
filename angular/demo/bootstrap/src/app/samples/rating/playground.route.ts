import type {RatingComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getRatingDefaultConfig} from '@agnos-ui/core';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getRatingDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('rating'),
	template: `<div [auRating] #widget></div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: RatingComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
