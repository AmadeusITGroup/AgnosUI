const e=`var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _subscribers, _cleanupFn, _subscribersPaused, _valueIndex, _value, _equalCache, _oldSubscriptions, _Store_instances, start_fn, stop_fn, notifySubscriber_fn, _computing, _skipCallCompute, _versionIndex, _subscriptions, _reactiveContext, _ComputedStore_instances, createSubscription_fn, getSubscriptionValue_fn, callCompute_fn, isPending_fn, hasChange_fn;
import { createTransition } from "@agnos-ui/core/services/transitions/baseTransitions";
import { writablesForProps, stateStores } from "@agnos-ui/core/utils/stores";
import { bindDirectiveNoArg } from "@agnos-ui/core/utils/directive";
import { typeBoolean } from "@agnos-ui/core/utils/writables";
import { a as collapseHorizontalTransition, c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
var _a;
const symbolObservable = typeof Symbol === "function" && Symbol.observable || "@@observable";
const oldSubscription = Symbol();
const noop = () => {
};
const noopUnsubscribe = () => {
};
noopUnsubscribe.unsubscribe = noopUnsubscribe;
const bind = (object, fnName) => {
  const fn = object ? object[fnName] : null;
  return typeof fn === "function" ? fn.bind(object) : noop;
};
const toSubscriberObject = (subscriber) => ({
  next: typeof subscriber === "function" ? subscriber.bind(null) : bind(subscriber, "next"),
  pause: bind(subscriber, "pause"),
  resume: bind(subscriber, "resume"),
  _value: void 0,
  _valueIndex: 0,
  _paused: false
});
const returnThis = function() {
  return this;
};
const normalizeUnsubscribe = (unsubscribe) => {
  if (!unsubscribe) {
    return noopUnsubscribe;
  }
  if (unsubscribe.unsubscribe === unsubscribe) {
    return unsubscribe;
  }
  const res = typeof unsubscribe === "function" ? () => unsubscribe() : () => unsubscribe.unsubscribe();
  res.unsubscribe = res;
  return res;
};
const normalizedSubscribe = /* @__PURE__ */ new WeakSet();
const normalizeSubscribe = (store) => {
  let res = store.subscribe;
  if (!normalizedSubscribe.has(res)) {
    res = (...args) => normalizeUnsubscribe(store.subscribe(...args));
    normalizedSubscribe.add(res);
  }
  return res;
};
const getNormalizedSubscribe = (input) => {
  const store = "subscribe" in input ? input : input[symbolObservable]();
  return normalizeSubscribe(store);
};
const getValue = (subscribe) => {
  let value;
  subscribe((v) => value = v)();
  return value;
};
function asReadable(store, extraProp) {
  const subscribe = getNormalizedSubscribe(store);
  const res = Object.assign(() => get(res), extraProp, {
    subscribe,
    [symbolObservable]: returnThis
  });
  return res;
}
function asWritable(store, setOrExtraProps) {
  return asReadable(store, {
    ...setOrExtraProps,
    set: noop,
    update: noop
  });
}
const triggerUpdate = Symbol();
const queueProcess = Symbol();
let willProcessQueue = false;
const queue = /* @__PURE__ */ new Set();
const MAX_STORE_PROCESSING_IN_QUEUE = 1e3;
const checkIterations = (iterations) => {
  if (iterations > MAX_STORE_PROCESSING_IN_QUEUE) {
    throw new Error("reached maximum number of store changes in one shot");
  }
};
const batch = (fn) => {
  const needsProcessQueue = !willProcessQueue;
  if (needsProcessQueue) {
    willProcessQueue = true;
  }
  try {
    return fn();
  } finally {
    if (needsProcessQueue) {
      try {
        const storePasses = /* @__PURE__ */ new Map();
        for (const store of queue) {
          const storeCount = storePasses.get(store) ?? 0;
          checkIterations(storeCount);
          storePasses.set(store, storeCount + 1);
          queue.delete(store);
          store[queueProcess]();
        }
      } finally {
        queue.clear();
        willProcessQueue = false;
      }
    }
  }
};
const defaultReactiveContext = (store) => getValue(getNormalizedSubscribe(store));
let reactiveContext = defaultReactiveContext;
const get = (store) => reactiveContext(store);
const createEqualCache = (valueIndex) => ({
  [valueIndex]: true,
  // the subscriber already has the last value
  [valueIndex - 1]: false,
  // the subscriber had the previous value,
  // which is known to be different because equal is called in the set method
  0: false
  // the subscriber never received any value
});
const skipEqualInSet = Symbol();
const equal = (a, b) => Object.is(a, b) && (!a || typeof a !== "object") && typeof a !== "function";
class Store {
  /**
   *
   * @param value - Initial value of the store
   */
  constructor(value) {
    __privateAdd(this, _Store_instances);
    __privateAdd(this, _subscribers);
    __privateAdd(this, _cleanupFn);
    __privateAdd(this, _subscribersPaused);
    __privateAdd(this, _valueIndex);
    __privateAdd(this, _value);
    __privateAdd(this, _equalCache);
    __privateAdd(this, _oldSubscriptions);
    __privateSet(this, _subscribers, /* @__PURE__ */ new Set());
    __privateSet(this, _cleanupFn, null);
    __privateSet(this, _subscribersPaused, false);
    __privateSet(this, _valueIndex, 1);
    __privateSet(this, _equalCache, createEqualCache(1));
    __privateSet(this, _oldSubscriptions, /* @__PURE__ */ new WeakMap());
    this[_a] = false;
    __privateSet(this, _value, value);
  }
  [(_a = skipEqualInSet, queueProcess)]() {
    const valueIndex = __privateGet(this, _valueIndex);
    for (const subscriber of [...__privateGet(this, _subscribers)]) {
      if (__privateGet(this, _subscribersPaused) || __privateGet(this, _valueIndex) !== valueIndex) {
        return;
      }
      if (subscriber._valueIndex === 0) {
        continue;
      }
      __privateMethod(this, _Store_instances, notifySubscriber_fn).call(this, subscriber);
    }
  }
  /** @internal */
  [triggerUpdate]() {
  }
  /**
   * Compares two values and returns true if they are equal.
   * It is called when setting a new value to avoid doing anything
   * (such as notifying subscribers) if the value did not change.
   * The default logic is to return false if \`a\` is a function or an object,
   * or if \`a\` and \`b\` are different according to \`Object.is\`.
   * This method can be overridden by subclasses to change the logic.
   *
   * @remarks
   * For backward compatibility, the default implementation calls the
   * deprecated {@link Store.notEqual} method and returns the negation
   * of its return value.
   *
   * @param a - First value to compare.
   * @param b - Second value to compare.
   * @returns true if a and b are considered equal.
   */
  equal(a, b) {
    return !this.notEqual(a, b);
  }
  /**
   * Compares two values and returns true if they are different.
   * It is called when setting a new value to avoid doing anything
   * (such as notifying subscribers) if the value did not change.
   * The default logic is to return true if \`a\` is a function or an object,
   * or if \`a\` and \`b\` are different according to \`Object.is\`.
   * This method can be overridden by subclasses to change the logic.
   *
   * @remarks
   * This method is only called by the default implementation of
   * {@link Store.equal}, so overriding {@link Store.equal} takes
   * precedence over overriding notEqual.
   *
   * @deprecated Use {@link Store.equal} instead
   * @param a - First value to compare.
   * @param b - Second value to compare.
   * @returns true if a and b are considered different.
   */
  notEqual(a, b) {
    return !equal(a, b);
  }
  /**
   * Puts the store in the paused state, which means it will soon update its value.
   *
   * @remarks
   *
   * The paused state prevents derived or computed stores (both direct and transitive) from recomputing their value
   * using the current value of this store.
   *
   * There are two ways to put a store back into its normal state: calling {@link Store.set | set} to set a new
   * value or calling {@link Store.resumeSubscribers | resumeSubscribers} to declare that finally the value does not need to be
   * changed.
   *
   * Note that a store should not stay in the paused state for a long time, and most of the time
   * it is not needed to call pauseSubscribers or resumeSubscribers manually.
   *
   */
  pauseSubscribers() {
    if (!__privateGet(this, _subscribersPaused)) {
      __privateSet(this, _subscribersPaused, true);
      queue.delete(this);
      for (const subscriber of [...__privateGet(this, _subscribers)]) {
        if (subscriber._valueIndex === 0 || subscriber._paused) {
          continue;
        }
        subscriber._paused = true;
        subscriber.pause();
      }
    }
  }
  /**
   * Puts the store back to the normal state without changing its value, if it was in the paused state
   * (cf {@link Store.pauseSubscribers | pauseSubscribers}).
   *
   * @remarks
   *
   * Does nothing if the store was not in the paused state.
   */
  resumeSubscribers() {
    if (__privateGet(this, _subscribersPaused)) {
      __privateSet(this, _subscribersPaused, false);
      batch(() => {
        queue.add(this);
      });
    }
  }
  /**
   * Replaces store's state with the provided value.
   * Equivalent of {@link Writable.set}, but internal to the store.
   *
   * @param value - value to be used as the new state of a store.
   */
  set(value) {
    const skipEqual = this[skipEqualInSet];
    if (skipEqual || !this.equal(__privateGet(this, _value), value)) {
      const valueIndex = __privateGet(this, _valueIndex) + 1;
      __privateSet(this, _valueIndex, valueIndex);
      __privateSet(this, _value, value);
      __privateSet(this, _equalCache, createEqualCache(valueIndex));
      if (skipEqual) {
        delete __privateGet(this, _equalCache)[valueIndex - 1];
      }
      this.pauseSubscribers();
    }
    this.resumeSubscribers();
  }
  /**
   * Updates store's state by using an {@link Updater} function.
   * Equivalent of {@link Writable.update}, but internal to the store.
   *
   * @param updater - a function that takes the current state as an argument and returns the new state.
   */
  update(updater) {
    this.set(updater(__privateGet(this, _value)));
  }
  /**
   * Function called when the number of subscribers changes from 0 to 1
   * (but not called when the number of subscribers changes from 1 to 2, ...).
   * If a function is returned, it will be called when the number of subscribers changes from 1 to 0.
   *
   * @example
   *
   * \`\`\`typescript
   * class CustomStore extends Store {
   *    onUse() {
   *      console.log('Got the fist subscriber!');
   *      return () => {
   *        console.log('All subscribers are gone...');
   *      };
   *    }
   * }
   *
   * const store = new CustomStore();
   * const unsubscribe1 = store.subscribe(() => {}); // logs 'Got the fist subscriber!'
   * const unsubscribe2 = store.subscribe(() => {}); // nothing is logged as we've got one subscriber already
   * unsubscribe1(); // nothing is logged as we still have one subscriber
   * unsubscribe2(); // logs 'All subscribers are gone...'
   * \`\`\`
   */
  onUse() {
  }
  /**
   * Default Implementation of the {@link SubscribableStore.subscribe}, not meant to be overridden.
   * @param subscriber - see {@link SubscribableStore.subscribe}
   */
  subscribe(subscriber) {
    const subscriberObject = toSubscriberObject(subscriber);
    const oldSubscriptionParam = subscriber == null ? void 0 : subscriber[oldSubscription];
    if (oldSubscriptionParam) {
      const oldSubscriberObject = __privateGet(this, _oldSubscriptions).get(oldSubscriptionParam);
      if (oldSubscriberObject) {
        subscriberObject._value = oldSubscriberObject._value;
        subscriberObject._valueIndex = oldSubscriberObject._valueIndex;
      }
    }
    __privateGet(this, _subscribers).add(subscriberObject);
    batch(() => {
      if (__privateGet(this, _subscribers).size == 1) {
        __privateMethod(this, _Store_instances, start_fn).call(this);
      } else {
        this[triggerUpdate]();
      }
    });
    __privateMethod(this, _Store_instances, notifySubscriber_fn).call(this, subscriberObject);
    const unsubscribe = () => {
      const removed = __privateGet(this, _subscribers).delete(subscriberObject);
      subscriberObject.next = noop;
      subscriberObject.pause = noop;
      subscriberObject.resume = noop;
      if (removed) {
        __privateGet(this, _oldSubscriptions).set(unsubscribe, subscriberObject);
        if (__privateGet(this, _subscribers).size === 0) {
          __privateMethod(this, _Store_instances, stop_fn).call(this);
        }
      }
    };
    unsubscribe[triggerUpdate] = () => {
      this[triggerUpdate]();
      __privateMethod(this, _Store_instances, notifySubscriber_fn).call(this, subscriberObject);
    };
    unsubscribe.unsubscribe = unsubscribe;
    return unsubscribe;
  }
  [symbolObservable]() {
    return this;
  }
}
_subscribers = new WeakMap();
_cleanupFn = new WeakMap();
_subscribersPaused = new WeakMap();
_valueIndex = new WeakMap();
_value = new WeakMap();
_equalCache = new WeakMap();
_oldSubscriptions = new WeakMap();
_Store_instances = new WeakSet();
start_fn = function() {
  __privateSet(this, _cleanupFn, normalizeUnsubscribe(this.onUse()));
};
stop_fn = function() {
  const cleanupFn = __privateGet(this, _cleanupFn);
  if (cleanupFn) {
    __privateSet(this, _cleanupFn, null);
    cleanupFn();
  }
};
notifySubscriber_fn = function(subscriber) {
  const equalCache = __privateGet(this, _equalCache);
  const valueIndex = __privateGet(this, _valueIndex);
  const value = __privateGet(this, _value);
  let equal2 = equalCache[subscriber._valueIndex];
  if (equal2 == null) {
    equal2 = !!this.equal(subscriber._value, value);
    equalCache[subscriber._valueIndex] = equal2;
  }
  subscriber._valueIndex = valueIndex;
  if (!equal2) {
    subscriber._value = value;
    subscriber._paused = false;
    subscriber.next(value);
  } else if (!__privateGet(this, _subscribersPaused) && subscriber._paused) {
    subscriber._paused = false;
    subscriber.resume();
  }
};
const applyStoreOptions = (store, options) => {
  const { onUse, equal: equal2, notEqual } = options;
  if (onUse) {
    store.onUse = function() {
      const setFn = (v) => this.set(v);
      setFn.set = setFn;
      setFn.update = (updater) => this.update(updater);
      return onUse(setFn);
    };
  }
  if (equal2) {
    store.equal = function(a, b) {
      return equal2(a, b);
    };
  }
  if (notEqual) {
    store.notEqual = function(a, b) {
      return notEqual(a, b);
    };
  }
  return store;
};
const untrack = (fn) => {
  const previousReactiveContext = reactiveContext;
  try {
    reactiveContext = defaultReactiveContext;
    return fn();
  } finally {
    reactiveContext = previousReactiveContext;
  }
};
const callUnsubscribe = ({ unsubscribe }) => unsubscribe();
const callResubscribe = ({ resubscribe }) => resubscribe();
class ComputedStore extends Store {
  constructor() {
    super(void 0);
    __privateAdd(this, _ComputedStore_instances);
    __privateAdd(this, _computing, false);
    __privateAdd(this, _skipCallCompute, false);
    __privateAdd(this, _versionIndex, 0);
    __privateAdd(this, _subscriptions, /* @__PURE__ */ new Map());
    __privateAdd(this, _reactiveContext, (storeInput) => untrack(() => __privateMethod(this, _ComputedStore_instances, getSubscriptionValue_fn).call(this, storeInput)));
    this[skipEqualInSet] = true;
  }
  resumeSubscribers() {
    if (!__privateMethod(this, _ComputedStore_instances, isPending_fn).call(this)) {
      super.resumeSubscribers();
    }
  }
  /** @internal */
  [triggerUpdate]() {
    var _a2;
    if (__privateGet(this, _computing)) {
      throw new Error("recursive computed");
    }
    let iterations = 0;
    while (__privateMethod(this, _ComputedStore_instances, isPending_fn).call(this)) {
      checkIterations(++iterations);
      __privateSet(this, _skipCallCompute, true);
      try {
        for (const [, { pending, unsubscribe }] of __privateGet(this, _subscriptions)) {
          if (pending) {
            (_a2 = unsubscribe[triggerUpdate]) == null ? void 0 : _a2.call(unsubscribe);
          }
        }
      } finally {
        __privateSet(this, _skipCallCompute, false);
      }
      if (__privateMethod(this, _ComputedStore_instances, isPending_fn).call(this)) {
        break;
      }
      __privateMethod(this, _ComputedStore_instances, callCompute_fn).call(this);
    }
  }
  onUse() {
    __privateMethod(this, _ComputedStore_instances, callCompute_fn).call(this, true);
    this[triggerUpdate]();
    return () => __privateGet(this, _subscriptions).forEach(callUnsubscribe);
  }
}
_computing = new WeakMap();
_skipCallCompute = new WeakMap();
_versionIndex = new WeakMap();
_subscriptions = new WeakMap();
_reactiveContext = new WeakMap();
_ComputedStore_instances = new WeakSet();
createSubscription_fn = function(subscribe) {
  const res = {
    versionIndex: __privateGet(this, _versionIndex),
    unsubscribe: noop,
    resubscribe: noop,
    pending: false,
    usedValueIndex: 0,
    value: void 0,
    valueIndex: 0
  };
  const subscriber = (value) => {
    res.value = value;
    res.valueIndex++;
    res.pending = false;
    if (!__privateGet(this, _skipCallCompute) && !__privateMethod(this, _ComputedStore_instances, isPending_fn).call(this)) {
      batch(() => __privateMethod(this, _ComputedStore_instances, callCompute_fn).call(this));
    }
  };
  subscriber.next = subscriber;
  subscriber.pause = () => {
    res.pending = true;
    this.pauseSubscribers();
  };
  subscriber.resume = () => {
    res.pending = false;
    if (!__privateGet(this, _skipCallCompute) && !__privateMethod(this, _ComputedStore_instances, isPending_fn).call(this)) {
      batch(() => __privateMethod(this, _ComputedStore_instances, callCompute_fn).call(this));
    }
  };
  res.resubscribe = () => {
    res.unsubscribe = subscribe(subscriber);
    subscriber[oldSubscription] = res.unsubscribe;
  };
  res.resubscribe();
  return res;
};
getSubscriptionValue_fn = function(storeInput) {
  var _a2, _b;
  let res = __privateGet(this, _subscriptions).get(storeInput);
  if (res) {
    res.versionIndex = __privateGet(this, _versionIndex);
    (_b = (_a2 = res.unsubscribe)[triggerUpdate]) == null ? void 0 : _b.call(_a2);
  } else {
    res = __privateMethod(this, _ComputedStore_instances, createSubscription_fn).call(this, getNormalizedSubscribe(storeInput));
    __privateGet(this, _subscriptions).set(storeInput, res);
  }
  res.usedValueIndex = res.valueIndex;
  return res.value;
};
callCompute_fn = function(resubscribe = false) {
  __privateSet(this, _computing, true);
  __privateSet(this, _skipCallCompute, true);
  try {
    if (__privateGet(this, _versionIndex) > 0) {
      if (resubscribe) {
        __privateGet(this, _subscriptions).forEach(callResubscribe);
      }
      if (!__privateMethod(this, _ComputedStore_instances, hasChange_fn).call(this)) {
        this.resumeSubscribers();
        return;
      }
    }
    __privateWrapper(this, _versionIndex)._++;
    const versionIndex = __privateGet(this, _versionIndex);
    const previousReactiveContext = reactiveContext;
    let value;
    try {
      reactiveContext = __privateGet(this, _reactiveContext);
      value = this.compute();
    } finally {
      reactiveContext = previousReactiveContext;
    }
    this.set(value);
    this[skipEqualInSet] = false;
    for (const [store, info] of __privateGet(this, _subscriptions)) {
      if (info.versionIndex !== versionIndex) {
        __privateGet(this, _subscriptions).delete(store);
        info.unsubscribe();
      }
    }
  } finally {
    __privateSet(this, _skipCallCompute, false);
    __privateSet(this, _computing, false);
  }
};
isPending_fn = function() {
  for (const [, { pending }] of __privateGet(this, _subscriptions)) {
    if (pending) {
      return true;
    }
  }
  return false;
};
hasChange_fn = function() {
  for (const [, { valueIndex, usedValueIndex }] of __privateGet(this, _subscriptions)) {
    if (valueIndex != usedValueIndex) {
      return true;
    }
  }
  return false;
};
function computed(fn, options = {}) {
  const Computed = class extends ComputedStore {
    compute() {
      return fn();
    }
  };
  return asReadable(applyStoreOptions(new Computed(), {
    ...options,
    onUse: void 0
  }));
}
const defaultCollapseConfig = {
  visible: true,
  horizontal: false,
  onVisibleChange: () => {
  },
  onShown: () => {
  },
  onHidden: () => {
  },
  animated: true,
  animatedOnInit: false,
  className: ""
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  horizontal: typeBoolean
};
function createCollapse(config) {
  const [{ animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, horizontal$, ...stateProps }, patch] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const currentTransitionFn$ = asWritable(computed(() => horizontal$() ? collapseHorizontalTransition : collapseVerticalTransition));
  const transition = createTransition({
    props: {
      transition: currentTransitionFn$,
      visible: requestedVisible$,
      animated: animated$,
      animatedOnInit: animatedOnInit$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const visible$ = transition.stores.visible$;
  const hidden$ = transition.stores.hidden$;
  return {
    ...stateStores({ ...stateProps, visible$, hidden$, horizontal$ }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide,
      toggle: transition.api.toggle
    },
    directives: {
      transitionDirective: bindDirectiveNoArg(transition.directives.directive)
    },
    actions: {}
  };
}
export {
  createCollapse as c,
  getCollapseDefaultConfig as g
};
`;export{e as default};
