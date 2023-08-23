import type {
	SlotContent as CoreSlotContent,
	WidgetsConfig as CoreWidgetsConfig,
	Widget,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
} from '@agnos-ui/core';
import type {ComponentType, SvelteComponent} from 'svelte';
import type {WidgetPropsSlots} from '../utils';

export const useSvelteSlot = Symbol('useSvelteSlot');

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

export type WidgetsConfig = {
	[WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	W['api'],
	W['actions'],
	W['directives']
>;

export const isSvelteComponent = <Props extends object>(content: SlotContent<Props>): content is SlotSvelteComponent<Props> => {
	// in prod mode, a svelte component has $set on its prototype
	// in dev mode with hmr (hot module reload), a svelte component has nothing on its prototype, but its name starts with Proxy<
	return (
		(typeof content === 'function' && !!content.prototype && (content.prototype.$set || /^Proxy</.test(content.name))) ||
		// when using Server Side Rendering, a svelte component is an object with a render function:
		// (cf https://svelte.dev/docs/server-side-component-api)
		typeof (content as any)?.render === 'function'
	);
};
