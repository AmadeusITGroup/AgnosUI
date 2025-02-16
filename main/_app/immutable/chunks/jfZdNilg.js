const t=`import { jsx } from "react/jsx-runtime";
import { createWidgetsConfig } from "@agnos-ui/core/config";
export * from "@agnos-ui/core/config";
import { computed } from "@amadeus-it-group/tansu";
import { createContext, useContext, useMemo } from "react";
import { u as useWidget } from "./widget-6VfcHB3W.js";
import { b as usePropsAsStore } from "./stores-DtfLvXAE.js";
const widgetsConfigFactory = (WidgetsConfigContext2 = createContext(void 0)) => {
  const useWidgetContext2 = (widgetName, defaultConfig) => {
    const widgetsConfig = useContext(WidgetsConfigContext2);
    const defaultConfig$ = usePropsAsStore(defaultConfig);
    return useMemo(
      () => computed(() => ({ ...defaultConfig$(), ...widgetName ? widgetsConfig == null ? void 0 : widgetsConfig()[widgetName] : void 0 })),
      [defaultConfig$, widgetName, widgetsConfig]
    );
  };
  const useWidgetWithConfig2 = (factory, props, widgetName, defaultProps) => useWidget(factory, props, { config: useWidgetContext2(widgetName, defaultProps) });
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
    useWidgetWithConfig: useWidgetWithConfig2,
    WidgetsDefaultConfig: WidgetsDefaultConfig2
  };
};
const { WidgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig } = widgetsConfigFactory();
export {
  WidgetsConfigContext,
  WidgetsDefaultConfig,
  useWidgetContext,
  useWidgetWithConfig,
  widgetsConfigFactory
};
`;export{t as default};
