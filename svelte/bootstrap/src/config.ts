import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/svelte-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/svelte-headless/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';

export * from '@agnos-ui/svelte-headless/config';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type CreateWidgetsDefaultConfig = (adaptParentConfig?: AdaptParentConfig) => WidgetsConfigStore<WidgetsConfig>;

const configFactories: {
	widgetsDefaultConfigKey: symbol;
	createWidgetsDefaultConfig: CreateWidgetsDefaultConfig;
	getContextWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	callWidgetFactory: ReturnType<typeof widgetsConfigFactory>['callWidgetFactory'];
} = widgetsConfigFactory<WidgetsConfig>(Symbol('bootstrapWidgetsConfig'));

export const {widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory} = configFactories;
