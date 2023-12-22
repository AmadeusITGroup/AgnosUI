const t=`import type { PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/core/types';
export declare function useWidget<W extends Widget>(createWidget: WidgetFactory<W>, props?: Partial<WidgetProps<W>>, propsConfig?: PropsConfig<WidgetProps<W>>): [WidgetState<W>, W];
`;export{t as default};
