import {Component, viewChild, viewChildren} from '@angular/core';

import {AccordionItemComponent, AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {AccordionDirective} from '@agnos-ui/angular-bootstrap';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';
import {getAccordionDefaultConfig} from '@agnos-ui/core-bootstrap';

const undefinedAccordionConfig = getUndefinedValues(getAccordionDefaultConfig());
@Component({
	imports: [AgnosUIAngularModule],
	providers: [provideHashConfig('accordion')],
	template: ` <div auAccordion>
		<div auAccordionItem>
			<ng-template auAccordionItemHeader>Header 1</ng-template>
			<ng-template auAccordionItemBody>Body 1 </ng-template>
		</div>
		<div auAccordionItem>
			<ng-template auAccordionItemHeader>Header 2</ng-template>
			<ng-template auAccordionItemBody>Body 2</ng-template>
		</div>
	</div>`,
})
export default class PlaygroundComponent {
	readonly widget = viewChild.required(AccordionDirective);
	readonly itemWidgets = viewChildren(AccordionItemComponent);

	constructor() {
		hashChangeHook((props) => {
			this.widget()['_widget'].patch({...undefinedAccordionConfig, ...props});
			this.itemWidgets().forEach((widget) => {
				widget['_widget'].patch({...undefinedAccordionConfig, ...props});
			});
		});
	}
}
