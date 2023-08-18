const t=`import type { SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, Widget, WidgetProps, WidgetSlotContext, WidgetState } from '@agnos-ui/core';
import type { ComponentType, SvelteComponent } from 'svelte';
import type { WidgetPropsSlots } from '../utils';
export declare const useSvelteSlot: unique symbol;
export type SlotSvelteComponent<Props extends object = object> = ComponentType<SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>>;
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;
export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;
export type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
export type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;
`;export{t as default};
