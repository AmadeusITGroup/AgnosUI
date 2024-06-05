import {Component, ViewChild, ViewChildren} from '@angular/core';
import type {QueryList} from '@angular/core';
import {AccordionItemComponent, AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {AccordionDirective} from '@agnos-ui/angular-bootstrap';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';
import {getAccordionDefaultConfig} from '@agnos-ui/core-bootstrap';

const undefinedAccordionConfig = getUndefinedValues(getAccordionDefaultConfig());
@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: [provideHashConfig('accordion')],
	template: ` <div auAccordion>
		<div auAccordionItem auHeader="Header 1">Body 1</div>
		<div auAccordionItem auHeader="Header 2">Body 2</div>
	</div>`,
})
export default class PlaygroundComponent {
	@ViewChild(AccordionDirective) widget!: AccordionDirective;
	@ViewChildren(AccordionItemComponent) itemWidgets!: QueryList<AccordionItemComponent>;

	constructor() {
		hashChangeHook((props) => {
			this.widget._widget.patch({...undefinedAccordionConfig, ...props});
			this.itemWidgets?.forEach((widget) => {
				widget._widget.patch({...undefinedAccordionConfig, ...props});
			});
		});
	}
}
