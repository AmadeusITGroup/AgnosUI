const t=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import BODY from '!raw-loader!./body.txt';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgIf],
	template: \`
		<div auAccordion #accordion="auAccordion">
			<div au-accordion-item>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="state.itemCollapsed"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">First panel - {{ state.itemCollapsed ? 'collapsed' : 'opened' }}</p>
						<button
							type="button"
							id="{{ state.itemId }}-toggle"
							(click)="widget.actions.click()"
							class="btn btn-link p-0 {{ state.itemButtonClass }}"
							[class.collapsed]="state.itemCollapsed"
							[disabled]="state.itemDisabled"
							attr.aria-controls="{{ state.itemId }}-collapse"
							[attr.aria-disabled]="state.itemDisabled"
							[attr.aria-expanded]="!state.itemCollapsed"
						>
							Toggle first
						</button>
					</div>
					<div
						*ngIf="state!.shouldBeInDOM"
						[auUse]="widget!.directives.collapseDirective"
						attr.aria-labelledby="{{ state!.itemId }}-toggle"
						id="{{ state!.itemId }}-collapse"
						class="accordion-collapse {{ state!.itemCollapseClass }}"
					>
						<div class="accordion-body {{ state!.itemBodyClass }}">
							{{ BODY }}
						</div>
					</div>
				</ng-template>
			</div>
			<div au-accordion-item>
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="state.itemCollapsed"
						role="heading"
						aria-level="2"
					>
						<p class="m-0">Second panel</p>
						<div>
							<button
								type="button"
								class="btn btn-sm btn-outline-primary me-2 {{ state.itemButtonClass }}"
								[class.collapsed]="state.itemCollapsed"
								id="{{ state.itemId }}-toggle"
								(click)="widget.actions.click()"
								[disabled]="state.itemDisabled"
								[attr.aria-disabled]="state.itemDisabled"
								[attr.aria-expanded]="!state.itemCollapsed"
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
					<div
						*ngIf="state!.shouldBeInDOM"
						[auUse]="widget!.directives.collapseDirective"
						attr.aria-labelledby="{{ state!.itemId }}-toggle"
						id="{{ state!.itemId }}-collapse"
						class="accordion-collapse {{ state!.itemCollapseClass }}"
					>
						<div class="accordion-body {{ state!.itemBodyClass }}">
							{{ BODY }}
						</div>
					</div>
				</ng-template>
			</div>
			<div au-accordion-item [itemDisabled]="thirdDisabled">
				<ng-template auAccordionItemStructure let-state="state" let-widget="widget">
					<div
						class="{{ state.itemHeaderClass }} accordion-button accordion-header custom-header justify-content-between"
						[class.collapsed]="state.itemCollapsed"
						role="heading"
						aria-level="2"
					>
						<button
							type="button"
							class="p-0 btn btn-link container-fluid text-start {{ state.itemButtonClass }}"
							[class.collapsed]="state.itemCollapsed"
							id="{{ state.itemId }}-toggle"
							(click)="widget.actions.click()"
							[disabled]="state.itemDisabled"
							[attr.aria-disabled]="state.itemDisabled"
							attr.aria-controls="{{ state.itemId }}-collapse"
							[attr.aria-expanded]="!state.itemCollapsed"
						>
							Third panel
						</button>
						<p *ngIf="thirdDisabled" class="text-muted m-0 small">[I'm&nbsp;disabled]</p>
					</div>
					<div
						*ngIf="state!.shouldBeInDOM"
						[auUse]="widget!.directives.collapseDirective"
						attr.aria-labelledby="{{ state!.itemId }}-toggle"
						id="{{ state!.itemId }}-collapse"
						class="accordion-collapse {{ state!.itemCollapseClass }}"
					>
						<div class="accordion-body {{ state!.itemBodyClass }}">
							{{ BODY }}
						</div>
					</div>
				</ng-template>
			</div>
		</div>
	\`,
	styles: ["@import './custom.scss';"],
})
export default class AccordionComponent {
	thirdDisabled = false;
	BODY = BODY;
}
`;export{t as default};
