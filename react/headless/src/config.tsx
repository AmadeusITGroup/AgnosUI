import type {Widget, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import {createWidgetsConfig, type WidgetsConfigStore, type WidgetsConfig as CoreWidgetsConfig, type Partial2Levels} from '@agnos-ui/core/config';
import {computed} from '@amadeus-it-group/tansu';
import type {ReactNode} from 'react';
import {createContext, useContext, useEffect, useMemo} from 'react';
import type {AdaptPropsSlots} from './types';
import {useWidget} from './utils/widget';
import {usePropsAsStore} from './utils/stores';

export * from '@agnos-ui/core/config';

export type WidgetsConfig = {
	[WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
type DefaultConfigInput<Config> = Partial2Levels<Config> & {
	adaptParentConfig?: (config: Partial2Levels<Config>) => Partial2Levels<Config>;
	children?: ReactNode | undefined;
};

/**
 * A factory to create the use functions and react component to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @param widgetsConfigContext - the widgets config context
 * @returns the use functions and react component
 */
export const widgetsConfigFactory = <Config extends {[widgetName: string]: object} = WidgetsConfig>(
	widgetsConfigContext = createContext(undefined as undefined | WidgetsConfigStore<Config>),
) => {
	const useWidgetContext = <Props extends object>(widgetName: keyof Config | null, defaultConfig?: Partial<Props>) => {
		const widgetsConfig = useContext(widgetsConfigContext);
		const defaultConfig$ = usePropsAsStore(defaultConfig);
		return useMemo(() => computed(() => ({...defaultConfig$(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined)})), [widgetsConfig]);
	};

	const useWidgetWithConfig = <W extends Widget>(
		factory: WidgetFactory<W>,
		props: Partial<WidgetProps<W>> | undefined,
		widgetName: keyof Config | null,
		defaultProps?: Partial<WidgetProps<W>>,
	): [WidgetState<W>, W] => useWidget(factory, props, {config: useWidgetContext(widgetName, defaultProps)});

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
		const config$ = useContext(widgetsConfigContext);
		let storeRecreated = false;

		const store$ = useMemo(() => {
			const store = createWidgetsConfig(config$, adaptParentConfig);
			store.set(props as any);
			storeRecreated = true;
			return store;
		}, [config$, adaptParentConfig]);
		useEffect(() => {
			if (!storeRecreated) {
				store$.set(props as any);
			}
		}, [props]);
		return <widgetsConfigContext.Provider value={store$}>{children}</widgetsConfigContext.Provider>;
	};

	return {
		/**
		 * React context which can be used to provide or consume the widgets default configuration store.
		 */
		widgetsConfigContext,
		useWidgetContext,
		useWidgetWithConfig,
		WidgetsDefaultConfig,
	};
};
export const {widgetsConfigContext, WidgetsDefaultConfig, useWidgetContext, useWidgetWithConfig} = widgetsConfigFactory();
