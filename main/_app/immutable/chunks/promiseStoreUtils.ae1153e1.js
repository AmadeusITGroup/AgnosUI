const e=`import { asReadable, computed, derived, readable, writable } from '@amadeus-it-group/tansu';
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
// same equal as in tansu:
const equal = (a, b) => Object.is(a, b) && (!a || typeof a !== 'object') && typeof a !== 'function';
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
`;export{e as default};
