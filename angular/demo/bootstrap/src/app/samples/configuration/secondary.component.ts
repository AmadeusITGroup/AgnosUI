import {AlertComponent} from '@agnos-ui/angular-bootstrap';
import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-secondary',
	imports: [AlertComponent],
	template: ` <au-component auAlert>Alert not dismissible and of type secondary, respecting the parent config</au-component> `,
})
export default class SecondaryComponent {}
