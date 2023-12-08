import {findChangedProperties} from '@agnos-ui/core/utils/stores';
import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, writable} from '@amadeus-it-group/tansu';
import {useEffect, useMemo, useRef, useState} from 'react';

export * from '@agnos-ui/core/utils/stores';

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

const propsEqual = <T extends object>(a: T, b: T) => !findChangedProperties(a, b);
export const usePropsAsStore = <T extends object>(props?: Partial<T>): ReadableSignal<Partial<T>> => {
	const storeRef = useRef<WritableSignal<Partial<T>>>();
	if (!storeRef.current) {
		storeRef.current = writable({...props}, {equal: propsEqual});
	}
	useEffect(() => {
		storeRef.current!.set({...props});
	}, [props]);

	return useMemo(() => asReadable(storeRef.current!), [storeRef.current!]);
};
