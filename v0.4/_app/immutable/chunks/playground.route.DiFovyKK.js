const n=`import type {PaginationComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getPaginationDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getPaginationDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('pagination'),
	template: \`<nav auPagination #widget></nav>\`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget!: PaginationComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget._widget.patch({...undefinedConfig, ...props});
		});
	}
}
`;export{n as default};
