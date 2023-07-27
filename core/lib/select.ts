import {asReadable, batch, computed, writable} from '@amadeus-it-group/tansu';
import type {HasFocus} from './services/focustrack';
import {createHasFocus} from './services/focustrack';
import type {PropsConfig} from './services/stores';
import {stateStores, writablesForProps} from './services/stores';
import type {Widget} from './types';

export interface SelectCommonPropsAndState<Item> {
	className: string;

	/**
	 * List of selected items
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
	opened: boolean;

	/**
	 * true if a loading process is being done
	 */
	loading: boolean;
}

export interface SelectProps<T> extends SelectCommonPropsAndState<T> {
	/**
	 * List of available items for the dropdown
	 */
	items: T[];

	/**
	 * Custom function to filter an item.
	 * By default, item is considered as a string, and the function returns true if the text is found
	 */
	matchFn(item: T, text: string): boolean;

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 */
	itemId(item: T): string;

	// Event callbacks

	/**
	 * Callback called when the text filter change
	 * @param text - Filtered text
	 */
	onFilterTextChange?(text: string): void;
}

/**
 * Item representation built from the items provided in parameters
 */
export interface ItemCtx<T> {
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

	/**
	 * Select the item
	 */
	select(): void;

	/**
	 * Unselect the item
	 */
	unselect(): void;

	/**
	 * Toggle the item selection
	 */
	toggle(): void;
}

export interface SelectState<Item> extends SelectCommonPropsAndState<Item> {
	/**
	 * List of visible items displayed in the menu
	 */
	visible: ItemCtx<Item>[];

	/**
	 * Highlighted item context.
	 * It is designed to define the highlighted item in the dropdown menu
	 */
	highlighted: ItemCtx<Item> | undefined;
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
	 * Focus the provided item among the selected list.
	 * The focus feature is designed to know what item must be focused in the UI, i.e. among the badge elements.
	 */
	focus(item: Item): void;
	focusFirst(): void;
	focusPrevious(): void;
	focusNext(): void;
	focusLast(): void;

	/**
	 * Select the provided item.
	 * The selected list is used to
	 */
	select(item: Item): void;
	unselect(item: Item): void;
	toggleItem(item: Item, selected?: boolean): void;

	open(): void;
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
}

export interface SelectActions {
	// Dom methods

	/**
	 * Method to be plugged to on the 'input' event. The input text will be used as the filter text.
	 */
	onInput: (e: {target: any}) => void;

	/**
	 * Method to be plugged to on an keydown event, in order to control the keyboard interactions with the highlighted item.
	 * It manages arrow keys to move the highlighted item, or enter to toggle the item.
	 */
	onInputKeydown: (e: any) => void;
}

export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions, SelectDirectives>;

function defaultMatchFn(item: any, text: string) {
	return JSON.stringify(item).toLowerCase().includes(text.toLowerCase());
}

function defaultItemId(item: any) {
	return '' + item;
}

const defaultConfig: SelectProps<any> = {
	opened: false,
	disabled: false,
	items: [],
	filterText: '',
	loading: false,
	selected: [],
	itemId: defaultItemId,
	matchFn: defaultMatchFn,
	onFilterTextChange: undefined,
	className: '',
};

export function createSelect<Item>(config?: PropsConfig<SelectProps<Item>>): SelectWidget<Item> {
	// Props
	const [{opened$: _dirtyOpened$, items$, itemId$, matchFn$, onFilterTextChange$, ...otherProps}, patch] = writablesForProps<SelectProps<Item>>(
		defaultConfig,
		config
	);
	const {selected$, filterText$} = otherProps;

	const {hasFocus$, directive: hasFocusDirective} = createHasFocus();
	const opened$ = computed(() => {
		const _dirtyOpened = _dirtyOpened$();
		const hasFocus = hasFocus$();
		if (!hasFocus && _dirtyOpened) {
			_dirtyOpened$.set(false);
		}
		return _dirtyOpened && hasFocus;
	});

	const highlightedIndex$ = (function () {
		const store = writable(<number | undefined>0);

		const newStore = asReadable(store, {
			set(index: number | undefined) {
				const {length} = visible$();
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
			},
			update(fn: (index: number | undefined) => number | undefined) {
				newStore.set(fn(store()));
			},
		});

		return newStore;
	})();

	const visible$ = computed(() => {
		const list: ItemCtx<Item>[] = [];
		if (opened$()) {
			const selected = selected$();
			const filterText = filterText$();
			const matchFn = !filterText ? () => true : matchFn$();
			const itemId = itemId$();
			for (const item of items$()) {
				if (matchFn(item, filterText)) {
					list.push({
						item,
						id: itemId(item),
						selected: selected.includes(item),
						select: function (this: Item) {
							widget.api.select(this);
						}.bind(item),
						unselect: function (this: Item) {
							widget.api.unselect(this);
						}.bind(item),
						toggle: function (this: Item) {
							widget.api.toggleItem(this);
						}.bind(item),
					});
				}
			}
		}
		return list;
	});

	const highlighted$ = computed(() => {
		const visible = visible$();
		const highlightedIndex = highlightedIndex$();
		return visible.length && highlightedIndex != undefined ? visible[highlightedIndex] : undefined;
	});

	const widget: SelectWidget<Item> = {
		...stateStores({
			visible$,
			highlighted$,
			opened$,
			...otherProps,
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
				if (!items$().includes(item)) {
					return;
				}
				selected$.update((selectedItems) => {
					selectedItems = [...selectedItems];
					const index = selectedItems.indexOf(item);
					if (selected == null) {
						selected = index === -1;
					}
					if (selected && index === -1) {
						selectedItems.push(item);
					} else if (!selected && index !== -1) {
						selectedItems.splice(index, 1);
					}

					return selectedItems;
				});
			},

			clearText() {
				// FIXME: not implemented yet!
			},

			highlight(item: Item) {
				const index = visible$().findIndex((itemCtx) => itemCtx.item === item);
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

			focus(item: Item) {
				// FIXME: not implemented yet!
			},
			focusFirst() {
				// FIXME: not implemented yet!
			},
			focusPrevious() {
				// FIXME: not implemented yet!
			},
			focusNext() {
				// FIXME: not implemented yet!
			},
			focusLast() {
				// FIXME: not implemented yet!
			},

			open: () => widget.api.toggle(true),
			close: () => widget.api.toggle(false),
			toggle(isOpen?: boolean) {
				_dirtyOpened$.update((value) => (isOpen != null ? isOpen : !value));
			},
		},
		directives: {
			hasFocusDirective,
		},
		actions: {
			onInput({target}: {target: HTMLInputElement}) {
				const value = target.value;
				batch(() => {
					patch({
						opened: value != null && value !== '',
						filterText: value,
					});
					onFilterTextChange$()?.(value);
				});
			},
			onInputKeydown(e: KeyboardEvent) {
				const {ctrlKey, key} = e;

				let keyManaged = true;
				switch (key) {
					case 'ArrowDown': {
						const isOpen = opened$();
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
						_dirtyOpened$.set(false);
						break;
					default:
						keyManaged = false;
				}
				if (keyManaged) {
					e.preventDefault();
				}
			},
		},
	};

	return widget;
}
