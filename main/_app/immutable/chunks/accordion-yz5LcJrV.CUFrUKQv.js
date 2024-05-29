const e=`import { writablesForProps, stateStores, mergeConfigStores, normalizeConfigStores } from "./utils/stores.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { writable, computed, asWritable, readable } from "@amadeus-it-group/tansu";
import { n as noop } from "./func-DR0n-ShK.js";
import { c as typeBoolean, f as typeFunction, e as typeString } from "./writables-DoU_XYTX.js";
import { t as generateId, c as bindDirectiveNoArg, k as mergeDirectives, n as createAttributesDirective, r as registrationArray, d as directiveSubscribe } from "./directive-DCYlDznf.js";
function adjustItemsCloseOthers(items, openItems, oldOpen) {
  let keepOpen;
  if (openItems.length == 2) {
    oldOpen = oldOpen ?? openItems[0];
    keepOpen = openItems.find((id) => id !== oldOpen);
  } else if (openItems.length > 2) {
    keepOpen = openItems[0];
  }
  if (keepOpen) {
    items.forEach((item) => {
      if (item.stores.itemId$() !== keepOpen && item.stores.itemVisible$()) {
        item.patch({ itemVisible: false });
      }
    });
  }
  return items;
}
function getItem(items, itemId) {
  return items.find((item) => item.stores.itemId$() === itemId);
}
const defaultAccordionConfig = {
  closeOthers: false,
  onShown: noop,
  onHidden: noop,
  className: "",
  itemId: "",
  itemDestroyOnHide: true,
  itemDisabled: false,
  itemVisible: false,
  itemAnimated: true,
  itemTransition: async () => {
  },
  itemHeadingTag: "",
  onItemShown: noop,
  onItemHidden: noop,
  onItemVisibleChange: noop,
  itemClass: "",
  itemHeaderClass: "",
  itemButtonClass: "",
  itemBodyContainerClass: "",
  itemBodyClass: ""
};
const defaultItemConfig = {
  itemId: defaultAccordionConfig.itemId,
  itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
  itemDisabled: defaultAccordionConfig.itemDisabled,
  itemVisible: defaultAccordionConfig.itemVisible,
  itemAnimated: defaultAccordionConfig.itemAnimated,
  itemTransition: defaultAccordionConfig.itemTransition,
  onItemShown: defaultAccordionConfig.onItemShown,
  onItemHidden: defaultAccordionConfig.onItemHidden,
  onItemVisibleChange: defaultAccordionConfig.onItemVisibleChange,
  itemClass: defaultAccordionConfig.itemClass,
  itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
  itemButtonClass: defaultAccordionConfig.itemButtonClass,
  itemBodyContainerClass: defaultAccordionConfig.itemBodyContainerClass,
  itemBodyClass: defaultAccordionConfig.itemBodyClass,
  itemHeadingTag: defaultAccordionConfig.itemHeadingTag
};
const coreAccordionItemProps = Object.keys(defaultItemConfig);
function getAccordionDefaultConfig() {
  return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
  closeOthers: typeBoolean,
  onShown: typeFunction,
  onHidden: typeFunction,
  itemId: typeString,
  itemDestroyOnHide: typeBoolean,
  itemDisabled: typeBoolean,
  itemVisible: typeBoolean,
  itemAnimated: typeBoolean,
  itemTransition: typeFunction,
  onItemShown: typeFunction,
  onItemHidden: typeFunction,
  onItemVisibleChange: typeFunction,
  itemClass: typeString,
  itemHeaderClass: typeString,
  itemButtonClass: typeString,
  itemBodyContainerClass: typeString,
  itemBodyClass: typeString,
  itemHeadingTag: typeString
};
const configItemValidator = {
  itemId: typeString,
  itemDestroyOnHide: typeBoolean,
  itemDisabled: typeBoolean,
  itemVisible: typeBoolean,
  itemAnimated: typeBoolean,
  itemTransition: typeFunction,
  onItemShown: typeFunction,
  onItemHidden: typeFunction,
  onItemVisibleChange: typeFunction,
  itemClass: typeString,
  itemHeaderClass: typeString,
  itemButtonClass: typeString,
  itemBodyContainerClass: typeString,
  itemBodyClass: typeString,
  itemHeadingTag: typeString
};
function createAccordionItem(config) {
  const [
    {
      itemBodyClass$,
      itemButtonClass$,
      itemBodyContainerClass$,
      itemHeaderClass$,
      itemAnimated$,
      itemTransition$,
      itemDestroyOnHide$,
      onItemShown$,
      onItemHidden$,
      onItemVisibleChange$,
      itemVisible$,
      itemId$: _dirtyItemId$,
      itemDisabled$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultItemConfig, config, configItemValidator);
  const initDone$ = writable(false);
  const _autoItemId$ = computed(() => generateId());
  const itemId$ = computed(() => _dirtyItemId$() || _autoItemId$());
  const itemTransition = createTransition({
    props: {
      transition: itemTransition$,
      visible: itemVisible$,
      onVisibleChange: onItemVisibleChange$,
      animated: itemAnimated$,
      animatedOnInit: false,
      initDone: initDone$,
      onHidden: () => {
        onItemHidden$()();
      },
      onShown: () => {
        onItemShown$()();
      }
    }
  });
  const shouldBeInDOM$ = computed(() => itemDestroyOnHide$() === false || !itemTransition.stores.hidden$());
  const clickAction = () => {
    if (!itemDisabled$()) {
      itemVisible$.update((c) => !c);
    }
  };
  const toggleDirective = createAttributesDirective(() => ({
    attributes: {
      id: computed(() => \`\${itemId$()}-toggle\`),
      "aria-expanded": computed(() => \`\${itemVisible$()}\`),
      "aria-disabled": computed(() => \`\${itemDisabled$()}\`),
      "aria-controls": computed(() => \`\${itemId$()}-body-container\`),
      disabled: itemDisabled$
    },
    classNames: { collapsed: computed(() => !itemVisible$()) },
    events: { click: clickAction }
  }));
  const transitionDirective = bindDirectiveNoArg(itemTransition.directives.directive);
  const bodyContainerAttrsDirective = createAttributesDirective(() => ({
    attributes: {
      id: computed(() => \`\${itemId$()}-body-container\`),
      class: itemBodyContainerClass$(),
      "aria-labelledby": computed(() => \`\${itemId$()}-toggle\`)
    }
  }));
  return {
    ...stateStores({
      itemVisible$,
      itemId$,
      shouldBeInDOM$,
      itemDisabled$,
      itemBodyClass$,
      itemButtonClass$,
      itemBodyContainerClass$,
      itemHeaderClass$,
      ...stateProps
    }),
    patch,
    actions: {
      click: clickAction
    },
    api: {
      initDone: () => {
        initDone$.set(true);
      },
      collapse: () => {
        itemVisible$.set(false);
      },
      expand: () => {
        itemVisible$.set(true);
      },
      toggle: () => {
        itemVisible$.update((c) => !c);
      }
    },
    directives: {
      toggleDirective,
      buttonDirective: mergeDirectives(
        toggleDirective,
        createAttributesDirective(() => ({
          attributes: {
            type: "button",
            class: itemButtonClass$()
          }
        }))
      ),
      headerDirective: createAttributesDirective(() => ({ attributes: { class: itemHeaderClass$() } })),
      bodyDirective: createAttributesDirective(() => ({ attributes: { class: itemBodyClass$() } })),
      transitionDirective,
      bodyContainerAttrsDirective,
      bodyContainerDirective: mergeDirectives(transitionDirective, bodyContainerAttrsDirective),
      accordionItemDirective: noop
    }
  };
}
function factoryCreateAccordion(itemFactory = createAccordionItem, accordionItemProps = coreAccordionItemProps, accordionConfig = defaultAccordionConfig, accordionValidator = configAccordionValidator) {
  return (config) => {
    const [writables, patch] = writablesForProps(accordionConfig, config, accordionValidator);
    const { closeOthers$, onShown$, onHidden$, className$ } = writables;
    const accordionItemConfig = Object.fromEntries(Object.entries(writables).map((entry) => [entry[0].slice(0, -1), entry[1]]));
    const itemsWidget$ = registrationArray();
    const openItems$ = computed(() => {
      const openItems = [];
      itemsWidget$().forEach((item) => {
        if (item.stores.itemVisible$()) {
          openItems.push(item.stores.itemId$());
        }
      });
      return openItems;
    });
    const oldOpenItem$ = writable(openItems$()[0]);
    const checkCloseOthersAction$ = computed(() => {
      if (closeOthers$()) {
        adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
        oldOpenItem$.set(openItems$()[0]);
      }
    });
    const action$ = computed(() => {
      checkCloseOthersAction$();
    });
    return {
      ...stateStores({ itemsWidget$, className$ }),
      patch,
      actions: {},
      api: {
        expand: (id) => {
          var _a;
          (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.expand();
        },
        collapse: (id) => {
          var _a;
          (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.collapse();
        },
        toggle: (id) => {
          var _a;
          (_a = getItem(itemsWidget$(), id)) == null ? void 0 : _a.api.toggle();
        },
        expandAll: () => {
          itemsWidget$().forEach((i) => i.api.expand());
        },
        collapseAll: () => {
          itemsWidget$().forEach((i) => i.api.collapse());
        },
        registerItem: (propsConfig) => {
          const itemProps = accordionItemProps;
          const config2 = mergeConfigStores(itemProps, normalizeConfigStores(itemProps, propsConfig == null ? void 0 : propsConfig.config), accordionItemConfig);
          const [{ onItemHidden$, onItemShown$ }] = writablesForProps(
            {
              onItemHidden: defaultItemConfig.onItemHidden,
              onItemShown: defaultItemConfig.onItemShown
            },
            { config: config2, props: propsConfig == null ? void 0 : propsConfig.props }
          );
          const item = itemFactory({
            config: config2,
            props: {
              ...propsConfig == null ? void 0 : propsConfig.props,
              onItemHidden: asWritable(
                readable(() => {
                  var _a;
                  onHidden$()(item.stores.itemId$());
                  (_a = onItemHidden$()) == null ? void 0 : _a();
                }),
                (val) => {
                  onItemHidden$.set(val);
                }
              ),
              onItemShown: asWritable(
                readable(() => {
                  var _a;
                  onShown$()(item.stores.itemId$());
                  (_a = onItemShown$()) == null ? void 0 : _a();
                }),
                (val) => {
                  onItemShown$.set(val);
                }
              )
            }
          });
          item.directives.accordionItemDirective = mergeDirectives(
            () => ({
              destroy: itemsWidget$.register(item)
            }),
            createAttributesDirective(() => ({
              attributes: { class: item.stores.itemClass$, id: item.stores.itemId$ }
            }))
          );
          return item;
        }
      },
      directives: {
        accordionDirective: mergeDirectives(
          directiveSubscribe(action$),
          createAttributesDirective(() => ({ attributes: { class: className$() }, classNames: { "au-accordion": true } }))
        )
      }
    };
  };
}
const createAccordion = factoryCreateAccordion();
export {
  createAccordion as a,
  createAccordionItem as c,
  factoryCreateAccordion as f,
  getAccordionDefaultConfig as g
};
`;export{e as default};
