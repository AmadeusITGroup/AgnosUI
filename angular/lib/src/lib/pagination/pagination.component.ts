import type {
	WidgetProps,
	PaginationContext as PaginationCoreContext,
	PaginationNumberContext as PaginationNumberCoreContext,
	WidgetState,
} from '@agnos-ui/core';
import {createPagination, toSlotContextWidget} from '@agnos-ui/core';
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
import type {AdaptWidgetSlots, AdaptSlotContentProps, SlotContent} from '../slot.directive';
import {ComponentTemplate, SlotDirective, callWidgetFactory} from '../slot.directive';
import {patchSimpleChanges} from '../utils';
import {toSignal} from '@angular/core/rxjs-interop';

/**
 * A type for the context of the pagination slot
 */
export type PaginationContext = AdaptSlotContentProps<PaginationCoreContext>;

/**
 * A type for the context of the pagination number Slot
 */
export type PaginationNumberContext = AdaptSlotContentProps<PaginationNumberCoreContext>;
/**
 * A type for the widget of the pagination
 */
export type PaginationWidget = AdaptWidgetSlots<ReturnType<typeof createPagination>>;
/**
 * A type for the props of the pagination
 */
export type PaginationProps = WidgetProps<PaginationWidget>;
/**
 * A type for the state of the pagination
 */
export type PaginationState = WidgetState<PaginationWidget>;

/**
 * A directive to use to give the 'ellipsis' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationEllipsis]', standalone: true})
export class PaginationEllipsisDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationEllipsisDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'first' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationFirst]', standalone: true})
export class PaginationFirstDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationFirstDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'last' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationLast]', standalone: true})
export class PaginationLastDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationLastDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'next' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationNext]', standalone: true})
export class PaginationNextDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationNextDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the page 'number' template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationNumber]', standalone: true})
export class PaginationNumberDirective {
	public templateRef = inject(TemplateRef<PaginationNumberContext>);
	static ngTemplateContextGuard(dir: PaginationNumberDirective, context: unknown): context is PaginationNumberContext {
		return true;
	}
}

/**
 * A directive to use to give the 'previous' link template to the pagination component
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationPrevious]', standalone: true})
export class PaginationPreviousDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationPreviousDirective, context: unknown): context is PaginationContext {
		return true;
	}
}

/**
 * A directive to use to give the 'Pages' template for the Pages slot
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: 'ng-template[auPaginationPages]', standalone: true})
export class PaginationPagesDirective {
	public templateRef = inject(TemplateRef<PaginationContext>);
	static ngTemplateContextGuard(dir: PaginationPagesDirective, context: unknown): context is PaginationContext {
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
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'nav[au-pagination]',
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
	@Input() ariaPageLabel: ((processPage: number, pageCount: number) => string) | undefined;

	/**
	 * The label for the nav element.
	 *
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Page navigation'
	 */
	@Input() ariaLabel: string | undefined;

	/**
	 * The label for the "active" page.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue '(current)'
	 */
	@Input() activeLabel: string | undefined;

	/**
	 * The label for the "First" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for first page'
	 */
	@Input() ariaFirstLabel: string | undefined;

	/**
	 * The label for the "Previous" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for previous page'
	 */
	@Input() ariaPreviousLabel: string | undefined;

	/**
	 * The label for the "Next" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for next page'
	 */
	@Input() ariaNextLabel: string | undefined;

	/**
	 * The label for the "Last" page button.
	 * for I18n, we suggest to use the global configuration
	 * override any configuration parameters provided for this
	 * @defaultValue 'Action link for last page'
	 */
	@Input() ariaLastLabel: string | undefined;

	readonly _widget = callWidgetFactory(createPagination, 'pagination', defaultConfig);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;

	@Input() slotEllipsis: SlotContent<PaginationContext>;
	@ContentChild(PaginationEllipsisDirective, {static: false})
	slotEllipsisFromContent: PaginationEllipsisDirective | undefined;

	@Input() slotFirst: SlotContent<PaginationContext>;
	@ContentChild(PaginationFirstDirective, {static: false})
	slotFirstFromContent: PaginationFirstDirective | undefined;

	@Input() slotPrevious: SlotContent<PaginationContext>;
	@ContentChild(PaginationPreviousDirective, {static: false})
	slotPreviousFromContent: PaginationPreviousDirective | undefined;

	@Input() slotNext: SlotContent<PaginationContext>;
	@ContentChild(PaginationNextDirective, {static: false})
	slotNextFromContent: PaginationNextDirective | undefined;

	@Input() slotLast: SlotContent<PaginationContext>;
	@ContentChild(PaginationLastDirective, {static: false})
	slotLastFromContent: PaginationLastDirective | undefined;

	@Input() slotPages: SlotContent<PaginationContext>;
	@ContentChild(PaginationPagesDirective, {static: false})
	slotPagesFromContent: PaginationPagesDirective | undefined;

	@Input() slotNumberLabel: SlotContent<PaginationNumberContext>;
	@ContentChild(PaginationNumberDirective, {static: false})
	slotNumberLabelFromContent: PaginationNumberDirective | undefined;

	/**
	 * If `true`, pagination links will be disabled.
	 */
	@Input() disabled: boolean | undefined;

	/**
	 * If `true`, the "First" and "Last" page links are shown.
	 */
	@Input() boundaryLinks: boolean | undefined;

	/**
	 * If `true`, the "Next" and "Previous" page links are shown.
	 */
	@Input() directionLinks: boolean | undefined;

	/**
	 * The number of items in your paginated collection.
	 *
	 * Note, that this is not the number of pages. Page numbers are calculated dynamically based on
	 * `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
	 * you'll end up with 5 pages.
	 * Whatever the collectionSize the page number is of minimum 1.
	 * @defaultValue 0
	 */
	@Input() collectionSize: number | undefined;

	/**
	 * The current page.
	 *
	 * Page numbers start with `1`.
	 * @defaultValue 1
	 */
	@Input() page: number | undefined;

	/**
	 * The number of items per page.
	 * @defaultValue 10
	 */
	@Input() pageSize: number | undefined;

	/**
	 * The pagination display size.
	 *
	 * Bootstrap currently supports small and large sizes.
	 * @defaultValue null
	 */
	@Input() size: 'sm' | 'lg' | null | undefined;

	/**
	 * pagesFactory returns a function computing the array of pages to be displayed
	 * as number (-1 are treated as ellipsis).
	 * Use Page slot to customize the pages view and not this
	 */
	@Input() pagesFactory: ((page: number, pageCount: number) => number[]) | undefined;

	/**
	 * An event fired when the page is changed.
	 *
	 * Event payload is the number of the newly selected page.
	 *
	 * Page numbers start with `1`.
	 */
	@Output() pageChange = new EventEmitter<number>(true);

	/**
	 * An input to add a custom class to the UL
	 */
	@Input() className: string | undefined;

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
