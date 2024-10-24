import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asWritable, batch, computed, writable} from '@amadeus-it-group/tansu';
import type {Placement} from '@floating-ui/dom';
import {autoPlacement, offset, size} from '@floating-ui/dom';
import type {FloatingUI} from '../../services/floatingUI';
import {createFloatingUI} from '../../services/floatingUI';
import type {HasFocus} from '../../services/focustrack';
import {createHasFocus} from '../../services/focustrack';
import type {NavManagerItemConfig} from '../../services/navManager';
import {createNavManager} from '../../services/navManager';
import type {Directive, PropsConfig, Widget} from '../../types';
import {bindDirective, createAttributesDirective, mergeDirectives} from '../../utils/directive';
import {generateId} from '../../utils/internal/dom';
import {noop} from '../../utils/internal/func';
import {bindableDerived, bindableProp, stateStores, writablesForProps} from '../../utils/stores';
import type {WidgetsCommonPropsAndState} from '../commonProps';

interface SelectCommonPropsAndState<Item> extends WidgetsCommonPropsAndState {
	/**
	 * id used for the input inside the select
	 */
	id: string | undefined;

	/**
	 * aria-label used for the input inside the select
	 *
	 * @defaultValue `'Select'`
	 */
	ariaLabel: string | undefined;

	/**
	 * List of selected item ids
	 *
	 * @defaultValue `[]`
	 */
	selected: Item[];

	/**
	 * Filtered text to be display in the filter input
	 *
	 * @defaultValue `''`
	 */
	filterText: string;

	/**
	 * true if the select is disabled
	 *
	 * @defaultValue `false`
	 */
	disabled: boolean;

	/**
	 * true if the select is open
	 *
	 * @defaultValue `false`
	 */
	open: boolean;

	/**
	 * Class to be added on the dropdown menu container
	 *
	 * @defaultValue `''`
	 */
	menuClassName: string;

	/**
	 * Class to be added on menu items
	 *
	 * @defaultValue `''`
	 */
	menuItemClassName: string;

	/**
	 * Class to be added on selected items (displayed in the input zone)
	 *
	 * @defaultValue `''`
	 */
	badgeClassName: string;

	/**
	 * true if a loading process is being done
	 *
	 * @defaultValue `false`
	 */
	loading: boolean;
}

/**
 * Props for the Select component.
 */
export interface SelectProps<Item> extends SelectCommonPropsAndState<Item> {
	/**
	 * List of available items for the dropdown
	 *
	 * @defaultValue `[]`
	 */
	items: Item[];

	/**
	 * List of allowed placements for the dropdown.
	 * This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).
	 *
	 * @defaultValue
	 * ```ts
	 * ['bottom-start', 'top-start', 'bottom-end', 'top-end']
	 * ```
	 */
	allowedPlacements: Placement[];

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 *
	 * @defaultValue
	 * ```ts
	 * (item: any) => '' + item
	 * ```
	 */
	itemIdFn(item: Item): string;

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
	navSelector(node: HTMLElement): NodeListOf<HTMLSpanElement | HTMLInputElement>;

	// Event callbacks

	/**
	 * Callback called dropdown open state change
	 * @param isOpen - updated open state
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onOpenChange(isOpen: boolean): void;

	/**
	 * Callback called when the text filter change
	 * @param text - Filtered text
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onFilterTextChange(text: string): void;

	/**
	 * Callback called when the selection change
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onSelectedChange(selected: Item[]): void;
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

/**
 * Represents the state of a Select component.
 */
export interface SelectState<Item> extends SelectCommonPropsAndState<Item> {
	/**
	 * List of item contexts, to be displayed in the menu
	 */
	visibleItems: ItemContext<Item>[];

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

/**
 * Interface representing the API for a Select component.
 */
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

/**
 * Interface representing the directives used in the Select component.
 */
export interface SelectDirectives<Item> {
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

	/**
	 * A directive that applies all the necessary attributes to the container badges
	 */
	badgeAttributesDirective: Directive<ItemContext<Item>>;

	/**
	 * A directive that applies all the necessary attributes to the dropdown menu
	 */
	menuAttributesDirective: Directive;

	/**
	 * A directive that applies all the necessary attributes to the dropdown item
	 */
	itemAttributesDirective: Directive<ItemContext<Item>>;

	/**
	 * A directive to be applied to the input
	 */
	inputDirective: Directive;
	/**
	 * A directive to be applied to a button that closes a badge
	 */
	badgeCloseButtonDirective: Directive<ItemContext<Item>>;
}

/**
 * Represents a Select widget component.
 */
export type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectDirectives<Item>>;

const defaultConfig: SelectProps<any> = {
	id: undefined,
	ariaLabel: 'Select',
	open: false,
	disabled: false,
	items: [],
	filterText: '',
	loading: false,
	selected: [],
	navSelector: (node: HTMLElement) => node.querySelectorAll('.au-select-badge,input'),
	itemIdFn: (item: any) => '' + item,
	onOpenChange: noop,
	onFilterTextChange: noop,
	onSelectedChange: noop,
	allowedPlacements: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
	className: '',
	menuClassName: '',
	menuItemClassName: '',
	badgeClassName: '',
};

/**
 * Returns a shallow copy of the default select config.
 * @returns a copy of the default config
 */
export function getSelectDefaultConfig(): SelectProps<any> {
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
			id$: _dirtyId$,
			open$: _dirtyOpen$,
			filterText$: _dirtyFilterText$,
			items$,
			itemIdFn$,
			onOpenChange$,
			onFilterTextChange$,
			onSelectedChange$,
			allowedPlacements$,
			navSelector$,
			className$,
			badgeClassName$,
			ariaLabel$,
			menuClassName$,
			...stateProps
		},
		patch,
	] = writablesForProps<SelectProps<Item>>(defaultConfig, config);
	const {selected$} = stateProps;

	const id$ = computed(() => _dirtyId$() ?? generateId());
	const filterText$ = bindableProp(_dirtyFilterText$, onFilterTextChange$);

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

	const onRemoveBadge = (event: MouseEvent | KeyboardEvent, item: Item) => {
		const referenceElement = event.target;
		refreshElements();
		widget.api.unselect(item);
		// Waiting for refresh by the framework, to have the elements inside or outside the dom
		if (referenceElement instanceof HTMLElement) {
			setTimeout(() => {
				if (!focusLeft({event, referenceElement})) {
					focusRight({event, referenceElement});
				}
			});
		}
		event.preventDefault();
	};

	const inputContainerAttributesDirective = createAttributesDirective(() => ({
		attributes: {
			role: 'combobox',
			'aria-haspopup': 'listbox',
			'aria-expanded': computed(() => `${open$()}`),
			'aria-controls': computed(() => `${id$()}-menu`),
		},
	}));

	const badgeAttributesDirective = createAttributesDirective((itemContext$: ReadableSignal<ItemContext<Item>>) => ({
		attributes: {
			tabindex: -1,
			class: badgeClassName$,
		},
		classNames: {
			'au-select-badge': true,
		},
		events: {
			keydown: (event: KeyboardEvent) => {
				let keyManaged = false;
				switch (event.key) {
					case 'Backspace':
					case 'Delete': {
						onRemoveBadge(event, itemContext$().item);
						keyManaged = true;
						break;
					}
				}
				if (keyManaged) {
					event.preventDefault();
				}
			},
		},
	}));

	const menuAttributesDirective = createAttributesDirective(() => ({
		attributes: {
			role: 'listbox',
			id: computed(() => `${id$()}-menu`),
			'data-popper-placement': placement$,
			class: menuClassName$,
		},
		events: {
			mousedown: (e: MouseEvent) => e.preventDefault(),
		},
	}));

	const itemAttributesDirective = createAttributesDirective((itemContext$: ReadableSignal<ItemContext<Item>>) => ({
		attributes: {
			role: 'option',
			'aria-selected': computed(() => `${itemContext$().selected}`),
			style: 'cursor: pointer',
		},
		classNames: {
			'au-select-item': true,
			selected: computed(() => itemContext$().selected),
		},
		events: {
			click: () => widget.api.toggleItem(itemContext$().item),
		},
	}));

	const inputDirective = createAttributesDirective(() => ({
		attributes: {
			id: id$(),
			type: 'text',
			'aria-label': ariaLabel$(),
			'aria-autocomplete': 'list',
			autocorrect: 'off',
			autocapitalize: 'none',
			autocomplete: 'off',
		},
		classNames: {
			'au-select-input': true,
		},
		events: {
			input: (event: Event) => {
				const value = (event.target as HTMLInputElement).value;
				batch(() => {
					open$.set(value != null && value !== '');
					filterText$.set(value);
				});
			},
			keydown: ({ctrlKey, key, preventDefault}) => {
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
						open$.set(false);
						break;
					default:
						keyManaged = false;
				}
				if (keyManaged) {
					preventDefault();
				}
			},
		},
	}));

	const badgeCloseButtonDirective = createAttributesDirective((itemContext$: ReadableSignal<ItemContext<Item>>) => ({
		events: {
			click: (event: MouseEvent) => {
				onRemoveBadge(event, itemContext$().item);
			},
		},
	}));

	const widget: SelectWidget<Item> = {
		...stateStores({
			id$,
			visibleItems$,
			highlighted$,
			open$,
			selectedContexts$,
			filterText$,
			placement$,
			className$,
			badgeClassName$,
			ariaLabel$,
			menuClassName$,

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
				open$.update((value) => (isOpen != null ? isOpen : !value));
			},
		},
		directives: {
			hasFocusDirective,
			floatingDirective,
			referenceDirective,
			inputContainerDirective: mergeDirectives(bindDirective(navDirective, navManagerConfig$), inputContainerAttributesDirective),
			badgeAttributesDirective,
			menuAttributesDirective,
			itemAttributesDirective,
			inputDirective,
			badgeCloseButtonDirective,
		},
	};

	return widget;
}
