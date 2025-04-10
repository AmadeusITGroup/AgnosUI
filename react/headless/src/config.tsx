import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core/types';
import {FACTORY_WIDGET_NAME} from '@agnos-ui/core/types';
import {createWidgetsConfig, type WidgetsConfigStore, type WidgetsConfig, type Partial2Levels} from '@agnos-ui/core/config';
import {computed} from '@amadeus-it-group/tansu';
import type {ReactNode} from 'react';
import {createContext, useContext, useMemo} from 'react';
import {useWidgetWithConfig} from './utils/widget';
import {usePropsAsStore} from './utils/stores';

export * from '@agnos-ui/core/config';

type DefaultConfigInput<Config> = Partial2Levels<Config> & {
	adaptParentConfig?: (config: Partial2Levels<Config>) => Partial2Levels<Config>;
	children?: ReactNode | undefined;
};

/**
 * A factory to create the use functions and react component to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @param WidgetsConfigContext - the widgets config context
 * @returns the use functions and react component
 */
export const widgetsConfigFactory = <Config extends Record<string, object> = WidgetsConfig>(
	WidgetsConfigContext = createContext(undefined as undefined | WidgetsConfigStore<Config>),
) => {
	/**
	 * React hook that returns the widgets default configuration store.
	 *
	 * @param widgetName - the name of the widget to get the configuration for
	 * @param defaultConfig - the default configuration of the widget
	 * @returns the widgets default configuration store
	 */
	const useWidgetContext = <Props extends object>(widgetName?: string, defaultConfig?: Partial<Props>) => {
		const widgetsConfig = useContext(WidgetsConfigContext);
		const defaultConfig$ = usePropsAsStore(defaultConfig);
		return useMemo(
			() => computed(() => ({...defaultConfig$(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined)})),
			[defaultConfig$, widgetName, widgetsConfig],
		);
	};

	/**
	 * Create and attach an agnos-ui/core widget to the current react component.
	 *
	 * @param factory - the widget factory
	 * @param props - the widget props
	 * @param defaultProps - the default widget props
	 * @returns the state, api and directives to track and interact with the widget
	 */
	const useWidget = <W extends Widget>(factory: WidgetFactory<W>, props?: Partial<WidgetProps<W>>, defaultProps?: Partial<WidgetProps<W>>) =>
		useWidgetWithConfig(factory, props, {config: useWidgetContext(factory[FACTORY_WIDGET_NAME], defaultProps)});

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
	const WidgetsDefaultConfig = ({children, adaptParentConfig, ...props}: DefaultConfigInput<Config>) => {
		const config$ = useContext(WidgetsConfigContext);
		const store$ = useMemo(() => createWidgetsConfig(config$, adaptParentConfig), [config$, adaptParentConfig]);
		useMemo(() => store$.set(props as any), [props, store$]);
		return <WidgetsConfigContext value={store$}>{children}</WidgetsConfigContext>;
	};

	return {
		/**
		 * React context which can be used to provide or consume the widgets default configuration store.
		 */
		WidgetsConfigContext,
		useWidgetContext,
		useWidget,
		WidgetsDefaultConfig,
	};
};
export const {WidgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidget} = widgetsConfigFactory();
