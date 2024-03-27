import type {WidgetsConfig as CoreWidgetsConfig} from '@agnos-ui/core/config';
import type {ProgressbarProps} from './components/progressbar';

export type WidgetsConfig = Omit<CoreWidgetsConfig, 'progressbar'> & {
	progressbar: ProgressbarProps;
};
