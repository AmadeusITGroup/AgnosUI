import {asWritable, computed, writable} from '@amadeus-it-group/tansu';
import type {Placement} from '@floating-ui/dom';
import {autoPlacement, offset, size} from '@floating-ui/dom';
import type {FloatingUI} from '../../services/floatingUI';
import {createFloatingUI} from '../../services/floatingUI';
import type {HasFocus} from '../../services/focustrack';
import {createHasFocus} from '../../services/focustrack';
import type {NavManagerItemConfig} from '../../services/navManager';
import {createNavManager} from '../../services/navManager';
import type {Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '../../types';
import {bindDirective} from '../../utils/directive';
import {noop} from '../../utils/internal/func';
import {bindableDerived, stateStores, writablesForProps} from '../../utils/stores';
import type {WidgetsCommonPropsAndState} from '../commonProps';

/**
 * A type for the slot context of the pagination widget
 */
export type SelectContext<Item> = WidgetSlotContext<SelectWidget<Item>>;

export interface SelectItemContext<Item> extends SelectContext<Item> {
	/**
	 * Contextual data related to an item
	 */
	itemContext: ItemContext<Item>;
}

export interface SelectCommonPropsAndState<Item> extends WidgetsCommonPropsAndState {
	/**
	 * id used for the input inside the select
	 */
	id: string | undefined;

	/**
	 * aria-label used for the input inside the select
	 */
	ariaLabel: string | undefined;

	/**
	 * List of selected item ids
	 */
	selected: Item[];

	/**
	 * Filtered text to be display in the filter input
	 */
	filterText: string;

	/**
	 * true if the select is disabled
	 */
	disabled: boolean;

	/**
	 * true if the select is open
	 */
	open: boolean;

	/**
	 * Class to be added on the dropdown menu container
	 */
	menuClassName: string;

	/**
	 * Class to be added on menu items
	 */
	menuItemClassName: string;

	/**
	 * Class to be added on selected items (displayed in the input zone)
	 */
	badgeClassName: string;

	/**
	 * true if a loading process is being done
	 */
	loading: boolean;

	/**
	 * The template to override the way each badge on the left of the input is displayed.
	 * This define the content of the badge inside the badge container.
	 */
	slotBadgeLabel: SlotContent<SelectItemContext<Item>>;

	/**
	 * The template to override the way each item is displayed in the list.
	 * This define the content of the badge inside the badge container.
	 */
	slotItem: SlotContent<SelectItemContext<Item>>;
}

export interface SelectProps<T> extends SelectCommonPropsAndState<T> {
	/**
	 * List of available items for the dropdown
	 */
	items: T[];

	/**
	 * List of allowed placements for the dropdown.
	 * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
	 */
	allowedPlacements: Placement[];

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 */
	itemIdFn(item: T): string;

	/**
	 * Retrieves navigable elements within an HTML element containing badges and the input.
	 *
	 * @param node - HTMLElement that contains the badges and the input
	 */
	navSelector(node: HTMLElement): NodeListOf<HTMLSpanElement | HTMLInputElement>;

	// Event callbacks

	/**
	 * Callback called dropdown open state change
	 * @param isOpen - updated open state
	 */
	onOpenChange(isOpen: boolean): void;

	/**
	 * Callback called when the text filter change
	 * @param text - Filtered text
	 */
	onFilterTextChange(text: string): void;

	/**
	 * Callback called when the selection change
	 */
	onSelectedChange(selected: T[]): void;
}

/**
 * Item representation built from the items provided in parameters
 */
export interface ItemContext<T> {
	/**
	 * Original item given in the parameters
	 */
	item: T;

	/**
	 * Unique id to identify the item
	 */
	id: string;

	/**
	 * Specify if the item is checked
	 */
	selected: boolean;
}

export interface SelectState<Item> extends SelectCommonPropsAndState<Item> {
	/**
	 * List of item contexts, to be displayed in the menu
	 */
	visibleItems: ItemContext<Item>[];

	/**
	/**
	 * List of selected items to be display
	 */
	selectedContexts: ItemContext<Item>[];

	/**
	 * Highlighted item context.
	 * It is designed to define the highlighted item in the dropdown menu
	 */
	highlighted: ItemContext<Item> | undefined;

	/**
	 * Current placement of the dropdown
	 */
	placement: Placement | undefined;
}

export interface SelectApi<Item> {
	/**
	 * Clear all the selected items
	 */
	clear(): void;

	/**
	 * Clear the filter text
	 */
	clearText(): void;

	/**
	 * Highlight the given item, if there is a corresponding match among the visible list
	 */
	highlight(item: Item): void;

	/**
	 * Highlight the first item among the visible list
	 */
	highlightFirst(): void;

	/**
	 * Highlight the previous item among the visible list
	 * Loop to the last item if needed
	 */
	highlightPrevious(): void;

	/**
	 * Highlight the next item among the visible list.
	 * Loop to the first item if needed
	 */
	highlightNext(): void;

	/**
	 * Highlight the last item among the visible list
	 */
	highlightLast(): void;

	/**
	 * Select the provided item.
	 * The selected list is used to
	 * @param item - the item to select
	 */
	select(item: Item): void;
	/**
	 * Unselect the provided item.
	 * @param item - the item to unselect
	 */
	unselect(item: Item): void;
	/**
	 * Toggle the selection of an item
	 * @param item - the item to toggle
	 * @param selected - an optional boolean to enforce the selected/unselected state instead of toggling
	 */
	toggleItem(item: Item, selected?: boolean): void;

	/**
	 * open the select
	 */
	open(): void;
	/**
	 * close the select
	 */
	close(): void;
	/**
	 * Toggle the dropdown menu
	 * @param isOpen - If specified, set the menu in the defined state.
	 */
	toggle(isOpen?: boolean): void;
}

export interface SelectDirectives {
	/**
	 * Directive to be used in the input group and the menu containers
	 */
	hasFocusDirective: HasFocus['directive'];

	/**
	 * Directive that enables dynamic positioning of menu element
	 */
	floatingDirective: FloatingUI['directives']['floatingDirective'];

	/**
	 * A directive to be applied to the input group element serves as the base for menu positioning
	 */
	referenceDirective: FloatingUI['directives']['referenceDirective'];

	/**
	 * A directive to be applied to the element that contains the badges and the input
	 */
	inputContainerDirective: Directive;
}

export interface SelectActions<Item> {
	// Dom methods

	/**
	 * Method to be plugged to on the 'input' event. The input text will be used as the filter text.
	 */
	onInput: (e: {target: any}) => void;

	/**
	 * Method to be attached to the node element to close a badge on click.
	 */
	onRemoveBadgeClick: (event: MouseEvent, item: Item) => void;

	/**
	 * Method to be plugged to on an keydown event of the main input, in order to control the keyboard interactions with the highlighted item.
	 * It manages arrow keys to move the highlighted item, or enter to toggle the item.
	 */
	onInputKeydown: (event: any) => void;

	/**
	 * Method to be plugged to on an keydown event of a badge container, in order to manage main actions on badges.
	 *
	 * @param event - keyboard event
	 * @param item - corresponding item
	 */
	onBadgeKeydown: (event: any, item: Item) => void;
}

export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions<Item>, SelectDirectives>;

const defaultItemId = (item: any) => '' + item;

export const defaultConfig: SelectProps<any> = {
	id: undefined,
	ariaLabel: 'Select',
	open: false,
	disabled: false,
	items: [],
	filterText: '',
	loading: false,
	selected: [],
	navSelector: (node: HTMLElement) => node.querySelectorAll('.au-select-badge,input'),
	itemIdFn: defaultItemId,
	onOpenChange: noop,
	onFilterTextChange: noop,
	onSelectedChange: noop,
	allowedPlacements: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
	className: '',
	menuClassName: '',
	menuItemClassName: '',
	badgeClassName: '',
	slotBadgeLabel: ({itemContext}) => itemContext.item,
	slotItem: ({itemContext}) => itemContext.item,
};

/**
 * Returns a shallow copy of the default select config.
 * @returns a copy of the default config
 */
export function getSelectDefaultConfig() {
	return {...defaultConfig};
}

/**
 * Create a SelectWidget with given config props
 * @param config - an optional alert config
 * @returns a SelectWidget
 */
export function createSelect<Item>(config?: PropsConfig<SelectProps<Item>>): SelectWidget<Item> {
	// Props
	const [
		{
			open$: _dirtyOpen$,
			filterText$: _dirtyFilterText$,
			items$,
			itemIdFn$,
			onOpenChange$,
			onFilterTextChange$,
			onSelectedChange$,
			allowedPlacements$,
			navSelector$,
			...stateProps
		},
		patch,
	] = writablesForProps<SelectProps<Item>>(defaultConfig, config);
	const {selected$} = stateProps;

	const filterText$ = bindableDerived(onFilterTextChange$, [_dirtyFilterText$]);

	const {hasFocus$, directive: hasFocusDirective} = createHasFocus();
	const open$ = bindableDerived(onOpenChange$, [_dirtyOpen$, hasFocus$], ([_dirtyOpen, hasFocus]) => _dirtyOpen && hasFocus);

	const selectedContextsMap$ = computed(() => {
		const selectedItemsContext = new Map<string, ItemContext<Item>>();
		const itemIdFn = itemIdFn$();
		for (const item of selected$()) {
			const id = itemIdFn(item);
			selectedItemsContext.set(id, {
				item,
				id: itemIdFn(item),
				selected: true,
			});
		}
		return selectedItemsContext;
	});

	const selectedContexts$ = computed(() => [...selectedContextsMap$().values()]);

	const highlightedIndex$ = (function () {
		const store = writable(<number | undefined>0);

		return asWritable(store, (index: number | undefined) => {
			const {length} = visibleItems$();
			if (index != undefined) {
				if (!length) {
					index = undefined;
				} else if (index < 0) {
					index = length - 1;
				} else if (index >= length) {
					index = 0;
				}
			}
			store.set(index);
		});
	})();

	const itemContexts$ = computed(() => {
		const itemContexts = new Map<string, ItemContext<Item>>();
		if (open$()) {
			const selectedContextsMap = selectedContextsMap$();
			const itemIdFn = itemIdFn$();
			for (const item of items$()) {
				const id = itemIdFn(item);
				itemContexts.set(id, {
					item,
					id,
					selected: selectedContextsMap.has(id),
				});
			}
		}
		return itemContexts;
	});

	const visibleItems$ = computed(() => (open$() ? [...itemContexts$().values()] : <ItemContext<Item>[]>[]));

	const highlighted$ = computed(() => {
		const visibleItems = visibleItems$();
		const highlightedIndex = highlightedIndex$();
		return visibleItems.length && highlightedIndex != undefined ? visibleItems[highlightedIndex] : undefined;
	});

	const {
		directives: {floatingDirective, referenceDirective},
		stores: {placement$},
	} = createFloatingUI({
		props: {
			computePositionOptions: asWritable(
				computed(() => ({
					middleware: [
						offset(5),
						autoPlacement({
							allowedPlacements: allowedPlacements$(),
						}),
						size(),
					],
				})),
			),
		},
	});

	const {directive: navDirective, refreshElements, focusFirst, focusLast, focusLeft, focusRight} = createNavManager();

	const navManagerConfig$ = computed(
		() =>
			<NavManagerItemConfig>{
				keys: {
					Home: focusFirst,
					End: focusLast,
					ArrowLeft: focusLeft,
					ArrowRight: focusRight,
				},
				selector: navSelector$(),
			},
	);

	const widget: SelectWidget<Item> = {
		...stateStores({
			visibleItems$,
			highlighted$,
			open$,
			selectedContexts$,
			filterText$,
			placement$,

			...stateProps,
		}),

		patch,
		api: {
			clear() {
				selected$.set([]);
			},

			select(item: Item) {
				widget.api.toggleItem(item, true);
			},
			unselect(item: Item) {
				widget.api.toggleItem(item, false);
			},
			toggleItem(item: Item, selected?: boolean) {
				const itemIdFn = itemIdFn$();
				const itemId = itemIdFn(item);

				const selectedContextsMap = selectedContextsMap$();
				const isInSelected = selectedContextsMap.has(itemId);
				if (selected == null) {
					selected = !isInSelected;
				}

				if ((selected && !itemContexts$().has(itemId)) || (!selected && !isInSelected)) {
					// Nothing to do in this case
					return;
				}

				selected$.update((selectedItems) => {
					selectedItems = [...selectedItems]; // Mutate the array

					if (selected && !isInSelected) {
						selectedItems.push(item);
					} else if (!selected && isInSelected) {
						const index = selectedItems.findIndex((item) => itemIdFn(item) === itemId);
						selectedItems.splice(index, 1);
					}

					onSelectedChange$()?.(selectedItems);
					return selectedItems;
				});
			},

			clearText() {
				// FIXME: not implemented yet!
			},

			highlight(item: Item) {
				const index = visibleItems$().findIndex((itemCtx) => itemCtx.item === item);
				highlightedIndex$.set(index === -1 ? undefined : index);
			},
			highlightFirst() {
				highlightedIndex$.set(0);
			},
			highlightPrevious() {
				highlightedIndex$.update((highlightedIndex) => {
					return highlightedIndex != null ? highlightedIndex - 1 : -1;
				});
			},
			highlightNext() {
				highlightedIndex$.update((highlightedIndex) => {
					return highlightedIndex != null ? highlightedIndex + 1 : Infinity;
				});
			},
			highlightLast() {
				highlightedIndex$.set(-1);
			},

			open: () => widget.api.toggle(true),
			close: () => widget.api.toggle(false),
			toggle(isOpen?: boolean) {
				_dirtyOpen$.update((value) => (isOpen != null ? isOpen : !value));
			},
		},
		directives: {
			hasFocusDirective,
			floatingDirective,
			referenceDirective,
			inputContainerDirective: bindDirective(navDirective, navManagerConfig$),
		},
		actions: {
			onInput({target}: {target: HTMLInputElement}) {
				const value = target.value;
				patch({
					open: value != null && value !== '',
					filterText: value,
				});
			},

			onRemoveBadgeClick(event: any, item: Item) {
				const element = event.target;
				refreshElements();
				widget.api.unselect(item);
				// Waiting for refresh by the framework, to have the elements inside or outside the dom
				setTimeout(() => {
					focusLeft({event, referenceElement: element}) || focusRight({event, referenceElement: element});
				});
				event.preventDefault();
			},

			onInputKeydown(e: KeyboardEvent) {
				const {ctrlKey, key} = e;

				let keyManaged = true;
				switch (key) {
					case 'ArrowDown': {
						const isOpen = open$();
						if (isOpen) {
							if (ctrlKey) {
								widget.api.highlightLast();
							} else {
								widget.api.highlightNext();
							}
						} else {
							widget.api.open();
							widget.api.highlightFirst();
						}
						break;
					}
					case 'ArrowUp':
						if (ctrlKey) {
							widget.api.highlightFirst();
						} else {
							widget.api.highlightPrevious();
						}
						break;
					case 'Enter': {
						const itemCtx = highlighted$();
						if (itemCtx) {
							widget.api.toggleItem(itemCtx.item);
						}
						break;
					}
					case 'Escape':
						_dirtyOpen$.set(false);
						break;
					default:
						keyManaged = false;
				}
				if (keyManaged) {
					e.preventDefault();
				}
			},
			onBadgeKeydown(event: KeyboardEvent, item: Item) {
				let keyManaged = false;
				switch (event.key) {
					case 'Backspace':
					case 'Delete': {
						widget.actions.onRemoveBadgeClick(event as any, item);
						keyManaged = true;
						break;
					}
				}
				if (keyManaged) {
					event.preventDefault();
				}
			},
		},
	};

	return widget;
}
