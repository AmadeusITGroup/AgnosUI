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
exports.usePropsAsStore = usePropsAsStore;
`;export{e as default};
