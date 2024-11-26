import {ProgressbarComponent} from '@agnos-ui/angular-bootstrap';
import {getProgressbarDefaultConfig} from '@agnos-ui/core-bootstrap/components/progressbar';
import {Component, viewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getProgressbarDefaultConfig());

@Component({
	imports: [ProgressbarComponent],
	providers: provideHashConfig('progressbar'),
	template: `<div auProgressbar #widget></div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required<ProgressbarComponent>('widget');

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
