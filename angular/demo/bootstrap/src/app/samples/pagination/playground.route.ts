import type {PaginationComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getPaginationDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getPaginationDefaultConfig());

@Component({
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('pagination'),
	template: `<nav auPagination #widget></nav>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<PaginationComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
