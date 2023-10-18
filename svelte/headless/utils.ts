import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core';
import {findChangedProperties, toReadableStore} from '@agnos-ui/core';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed} from '@amadeus-it-group/tansu';
import {createEventDispatcher as svelteCreateEventDispatcher} from 'svelte';
import type {SlotContent, SlotSvelteComponent, SlotsPresent} from './slotTypes';
import {useSvelteSlot} from './slotTypes';

export function createPatchChangedProps<T extends object>(patchFn: (arg: Partial<T>) => void) {
	let previousProps: Partial<T> = {};
	return (props: Partial<T>) => {
		const changedProps = findChangedProperties(previousProps, props);
		previousProps = props;
		if (changedProps) {
			patchFn(changedProps);
		}
	};
}

export const createEventDispatcher = <T extends object>() =>
	svelteCreateEventDispatcher<{[K in keyof T]: T[K] extends CustomEvent<infer U> ? U : never}>();

export const callWidgetFactoryWithConfig = <W extends Widget>({
	factory,
	$$slots,
	defaultConfig,
	widgetConfig,
	events,
}: {
	factory: WidgetFactory<W>;
	$$slots: SlotsPresent<WidgetProps<W>>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events: Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>;
}): W & {patchChangedProps: W['patch']} => {
	const defaultConfig$ = toReadableStore(defaultConfig);
	const processedSlots: any = {};
	for (const [name, present] of Object.entries($$slots)) {
		if (present) {
			processedSlots[`slot${name[0].toUpperCase()}${name.substring(1)}`] = useSvelteSlot;
		}
	}
	const widget = factory({
		config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...processedSlots})),
	});
	widget.patch(events);
	return {...widget, patchChangedProps: createPatchChangedProps(widget.patch)};
};

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
