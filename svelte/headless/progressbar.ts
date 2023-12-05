import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptWidgetSlots, WidgetPropsSlots} from './slotTypes';

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarSlots = WidgetPropsSlots<ProgressbarProps>;
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core/progressbar';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
