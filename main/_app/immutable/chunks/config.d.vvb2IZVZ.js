const o=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core/types';
import type { Partial2Levels, WidgetsConfigStore } from '@agnos-ui/core/config';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { FactoryProvider } from '@angular/core';
import { InjectionToken } from '@angular/core';
import type { AdaptPropsSlots, AngularWidget } from './types';
export * from '@agnos-ui/core/config';
export type WidgetsConfig = {
    [WidgetName in keyof import('@agnos-ui/core/config').WidgetsConfig]: AdaptPropsSlots<import('@agnos-ui/core/config').WidgetsConfig[WidgetName]>;
};
export declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsConfigInjectionToken?: InjectionToken<WidgetsConfigStore<Config>>) => {
    /**
     * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
     */
    widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<Config>>;
    provideWidgetsConfig: (adaptParentConfig?: ((config: Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) => Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) | undefined) => FactoryProvider;
    injectWidgetsConfig: () => WidgetsConfigStore<Config>;
    injectWidgetConfig: <N extends keyof Config>(widgetName: N) => ReadableSignal<Partial<Config[N]> | undefined>;
    callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, defaultConfig, events, }: {
        factory: WidgetFactory<W>;
        widgetName?: keyof Config | null | undefined;
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
        events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
    }) => AngularWidget<W>;
};
export declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>, provideWidgetsConfig: (adaptParentConfig?: ((config: Partial<{
    pagination: Partial<AdaptPropsSlots<import("core/dist/components/pagination/pagination").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("core/dist/components/rating/rating").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("core/dist/components/select/select").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("core/dist/components/modal/modal").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("core/dist/components/alert/alert").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("core/dist/components/accordion/accordion").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("core/dist/components/progressbar/progressbar").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/angular-headless").SliderProps>>;
}>) => Partial<{
    pagination: Partial<AdaptPropsSlots<import("core/dist/components/pagination/pagination").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("core/dist/components/rating/rating").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("core/dist/components/select/select").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("core/dist/components/modal/modal").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("core/dist/components/alert/alert").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("core/dist/components/accordion/accordion").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("core/dist/components/progressbar/progressbar").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/angular-headless").SliderProps>>;
}>) | undefined) => FactoryProvider, injectWidgetConfig: <N extends keyof import("@agnos-ui/core/config").WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, injectWidgetsConfig: () => WidgetsConfigStore<WidgetsConfig>, callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, defaultConfig, events, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof import("@agnos-ui/core/config").WidgetsConfig | null | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
}) => AngularWidget<W>;
`;export{o as default};
