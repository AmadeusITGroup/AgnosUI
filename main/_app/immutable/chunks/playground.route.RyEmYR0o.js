const n=`import type {ToastComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {getToastDefaultConfig} from '@agnos-ui/core';
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
`;export{n as default};
