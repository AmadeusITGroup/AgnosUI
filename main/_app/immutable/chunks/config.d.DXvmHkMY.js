const e=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core/types';
import type { Partial2Levels, WidgetsConfigStore, WidgetsConfig } from '@agnos-ui/core/config';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { FactoryProvider, TemplateRef } from '@angular/core';
import { InjectionToken } from '@angular/core';
import type { AngularWidget, IsSlotContent, SlotContent } from './types';
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
    callWidgetFactory: <W extends Widget>({ factory, widgetName, defaultConfig, events, afterInit, slotTemplates, slotChildren, }: {
        factory: WidgetFactory<W>;
        widgetName?: null | keyof Config;
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
        events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
        afterInit?: (widget: AngularWidget<W>) => void;
        slotTemplates?: () => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never; };
        slotChildren?: () => TemplateRef<void> | undefined;
    }) => AngularWidget<W>;
};
export declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>, provideWidgetsConfig: (adaptParentConfig?: AdaptParentConfig<WidgetsConfig> | undefined) => FactoryProvider, injectWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, injectWidgetsConfig: InjectWidgetsConfig<WidgetsConfig>, callWidgetFactory: <W extends Widget>({ factory, widgetName, defaultConfig, events, afterInit, slotTemplates, slotChildren, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof WidgetsConfig | null | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>> | undefined;
    afterInit?: ((widget: AngularWidget<W>) => void) | undefined;
    slotTemplates?: (() => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U extends object> ? TemplateRef<U> | undefined : never; }) | undefined;
    slotChildren?: (() => TemplateRef<void> | undefined) | undefined;
}) => AngularWidget<W>;
`;export{e as default};
