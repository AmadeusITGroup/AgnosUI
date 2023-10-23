const o=`import type { WidgetsConfig as CoreWidgetsConfig, Partial2Levels, Widget, WidgetFactory, WidgetProps, WidgetsConfigStore } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { AdaptPropsSlots, SlotsPresent } from './slotTypes';
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
export declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsDefaultConfigKey?: symbol) => {
    /**
     * Key used in the Svelte context to get or set the widgets default configuration store.
     */
    widgetsDefaultConfigKey: symbol;
    createWidgetsDefaultConfig: (adaptParentConfig?: ((config: Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) => Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) | undefined) => WidgetsConfigStore<Config>;
    getContextWidgetConfig: <N extends keyof Config>(widgetName: N) => ReadableSignal<Partial<Config[N]> | undefined>;
    callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, $$slots, defaultConfig, events, }: {
        factory: WidgetFactory<W>;
        widgetName?: keyof Config | null | undefined;
        $$slots: SlotsPresent<WidgetProps<W>>;
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
        events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
    }) => W & {
        patchChangedProps: W["patch"];
    };
};
export declare const widgetsDefaultConfigKey: symbol, createWidgetsDefaultConfig: (adaptParentConfig?: ((config: Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core").ModalProps>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core").SliderProps>>;
}>) => Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core").ModalProps>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core").SliderProps>>;
}>) | undefined) => WidgetsConfigStore<WidgetsConfig>, getContextWidgetConfig: <N extends keyof CoreWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, $$slots, defaultConfig, events, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof CoreWidgetsConfig | null | undefined;
    $$slots: SlotsPresent<WidgetProps<W>>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>;
}) => W & {
    patchChangedProps: W["patch"];
};
`;export{o as default};
