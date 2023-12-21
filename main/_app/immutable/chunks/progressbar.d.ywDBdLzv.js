const r=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory } from '../../types';
export * from '@agnos-ui/core/components/progressbar';
export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core/components/progressbar').ProgressbarContext>;
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
`;export{r as default};
