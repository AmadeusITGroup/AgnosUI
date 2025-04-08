import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/react-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/react-headless/config';
import type {Widget, WidgetFactory, WidgetProps, WidgetSlotContext} from '@agnos-ui/react-headless/types';
import type {ReactNode, Context} from 'react';

export * from '@agnos-ui/react-headless/config';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type DefaultConfigInput = Partial2Levels<WidgetsConfig> & {
	adaptParentConfig?: (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
	children?: ReactNode | undefined;
};

const widgetFactories: {
	WidgetsConfigContext: Context<WidgetsConfigStore<WidgetsConfig> | undefined>;
	WidgetsDefaultConfig: ({children, adaptParentConfig, ...props}: DefaultConfigInput) => import('react/jsx-runtime').JSX.Element;
	useWidgetContext: <Props extends object>(
		widgetName?: string,
		defaultConfig?: Partial<Props>,
	) => import('@amadeus-it-group/tansu').ReadableSignal<Partial<Props>>;
	useWidget: <W extends Widget<object, object, object, object>>(
		factory: WidgetFactory<W>,
		props: Partial<WidgetProps<W>> | undefined,
		defaultProps?: Partial<WidgetProps<W>>,
	) => WidgetSlotContext<W>;
} = widgetsConfigFactory<WidgetsConfig>();
/**
 * Destructures and exports the following from `widgetFactories`:
 * - `WidgetsConfigContext`: The context for widget configurations.
 * - `WidgetsDefaultConfig`: The default configuration for widgets.
 * - `useWidgetContext`: A hook to use the widget context.
 * - `useWidget`: A hook to use a widget with a specific configuration.
 */
export const {WidgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidget} = widgetFactories;
