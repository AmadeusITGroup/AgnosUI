import type {AccordionProps, AccordionWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAccordion} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [UseDirective],
	template: ` <div class="flex flex-col gap-2" [auUse]="widget.directives.accordionDirective">
		<ng-content></ng-content>
	</div>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent extends BaseWidgetDirective<AccordionWidget> {
	@Input({transform: auBooleanAttribute})
	closeOthers?: AccordionProps['closeOthers'];
	@Input({transform: auBooleanAttribute})
	itemDestroyOnHide?: AccordionProps['itemDestroyOnHide'];
	@Input()
	className?: AccordionProps['className'];
	@Output()
	itemShown = new EventEmitter<string>();
	@Output()
	itemHidden = new EventEmitter<string>();

	readonly _widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		events: {
			onItemShown: (id) => this.itemShown.emit(id),
			onItemHidden: (id) => this.itemHidden.emit(id),
		},
	});
}
