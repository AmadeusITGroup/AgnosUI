const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_navManager = require("./services/navManager.cjs");
const utils_directive = require("./dom-Cm9_uROp.cjs");
const utils_func = require("./utils/func.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-DcGT98a7.cjs");
const utils_widget = require("./utils/widget.cjs");
function getTreeDefaultConfig() {
  return {
    ...defaultTreeConfig
  };
}
const defaultTreeConfig = {
  className: "",
  nodes: [],
  onExpandToggle: utils_func.noop,
  navSelector: (node) => node.querySelectorAll("button"),
  ariaLabelToggleFn: (label) => \`Toggle \${label}\`
};
const configValidator = {
  className: utils_writables.typeString,
  nodes: utils_writables.typeArray,
  onExpandToggle: utils_writables.typeFunction,
  navSelector: utils_writables.typeFunction,
  ariaLabelToggleFn: utils_writables.typeFunction
};
const createTree = utils_widget.createWidgetFactory("tree", (config) => {
  const [{ nodes$, onExpandToggle$, navSelector$, ariaLabelToggleFn$, ...stateProps }, patch] = utils_stores.writablesForProps(
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
  const _toggleChange$ = tansu.writable({});
  const expandedMap$ = tansu.computed(() => {
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
  } = services_navManager.createNavManager();
  const navManagerConfig$ = tansu.computed(() => ({
    keys: {
      ArrowUp: focusPrevious,
      ArrowDown: focusNext,
      Home: focusFirst,
      End: focusLast
    },
    selector: navSelector$()
  }));
  const traverseTree = (node, level, parent) => {
    const copyNode = {
      ...node,
      ariaLabel: node.ariaLabel ?? node.label,
      level,
      children: [],
      isExpanded: node.children?.length ? node.isExpanded ?? false : void 0
    };
    treeMap.set(copyNode, {
      parent
    });
    if (node.children) {
      copyNode.children = node.children.map((child) => traverseTree(child, level + 1, copyNode));
    }
    return copyNode;
  };
  const normalizedNodes$ = tansu.computed(() => {
    treeMap.clear();
    return nodes$().map((node) => traverseTree(node, 0, void 0));
  });
  const _lastFocusedTreeItem$ = tansu.writable(normalizedNodes$().find((node) => node.isExpanded !== void 0));
  const getTreeItemInfo = (item) => {
    const treeItem = treeMap.get(item);
    if (!treeItem) {
      console.error(\`Node \${item.label} doesn't exist in the map\`);
    }
    return treeItem;
  };
  const treeItemElementDirective = utils_directive.browserDirective(
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
    if (itemToFocus) {
      const mapItemHtml = getTreeItemInfo(itemToFocus)?.htmlElement;
      if (mapItemHtml) {
        const index = elementsInDomOrder$().indexOf(mapItemHtml);
        focusIndex(index, 0);
      }
    }
  };
  const itemToggleAttributesDirective = utils_directive.createAttributesDirective((treeItemContext$) => ({
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
        const { key } = event;
        const { item } = treeItemContext$();
        const isExpanded = item.isExpanded;
        refreshElements();
        switch (key) {
          case "Enter":
          case " ":
            toggleExpanded(item);
            break;
          case "ArrowLeft":
            if (isExpanded) {
              toggleExpanded(item);
            } else {
              focusElementIfExists(getTreeItemInfo(item)?.parent);
            }
            break;
          case "ArrowRight":
            if (!isExpanded) {
              toggleExpanded(item);
            } else {
              focusElementIfExists(item.children?.[0]);
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
      "aria-label": tansu.computed(() => {
        const { item } = treeItemContext$();
        return ariaLabelToggleFn$()(item.ariaLabel);
      }),
      tabindex: tansu.computed(() => {
        const { item } = treeItemContext$();
        return item === _lastFocusedTreeItem$() ? "0" : "-1";
      }),
      type: tansu.readable("button")
    },
    classNames: {
      "au-tree-expand-icon": utils_stores.true$,
      "au-tree-expand-icon-expanded": tansu.computed(() => {
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
    ...utils_stores.stateStores({ normalizedNodes$, expandedMap$, ...stateProps }),
    patch,
    api: {},
    directives: {
      navigationDirective: utils_directive.bindDirective(navDirective, navManagerConfig$),
      itemToggleDirective: utils_directive.mergeDirectives(treeItemElementDirective, itemToggleAttributesDirective),
      itemAttributesDirective: utils_directive.createAttributesDirective((treeItemContext$) => ({
        attributes: {
          role: tansu.readable("treeitem"),
          "aria-selected": tansu.readable("false"),
          // TODO: adapt aria-selected to the actual selected state
          "aria-expanded": tansu.computed(() => {
            const { item } = treeItemContext$();
            _toggleChange$();
            return item.isExpanded?.toString();
          })
        }
      }))
    }
  };
  return widget;
});
exports.createTree = createTree;
exports.getTreeDefaultConfig = getTreeDefaultConfig;
`;export{e as default};
