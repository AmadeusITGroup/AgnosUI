const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
export interface PromisePendingResult {
    /** Pending status */
    status: 'pending';
}
export declare const promisePending: PromisePendingResult;
export type PromiseState<T> = PromiseFulfilledResult<T> | PromiseRejectedResult | PromisePendingResult;
/**
 * Create a readable promise state store from a promise.
 *
 * The state of the returned store tracks the state of the promise and the resolved value or rejection reason.
 *
 * @param value - the promise
 * @returns the readable promise state store
 */
export declare const promiseStateStore: <T>(value: T) => ReadableSignal<Readonly<PromiseState<Awaited<T>>>>;
/**
 * Create a readable promise state store from a promise store.
 *
 * @param promiseStore$ - the promise store
 * @returns the readable promise state store
 */
export declare const promiseStoreToPromiseStateStore: <T>(promiseStore$: ReadableSignal<T>) => ReadableSignal<PromiseState<Awaited<T>>>;
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
export declare const promiseStateStoreToValueStore: <T>(store$: ReadableSignal<PromiseState<T>>, initialValue: T, equal?: (a: T, b: T) => boolean) => ReadableSignal<T>;
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
export declare const promiseStoreToValueStore: <T>(promiseStore$: ReadableSignal<T>, initialValue: Awaited<T>, equal?: (a: Awaited<T>, b: Awaited<T>) => boolean) => ReadableSignal<Awaited<T>>;
/**
 * Create a promise from a readable store and a fulfilled condition function.
 *
 * The promise is fulfilled when the state of the store respects the provided condition function.
 *
 * @param store - the readable store
 * @param condition - the condition function
 * @returns the promise and an unsubscribe function
 */
export declare const promiseFromStore: <T>(store: ReadableSignal<T>, condition?: (value: T) => boolean) => {
    promise: Promise<T>;
    unsubscribe(): void;
};
/**
 * Create a promise from an HTML element event.
 *
 * @param element - the event target
 * @param event - the event to listen to
 * @returns the promise and an unsubscribe function
 */
export declare const promiseFromEvent: (element: EventTarget, event: string) => {
    promise: Promise<Event>;
    unsubscribe(): void;
};
/**
 * Create a promise that resolves once a timeout has been reached.
 *
 * @param delay - the delay in milli seconds
 * @returns a promise and an unsubscribe function
 */
export declare const promiseFromTimeout: (delay: number) => {
    promise: Promise<void>;
    unsubscribe(): void;
};
/**
 * Utility method to create a promise with resolve
 * @returns a promise with resolve
 */
export declare const promiseWithResolve: () => {
    promise: Promise<void>;
    resolve: (value: void | Promise<void>) => void;
};
`;export{e as default};
