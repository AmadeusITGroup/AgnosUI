import type {Directive, Widget, WidgetFactory, WidgetProps, WidgetState, WidgetsConfigStore} from '@agnos-ui/core';
import {findChangedProperties} from '@agnos-ui/core';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, computed, writable} from '@amadeus-it-group/tansu';
import type {RefCallback} from 'react';
import {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';

import type {SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, WidgetSlotContext} from '@agnos-ui/core';

export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| ((props: Props) => React.ReactNode)
	| React.ComponentType<Props>
	| React.ReactNode;

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

export function useWidget<Factory extends (...arg: any[]) => Widget>(
	createWidget: Factory,
	props: Partial<WidgetProps<ReturnType<Factory>>> = {},
	...initProps: Parameters<Factory>
) {
	type W = ReturnType<Factory>;
	type State = WidgetState<W>;

	const apiRef = useRef<W | undefined>(undefined);

	if (!apiRef.current) {
		apiRef.current = createWidget(...initProps) as W;
		apiRef.current.patch(props);
	}
	const api = apiRef.current;
	const previousProps = useRef(props);

	useEffect(() => {
		const changedProps = findChangedProperties(previousProps.current, props);
		previousProps.current = props;
		if (changedProps) {
			api.patch(changedProps);
		}
	}, [props]);

	const state = useObservable(api.state$);

	return <[State, W]>[state, api];
}

export function useObservable<T>(store$: ReadableSignal<T>) {
	const [value, setValue] = useState(() => store$());

	useEffect(() => {
		return store$.subscribe((arg) => {
			// We're passing an update function to setValue here instead of just doing setValue(arg) so that
			// if arg is a function, it is properly used as the value instead of being called as an update function
			setValue(() => arg);
		});
	}, [store$]);

	return value;
}

export function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
export function useDirective<T>(directive: Directive<T>, args?: T) {
	const instance = useRef<ReturnType<typeof directive>>();
	const propsRef = useRef<T>();
	const ref = useCallback(
		(element: HTMLElement | null) => {
			instance.current?.destroy?.();
			instance.current = undefined;
			if (element) {
				instance.current = directive(element, propsRef.current as T);
			}
		},
		[directive]
	);
	propsRef.current = args;
	instance.current?.update?.(args as T);
	return ref;
}

/**
 * React context which can be used to provide or consume the widgets default configuration store.
 */
export const widgetsConfigContext = createContext(undefined as undefined | WidgetsConfigStore<WidgetsConfig>);

const propsEqual = <T extends object>(a: T, b: T) => !findChangedProperties(a, b);
const usePropsAsStore = <T extends object>(props?: Partial<T>): ReadableSignal<Partial<T>> => {
	const storeRef = useRef<WritableSignal<Partial<T>>>();
	if (!storeRef.current) {
		storeRef.current = writable({...props}, {equal: propsEqual});
	}
	useEffect(() => {
		storeRef.current!.set({...props});
	}, [props]);

	return useMemo(() => asReadable(storeRef.current!), [storeRef.current!]);
};

const useWidgetContext = <Props extends object>(widgetName: keyof WidgetsConfig | null, defaultConfig?: Partial<Props>) => {
	const widgetsConfig = useContext(widgetsConfigContext);
	const defaultConfig$ = usePropsAsStore(defaultConfig);
	return useMemo(() => computed(() => ({...defaultConfig$(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined)})), [widgetsConfig]);
};

export const useWidgetWithConfig = <W extends Widget>(
	factory: WidgetFactory<W>,
	props: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined,
	widgetName: keyof WidgetsConfig | null,
	defaultProps?: Partial<AdaptPropsSlots<WidgetProps<W>>>
): [AdaptPropsSlots<WidgetState<W>>, AdaptWidgetSlots<W>] =>
	useWidget(factory, props as any, useWidgetContext(widgetName, defaultProps) as any) as any;
