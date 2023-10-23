const o=`import { type Partial2Levels, type Widget, type WidgetFactory, type WidgetProps, type WidgetState, type WidgetsConfigStore } from '@agnos-ui/core';
import type { ReactNode } from 'react';
import type { AdaptPropsSlots } from './slotTypes';
export type WidgetsConfig = {
    [WidgetName in keyof import('@agnos-ui/core').WidgetsConfig]: AdaptPropsSlots<import('@agnos-ui/core').WidgetsConfig[WidgetName]>;
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
export declare const widgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>, useWidgetContext: <Props extends object>(widgetName: keyof import("@agnos-ui/core").WidgetsConfig | null, defaultConfig?: Partial<Props> | undefined) => import("@amadeus-it-group/tansu").ReadableSignal<Partial<Props>>, useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<WidgetProps<W>> | undefined, widgetName: keyof import("@agnos-ui/core").WidgetsConfig | null, defaultProps?: Partial<WidgetProps<W>> | undefined) => [WidgetState<W>, W], WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: Partial<{
    pagination: Partial<AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<AdaptPropsSlots<import("@agnos-ui/core").ModalProps>>;
    alert: Partial<AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
    progressbar: Partial<AdaptPropsSlots<import("@agnos-ui/core").ProgressbarProps>>;
    slider: Partial<AdaptPropsSlots<import("@agnos-ui/core").SliderProps>>;
}> & {
    adaptParentConfig?: ((config: Partial<{
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
    }>) | undefined;
    children?: ReactNode | undefined;
}) => import("react/jsx-runtime").JSX.Element;
`;export{o as default};
