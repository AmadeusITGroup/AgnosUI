const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const types = require("@agnos-ui/core/types");
const config = require("@agnos-ui/core/config");
const tansu = require("@amadeus-it-group/tansu");
const react = require("react");
const widget = require("./widget-DsFdBJ2v.cjs");
const stores = require("./stores-DPOTvwx1.cjs");
const widgetsConfigFactory = (WidgetsConfigContext2 = react.createContext(void 0)) => {
  const useWidgetContext2 = (widgetName, defaultConfig) => {
    const widgetsConfig = react.useContext(WidgetsConfigContext2);
    const defaultConfig$ = stores.usePropsAsStore(defaultConfig);
    return react.useMemo(
      () => tansu.computed(() => ({ ...defaultConfig$(), ...widgetName ? widgetsConfig?.()[widgetName] : void 0 })),
      [defaultConfig$, widgetName, widgetsConfig]
    );
  };
  const useWidget2 = (factory, props, defaultProps) => widget.useWidgetWithConfig(factory, props, { config: useWidgetContext2(factory[types.FACTORY_WIDGET_NAME], defaultProps) });
  const WidgetsDefaultConfig2 = ({ children, adaptParentConfig, ...props }) => {
    const config$ = react.useContext(WidgetsConfigContext2);
    const store$ = react.useMemo(() => config.createWidgetsConfig(config$, adaptParentConfig), [config$, adaptParentConfig]);
    react.useMemo(() => store$.set(props), [props, store$]);
    return /* @__PURE__ */ jsxRuntime.jsx(WidgetsConfigContext2, { value: store$, children });
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
exports.WidgetsConfigContext = WidgetsConfigContext;
exports.WidgetsDefaultConfig = WidgetsDefaultConfig;
exports.useWidget = useWidget;
exports.useWidgetContext = useWidgetContext;
exports.widgetsConfigFactory = widgetsConfigFactory;
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => config[k]
  });
});
`;export{e as default};
