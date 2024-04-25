const o=`import type {ToastComponent} from '@agnos-ui/angular-bootstrap';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {getToastDefaultConfig} from '@agnos-ui/core-bootstrap';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getToastDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('toast'),
	template: \`<au-component auToast #widget></au-component>\`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: ToastComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
`;export{o as default};
