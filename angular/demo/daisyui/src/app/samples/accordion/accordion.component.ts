import type {AccordionWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAccordion} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [UseDirective],
	template: ` <div class="flex flex-col gap-2" [auUse]="directives.accordionDirective">
		<ng-content></ng-content>
	</div>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent extends BaseWidgetDirective<AccordionWidget> {
	readonly closeOthers = input(undefined, {transform: auBooleanAttribute});
	readonly itemDestroyOnHide = input(undefined, {transform: auBooleanAttribute});
	readonly className = input<string>();
	readonly itemShown = output<string>();
	readonly itemHidden = output<string>();

	constructor() {
		super(
			callWidgetFactory({
				factory: createAccordion,
				widgetName: 'accordion',
				events: {
					onItemShown: (id) => this.itemShown.emit(id),
					onItemHidden: (id) => this.itemHidden.emit(id),
				},
			}),
		);
	}
}
