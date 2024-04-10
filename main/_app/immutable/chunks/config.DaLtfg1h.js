const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const config = require("@agnos-ui/react-headless/config");
const widgetFactories = config.widgetsConfigFactory();
const { widgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig } = widgetFactories;
exports.WidgetsDefaultConfig = WidgetsDefaultConfig;
exports.useWidgetContext = useWidgetContext;
exports.useWidgetWithConfig = useWidgetWithConfig;
exports.widgetsConfigContext = widgetsConfigContext;
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => config[k]
    });
});
`;export{e as default};
