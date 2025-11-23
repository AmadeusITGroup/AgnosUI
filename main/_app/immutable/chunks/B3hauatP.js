const e=`import { writablesForProps, idWithDefault, stateStores, true$, mergeConfigStores, normalizeConfigStores } from "./utils/stores.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { writable, computed, readable, asWritable } from "@amadeus-it-group/tansu";
import { noop } from "./utils/func.js";
import { j as createTypeEnum, e as typeString, g as typeFunction, c as typeBoolean } from "./writables-e0tyaQpe.js";
import { n as mergeDirectives, p as createAttributesDirective, r as registrationArray, d as directiveSubscribe } from "./dom-Bcg9ORcA.js";
import { createWidgetFactory } from "./utils/widget.js";
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
  onItemShown: noop,
  onItemHidden: noop,
  className: "",
  itemDestroyOnHide: true,
  itemAnimated: true,
  itemTransition: noop,
  itemHeadingLevel: 2,
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
  onShown: noop,
  onHidden: noop,
  onVisibleChange: noop,
  className: defaultAccordionConfig.itemClassName,
  headerClassName: defaultAccordionConfig.itemHeaderClassName,
  buttonClassName: defaultAccordionConfig.itemButtonClassName,
  bodyContainerClassName: defaultAccordionConfig.itemBodyContainerClassName,
  bodyClassName: defaultAccordionConfig.itemBodyClassName,
  headingLevel: defaultAccordionConfig.itemHeadingLevel
};
const coreAccordionItemProps = Object.keys(defaultItemConfig);
function getAccordionDefaultConfig() {
  return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
  closeOthers: typeBoolean,
  onItemShown: typeFunction,
  onItemHidden: typeFunction,
  className: typeString,
  itemDestroyOnHide: typeBoolean,
  itemAnimated: typeBoolean,
  itemTransition: typeFunction,
  itemClassName: typeString,
  itemHeaderClassName: typeString,
  itemButtonClassName: typeString,
  itemBodyContainerClassName: typeString,
  itemBodyClassName: typeString,
  itemHeadingLevel: createTypeEnum([1, 2, 3, 4, 5, 6])
};
const configItemValidator = {
  id: typeString,
  destroyOnHide: typeBoolean,
  disabled: typeBoolean,
  visible: typeBoolean,
  animated: typeBoolean,
  transition: typeFunction,
  onShown: typeFunction,
  onHidden: typeFunction,
  onVisibleChange: typeFunction,
  className: typeString,
  headerClassName: typeString,
  buttonClassName: typeString,
  bodyContainerClassName: typeString,
  bodyClassName: typeString,
  headingLevel: createTypeEnum([1, 2, 3, 4, 5, 6])
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
  ] = writablesForProps(defaultItemConfig, config, configItemValidator);
  const initDone$ = writable(false);
  const id$ = idWithDefault(_dirtyId$);
  const transition = createTransition({
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
  const shouldBeInDOM$ = computed(() => !destroyOnHide$() || !transition.stores.hidden$());
  const toggleDirective = createAttributesDirective(() => ({
    attributes: {
      id: computed(() => \`\${id$()}-toggle\`),
      "aria-expanded": computed(() => \`\${visible$()}\`),
      "aria-disabled": computed(() => \`\${disabled$()}\`),
      "aria-controls": computed(() => \`\${id$()}-body-container\`),
      disabled: disabled$
    },
    classNames: { collapsed: computed(() => !visible$()) },
    events: {
      click: () => {
        if (!disabled$()) {
          visible$.update((c) => !c);
        }
      }
    }
  }));
  const transitionDirective = transition.directives.directive;
  const bodyContainerAttrsDirective = createAttributesDirective(() => ({
    attributes: {
      id: computed(() => \`\${id$()}-body-container\`),
      class: bodyContainerClassName$,
      "aria-labelledby": computed(() => \`\${id$()}-toggle\`),
      role: readable("region")
    }
  }));
  return {
    ...stateStores({
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
      buttonDirective: mergeDirectives(
        toggleDirective,
        createAttributesDirective(() => ({
          attributes: {
            type: readable("button"),
            class: buttonClassName$
          }
        }))
      ),
      headerDirective: createAttributesDirective(() => ({ attributes: { class: headerClassName$ } })),
      bodyDirective: createAttributesDirective(() => ({ attributes: { class: bodyClassName$ } })),
      transitionDirective,
      bodyContainerAttrsDirective,
      bodyContainerDirective: mergeDirectives(transitionDirective, bodyContainerAttrsDirective),
      itemDirective: noop
    }
  };
}
function factoryCreateAccordion(itemFactory = createAccordionItem, accordionItemProps = coreAccordionItemProps, accordionConfig = defaultAccordionConfig, accordionValidator = configAccordionValidator) {
  return createWidgetFactory("accordion", (config) => {
    const [writables, patch] = writablesForProps(accordionConfig, config, accordionValidator);
    const { closeOthers$, onItemShown$, onItemHidden$, className$ } = writables;
    const accordionItemConfig = Object.fromEntries(
      Object.entries(writables).filter((entry) => entry[0].startsWith("item")).map((entry) => [entry[0].charAt(4).toLowerCase() + entry[0].slice(5, -1), entry[1]])
    );
    const itemWidgets$ = registrationArray();
    const openItems$ = computed(() => {
      const openItems = [];
      itemWidgets$().forEach((item) => {
        if (item.stores.visible$()) {
          openItems.push(item.stores.id$());
        }
      });
      return openItems;
    });
    const oldOpenItem$ = writable(openItems$()[0]);
    const checkCloseOthersAction$ = computed(() => {
      if (closeOthers$()) {
        adjustItemsCloseOthers(itemWidgets$(), openItems$(), oldOpenItem$());
        oldOpenItem$.set(openItems$()[0]);
      }
    });
    const action$ = computed(() => {
      checkCloseOthersAction$();
    });
    return {
      ...stateStores({ itemWidgets$, className$ }),
      patch,
      api: {
        expand: (id) => {
          getItem(itemWidgets$(), id)?.api.expand();
        },
        collapse: (id) => {
          getItem(itemWidgets$(), id)?.api.collapse();
        },
        toggle: (id) => {
          getItem(itemWidgets$(), id)?.api.toggle();
        },
        expandAll: () => {
          itemWidgets$().forEach((i) => i.api.expand());
        },
        collapseAll: () => {
          itemWidgets$().forEach((i) => i.api.collapse());
        },
        registerItem: (propsConfig) => {
          const itemProps = accordionItemProps;
          const config2 = mergeConfigStores(itemProps, normalizeConfigStores(itemProps, propsConfig?.config), accordionItemConfig);
          const [{ onHidden$, onShown$ }] = writablesForProps(
            {
              onHidden: defaultItemConfig.onHidden,
              onShown: defaultItemConfig.onShown
            },
            { config: config2, props: propsConfig?.props }
          );
          const item = itemFactory({
            config: config2,
            props: {
              ...propsConfig?.props,
              onHidden: asWritable(
                readable(() => {
                  onItemHidden$()(item.stores.id$());
                  onHidden$()?.();
                }),
                (val) => {
                  onItemHidden$.set(val);
                }
              ),
              onShown: asWritable(
                readable(() => {
                  onItemShown$()(item.stores.id$());
                  onShown$()?.();
                }),
                (val) => {
                  onItemShown$.set(val);
                }
              )
            }
          });
          item.directives.itemDirective = mergeDirectives(
            () => ({
              destroy: itemWidgets$.register(item)
            }),
            createAttributesDirective(() => ({
              attributes: { class: item.stores.className$, id: item.stores.id$ }
            }))
          );
          return item;
        }
      },
      directives: {
        accordionDirective: mergeDirectives(
          directiveSubscribe(action$),
          createAttributesDirective(() => ({ attributes: { class: className$ }, classNames: { "au-accordion": true$ } }))
        )
      }
    };
  });
}
const createAccordion = factoryCreateAccordion();
export {
  createAccordion as a,
  createAccordionItem as c,
  factoryCreateAccordion as f,
  getAccordionDefaultConfig as g
};
`;export{e as default};
