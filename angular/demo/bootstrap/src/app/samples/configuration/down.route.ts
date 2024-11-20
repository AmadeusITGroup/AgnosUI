import {AlertComponent, provideWidgetsConfig, injectWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import SuccessComponent from './success.component';
import SecondaryComponent from './secondary.component';

@Component({
	imports: [AlertComponent, SecondaryComponent, SuccessComponent],
	providers: [provideWidgetsConfig()],
	template: `
		<au-component auAlert>Alert not dismissible and of type secondary</au-component>
		<app-secondary />
		<app-success />
	`,
})
export default class GenericAlertComponent {
	readonly widgetConfig$ = injectWidgetsConfig({alert: {dismissible: false, type: 'secondary'}});
}
