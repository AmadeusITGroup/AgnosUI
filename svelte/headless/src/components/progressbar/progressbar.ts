import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/progressbar';

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarSlots = WidgetPropsSlots<ProgressbarProps>;
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core/components/progressbar';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
