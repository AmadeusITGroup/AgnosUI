import type {
	AccordionItemContext,
	AccordionItemProps,
	AccordionItemState,
	AccordionState,
	AdaptSlotContentProps,
	SlotContent,
	TransitionFn,
} from '@agnos-ui/angular-headless';
import {
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	callWidgetFactory,
	createAccordion,
	patchSimpleChanges,
	toSlotContextWidget,
} from '@agnos-ui/angular-headless';
import {NgIf} from '@angular/common';
import type {AfterContentChecked, AfterViewInit, OnChanges, Signal, SimpleChanges} from '@angular/core';
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
	effect,
	inject,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';

@Directive({selector: 'ng-template[auAccordionItemBody]', standalone: true})
export class AccordionBodyDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<AccordionItemContext>>);
	static ngTemplateContextGuard(dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAccordionItemHeader]', standalone: true})
export class AccordionHeaderDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<AccordionItemContext>>);
	static ngTemplateContextGuard(dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAccordionItemStructure]', standalone: true})
export class AccordionItemStructureDirective {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<AccordionItemContext>>);
	static ngTemplateContextGuard(dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, SlotDirective, NgIf, AccordionHeaderDirective, AccordionBodyDirective],
	template: `
		<ng-template #structure let-state="state" let-widget="widget">
			<h2 class="accordion-header {{ state.itemHeaderClass }}">
				<button
					type="button"
					id="{{ state.itemId }}-toggle"
					(click)="widget.actions.click()"
					[class.collapsed]="!state.itemVisible"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="state.itemVisible"
				>
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</h2>
			<div
				*ngIf="state.shouldBeInDOM"
				[auUse]="widget.directives.collapseDirective"
				attr.aria-labelledby="{{ state.itemId }}-toggle"
				id="{{ state.itemId }}-collapse"
				class="accordion-collapse {{ state.itemCollapseClass }}"
			>
				<div class="accordion-body {{ state.itemBodyClass }}">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
				</div>
			</div>
		</ng-template>
	`,
})
export class AccordionItemDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure: TemplateRef<AccordionItemContext>;
}
export const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<AccordionItemProps> = {
	slotItemStructure: accordionItemDefaultSlotItemStructure,
};

@Component({
	selector: '[auAccordionItem]',
	exportAs: 'auAccordionItem',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': '"accordion-item " + state().itemClass',
		'[id]': 'state().itemId',
	},
	hostDirectives: [
		{
			directive: UseDirective,
		},
	],
	imports: [SlotDirective, UseDirective],
	template: ` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> `,
})
export class AccordionItemComponent implements OnChanges, AfterContentChecked, AfterViewInit {
	@Input('auSlotItemHeader') slotItemHeader: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionHeaderDirective, {static: false})
	slotItemHeaderFromContent: AccordionHeaderDirective | null;
	@Input('auSlotItemBody') slotItemBody: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionBodyDirective, {static: false})
	slotItemBodyFromContent: AccordionBodyDirective | null;
	@Input('auSlotItemStructure') slotItemStructure: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionItemStructureDirective, {static: false})
	slotItemStructureFromContent: AccordionItemStructureDirective | null;

	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	@Input('auItemId') itemId: string | undefined;
	/**
	 * The transition to use for the accordion-item collapse when is toggled.
	 */
	@Input('auItemTransition') itemTransition: TransitionFn | undefined;
	/**
	 * Classes to add on the accordion-item DOM element.
	 */
	@Input('auItemClass') itemClass: string | undefined;
	/**
	 * If `true`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
	 */
	@Input('auItemDestroyOnHide') itemDestroyOnHide: boolean | undefined;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	@Input('auItemDisabled') itemDisabled: boolean | undefined;

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	@Input('auItemVisible') itemVisible: boolean | undefined;
	/**
	 * If `true`, accordion-item will be animated.
	 */
	@Input('auItemAnimation') itemAnimation: boolean | undefined;
	/**
	 * Classes to add on the accordion-item header DOM element.
	 */
	@Input('auItemHeaderClass') itemHeaderClass: string | undefined;
	/**
	 * Classes to add on the accordion-item collapse DOM element.
	 */
	@Input('auItemButtonClass') itemButtonClass: string | undefined;
	/**
	 * Classes to add on the accordion-item collapse DOM element.
	 */
	@Input('auItemCollapseClass') itemCollapseClass: string | undefined;
	/**
	 * Classes to add on the accordion-item body DOM element.
	 */
	@Input('auItemBodyClass') itemBodyClass: string | undefined;
	/**
	 * An event fired when an item is shown.
	 */
	@Output('auItemShown') itemShown = new EventEmitter<void>();
	/**
	 * An event fired when an item is hidden.
	 */
	@Output('auItemHidden') itemHidden = new EventEmitter<void>();
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	@Output('auItemVisibleChange') itemVisibleChange = new EventEmitter<boolean>();

	readonly ad = inject(AccordionDirective);
	readonly _widget = callWidgetFactory(this.ad.api.registerItem, null, defaultConfig);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	useDirective = inject(UseDirective);
	// TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
	state: Signal<AccordionItemState> = toSignal(this._widget.state$ as any, {requireSync: true});

	constructor() {
		this._widget.patch({
			onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
			onItemHidden: () => this.itemHidden.emit(),
			onItemShown: () => this.itemShown.emit(),
		});
		effect(() => {
			// TODO: workaround to be removed when https://github.com/angular/angular/issues/50320 is fixed
			this.state();
		});
		this.useDirective.use = this._widget.directives.accordionItemDirective;
		this.useDirective.ngOnChanges({
			useDirective: {
				previousValue: undefined,
				currentValue: this.useDirective.use,
				firstChange: true,
				isFirstChange: () => true,
			},
		});
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotItemStructure: this.slotItemStructureFromContent?.templateRef,
			slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
			slotItemBody: this.slotItemBodyFromContent?.templateRef,
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
	ngAfterViewInit() {
		queueMicrotask(() => this.api.initDone());
	}
}

@Directive({
	selector: '[auAccordion]',
	exportAs: 'auAccordion',
	standalone: true,
	host: {
		'[class]': '"accordion " + state$().className',
	},
	hostDirectives: [
		{
			directive: UseDirective,
		},
	],
})
export class AccordionDirective implements OnChanges {
	useDirective = inject(UseDirective);

	/**
	 * If `true`, only one item at the time can stay open.
	 */
	@Input('auCloseOthers') closeOthers: boolean | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * An event fired when an item is shown.
	 *
	 * Event payload is the id of the item.
	 */
	@Output('auShown') shown: EventEmitter<string> = new EventEmitter<string>();
	/**
	 * An event fired when an item is hidden.
	 *
	 * Event payload is the id of the item.
	 */
	@Output('auHidden') hidden: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemId') itemId: string | undefined;
	/**
	 * If `true`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemDestroyOnHide') itemDestroyOnHide: boolean | undefined;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemDisabled') itemDisabled: boolean | undefined;

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemVisible') itemVisible: boolean | undefined;
	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemAnimation') itemAnimation: boolean | undefined;
	/**
	 * The transition to use for the accordion-item collapse when is toggled.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemTransition') itemTransition: TransitionFn | undefined;
	@Input('auSlotItemStructure') slotItemStructure: SlotContent<AccordionItemContext>;
	@Input('auSlotItemBody') slotItemBody: SlotContent<AccordionItemContext>;
	@Input('auSlotItemHeader') slotItemHeader: SlotContent<AccordionItemContext>;
	/**
	 * Classes to add on the accordion-item DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemClass') itemClass: string | undefined;
	/**
	 * Classes to add on the accordion-item header DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemHeaderClass') itemHeaderClass: string | undefined;
	/**
	 * Classes to add on the accordion-item toggle button DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemButtonClass') itemButtonClass: string | undefined;
	/**
	 * Classes to add on the accordion-item collapse DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemCollapseClass') itemCollapseClass: string | undefined;
	/**
	 * Classes to add on the accordion-item body DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemBodyClass') itemBodyClass: string | undefined;

	//should not be documented
	/**
	 * An event fired when an item is shown.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Output('auItemShown') itemShown = new EventEmitter<void>();
	/**
	 * An event fired when an item is hidden.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Output('auItemHidden') itemHidden = new EventEmitter<void>();
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Output('auItemVisibleChange') itemVisibleChange = new EventEmitter<boolean>();

	readonly _widget = callWidgetFactory(createAccordion, 'accordion', {});
	readonly api = this._widget.api;

	// TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
	state$: Signal<AccordionState> = toSignal(this._widget.state$ as any, {requireSync: true});

	constructor() {
		this.useDirective.use = this._widget.directives.accordionDirective;
		this.useDirective.ngOnChanges({
			useDirective: {
				previousValue: undefined,
				currentValue: this.useDirective.use,
				firstChange: true,
				isFirstChange: () => true,
			},
		});
		this._widget.patch({
			onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
			onItemHidden: () => this.itemHidden.emit(),
			onItemShown: () => this.itemShown.emit(),
			onShown: (id) => this.shown.emit(id),
			onHidden: (id) => this.hidden.emit(id),
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
