import {createWidgetsConfig} from '@agnos-ui/core/config';
import type {WidgetsConfig, Partial2Levels, WidgetsConfigStore} from '@agnos-ui/core/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed} from '@amadeus-it-group/tansu';
import {getContext, setContext} from 'svelte';
import {callWidgetFactoryWithConfig} from './utils/widget';
import type {SlotsPresent, Widget, WidgetProps, WidgetFactory} from './types';

export * from '@agnos-ui/core/config';

type WidgetFactoryInput<Config extends {[widgetName: string]: object}, W extends Widget> = {
	factory: WidgetFactory<W>;
	widgetName?: null | keyof Config;
	$$slots?: SlotsPresent<WidgetProps<W>>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>>;
	$$props: Partial<WidgetProps<W>>;
};
type AdaptParentConfig<Config> = (config: Partial2Levels<Config>) => Partial2Levels<Config>;
type CreateWidgetsDefaultConfig<Config extends {[widgetName: string]: object}> = (
	adaptParentConfig?: AdaptParentConfig<Config>,
) => WidgetsConfigStore<Config>;

/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @param widgetsDefaultConfigKey - the widgets config key
 * @returns the utilities to create / manage widgets and contexts
 */
export const widgetsConfigFactory = <Config extends {[widgetName: string]: object} = WidgetsConfig>(
	widgetsDefaultConfigKey = Symbol('widgetsConfig'),
) => {
	/**
	 * Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration
	 * store already defined at an upper level in the Svelte context hierarchy.
	 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
	 *
	 * @remarks
	 * The configuration is computed from the parent configuration in two steps:
	 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
	 * If adaptParentConfig is not specified, this step is skipped.
	 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
	 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.
	 *
	 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
	 * defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets
	 * default configuration to be used.
	 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
	 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
	 *
	 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:
	 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
	 * The resulting store is writable, its set function is actually the set function of the own$ store.
	 *
	 * @example
	 * ```ts
	 * const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {
	 *   // first step configuration: transforms the parent configuration
	 *   parentConfig.rating = parentConfig.rating ?? {};
	 *   parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
	 *   return parentConfig;
	 * });
	 * widgetsConfig.set({
	 *   // second step configuration: overrides the parent configuration
	 *   rating: {
	 *     slotStar: MyCustomSlotStar
	 *   }
	 * });
	 * ```
	 */
	const createWidgetsDefaultConfig: CreateWidgetsDefaultConfig<Config> = (
		adaptParentConfig?: AdaptParentConfig<Config>,
	): WidgetsConfigStore<Config> => {
		const parent$ = getContext<WidgetsConfigStore<Config>>(widgetsDefaultConfigKey);
		const child$ = createWidgetsConfig(parent$, adaptParentConfig);
		setContext(widgetsDefaultConfigKey, child$);
		return child$;
	};

	const getContextWidgetConfig = <N extends keyof Config>(widgetName: N): ReadableSignal<Partial<Config[N]> | undefined> => {
		const widgetsConfig = getContext<WidgetsConfigStore<Config>>(widgetsDefaultConfigKey);
		return computed(() => widgetsConfig?.()[widgetName]);
	};

	const callWidgetFactory = <W extends Widget>({
		factory,
		widgetName = null,
		$$slots,
		defaultConfig = {},
		events,
		$$props,
	}: WidgetFactoryInput<Config, W>) =>
		callWidgetFactoryWithConfig<W>({
			factory,
			$$slots,
			defaultConfig,
			widgetConfig: widgetName ? (getContextWidgetConfig(widgetName) as any) : null,
			events,
			$$props,
		});

	return {
		/**
		 * Key used in the Svelte context to get or set the widgets default configuration store.
		 */
		widgetsDefaultConfigKey,
		createWidgetsDefaultConfig,
		getContextWidgetConfig,
		callWidgetFactory,
	};
};

export const {widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory} = widgetsConfigFactory();
