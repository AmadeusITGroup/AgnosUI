import {findChangedProperties, toReadableStore} from '@agnos-ui/core/utils/stores';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asWritable, computed, writable} from '@amadeus-it-group/tansu';
import type {PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '../types';
import {fromStore} from 'svelte/store';

function createPatchChangedProps<T extends object>(previousProps: Partial<T>, patchFn: (arg: Partial<T>) => void) {
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
 *
 * @param event - function that will be merged with the value of the store so that it is always called first when the event handler is called
 * @param prop - the initial value of the store
 * @returns a writable store to be used for an event handler
 */
const eventStore = <T extends any[]>(
	event: (...args: T) => void,
	prop: undefined | null | ((...args: T) => void),
): WritableSignal<undefined | null | ((...args: T) => void)> => {
	const store$ = writable(prop, {equal: Object.is});
	return asWritable(
		computed(() => mergeEventFns(event, store$()) as any),
		{
			set: store$.set,
			update: store$.update,
		},
	);
};

/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.props - the props of the widget
 * @param parameter.enablePatchChanged - enable patching changed props
 * @returns the widget
 */
export const callWidgetFactoryWithConfig = <W extends Widget>(parameter: {
	factory: WidgetFactory<W>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}Change`>>;
	props?: Partial<WidgetProps<W>>;
	enablePatchChanged?: true;
}): WidgetSlotContext<W> => {
	const {factory, defaultConfig, widgetConfig, events, enablePatchChanged} = parameter;
	const props: Partial<WidgetProps<W>> = parameter.props ?? {};
	const defaultConfig$ = toReadableStore(defaultConfig);
	const propsWithEvents: PropsConfig<WidgetProps<W>>['props'] = {...props};
	if (events) {
		for (const event of Object.keys(events) as (keyof WidgetProps<W> & `on${string}Change`)[]) {
			propsWithEvents[event] = eventStore(events[event] as any, props[event] as any) as any;
		}
	}
	const widget = factory({
		config: computed(() => ({...defaultConfig$(), ...widgetConfig?.()})),
		props: propsWithEvents,
	});
	const runes = Object.fromEntries(
		Object.entries<ReadableSignal<unknown>>(widget.stores as any).map(([key, val]) => [key.slice(0, -1), fromStore(val)]),
	);
	if (enablePatchChanged) {
		const patch = createPatchChangedProps(props, widget.patch);
		$effect(() => {
			patch({...parameter.props});
		});
	}
	return {
		api: widget.api,
		directives: widget.directives,
		state: new Proxy(runes, {
			get(target, name, receiver) {
				if (Reflect.has(target, name)) {
					return Reflect.get(target, name, receiver).current;
				}
				return undefined;
			},
		}) as WidgetState<W>,
	};
};
