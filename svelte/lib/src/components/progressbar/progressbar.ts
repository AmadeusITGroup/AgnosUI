export * from '@agnos-ui/style-bootstrap/components/progressbar';

import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/svelte-headless/types';

export type ProgressbarWidget = AdaptWidgetSlots<import('@agnos-ui/style-bootstrap/components/progressbar').ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarSlots = WidgetPropsSlots<ProgressbarProps>;
import {createProgressbar as coreCreateProgressbar} from '@agnos-ui/style-bootstrap/components/progressbar';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
