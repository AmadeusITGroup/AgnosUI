import type {WidgetPropsSlots, WidgetFactory} from '@agnos-ui/svelte-headless/types';
import {
	createProgressbar as coreCreateProgressbar,
	getProgressbarDefaultConfig as coreGetProgressbarDefaultConfig,
} from '@agnos-ui/core-bootstrap/components/progressbar';
import type {ProgressbarProps, ProgressbarWidget} from './progressbar.gen';

export type * from './progressbar.gen';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
export const getProgressbarDefaultConfig: () => ProgressbarProps = coreGetProgressbarDefaultConfig as any;

export interface ProgressbarSlots extends WidgetPropsSlots<ProgressbarProps> {}
