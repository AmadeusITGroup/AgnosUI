const e=`import { findChangedProperties } from '@agnos-ui/core/utils/stores';
import { asReadable, writable } from '@amadeus-it-group/tansu';
import { useEffect, useMemo, useRef, useState } from 'react';
export * from '@agnos-ui/core/utils/stores';
export function useObservable(store$) {
    const [value, setValue] = useState(() => store$());
    useEffect(() => {
        return store$.subscribe((arg) => {
            // We're passing an update function to setValue here instead of just doing setValue(arg) so that
            // if arg is a function, it is properly used as the value instead of being called as an update function
            setValue(() => arg);
        });
    }, [store$]);
    return value;
}
const propsEqual = (a, b) => !findChangedProperties(a, b);
export const usePropsAsStore = (props) => {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = writable({ ...props }, { equal: propsEqual });
    }
    useEffect(() => {
        storeRef.current.set({ ...props });
    }, [props]);
    return useMemo(() => asReadable(storeRef.current), [storeRef.current]);
};
`;export{e as default};
