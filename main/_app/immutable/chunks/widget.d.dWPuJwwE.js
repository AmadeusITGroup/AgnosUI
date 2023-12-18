const t=`import type { Widget, WidgetProps, WidgetState } from '@agnos-ui/core/types';
export declare function useWidget<Factory extends (...arg: any[]) => Widget>(createWidget: Factory, props?: Partial<WidgetProps<ReturnType<Factory>>>, ...initProps: Parameters<Factory>): [WidgetState<ReturnType<Factory>>, ReturnType<Factory>];
`;export{t as default};
