import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/svelte-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/svelte-headless/config';
import {type Widget, type WidgetFactory, type WidgetProps} from '@agnos-ui/svelte-headless/types';
import type {ReadableSignal} from '@amadeus-it-group/tansu';

export * from '@agnos-ui/svelte-headless/config';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type WidgetFactoryInput<W extends Widget> = {
	factory: WidgetFactory<W>;
	widgetName?: null | keyof WidgetsConfig;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>>;
	props?: Partial<WidgetProps<W>>;
	enablePatchChanged?: true;
};
type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type CreateWidgetsDefaultConfig = (adaptParentConfig?: AdaptParentConfig) => WidgetsConfigStore<WidgetsConfig>;

const configFactories: {
	widgetsDefaultConfigKey: symbol;
	createWidgetsDefaultConfig: CreateWidgetsDefaultConfig;
	getContextWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	callWidgetFactory: ReturnType<typeof widgetsConfigFactory>['callWidgetFactory'];
} = widgetsConfigFactory<WidgetsConfig>(Symbol('bootstrapWidgetsConfig'));

export const {widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig} = configFactories;

export const callWidgetFactory = <W extends Widget>(input: WidgetFactoryInput<W>) => {
	const widget = configFactories.callWidgetFactory(input);
	return {widget, slotContext: {state: widget.state, api: widget.api, actions: widget.actions, directives: widget.directives}};
};
