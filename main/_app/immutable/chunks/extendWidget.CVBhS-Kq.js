const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_stores = require("../utils/stores.cjs");
const extendWidgetProps = (factory, extraPropsDefaults, extraPropsConfig) => (propsConfig) => {
  const extraPropsWritables = utils_stores.writablesWithDefault(extraPropsDefaults, propsConfig, extraPropsConfig);
  const widget = factory(propsConfig);
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
`;export{t as default};
