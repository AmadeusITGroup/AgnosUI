const r=`import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState } from '../../types';
export * from '@agnos-ui/core/components/progressbar';
export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarSlots = WidgetPropsSlots<ProgressbarProps>;
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
`;export{r as default};
