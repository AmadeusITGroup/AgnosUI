const n=`import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import BODY from './body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<div auAccordion>
			<div auAccordionItem auItemVisible>
				<ng-template auAccordionItemHeader>Simple</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
			<div auAccordionItem auItemDisabled>
				<ng-template auAccordionItemHeader>Disabled</ng-template>
				<ng-template auAccordionItemBody>{{ BODY }} </ng-template>
			</div>
		</div>
	\`,
})
export default class AccordionComponent {
	BODY = BODY;
}
`;export{n as default};
