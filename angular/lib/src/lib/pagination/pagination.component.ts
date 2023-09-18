import type {PaginationContext, PaginationNumberContext, PaginationProps, PaginationState, SlotContent} from '@agnos-ui/angular-headless';
import {
	ComponentTemplate,
	SlotDirective,
	callWidgetFactory,
	createPagination,
	patchSimpleChanges,
	toSlotContextWidget,
} from '@agnos-ui/angular-headless';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
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
 */
@Directive({selector: 'ng-template[auPaginationPages]', standalone: true})
export class PaginationPagesDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(_dir: PaginationPagesDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

@Component({
	standalone: true,
	imports: [NgForOf, NgIf, SlotDirective, PaginationPagesDirective],
	template: `<ng-template auPaginationPages #pages let-state="state" let-widget="widget">
		<li
			*ngFor="let page of state.pages; index as i"
			class="page-item"
			[class.active]="page === state.page"
			[class.disabled]="widget.api.isEllipsis(page) || state.disabled"
			[attr.aria-current]="page === state.page ? 'page' : null"
		>
			<a *ngIf="widget.api.isEllipsis(page)" class="page-link au-ellipsis" tabindex="-1" aria-disabled="true">
				<ng-template [auSlot]="state.slotEllipsis" [auSlotProps]="{state, widget}"></ng-template>
			</a>
			<a
				*ngIf="!widget.api.isEllipsis(page)"
				[attr.aria-label]="state.pagesLabel[i]"
				class="page-link au-page"
				href="#"
				(click)="widget.actions.select(page); $event.preventDefault()"
				[attr.tabindex]="state.disabled ? '-1' : null"
				[attr.aria-disabled]="state.disabled ? 'true' : null"
			>
				<ng-template [auSlot]="state.slotNumberLabel" [auSlotProps]="{state, widget, displayedPage: page}"></ng-template>
				<span *ngIf="state.page === page" class="visually-hidden">{{ state.activeLabel }}</span>
			</a>
		</li>
	</ng-template>`,
})
export class PaginationDefaultSlotsComponent {
	@ViewChild('pages', {static: true}) pages: TemplateRef<PaginationContext>;
}
/**
 * The default slot for the pages
 */
export const paginationDefaultSlotPages = new ComponentTemplate(PaginationDefaultSlotsComponent, 'pages');

const defaultConfig: Partial<PaginationProps> = {
	slotPages: paginationDefaultSlotPages,
};

@Component({
	selector: '[auPagination]',
	standalone: true,
	imports: [NgIf, AsyncPipe, SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[attr.aria-label]': 'state$().ariaLabel',
	},
	encapsulation: ViewEncapsulation.None,
	template: `
		<ng-container *ngIf="widget.state$ | async as state">
			<ul [class]="'au-pagination pagination' + (state.size ? ' pagination-' + state.size : '') + ' ' + state.className">
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaFirstLabel"
						class="page-link au-first"
						href="#"
						(click)="widget.actions.first(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotFirst" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.previousDisabled">
					<a
						[attr.aria-label]="state.ariaPreviousLabel"
						class="page-link au-previous"
						href="#"
						(click)="widget.actions.previous(); $event.preventDefault()"
						[attr.tabindex]="state.previousDisabled ? '-1' : null"
						[attr.aria-disabled]="state.previousDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotPrevious" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<ng-template [auSlot]="state.slotPages" [auSlotProps]="{widget, state}"></ng-template>
				<li *ngIf="state.directionLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaNextLabel"
						class="page-link au-next"
						href="#"
						(click)="widget.actions.next(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotNext" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
				<li *ngIf="state.boundaryLinks" class="page-item" [class.disabled]="state.nextDisabled">
					<a
						[attr.aria-label]="state.ariaLastLabel"
						class="page-link au-last"
						href="#"
						(click)="widget.actions.last(); $event.preventDefault()"
						[attr.tabindex]="state.nextDisabled ? '-1' : null"
						[attr.aria-disabled]="state.nextDisabled ? 'true' : null"
					>
						<span aria-hidden="true">
							<ng-template [auSlot]="state.slotLast" [auSlotProps]="{widget, state}"></ng-template>
						</span>
					</a>
				</li>
			</ul>
			<div aria-live="polite" class="visually-hidden">Current page is {{ state.page }}</div>
		</ng-container>
	`,
})
export class PaginationComponent implements OnChanges, AfterContentChecked {
	/**
	 * Provide the label for each "Page" page button.
	 * This is used for accessibility purposes.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @param processPage - The current page number
	 * @param pageCount - The total number of pages
	 */
	@Input('auAriaPageLabel') ariaPageLabel: ((processPage: number, pageCount: number) => string) | undefined;

	/**
	 * The label for the nav element.
	 *
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Page navigation'
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The label for the "active" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue '(current)'
	 */
	@Input('auActiveLabel') activeLabel: string | undefined;

	/**
	 * The label for the "First" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for first page'
	 */
	@Input('auAriaFirstLabel') ariaFirstLabel: string | undefined;

	/**
	 * The label for the "Previous" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for previous page'
	 */
	@Input('auAriaPreviousLabel') ariaPreviousLabel: string | undefined;

	/**
	 * The label for the "Next" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for next page'
	 */
	@Input('auAriaNextLabel') ariaNextLabel: string | undefined;

	/**
	 * The label for the "Last" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for last page'
	 */
	@Input('auAriaLastLabel') ariaLastLabel: string | undefined;

	readonly _widget = callWidgetFactory(createPagination, 'pagination', defaultConfig);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;

	@Input('auSlotEllipsis') slotEllipsis: SlotContent<PaginationContext>;
	@ContentChild(PaginationEllipsisDirective, {static: false})
	slotEllipsisFromContent: PaginationEllipsisDirective | undefined;

	@Input('auSlotFirst') slotFirst: SlotContent<PaginationContext>;
	@ContentChild(PaginationFirstDirective, {static: false})
	slotFirstFromContent: PaginationFirstDirective | undefined;

	@Input('auSlotPrevious') slotPrevious: SlotContent<PaginationContext>;
	@ContentChild(PaginationPreviousDirective, {static: false})
	slotPreviousFromContent: PaginationPreviousDirective | undefined;

	@Input('auSlotNext') slotNext: SlotContent<PaginationContext>;
	@ContentChild(PaginationNextDirective, {static: false})
	slotNextFromContent: PaginationNextDirective | undefined;

	@Input('auSlotLast') slotLast: SlotContent<PaginationContext>;
	@ContentChild(PaginationLastDirective, {static: false})
	slotLastFromContent: PaginationLastDirective | undefined;

	@Input('auSlotPages') slotPages: SlotContent<PaginationContext>;
	@ContentChild(PaginationPagesDirective, {static: false})
	slotPagesFromContent: PaginationPagesDirective | undefined;

	@Input('auSlotNumberLabel') slotNumberLabel: SlotContent<PaginationNumberContext>;
	@ContentChild(PaginationNumberDirective, {static: false})
	slotNumberLabelFromContent: PaginationNumberDirective | undefined;

	/**
	 * If `true`, pagination links will be disabled.
	 */
	@Input('auDisabled') disabled: boolean | undefined;

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 */
	@Input('auBoundaryLinks') boundaryLinks: boolean | undefined;

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 */
	@Input('auDirectionLinks') directionLinks: boolean | undefined;

	/**
	 * The number of items in your paginated collection.
	 *
	 * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
	 * `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
	 * you'll end up with 5 pages.
	 * Whatever the collectionSize the page number is of minimum 1.
	 * @defaultValue 0
	 */
	@Input('auCollectionSize') collectionSize: number | undefined;

	/**
	 * The current page.
	 *
	 * Page numbers start with `1`.
	 * @defaultValue 1
	 */
	@Input('auPage') page: number | undefined;

	/**
	 * The number of items per page.
	 * @defaultValue 10
	 */
	@Input('auPageSize') pageSize: number | undefined;

	/**
	 * The pagination display size.
	 *
	 * Bootstrap currently supports small and large sizes.
	 * @defaultValue null
	 */
	@Input('auSize') size: 'sm' | 'lg' | null | undefined;

	/**
	 * pagesFactory returns a function computing the array of pages to be displayed
	 * as number (-1 are treated as ellipsis).
	 * Use Page slot to customize the pages view and not this
	 */
	@Input('auPagesFactory') pagesFactory: ((page: number, pageCount: number) => number[]) | undefined;

	/**
	 * An event fired when the page is changed.
	 *
	 * Event payload is the number of the newly selected page.
	 *
	 * Page numbers start with `1`.
	 */
	@Output('auPageChange') pageChange = new EventEmitter<number>(true);

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	state$: Signal<PaginationState> = toSignal(this._widget.state$, {requireSync: true});

	constructor() {
		this._widget.patch({
			onPageChange: (page: number) => this.pageChange.emit(page),
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotEllipsis: this.slotEllipsisFromContent?.templateRef,
			slotFirst: this.slotFirstFromContent?.templateRef,
			slotLast: this.slotLastFromContent?.templateRef,
			slotNext: this.slotNextFromContent?.templateRef,
			slotNumberLabel: this.slotNumberLabelFromContent?.templateRef,
			slotPages: this.slotPagesFromContent?.templateRef,
			slotPrevious: this.slotPreviousFromContent?.templateRef,
		});
	}
}
