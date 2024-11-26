const e=`import { writable, computed } from "@amadeus-it-group/tansu";
import { createNavManager } from "./services/navManager.js";
import { a as bindDirective, k as mergeDirectives, n as createAttributesDirective, b as browserDirective } from "./directive-CKEccryv.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { e as typeString, h as typeArray, f as typeFunction } from "./writables-DCiBdIBK.js";
function getTreeDefaultConfig() {
  return {
    ...defaultTreeConfig
  };
}
const defaultTreeConfig = {
  className: "",
  nodes: [],
  onExpandToggle: noop,
  navSelector: (node) => node.querySelectorAll("button"),
  ariaLabelToggleFn: (label) => \`Toggle \${label}\`
};
const configValidator = {
  className: typeString,
  nodes: typeArray,
  onExpandToggle: typeFunction,
  navSelector: typeFunction,
  ariaLabelToggleFn: typeFunction
};
function createTree(config) {
  const [{ nodes$, onExpandToggle$, navSelector$, ariaLabelToggleFn$, ...stateProps }, patch] = writablesForProps(
    defaultTreeConfig,
    config,
    configValidator
  );
  const treeMap = /* @__PURE__ */ new Map();
  const _expandedMap = {
    get(item) {
      return item.isExpanded;
    }
  };
  const _toggleChange$ = writable({});
  const expandedMap$ = computed(() => {
    normalizedNodes$();
    _toggleChange$();
    return _expandedMap;
  });
  const {
    elementsInDomOrder$,
    directive: navDirective,
    refreshElements,
    focusIndex,
    focusPrevious,
    focusNext,
    focusFirst,
    focusLast
  } = createNavManager();
  const navManagerConfig$ = computed(() => ({
    keys: {
      ArrowUp: focusPrevious,
      ArrowDown: focusNext,
      Home: focusFirst,
      End: focusLast
    },
    selector: navSelector$()
  }));
  const traverseTree = (node, level, parent) => {
    var _a;
    const copyNode = {
      ...node,
      ariaLabel: node.ariaLabel ?? node.label,
      level,
      children: [],
      isExpanded: ((_a = node.children) == null ? void 0 : _a.length) ? node.isExpanded ?? false : void 0
    };
    treeMap.set(copyNode, {
      parent
    });
    if (node.children) {
      copyNode.children = node.children.map((child) => traverseTree(child, level + 1, copyNode));
    }
    return copyNode;
  };
  const normalizedNodes$ = computed(() => {
    treeMap.clear();
    return nodes$().map((node) => traverseTree(node, 0, void 0));
  });
  const _lastFocusedTreeItem$ = writable(normalizedNodes$()[0]);
  const getTreeItemInfo = (item) => {
    const treeItem = treeMap.get(item);
    if (!treeItem) {
      console.error(\`Node \${item.label} doesn't exist in the map\`);
    }
    return treeItem;
  };
  const treeItemElementDirective = browserDirective(
    (toggleItem, args) => {
      let treeItemInfo;
      const destroy = () => {
        if (treeItemInfo && treeItemInfo.htmlElement === toggleItem) {
          treeItemInfo.htmlElement = void 0;
        }
        treeItemInfo = void 0;
      };
      const update = (args2) => {
        destroy();
        treeItemInfo = getTreeItemInfo(args2.item);
        if (treeItemInfo) {
          if (treeItemInfo.htmlElement) {
            console.warn(\`The tree item directive should be used once per element\`);
          }
          treeItemInfo.htmlElement = toggleItem;
        }
      };
      update(args);
      return {
        update,
        destroy
      };
    }
  );
  const focusElementIfExists = (itemToFocus) => {
    var _a;
    if (itemToFocus) {
      const mapItemHtml = (_a = getTreeItemInfo(itemToFocus)) == null ? void 0 : _a.htmlElement;
      if (mapItemHtml) {
        const index = elementsInDomOrder$().indexOf(mapItemHtml);
        focusIndex(index, 0);
      }
    }
  };
  const itemToggleAttributesDirective = createAttributesDirective((treeItemContext$) => ({
    events: {
      focus: () => {
        const { item } = treeItemContext$();
        _lastFocusedTreeItem$.set(item);
      },
      click: () => {
        const { item } = treeItemContext$();
        toggleExpanded(item);
      },
      keydown: (event) => {
        var _a, _b;
        const { key } = event;
        const { item } = treeItemContext$();
        const isExpanded = item.isExpanded;
        refreshElements();
        switch (key) {
          case "ArrowLeft":
            if (isExpanded) {
              toggleExpanded(item);
            } else {
              focusElementIfExists((_a = getTreeItemInfo(item)) == null ? void 0 : _a.parent);
            }
            break;
          case "ArrowRight":
            if (!isExpanded) {
              toggleExpanded(item);
            } else {
              focusElementIfExists((_b = item.children) == null ? void 0 : _b[0]);
            }
            break;
          default:
            return;
        }
        event.preventDefault();
        event.stopPropagation();
      }
    },
    attributes: {
      "aria-label": computed(() => {
        const { item } = treeItemContext$();
        return ariaLabelToggleFn$()(item.ariaLabel);
      }),
      tabindex: computed(() => {
        const { item } = treeItemContext$();
        return item === _lastFocusedTreeItem$() ? "0" : "-1";
      }),
      type: "button"
    },
    classNames: {
      "au-tree-expand-icon": true,
      "au-tree-expand-icon-expanded": computed(() => {
        _toggleChange$();
        const { item } = treeItemContext$();
        return item.isExpanded ?? false;
      })
    }
  }));
  const toggleExpanded = (node) => {
    const treeItemInfo = getTreeItemInfo(node);
    if (treeItemInfo === void 0 || node.isExpanded === void 0) {
      return;
    }
    node.isExpanded = !node.isExpanded;
    _toggleChange$.set({});
    onExpandToggle$()(node);
  };
  const widget = {
    ...stateStores({ normalizedNodes$, expandedMap$, ...stateProps }),
    patch,
    api: {},
    directives: {
      navigationDirective: bindDirective(navDirective, navManagerConfig$),
      itemToggleDirective: mergeDirectives(treeItemElementDirective, itemToggleAttributesDirective),
      itemAttributesDirective: createAttributesDirective((treeItemContext$) => ({
        attributes: {
          role: "treeitem",
          "aria-selected": "false",
          // TODO: adapt aria-selected to the actual selected state
          "aria-expanded": computed(() => {
            var _a;
            const { item } = treeItemContext$();
            _toggleChange$();
            return (_a = item.isExpanded) == null ? void 0 : _a.toString();
          })
        }
      }))
    }
  };
  return widget;
}
export {
  createTree as c,
  getTreeDefaultConfig as g
};
`;export{e as default};
