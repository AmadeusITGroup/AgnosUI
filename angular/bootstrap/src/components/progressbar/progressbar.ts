import type {WidgetFactory} from '@agnos-ui/angular-headless';
import {
	createProgressbar as coreCreateProgressbar,
	getProgressbarDefaultConfig as coreGetProgressbarDefaultConfig,
} from '@agnos-ui/core-bootstrap/components/progressbar';
import type {ProgressbarProps, ProgressbarWidget} from './progressbar.gen';

export type * from './progressbar.gen';
export const createProgressbar: WidgetFactory<ProgressbarWidget> = coreCreateProgressbar as any;
export const getProgressbarDefaultConfig: () => ProgressbarProps = coreGetProgressbarDefaultConfig as any;
