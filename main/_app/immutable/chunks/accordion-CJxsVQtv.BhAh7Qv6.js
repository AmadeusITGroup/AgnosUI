const n=`"use strict";
const utils_stores = require("./utils/stores.cjs");
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const tansu = require("@amadeus-it-group/tansu");
const func = require("./func-Qd3cD9a3.cjs");
const utils_writables = require("./writables-BPAJvaL_.cjs");
const utils_directive = require("./directive-BtOvPrmt.cjs");
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
      if (item.stores.id$() !== keepOpen && item.stores.visible$()) {
        item.patch({ visible: false });
      }
    });
  }
  return items;
}
function getItem(items, id) {
  return items.find((item) => item.stores.id$() === id);
}
const defaultAccordionConfig = {
  closeOthers: false,
  onItemShown: func.noop,
  onItemHidden: func.noop,
  className: "",
  itemDestroyOnHide: true,
  itemAnimated: true,
  itemTransition: async () => {
  },
  itemHeadingTag: "",
  itemClassName: "",
  itemHeaderClassName: "",
  itemButtonClassName: "",
  itemBodyContainerClassName: "",
  itemBodyClassName: ""
};
const defaultItemConfig = {
  id: "",
  destroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
  disabled: false,
  visible: false,
  animated: defaultAccordionConfig.itemAnimated,
  transition: defaultAccordionConfig.itemTransition,
  onShown: func.noop,
  onHidden: func.noop,
  onVisibleChange: func.noop,
  className: defaultAccordionConfig.itemClassName,
  headerClassName: defaultAccordionConfig.itemHeaderClassName,
  buttonClassName: defaultAccordionConfig.itemButtonClassName,
  bodyContainerClassName: defaultAccordionConfig.itemBodyContainerClassName,
  bodyClassName: defaultAccordionConfig.itemBodyClassName,
  headingTag: defaultAccordionConfig.itemHeadingTag
};
const coreAccordionItemProps = Object.keys(defaultItemConfig);
function getAccordionDefaultConfig() {
  return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
  closeOthers: utils_writables.typeBoolean,
  onItemShown: utils_writables.typeFunction,
  onItemHidden: utils_writables.typeFunction,
  className: utils_writables.typeString,
  itemDestroyOnHide: utils_writables.typeBoolean,
  itemAnimated: utils_writables.typeBoolean,
  itemTransition: utils_writables.typeFunction,
  itemClassName: utils_writables.typeString,
  itemHeaderClassName: utils_writables.typeString,
  itemButtonClassName: utils_writables.typeString,
  itemBodyContainerClassName: utils_writables.typeString,
  itemBodyClassName: utils_writables.typeString,
  itemHeadingTag: utils_writables.typeString
};
const configItemValidator = {
  id: utils_writables.typeString,
  destroyOnHide: utils_writables.typeBoolean,
  disabled: utils_writables.typeBoolean,
  visible: utils_writables.typeBoolean,
  animated: utils_writables.typeBoolean,
  transition: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  onVisibleChange: utils_writables.typeFunction,
  className: utils_writables.typeString,
  headerClassName: utils_writables.typeString,
  buttonClassName: utils_writables.typeString,
  bodyContainerClassName: utils_writables.typeString,
  bodyClassName: utils_writables.typeString,
  headingTag: utils_writables.typeString
};
function createAccordionItem(config) {
  const [
    {
      bodyClassName$,
      buttonClassName$,
      bodyContainerClassName$,
      headerClassName$,
      animated$,
      transition$,
      destroyOnHide$,
      onShown$,
      onHidden$,
      onVisibleChange$,
      visible$,
      id$: _dirtyId$,
      disabled$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultItemConfig, config, configItemValidator);
  const initDone$ = tansu.writable(false);
  const _autoId$ = tansu.computed(() => utils_directive.generateId());
  const id$ = tansu.computed(() => _dirtyId$() || _autoId$());
  const transition = services_transitions_baseTransitions.createTransition({
    props: {
      transition: transition$,
      visible: visible$,
      onVisibleChange: onVisibleChange$,
      animated: animated$,
      animatedOnInit: false,
      initDone: initDone$,
      onHidden: () => {
        onHidden$()();
      },
      onShown: () => {
        onShown$()();
      }
    }
  });
  const shouldBeInDOM$ = tansu.computed(() => destroyOnHide$() === false || !transition.stores.hidden$());
  const toggleDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      id: tansu.computed(() => \`\${id$()}-toggle\`),
      "aria-expanded": tansu.computed(() => \`\${visible$()}\`),
      "aria-disabled": tansu.computed(() => \`\${disabled$()}\`),
      "aria-controls": tansu.computed(() => \`\${id$()}-body-container\`),
      disabled: disabled$
    },
    classNames: { collapsed: tansu.computed(() => !visible$()) },
    events: {
      click: () => {
        if (!disabled$()) {
          visible$.update((c) => !c);
        }
      }
    }
  }));
  const transitionDirective = transition.directives.directive;
  const bodyContainerAttrsDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      id: tansu.computed(() => \`\${id$()}-body-container\`),
      class: bodyContainerClassName$(),
      "aria-labelledby": tansu.computed(() => \`\${id$()}-toggle\`)
    }
  }));
  return {
    ...utils_stores.stateStores({
      visible$,
      id$,
      shouldBeInDOM$,
      disabled$,
      bodyClassName$,
      buttonClassName$,
      bodyContainerClassName$,
      headerClassName$,
      ...stateProps
    }),
    patch,
    api: {
      initDone: () => {
        initDone$.set(true);
      },
      collapse: () => {
        visible$.set(false);
      },
      expand: () => {
        visible$.set(true);
      },
      toggle: () => {
        visible$.update((c) => !c);
      }
    },
    directives: {
      toggleDirective,
      buttonDirective: utils_directive.mergeDirectives(
        toggleDirective,
        utils_directive.createAttributesDirective(() => ({
          attributes: {
            type: "button",
            class: buttonClassName$()
          }
        }))
      ),
      headerDirective: utils_directive.createAttributesDirective(() => ({ attributes: { class: headerClassName$() } })),
      bodyDirective: utils_directive.createAttributesDirective(() => ({ attributes: { class: bodyClassName$() } })),
      transitionDirective,
      bodyContainerAttrsDirective,
      bodyContainerDirective: utils_directive.mergeDirectives(transitionDirective, bodyContainerAttrsDirective),
      itemDirective: func.noop
    }
  };
}
function factoryCreateAccordion(itemFactory = createAccordionItem, accordionItemProps = coreAccordionItemProps, accordionConfig = defaultAccordionConfig, accordionValidator = configAccordionValidator) {
  return (config) => {
    const [writables, patch] = utils_stores.writablesForProps(accordionConfig, config, accordionValidator);
    const { closeOthers$, onItemShown$, onItemHidden$, className$ } = writables;
    const accordionItemConfig = Object.fromEntries(
      Object.entries(writables).filter((entry) => entry[0].startsWith("item")).map((entry) => [entry[0].charAt(4).toLowerCase() + entry[0].slice(5, -1), entry[1]])
    );
    const itemWidgets$ = utils_directive.registrationArray();
    const openItems$ = tansu.computed(() => {
      const openItems = [];
      itemWidgets$().forEach((item) => {
        if (item.stores.visible$()) {
          openItems.push(item.stores.id$());
        }
      });
      return openItems;
    });
    const oldOpenItem$ = tansu.writable(openItems$()[0]);
    const checkCloseOthersAction$ = tansu.computed(() => {
      if (closeOthers$()) {
        adjustItemsCloseOthers(itemWidgets$(), openItems$(), oldOpenItem$());
        oldOpenItem$.set(openItems$()[0]);
      }
    });
    const action$ = tansu.computed(() => {
      checkCloseOthersAction$();
    });
    return {
      ...utils_stores.stateStores({ itemWidgets$, className$ }),
      patch,
      api: {
        expand: (id) => {
          var _a;
          (_a = getItem(itemWidgets$(), id)) == null ? void 0 : _a.api.expand();
        },
        collapse: (id) => {
          var _a;
          (_a = getItem(itemWidgets$(), id)) == null ? void 0 : _a.api.collapse();
        },
        toggle: (id) => {
          var _a;
          (_a = getItem(itemWidgets$(), id)) == null ? void 0 : _a.api.toggle();
        },
        expandAll: () => {
          itemWidgets$().forEach((i) => i.api.expand());
        },
        collapseAll: () => {
          itemWidgets$().forEach((i) => i.api.collapse());
        },
        registerItem: (propsConfig) => {
          const itemProps = accordionItemProps;
          const config2 = utils_stores.mergeConfigStores(itemProps, utils_stores.normalizeConfigStores(itemProps, propsConfig == null ? void 0 : propsConfig.config), accordionItemConfig);
          const [{ onHidden$, onShown$ }] = utils_stores.writablesForProps(
            {
              onHidden: defaultItemConfig.onHidden,
              onShown: defaultItemConfig.onShown
            },
            { config: config2, props: propsConfig == null ? void 0 : propsConfig.props }
          );
          const item = itemFactory({
            config: config2,
            props: {
              ...propsConfig == null ? void 0 : propsConfig.props,
              onHidden: tansu.asWritable(
                tansu.readable(() => {
                  var _a;
                  onItemHidden$()(item.stores.id$());
                  (_a = onHidden$()) == null ? void 0 : _a();
                }),
                (val) => {
                  onItemHidden$.set(val);
                }
              ),
              onShown: tansu.asWritable(
                tansu.readable(() => {
                  var _a;
                  onItemShown$()(item.stores.id$());
                  (_a = onShown$()) == null ? void 0 : _a();
                }),
                (val) => {
                  onItemShown$.set(val);
                }
              )
            }
          });
          item.directives.itemDirective = utils_directive.mergeDirectives(
            () => ({
              destroy: itemWidgets$.register(item)
            }),
            utils_directive.createAttributesDirective(() => ({
              attributes: { class: item.stores.className$, id: item.stores.id$ }
            }))
          );
          return item;
        }
      },
      directives: {
        accordionDirective: utils_directive.mergeDirectives(
          utils_directive.directiveSubscribe(action$),
          utils_directive.createAttributesDirective(() => ({ attributes: { class: className$() }, classNames: { "au-accordion": true } }))
        )
      }
    };
  };
}
const createAccordion = factoryCreateAccordion();
exports.createAccordion = createAccordion;
exports.createAccordionItem = createAccordionItem;
exports.factoryCreateAccordion = factoryCreateAccordion;
exports.getAccordionDefaultConfig = getAccordionDefaultConfig;
`;export{n as default};
