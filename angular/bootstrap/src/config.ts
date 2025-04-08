import type {
	AngularWidget,
	IsSlotContent,
	Partial2Levels,
	SlotContent,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetsConfigStore,
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

/**
 * @param factory - The widget factory.
 * @param widgetName - The name of the widget.
 * @param defaultConfig - The default configuration for the widget.
 * @param events - The events for the widget.
 * @param afterInit - The function to call after initialization.
 */
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
 * Destructures and exports several functions and constants from the `widgetFactories` object.
 *
 * @constant {InjectionToken} widgetsConfigInjectionToken - Token used for injecting widget configuration.
 * @function provideWidgetsConfig - Provides the widget configuration.
 * @function injectWidgetConfig - Injects a single widget configuration.
 * @function injectWidgetsConfig - Injects multiple widget configurations.
 * @function callWidgetFactory - Calls the widget factory function.
 */
export const {widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory} = widgetFactories;
