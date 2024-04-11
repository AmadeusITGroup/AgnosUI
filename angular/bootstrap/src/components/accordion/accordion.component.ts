import type {AdaptSlotContentProps, SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {NgTemplateOutlet} from '@angular/common';
import type {AfterContentChecked, AfterViewInit} from '@angular/core';
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
	inject,
} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {AccordionItemContext, AccordionItemProps, AccordionItemWidget, AccordionWidget} from './accordion';
import {createAccordion} from './accordion';

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
	imports: [UseDirective, SlotDirective, AccordionHeaderDirective, AccordionBodyDirective, NgTemplateOutlet],
	template: `
		<ng-template #structure let-state="state" let-widget="widget">
			@switch (state.itemHeadingTag) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1"></ng-container>
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3"></ng-container>
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4"></ng-container>
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5"></ng-container>
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6"></ng-container>
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2"></ng-container>
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="widget.directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button"></ng-template>
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="widget.directives.buttonDirective">
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemHeader"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.slotItemBody"></ng-template>
					</div>
				</div>
			}
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
		class: 'accordion-item',
	},
	imports: [SlotDirective, UseDirective],
	template: ` <ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().slotItemStructure"></ng-template> `,
})
export class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterContentChecked, AfterViewInit {
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
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	@Input('auItemTransition') itemTransition: TransitionFn | undefined;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 */
	@Input('auItemClass') itemClass: string | undefined;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	@Input({alias: 'auItemDestroyOnHide', transform: auBooleanAttribute}) itemDestroyOnHide: boolean | undefined;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	@Input({alias: 'auItemDisabled', transform: auBooleanAttribute}) itemDisabled: boolean | undefined;

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	@Input({alias: 'auItemVisible', transform: auBooleanAttribute}) itemVisible: boolean | undefined;
	/**
	 * If `true`, accordion-item will be animated.
	 */
	@Input({alias: 'auItemAnimated', transform: auBooleanAttribute}) itemAnimated: boolean | undefined;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	@Input('auItemHeaderClass') itemHeaderClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	@Input('auItemButtonClass') itemButtonClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	@Input('auItemBodyContainerClass') itemBodyContainerClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	@Input('auItemBodyClass') itemBodyClass: string | undefined;
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	@Input('auItemHeadingTag') itemHeadingTag: string | undefined;
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
	readonly _widget = callWidgetFactory<AccordionItemWidget>({
		factory: ((arg) => this.ad.api.registerItem(arg)) as typeof this.ad.api.registerItem,
		defaultConfig,
		events: {
			onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
			onItemHidden: () => this.itemHidden.emit(),
			onItemShown: () => this.itemShown.emit(),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.accordionItemDirective);
		},
	});

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotItemStructure: this.slotItemStructureFromContent?.templateRef,
			slotItemHeader: this.slotItemHeaderFromContent?.templateRef,
			slotItemBody: this.slotItemBodyFromContent?.templateRef,
		});
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
		class: 'accordion',
	},
})
export class AccordionDirective extends BaseWidgetDirective<AccordionWidget> {
	/**
	 * If `true`, only one accordion-item at the time can stay open.
	 */
	@Input({alias: 'auCloseOthers', transform: auBooleanAttribute}) closeOthers: boolean | undefined;

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
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input({alias: 'auItemDestroyOnHide', transform: auBooleanAttribute}) itemDestroyOnHide: boolean | undefined;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input({alias: 'auItemDisabled', transform: auBooleanAttribute}) itemDisabled: boolean | undefined;

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input({alias: 'auItemVisible', transform: auBooleanAttribute}) itemVisible: boolean | undefined;
	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input({alias: 'auItemAnimated', transform: auBooleanAttribute}) itemAnimated: boolean | undefined;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemTransition') itemTransition: TransitionFn | undefined;
	@Input('auSlotItemStructure') slotItemStructure: SlotContent<AccordionItemContext>;
	@Input('auSlotItemBody') slotItemBody: SlotContent<AccordionItemContext>;
	@Input('auSlotItemHeader') slotItemHeader: SlotContent<AccordionItemContext>;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemClass') itemClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemHeaderClass') itemHeaderClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemButtonClass') itemButtonClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemBodyContainerClass') itemBodyContainerClass: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemBodyClass') itemBodyClass: string | undefined;
	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemHeadingTag') itemHeadingTag: string | undefined;

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

	readonly _widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		events: {
			onItemVisibleChange: (visible) => this.itemVisibleChange.emit(visible),
			onItemHidden: () => this.itemHidden.emit(),
			onItemShown: () => this.itemShown.emit(),
			onShown: (id) => this.shown.emit(id),
			onHidden: (id) => this.hidden.emit(id),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.accordionDirective);
		},
	});
}
