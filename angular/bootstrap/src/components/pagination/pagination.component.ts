import type {SlotContent} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, ComponentTemplate, SlotDirective, UseDirective, auBooleanAttribute, auNumberAttribute} from '@agnos-ui/angular-headless';
import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	TemplateRef,
	ViewEncapsulation,
	inject,
	input,
	output,
	viewChild,
	contentChild,
} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {PaginationContext, PaginationNumberContext, PaginationWidget} from './pagination.gen';
import {createPagination} from './pagination.gen';

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationEllipsis]', standalone: true})
export class PaginationEllipsisDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'first' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationFirst]', standalone: true})
export class PaginationFirstDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationFirstDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'last' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationLast]', standalone: true})
export class PaginationLastDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationLastDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'next' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationNext]', standalone: true})
export class PaginationNextDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationNextDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the page 'number' template to the pagination component
 * This directive provides a template reference for the {@link PaginationNumberContext}.
 */
@Directive({selector: 'ng-template[auPaginationNumber]', standalone: true})
export class PaginationNumberDirective {
	public templateRef = inject(TemplateRef<PaginationNumberContext>);
	static ngTemplateContextGuard(_dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext {
		return true;
	}
}

/**
 * A directive to use to give the 'previous' link template to the pagination component
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationPrevious]', standalone: true})
export class PaginationPreviousDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationPreviousDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'Pages' template for the Pages slot
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationPages]', standalone: true})
export class PaginationPagesDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * Directive to provide the slot structure for the pagination widget.
 * This directive provides a template reference for the {@link PaginationContext}.
 */
@Directive({selector: 'ng-template[auPaginationStructure]', standalone: true})
export class PaginationStructureDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationStructureDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

@Component({
	imports: [SlotDirective, PaginationPagesDirective, PaginationStructureDirective, UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-template auPaginationPages #pages let-state="state" let-api="api" let-directives="directives">
			@for (page of state.pages(); track page; let i = $index) {
				<li class="page-item" [class.active]="page === state.page()" [class.disabled]="page === -1 || state.disabled()">
					@if (page === -1) {
						<div class="page-link au-ellipsis" aria-hidden="true">
							<ng-template [auSlot]="state.ellipsisLabel()" [auSlotProps]="{state, api, directives}" />
						</div>
						<span class="visually-hidden">{{ state.ariaEllipsisLabel() }}</span>
					} @else {
						<a class="page-link" [auUse]="[directives.pageLink, {page}]">
							<ng-template [auSlot]="state.numberLabel()" [auSlotProps]="{state, api, directives, displayedPage: page}" />
							@if (state.page() === page) {
								<span class="visually-hidden">{{ state.activeLabel() }}</span>
							}
						</a>
					}
				</li>
			}
		</ng-template>
		<ng-template auPaginationStructure #structure let-state="state" let-api="api" let-directives="directives">
			<ul [class]="'au-pagination pagination' + (state.size() ? ' pagination-' + state.size() : '') + ' ' + state.className()">
				@if (state.boundaryLinks()) {
					<li class="page-item" [class.disabled]="state.previousDisabled()">
						<a class="page-link" [auUse]="directives.pageFirst">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.firstPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.previousDisabled()">
						<a class="page-link" [auUse]="directives.pagePrev">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.previousPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				<ng-template [auSlot]="state.pagesDisplay()" [auSlotProps]="{state, api, directives}" />
				@if (state.directionLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageNext">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.nextPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
				@if (state.boundaryLinks()) {
					<li class="page-item" [class.disabled]="state.nextDisabled()">
						<a class="page-link" [auUse]="directives.pageLast">
							<span aria-hidden="true">
								<ng-template [auSlot]="state.lastPageLabel()" [auSlotProps]="{state, api, directives}" />
							</span>
						</a>
					</li>
				}
			</ul>
			<div aria-live="polite" class="visually-hidden">{{ state.ariaLiveLabelText() }}</div>
		</ng-template>
	`,
})
class PaginationDefaultSlotsComponent {
	readonly pages = viewChild.required<TemplateRef<PaginationContext>>('pages');
	readonly structure = viewChild.required<TemplateRef<PaginationContext>>('structure');
}
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages: SlotContent<PaginationContext> = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');
/**
 * The default slot for the structure
 */
export const paginationDefaultSlotStructure: SlotContent<PaginationContext> = new ComponentTemplate(PaginationDefaultSlotsComponent, 'structure');

/**
 * The `PaginationComponent` is an Angular component that extends the `BaseWidgetDirective`
 * to provide a customizable pagination widget. It includes various input properties
 * to configure labels, templates, and behavior for accessibility and internationalization (i18n).
 */
@Component({
	selector: '[auPagination]',
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[attr.aria-label]': 'state.ariaLabel()',
	},
	encapsulation: ViewEncapsulation.None,
	template: `<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()" />`,
})
export class PaginationComponent extends BaseWidgetDirective<PaginationWidget> {
	/**
	 * Provide the label for each "Page" page button.
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param processPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
	 * ```
	 */
	readonly ariaPageLabel = input<(processPage: number, pageCount: number) => string>(undefined, {alias: 'auAriaPageLabel'});

	/**
	 * Provide the label for the aria-live element
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param currentPage - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (currentPage: number) => `Current page is ${currentPage}`
	 * ```
	 */
	readonly ariaLiveLabel = input<(currentPage: number, pageCount: number) => string>(undefined, {alias: 'auAriaLiveLabel'});

	/**
	 * The label for the nav element.
	 *
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Page navigation'`
	 */
	readonly ariaLabel = input<string>(undefined, {alias: 'auAriaLabel'});

	/**
	 * The label for the "active" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * '(current)'
	 * ```
	 */
	readonly activeLabel = input<string>(undefined, {alias: 'auActiveLabel'});

	/**
	 * The label for the "First" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for first page'
	 * ```
	 */
	readonly ariaFirstLabel = input<string>(undefined, {alias: 'auAriaFirstLabel'});

	/**
	 * The label for the "Previous" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for previous page'
	 * ```
	 */
	readonly ariaPreviousLabel = input<string>(undefined, {alias: 'auAriaPreviousLabel'});

	/**
	 * The label for the "Next" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for next page'
	 * ```
	 */
	readonly ariaNextLabel = input<string>(undefined, {alias: 'auAriaNextLabel'});

	/**
	 * The label for the "Last" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue
	 * ```ts
	 * 'Action link for last page'
	 * ```
	 */
	readonly ariaLastLabel = input<string>(undefined, {alias: 'auAriaLastLabel'});

	/**
	 * The label for the "Ellipsis" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'Ellipsis page element'`
	 */
	readonly ariaEllipsisLabel = input<string>(undefined, {alias: 'auAriaEllipsisLabel'});

	/**
	 * Factory function providing the href for a "Page" page anchor,
	 * based on the current page number
	 * @param pageNumber - The index to use in the link
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number) => PAGE_LINK_DEFAULT
	 * ```
	 */
	readonly pageLink = input<(pageNumber: number) => string>(undefined, {alias: 'auPageLink'});

	/**
	 * The template to use for the ellipsis slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'…'`
	 */
	readonly ellipsisLabel = input<SlotContent<PaginationContext>>(undefined, {alias: 'auEllipsisLabel'});
	readonly slotEllipsisFromContent = contentChild(PaginationEllipsisDirective);

	/**
	 * The template to use for the first slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'«'`
	 */
	readonly firstPageLabel = input<SlotContent<PaginationContext>>(undefined, {alias: 'auFirstPageLabel'});
	readonly slotFirstFromContent = contentChild(PaginationFirstDirective);

	/**
	 * The template to use for the previous slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'‹'`
	 */
	readonly previousPageLabel = input<SlotContent<PaginationContext>>(undefined, {alias: 'auPreviousPageLabel'});
	readonly slotPreviousFromContent = contentChild(PaginationPreviousDirective);

	/**
	 * The template to use for the next slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'›'`
	 */
	readonly nextPageLabel = input<SlotContent<PaginationContext>>(undefined, {alias: 'auNextPageLabel'});
	readonly slotNextFromContent = contentChild(PaginationNextDirective);

	/**
	 * The template to use for the last slot
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 *
	 * @defaultValue `'»'`
	 */
	readonly lastPageLabel = input<SlotContent<PaginationContext>>(undefined, {alias: 'auLastPageLabel'});
	readonly slotLastFromContent = contentChild(PaginationLastDirective);

	/**
	 * The template to use for the pages slot
	 * To use to customize the pages view
	 * override any configuration parameters provided for this
	 */
	readonly pagesDisplay = input<SlotContent<PaginationContext>>(undefined, {alias: 'auPagesDisplay'});
	readonly slotPagesFromContent = contentChild(PaginationPagesDirective);

	/**
	 * The template to use for the number slot
	 * override any configuration parameters provided for this
	 * for I18n, we suggest to use the global configuration
	 * @param displayedPage - The current page number
	 *
	 * @defaultValue
	 * ```ts
	 * ({displayedPage}: PaginationNumberContext) => `${displayedPage}`
	 * ```
	 */
	readonly numberLabel = input<SlotContent<PaginationNumberContext>>(undefined, {alias: 'auNumberLabel'});
	readonly slotNumberLabelFromContent = contentChild(PaginationNumberDirective);

	/**
	 * The template to use for the structure of the pagination component
	 * The default structure uses {@link PaginationProps.ellipsisLabel|ellipsisLabel}, {@link PaginationProps.firstPageLabel|firstPageLabel},
	 * {@link PaginationProps.previousPageLabel|previousPageLabel}, {@link PaginationProps.nextPageLabel|nextPageLabel},
	 * {@link PaginationProps.lastPageLabel|lastPageLabel}, {@link PaginationProps.pagesDisplay|pagesDisplay},
	 * {@link PaginationProps.numberLabel|numberLabel},
	 */
	readonly structure = input<SlotContent<PaginationContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(PaginationStructureDirective);

	/**
	 * If `true`, pagination links will be disabled.
	 *
	 * @defaultValue `false`
	 */
	readonly disabled = input(undefined, {alias: 'auDisabled', transform: auBooleanAttribute});

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 *
	 * @defaultValue `false`
	 */
	readonly boundaryLinks = input(undefined, {alias: 'auBoundaryLinks', transform: auBooleanAttribute});

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 *
	 * @defaultValue `true`
	 */
	readonly directionLinks = input(undefined, {alias: 'auDirectionLinks', transform: auBooleanAttribute});

	/**
	 * The number of items in your paginated collection.
	 *
	 * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
	 * `collectionSize` and `pageSize`.
	 *
	 * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.
	 *
	 * Whatever the collectionSize the page number is of minimum 1.
	 *
	 * @defaultValue `0`
	 */
	readonly collectionSize = input(undefined, {alias: 'auCollectionSize', transform: auNumberAttribute});

	/**
	 * The current page.
	 *
	 * Page numbers start with `1`.
	 *
	 * @defaultValue `1`
	 */
	readonly page = input(undefined, {alias: 'auPage', transform: auNumberAttribute});

	/**
	 * The number of items per page.
	 * @remarks min value is 1
	 *
	 * @defaultValue `10`
	 */
	readonly pageSize = input(undefined, {alias: 'auPageSize', transform: auNumberAttribute});

	/**
	 * The pagination display size.
	 *
	 * Bootstrap currently supports small and large sizes.
	 *
	 * @defaultValue `null`
	 */
	readonly size = input<'sm' | 'lg' | null>(undefined, {alias: 'auSize'});

	/**
	 * pagesFactory returns a function computing the array of pages to be displayed
	 * as number (-1 are treated as ellipsis).
	 * Use Page slot to customize the pages view and not this
	 * @param page - The current page number
	 * @param pageCount - The total number of pages
	 *
	 * @defaultValue
	 * ```ts
	 * (_page: number, pageCount: number) => {
	 * 		const pages: number[] = [];
	 * 		for (let i = 1; i <= pageCount; i++) {
	 * 			pages.push(i);
	 * 		}
	 * 		return pages;
	 * 	}
	 * ```
	 */
	readonly pagesFactory = input<(page: number, pageCount: number) => number[]>(undefined, {alias: 'auPagesFactory'});

	/**
	 * An event fired when the page is changed.
	 *
	 * Event payload is the number of the newly selected page.
	 *
	 * Page numbers start with `1`.
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly pageChange = output<number>({alias: 'auPageChange'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	constructor() {
		super(
			callWidgetFactory({
				factory: createPagination,
				widgetName: 'pagination',
				defaultConfig: {
					structure: paginationDefaultSlotStructure,
					pagesDisplay: paginationDefaultSlotPages,
				},
				events: {
					onPageChange: (page: number) => this.pageChange.emit(page),
				},
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					ellipsisLabel: this.slotEllipsisFromContent()?.templateRef,
					firstPageLabel: this.slotFirstFromContent()?.templateRef,
					previousPageLabel: this.slotPreviousFromContent()?.templateRef,
					nextPageLabel: this.slotNextFromContent()?.templateRef,
					lastPageLabel: this.slotLastFromContent()?.templateRef,
					pagesDisplay: this.slotPagesFromContent()?.templateRef,
					numberLabel: this.slotNumberLabelFromContent()?.templateRef,
				}),
			}),
		);
	}
}
