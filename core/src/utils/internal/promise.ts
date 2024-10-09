import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {asReadable, computed, derived, equal, readable, writable} from '@amadeus-it-group/tansu';
import {noop} from './func';

/**
 * Represents the result of a promise that is still pending.
 */
export interface PromisePendingResult {
	/** Pending status */
	status: 'pending';
}
/**
 * A constant representing a pending promise result.
 */
export const promisePending: PromisePendingResult = {status: 'pending'};

/**
 * Represents the state of a promise, which can be either fulfilled, rejected, or pending.
 */
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

/**
 * Create a readable promise state store from a promise.
 *
 * The state of the returned store tracks the state of the promise and the resolved value or rejection reason.
 *
 * @param value - the promise
 * @returns the readable promise state store
 */
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

const promiseStateStoreEqual = <T>(a: PromiseState<T>, b: PromiseState<T>) =>
	Object.is(a, b) ||
	(a.status === b.status &&
		(a.status !== 'fulfilled' || equal(a.value, (b as PromiseFulfilledResult<T>).value)) &&
		(a.status !== 'rejected' || equal(a.reason, (b as PromiseRejectedResult).reason)));

/**
 * Create a readable promise state store from a promise store.
 *
 * @param promiseStore$ - the promise store
 * @returns the readable promise state store
 */
export const promiseStoreToPromiseStateStore = <T>(promiseStore$: ReadableSignal<T>): ReadableSignal<PromiseState<Awaited<T>>> =>
	computed(() => promiseStateStore(promiseStore$())(), {equal: promiseStateStoreEqual});

/**
 * Create a value store from a promise state store
 *
 * The returned value store is only updated if the promise is fulfilled.
 *
 * @param store$ - the promise state store
 * @param initialValue - the initial value of the returned value store
 * @param equal - an equal function to compare values
 * @returns the value store
 */
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

/**
 * Create a value store from a promise store
 *
 * The returned value store is only updated if the promise is fulfilled.
 *
 * @param promiseStore$ - the promise store
 * @param initialValue - the initial value of the returned value store
 * @param equal - an equal function to compare values
 * @returns the value store
 */
export const promiseStoreToValueStore = <T>(
	promiseStore$: ReadableSignal<T>,
	initialValue: Awaited<T>,
	equal?: (a: Awaited<T>, b: Awaited<T>) => boolean,
): ReadableSignal<Awaited<T>> => promiseStateStoreToValueStore(promiseStoreToPromiseStateStore(promiseStore$), initialValue, equal);

const truthyValue = (value: unknown) => !!value;

/**
 * Create a promise from a readable store and a fulfilled condition function.
 *
 * The promise is fulfilled when the state of the store respects the provided condition function.
 *
 * @param store - the readable store
 * @param condition - the condition function
 * @returns the promise and an unsubscribe function
 */
export const promiseFromStore = <T>(
	store: ReadableSignal<T>,
	condition: (value: T) => boolean = truthyValue,
): {
	promise: Promise<T>;
	unsubscribe(): void;
} => {
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

/**
 * Create a promise from an HTML element event.
 *
 * @param element - the event target
 * @param event - the event to listen to
 * @returns the promise and an unsubscribe function
 */
export const promiseFromEvent = (
	element: EventTarget,
	event: string,
): {
	promise: Promise<Event>;
	unsubscribe(): void;
} => {
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

/**
 * Create a promise that resolves once a timeout has been reached.
 *
 * @param delay - the delay in milli seconds
 * @returns a promise and an unsubscribe function
 */
export const promiseFromTimeout = (
	delay: number,
): {
	promise: Promise<void>;
	unsubscribe(): void;
} => {
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
export const promiseWithResolve = (): {
	promise: Promise<void>;
	resolve: (value: void | Promise<void>) => void;
} => {
	let resolve: (value: void | Promise<void>) => void;
	const promise = new Promise<void>((r) => {
		resolve = r;
	});
	return {promise, resolve: resolve!};
};
