import type {CollapseDirective} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule, getCollapseDefaultConfig} from '@agnos-ui/angular-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getCollapseDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('collapse'),
	template: `<div auCollapse #widget="auCollapse">Visible content</div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<CollapseDirective>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
