const e=`import type {AccordionProps, AccordionWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createAccordion} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [UseDirective],
	template: \` <div class="flex flex-col gap-2" [auUse]="widget.directives.accordionDirective">
		<ng-content></ng-content>
	</div>\`,
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
	shown = new EventEmitter<string>();
	@Output()
	hidden = new EventEmitter<string>();

	readonly _widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		events: {
			onItemVisibleChange: () => {},
			onItemHidden: () => {},
			onItemShown: () => {},
			onShown: (id) => this.shown.emit(id),
			onHidden: (id) => this.hidden.emit(id),
		},
	});
}
`;export{e as default};
