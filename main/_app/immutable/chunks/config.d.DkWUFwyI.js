const e=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core/types';
import type { Partial2Levels, WidgetsConfigStore, WidgetsConfig as CoreWidgetsConfig } from '@agnos-ui/core/config';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { FactoryProvider } from '@angular/core';
import { InjectionToken } from '@angular/core';
import type { AdaptPropsSlots, AngularWidget } from './types';
export * from '@agnos-ui/core/config';
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
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
export declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsConfigInjectionToken?: InjectionToken<WidgetsConfigStore<Config>>) => {
    /**
     * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
     */
    widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<Config>>;
    provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig<Config>) => FactoryProvider;
    injectWidgetsConfig: InjectWidgetsConfig<Config>;
    injectWidgetConfig: <N extends keyof Config>(widgetName: N) => ReadableSignal<Partial<Config[N]> | undefined>;
    callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, defaultConfig, events, afterInit, }: {
        factory: WidgetFactory<W>;
        widgetName?: keyof Config | null | undefined;
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
        events?: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`> | undefined;
        afterInit?: (() => void) | undefined;
    }) => AngularWidget<W>;
};
export declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>, provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig<WidgetsConfig> | undefined) => FactoryProvider, injectWidgetConfig: <N extends keyof CoreWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, injectWidgetsConfig: InjectWidgetsConfig<WidgetsConfig>, callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, defaultConfig, events, afterInit, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof CoreWidgetsConfig | null | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events?: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`> | undefined;
    afterInit?: (() => void) | undefined;
}) => AngularWidget<W>;
`;export{e as default};
