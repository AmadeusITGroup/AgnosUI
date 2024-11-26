import type {AlertComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getAlertDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getAlertDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('alert'),
	template: `<au-component auAlert #widget />`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<AlertComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
