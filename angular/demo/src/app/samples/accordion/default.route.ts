import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import BODY from '!raw-loader!@agnos-ui/common/samples/accordion/body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion>
			<div au-accordion-item [itemCollapsed]="false">
				<ng-template auAccordionItemHeader>Simple</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div au-accordion-item>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div au-accordion-item [itemDisabled]="true">
				<ng-template auAccordionItemHeader>Disabled</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
		</div>
	`,
})
export default class AccordionComponent {
	BODY = BODY;
}
