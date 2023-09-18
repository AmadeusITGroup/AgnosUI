import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import BODY from '!raw-loader!@agnos-ui/common/samples/accordion/body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion>
			<div auAccordionItem [auItemCollapsed]="false">
				<ng-template auAccordionItemHeader>Simple</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem [auItemDisabled]="true">
				<ng-template auAccordionItemHeader>Disabled</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
		</div>
	`,
})
export default class AccordionComponent {
	BODY = BODY;
}
