import type {WidgetsConfig} from '@agnos-ui/core/config';
import type {ProgressbarProps} from './components/progressbar';

export type BootstrapWidgetsConfig = Omit<WidgetsConfig, 'progressbar'> & {
	progressbar: ProgressbarProps;
};
