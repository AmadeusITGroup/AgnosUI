const t=`import { widgetsConfigFactory } from "@agnos-ui/react-headless/config";
export * from "@agnos-ui/react-headless/config";
const widgetFactories = widgetsConfigFactory();
const { widgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig } = widgetFactories;
export {
  WidgetsDefaultConfig,
  useWidgetContext,
  useWidgetWithConfig,
  widgetsConfigContext
};
`;export{t as default};
