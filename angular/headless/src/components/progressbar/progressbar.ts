import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '../../types';
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core/components/progressbar';

export * from '@agnos-ui/core/components/progressbar';

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core/components/progressbar').ProgressbarContext>;
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
