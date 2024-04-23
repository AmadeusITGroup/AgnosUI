export * from '@agnos-ui/core-bootstrap/components/progressbar';

import type {
	AdaptWidgetSlots,
	WidgetPropsSlots,
	WidgetFactory,
	WidgetProps,
	WidgetState,
	PropType,
	AdaptSlotContentProps,
} from '@agnos-ui/svelte-headless/types';
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core-bootstrap/components/progressbar';
import type {ProgressbarWidget as CoreWidget, ProgressbarContext as CoreContext} from '@agnos-ui/core-bootstrap/components/progressbar';

// widget
export interface ProgressbarWidget extends AdaptWidgetSlots<CoreWidget> {}
export interface ProgressbarProps extends WidgetProps<ProgressbarWidget> {}
export interface ProgressbarState extends WidgetState<ProgressbarWidget> {}
export interface ProgressbarApi extends PropType<ProgressbarWidget, 'api'> {}
// slots
export interface ProgressbarSlots extends WidgetPropsSlots<ProgressbarProps> {}
export interface ProgressbarContext extends AdaptSlotContentProps<CoreContext> {}
// factory
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
