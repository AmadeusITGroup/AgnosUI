const t=`/// <reference types="react" />
import type { SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, Widget, WidgetProps, WidgetSlotContext, WidgetState } from '@agnos-ui/core';
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | ((props: Props) => React.ReactNode) | React.ComponentType<Props> | React.ReactNode;
export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;
export type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
export type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;
export declare const Slot: <Props extends object>({ slotContent, props }: {
    slotContent: SlotContent<Props>;
    props: Props;
}) => import("react/jsx-runtime").JSX.Element;
`;export{t as default};
