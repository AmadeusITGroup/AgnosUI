const o=`import { widgetsConfigFactory } from '@agnos-ui/svelte-headless/config';
export * from '@agnos-ui/svelte-headless/config';
const configFactories = widgetsConfigFactory(Symbol('bootstrapWidgetsConfig'));
export const { widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory } = configFactories;
`;export{o as default};
