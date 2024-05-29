import {Component} from '@angular/core';
import {AccordionComponent} from './accordion.component';
import {AccordionItemComponent} from './accordion-item.component';

@Component({
	standalone: true,
	imports: [AccordionComponent, AccordionItemComponent],
	template: `
		<app-accordion closeOthers itemDestroyOnHide>
			<app-accordion-item itemVisible>
				<ng-container header> First header </ng-container>
				First content
			</app-accordion-item>
			<app-accordion-item>
				<ng-container header> Second header </ng-container>
				Second content
			</app-accordion-item>
			<app-accordion-item>
				<ng-container header> Third header </ng-container>
				Third content
			</app-accordion-item>
		</app-accordion>
	`,
})
export default class DaisyUIAccordionDemoComponent {}
