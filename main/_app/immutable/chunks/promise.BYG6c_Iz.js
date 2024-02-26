const e=`import { asReadable, computed, derived, equal, readable, writable } from '@amadeus-it-group/tansu';
import { noop } from './func';
export const promisePending = { status: 'pending' };
const isThenable = (value) => {
    // cf https://tc39.es/ecma262/#sec-promise-resolve-functions
    const type = typeof value;
    return (type === 'object' && value !== null) || type === 'function' ? typeof value.then === 'function' : false;
};
const createPromiseStateStore = (promise) => {
    const store = writable(promisePending);
    Promise.resolve(promise).then((value) => store.set({ status: 'fulfilled', value }), (reason) => store.set({ status: 'rejected', reason }));
    return asReadable(store);
};
const promiseWeakMap = new WeakMap();
/**
 * Create a readable promise state store from a promise.
 *
 * The state of the returned store tracks the state of the promise and the resolved value or rejection reason.
 *
 * @param value - the promise
 * @returns the readable promise state store
 */
export const promiseStateStore = (value) => {
    if (!isThenable(value)) {
        return readable({ status: 'fulfilled', value: value });
    }
    let response = promiseWeakMap.get(value);
    if (!response) {
        response = createPromiseStateStore(value);
        promiseWeakMap.set(value, response);
    }
    return response;
};
const promiseStateStoreEqual = (a, b) => Object.is(a, b) ||
    (a.status === b.status &&
        (a.status !== 'fulfilled' || equal(a.value, b.value)) &&
        (a.status !== 'rejected' || equal(a.reason, b.reason)));
/**
 * Create a readable promise state store from a promise store.
 *
 * @param promiseStore$ - the promise store
 * @returns the readable promise state store
 */
export const promiseStoreToPromiseStateStore = (promiseStore$) => computed(() => promiseStateStore(promiseStore$())(), { equal: promiseStateStoreEqual });
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
export const promiseStateStoreToValueStore = (store$, initialValue, equal) => derived(store$, {
    derive: (state, set) => {
        if (state.status === 'fulfilled') {
            set(state.value);
        }
    },
    equal,
}, initialValue);
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
export const promiseStoreToValueStore = (promiseStore$, initialValue, equal) => promiseStateStoreToValueStore(promiseStoreToPromiseStateStore(promiseStore$), initialValue, equal);
const truthyValue = (value) => !!value;
/**
 * Create a promise from a readable store and a fulfilled condition function.
 *
 * The promise is fulfilled when the state of the store respects the provided condition function.
 *
 * @param store - the readable store
 * @param condition - the condition function
 * @returns the promise and an unsubscribe function
 */
export const promiseFromStore = (store, condition = truthyValue) => {
    let resolve;
    const promise = new Promise((r) => (resolve = r));
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
export const promiseFromEvent = (element, event) => {
    let resolve;
    const promise = new Promise((r) => (resolve = r));
    let unsubscribe = () => {
        element.removeEventListener(event, eventListener);
        unsubscribe = noop;
    };
    const eventListener = (event) => {
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
export const promiseFromTimeout = (delay) => {
    let timeout;
    return {
        promise: new Promise((r) => {
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
    let resolve;
    const promise = new Promise((r) => {
        resolve = r;
    });
    return { promise, resolve: resolve };
};
`;export{e as default};
