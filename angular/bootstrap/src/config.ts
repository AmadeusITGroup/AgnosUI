import type {AngularWidget, Partial2Levels, Widget, WidgetFactory, WidgetProps, WidgetsConfigStore} from '@agnos-ui/angular-headless';
import {widgetsConfigFactory} from '@agnos-ui/angular-headless';
import type {BootstrapWidgetsConfig} from '@agnos-ui/core-bootstrap/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {FactoryProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type InjectWidgetsConfig = (config?: Partial2Levels<WidgetsConfig>) => WidgetsConfigStore<WidgetsConfig>;

const widgetFactories: {
	widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>;
	provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig) => FactoryProvider;
	injectWidgetConfig: <N extends keyof BootstrapWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	injectWidgetsConfig: InjectWidgetsConfig;
	callWidgetFactory: <W extends Widget<object, object, object, object, object>>({
		factory,
		widgetName,
		defaultConfig,
		events,
		afterInit,
	}: {
		factory: WidgetFactory<W>;
		widgetName?: keyof BootstrapWidgetsConfig | null | undefined;
		defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
		events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>>;
		afterInit?: (() => void) | undefined;
	}) => AngularWidget<W>;
} = widgetsConfigFactory<WidgetsConfig>(new InjectionToken<WidgetsConfigStore<WidgetsConfig>>('bootstrapWidgetsConfig'));
export const {widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory} = widgetFactories;
