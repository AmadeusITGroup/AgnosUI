const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const types = require("../types.cjs");
function createWidgetFactory(widgetName, factory) {
  factory[types.FACTORY_WIDGET_NAME] = widgetName;
  return factory;
}
exports.createWidgetFactory = createWidgetFactory;
`;export{t as default};
