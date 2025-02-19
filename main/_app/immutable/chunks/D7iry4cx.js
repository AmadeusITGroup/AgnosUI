const n=`import { createTransition } from "@agnos-ui/core/services/transitions/baseTransitions";
import { writablesForProps, idWithDefault, stateStores, true$ } from "@agnos-ui/core/utils/stores";
import { mergeDirectives, createAttributesDirective } from "@agnos-ui/core/utils/directive";
import { typeBoolean, typeFunction, typeString } from "@agnos-ui/core/utils/writables";
import { a as collapseHorizontalTransition, c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { noop as noop$1 } from "@agnos-ui/core/utils/func";
const equal = (a, b) => Object.is(a, b) && (!a || typeof a !== "object") && typeof a !== "function";
const subscribersQueue = [];
let willProcessQueue = false;
const batch = (fn) => {
  const needsProcessQueue = !willProcessQueue;
  willProcessQueue = true;
  let success = true;
  let res;
  let error;
  try {
    res = fn();
  } finally {
    if (needsProcessQueue) {
      while (subscribersQueue.length > 0) {
        const consumer = subscribersQueue.shift();
        try {
          consumer.notify();
        } catch (e) {
          if (success) {
            success = false;
            error = e;
          }
        }
      }
      willProcessQueue = false;
    }
  }
  if (success) {
    return res;
  }
  throw error;
};
const updateLinkProducerValue = (link) => {
  try {
    link.skipMarkDirty = true;
    link.producer.updateValue();
    if (link.producer.flags & 16) {
      throw new Error("assert failed: store still dirty after updating it");
    }
  } finally {
    link.skipMarkDirty = false;
  }
};
const noop = () => {
};
const bind = (object, fnName) => {
  const fn = object ? object[fnName] : null;
  return typeof fn === "function" ? fn.bind(object) : noop;
};
const noopSubscriber = {
  next: noop,
  pause: noop,
  resume: noop
};
const toSubscriberObject = (subscriber) => ({
  next: typeof subscriber === "function" ? subscriber.bind(null) : bind(subscriber, "next"),
  pause: bind(subscriber, "pause"),
  resume: bind(subscriber, "resume")
});
class SubscribeConsumer {
  constructor(producer, subscriber) {
    this.dirtyCount = 1;
    this.subscriber = toSubscriberObject(subscriber);
    this.link = producer.registerConsumer(producer.newLink(this));
    this.notify(true);
  }
  unsubscribe() {
    if (this.subscriber !== noopSubscriber) {
      this.subscriber = noopSubscriber;
      this.link.producer.unregisterConsumer(this.link);
    }
  }
  markDirty() {
    this.dirtyCount++;
    subscribersQueue.push(this);
    if (this.dirtyCount === 1) {
      this.subscriber.pause();
    }
  }
  notify(first = false) {
    this.dirtyCount--;
    if (this.dirtyCount === 0 && this.subscriber !== noopSubscriber) {
      const link = this.link;
      const producer = link.producer;
      updateLinkProducerValue(link);
      if (producer.isLinkUpToDate(link) && !first) {
        this.subscriber.resume();
      } else {
        const value = producer.updateLink(link);
        this.subscriber.next(value);
      }
    }
  }
}
let activeConsumer = null;
const setActiveConsumer = (consumer) => {
  const prevConsumer = activeConsumer;
  activeConsumer = consumer;
  return prevConsumer;
};
const untrack = (fn) => {
  let output;
  const prevActiveConsumer = setActiveConsumer(null);
  try {
    output = fn();
  } finally {
    setActiveConsumer(prevActiveConsumer);
  }
  return output;
};
let notificationPhase = false;
const checkNotInNotificationPhase = () => {
  if (notificationPhase) {
    throw new Error("Reading or writing a signal is forbidden during the notification phase.");
  }
};
let epoch = 0;
class RawStoreWritable {
  constructor(value) {
    this.value = value;
    this.flags = 0;
    this.version = 0;
    this.equalFn = equal;
    this.equalCache = null;
    this.consumerLinks = [];
  }
  newLink(consumer) {
    return {
      version: -1,
      value: void 0,
      producer: this,
      indexInProducer: 0,
      consumer,
      skipMarkDirty: false
    };
  }
  isLinkUpToDate(link) {
    if (link.version === this.version) {
      return true;
    }
    if (link.version === this.version - 1 || link.version < 0) {
      return false;
    }
    let equalCache = this.equalCache;
    if (!equalCache) {
      equalCache = {};
      this.equalCache = equalCache;
    }
    let res = equalCache[link.version];
    if (res === void 0) {
      res = this.equal(link.value, this.value);
      equalCache[link.version] = res;
    }
    return res;
  }
  updateLink(link) {
    link.value = this.value;
    link.version = this.version;
    return this.readValue();
  }
  registerConsumer(link) {
    const consumerLinks = this.consumerLinks;
    const indexInProducer = consumerLinks.length;
    link.indexInProducer = indexInProducer;
    consumerLinks[indexInProducer] = link;
    return link;
  }
  unregisterConsumer(link) {
    const consumerLinks = this.consumerLinks;
    const index = link.indexInProducer;
    if (consumerLinks[index] !== link) {
      throw new Error("assert failed: invalid indexInProducer");
    }
    const lastConsumerLink = consumerLinks.pop();
    const isLast = link === lastConsumerLink;
    if (!isLast) {
      consumerLinks[index] = lastConsumerLink;
      lastConsumerLink.indexInProducer = index;
    } else if (index === 0) {
      this.checkUnused();
    }
  }
  checkUnused() {
  }
  updateValue() {
  }
  equal(a, b) {
    const equalFn = this.equalFn;
    return equalFn(a, b);
  }
  increaseEpoch() {
    epoch++;
    this.markConsumersDirty();
  }
  set(newValue) {
    checkNotInNotificationPhase();
    const same = this.equal(this.value, newValue);
    if (!same) {
      batch(() => {
        this.value = newValue;
        this.version++;
        this.equalCache = null;
        this.increaseEpoch();
      });
    }
  }
  update(updater) {
    this.set(updater(this.value));
  }
  markConsumersDirty() {
    const prevNotificationPhase = notificationPhase;
    notificationPhase = true;
    try {
      const consumerLinks = this.consumerLinks;
      for (let i = 0, l = consumerLinks.length; i < l; i++) {
        const link = consumerLinks[i];
        if (link.skipMarkDirty)
          continue;
        link.consumer.markDirty();
      }
    } finally {
      notificationPhase = prevNotificationPhase;
    }
  }
  get() {
    checkNotInNotificationPhase();
    return activeConsumer ? activeConsumer.addProducer(this) : this.readValue();
  }
  readValue() {
    return this.value;
  }
  subscribe(subscriber) {
    checkNotInNotificationPhase();
    const subscription = new SubscribeConsumer(this, subscriber);
    const unsubscriber = () => subscription.unsubscribe();
    unsubscriber.unsubscribe = unsubscriber;
    return unsubscriber;
  }
}
let flushUnusedQueue = null;
let inFlushUnused = false;
const flushUnused = () => {
  if (inFlushUnused) {
    throw new Error("assert failed: recursive flushUnused call");
  }
  inFlushUnused = true;
  try {
    const queue = flushUnusedQueue;
    if (queue) {
      flushUnusedQueue = null;
      for (let i = 0, l = queue.length; i < l; i++) {
        const producer = queue[i];
        producer.flags &= ~4;
        producer.checkUnused();
      }
    }
  } finally {
    inFlushUnused = false;
  }
};
class RawStoreTrackingUsage extends RawStoreWritable {
  constructor() {
    super(...arguments);
    this.extraUsages = 0;
  }
  updateValue() {
    const flags = this.flags;
    if (!(flags & 2)) {
      if (!this.extraUsages && !this.consumerLinks.length) {
        throw new Error("assert failed: untracked producer usage");
      }
      this.flags |= 2;
      untrack(() => this.startUse());
    }
  }
  checkUnused() {
    const flags = this.flags;
    if (flags & 2 && !this.extraUsages && !this.consumerLinks.length) {
      if (inFlushUnused || flags & 1) {
        this.flags &= -3;
        untrack(() => this.endUse());
      } else if (!(flags & 4)) {
        this.flags |= 4;
        if (!flushUnusedQueue) {
          flushUnusedQueue = [];
          queueMicrotask(flushUnused);
        }
        flushUnusedQueue.push(this);
      }
    }
  }
  get() {
    checkNotInNotificationPhase();
    if (activeConsumer) {
      return activeConsumer.addProducer(this);
    } else {
      this.extraUsages++;
      try {
        this.updateValue();
        if (this.flags & 16) {
          throw new Error("assert failed: store still dirty after updating it");
        }
        return this.readValue();
      } finally {
        const extraUsages = --this.extraUsages;
        if (extraUsages === 0) {
          this.checkUnused();
        }
      }
    }
  }
}
const noopUnsubscribe = () => {
};
noopUnsubscribe.unsubscribe = noopUnsubscribe;
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
class RawSubscribableWrapper extends RawStoreTrackingUsage {
  constructor(subscribable) {
    super(void 0);
    this.subscribable = subscribable;
    this.subscriber = this.createSubscriber();
    this.unsubscribe = null;
    this.flags = 1;
  }
  createSubscriber() {
    const subscriber = (value) => this.set(value);
    subscriber.next = subscriber;
    subscriber.pause = () => {
      this.markConsumersDirty();
    };
    return subscriber;
  }
  startUse() {
    this.unsubscribe = normalizeUnsubscribe(this.subscribable.subscribe(this.subscriber));
  }
  endUse() {
    const unsubscribe = this.unsubscribe;
    if (unsubscribe) {
      this.unsubscribe = null;
      unsubscribe();
    }
  }
}
const symbolObservable = typeof Symbol === "function" && Symbol.observable || "@@observable";
const returnThis = function() {
  return this;
};
const rawStoreSymbol = Symbol();
const rawStoreMap = /* @__PURE__ */ new WeakMap();
const getRawStore = (storeInput) => {
  const rawStore = storeInput[rawStoreSymbol];
  if (rawStore) {
    return rawStore;
  }
  let res = rawStoreMap.get(storeInput);
  if (!res) {
    let subscribable = storeInput;
    if (!("subscribe" in subscribable)) {
      subscribable = subscribable[symbolObservable]();
    }
    res = new RawSubscribableWrapper(subscribable);
    rawStoreMap.set(storeInput, res);
  }
  return res;
};
const exposeRawStore = (rawStore, extraProp) => {
  const get = rawStore.get.bind(rawStore);
  if (extraProp) {
    Object.assign(get, extraProp);
  }
  get.get = get;
  get.subscribe = rawStore.subscribe.bind(rawStore);
  get[symbolObservable] = returnThis;
  get[rawStoreSymbol] = rawStore;
  return get;
};
const MAX_CHANGE_RECOMPUTES = 1e3;
const COMPUTED_UNSET = Symbol("UNSET");
const COMPUTED_ERRORED = Symbol("ERRORED");
const isComputedSpecialValue = (value) => value === COMPUTED_UNSET || value === COMPUTED_ERRORED;
class RawStoreComputedOrDerived extends RawStoreTrackingUsage {
  constructor() {
    super(...arguments);
    this.flags = 16;
  }
  equal(a, b) {
    if (isComputedSpecialValue(a) || isComputedSpecialValue(b)) {
      return false;
    }
    return super.equal(a, b);
  }
  markDirty() {
    if (!(this.flags & 16)) {
      this.flags |= 16;
      this.markConsumersDirty();
    }
  }
  readValue() {
    const value = this.value;
    if (value === COMPUTED_ERRORED) {
      throw this.error;
    }
    if (value === COMPUTED_UNSET) {
      throw new Error("assert failed: computed value is not set");
    }
    return value;
  }
  updateValue() {
    if (this.flags & 8) {
      throw new Error("recursive computed");
    }
    super.updateValue();
    if (!(this.flags & 16)) {
      return;
    }
    this.flags |= 8;
    const prevActiveConsumer = setActiveConsumer(null);
    try {
      let iterations = 0;
      do {
        do {
          iterations++;
          this.flags &= ~16;
          if (this.areProducersUpToDate()) {
            return;
          }
        } while (this.flags & 16 && iterations < MAX_CHANGE_RECOMPUTES);
        this.recompute();
      } while (this.flags & 16 && iterations < MAX_CHANGE_RECOMPUTES);
      if (this.flags & 16) {
        this.flags &= ~16;
        this.error = new Error("reached maximum number of store changes in one shot");
        this.set(COMPUTED_ERRORED);
      }
    } finally {
      setActiveConsumer(prevActiveConsumer);
      this.flags &= -9;
    }
  }
}
class RawStoreComputed extends RawStoreComputedOrDerived {
  constructor(computeFn) {
    super(COMPUTED_UNSET);
    this.computeFn = computeFn;
    this.producerIndex = 0;
    this.producerLinks = [];
    this.epoch = -1;
  }
  increaseEpoch() {
  }
  updateValue() {
    const flags = this.flags;
    if (flags & 2 && this.epoch === epoch) {
      return;
    }
    super.updateValue();
    this.epoch = epoch;
  }
  get() {
    if (!activeConsumer && !notificationPhase && this.epoch === epoch && (!(this.flags & 1) || this.flags & 2)) {
      return this.readValue();
    }
    return super.get();
  }
  addProducer(producer) {
    const producerLinks = this.producerLinks;
    const producerIndex = this.producerIndex;
    let link = producerLinks[producerIndex];
    if ((link == null ? void 0 : link.producer) !== producer) {
      if (link) {
        producerLinks.push(link);
      }
      link = producer.registerConsumer(producer.newLink(this));
    }
    producerLinks[producerIndex] = link;
    this.producerIndex = producerIndex + 1;
    updateLinkProducerValue(link);
    if (producer.flags & 1) {
      this.flags |= 1;
    }
    return producer.updateLink(link);
  }
  startUse() {
    const producerLinks = this.producerLinks;
    for (let i = 0, l = producerLinks.length; i < l; i++) {
      const link = producerLinks[i];
      link.producer.registerConsumer(link);
    }
    this.flags |= 16;
  }
  endUse() {
    const producerLinks = this.producerLinks;
    for (let i = 0, l = producerLinks.length; i < l; i++) {
      const link = producerLinks[i];
      link.producer.unregisterConsumer(link);
    }
  }
  areProducersUpToDate() {
    if (this.value === COMPUTED_UNSET) {
      return false;
    }
    const producerLinks = this.producerLinks;
    for (let i = 0, l = producerLinks.length; i < l; i++) {
      const link = producerLinks[i];
      const producer = link.producer;
      updateLinkProducerValue(link);
      if (!producer.isLinkUpToDate(link)) {
        return false;
      }
    }
    return true;
  }
  recompute() {
    let value;
    const prevActiveConsumer = setActiveConsumer(this);
    try {
      this.producerIndex = 0;
      this.flags &= ~1;
      const computeFn = this.computeFn;
      value = computeFn();
      this.error = null;
    } catch (error) {
      value = COMPUTED_ERRORED;
      this.error = error;
    } finally {
      setActiveConsumer(prevActiveConsumer);
    }
    const producerLinks = this.producerLinks;
    const producerIndex = this.producerIndex;
    if (producerIndex < producerLinks.length) {
      for (let i = 0, l = producerLinks.length - producerIndex; i < l; i++) {
        const link = producerLinks.pop();
        link.producer.unregisterConsumer(link);
      }
    }
    this.set(value);
  }
}
function asReadable(store, extraProp) {
  return exposeRawStore(getRawStore(store), extraProp);
}
function asWritable(store, setOrExtraProps) {
  return asReadable(store, {
    ...setOrExtraProps,
    set: noop,
    update: noop
  });
}
const applyStoreOptions = (store, options) => {
  return store;
};
function computed(fn, options) {
  return exposeRawStore(applyStoreOptions(new RawStoreComputed(fn)));
}
const defaultCollapseConfig = {
  visible: true,
  horizontal: false,
  onVisibleChange: noop$1,
  onShown: noop$1,
  onHidden: noop$1,
  animated: true,
  animatedOnInit: false,
  className: "",
  id: ""
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  horizontal: typeBoolean,
  onVisibleChange: typeFunction,
  onHidden: typeFunction,
  onShown: typeFunction,
  animatedOnInit: typeBoolean,
  animated: typeBoolean,
  className: typeString,
  visible: typeBoolean,
  id: typeString
};
function createCollapse(config) {
  const [
    { animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, horizontal$, id$: _dirtyId$, ...stateProps },
    patch
  ] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const id$ = idWithDefault(_dirtyId$);
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
      collapseDirective: mergeDirectives(
        transition.directives.directive,
        createAttributesDirective(() => ({
          attributes: {
            id: id$
          },
          classNames: {
            "au-collapse": true$
          }
        }))
      ),
      triggerDirective: createAttributesDirective(() => ({
        attributes: {
          "aria-expanded": computed(() => \`\${visible$()}\`),
          "aria-controls": id$
        },
        events: {
          click: () => transition.api.toggle()
        }
      }))
    }
  };
}
export {
  createCollapse as c,
  getCollapseDefaultConfig as g
};
`;export{n as default};
