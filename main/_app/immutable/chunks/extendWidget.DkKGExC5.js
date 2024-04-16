const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_stores = require("../utils/stores.cjs");
const extendWidgetProps = (factory, extraPropsDefaults, extraPropsConfig, overrideDefaults) => (propsConfig) => {
  const extraPropsWritables = utils_stores.writablesWithDefault(extraPropsDefaults, propsConfig, extraPropsConfig);
  const propsConfigConfig = propsConfig == null ? void 0 : propsConfig.config;
  const config = utils_stores.isStore(propsConfigConfig) ? tansu.computed(() => ({ ...overrideDefaults, ...propsConfigConfig() })) : { ...overrideDefaults, ...propsConfigConfig ?? {} };
  const widget = factory({ props: propsConfig == null ? void 0 : propsConfig.props, config });
  return {
    ...widget,
    ...utils_stores.stateStores({ ...widget.stores, ...extraPropsWritables }),
    patch: (storesValues) => tansu.batch(() => {
      let widgetProps;
      for (const [name, value] of Object.entries(storesValues ?? {})) {
        const extraPropsStore = extraPropsWritables[\`\${name}$\`];
        if (extraPropsStore) {
          extraPropsStore.set(value);
        } else {
          if (!widgetProps) {
            widgetProps = {};
          }
          widgetProps[name] = value;
        }
      }
      if (widgetProps) {
        widget.patch(widgetProps);
      }
    })
  };
};
exports.extendWidgetProps = extendWidgetProps;
`;export{e as default};
