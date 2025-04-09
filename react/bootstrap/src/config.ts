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
 * React context which can be used to provide or consume the widgets default configuration store.
 */
export const WidgetsConfigContext = widgetFactories.WidgetsConfigContext;

/**
 * React component that provides in the React context (for all AgnosUI descendant widgets) a new widgets default configuration
 * store that inherits from any widgets default configuration store already defined at an upper level in the React context hierarchy.
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the properties of the component.
 *
 * @param componentInputs - the react component inputs
 * @param componentInputs.children - the react component children
 * @param componentInputs.adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
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
 * ```tsx
 * <WidgetsDefaultConfig
 *   adaptParentConfig={(parentConfig) => {
 *     parentConfig.rating = parentConfig.rating ?? {};
 *     parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
 *     return parentConfig;
 *   }}
 *   rating={{slotStar: MyCustomSlotStar}}
 * />
 * ```
 */
export const WidgetsDefaultConfig = widgetFactories.WidgetsDefaultConfig;

/**
 * React hook that returns the widgets default configuration store.
 *
 * @param widgetName - the name of the widget to get the configuration for
 * @param defaultConfig - the default configuration of the widget
 * @returns the widgets default configuration store
 */
export const useWidgetContext = widgetFactories.useWidgetContext;

/**
 * Allows to create and attach an agnos-ui/core widget to the current react component.
 *
 * @param factory - the widget factory
 * @param props - the widget props
 * @param defaultProps - the default widget props
 * @returns the state, api and directives to track and interact with the widget
 */
export const useWidget = widgetFactories.useWidget;
