const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const dom = require("@floating-ui/dom");
const services_floatingUI = require("./services/floatingUI.cjs");
const services_focustrack = require("./services/focustrack.cjs");
const services_navManager = require("./services/navManager.cjs");
const utils_directive = require("./directive-j-xRk-h3.cjs");
const func = require("./func-Qd3cD9a3.cjs");
const utils_stores = require("./utils/stores.cjs");
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
  onOpenChange: func.noop,
  onFilterTextChange: func.noop,
  onSelectedChange: func.noop,
  allowedPlacements: ["bottom-start", "top-start", "bottom-end", "top-end"],
  className: "",
  menuClassName: "",
  menuItemClassName: "",
  badgeClassName: ""
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
      className$,
      badgeClassName$,
      ariaLabel$,
      menuClassName$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config);
  const { selected$ } = stateProps;
  const id$ = tansu.computed(() => _dirtyId$() ?? utils_directive.generateId());
  const filterText$ = utils_stores.bindableProp(_dirtyFilterText$, onFilterTextChange$);
  const { hasFocus$, directive: hasFocusDirective } = services_focustrack.createHasFocus();
  const open$ = utils_stores.bindableDerived(onOpenChange$, [_dirtyOpen$, hasFocus$], ([_dirtyOpen, hasFocus]) => _dirtyOpen && hasFocus);
  const selectedContextsMap$ = tansu.computed(() => {
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
  const selectedContexts$ = tansu.computed(() => [...selectedContextsMap$().values()]);
  const highlightedIndex$ = function() {
    const store = tansu.writable(0);
    return tansu.asWritable(store, (index) => {
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
  const itemContexts$ = tansu.computed(() => {
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
  const visibleItems$ = tansu.computed(() => open$() ? [...itemContexts$().values()] : []);
  const highlighted$ = tansu.computed(() => {
    const visibleItems = visibleItems$();
    const highlightedIndex = highlightedIndex$();
    return visibleItems.length && highlightedIndex != void 0 ? visibleItems[highlightedIndex] : void 0;
  });
  const {
    directives: { floatingDirective, referenceDirective },
    stores: { placement$ }
  } = services_floatingUI.createFloatingUI({
    props: {
      computePositionOptions: tansu.asWritable(
        tansu.computed(() => ({
          middleware: [
            dom.offset(5),
            dom.autoPlacement({
              allowedPlacements: allowedPlacements$()
            }),
            dom.size()
          ]
        }))
      )
    }
  });
  const { directive: navDirective, refreshElements, focusFirst, focusLast, focusLeft, focusRight } = services_navManager.createNavManager();
  const navManagerConfig$ = tansu.computed(
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
  const inputContainerAttributesDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-expanded": tansu.computed(() => \`\${open$()}\`),
      "aria-controls": tansu.computed(() => \`\${id$()}-menu\`)
    }
  }));
  const badgeAttributesDirective = utils_directive.createAttributesDirective((itemContext$) => ({
    attributes: {
      tabindex: -1,
      class: badgeClassName$
    },
    classNames: {
      "au-select-badge": true
    },
    events: {
      keydown: (e) => widget.actions.onBadgeKeydown(e, itemContext$().item)
    }
  }));
  const menuAttributesDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      role: "listbox",
      id: tansu.computed(() => \`\${id$()}-menu\`),
      "data-popper-placement": placement$,
      class: menuClassName$
    },
    events: {
      mousedown: (e) => e.preventDefault()
    }
  }));
  const itemAttributesDirective = utils_directive.createAttributesDirective((itemContext$) => ({
    attributes: {
      role: "option",
      "aria-selected": tansu.computed(() => \`\${itemContext$().selected}\`),
      style: "cursor: pointer"
    },
    classNames: {
      "au-select-item": true,
      selected: tansu.computed(() => itemContext$().selected)
    },
    events: {
      click: () => widget.api.toggleItem(itemContext$().item)
    }
  }));
  const widget = {
    ...utils_stores.stateStores({
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
      inputContainerDirective: utils_directive.mergeDirectives(utils_directive.bindDirective(navDirective, navManagerConfig$), inputContainerAttributesDirective),
      badgeAttributesDirective,
      menuAttributesDirective,
      itemAttributesDirective
    },
    actions: {
      onInput({ target }) {
        const value = target.value;
        tansu.batch(() => {
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
exports.createSelect = createSelect;
exports.getSelectDefaultConfig = getSelectDefaultConfig;
`;export{e as default};
