import {ProgressbarComponent} from '@agnos-ui/angular-bootstrap';
import {getProgressbarDefaultConfig} from '@agnos-ui/core-bootstrap/components/progressbar';
import {Component, ViewChild} from '@angular/core';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';

const undefinedConfig = getUndefinedValues(getProgressbarDefaultConfig());

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: provideHashConfig('progressbar'),
	template: `<div auProgressbar #widget></div>`,
})
export default class PlaygroundComponent {
	@ViewChild('widget') widget!: ProgressbarComponent;

	constructor() {
		hashChangeHook((props) => {
			this.widget['_widget'].patch({...undefinedConfig, ...props});
		});
	}
}
