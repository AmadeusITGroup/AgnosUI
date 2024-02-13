const e=`import { asWritable, batch, computed, writable } from '@amadeus-it-group/tansu';
import { autoPlacement, offset, size } from '@floating-ui/dom';
import { createFloatingUI } from '../../services/floatingUI';
import { createHasFocus } from '../../services/focustrack';
import { createNavManager } from '../../services/navManager';
import { bindDirective } from '../../utils/directive';
import { noop } from '../../utils/internal/func';
import { bindableDerived, bindableProp, stateStores, writablesForProps } from '../../utils/stores';
const defaultItemId = (item) => '' + item;
export const defaultConfig = {
    id: undefined,
    ariaLabel: 'Select',
    open: false,
    disabled: false,
    items: [],
    filterText: '',
    loading: false,
    selected: [],
    navSelector: (node) => node.querySelectorAll('.au-select-badge,input'),
    itemIdFn: defaultItemId,
    onOpenChange: noop,
    onFilterTextChange: noop,
    onSelectedChange: noop,
    allowedPlacements: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
    className: '',
    menuClassName: '',
    menuItemClassName: '',
    badgeClassName: '',
    slotBadgeLabel: ({ itemContext }) => itemContext.item,
    slotItem: ({ itemContext }) => itemContext.item,
};
/**
 * Returns a shallow copy of the default select config.
 * @returns a copy of the default config
 */
export function getSelectDefaultConfig() {
    return { ...defaultConfig };
}
/**
 * Create a SelectWidget with given config props
 * @param config - an optional alert config
 * @returns a SelectWidget
 */
export function createSelect(config) {
    // Props
    const [{ open$: _dirtyOpen$, filterText$: _dirtyFilterText$, items$, itemIdFn$, onOpenChange$, onFilterTextChange$, onSelectedChange$, allowedPlacements$, navSelector$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config);
    const { selected$ } = stateProps;
    const filterText$ = bindableProp(_dirtyFilterText$, onFilterTextChange$);
    const { hasFocus$, directive: hasFocusDirective } = createHasFocus();
    const open$ = bindableDerived(onOpenChange$, [_dirtyOpen$, hasFocus$], ([_dirtyOpen, hasFocus]) => _dirtyOpen && hasFocus);
    const selectedContextsMap$ = computed(() => {
        const selectedItemsContext = new Map();
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
        const store = writable(0);
        return asWritable(store, (index) => {
            const { length } = visibleItems$();
            if (index != undefined) {
                if (!length) {
                    index = undefined;
                }
                else if (index < 0) {
                    index = length - 1;
                }
                else if (index >= length) {
                    index = 0;
                }
            }
            store.set(index);
        });
    })();
    const itemContexts$ = computed(() => {
        const itemContexts = new Map();
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
    const visibleItems$ = computed(() => (open$() ? [...itemContexts$().values()] : []));
    const highlighted$ = computed(() => {
        const visibleItems = visibleItems$();
        const highlightedIndex = highlightedIndex$();
        return visibleItems.length && highlightedIndex != undefined ? visibleItems[highlightedIndex] : undefined;
    });
    const { directives: { floatingDirective, referenceDirective }, stores: { placement$ }, } = createFloatingUI({
        props: {
            computePositionOptions: asWritable(computed(() => ({
                middleware: [
                    offset(5),
                    autoPlacement({
                        allowedPlacements: allowedPlacements$(),
                    }),
                    size(),
                ],
            }))),
        },
    });
    const { directive: navDirective, refreshElements, focusFirst, focusLast, focusLeft, focusRight } = createNavManager();
    const navManagerConfig$ = computed(() => ({
        keys: {
            Home: focusFirst,
            End: focusLast,
            ArrowLeft: focusLeft,
            ArrowRight: focusRight,
        },
        selector: navSelector$(),
    }));
    const onRemoveBadge = (event, item) => {
        const referenceElement = event.target;
        refreshElements();
        widget.api.unselect(item);
        // Waiting for refresh by the framework, to have the elements inside or outside the dom
        if (referenceElement instanceof HTMLElement) {
            setTimeout(() => {
                focusLeft({ event, referenceElement }) || focusRight({ event, referenceElement });
            });
        }
        event.preventDefault();
    };
    const widget = {
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
            select(item) {
                widget.api.toggleItem(item, true);
            },
            unselect(item) {
                widget.api.toggleItem(item, false);
            },
            toggleItem(item, selected) {
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
                    }
                    else if (!selected && isInSelected) {
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
            highlight(item) {
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
            toggle(isOpen) {
                open$.update((value) => (isOpen != null ? isOpen : !value));
            },
        },
        directives: {
            hasFocusDirective,
            floatingDirective,
            referenceDirective,
            inputContainerDirective: bindDirective(navDirective, navManagerConfig$),
        },
        actions: {
            onInput({ target }) {
                const value = target.value;
                batch(() => {
                    open$.set(value != null && value !== '');
                    filterText$.set(value);
                });
            },
            onRemoveBadgeClick(event, item) {
                onRemoveBadge(event, item);
            },
            onInputKeydown(e) {
                const { ctrlKey, key } = e;
                let keyManaged = true;
                switch (key) {
                    case 'ArrowDown': {
                        const isOpen = open$();
                        if (isOpen) {
                            if (ctrlKey) {
                                widget.api.highlightLast();
                            }
                            else {
                                widget.api.highlightNext();
                            }
                        }
                        else {
                            widget.api.open();
                            widget.api.highlightFirst();
                        }
                        break;
                    }
                    case 'ArrowUp':
                        if (ctrlKey) {
                            widget.api.highlightFirst();
                        }
                        else {
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
                    e.preventDefault();
                }
            },
            onBadgeKeydown(event, item) {
                let keyManaged = false;
                switch (event.key) {
                    case 'Backspace':
                    case 'Delete': {
                        onRemoveBadge(event, item);
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
`;export{e as default};
