import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core/types';
import type {Partial2Levels, WidgetsConfigStore, WidgetsConfig} from '@agnos-ui/core/config';
import {createWidgetsConfig} from '@agnos-ui/core/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed} from '@amadeus-it-group/tansu';
import type {FactoryProvider} from '@angular/core';
import {InjectionToken, Injector, Optional, SkipSelf, inject, runInInjectionContext} from '@angular/core';
import type {AngularWidget} from './types';
import {callWidgetFactoryWithConfig} from './utils/widget';

export * from '@agnos-ui/core/config';

type AdaptParentConfig<Config> = (config: Partial2Levels<Config>) => Partial2Levels<Config>;
type InjectWidgetsConfig<Config> = (config?: Partial2Levels<Config>) => WidgetsConfigStore<Config>;

/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @param widgetsConfigInjectionToken - the widgets config injection token
 * @returns the utilities to create / manage widgets and contexts
 */
export const widgetsConfigFactory = <Config extends {[widgetName: string]: object} = WidgetsConfig>(
	widgetsConfigInjectionToken = new InjectionToken<WidgetsConfigStore<Config>>('widgetsConfig'),
) => {
	/**
	 * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
	 * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
	 * the parent configuration.
	 *
	 * @remarks
	 * The configuration is computed from the parent configuration in two steps:
	 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
	 * If adaptParentConfig is not specified, this step is skipped.
	 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
	 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
	 * {@link injectWidgetsConfig}.
	 *
	 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
	 * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
	 * default configuration to be used.
	 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
	 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
	 * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
	 * Angular dependency injection system.
	 *
	 * @returns DI provider to be included a list of `providers` (for example at a component level or
	 * any other level of the Angular dependency injection system)
	 *
	 * @example
	 * ```typescript
	 * @Component({
	 *   // ...
	 *   providers: [
	 *     provideWidgetsConfig((parentConfig) => {
	 *       // first step configuration: transforms the parent configuration
	 *       parentConfig.rating = parentConfig.rating ?? {};
	 *       parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
	 *       return parentConfig;
	 *     })
	 *   ]
	 * })
	 * class MyComponent {
	 *   widgetsConfig = injectWidgetsConfig();
	 *   constructor() {
	 *     this.widgetsConfig.set({
	 *       // second step configuration: overrides the parent configuration
	 *       rating: {
	 *         slotStar: MyCustomSlotStar
	 *       }
	 *     });
	 *   }
	 *   // ...
	 * }
	 * ```
	 */
	const provideWidgetsConfig = (adaptParentConfig?: AdaptParentConfig<Config>): FactoryProvider => ({
		provide: widgetsConfigInjectionToken,
		useFactory: (parent: WidgetsConfigStore<Config> | null) => {
			if (adaptParentConfig) {
				const injector = inject(Injector);
				const originalAdaptParentConfig = adaptParentConfig;
				adaptParentConfig = (value) => runInInjectionContext(injector, () => originalAdaptParentConfig(value));
			}
			return createWidgetsConfig(parent ?? undefined, adaptParentConfig);
		},
		deps: [[new SkipSelf(), new Optional(), widgetsConfigInjectionToken]],
	});

	/**
	 * Returns the widgets default configuration store that was provided in the current injection context.
	 * Throws if the no widgets default configuration store was provided.
	 *
	 * @param defaultConfig - values to set as soon as the config is injected
	 * @remarks
	 * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
	 * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
	 *
	 * @returns the widgets default configuration store.
	 */
	const injectWidgetsConfig: InjectWidgetsConfig<Config> = (defaultConfig?: Partial2Levels<Config>) => {
		const widgetsConfig = inject(widgetsConfigInjectionToken);
		if (defaultConfig) {
			widgetsConfig.set(defaultConfig);
		}
		return widgetsConfig;
	};

	const injectWidgetConfig = <N extends keyof Config>(widgetName: N): ReadableSignal<Partial<Config[N]> | undefined> => {
		const widgetsConfig = inject(widgetsConfigInjectionToken, {optional: true});
		return computed(() => widgetsConfig?.()[widgetName]);
	};

	const callWidgetFactory = <W extends Widget>({
		factory,
		widgetName = null,
		defaultConfig = {},
		events,
		afterInit,
	}: {
		factory: WidgetFactory<W>;
		widgetName?: null | keyof Config;
		defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
		events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>>;
		afterInit?: () => void;
	}): AngularWidget<W> =>
		callWidgetFactoryWithConfig({
			factory,
			widgetConfig: widgetName ? (injectWidgetConfig(widgetName) as any) : null,
			defaultConfig,
			events,
			afterInit,
		});

	return {
		/**
		 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
		 */
		widgetsConfigInjectionToken,
		provideWidgetsConfig,
		injectWidgetsConfig,
		injectWidgetConfig,
		callWidgetFactory,
	};
};

export const {widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory} =
	widgetsConfigFactory<WidgetsConfig>();
