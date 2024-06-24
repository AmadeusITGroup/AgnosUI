const r=`import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { ProgressbarProps, ProgressbarWidget } from './progressbar.gen';
export type * from './progressbar.gen';
export declare const createProgressbar: WidgetFactory<ProgressbarWidget>;
export declare const getProgressbarDefaultConfig: () => ProgressbarProps;
export declare const Progressbar: (props: Partial<ProgressbarProps>) => import("react/jsx-runtime").JSX.Element;
`;export{r as default};