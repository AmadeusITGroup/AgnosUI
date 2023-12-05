import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core';
import {findChangedProperties, toReadableStore} from '@agnos-ui/core';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, computed, writable} from '@amadeus-it-group/tansu';
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

/**
 * Merges two functions.
 * @param fn1 - first function
 * @param fn2 - second function (or undefined or null)
 * @returns a function that successively calls fn1 and fn2 (if defined)
 */
const mergeEventFns = <T extends any[]>(fn1: (...args: T) => void, fn2: undefined | null | ((...args: T) => void)) =>
	fn2
		? (...args: any) => {
				fn1(...args);
				fn2(...args);
		  }
		: fn1;

/**
 * Creates a writable store to be used for an event handler.
 * @param event - function that will be merged with the value of the store so that it is always called first when the event handler is called
 * @returns a writable store to be used for an event handler
 */
const eventStore = <T extends any[]>(event: (...args: T) => void): WritableSignal<undefined | null | ((...args: T) => void)> => {
	const store$ = writable<undefined | null | ((...args: T) => void)>(undefined, {equal: Object.is});
	return asReadable(
		computed(() => mergeEventFns(event, store$()) as any),
		{
			set: store$.set,
			update: store$.update,
		},
	);
};

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
	events: Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>;
}): W & {patchChangedProps: W['patch']} => {
	const defaultConfig$ = toReadableStore(defaultConfig);
	const processedSlots: any = {};
	for (const [name, present] of Object.entries($$slots)) {
		if (present) {
			processedSlots[`slot${name[0].toUpperCase()}${name.substring(1)}`] = useSvelteSlot;
		}
	}
	const props: {[key in keyof WidgetProps<W>]: WritableSignal<WidgetProps<W>[key]>} = {} as any;
	for (const event of Object.keys(events) as (keyof WidgetProps<W> & `on${string}Change`)[]) {
		props[event] = eventStore(events[event] as any) as any;
	}
	const widget = factory({
		config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...processedSlots})),
		props,
	});
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
