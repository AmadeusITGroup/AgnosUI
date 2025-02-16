const e=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const tansu = require("@amadeus-it-group/tansu");
const react = require("react");
let queue;
const processQueue = () => {
  if (queue) {
    try {
      for (let i = 0; i < queue.length; i++) {
        const { rerender, state, obj } = queue[i];
        if (state.notified === obj && state.hasEffect) {
          rerender(obj);
        }
      }
    } finally {
      queue = void 0;
    }
  }
};
const createOnStoreChange = (rerender, internalState) => () => {
  if (internalState.changed && !internalState.notified) {
    const obj = {};
    internalState.notified = obj;
    if (!queue) {
      queueMicrotask(processQueue);
      queue = [];
    }
    queue.push({ rerender, state: internalState, obj });
  }
};
function useObservable(store$) {
  const [, rerender] = react.useState({});
  const internalState = react.useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      changed: false,
      notified: false,
      store$: tansu.computed(() => {
        internalState2.changed = true;
        return store$();
      })
    };
    return internalState2;
  }, [store$]);
  react.useEffect(() => {
    internalState.hasEffect = true;
    const unsubscribe = internalState.store$.subscribe(createOnStoreChange(rerender, internalState));
    return () => {
      internalState.hasEffect = false;
      unsubscribe();
    };
  }, [internalState]);
  const value = internalState.store$();
  internalState.changed = false;
  internalState.notified = false;
  return value;
}
const createComputed = (store, internalState) => {
  let firstComputation = true;
  return tansu.computed(() => {
    if (firstComputation) {
      firstComputation = false;
    } else {
      internalState.changed = true;
    }
    return store();
  });
};
function useObservablesProxy(stores2) {
  const [, rerender] = react.useState({});
  const internalState = react.useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      notified: false,
      changed: false,
      storeInfo: {},
      checkStoreSubscribed: (key) => {
        const store = stores2[\`\${key}$\`];
        if (store) {
          let storeInfo = internalState2.storeInfo[key];
          if (!storeInfo || storeInfo.store !== store) {
            const unsubscribe = storeInfo == null ? void 0 : storeInfo.unsubscribe;
            storeInfo = {
              store,
              computedStore: createComputed(store, internalState2),
              unsubscribe: null
            };
            internalState2.storeInfo[key] = storeInfo;
            unsubscribe == null ? void 0 : unsubscribe();
          }
          if (internalState2.hasEffect && !storeInfo.unsubscribe) {
            storeInfo.unsubscribe = storeInfo.computedStore.subscribe(onStoreChange);
          }
          return storeInfo.computedStore;
        }
        return void 0;
      },
      proxy: new Proxy(
        {},
        {
          get(_target, name) {
            const store = typeof name === "string" ? internalState2.checkStoreSubscribed(name) : null;
            return store == null ? void 0 : store();
          }
        }
      )
    };
    const onStoreChange = createOnStoreChange(rerender, internalState2);
    return internalState2;
  }, []);
  internalState.notified = false;
  internalState.changed = false;
  react.useEffect(() => {
    internalState.hasEffect = true;
    for (const key of Object.keys(internalState.storeInfo)) {
      internalState.checkStoreSubscribed(key);
    }
    return () => {
      internalState.hasEffect = false;
      for (const info of Object.values(internalState.storeInfo)) {
        const unsubscribe = info.unsubscribe;
        info.unsubscribe = null;
        unsubscribe == null ? void 0 : unsubscribe();
      }
    };
  }, [stores2]);
  return internalState.proxy;
}
const propsEqual = (a, b) => !stores.findChangedProperties(a, b);
const usePropsAsStore = (props) => {
  const storeRef = react.useRef(void 0);
  if (!storeRef.current) {
    storeRef.current = tansu.writable({ ...props }, { equal: propsEqual });
  } else {
    storeRef.current.set({ ...props });
  }
  return react.useMemo(() => tansu.asReadable(storeRef.current), [storeRef.current]);
};
exports.useObservable = useObservable;
exports.useObservablesProxy = useObservablesProxy;
exports.usePropsAsStore = usePropsAsStore;
`;export{e as default};
