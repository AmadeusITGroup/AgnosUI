import type {SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import type {AfterContentChecked} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject} from '@angular/core';
import type {Placement} from '@floating-ui/dom';
import {callWidgetFactory} from '../../config';
import type {ItemContext, SelectItemContext, SelectWidget} from './select';
import {createSelect} from './select';

@Directive({selector: 'ng-template[auSelectBadgeLabel]', standalone: true})
export class SelectBadgeLabelDirective<Item> {
	public templateRef = inject(TemplateRef<SelectItemContext<Item>>);
	static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

@Directive({selector: 'ng-template[auSelectItemLabel]', standalone: true})
export class SelectItemLabelDirective<Item> {
	public templateRef = inject(TemplateRef<SelectItemContext<Item>>);
	static ngTemplateContextGuard<Item>(_dir: SelectItemLabelDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

@Component({
	standalone: true,
	imports: [UseMultiDirective, SlotDirective, UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: '[auSelect]',
	host: {
		'[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
	},
	template: `
		@if (state(); as state) {
			<div
				[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.inputContainerDirective]"
				class="d-flex align-items-center flex-wrap gap-1"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div [auUse]="[_widget.directives.badgeAttributesDirective, itemContext]">
							<ng-template [auSlot]="state.badgeLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</div>
					}
				}
				<input
					attr.id="{{ state.id }}"
					attr.aria-label="{{ state.ariaLabel }}"
					type="text"
					class="au-select-input flex-grow-1 border-0"
					[value]="state.filterText"
					aria-autocomplete="list"
					autoCorrect="off"
					autoCapitalize="none"
					autoComplete="off"
					(input)="_widget.actions.onInput($event)"
					(keydown)="_widget.actions.onInputKeydown($event)"
				/>
			</div>
			@if (state.open && state.visibleItems.length) {
				<ul
					[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.floatingDirective, widget.directives.menuAttributesDirective]"
					class="dropdown-menu show"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							class="dropdown-item position-relative"
							[auUse]="[_widget.directives.itemAttributesDirective, itemContext]"
							[class.text-bg-primary]="itemContext === state.highlighted"
						>
							<ng-template [auSlot]="state.itemLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</li>
					}
				</ul>
			}
		}
	`,
})
export class SelectComponent<Item> extends BaseWidgetDirective<SelectWidget<Item>> implements AfterContentChecked {
	/**
	 * aria-label used for the input inside the select
	 *
	 * @defaultValue `'Select'`
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * id used for the input inside the select
	 */
	@Input('auId') id: string | undefined;

	/**
	 * List of available items for the dropdown
	 *
	 * @defaultValue `[]`
	 */
	@Input('auItems') items: Item[] | undefined;

	/**
	 * List of allowed placements for the dropdown.
	 * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
	 *
	 * @defaultValue
	 * ```ts
	 * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
	 * ```
	 */
	@Input('auAllowedPlacements') allowedPlacements: Placement[] | undefined;

	/**
	 * true if the select is open
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auOpen', transform: auBooleanAttribute}) open: boolean | undefined;

	/**
	 * Filtered text to be display in the filter input
	 *
	 * @defaultValue `''`
	 */
	@Input('auFilterText') filterText: string | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * true if the select is disabled
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * List of selected item ids
	 *
	 * @defaultValue `[]`
	 */
	@Input('auSelected') selected: Item[] | undefined;

	/**
	 * true if a loading process is being done
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auLoading', transform: auBooleanAttribute}) loading: boolean | undefined;

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 *
	 * @defaultValue
	 * ```ts
	 * (item: any) => '' + item
	 * ```
	 */
	@Input('auItemIdFn') itemIdFn: ((item: Item) => string) | undefined;

	/**
	 * Class to be added on the dropdown menu container
	 *
	 * @defaultValue `''`
	 */
	@Input('auMenuClassName') menuClassName: string | undefined;

	/**
	 * The template to override the way each badge on the left of the input is displayed.
	 * This define the content of the badge inside the badge container.
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	@Input('auBadgeLabel') badgeLabel: SlotContent<SelectItemContext<Item>>;
	@ContentChild(SelectBadgeLabelDirective, {static: false}) slotSelectBadgeLabelFromContent: SelectBadgeLabelDirective<Item> | undefined;

	/**
	 * The template to override the way each item is displayed in the list.
	 * This define the content of the badge inside the badge container.
	 *
	 * @defaultValue
	 * ```ts
	 * ({itemContext}: SelectItemContext<any>) => itemContext.item
	 * ```
	 */
	@Input('auItemLabel') itemLabel: SlotContent<SelectItemContext<Item>>;
	@ContentChild(SelectItemLabelDirective, {static: false}) slotSelectItemLabelFromContent: SelectItemLabelDirective<Item> | undefined;

	/**
	 * Callback called when the text filter change
	 * @param text - Filtered text
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auFilterTextChange') filterTextChange = new EventEmitter<string>();

	/**
	 * Callback called when the selection change
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auSelectedChange') selectedChange = new EventEmitter<Item[]>();

	/**
	 * Callback called dropdown open state change
	 * @param isOpen - updated open state
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auOpenChange') openChange = new EventEmitter<boolean>();

	/**
	 * Class to be added on menu items
	 *
	 * @defaultValue `''`
	 */
	@Input('auMenuItemClassName') menuItemClassName: string | undefined;

	/**
	 * Class to be added on selected items (displayed in the input zone)
	 *
	 * @defaultValue `''`
	 */
	@Input('auBadgeClassName') badgeClassName: string | undefined;

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
	@Input('auNavSelector') navSelector: ((node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>) | undefined;

	readonly _widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		events: {
			onOpenChange: (event) => this.openChange.emit(event),
			onSelectedChange: (event) => this.selectedChange.emit(event),
			onFilterTextChange: (event) => this.filterTextChange.emit(event),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.referenceDirective);
		},
	});

	itemCtxTrackBy(_: number, itemContext: ItemContext<Item>) {
		return itemContext.id;
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			badgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
			itemLabel: this.slotSelectItemLabelFromContent?.templateRef,
		});
	}
}
