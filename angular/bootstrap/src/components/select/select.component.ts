import type {AdaptSlotContentProps, ItemContext, SelectItemContext, SelectWidget, SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	CachedProperty,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	createSelect,
	mergeDirectives,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import type {AfterContentChecked} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject} from '@angular/core';
import type {Placement} from '@floating-ui/dom';
import {callWidgetFactory} from '../../config';

@Directive({selector: 'ng-template[auSelectBadgeLabel]', standalone: true})
export class SelectBadgeLabelDirective<Item> {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<SelectItemContext<Item>>>);
	static ngTemplateContextGuard<Item>(_dir: SelectBadgeLabelDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

@Directive({selector: 'ng-template[auSelectItem]', standalone: true})
export class SelectItemDirective<Item> {
	public templateRef = inject(TemplateRef<AdaptSlotContentProps<SelectItemContext<Item>>>);
	static ngTemplateContextGuard<Item>(_dir: SelectItemDirective<Item>, context: unknown): context is SelectItemContext<Item> {
		return true;
	}
}

@Component({
	standalone: true,
	imports: [UseDirective, SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: '[auSelect]',
	host: {
		'[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
	},
	template: `
		@if (state(); as state) {
			<div
				[auUse]="controlContainerDirective"
				role="combobox"
				class="d-flex align-items-center flex-wrap"
				[attr.aria-controls]="state.id + '-menu'"
				aria-haspopup="listbox"
				[attr.aria-expanded]="state.open"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div
							tabindex="-1"
							class="au-select-badge me-1"
							[class]="state.badgeClassName"
							(keydown)="_widget.actions.onBadgeKeydown($event, itemContext.item)"
						>
							<ng-template [auSlot]="state.slotBadgeLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
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
					role="listbox"
					[id]="state.id + '-menu'"
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							role="option"
							[attr.aria-selected]="itemContext.selected"
							class="au-select-item dropdown-item position-relative "
							[class.text-bg-primary]="itemContext === state.highlighted"
							[class.selected]="itemContext.selected"
							(click)="widget.api.toggleItem(itemContext.item)"
							[style.cursor]="'pointer'"
						>
							<ng-template [auSlot]="state.slotItem" [auSlotProps]="{state, widget, itemContext}"></ng-template>
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
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * id used for the input inside the select
	 */
	@Input('auId') id: string | undefined;

	/**
	 * List of available items for the dropdown
	 */
	@Input('auItems') items: Item[] | undefined;

	/**
	 * List of allowed placements for the dropdown.
	 * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
	 */
	@Input('auAllowedPlacements') allowedPlacements: Placement[] | undefined;

	/**
	 * true if the select is open
	 */
	@Input({alias: 'auOpen', transform: auBooleanAttribute}) open: boolean | undefined;

	/**
	 * Filtered text to be display in the filter input
	 */
	@Input('auFilterText') filterText: string | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * true if the select is disabled
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * List of selected item ids
	 */
	@Input('auSelected') selected: Item[] | undefined;

	/**
	 * true if a loading process is being done
	 */
	@Input({alias: 'auLoading', transform: auBooleanAttribute}) loading: boolean | undefined;

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 */
	@Input('auItemIdFn') itemIdFn: ((item: Item) => string) | undefined;

	/**
	 * Class to be added on the dropdown menu container
	 */
	@Input('auMenuClassName') menuClassName: string | undefined;

	@Input('auSlotBadgeLabel') slotBadgeLabel: SlotContent<SelectItemContext<Item>>;
	@ContentChild(SelectBadgeLabelDirective, {static: false}) slotSelectBadgeLabelFromContent: SelectBadgeLabelDirective<Item> | undefined;

	@Input('auSlotItem') slotItem: SlotContent<SelectItemContext<Item>>;
	@ContentChild(SelectItemDirective, {static: false}) slotSelectItemFromContent: SelectItemDirective<Item> | undefined;

	/**
	 * Callback called when the text filter change
	 */
	@Output('auFilterTextChange') filterTextChange = new EventEmitter<string>();

	/**
	 * Callback called when the selection change
	 */
	@Output('auSelectedChange') selectedChange = new EventEmitter<Item[]>();

	/**
	 * Callback called dropdown open state change
	 */
	@Output('auOpenChange') openChange = new EventEmitter<boolean>();

	/**
	 * Class to be added on menu items
	 */
	@Input('auMenuItemClassName') menuItemClassName: string | undefined;

	/**
	 * Class to be added on selected items (displayed in the input zone)
	 */
	@Input('auBadgeClassName') badgeClassName: string | undefined;

	/**
	 * Retrieves navigable elements within an HTML element containing badges and the input.
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

	@CachedProperty
	get menuDirective() {
		return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.floatingDirective);
	}

	@CachedProperty
	get controlContainerDirective() {
		return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.inputContainerDirective);
	}

	itemCtxTrackBy(_: number, itemContext: ItemContext<Item>) {
		return itemContext.id;
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotBadgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
			slotItem: this.slotSelectItemFromContent?.templateRef,
		});
	}
}
