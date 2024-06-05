export * from '@agnos-ui/core/types';

import type {
	SlotContent as CoreSlotContent,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
	IsSlotContent as IsCoreSlotContent,
	Extends,
} from '@agnos-ui/core/types';
import type {ComponentType, SvelteComponent} from 'svelte';

export const useSvelteSlot = Symbol('useSvelteSlot');

export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;

export type WidgetPropsSlots<Props extends object> = {
	[K in keyof Props as IsSlotContent<Props[K]> extends SlotContent<any>
		? K extends 'children'
			? 'default'
			: K
		: never]: Props[K] extends SlotContent<infer U> ? U : never;
};

export type SlotsPresent<Props extends object> = {
	[K in keyof Props as IsSlotContent<Props[K]> extends SlotContent<any> ? (K extends 'children' ? 'default' : K) : never]?: boolean;
};

export type SlotSvelteComponent<Props extends object = object> = ComponentType<
	SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>
>;

export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;

export type AdaptSlotContentProps<Props extends Record<string, any>> =
	Props extends WidgetSlotContext<infer U>
		? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
		: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = {
	[K in keyof Props]: IsCoreSlotContent<Props[K]> extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};

export type AdaptWidgetFactories<T> = {
	[K in keyof T]: T[K] extends WidgetFactory<infer U> ? WidgetFactory<AdaptWidgetSlots<U>> : T[K];
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	AdaptWidgetFactories<W['api']>,
	W['actions'],
	W['directives']
>;

export type PropType<Props, K extends keyof Props> = Props[K];
