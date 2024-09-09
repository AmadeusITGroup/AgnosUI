import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/react-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/react-headless/config';
import type {Widget, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import type {BootstrapWidgetsConfig} from '@agnos-ui/core-bootstrap/config';
import type {ReactNode, Context} from 'react';

export * from '@agnos-ui/react-headless/config';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type DefaultConfigInput = Partial2Levels<WidgetsConfig> & {
	adaptParentConfig?: (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
	children?: ReactNode | undefined;
};

const widgetFactories: {
	widgetsConfigContext: Context<WidgetsConfigStore<WidgetsConfig> | undefined>;
	WidgetsDefaultConfig: ({children, adaptParentConfig, ...props}: DefaultConfigInput) => import('react/jsx-runtime').JSX.Element;
	useWidgetContext: <Props extends object>(
		widgetName: keyof BootstrapWidgetsConfig | null,
		defaultConfig?: Partial<Props>,
	) => import('@amadeus-it-group/tansu').ReadableSignal<Partial<Props>>;
	useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(
		factory: WidgetFactory<W>,
		props: Partial<WidgetProps<W>> | undefined,
		widgetName: keyof BootstrapWidgetsConfig | null,
		defaultProps?: Partial<WidgetProps<W>>,
	) => [WidgetState<W>, W];
} = widgetsConfigFactory<WidgetsConfig>();
export const {widgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig} = widgetFactories;
