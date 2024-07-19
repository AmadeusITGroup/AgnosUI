import type {SlotContent, TransitionFn, WidgetFactory} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	ContentAsSlotDirective,
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
import type {AccordionItemContext, AccordionItemProps, AccordionItemWidget, AccordionWidget} from './accordion.gen';
import {createAccordion} from './accordion.gen';
import {writable} from '@amadeus-it-group/tansu';

@Directive({selector: 'ng-template[auAccordionItemBody]', standalone: true})
export class AccordionBodyDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
	static ngTemplateContextGuard(dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAccordionItemHeader]', standalone: true})
export class AccordionHeaderDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
	static ngTemplateContextGuard(dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auAccordionItemStructure]', standalone: true})
export class AccordionItemStructureDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
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
					<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.header"></ng-template>
				</button>
			</ng-template>
			@if (state.shouldBeInDOM) {
				<div [auUse]="widget.directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="widget.directives.bodyDirective">
						<ng-template [auSlotProps]="{state, widget}" [auSlot]="state.children"></ng-template>
					</div>
				</div>
			}
		</ng-template>
	`,
})
export class AccordionItemDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<AccordionItemContext>;
}
export const accordionItemDefaultSlotItemStructure = new ComponentTemplate(AccordionItemDefaultSlotsComponent, 'structure');

const defaultConfig: Partial<AccordionItemProps> = {
	structure: accordionItemDefaultSlotItemStructure,
};

@Component({
	selector: '[auAccordionItem]',
	exportAs: 'auAccordionItem',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'accordion-item',
	},
	imports: [SlotDirective, UseDirective, ContentAsSlotDirective],
	template: `
		<ng-template [auContentAsSlot]="defaultSlots">
			<ng-content></ng-content>
		</ng-template>
		<ng-template [auSlotProps]="{state: state(), widget}" [auSlot]="state().structure"></ng-template>
	`,
})
export class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterContentChecked, AfterViewInit {
	/**
	 * Content present in the accordion button inside the accordion header.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auHeader') header: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionHeaderDirective, {static: false})
	slotHeaderFromContent: AccordionHeaderDirective | undefined;
	/**
	 * Content present in the accordion body.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auChildren') children: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionBodyDirective, {static: false})
	slotBodyFromContent: AccordionBodyDirective | undefined;

	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auStructure') structure: SlotContent<AccordionItemContext>;
	@ContentChild(AccordionItemStructureDirective, {static: false})
	slotStructureFromContent: AccordionItemStructureDirective | undefined;

	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	@Input('auId') id: string | undefined;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	@Input('auTransition') transition: TransitionFn | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	@Input({alias: 'auDestroyOnHide', transform: auBooleanAttribute}) destroyOnHide: boolean | undefined;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	@Input({alias: 'auVisible', transform: auBooleanAttribute}) visible: boolean | undefined;
	/**
	 * If `true`, accordion-item will be animated.
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute}) animated: boolean | undefined;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	@Input('auHeaderClassName') headerClassName: string | undefined;
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	@Input('auButtonClassName') buttonClassName: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	@Input('auBodyContainerClassName') bodyContainerClassName: string | undefined;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	@Input('auBodyClassName') bodyClassName: string | undefined;
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	@Input('auHeadingTag') headingTag: string | undefined;
	/**
	 * An event fired when an item is shown.
	 */
	@Output('auShown') shown = new EventEmitter<void>();
	/**
	 * An event fired when an item is hidden.
	 */
	@Output('auHidden') hidden = new EventEmitter<void>();
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	@Output('auVisibleChange') visibleChange = new EventEmitter<boolean>();

	readonly ad = inject(AccordionDirective);
	readonly defaultSlots = writable(defaultConfig);

	readonly _widget = callWidgetFactory<AccordionItemWidget>({
		factory: ((arg) => this.ad.api.registerItem(arg)) as WidgetFactory<AccordionItemWidget>,
		defaultConfig: this.defaultSlots,
		events: {
			onVisibleChange: (visible) => this.visibleChange.emit(visible),
			onHidden: () => this.hidden.emit(),
			onShown: () => this.shown.emit(),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.itemDirective);
		},
	});

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			structure: this.slotStructureFromContent?.templateRef,
			header: this.slotHeaderFromContent?.templateRef,
			children: this.slotBodyFromContent?.templateRef,
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
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auCloseOthers', transform: auBooleanAttribute}) closeOthers: boolean | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * An event fired when an item is shown.
	 *
	 * Event payload is the id of the item.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auItemShown') itemShown: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * An event fired when an item is hidden.
	 *
	 * Event payload is the id of the item.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auItemHidden') itemHidden: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auItemDestroyOnHide', transform: auBooleanAttribute}) itemDestroyOnHide: boolean | undefined;

	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auItemAnimated', transform: auBooleanAttribute}) itemAnimated: boolean | undefined;

	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * @defaultValue
	 * ```ts
	 * collapseVerticalTransition
	 * ```
	 */
	@Input('auItemTransition') itemTransition: TransitionFn | undefined;

	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	@Input('auItemStructure') itemStructure: SlotContent<AccordionItemContext>;

	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemClassName') itemClassName: string | undefined;

	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemHeaderClassName') itemHeaderClassName: string | undefined;

	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemButtonClassName') itemButtonClassName: string | undefined;

	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemBodyContainerClassName') itemBodyContainerClassName: string | undefined;

	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemBodyClassName') itemBodyClassName: string | undefined;

	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * @defaultValue `''`
	 */
	@Input('auItemHeadingTag') itemHeadingTag: string | undefined;

	readonly _widget = callWidgetFactory({
		factory: createAccordion,
		widgetName: 'accordion',
		events: {
			onItemShown: (id) => this.itemShown.emit(id),
			onItemHidden: (id) => this.itemHidden.emit(id),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.accordionDirective);
		},
	});
}
