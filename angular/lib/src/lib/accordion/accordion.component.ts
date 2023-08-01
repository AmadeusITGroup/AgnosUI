import type {AfterContentChecked, AfterViewInit, Signal, SimpleChanges, OnChanges} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	effect,
	EventEmitter,
	inject,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import {NgIf} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import type {AdaptWidgetSlots, AdaptSlotContentProps} from '../slot.directive';
import {callWidgetFactory, ComponentTemplate, SlotDirective} from '../slot.directive';
import type {
	AccordionItemWidget as AccordionItemWidgetCore,
	AccordionItemContext as AccordionItemCoreContext,
	TransitionFn,
	SlotContent,
} from '@agnos-ui/core';
import {createAccordion, toSlotContextWidget} from '@agnos-ui/core';
import type {WidgetProps, WidgetState} from '@agnos-ui/core';
import {patchSimpleChanges} from '../utils';
import {UseDirective} from '../transition/use.directive';
import {writable} from '@amadeus-it-group/tansu';

export type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;

export type AccordionItemWidget = AdaptWidgetSlots<AccordionItemWidgetCore>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type ItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<AccordionItemCoreContext>;

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
					[class.collapsed]="state.itemCollapsed"
					class="accordion-button {{ state.itemButtonClass }}"
					[disabled]="state.itemDisabled"
					attr.aria-controls="{{ state.itemId }}-collapse"
					[attr.aria-disabled]="state.itemDisabled"
					[attr.aria-expanded]="!state.itemCollapsed"
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
export const accordionItemDefaultslotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<AccordionItemProps> = {
	slotItemStructure: accordionItemDefaultslotItemStructure,
};

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: '[au-accordion-item]',
	standalone: true,
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
	@Input() slotItemHeader: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@ContentChild(AccordionHeaderDirective, {static: false})
	slotItemHeaderFromContent: AccordionHeaderDirective | null;
	@Input() slotItemBody: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@ContentChild(AccordionBodyDirective, {static: false})
	slotItemBodyFromContent: AccordionBodyDirective | null;
	@Input() slotItemStructure: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@ContentChild(AccordionItemStructureDirective, {static: false})
	slotItemStructureFromContent: AccordionItemStructureDirective | null;

	@Input() itemId: string | undefined;
	@Input() itemTransition: TransitionFn | undefined;
	@Input() itemClass: string | undefined;
	@Input() itemDestroyOnHide: boolean | undefined;
	@Input() itemDisabled: boolean | undefined;
	@Input() itemCollapsed: boolean | undefined;
	@Input() itemAnimation: boolean | undefined;
	@Input() itemHeaderClass: string | undefined;
	@Input() itemButtonClass: string | undefined;
	@Input() itemCollapseClass: string | undefined;
	@Input() itemBodyClass: string | undefined;

	@Output() itemShown = new EventEmitter<void>();
	@Output() itemHidden = new EventEmitter<void>();
	@Output() itemCollapsedChange = new EventEmitter<boolean>();

	defaultSlots = writable(defaultConfig);
	readonly ad = inject(AccordionDirective);
	readonly _widget = callWidgetFactory(this.ad.api.registerItem, null, defaultConfig);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	useDirective = inject(UseDirective);
	// TODO: remove "as any" when https://github.com/angular/angular/pull/50162 is merged
	state: Signal<ItemState> = toSignal(this._widget.state$ as any, {requireSync: true});

	constructor() {
		this._widget.patch({
			onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
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
	standalone: true,
	host: {
		'[class]': '"accordion " + state$().accordionClass',
	},
	hostDirectives: [
		{
			directive: UseDirective,
		},
	],
})
export class AccordionDirective implements OnChanges {
	useDirective = inject(UseDirective);

	@Input() closeOthers: boolean | undefined;
	@Input() accordionClass: string | undefined;

	@Output() shown: EventEmitter<string> = new EventEmitter<string>();
	@Output() hidden: EventEmitter<string> = new EventEmitter<string>();

	@Input() itemId: string | undefined;
	@Input() itemDestroyOnHide: boolean | undefined;
	@Input() itemDisabled: boolean | undefined;
	@Input() itemCollapsed: boolean | undefined;
	@Input() itemAnimation: boolean | undefined;
	@Input() itemTransition: TransitionFn | undefined;
	@Input() slotItemStructure: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@Input() slotItemBody: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@Input() slotItemHeader: SlotContent<AdaptSlotContentProps<AccordionItemCoreContext>>;
	@Input() itemClass: string | undefined;
	@Input() itemHeaderClass: string | undefined;
	@Input() itemButtonClass: string | undefined;
	@Input() itemCollapseClass: string | undefined;
	@Input() itemBodyClass: string | undefined;

	//should not be documented
	@Output() itemShown = new EventEmitter<void>();
	@Output() itemHidden = new EventEmitter<void>();
	@Output() itemCollapsedChange = new EventEmitter<boolean>();

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
			onItemCollapsedChange: (collapsed) => this.itemCollapsedChange.emit(collapsed),
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
