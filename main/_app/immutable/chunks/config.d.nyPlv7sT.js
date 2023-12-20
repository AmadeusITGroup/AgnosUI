const o=`import type { Partial2Levels, Widget, WidgetFactory, WidgetProps, WidgetsConfigStore } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { FactoryProvider } from '@angular/core';
import { InjectionToken } from '@angular/core';
import type { AdaptPropsSlots } from './slotTypes';
import type { AngularWidget } from './utils';
export type WidgetsConfig = {
    [WidgetName in keyof import('@agnos-ui/core').WidgetsConfig]: AdaptPropsSlots<import('@agnos-ui/core').WidgetsConfig[WidgetName]>;
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
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core").SliderProps>>;
}>) => Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core").SliderProps>>;
}>) | undefined) => FactoryProvider, injectWidgetConfig: <N extends keyof import("@agnos-ui/core").WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, injectWidgetsConfig: () => WidgetsConfigStore<WidgetsConfig>, callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, defaultConfig, events, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof import("@agnos-ui/core").WidgetsConfig | null | undefined;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
}) => AngularWidget<W>;
`;export{o as default};
