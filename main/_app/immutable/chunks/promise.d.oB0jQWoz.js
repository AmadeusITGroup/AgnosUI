const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
export interface PromisePendingResult {
    /** Pending status */
    status: 'pending';
}
export declare const promisePending: PromisePendingResult;
export type PromiseState<T> = PromiseFulfilledResult<T> | PromiseRejectedResult | PromisePendingResult;
export declare const promiseStateStore: <T>(value: T) => ReadableSignal<Readonly<PromiseState<Awaited<T>>>>;
export declare const promiseStoreToPromiseStateStore: <T>(promiseStore$: ReadableSignal<T>) => ReadableSignal<PromiseState<Awaited<T>>>;
export declare const promiseStateStoreToValueStore: <T>(store$: ReadableSignal<PromiseState<T>>, initialValue: T, equal?: ((a: T, b: T) => boolean) | undefined) => ReadableSignal<T>;
export declare const promiseStoreToValueStore: <T>(promiseStore$: ReadableSignal<T>, initialValue: Awaited<T>, equal?: ((a: Awaited<T>, b: Awaited<T>) => boolean) | undefined) => ReadableSignal<Awaited<T>>;
export declare const promiseFromStore: <T>(store: ReadableSignal<T>, condition?: (value: T) => boolean) => {
    promise: Promise<T>;
    unsubscribe(): void;
};
export declare const promiseFromEvent: (element: EventTarget, event: string) => {
    promise: Promise<Event>;
    unsubscribe(): void;
};
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
