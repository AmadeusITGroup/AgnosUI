const t=`import type { Widget, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/core/types';
import { type Partial2Levels, type WidgetsConfigStore } from '@agnos-ui/core/config';
import type { ReactNode } from 'react';
import type { AdaptPropsSlots } from './types';
export * from '@agnos-ui/core/config';
export type WidgetsConfig = {
    [WidgetName in keyof import('@agnos-ui/core/config').WidgetsConfig]: AdaptPropsSlots<import('@agnos-ui/core/config').WidgetsConfig[WidgetName]>;
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
    WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }> & {
        adaptParentConfig?: ((config: Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) => Partial<{ [Level1 in keyof Config]: Partial<Config[Level1]>; }>) | undefined;
        children?: ReactNode | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export declare const widgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>, useWidgetContext: <Props extends object>(widgetName: keyof import("@agnos-ui/core/config").WidgetsConfig | null, defaultConfig?: Partial<Props> | undefined) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>, useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<WidgetProps<W>> | undefined, widgetName: keyof import("@agnos-ui/core/config").WidgetsConfig | null, defaultProps?: Partial<WidgetProps<W>> | undefined) => [WidgetState<W>, W], WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: Partial<{
    pagination: Partial<AdaptPropsSlots<import("core/dist").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("core/dist").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("core/dist").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("core/dist").ModalProps<any>>>;
    alert: Partial<AdaptPropsSlots<import("core/dist").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("core/dist").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("core/dist").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("core/dist").SliderProps>>;
}> & {
    adaptParentConfig?: ((config: Partial<{
        pagination: Partial<AdaptPropsSlots<import("core/dist").PaginationProps>>;
        rating: Partial<AdaptPropsSlots<import("core/dist").RatingProps>>;
        select: Partial<AdaptPropsSlots<import("core/dist").SelectProps<any>>>;
        modal: Partial<AdaptPropsSlots<import("core/dist").ModalProps<any>>>;
        alert: Partial<AdaptPropsSlots<import("core/dist").AlertProps>>;
        accordion: Partial<AdaptPropsSlots<import("core/dist").AccordionProps>>;
        progressbar: Partial<AdaptPropsSlots<import("core/dist").ProgressbarProps>>;
        slider: Partial<AdaptPropsSlots<import("core/dist").SliderProps>>;
    }>) => Partial<{
        pagination: Partial<AdaptPropsSlots<import("core/dist").PaginationProps>>;
        rating: Partial<AdaptPropsSlots<import("core/dist").RatingProps>>;
        select: Partial<AdaptPropsSlots<import("core/dist").SelectProps<any>>>;
        modal: Partial<AdaptPropsSlots<import("core/dist").ModalProps<any>>>;
        alert: Partial<AdaptPropsSlots<import("core/dist").AlertProps>>;
        accordion: Partial<AdaptPropsSlots<import("core/dist").AccordionProps>>;
        progressbar: Partial<AdaptPropsSlots<import("core/dist").ProgressbarProps>>;
        slider: Partial<AdaptPropsSlots<import("core/dist").SliderProps>>;
    }>) | undefined;
    children?: ReactNode | undefined;
}) => import("react/jsx-runtime").JSX.Element;
`;export{t as default};
