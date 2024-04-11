import {AlertComponent, provideWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-success',
	imports: [AlertComponent],
	providers: [provideWidgetsConfig((config) => ({...config, alert: {...config.alert, type: 'success'}}))],
	template: ` <au-component auAlert>Alert not dismissible and of type success, type overriden by child config</au-component> `,
})
export default class SuccessComponent {}
