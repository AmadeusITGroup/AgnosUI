const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const config = require("@agnos-ui/react-headless/config");
const widgetFactories = config.widgetsConfigFactory();
const WidgetsConfigContext = widgetFactories.WidgetsConfigContext;
const WidgetsDefaultConfig = widgetFactories.WidgetsDefaultConfig;
const useWidgetContext = widgetFactories.useWidgetContext;
const useWidget = widgetFactories.useWidget;
exports.WidgetsConfigContext = WidgetsConfigContext;
exports.WidgetsDefaultConfig = WidgetsDefaultConfig;
exports.useWidget = useWidget;
exports.useWidgetContext = useWidgetContext;
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => config[k]
  });
});
`;export{e as default};
