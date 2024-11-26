import type {RatingComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getRatingDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getRatingDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('rating'),
	template: `<div [auRating] #widget></div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<RatingComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
