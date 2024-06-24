const e=`export * from '@agnos-ui/core/types';
import type { SlotContent as CoreSlotContent, Extends, WidgetProps, WidgetSlotContext } from '@agnos-ui/core/types';
import type { ComponentType, SvelteComponent } from 'svelte';
export declare const useSvelteSlot: unique symbol;
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
export type WidgetPropsSlots<Props extends object> = {
    [K in keyof Props as IsSlotContent<Props[K]> extends SlotContent<any> ? K extends 'children' ? 'default' : K extends \`slot\${infer U}\` ? Uncapitalize<U> : K : never]: Props[K] extends SlotContent<infer U> ? U : never;
};
export type SlotsPresent<Props extends object> = {
    [K in keyof Props as IsSlotContent<Props[K]> extends SlotContent<any> ? K extends 'children' ? 'default' : K extends \`slot\${infer U}\` ? Uncapitalize<U> : K : never]?: boolean;
};
export type SlotSvelteComponent<Props extends object = object> = ComponentType<SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>>;
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;
`;export{e as default};
