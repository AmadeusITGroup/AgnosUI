import type {ToastComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getToastDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getToastDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('toast'),
	template: `<au-component auToast #widget />`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<ToastComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
