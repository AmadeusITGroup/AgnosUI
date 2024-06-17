const r=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { ProgressbarProps, ProgressbarWidget } from './progressbar.gen';
export type * from './progressbar.gen';
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
export declare const getProgressbarDefaultConfig: () => ProgressbarProps;
export interface ProgressbarSlots extends WidgetPropsSlots<ProgressbarProps> {
}
`;export{r as default};
