import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import BODY from '@agnos-ui/common/samples/accordion/body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion #accordion="auAccordion">
			<div auAccordionItem auItemId="first">
				<ng-template auAccordionItemHeader>First panel</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem auItemId="second" #itemTwo>
				<ng-template auAccordionItemHeader>Second panel</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
		</div>
		<hr />
		<button class="btn btn-sm btn-outline-primary me-2" (click)="accordion.api.toggle('first')">Toggle first</button>
		<button class="btn btn-sm btn-outline-primary me-2" (click)="itemTwo.api.toggle()">Toggle second</button>
		<button class="btn btn-sm btn-outline-primary me-2" (click)="accordion.api.expandAll()">Expand all</button>
		<button class="btn btn-sm btn-outline-primary me-2" (click)="accordion.api.collapseAll()">Collapse all</button>
	`,
})
export default class AccordionComponent {
	BODY = BODY;
}
