const t=`import { jsx } from "react/jsx-runtime";
import { createWidgetsConfig } from "@agnos-ui/core/config";
export * from "@agnos-ui/core/config";
import { computed } from "@amadeus-it-group/tansu";
import { createContext, useContext, useMemo, useEffect } from "react";
import { u as useWidget } from "./widget-DAs9_HQ1.js";
import { a as usePropsAsStore } from "./stores-B8YEDwZq.js";
const widgetsConfigFactory = (widgetsConfigContext2 = createContext(void 0)) => {
  const useWidgetContext2 = (widgetName, defaultConfig) => {
    const widgetsConfig = useContext(widgetsConfigContext2);
    const defaultConfig$ = usePropsAsStore(defaultConfig);
    return useMemo(() => computed(() => ({ ...defaultConfig$(), ...widgetName ? widgetsConfig == null ? void 0 : widgetsConfig()[widgetName] : void 0 })), [widgetsConfig]);
  };
  const useWidgetWithConfig2 = (factory, props, widgetName, defaultProps) => useWidget(factory, props, { config: useWidgetContext2(widgetName, defaultProps) });
  const WidgetsDefaultConfig2 = ({ children, adaptParentConfig, ...props }) => {
    const config$ = useContext(widgetsConfigContext2);
    let storeRecreated = false;
    const store$ = useMemo(() => {
      const store = createWidgetsConfig(config$, adaptParentConfig);
      store.set(props);
      storeRecreated = true;
      return store;
    }, [config$, adaptParentConfig]);
    useEffect(() => {
      if (!storeRecreated) {
        store$.set(props);
      }
    }, [props]);
    return /* @__PURE__ */ jsx(widgetsConfigContext2.Provider, { value: store$, children });
  };
  return {
    /**
     * React context which can be used to provide or consume the widgets default configuration store.
     */
    widgetsConfigContext: widgetsConfigContext2,
    useWidgetContext: useWidgetContext2,
    useWidgetWithConfig: useWidgetWithConfig2,
    WidgetsDefaultConfig: WidgetsDefaultConfig2
  };
};
const { widgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig } = widgetsConfigFactory();
export {
  WidgetsDefaultConfig,
  useWidgetContext,
  useWidgetWithConfig,
  widgetsConfigContext,
  widgetsConfigFactory
};
`;export{t as default};
