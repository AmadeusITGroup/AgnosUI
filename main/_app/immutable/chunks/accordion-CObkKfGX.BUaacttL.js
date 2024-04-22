const e=`"use strict";
const utils_stores = require("./utils/stores.cjs");
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const tansu = require("@amadeus-it-group/tansu");
const func = require("./func-Qd3cD9a3.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const utils_directive = require("./directive-BAWw10P3.cjs");
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
      if (item.state$().itemId !== keepOpen && item.state$().itemVisible) {
        item.patch({ itemVisible: false });
      }
    });
  }
  return items;
}
function getItem(items, itemId) {
  return items.find((item) => item.state$().itemId === itemId);
}
const defaultAccordionConfig = {
  closeOthers: false,
  onShown: func.noop,
  onHidden: func.noop,
  className: "",
  itemId: "",
  itemDestroyOnHide: true,
  itemDisabled: false,
  itemVisible: false,
  itemAnimated: true,
  itemTransition: async () => {
  },
  itemHeadingTag: "",
  onItemShown: func.noop,
  onItemHidden: func.noop,
  onItemVisibleChange: func.noop,
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0,
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
  slotItemStructure: defaultAccordionConfig.slotItemStructure,
  slotItemBody: defaultAccordionConfig.slotItemBody,
  slotItemHeader: defaultAccordionConfig.slotItemHeader,
  itemClass: defaultAccordionConfig.itemClass,
  itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
  itemButtonClass: defaultAccordionConfig.itemButtonClass,
  itemBodyContainerClass: defaultAccordionConfig.itemBodyContainerClass,
  itemBodyClass: defaultAccordionConfig.itemBodyClass,
  itemHeadingTag: defaultAccordionConfig.itemHeadingTag
};
const accordionItemProps = Object.keys(defaultItemConfig);
function getAccordionDefaultConfig() {
  return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
  closeOthers: utils_writables.typeBoolean,
  onShown: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  itemId: utils_writables.typeString,
  itemDestroyOnHide: utils_writables.typeBoolean,
  itemDisabled: utils_writables.typeBoolean,
  itemVisible: utils_writables.typeBoolean,
  itemAnimated: utils_writables.typeBoolean,
  itemTransition: utils_writables.typeFunction,
  onItemShown: utils_writables.typeFunction,
  onItemHidden: utils_writables.typeFunction,
  onItemVisibleChange: utils_writables.typeFunction,
  itemClass: utils_writables.typeString,
  itemHeaderClass: utils_writables.typeString,
  itemButtonClass: utils_writables.typeString,
  itemBodyContainerClass: utils_writables.typeString,
  itemBodyClass: utils_writables.typeString,
  itemHeadingTag: utils_writables.typeString
};
const configItemValidator = {
  itemId: utils_writables.typeString,
  itemDestroyOnHide: utils_writables.typeBoolean,
  itemDisabled: utils_writables.typeBoolean,
  itemVisible: utils_writables.typeBoolean,
  itemAnimated: utils_writables.typeBoolean,
  itemTransition: utils_writables.typeFunction,
  onItemShown: utils_writables.typeFunction,
  onItemHidden: utils_writables.typeFunction,
  onItemVisibleChange: utils_writables.typeFunction,
  itemClass: utils_writables.typeString,
  itemHeaderClass: utils_writables.typeString,
  itemButtonClass: utils_writables.typeString,
  itemBodyContainerClass: utils_writables.typeString,
  itemBodyClass: utils_writables.typeString,
  itemHeadingTag: utils_writables.typeString
};
function createAccordionItem(accordionOnShown, accordionOnHidden, config) {
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
  ] = utils_stores.writablesForProps(defaultItemConfig, config, configItemValidator);
  const initDone$ = tansu.writable(false);
  const _autoItemId$ = tansu.computed(() => utils_directive.generateId());
  const itemId$ = tansu.computed(() => _dirtyItemId$() || _autoItemId$());
  const shouldBeInDOM$ = tansu.computed(() => itemDestroyOnHide$() === false || !itemTransition.state$().hidden);
  const itemTransition = services_transitions_baseTransitions.createTransition({
    props: {
      transition: itemTransition$,
      visible: itemVisible$,
      onVisibleChange: onItemVisibleChange$,
      animated: itemAnimated$,
      animatedOnInit: false,
      initDone: initDone$,
      onHidden: () => {
        accordionOnHidden()(itemId$());
        onItemHidden$()();
      },
      onShown: () => {
        accordionOnShown()(itemId$());
        onItemShown$()();
      }
    }
  });
  const clickAction = () => {
    if (!itemDisabled$()) {
      itemVisible$.update((c) => !c);
    }
  };
  const toggleDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      id: tansu.computed(() => \`\${itemId$()}-toggle\`),
      "aria-expanded": tansu.computed(() => \`\${itemVisible$()}\`),
      "aria-disabled": tansu.computed(() => \`\${itemDisabled$()}\`),
      "aria-controls": tansu.computed(() => \`\${itemId$()}-body-container\`),
      disabled: itemDisabled$
    },
    classNames: { collapsed: tansu.computed(() => !itemVisible$()) },
    events: { click: clickAction }
  }));
  return {
    ...utils_stores.stateStores({
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
      buttonDirective: utils_directive.mergeDirectives(
        toggleDirective,
        utils_directive.createAttributesDirective(() => ({
          attributes: {
            type: "button",
            class: itemButtonClass$()
          }
        }))
      ),
      headerDirective: utils_directive.createAttributesDirective(() => ({ attributes: { class: itemHeaderClass$() } })),
      bodyDirective: utils_directive.createAttributesDirective(() => ({ attributes: { class: itemBodyClass$() } })),
      bodyContainerDirective: utils_directive.mergeDirectives(
        utils_directive.bindDirectiveNoArg(itemTransition.directives.directive),
        utils_directive.createAttributesDirective(() => ({
          attributes: {
            id: tansu.computed(() => \`\${itemId$()}-body-container\`),
            class: itemBodyContainerClass$(),
            "aria-labelledby": tansu.computed(() => \`\${itemId$()}-toggle\`)
          }
        }))
      ),
      accordionItemDirective: func.noop
    }
  };
}
function createAccordion(config) {
  const [
    {
      closeOthers$,
      onShown$,
      onHidden$,
      className$,
      itemId$,
      itemAnimated$,
      itemClass$,
      itemDisabled$,
      itemVisible$,
      itemTransition$,
      itemDestroyOnHide$,
      itemBodyClass$,
      itemButtonClass$,
      itemBodyContainerClass$,
      itemHeaderClass$,
      itemHeadingTag$,
      onItemVisibleChange$,
      onItemHidden$,
      onItemShown$,
      slotItemStructure$,
      slotItemBody$,
      slotItemHeader$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
  const accordionItemConfig = {
    itemId: itemId$,
    itemClass: itemClass$,
    itemAnimated: itemAnimated$,
    itemDisabled: itemDisabled$,
    itemVisible: itemVisible$,
    itemTransition: itemTransition$,
    itemDestroyOnHide: itemDestroyOnHide$,
    itemBodyClass: itemBodyClass$,
    itemButtonClass: itemButtonClass$,
    itemBodyContainerClass: itemBodyContainerClass$,
    itemHeaderClass: itemHeaderClass$,
    itemHeadingTag: itemHeadingTag$,
    onItemVisibleChange: onItemVisibleChange$,
    onItemHidden: onItemHidden$,
    onItemShown: onItemShown$,
    slotItemStructure: slotItemStructure$,
    slotItemBody: slotItemBody$,
    slotItemHeader: slotItemHeader$
  };
  const itemsWidget$ = utils_directive.registrationArray();
  const openItems$ = tansu.computed(() => {
    const openItems = [];
    itemsWidget$().forEach((item) => {
      if (item.state$().itemVisible) {
        openItems.push(item.state$().itemId);
      }
    });
    return openItems;
  });
  const oldOpenItem$ = tansu.writable(openItems$()[0]);
  const checkCloseOthersAction$ = tansu.computed(() => {
    if (closeOthers$()) {
      adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
      oldOpenItem$.set(openItems$()[0]);
    }
  });
  const action$ = tansu.computed(() => {
    checkCloseOthersAction$();
  });
  return {
    ...utils_stores.stateStores({ itemsWidget$, className$, ...stateProps }),
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
        const item = createAccordionItem(onShown$, onHidden$, {
          config: utils_stores.mergeConfigStores(accordionItemProps, utils_stores.normalizeConfigStores(accordionItemProps, propsConfig == null ? void 0 : propsConfig.config), accordionItemConfig),
          props: propsConfig == null ? void 0 : propsConfig.props
        });
        item.directives.accordionItemDirective = utils_directive.mergeDirectives(
          () => ({ destroy: itemsWidget$.register(item) }),
          utils_directive.createAttributesDirective(() => ({
            attributes: { class: item.stores.itemClass$, id: item.stores.itemId$ }
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
}
exports.createAccordion = createAccordion;
exports.getAccordionDefaultConfig = getAccordionDefaultConfig;
`;export{e as default};
