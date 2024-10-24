import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, writable} from '@amadeus-it-group/tansu';
import {useEffect, useMemo, useRef, useState} from 'react';

export * from '@agnos-ui/core/utils/stores';

/**
 * Observe a readable store inside of a react component.
 *
 * @template T - The type of the value emitted by the ReadableSignal.
 * @param store$ - the readable store
 * @returns the observed value of the store
 */
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

/**
 * Hook to create a proxy object that subscribes to observable stores and triggers re-renders on updates.
 *
 * @template State - The shape of the state object.
 * @param stores - An object where keys are suffixed with `$` and values are readable signals.
 * @returns - A proxy object that reflects the current state of the observables.
 *
 */
export function useObservablesProxy<State>(stores: {[K in keyof State & string as `${K}$`]: ReadableSignal<State[K]>}): State {
	const [, triggerRerender] = useState({});
	const internalState = useMemo(() => {
		const internalState = {
			hasEffect: false,
			storeInfo: {} as Record<string, {unsubscribe: null | (() => void)}>,
			checkStoreSubscribed: (key: string) => {
				const store = (stores as any)[`${key}$`];
				if (store) {
					let storeInfo = internalState.storeInfo[key];
					if (!storeInfo) {
						storeInfo = {unsubscribe: null};
						internalState.storeInfo[key] = storeInfo;
					}
					if (internalState.hasEffect && !storeInfo.unsubscribe) {
						storeInfo.unsubscribe = store.subscribe(() => {
							triggerRerender({});
						});
					}
				}
				return store;
			},
			proxy: new Proxy(
				{},
				{
					get(_target, name) {
						const store = typeof name === 'string' ? internalState.checkStoreSubscribed(name) : null;
						return store?.();
					},
				},
			),
		};
		return internalState;
	}, []);
	useEffect(() => {
		internalState.hasEffect = true;
		for (const key of Object.keys(internalState.storeInfo)) {
			internalState.checkStoreSubscribed(key);
		}
		return () => {
			internalState.hasEffect = false;
			for (const info of Object.values(internalState.storeInfo)) {
				const unsubscribe = info.unsubscribe;
				info.unsubscribe = null;
				unsubscribe?.();
			}
		};
	}, [stores]);
	return internalState.proxy as State;
}

const propsEqual = <T extends object>(a: T, b: T) => !findChangedProperties(a, b);

/**
 * Turn react props into readable stores.
 *
 * @template T - The type of the props object.
 * @param props - the props
 * @returns the readable stores
 */
export const usePropsAsStore = <T extends object>(props?: Partial<T>): ReadableSignal<Partial<T>> => {
	const storeRef = useRef<WritableSignal<Partial<T>>>();
	if (!storeRef.current) {
		storeRef.current = writable({...props}, {equal: propsEqual});
	}
	useEffect(() => {
		storeRef.current!.set({...props});
	}, [props]);

	return useMemo(() => asReadable(storeRef.current!), [storeRef.current]);
};
