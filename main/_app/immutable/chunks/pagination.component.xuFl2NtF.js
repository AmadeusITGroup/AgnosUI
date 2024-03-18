const a=`import {
	BaseWidgetDirective,
	type PaginationProps,
	type PaginationWidget,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createPagination,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-pagination',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './pagination.component.html',
})
export class PaginationComponent extends BaseWidgetDirective<PaginationWidget> {
	@Input() ariaPageLabel?: PaginationProps['ariaPageLabel'];
	@Input() ariaLabel?: PaginationProps['ariaLabel'];
	@Input() activeLabel?: PaginationProps['activeLabel'];
	@Input() ariaFirstLabel?: PaginationProps['ariaFirstLabel'];
	@Input() ariaPreviousLabel?: PaginationProps['ariaPreviousLabel'];
	@Input() ariaNextLabel?: PaginationProps['ariaNextLabel'];
	@Input() ariaLastLabel?: PaginationProps['ariaLastLabel'];
	@Input() ariaEllipsisLabel?: PaginationProps['ariaEllipsisLabel'];
	@Input() pageLink?: PaginationProps['pageLink'];
	@Input({transform: auBooleanAttribute}) disabled?: PaginationProps['disabled'];
	@Input({transform: auBooleanAttribute}) boundaryLinks?: PaginationProps['boundaryLinks'];
	@Input({transform: auBooleanAttribute}) directionLinks?: PaginationProps['directionLinks'];
	@Input({transform: auNumberAttribute}) collectionSize?: PaginationProps['collectionSize'];
	@Input({transform: auNumberAttribute}) page?: PaginationProps['page'];
	@Input({transform: auNumberAttribute}) pageSize?: PaginationProps['pageSize'];
	@Input() size?: PaginationProps['size'];
	@Input() pagesFactory?: PaginationProps['pagesFactory'];
	@Input() className?: PaginationProps['className'];
	@Output() pageChange = new EventEmitter<number>();

	readonly _widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		defaultConfig: {},
		events: {
			onPageChange: (page: number) => this.pageChange.emit(page),
		},
	});
}
`;export{a as default};
