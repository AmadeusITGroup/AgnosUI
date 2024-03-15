const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { writable, asReadable } from "@amadeus-it-group/tansu";
import { useState, useEffect, useRef, useMemo } from "react";
function useObservable(store$) {
  const [value, setValue] = useState(() => store$());
  useEffect(() => {
    return store$.subscribe((arg) => {
      setValue(() => arg);
    });
  }, [store$]);
  return value;
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
  usePropsAsStore as a,
  useObservable as u
};
`;export{e as default};
