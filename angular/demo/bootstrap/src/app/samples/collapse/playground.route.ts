import type {CollapseDirective} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, ViewChild} from '@angular/core';
import {hashChangeHook, provideHashConfig} from '../../utils';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('collapse'),
	template: `<div auCollapse #collapse="auCollapse">Visible content</div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget!: CollapseDirective;

	constructor() {
		hashChangeHook((_props) => {
			// TODO
			//this.widget._widget.patch({...undefinedConfig, ...props});
		});
	}
}
