const e=`import {AgnosUIAngularModule, UseDirective} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';
import BODY from './body.txt';

@Component({
	imports: [AgnosUIAngularModule, UseDirective],
	template: \`
		<div auAccordion #accordion="auAccordion">
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-directives="directives">
					<div
						[auUse]="directives.headerDirective"
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible()"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">First panel - {{ state.visible() ? 'opened' : 'collapsed' }}</p>
						<button
							type="button"
							class="btn btn-link p-0 {{ state.buttonClassName() }} au-accordion-item-button"
							[auUse]="directives.toggleDirective"
						>
							Toggle first
						</button>
					</div>
					@if (state!.shouldBeInDOM()) {
						<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
							<div class="accordion-body" [auUse]="directives.bodyDirective">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-directives="directives">
					<div
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible()"
						[auUse]="directives.headerDirective"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">Second panel</p>
						<div class="d-flex flex-wrap gap-2">
							<button
								[auUse]="directives.toggleDirective"
								type="button"
								class="btn btn-sm btn-outline-primary {{ state.buttonClassName() }} au-accordion-item-button"
							>
								Toggle second
							</button>
							<button type="button" class="btn btn-sm btn-outline-secondary" (click)="toggleThirdDisabled()">
								{{ thirdDisabled() ? 'En' : 'Dis' }}able third
							</button>
							<button type="button" class="btn btn-sm btn-outline-danger" (click)="accordion.api.collapseAll()">Collapse all</button>
						</div>
					</div>
					@if (state!.shouldBeInDOM()) {
						<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
							<div [auUse]="directives.bodyDirective" class="accordion-body">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem [auDisabled]="thirdDisabled()">
				<ng-template auAccordionItemStructure let-state="state" let-directives="directives">
					<div
						[auUse]="directives.headerDirective"
						class="accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.visible()"
						role="heading"
						aria-level="2"
					>
						<button
							type="button"
							class="p-0 btn btn-link container-fluid text-start au-accordion-item-button {{ state.buttonClassName() }}"
							[auUse]="directives.toggleDirective"
						>
							Third panel
						</button>
						@if (thirdDisabled()) {
							<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>
						}
					</div>
					@if (state.shouldBeInDOM()) {
						<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
							<div class="accordion-body" [auUse]="directives.bodyDirective">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
		</div>
	\`,
	styles: "@use './custom.scss';",
})
export default class AccordionComponent {
	readonly thirdDisabled = signal(false);
	toggleThirdDisabled() {
		this.thirdDisabled.update((val) => !val);
	}
	readonly BODY = BODY;
}
`;export{e as default};
