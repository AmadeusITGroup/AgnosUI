import {Component} from '@angular/core';
import {CollapseDaisyComponent} from './collapse.component';

@Component({
	standalone: true,
	imports: [CollapseDaisyComponent],
	template: ` <app-collapse (hidden)="onHidden()"><p>tabindex necessary is already put</p></app-collapse> `,
})
export default class DefaultAlertComponent {
	onHidden() {
		console.log('Hidden');
	}
}
