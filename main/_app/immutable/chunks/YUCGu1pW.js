const t=`import { computed, batch } from "@amadeus-it-group/tansu";
import { writablesWithDefault, isStore, stateStores } from "../utils/stores.js";
import { FACTORY_WIDGET_NAME } from "../types.js";
const extendWidgetProps = (factory, extraPropsDefaults, extraPropsConfig, overrideDefaults) => {
  const extendedFactory = (propsConfig) => {
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
  extendedFactory[FACTORY_WIDGET_NAME] = factory[FACTORY_WIDGET_NAME];
  return extendedFactory;
};
export {
  extendWidgetProps
};
`;export{t as default};
