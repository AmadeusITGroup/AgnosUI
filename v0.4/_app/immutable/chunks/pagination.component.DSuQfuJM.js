const n=`import {
	BaseWidgetDirective,
	type PaginationWidget,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createPagination,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';

@Component({
	selector: 'app-pagination',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './pagination.component.html',
})
export class PaginationComponent extends BaseWidgetDirective<PaginationWidget> {
	readonly ariaPageLabel = input<(processPage: number, pageCount: number) => string>();
	readonly ariaLabel = input<string>();
	readonly activeLabel = input<string>();
	readonly ariaFirstLabel = input<string>();
	readonly ariaPreviousLabel = input<string>();
	readonly ariaNextLabel = input<string>();
	readonly ariaLastLabel = input<string>();
	readonly ariaEllipsisLabel = input<string>();
	readonly pageLink = input<(pageNumber: number) => string>();
	readonly disabled = input(undefined, {transform: auBooleanAttribute});
	readonly boundaryLinks = input(undefined, {transform: auBooleanAttribute});
	readonly directionLinks = input(undefined, {transform: auBooleanAttribute});
	readonly collectionSize = input(undefined, {transform: auNumberAttribute});
	readonly page = model(0);
	readonly pageSize = input(undefined, {transform: auNumberAttribute});
	readonly size = input<string>();
	readonly pagesFactory = input<(page: number, pageCount: number) => number[]>();
	readonly className = input<string>();

	readonly _widget = callWidgetFactory({
		factory: createPagination,
		widgetName: 'pagination',
		events: {
			onPageChange: (page: number) => this.page.set(page),
		},
	});
}
`;export{n as default};
