import type {
	AngularWidget,
	IsSlotContent,
	Partial2Levels,
	SlotContent,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetsConfigStore,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	BaseWidgetDirective,
} from '@agnos-ui/angular-headless';
import {widgetsConfigFactory} from '@agnos-ui/angular-headless';
import type {BootstrapWidgetsConfig} from '@agnos-ui/core-bootstrap/config';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {FactoryProvider, TemplateRef} from '@angular/core';
import {InjectionToken} from '@angular/core';

import type {WidgetsConfig} from './config.gen';
export type {WidgetsConfig};

type AdaptParentConfig = (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
type InjectWidgetsConfig = (config?: Partial2Levels<WidgetsConfig>) => WidgetsConfigStore<WidgetsConfig>;

const widgetFactories: {
	widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>;
	provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig) => FactoryProvider;
	injectWidgetConfig: <N extends keyof BootstrapWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>;
	injectWidgetsConfig: InjectWidgetsConfig;

	callWidgetFactory: <W extends Widget<object, object, object, object>>(
		factory: WidgetFactory<W>,
		options?: {
			widgetName?: keyof BootstrapWidgetsConfig | null | undefined;
			defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
			events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>>;
			afterInit?: (widget: AngularWidget<W>) => void;
			slotTemplates?: () => {
				[K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U>
					? TemplateRef<U> | undefined
					: never;
			};
			slotChildren?: () => TemplateRef<void> | undefined;
		},
	) => AngularWidget<W>;
} = widgetsConfigFactory<WidgetsConfig>(new InjectionToken<WidgetsConfigStore<WidgetsConfig>>('bootstrapWidgetsConfig')) as any;

/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
export const widgetsConfigInjectionToken = widgetFactories.widgetsConfigInjectionToken;

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
export const provideWidgetsConfig = widgetFactories.provideWidgetsConfig;

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
export const injectWidgetsConfig = widgetFactories.injectWidgetsConfig;

/**
 * Injects the configuration for a specific widget.
 *
 * @template N - The key of the widget configuration in the `Config` type.
 * @param widgetName - The name of the widget whose configuration is to be injected.
 * @returns A `ReadableSignal` that provides a partial configuration of the specified widget or `undefined` if the configuration is not available.
 */
export const injectWidgetConfig = widgetFactories.injectWidgetConfig;

/**
 * Creates and initializes a widget using the provided factory and configuration options.
 *
 * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
 *
 * @template W - The type of the widget.
 * @param factory - The factory function to create the widget.
 * @param options - The options for creating the widget.
 * @param options.defaultConfig - The default configuration for the widget.
 * @param options.events - The event handlers for the widget.
 * @param options.slotTemplates - A function that returns the slot templates for the widget.
 * @param options.slotChildren - A function that returns the slot children for the widget.
 * @param options.afterInit - A callback function to be called after the widget is initialized.
 * @returns The initialized widget.
 */
export const callWidgetFactory = widgetFactories.callWidgetFactory;
