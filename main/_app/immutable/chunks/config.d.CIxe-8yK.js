const t=`import type { Partial2Levels, WidgetsConfigStore } from '@agnos-ui/react-headless/config';
import type { AdaptPropsSlots, Widget, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/react-headless/types';
import type { BootstrapWidgetsConfig } from '@agnos-ui/style-bootstrap/config';
import type { ReactNode, Context } from 'react';
export * from '@agnos-ui/react-headless/config';
export type WidgetsConfig = {
    [WidgetName in keyof BootstrapWidgetsConfig]: AdaptPropsSlots<BootstrapWidgetsConfig[WidgetName]>;
};
type DefaultConfigInput = Partial2Levels<WidgetsConfig> & {
    adaptParentConfig?: (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>;
    children?: ReactNode | undefined;
};
export declare const widgetsConfigContext: Context<WidgetsConfigStore<WidgetsConfig> | undefined>, WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: DefaultConfigInput) => import('react/jsx-runtime').JSX.Element, useWidgetContext: <Props extends object>(widgetName: keyof BootstrapWidgetsConfig | null, defaultConfig?: Partial<Props> | undefined) => import('@amadeus-it-group/tansu').ReadableSignal<Partial<Props>>, useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<WidgetProps<W>> | undefined, widgetName: keyof BootstrapWidgetsConfig | null, defaultProps?: Partial<WidgetProps<W>> | undefined) => [WidgetState<W>, W];
`;export{t as default};
