const e=`import { asReadable, batch, computed, writable } from '@amadeus-it-group/tansu';
import { createHasFocus } from './services/focustrack';
import { stateStores, writablesForProps } from './services/stores';
function defaultMatchFn(item, text) {
    return JSON.stringify(item).toLowerCase().includes(text.toLowerCase());
}
function defaultItemId(item) {
    return '' + item;
}
const defaultConfig = {
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
/**
 * Create a SelectWidget with given config props
 * @param config - an optional alert config
 * @returns a SelectWidget
 */
export function createSelect(config) {
    // Props
    const [{ opened$: _dirtyOpened$, items$, itemId$, matchFn$, onFilterTextChange$, ...otherProps }, patch] = writablesForProps(defaultConfig, config);
    const { selected$, filterText$ } = otherProps;
    const { hasFocus$, directive: hasFocusDirective } = createHasFocus();
    const opened$ = computed(() => {
        const _dirtyOpened = _dirtyOpened$();
        const hasFocus = hasFocus$();
        if (!hasFocus && _dirtyOpened) {
            _dirtyOpened$.set(false);
        }
        return _dirtyOpened && hasFocus;
    });
    const highlightedIndex$ = (function () {
        const store = writable(0);
        const newStore = asReadable(store, {
            set(index) {
                const { length } = visible$();
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
            },
            update(fn) {
                newStore.set(fn(store()));
            },
        });
        return newStore;
    })();
    const visible$ = computed(() => {
        const list = [];
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
                        select: function () {
                            widget.api.select(this);
                        }.bind(item),
                        unselect: function () {
                            widget.api.unselect(this);
                        }.bind(item),
                        toggle: function () {
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
    const widget = {
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
            select(item) {
                widget.api.toggleItem(item, true);
            },
            unselect(item) {
                widget.api.toggleItem(item, false);
            },
            toggleItem(item, selected) {
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
                    }
                    else if (!selected && index !== -1) {
                        selectedItems.splice(index, 1);
                    }
                    return selectedItems;
                });
            },
            clearText() {
                // FIXME: not implemented yet!
            },
            highlight(item) {
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
            focus(item) {
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
            toggle(isOpen) {
                _dirtyOpened$.update((value) => (isOpen != null ? isOpen : !value));
            },
        },
        directives: {
            hasFocusDirective,
        },
        actions: {
            onInput({ target }) {
                const value = target.value;
                batch(() => {
                    patch({
                        opened: value != null && value !== '',
                        filterText: value,
                    });
                    onFilterTextChange$()?.(value);
                });
            },
            onInputKeydown(e) {
                const { ctrlKey, key } = e;
                let keyManaged = true;
                switch (key) {
                    case 'ArrowDown': {
                        const isOpen = opened$();
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
`;export{e as default};
