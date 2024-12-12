import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, computed, writable} from '@amadeus-it-group/tansu';
import {useEffect, useMemo, useRef, useState} from 'react';

export * from '@agnos-ui/core/utils/stores';

interface QueueItem {
	rerender: (value: Record<string, never>) => void;
	state: {notified: false | Record<string, never>; changed: boolean; hasEffect: boolean};
	obj: Record<string, never>;
}

let queue: QueueItem[] | undefined;

const processQueue = () => {
	if (queue) {
		try {
			for (let i = 0; i < queue.length; i++) {
				const {rerender, state, obj} = queue[i];
				if (state.notified === obj && state.hasEffect) {
					rerender(obj);
				}
			}
		} finally {
			queue = undefined;
		}
	}
};

const createOnStoreChange = (rerender: QueueItem['rerender'], internalState: QueueItem['state']) => () => {
	if (internalState.changed && !internalState.notified) {
		const obj = {};
		internalState.notified = obj;
		if (!queue) {
			queueMicrotask(processQueue);
			queue = [];
		}
		queue.push({rerender, state: internalState, obj});
	}
};

/**
 * Observe a readable store inside of a react component.
 *
 * @template T - The type of the value emitted by the ReadableSignal.
 * @param store$ - the readable store
 * @returns the observed value of the store
 */
export function useObservable<T>(store$: ReadableSignal<T>) {
	const [, rerender] = useState({});
	const internalState = useMemo(() => {
		const internalState = {
			hasEffect: false,
			changed: false,
			notified: false as false | Record<string, never>,
			store$: computed(() => {
				internalState.changed = true;
				return store$();
			}),
		};
		return internalState;
	}, [store$]);
	useEffect(() => {
		internalState.hasEffect = true;
		const unsubscribe = internalState.store$.subscribe(createOnStoreChange(rerender, internalState));
		return () => {
			internalState.hasEffect = false;
			unsubscribe();
		};
	}, [internalState]);
	const value = internalState.store$();
	internalState.changed = false;
	internalState.notified = false;
	return value;
}

const createComputed = <T>(store: ReadableSignal<T>, internalState: {changed: boolean}) => {
	let firstComputation = true;
	return computed(() => {
		if (firstComputation) {
			firstComputation = false;
		} else {
			internalState.changed = true;
		}
		return store();
	});
};

/**
 * Hook to create a proxy object that subscribes to observable stores and triggers re-renders on updates.
 *
 * @template State - The shape of the state object.
 * @param stores - An object where keys are suffixed with `$` and values are readable signals.
 * @returns - A proxy object that reflects the current state of the observables.
 *
 */
export function useObservablesProxy<State>(stores: {[K in keyof State & string as `${K}$`]: ReadableSignal<State[K]>}): State {
	interface StoreInfo<T> {
		store: ReadableSignal<T>;
		computedStore: ReadableSignal<T>;
		unsubscribe: (() => void) | null;
	}
	const [, rerender] = useState({});
	const internalState = useMemo(() => {
		const internalState = {
			hasEffect: false,
			notified: false as false | Record<string, never>,
			changed: false,
			storeInfo: {} as {
				[K in keyof State & string]: StoreInfo<State[K]>;
			},
			checkStoreSubscribed: (key: keyof State & string) => {
				const store = stores[`${key}$`] as ReadableSignal<State[typeof key]> | undefined;
				if (store) {
					let storeInfo = internalState.storeInfo[key];
					if (!storeInfo || storeInfo.store !== store) {
						const unsubscribe = storeInfo?.unsubscribe;
						storeInfo = {
							store,
							computedStore: createComputed(store, internalState),
							unsubscribe: null,
						};
						internalState.storeInfo[key] = storeInfo;
						unsubscribe?.();
					}
					if (internalState.hasEffect && !storeInfo.unsubscribe) {
						storeInfo.unsubscribe = storeInfo.computedStore.subscribe(onStoreChange);
					}
					return storeInfo.computedStore;
				}
				return undefined;
			},
			proxy: new Proxy(
				{},
				{
					get(_target, name) {
						const store = typeof name === 'string' ? internalState.checkStoreSubscribed(name as keyof State & string) : null;
						return store?.();
					},
				},
			),
		};
		const onStoreChange = createOnStoreChange(rerender, internalState);
		return internalState;
	}, []);
	internalState.notified = false;
	internalState.changed = false;
	useEffect(() => {
		internalState.hasEffect = true;
		for (const key of Object.keys(internalState.storeInfo) as (keyof State & string)[]) {
			internalState.checkStoreSubscribed(key);
		}
		return () => {
			internalState.hasEffect = false;
			for (const info of Object.values<StoreInfo<unknown>>(internalState.storeInfo)) {
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
	const storeRef = useRef<WritableSignal<Partial<T>>>(undefined);
	if (!storeRef.current) {
		storeRef.current = writable({...props}, {equal: propsEqual});
	} else {
		storeRef.current.set({...props});
	}
	return useMemo(() => asReadable(storeRef.current!), [storeRef.current]);
};
