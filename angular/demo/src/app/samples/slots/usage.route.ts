import {AlertComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AlertComponent],
	template: `
		<au-component auAlert auType="primary" [auDismissible]="false"> Label provided by slot </au-component>
		<au-component auAlert auType="secondary" [auDismissible]="false" auSlotDefault="Label provided by property" />
		<au-component
			auAlert
			auType="info"
			[auDismissible]="false"
			auSlotDefault="When both prop and slot are provided, the prop's content will take precedence."
		>
			This content is ignored.
		</au-component>
	`,
})
export default class SlotsUsageComponent {}
