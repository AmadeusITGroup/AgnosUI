import type {AdaptWidgetSlots, WidgetProps, WidgetState, AdaptSlotContentProps, WidgetFactory} from '@agnos-ui/angular-headless';
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/core-bootstrap/components/progressbar';

export * from '@agnos-ui/core-bootstrap/components/progressbar';

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/progressbar').ProgressbarContext>;
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
