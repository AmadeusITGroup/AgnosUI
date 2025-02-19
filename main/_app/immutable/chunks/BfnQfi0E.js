const o=`import { computed, batch } from "@amadeus-it-group/tansu";
import { writablesWithDefault, isStore, stateStores } from "../utils/stores.js";
const extendWidgetProps = (factory, extraPropsDefaults, extraPropsConfig, overrideDefaults) => (propsConfig) => {
  const extraPropsWritables = writablesWithDefault(extraPropsDefaults, propsConfig, extraPropsConfig);
  const propsConfigConfig = propsConfig == null ? void 0 : propsConfig.config;
  const config = isStore(propsConfigConfig) ? computed(() => ({ ...overrideDefaults, ...propsConfigConfig() })) : { ...overrideDefaults, ...propsConfigConfig ?? {} };
  const widget = factory({ props: propsConfig == null ? void 0 : propsConfig.props, config });
  return {
    ...widget,
    ...stateStores({ ...widget.stores, ...extraPropsWritables }),
    patch: (storesValues) => batch(() => {
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
export {
  extendWidgetProps
};
`;export{o as default};
