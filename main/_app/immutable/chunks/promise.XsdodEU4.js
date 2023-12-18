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
export const promiseStoreToPromiseStateStore = (promiseStore$) => computed(() => promiseStateStore(promiseStore$())(), { equal: promiseStateStoreEqual });
export const promiseStateStoreToValueStore = (store$, initialValue, equal) => derived(store$, {
    derive: (state, set) => {
        if (state.status === 'fulfilled') {
            set(state.value);
        }
    },
    equal,
}, initialValue);
export const promiseStoreToValueStore = (promiseStore$, initialValue, equal) => promiseStateStoreToValueStore(promiseStoreToPromiseStateStore(promiseStore$), initialValue, equal);
const truthyValue = (value) => !!value;
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
