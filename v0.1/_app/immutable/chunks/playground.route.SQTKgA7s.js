const n=`import type {ModalComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {getModalDefaultConfig} from '@agnos-ui/core';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getModalDefaultConfig());

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: provideHashConfig('modal'),
	template: \`<au-component auModal #widget></au-component>\`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget: ModalComponent<any>;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedConfig, ...props});
		});
	}
}
`;export{n as default};
