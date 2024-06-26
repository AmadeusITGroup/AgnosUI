const e=`import {AgnosUIAngularModule, UseDirective} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';
import BODY from './body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, UseDirective],
	template: \`
		<div auAccordion #accordion="auAccordion">
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						[auUse]="widget.directives.headerDirective"
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">First panel - {{ state.visible ? 'opened' : 'collapsed' }}</p>
						<button
							type="button"
							class="btn btn-link p-0 {{ state.buttonClassName }} au-accordion-item-button"
							[auUse]="widget.directives.toggleDirective"
						>
							Toggle first
						</button>
					</div>
					@if (state!.shouldBeInDOM) {
						<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
							<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible"
						[auUse]="widget.directives.headerDirective"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">Second panel</p>
						<div class="d-flex flex-wrap gap-2">
							<button
								[auUse]="widget.directives.toggleDirective"
								type="button"
								class="btn btn-sm btn-outline-primary {{ state.buttonClassName }} au-accordion-item-button"
							>
								Toggle second
							</button>
							<button type="button" class="btn btn-sm btn-outline-secondary" (click)="thirdDisabled = !thirdDisabled">
								{{ thirdDisabled ? 'En' : 'Dis' }}able third
							</button>
							<button type="button" class="btn btn-sm btn-outline-danger" (click)="accordion.api.collapseAll()">Collapse all</button>
						</div>
					</div>
					@if (state!.shouldBeInDOM) {
						<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
							<div [auUse]="widget.directives.bodyDirective" class="accordion-body">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem [auDisabled]="thirdDisabled">
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						[auUse]="widget.directives.headerDirective"
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible"
						role="heading"
						aria-level="2"
					>
						<button
							type="button"
							class="p-0 btn btn-link container-fluid text-start au-accordion-item-button {{ state.buttonClassName }}"
							[auUse]="widget.directives.toggleDirective"
						>
							Third panel
						</button>
						@if (thirdDisabled) {
							<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>
						}
					</div>
					@if (state!.shouldBeInDOM) {
						<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
							<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
		</div>
	\`,
	styles: "@import './custom.scss';",
})
export default class AccordionComponent {
	thirdDisabled = false;
	BODY = BODY;
}
`;export{e as default};
