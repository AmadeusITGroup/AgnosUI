const t=`import { widgetsConfigFactory } from "@agnos-ui/react-headless/config";
export * from "@agnos-ui/react-headless/config";
const widgetFactories = widgetsConfigFactory();
const WidgetsConfigContext = widgetFactories.WidgetsConfigContext;
const WidgetsDefaultConfig = widgetFactories.WidgetsDefaultConfig;
const useWidgetContext = widgetFactories.useWidgetContext;
const useWidget = widgetFactories.useWidget;
export {
  WidgetsConfigContext,
  WidgetsDefaultConfig,
  useWidget,
  useWidgetContext
};
`;export{t as default};
