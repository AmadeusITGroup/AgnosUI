import type {createProgressbar, WidgetProps} from '@agnos-ui/core';
import type {AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';

export type ProgressbarWidget = AdaptWidgetSlots<ReturnType<typeof createProgressbar>>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarSlots = WidgetPropsSlots<ProgressbarProps>;
