export * from '@agnos-ui/core/types';

import type {SlotContent as CoreSlotContent, WidgetProps, WidgetSlotContext} from '@agnos-ui/core/types';
import type {ComponentType, SvelteComponent} from 'svelte';

export const useSvelteSlot = Symbol('useSvelteSlot');

export type WidgetPropsSlots<Props extends object> = {
	[K in keyof Props & `slot${string}` as K extends `slot${infer U}` ? Uncapitalize<U> : never]: Props[K] extends SlotContent<infer U> ? U : never;
};

export type SlotsPresent<Props extends object> = {
	[K in keyof Props & `slot${string}` as K extends `slot${infer U}` ? Uncapitalize<U> : never]?: boolean;
};

export type SlotSvelteComponent<Props extends object = object> = ComponentType<
	SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>
>;

export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;
