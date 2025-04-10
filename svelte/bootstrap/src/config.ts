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

/**
 * Key used in the Svelte context to get or set the widgets default configuration store.
 */
export const widgetsDefaultConfigKey = configFactories.widgetsDefaultConfigKey;

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
export const createWidgetsDefaultConfig = configFactories.createWidgetsDefaultConfig;

/**
 * Retrieves a widgets configuration store from the Svelte context hierarchy.
 *
 * @param widgetName - the name of the widget
 * @returns the widgets configuration store
 */
export const getContextWidgetConfig = configFactories.getContextWidgetConfig;

/**
 * Creates and initializes a widget using the provided factory and configuration options.
 *
 * @param factory - the widget factory
 * @param options  - the optional options
 * @param options.defaultConfig - the default configuration for the widget
 * @param options.events - the events to be passed to the widget
 * @param options.props - the props to be passed to the widget
 * @returns the state, api and directives to track and interact with the widget
 */
export const callWidgetFactory = configFactories.callWidgetFactory;
