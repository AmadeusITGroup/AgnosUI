import type {SelectComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getSelectDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getSelectDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('select'),
	template: `<div auSelect #widget></div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget!: SelectComponent<string>;

	constructor() {
		hashChangeHook((props) => {
			this.widget['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
