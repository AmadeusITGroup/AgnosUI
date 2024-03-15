const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const config = require("@agnos-ui/core/config");
const tansu = require("@amadeus-it-group/tansu");
const react = require("react");
const widget = require("./widget-CqgI0B-w.cjs");
const stores = require("./stores-DLkDMqBY.cjs");
const widgetsConfigFactory = (widgetsConfigContext2 = react.createContext(void 0)) => {
  const useWidgetContext2 = (widgetName, defaultConfig) => {
    const widgetsConfig = react.useContext(widgetsConfigContext2);
    const defaultConfig$ = stores.usePropsAsStore(defaultConfig);
    return react.useMemo(() => tansu.computed(() => ({ ...defaultConfig$(), ...widgetName ? widgetsConfig == null ? void 0 : widgetsConfig()[widgetName] : void 0 })), [widgetsConfig]);
  };
  const useWidgetWithConfig2 = (factory, props, widgetName, defaultProps) => widget.useWidget(factory, props, { config: useWidgetContext2(widgetName, defaultProps) });
  const WidgetsDefaultConfig2 = ({ children, adaptParentConfig, ...props }) => {
    const config$ = react.useContext(widgetsConfigContext2);
    let storeRecreated = false;
    const store$ = react.useMemo(() => {
      const store = config.createWidgetsConfig(config$, adaptParentConfig);
      store.set(props);
      storeRecreated = true;
      return store;
    }, [config$, adaptParentConfig]);
    react.useEffect(() => {
      if (!storeRecreated) {
        store$.set(props);
      }
    }, [props]);
    return /* @__PURE__ */ jsxRuntime.jsx(widgetsConfigContext2.Provider, { value: store$, children });
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
exports.WidgetsDefaultConfig = WidgetsDefaultConfig;
exports.useWidgetContext = useWidgetContext;
exports.useWidgetWithConfig = useWidgetWithConfig;
exports.widgetsConfigContext = widgetsConfigContext;
exports.widgetsConfigFactory = widgetsConfigFactory;
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => config[k]
    });
});
`;export{e as default};
