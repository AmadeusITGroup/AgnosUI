const e=`import { computed, writable, asWritable, batch } from "@amadeus-it-group/tansu";
import { offset, autoPlacement, size } from "@floating-ui/dom";
import { createFloatingUI } from "./services/floatingUI.js";
import { createHasFocus } from "./services/focustrack.js";
import { createNavManager } from "./services/navManager.js";
import { q as generateId, a as bindDirective } from "./directive-CGjTRxRh.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { writablesForProps, bindableProp, bindableDerived, stateStores } from "./utils/stores.js";
const defaultConfig = {
  id: void 0,
  ariaLabel: "Select",
  open: false,
  disabled: false,
  items: [],
  filterText: "",
  loading: false,
  selected: [],
  navSelector: (node) => node.querySelectorAll(".au-select-badge,input"),
  itemIdFn: (item) => "" + item,
  onOpenChange: noop,
  onFilterTextChange: noop,
  onSelectedChange: noop,
  allowedPlacements: ["bottom-start", "top-start", "bottom-end", "top-end"],
  className: "",
  menuClassName: "",
  menuItemClassName: "",
  badgeClassName: "",
  slotBadgeLabel: ({ itemContext }) => itemContext.item,
  slotItem: ({ itemContext }) => itemContext.item
};
function getSelectDefaultConfig() {
  return { ...defaultConfig };
}
function createSelect(config) {
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
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultConfig, config);
  const { selected$ } = stateProps;
  const id$ = computed(() => _dirtyId$() ?? generateId());
  const filterText$ = bindableProp(_dirtyFilterText$, onFilterTextChange$);
  const { hasFocus$, directive: hasFocusDirective } = createHasFocus();
  const open$ = bindableDerived(onOpenChange$, [_dirtyOpen$, hasFocus$], ([_dirtyOpen, hasFocus]) => _dirtyOpen && hasFocus);
  const selectedContextsMap$ = computed(() => {
    const selectedItemsContext = /* @__PURE__ */ new Map();
    const itemIdFn = itemIdFn$();
    for (const item of selected$()) {
      const id = itemIdFn(item);
      selectedItemsContext.set(id, {
        item,
        id: itemIdFn(item),
        selected: true
      });
    }
    return selectedItemsContext;
  });
  const selectedContexts$ = computed(() => [...selectedContextsMap$().values()]);
  const highlightedIndex$ = function() {
    const store = writable(0);
    return asWritable(store, (index) => {
      const { length } = visibleItems$();
      if (index != void 0) {
        if (!length) {
          index = void 0;
        } else if (index < 0) {
          index = length - 1;
        } else if (index >= length) {
          index = 0;
        }
      }
      store.set(index);
    });
  }();
  const itemContexts$ = computed(() => {
    const itemContexts = /* @__PURE__ */ new Map();
    if (open$()) {
      const selectedContextsMap = selectedContextsMap$();
      const itemIdFn = itemIdFn$();
      for (const item of items$()) {
        const id = itemIdFn(item);
        itemContexts.set(id, {
          item,
          id,
          selected: selectedContextsMap.has(id)
        });
      }
    }
    return itemContexts;
  });
  const visibleItems$ = computed(() => open$() ? [...itemContexts$().values()] : []);
  const highlighted$ = computed(() => {
    const visibleItems = visibleItems$();
    const highlightedIndex = highlightedIndex$();
    return visibleItems.length && highlightedIndex != void 0 ? visibleItems[highlightedIndex] : void 0;
  });
  const {
    directives: { floatingDirective, referenceDirective },
    stores: { placement$ }
  } = createFloatingUI({
    props: {
      computePositionOptions: asWritable(
        computed(() => ({
          middleware: [
            offset(5),
            autoPlacement({
              allowedPlacements: allowedPlacements$()
            }),
            size()
          ]
        }))
      )
    }
  });
  const { directive: navDirective, refreshElements, focusFirst, focusLast, focusLeft, focusRight } = createNavManager();
  const navManagerConfig$ = computed(
    () => ({
      keys: {
        Home: focusFirst,
        End: focusLast,
        ArrowLeft: focusLeft,
        ArrowRight: focusRight
      },
      selector: navSelector$()
    })
  );
  const onRemoveBadge = (event, item) => {
    const referenceElement = event.target;
    refreshElements();
    widget.api.unselect(item);
    if (referenceElement instanceof HTMLElement) {
      setTimeout(() => {
        focusLeft({ event, referenceElement }) || focusRight({ event, referenceElement });
      });
    }
    event.preventDefault();
  };
  const widget = {
    ...stateStores({
      id$,
      visibleItems$,
      highlighted$,
      open$,
      selectedContexts$,
      filterText$,
      placement$,
      ...stateProps
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
        if (selected && !itemContexts$().has(itemId) || !selected && !isInSelected) {
          return;
        }
        selected$.update((selectedItems) => {
          var _a;
          selectedItems = [...selectedItems];
          if (selected && !isInSelected) {
            selectedItems.push(item);
          } else if (!selected && isInSelected) {
            const index = selectedItems.findIndex((item2) => itemIdFn(item2) === itemId);
            selectedItems.splice(index, 1);
          }
          (_a = onSelectedChange$()) == null ? void 0 : _a(selectedItems);
          return selectedItems;
        });
      },
      clearText() {
      },
      highlight(item) {
        const index = visibleItems$().findIndex((itemCtx) => itemCtx.item === item);
        highlightedIndex$.set(index === -1 ? void 0 : index);
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
        open$.update((value) => isOpen != null ? isOpen : !value);
      }
    },
    directives: {
      hasFocusDirective,
      floatingDirective,
      referenceDirective,
      inputContainerDirective: bindDirective(navDirective, navManagerConfig$)
    },
    actions: {
      onInput({ target }) {
        const value = target.value;
        batch(() => {
          open$.set(value != null && value !== "");
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
          case "ArrowDown": {
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
          case "ArrowUp":
            if (ctrlKey) {
              widget.api.highlightFirst();
            } else {
              widget.api.highlightPrevious();
            }
            break;
          case "Enter": {
            const itemCtx = highlighted$();
            if (itemCtx) {
              widget.api.toggleItem(itemCtx.item);
            }
            break;
          }
          case "Escape":
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
          case "Backspace":
          case "Delete": {
            onRemoveBadge(event, item);
            keyManaged = true;
            break;
          }
        }
        if (keyManaged) {
          event.preventDefault();
        }
      }
    }
  };
  return widget;
}
export {
  createSelect as c,
  defaultConfig as d,
  getSelectDefaultConfig as g
};
`;export{e as default};
