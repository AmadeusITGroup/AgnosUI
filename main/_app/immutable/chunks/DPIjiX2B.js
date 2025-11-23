const e=`import type { WidgetsConfig, Partial2Levels, WidgetsConfigStore } from '@agnos-ui/core/config';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/config';
type AdaptParentConfig<Config> = (config: Partial2Levels<Config>) => Partial2Levels<Config>;
type CreateWidgetsDefaultConfig<Config extends {
    [widgetName: string]: object;
}> = (adaptParentConfig?: AdaptParentConfig<Config>) => WidgetsConfigStore<Config>;
/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @template Config - The shape of the widgets configuration object.
 * @param widgetsDefaultConfigKey - the widgets config key
 * @returns the utilities to create / manage widgets and contexts
 */
export declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsDefaultConfigKey?: symbol) => {
    /**
     * Key used in the Svelte context to get or set the widgets default configuration store.
     */
    widgetsDefaultConfigKey: symbol;
    createWidgetsDefaultConfig: CreateWidgetsDefaultConfig<Config>;
    getContextWidgetConfig: <N extends keyof Config>(widgetName: N) => ReadableSignal<Partial<Config[N]> | undefined>;
    callWidgetFactory: <W extends Widget>(factory: WidgetFactory<W>, options?: {
        defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
        events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>>;
        props?: Partial<WidgetProps<W>>;
    }) => import("@agnos-ui/core/types").WidgetSlotContext<W>;
};
export declare const widgetsDefaultConfigKey: symbol, createWidgetsDefaultConfig: CreateWidgetsDefaultConfig<WidgetsConfig>, getContextWidgetConfig: <N extends keyof WidgetsConfig>(widgetName: N) => ReadableSignal<Partial<WidgetsConfig[N]> | undefined>, callWidgetFactory: <W extends Widget>(factory: WidgetFactory<W>, options?: {
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}Change\`>> | undefined;
    props?: Partial<WidgetProps<W>> | undefined;
} | undefined) => import("@agnos-ui/core/types").WidgetSlotContext<W>;
`;export{e as default};
