const t=`import { widgetsConfigFactory } from "@agnos-ui/react-headless/config";
export * from "@agnos-ui/react-headless/config";
const widgetFactories = widgetsConfigFactory();
const { WidgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig } = widgetFactories;
export {
  WidgetsConfigContext,
  WidgetsDefaultConfig,
  useWidgetContext,
  useWidgetWithConfig
};
`;export{t as default};
