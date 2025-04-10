import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {NgTemplateOutlet} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, output, viewChild, contentChild} from '@angular/core';
import {callWidgetFactory} from '../../config';
import type {AccordionItemContext, AccordionItemWidget, AccordionWidget} from './accordion.gen';
import {createAccordion} from './accordion.gen';

/**
 * Directive to represent the body of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
@Directive({selector: 'ng-template[auAccordionItemBody]'})
export class AccordionBodyDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
	static ngTemplateContextGuard(_dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

/**
 * Directive to be used as an accordion header.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 */
@Directive({selector: 'ng-template[auAccordionItemHeader]'})
export class AccordionHeaderDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
	static ngTemplateContextGuard(_dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

/**
 * Directive that represents the structure of an accordion item.
 *
 * This directive provides a template reference for the {@link AccordionItemContext}.
 * It also includes a static method to guard the template context type.
 */
@Directive({selector: 'ng-template[auAccordionItemStructure]'})
export class AccordionItemStructureDirective {
	public templateRef = inject(TemplateRef<AccordionItemContext>);
	static ngTemplateContextGuard(_dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, SlotDirective, NgTemplateOutlet, AccordionItemStructureDirective],
	template: `
		<ng-template auAccordionItemStructure #structure let-state="state" let-api="api" let-directives="directives">
			@switch (state.headingTag()) {
				@case ('h1') {
					<ng-container [ngTemplateOutlet]="h1" />
				}
				@case ('h2') {
					<ng-container [ngTemplateOutlet]="h2" />
				}
				@case ('h3') {
					<ng-container [ngTemplateOutlet]="h3" />
				}
				@case ('h4') {
					<ng-container [ngTemplateOutlet]="h4" />
				}
				@case ('h5') {
					<ng-container [ngTemplateOutlet]="h5" />
				}
				@case ('h6') {
					<ng-container [ngTemplateOutlet]="h6" />
				}
				@default {
					<ng-container [ngTemplateOutlet]="h2" />
				}
			}

			<ng-template #h1>
				<h1 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h1>
			</ng-template>

			<ng-template #h2>
				<h2 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h2>
			</ng-template>

			<ng-template #h3>
				<h3 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h3>
			</ng-template>

			<ng-template #h4>
				<h4 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h4>
			</ng-template>

			<ng-template #h5>
				<h5 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h5>
			</ng-template>
			<ng-template #h6>
				<h6 class="accordion-header" [auUse]="directives.headerDirective">
					<ng-template [ngTemplateOutlet]="button" />
				</h6>
			</ng-template>

			<ng-template #button>
				<button class="accordion-button " [auUse]="directives.buttonDirective">
					<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.header()" />
				</button>
			</ng-template>
			@if (state.shouldBeInDOM()) {
				<div [auUse]="directives.bodyContainerDirective" class="accordion-collapse">
					<div class="accordion-body" [auUse]="directives.bodyDirective">
						<ng-template [auSlotProps]="{state, directives, api}" [auSlot]="state.children()" />
					</div>
				</div>
			}
		</ng-template>
	`,
})
class AccordionItemDefaultSlotsComponent {
	readonly structure = viewChild.required<TemplateRef<AccordionItemContext>>('structure');
}
/**
 * Represents the default slot structure for an accordion item.
 */
export const accordionItemDefaultSlotStructure: SlotContent<AccordionItemContext> = new ComponentTemplate(
	AccordionItemDefaultSlotsComponent,
	'structure',
);

/**
 * AccordionItemComponent is a component that represents an item within an accordion.
 */
@Component({
	selector: '[auAccordionItem]',
	exportAs: 'auAccordionItem',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'accordion-item',
	},
	imports: [SlotDirective],
	template: `
		<ng-template #content><ng-content /></ng-template>
		<ng-template [auSlotProps]="{state, api, directives}" [auSlot]="state.structure()" />
	`,
})
export class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterViewInit {
	/**
	 * Content present in the accordion button inside the accordion header.
	 *
	 * It is a prop of the accordion-item.
	 */
	readonly header = input<SlotContent<AccordionItemContext>>(undefined, {alias: 'auHeader'});
	readonly slotHeaderFromContent = contentChild(AccordionHeaderDirective);
	/**
	 * Content present in the accordion body.
	 *
	 * It is a prop of the accordion-item.
	 */
	readonly children = input<SlotContent<AccordionItemContext>>(undefined, {alias: 'auChildren'});
	readonly slotBodyFromContent = contentChild(AccordionBodyDirective);

	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	readonly structure = input<SlotContent<AccordionItemContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(AccordionItemStructureDirective);

	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	readonly id = input<string>(undefined, {alias: 'auId'});
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	readonly transition = input<TransitionFn>(undefined, {alias: 'auTransition'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	readonly destroyOnHide = input(undefined, {alias: 'auDestroyOnHide', transform: auBooleanAttribute});
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	readonly disabled = input(undefined, {alias: 'auDisabled', transform: auBooleanAttribute});

	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	readonly visible = input(undefined, {alias: 'auVisible', transform: auBooleanAttribute});
	/**
	 * If `true`, accordion-item will be animated.
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	readonly headerClassName = input<string>(undefined, {alias: 'auHeaderClassName'});
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	readonly buttonClassName = input<string>(undefined, {alias: 'auButtonClassName'});
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	readonly bodyContainerClassName = input<string>(undefined, {alias: 'auBodyContainerClassName'});
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	readonly bodyClassName = input<string>(undefined, {alias: 'auBodyClassName'});
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	readonly headingTag = input<string>(undefined, {alias: 'auHeadingTag'});
	/**
	 * An event fired when an item is shown.
	 */
	readonly shown = output<void>({alias: 'auShown'});
	/**
	 * An event fired when an item is hidden.
	 */
	readonly hidden = output<void>({alias: 'auHidden'});
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	readonly visibleChange = output<boolean>({alias: 'auVisibleChange'});

	readonly slotChildren = viewChild<TemplateRef<void>>('content');

	constructor() {
		super(
			callWidgetFactory<AccordionItemWidget>((arg) => inject(AccordionDirective).api.registerItem(arg), {
				defaultConfig: {
					structure: accordionItemDefaultSlotStructure,
				},
				events: {
					onVisibleChange: (visible) => this.visibleChange.emit(visible),
					onHidden: () => this.hidden.emit(),
					onShown: () => this.shown.emit(),
				},
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.itemDirective);
				},
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					header: this.slotHeaderFromContent()?.templateRef,
					children: this.slotBodyFromContent()?.templateRef,
				}),
				slotChildren: () => this.slotChildren(),
			}),
		);
	}

	ngAfterViewInit() {
		queueMicrotask(() => this.api.initDone());
	}
}

/**
 * Directive for creating an accordion component.
 *
 * This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
 * to customize the behavior and appearance of the accordion and its items.
 *
 */
@Directive({
	selector: '[auAccordion]',
	exportAs: 'auAccordion',

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
	readonly closeOthers = input(undefined, {alias: 'auCloseOthers', transform: auBooleanAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

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
	readonly itemShown = output<string>({alias: 'auItemShown'});

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
	readonly itemHidden = output<string>({alias: 'auItemHidden'});

	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * @defaultValue `true`
	 */
	readonly itemDestroyOnHide = input(undefined, {alias: 'auItemDestroyOnHide', transform: auBooleanAttribute});

	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * @defaultValue `true`
	 */
	readonly itemAnimated = input(undefined, {alias: 'auItemAnimated', transform: auBooleanAttribute});

	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * @defaultValue
	 * ```ts
	 * collapseVerticalTransition
	 * ```
	 */
	readonly itemTransition = input<TransitionFn>(undefined, {alias: 'auItemTransition'});

	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	readonly itemStructure = input<SlotContent<AccordionItemContext>>(undefined, {alias: 'auItemStructure'});

	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly itemClassName = input<string>(undefined, {alias: 'auItemClassName'});

	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly itemHeaderClassName = input<string>(undefined, {alias: 'auItemHeaderClassName'});

	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly itemButtonClassName = input<string>(undefined, {alias: 'auItemButtonClassName'});

	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * @defaultValue `''`
	 */
	readonly itemBodyContainerClassName = input<string>(undefined, {alias: 'auItemBodyContainerClassName'});

	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly itemBodyClassName = input<string>(undefined, {alias: 'auItemBodyClassName'});

	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * @defaultValue `''`
	 */
	readonly itemHeadingTag = input<string>(undefined, {alias: 'auItemHeadingTag'});

	constructor() {
		super(
			callWidgetFactory(createAccordion, {
				events: {
					onItemShown: (id) => this.itemShown.emit(id),
					onItemHidden: (id) => this.itemHidden.emit(id),
				},
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.accordionDirective);
				},
			}),
		);
	}
}
