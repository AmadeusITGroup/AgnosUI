const e=`import type { Widget, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/core/types';
import { type WidgetsConfigStore, type WidgetsConfig as CoreWidgetsConfig, type Partial2Levels } from '@agnos-ui/core/config';
import type { ReactNode } from 'react';
import type { AdaptPropsSlots } from './types';
export * from '@agnos-ui/core/config';
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
type DefaultConfigInput<Config> = Partial2Levels<Config> & {
    adaptParentConfig?: (config: Partial2Levels<Config>) => Partial2Levels<Config>;
    children?: ReactNode | undefined;
};
export declare const widgetsConfigFactory: <Config extends {
    [widgetName: string]: object;
} = WidgetsConfig>(widgetsConfigContext?: import("react").Context<WidgetsConfigStore<Config> | undefined>) => {
    /**
     * React context which can be used to provide or consume the widgets default configuration store.
     */
    widgetsConfigContext: import("react").Context<WidgetsConfigStore<Config> | undefined>;
    useWidgetContext: <Props extends object>(widgetName: keyof Config | null, defaultConfig?: Partial<Props> | undefined) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>;
    useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<WidgetProps<W>> | undefined, widgetName: keyof Config | null, defaultProps?: Partial<WidgetProps<W>> | undefined) => [WidgetState<W>, W];
    WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: DefaultConfigInput<Config>) => import("react/jsx-runtime").JSX.Element;
};
export declare const widgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>, WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: DefaultConfigInput<WidgetsConfig>) => import("react/jsx-runtime").JSX.Element, useWidgetContext: <Props extends object>(widgetName: keyof CoreWidgetsConfig | null, defaultConfig?: Partial<Props> | undefined) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>, useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<WidgetProps<W>> | undefined, widgetName: keyof CoreWidgetsConfig | null, defaultProps?: Partial<WidgetProps<W>> | undefined) => [WidgetState<W>, W];
`;export{e as default};
