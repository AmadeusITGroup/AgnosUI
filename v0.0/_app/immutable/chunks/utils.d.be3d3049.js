const t=`import type { Directive, Widget, WidgetFactory, WidgetProps, WidgetState, WidgetsConfigStore } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { RefCallback } from 'react';
import type { SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, WidgetSlotContext } from '@agnos-ui/core';
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | ((props: Props) => React.ReactNode) | React.ComponentType<Props> | React.ReactNode;
export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;
export type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
export type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;
export declare function useWidget<Factory extends (...arg: any[]) => Widget>(createWidget: Factory, props?: Partial<WidgetProps<ReturnType<Factory>>>, ...initProps: Parameters<Factory>): [WidgetState<ReturnType<Factory>>, ReturnType<Factory>];
export declare function useObservable<T>(store$: ReadableSignal<T>): T;
export declare function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export declare function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
/**
 * React context which can be used to provide or consume the widgets default configuration store.
 */
export declare const widgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>;
export declare const useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined, widgetName: keyof WidgetsConfig | null, defaultProps?: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined) => [AdaptPropsSlots<WidgetState<W>>, AdaptWidgetSlots<W>];
`;export{t as default};
