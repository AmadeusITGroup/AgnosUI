import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import BODY from '@agnos-ui/common/samples/accordion/body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: `
		<div auAccordion #accordion="auAccordion">
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.itemVisible"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">First panel - {{ state.itemVisible ? 'opened' : 'collapsed' }}</p>
						<button
							type="button"
							id="{{ state.itemId }}-toggle"
							(click)="widget.actions.click()"
							class="btn btn-link p-0 {{ state.itemButtonClass }}"
							[class.collapsed]="!state.itemVisible"
							[disabled]="state.itemDisabled"
							attr.aria-controls="{{ state.itemId }}-collapse"
							[attr.aria-disabled]="state.itemDisabled"
							[attr.aria-expanded]="state.itemVisible"
						>
							Toggle first
						</button>
					</div>
					@if (state!.shouldBeInDOM) {
						<div
							[auUse]="widget!.directives.collapseDirective"
							attr.aria-labelledby="{{ state!.itemId }}-toggle"
							id="{{ state!.itemId }}-collapse"
							class="accordion-collapse {{ state!.itemCollapseClass }}"
						>
							<div class="accordion-body {{ state!.itemBodyClass }}">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.itemVisible"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">Second panel</p>
						<div>
							<button
								type="button"
								class="btn btn-sm btn-outline-primary me-2 {{ state.itemButtonClass }}"
								[class.collapsed]="!state.itemVisible"
								id="{{ state.itemId }}-toggle"
								(click)="widget.actions.click()"
								[disabled]="state.itemDisabled"
								[attr.aria-disabled]="state.itemDisabled"
								[attr.aria-expanded]="state.itemVisible"
								attr.aria-controls="{{ state.itemId }}-collapse"
							>
								Toggle second
							</button>
							<button type="button" class="btn btn-sm btn-outline-secondary me-2" (click)="thirdDisabled = !thirdDisabled">
								{{ thirdDisabled ? 'En' : 'Dis' }}able third
							</button>
							<button type="button" class="btn btn-sm btn-outline-danger me-2" (click)="accordion.api.collapseAll()">Collapse all</button>
						</div>
					</div>
					@if (state!.shouldBeInDOM) {
						<div
							[auUse]="widget!.directives.collapseDirective"
							attr.aria-labelledby="{{ state!.itemId }}-toggle"
							id="{{ state!.itemId }}-collapse"
							class="accordion-collapse {{ state!.itemCollapseClass }}"
						>
							<div class="accordion-body {{ state!.itemBodyClass }}">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
			<div auAccordionItem [auItemDisabled]="thirdDisabled">
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="!state.itemVisible"
						role="heading"
						aria-level="2"
					>
						<button
							type="button"
							class="p-0 btn btn-link container-fluid text-start {{ state.itemButtonClass }}"
							[class.collapsed]="!state.itemVisible"
							id="{{ state.itemId }}-toggle"
							(click)="widget.actions.click()"
							[disabled]="state.itemDisabled"
							[attr.aria-disabled]="state.itemDisabled"
							attr.aria-controls="{{ state.itemId }}-collapse"
							[attr.aria-expanded]="state.itemVisible"
						>
							Third panel
						</button>
						@if (thirdDisabled) {
							<p class="text-muted m-0 small">[I'm&nbsp;disabled]</p>
						}
					</div>
					@if (state!.shouldBeInDOM) {
						<div
							[auUse]="widget!.directives.collapseDirective"
							attr.aria-labelledby="{{ state!.itemId }}-toggle"
							id="{{ state!.itemId }}-collapse"
							class="accordion-collapse {{ state!.itemCollapseClass }}"
						>
							<div class="accordion-body {{ state!.itemBodyClass }}">
								{{ BODY }}
							</div>
						</div>
					}
				</ng-template>
			</div>
		</div>
	`,
	styles: "@import '@agnos-ui/common/samples/accordion/custom.scss';",
})
export default class AccordionComponent {
	thirdDisabled = false;
	BODY = BODY;
}
