import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asReadable, computed, derived, readable, writable} from '@amadeus-it-group/tansu';
import {noop} from './func';

export interface PromisePendingResult {
	/** Pending status */
	status: 'pending';
}
export const promisePending: PromisePendingResult = {status: 'pending'};

export type PromiseState<T> = PromiseFulfilledResult<T> | PromiseRejectedResult | PromisePendingResult;

const isThenable = (value: any): value is PromiseLike<any> => {
	// cf https://tc39.es/ecma262/#sec-promise-resolve-functions
	const type = typeof value;
	return (type === 'object' && value !== null) || type === 'function' ? typeof value.then === 'function' : false;
};

const createPromiseStateStore = <T>(promise: PromiseLike<T>): ReadableSignal<PromiseState<T>> => {
	const store = writable(promisePending as PromiseState<T>);
	Promise.resolve(promise).then(
		(value) => store.set({status: 'fulfilled', value}),
		(reason) => store.set({status: 'rejected', reason}),
	);
	return asReadable(store);
};

const promiseWeakMap = new WeakMap<PromiseLike<any>, ReadableSignal<PromiseState<any>>>();
export const promiseStateStore = <T>(value: T): ReadableSignal<Readonly<PromiseState<Awaited<T>>>> => {
	if (!isThenable(value)) {
		return readable({status: 'fulfilled', value: value as Awaited<T>});
	}
	let response = promiseWeakMap.get(value);
	if (!response) {
		response = createPromiseStateStore(value);
		promiseWeakMap.set(value, response);
	}
	return response;
};

// same equal as in tansu:
const equal = <T>(a: T, b: T): boolean => Object.is(a, b) && (!a || typeof a !== 'object') && typeof a !== 'function';

const promiseStateStoreEqual = <T>(a: PromiseState<T>, b: PromiseState<T>) =>
	Object.is(a, b) ||
	(a.status === b.status &&
		(a.status !== 'fulfilled' || equal(a.value, (b as PromiseFulfilledResult<T>).value)) &&
		(a.status !== 'rejected' || equal(a.reason, (b as PromiseRejectedResult).reason)));

export const promiseStoreToPromiseStateStore = <T>(promiseStore$: ReadableSignal<T>): ReadableSignal<PromiseState<Awaited<T>>> =>
	computed(() => promiseStateStore(promiseStore$())(), {equal: promiseStateStoreEqual});

export const promiseStateStoreToValueStore = <T>(
	store$: ReadableSignal<PromiseState<T>>,
	initialValue: T,
	equal?: (a: T, b: T) => boolean,
): ReadableSignal<T> =>
	derived(
		store$,
		{
			derive: (state, set) => {
				if (state.status === 'fulfilled') {
					set(state.value);
				}
			},
			equal,
		},
		initialValue,
	);

export const promiseStoreToValueStore = <T>(
	promiseStore$: ReadableSignal<T>,
	initialValue: Awaited<T>,
	equal?: (a: Awaited<T>, b: Awaited<T>) => boolean,
): ReadableSignal<Awaited<T>> => promiseStateStoreToValueStore(promiseStoreToPromiseStateStore(promiseStore$), initialValue, equal);

const truthyValue = (value: unknown) => !!value;

export const promiseFromStore = <T>(store: ReadableSignal<T>, condition: (value: T) => boolean = truthyValue) => {
	let resolve: (value: T) => void;
	const promise = new Promise<T>((r) => (resolve = r));
	let unsubscribe = () => {
		storeUnsubscribe();
		unsubscribe = noop;
	};
	let storeUnsubscribe = noop;
	storeUnsubscribe = store.subscribe((value) => {
		if (condition(value)) {
			resolve(value);
			unsubscribe();
		}
	});
	if (unsubscribe === noop) {
		storeUnsubscribe();
	}
	return {
		promise,
		unsubscribe() {
			unsubscribe();
		},
	};
};

export const promiseFromEvent = (element: EventTarget, event: string) => {
	let resolve: (event: Event) => void;
	const promise = new Promise<Event>((r) => (resolve = r));
	let unsubscribe = () => {
		element.removeEventListener(event, eventListener);
		unsubscribe = noop;
	};
	const eventListener = (event: Event) => {
		if (event.target === element) {
			resolve(event);
			unsubscribe();
		}
	};
	element.addEventListener(event, eventListener);
	return {
		promise,
		unsubscribe() {
			unsubscribe();
		},
	};
};

export const promiseFromTimeout = (delay: number) => {
	let timeout: any;
	return {
		promise: new Promise<void>((r) => {
			timeout = setTimeout(() => {
				timeout = undefined;
				r();
			}, delay);
		}),
		unsubscribe() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = undefined;
			}
		},
	};
};

/**
 * Utility method to create a promise with resolve
 * @returns a promise with resolve
 */
export const promiseWithResolve = () => {
	let resolve: (value: void | Promise<void>) => void;
	const promise = new Promise<void>((r) => {
		resolve = r;
	});
	return {promise, resolve: resolve!};
};
