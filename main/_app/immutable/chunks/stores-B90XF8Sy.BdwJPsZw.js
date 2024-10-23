const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { writable, asReadable } from "@amadeus-it-group/tansu";
import { useState, useEffect, useMemo, useRef } from "react";
function useObservable(store$) {
  const [value, setValue] = useState(() => store$());
  useEffect(() => {
    return store$.subscribe((arg) => {
      setValue(() => arg);
    });
  }, [store$]);
  return value;
}
function useObservablesProxy(stores) {
  const [, triggerRerender] = useState({});
  const internalState = useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      storeInfo: {},
      checkStoreSubscribed: (key) => {
        const store = stores[\`\${key}$\`];
        if (store) {
          let storeInfo = internalState2.storeInfo[key];
          if (!storeInfo) {
            storeInfo = { unsubscribe: null };
            internalState2.storeInfo[key] = storeInfo;
          }
          if (internalState2.hasEffect && !storeInfo.unsubscribe) {
            storeInfo.unsubscribe = store.subscribe(() => {
              triggerRerender({});
            });
          }
        }
        return store;
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
    return internalState2;
  }, []);
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
        unsubscribe == null ? void 0 : unsubscribe();
      }
    };
  }, [stores]);
  return internalState.proxy;
}
const propsEqual = (a, b) => !findChangedProperties(a, b);
const usePropsAsStore = (props) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = writable({ ...props }, { equal: propsEqual });
  }
  useEffect(() => {
    storeRef.current.set({ ...props });
  }, [props]);
  return useMemo(() => asReadable(storeRef.current), [storeRef.current]);
};
export {
  useObservablesProxy as a,
  usePropsAsStore as b,
  useObservable as u
};
`;export{e as default};
