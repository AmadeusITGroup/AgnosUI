const e=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const tansu = require("@amadeus-it-group/tansu");
const react = require("react");
function useObservable(store$) {
  const [value, setValue] = react.useState(() => store$());
  react.useEffect(() => {
    return store$.subscribe((arg) => {
      setValue(() => arg);
    });
  }, [store$]);
  return value;
}
function useObservablesProxy(stores2) {
  const [, triggerRerender] = react.useState({});
  const internalState = react.useMemo(() => {
    const internalState2 = {
      hasEffect: false,
      storeInfo: {},
      checkStoreSubscribed: (key) => {
        const store = stores2[\`\${key}$\`];
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
  const storeRef = react.useRef();
  if (!storeRef.current) {
    storeRef.current = tansu.writable({ ...props }, { equal: propsEqual });
  }
  react.useEffect(() => {
    storeRef.current.set({ ...props });
  }, [props]);
  return react.useMemo(() => tansu.asReadable(storeRef.current), [storeRef.current]);
};
exports.useObservable = useObservable;
exports.useObservablesProxy = useObservablesProxy;
exports.usePropsAsStore = usePropsAsStore;
`;export{e as default};
