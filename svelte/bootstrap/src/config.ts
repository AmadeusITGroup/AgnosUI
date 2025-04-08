import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/svelte-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/svelte-headless/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';

export * from '@agnos-ui/svelte-headless/config';

import type {WidgetsConfig} from './config.gen';
import type {Widget, WidgetFactory, WidgetProps, WidgetSlotContext} from '@agnos-ui/svelte-headless/types';
export type {WidgetsConfig};

type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type CreateWidgetsDefaultConfig = (adaptParentConfig?: AdaptParentConfig) => WidgetsConfigStore<WidgetsConfig>;

const configFactories: {
	widgetsDefaultConfigKey: symbol;
	createWidgetsDefaultConfig: CreateWidgetsDefaultConfig;
	getContextWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	callWidgetFactory: <W extends Widget>(
		factory: WidgetFactory<W>,
		options?: {
			defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
			events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>>;
			props?: Partial<WidgetProps<W>>;
		},
	) => WidgetSlotContext<W>;
} = widgetsConfigFactory<WidgetsConfig>(Symbol('bootstrapWidgetsConfig'));

export const {widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory} = configFactories;
