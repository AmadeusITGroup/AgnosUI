const e=`import type { WidgetsConfig as CoreWidgetsConfig, Partial2Levels, WidgetsConfigStore } from '@agnos-ui/core/config';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { AdaptPropsSlots, SlotsPresent, Widget, WidgetProps, WidgetFactory } from './types';
export * from '@agnos-ui/core/config';
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
        events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>;
    }) => W & {
        patchChangedProps: W["patch"];
    };
};
export declare const widgetsDefaultConfigKey: symbol, createWidgetsDefaultConfig: (adaptParentConfig?: ((config: Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").SliderProps>>;
}>) => Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core/index").SliderProps>>;
}>) | undefined) => WidgetsConfigStore<WidgetsConfig>, getContextWidgetConfig: <N extends keyof CoreWidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, callWidgetFactory: <W extends Widget<object, object, object, object, object>>({ factory, widgetName, $$slots, defaultConfig, events, }: {
    factory: WidgetFactory<W>;
    widgetName?: keyof CoreWidgetsConfig | null | undefined;
    $$slots: SlotsPresent<WidgetProps<W>>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events: Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>;
}) => W & {
    patchChangedProps: W["patch"];
};
`;export{e as default};
