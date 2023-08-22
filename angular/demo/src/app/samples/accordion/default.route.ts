import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion>
			<div au-accordion-item [itemCollapsed]="false" [itemId]="'item-1'">
				<ng-template auAccordionItemHeader>Simple header</ng-template>
				<ng-template auAccordionItemBody>First content</ng-template>
			</div>
			<div au-accordion-item>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody>Second content</ng-template>
			</div>
			<div au-accordion-item [itemDisabled]="true">
				<ng-template auAccordionItemHeader>Disabled</ng-template>
				<ng-template auAccordionItemBody>Third content</ng-template>
			</div>
		</div>
	`,
})
export default class AccordionComponent {}
