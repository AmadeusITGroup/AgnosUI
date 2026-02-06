const e=`import { derived, computed, readable, equal, writable, asReadable } from "@amadeus-it-group/tansu";
import { noop } from "./utils/func.js";
const promisePending = { status: "pending" };
const isThenable = (value) => {
  const type = typeof value;
  return type === "object" && value !== null || type === "function" ? typeof value.then === "function" : false;
};
const createPromiseStateStore = (promise) => {
  const store = writable(promisePending);
  Promise.resolve(promise).then(
    (value) => store.set({ status: "fulfilled", value }),
    (reason) => store.set({ status: "rejected", reason })
  );
  return asReadable(store);
};
const promiseWeakMap = /* @__PURE__ */ new WeakMap();
const promiseStateStore = (value) => {
  if (!isThenable(value)) {
    return readable({ status: "fulfilled", value });
  }
  let response = promiseWeakMap.get(value);
  if (!response) {
    response = createPromiseStateStore(value);
    promiseWeakMap.set(value, response);
  }
  return response;
};
const promiseStateStoreEqual = (a, b) => Object.is(a, b) || a.status === b.status && (a.status !== "fulfilled" || equal(a.value, b.value)) && (a.status !== "rejected" || equal(a.reason, b.reason));
const promiseStoreToPromiseStateStore = (promiseStore$) => computed(() => promiseStateStore(promiseStore$())(), { equal: promiseStateStoreEqual });
const promiseStateStoreToValueStore = (store$, initialValue, equal2) => derived(
  store$,
  {
    derive: (state, set) => {
      if (state.status === "fulfilled") {
        set(state.value);
      }
    },
    equal: equal2
  },
  initialValue
);
const promiseStoreToValueStore = (promiseStore$, initialValue, equal2) => promiseStateStoreToValueStore(promiseStoreToPromiseStateStore(promiseStore$), initialValue, equal2);
const truthyValue = (value) => !!value;
const promiseFromStore = (store, condition = truthyValue) => {
  let resolve;
  const promise = new Promise((r) => resolve = r);
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
    }
  };
};
const promiseFromEvent = (element, event) => {
  let resolve;
  const promise = new Promise((r) => resolve = r);
  let unsubscribe = () => {
    element.removeEventListener(event, eventListener);
    unsubscribe = noop;
  };
  const eventListener = (event2) => {
    if (event2.target === element) {
      resolve(event2);
      unsubscribe();
    }
  };
  element.addEventListener(event, eventListener);
  return {
    promise,
    unsubscribe() {
      unsubscribe();
    }
  };
};
const promiseFromTimeout = (delay) => {
  let timeout;
  return {
    promise: new Promise((r) => {
      timeout = setTimeout(() => {
        timeout = void 0;
        r();
      }, delay);
    }),
    unsubscribe() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
    }
  };
};
const promiseWithResolve = () => {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return { promise, resolve };
};
export {
  promiseStoreToValueStore as a,
  promiseFromEvent as b,
  promiseFromTimeout as c,
  promiseWithResolve as d,
  promiseFromStore as p
};
`;export{e as default};
