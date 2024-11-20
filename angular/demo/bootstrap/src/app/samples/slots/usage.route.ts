import {AlertComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	imports: [AlertComponent],
	template: `
		<au-component auAlert auType="primary" [auDismissible]="false"> Label provided by slot </au-component>
		<au-component auAlert auType="secondary" [auDismissible]="false" auChildren="Label provided by property" />
		<au-component
			auAlert
			auType="info"
			[auDismissible]="false"
			auChildren="When both prop and slot are provided, the prop's content will take precedence."
		>
			This content is ignored.
		</au-component>
	`,
})
export default class SlotsUsageComponent {}
