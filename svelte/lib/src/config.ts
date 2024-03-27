import type {Partial2Levels, WidgetsConfigStore} from '@agnos-ui/svelte-headless/config';
import {widgetsConfigFactory} from '@agnos-ui/svelte-headless/config';
import type {AdaptPropsSlots, SlotsPresent, Widget, WidgetFactory, WidgetProps} from '@agnos-ui/svelte-headless/types';
import type {BootstrapWidgetsConfig} from '@agnos-ui/style-bootstrap/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';

export * from '@agnos-ui/svelte-headless/config';

export type WidgetsConfig = {
	[WidgetName in keyof BootstrapWidgetsConfig]: AdaptPropsSlots<BootstrapWidgetsConfig[WidgetName]>;
};

type WidgetFactoryInput<W extends Widget> = {
	factory: WidgetFactory<W>;
	widgetName?: null | keyof WidgetsConfig;
	$$slots: SlotsPresent<WidgetProps<W>>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events: Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>;
	$$props: Partial<WidgetProps<W>>;
};
type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type CreateWidgetsDefaultConfig = (adaptParentConfig?: AdaptParentConfig) => WidgetsConfigStore<WidgetsConfig>;

const configFactories: {
	widgetsDefaultConfigKey: symbol;
	createWidgetsDefaultConfig: CreateWidgetsDefaultConfig;
	getContextWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	callWidgetFactory: <W extends Widget>({
		factory,
		widgetName,
		$$slots,
		defaultConfig,
		events,
		$$props,
	}: WidgetFactoryInput<W>) => W & {
		patchChangedProps: W['patch'];
	};
} = widgetsConfigFactory<WidgetsConfig>(Symbol('bootstrapWidgetsConfig'));

export const {widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory} = configFactories;
