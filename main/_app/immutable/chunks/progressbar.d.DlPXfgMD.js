const r=`import type { WidgetFactory } from '@agnos-ui/angular-headless';
import type { ProgressbarProps, ProgressbarWidget } from './progressbar.gen';
export type * from './progressbar.gen';
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
export declare const getProgressbarDefaultConfig: () => ProgressbarProps;
`;export{r as default};
