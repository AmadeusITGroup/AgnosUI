const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { writable, asReadable, computed } from "@amadeus-it-group/tansu";
import { useRef, useMemo, useState, useEffect } from "react";
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
  const [, rerender] = useState({});
  const internalState = useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      changed: false,
      notified: false,
      store$: computed(() => {
        internalState2.changed = true;
        return store$();
      })
    };
    return internalState2;
  }, [store$]);
  useEffect(() => {
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
  return computed(() => {
    if (firstComputation) {
      firstComputation = false;
    } else {
      internalState.changed = true;
    }
    return store();
  });
};
function useObservablesProxy(stores) {
  const [, rerender] = useState({});
  const internalState = useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      notified: false,
      changed: false,
      storeInfo: {},
      checkStoreSubscribed: (key) => {
        const store = stores[\`\${key}$\`];
        if (store) {
          let storeInfo = internalState2.storeInfo[key];
          if (!storeInfo || storeInfo.store !== store) {
            const unsubscribe = storeInfo?.unsubscribe;
            storeInfo = {
              store,
              computedStore: createComputed(store, internalState2),
              unsubscribe: null
            };
            internalState2.storeInfo[key] = storeInfo;
            unsubscribe?.();
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
            return store?.();
          }
        }
      )
    };
    const onStoreChange = createOnStoreChange(rerender, internalState2);
    return internalState2;
  }, []);
  internalState.notified = false;
  internalState.changed = false;
  useEffect(() => {
    internalState.hasEffect = true;
    for (const key of Object.keys(internalState.storeInfo)) {
      internalState.checkStoreSubscribed(key);
    }
    return () => {
      internalState.hasEffect = false;
      for (const info of Object.values(internalState.storeInfo)) {
        const unsubscribe = info.unsubscribe;
        info.unsubscribe = null;
        unsubscribe?.();
      }
    };
  }, [stores]);
  return internalState.proxy;
}
const propsEqual = (a, b) => !findChangedProperties(a, b);
const usePropsAsStore = (props) => {
  const storeRef = useRef(void 0);
  if (!storeRef.current) {
    storeRef.current = writable({ ...props }, { equal: propsEqual });
  } else {
    storeRef.current.set({ ...props });
  }
  return useMemo(() => asReadable(storeRef.current), [storeRef.current]);
};
export {
  useObservablesProxy as a,
  usePropsAsStore as b,
  useObservable as u
};
`;export{e as default};
