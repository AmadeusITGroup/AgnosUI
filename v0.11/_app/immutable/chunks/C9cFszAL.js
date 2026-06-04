const t=`import { jsx } from "react/jsx-runtime";
import { FACTORY_WIDGET_NAME } from "@agnos-ui/core/types";
import { createWidgetsConfig } from "@agnos-ui/core/config";
export * from "@agnos-ui/core/config";
import { computed } from "@amadeus-it-group/tansu";
import { createContext, useContext, useMemo } from "react";
import { u as useWidgetWithConfig } from "./widget-C4bqOi7x.js";
import { b as usePropsAsStore } from "./stores-C6L5Y6c8.js";
const widgetsConfigFactory = (WidgetsConfigContext2 = createContext(void 0)) => {
  const useWidgetContext2 = (widgetName, defaultConfig) => {
    const widgetsConfig = useContext(WidgetsConfigContext2);
    const defaultConfig$ = usePropsAsStore(defaultConfig);
    return useMemo(
      () => computed(() => ({ ...defaultConfig$(), ...widgetName ? widgetsConfig?.()[widgetName] : void 0 })),
      [defaultConfig$, widgetName, widgetsConfig]
    );
  };
  const useWidget2 = (factory, props, defaultProps) => useWidgetWithConfig(factory, props, { config: useWidgetContext2(factory[FACTORY_WIDGET_NAME], defaultProps) });
  const WidgetsDefaultConfig2 = ({ children, adaptParentConfig, ...props }) => {
    const config$ = useContext(WidgetsConfigContext2);
    const store$ = useMemo(() => createWidgetsConfig(config$, adaptParentConfig), [config$, adaptParentConfig]);
    useMemo(() => store$.set(props), [props, store$]);
    return /* @__PURE__ */ jsx(WidgetsConfigContext2, { value: store$, children });
  };
  return {
    /**
     * React context which can be used to provide or consume the widgets default configuration store.
     */
    WidgetsConfigContext: WidgetsConfigContext2,
    useWidgetContext: useWidgetContext2,
    useWidget: useWidget2,
    WidgetsDefaultConfig: WidgetsDefaultConfig2
  };
};
const { WidgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidget } = widgetsConfigFactory();
export {
  WidgetsConfigContext,
  WidgetsDefaultConfig,
  useWidget,
  useWidgetContext,
  widgetsConfigFactory
};
`;export{t as default};
