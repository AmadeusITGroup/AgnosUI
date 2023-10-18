import type {SlotContent as CoreSlotContent, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '@agnos-ui/core';
import type {ComponentType, SvelteComponent} from 'svelte';

export const useSvelteSlot = Symbol('useSvelteSlot');

export type WidgetPropsProps<Props extends object> = Partial<Omit<Props, `on${string}`>>;

export type WidgetPropsEvents<Props extends object> = {
	[K in keyof Props & `on${string}` as K extends `on${infer U}` ? Uncapitalize<U> : never]: NonNullable<Props[K]> extends (arg: infer U) => void
		? CustomEvent<U>
		: never;
};

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

export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U>
	? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
	: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = Omit<Props, `slot${string}`> & {
	[K in keyof Props & `slot${string}`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
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
