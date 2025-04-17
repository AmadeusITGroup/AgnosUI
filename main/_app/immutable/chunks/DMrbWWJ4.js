const e=`import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core/types';
import { type WidgetsConfigStore, type WidgetsConfig, type Partial2Levels } from '@agnos-ui/core/config';
import type { ReactNode } from 'react';
export * from '@agnos-ui/core/config';
type DefaultConfigInput<Config> = Partial2Levels<Config> & {
    adaptParentConfig?: (config: Partial2Levels<Config>) => Partial2Levels<Config>;
    children?: ReactNode | undefined;
};
/**
 * A factory to create the use functions and react component to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @param WidgetsConfigContext - the widgets config context
 * @returns the use functions and react component
 */
export declare const widgetsConfigFactory: <Config extends Record<string, object> = WidgetsConfig>(WidgetsConfigContext?: import("react").Context<WidgetsConfigStore<Config> | undefined>) => {
    /**
     * React context which can be used to provide or consume the widgets default configuration store.
     */
    WidgetsConfigContext: import("react").Context<WidgetsConfigStore<Config> | undefined>;
    useWidgetContext: <Props extends object>(widgetName?: string, defaultConfig?: Partial<Props>) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>;
    useWidget: <W extends Widget>(factory: WidgetFactory<W>, props?: Partial<WidgetProps<W>>, defaultProps?: Partial<WidgetProps<W>>) => import("@agnos-ui/core/types").WidgetSlotContext<W>;
    WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: DefaultConfigInput<Config>) => import("react/jsx-runtime").JSX.Element;
};
export declare const WidgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>, WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: DefaultConfigInput<WidgetsConfig>) => import("react/jsx-runtime").JSX.Element, useWidgetContext: <Props extends object>(widgetName?: string, defaultConfig?: Partial<Props> | undefined) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>, useWidget: <W extends Widget>(factory: WidgetFactory<W>, props?: Partial<WidgetProps<W>> | undefined, defaultProps?: Partial<WidgetProps<W>> | undefined) => import("@agnos-ui/core/types").WidgetSlotContext<W>;
`;export{e as default};
