import type {SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, output, contentChild} from '@angular/core';
import type {Placement} from '@floating-ui/dom';
import {callWidgetFactory} from '../../config';
import type {ItemContext, SelectItemContext, SelectWidget} from './select.gen';
import {createSelect} from './select.gen';

/**
 * Directive to provide a custom template for the badge label in a select component.
 *
 * @template Item - The type of the item in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
@Directive({selector: 'ng-template[auSelectBadgeLabel]', standalone: true})
export class SelectBadgeLabelDirective<Item> {
	public templateRef = inject(TemplateRef<SelectItemContext<Item>>);
	static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

/**
 * Directive to provide a custom label template for select items.
 *
 * This directive allows you to define a custom template for the labels of items
 * in a select component. The template can be specified using an Angular `TemplateRef`.
 *
 * @template Item - The type of the items in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
@Directive({selector: 'ng-template[auSelectItemLabel]', standalone: true})
export class SelectItemLabelDirective<Item> {
	public templateRef = inject(TemplateRef<SelectItemContext<Item>>);
	static ngTemplateContextGuard<Item>(_dir: SelectItemLabelDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

/**
 * A component that represents a customizable select dropdown widget.
 *
 * @template Item - The type of items in the select dropdown.
 */
@Component({
	imports: [UseMultiDirective, SlotDirective, UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: '[auSelect]',
	host: {
		'[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state.className()',
	},
	template: `
		<div [auUseMulti]="[directives.hasFocusDirective, directives.inputContainerDirective]" class="d-flex align-items-center flex-wrap gap-1">
			@if (state.selectedContexts(); as selectedContexts) {
				@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
					<div [auUse]="[directives.badgeAttributesDirective, itemContext]">
						<ng-template [auSlot]="state.badgeLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
					</div>
				}
			}
			<input [auUse]="directives.inputDirective" [value]="state.filterText()" />
		</div>
		@if (state.open() && state.visibleItems().length) {
			<ul [auUseMulti]="[directives.hasFocusDirective, directives.floatingDirective, directives.menuAttributesDirective]" class="dropdown-menu show">
				@for (itemContext of state.visibleItems(); track itemCtxTrackBy($index, itemContext)) {
					<li
						class="dropdown-item position-relative"
						[auUse]="[directives.itemAttributesDirective, itemContext]"
						[class.text-bg-primary]="itemContext === state.highlighted()"
					>
						<ng-template [auSlot]="state.itemLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
					</li>
				}
			</ul>
		}
	`,
})
export class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> {
	/**
	 * aria-label used for the input inside the select
	 *
	 * @defaultValue `'Select'`
	 */
	readonly ariaLabel = input<string>(undefined, {alias: 'auAriaLabel'});

	/**
	 * id used for the input inside the select
	 */
	readonly id = input<string>(undefined, {alias: 'auId'});

	/**
	 * List of available items for the dropdown
	 *
	 * @defaultValue `[]`
	 */
	readonly items = input<Item[]>(undefined, {alias: 'auItems'});

	/**
	 * List of allowed placements for the dropdown.
	 * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
	 *
	 * @defaultValue
	 * ```ts
	 * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
	 * ```
	 */
	readonly allowedPlacements = input<Placement[]>(undefined, {alias: 'auAllowedPlacements'});

	/**
	 * true if the select is open
	 *
	 * @defaultValue `false`
	 */
	readonly open = input(undefined, {alias: 'auOpen', transform: auBooleanAttribute});

	/**
	 * Filtered text to be display in the filter input
	 *
	 * @defaultValue `''`
	 */
	readonly filterText = input<string>(undefined, {alias: 'auFilterText'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * true if the select is disabled
	 *
	 * @defaultValue `false`
	 */
	readonly disabled = input(undefined, {alias: 'auDisabled', transform: auBooleanAttribute});

	/**
	 * List of selected item ids
	 *
	 * @defaultValue `[]`
	 */
	readonly selected = input<Item[]>(undefined, {alias: 'auSelected'});

	/**
	 * true if a loading process is being done
	 *
	 * @defaultValue `false`
	 */
	readonly loading = input(undefined, {alias: 'auLoading', transform: auBooleanAttribute});

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 *
	 * @defaultValue
	 * ```ts
	 * (item: any) => '' + item
	 * ```
	 */
	readonly itemIdFn = input<(item: Item) => string>(undefined, {alias: 'auItemIdFn'});

	/**
	 * Class to be added on the dropdown menu container
	 *
	 * @defaultValue `''`
	 */
	readonly menuClassName = input<string>(undefined, {alias: 'auMenuClassName'});

	/**
	 * The template to override the way each badge on the left of the input is displayed.
	 * This define the content of the badge inside the badge container.
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	readonly badgeLabel = input<SlotContent<SelectItemContext<Item>>>(undefined, {alias: 'auBadgeLabel'});
	readonly slotSelectBadgeLabelFromContent = contentChild(SelectBadgeLabelDirective);

	/**
	 * The template to override the way each item is displayed in the list.
	 * This define the content of the badge inside the badge container.
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	readonly itemLabel = input<SlotContent<SelectItemContext<Item>>>(undefined, {alias: 'auItemLabel'});
	readonly slotSelectItemLabelFromContent = contentChild(SelectItemLabelDirective);

	/**
	 * Callback called when the text filter change
	 * @param text - Filtered text
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly filterTextChange = output<string>({alias: 'auFilterTextChange'});

	/**
	 * Callback called when the selection change
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly selectedChange = output<Item[]>({alias: 'auSelectedChange'});

	/**
	 * Callback called dropdown open state change
	 * @param isOpen - updated open state
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly openChange = output<boolean>({alias: 'auOpenChange'});

	/**
	 * Class to be added on menu items
	 *
	 * @defaultValue `''`
	 */
	readonly menuItemClassName = input<string>(undefined, {alias: 'auMenuItemClassName'});

	/**
	 * Class to be added on selected items (displayed in the input zone)
	 *
	 * @defaultValue `''`
	 */
	readonly badgeClassName = input<string>(undefined, {alias: 'auBadgeClassName'});

	/**
	 * Retrieves navigable elements within an HTML element containing badges and the input.
	 *
	 * @param node - HTMLElement that contains the badges and the input
	 *
	 * @defaultValue
	 * ```ts
	 * (node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
	 * ```
	 */
	readonly navSelector = input<(node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>>(undefined, {alias: 'auNavSelector'});

	constructor() {
		super(
			callWidgetFactory<SelectWidget<Item>>({
				factory: createSelect,
				widgetName: 'select',
				events: {
					onOpenChange: (event) => this.openChange.emit(event),
					onSelectedChange: (event) => this.selectedChange.emit(event),
					onFilterTextChange: (event) => this.filterTextChange.emit(event),
				},
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.referenceDirective);
				},
				slotTemplates: () => ({
					badgeLabel: this.slotSelectBadgeLabelFromContent()?.templateRef,
					itemLabel: this.slotSelectItemLabelFromContent()?.templateRef,
				}),
			}),
		);
	}

	itemCtxTrackBy(_: number, itemContext: ItemContext<Item>) {
		return itemContext.id;
	}
}
