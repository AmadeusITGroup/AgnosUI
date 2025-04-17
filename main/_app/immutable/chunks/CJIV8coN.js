const t=`import { FACTORY_WIDGET_NAME } from "../types.js";
function createWidgetFactory(widgetName, factory) {
  factory[FACTORY_WIDGET_NAME] = widgetName;
  return factory;
}
export {
  createWidgetFactory
};
`;export{t as default};
