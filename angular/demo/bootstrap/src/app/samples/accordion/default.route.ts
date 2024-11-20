import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import BODY from '@agnos-ui/common/samples/accordion/body.txt';

@Component({
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion>
			<div auAccordionItem auHeader="Simple" auVisible>{{ BODY }}</div>
			<div auAccordionItem>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem auHeader="Disabled" auDisabled>{{ BODY }}</div>
		</div>
	`,
})
export default class AccordionComponent {
	BODY = BODY;
}
