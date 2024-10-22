import type {CollapseDirective} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule, getCollapseDefaultConfig} from '@agnos-ui/angular-bootstrap';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getCollapseDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('collapse'),
	template: `<div auCollapse #widget="auCollapse">Visible content</div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget!: CollapseDirective;

	constructor() {
		hashChangeHook((props) => {
			this.widget['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
