import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import BODY from '@agnos-ui/common/samples/accordion/body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion>
			<div auAccordionItem auItemVisible auSlotItemHeader="Simple">
				{{ BODY }}
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				{{ BODY }}
			</div>
			<div auAccordionItem auItemDisabled auSlotItemHeader="Disabled">
				{{ BODY }}
			</div>
		</div>
	`,
})
export default class AccordionComponent {
	BODY = BODY;
}
