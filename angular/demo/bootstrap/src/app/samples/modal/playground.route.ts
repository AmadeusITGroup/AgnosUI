import type {ModalComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getModalDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getModalDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('modal'),
	template: `<div><au-component auModal #widget /></div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<ModalComponent<any>>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
