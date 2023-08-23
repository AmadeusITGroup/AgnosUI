const e=`import { asReadable, computed, writable } from '@amadeus-it-group/tansu';
import { findChangedProperties } from '@agnos-ui/core';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
export function useWidget(createWidget, props = {}, ...initProps) {
    const apiRef = useRef(undefined);
    if (!apiRef.current) {
        apiRef.current = createWidget(...initProps);
        apiRef.current.patch(props);
    }
    const api = apiRef.current;
    const previousProps = useRef(props);
    useEffect(() => {
        const changedProps = findChangedProperties(previousProps.current, props);
        previousProps.current = props;
        if (changedProps) {
            api.patch(changedProps);
        }
    }, [props]);
    const state = useObservable(api.state$);
    return [state, api];
}
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
export function useDirective(directive, args) {
    const instance = useRef();
    const propsRef = useRef();
    const ref = useCallback((element) => {
        instance.current?.destroy?.();
        instance.current = undefined;
        if (element) {
            instance.current = directive(element, propsRef.current);
        }
    }, [directive]);
    propsRef.current = args;
    instance.current?.update?.(args);
    return ref;
}
/**
 * React context which can be used to provide or consume the widgets default configuration store.
 */
export const widgetsConfigContext = createContext(undefined);
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
const useWidgetContext = (widgetName, defaultConfig) => {
    const widgetsConfig = useContext(widgetsConfigContext);
    const defaultConfig$ = usePropsAsStore(defaultConfig);
    return useMemo(() => computed(() => ({ ...defaultConfig$(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined) })), [widgetsConfig]);
};
export const useWidgetWithConfig = (factory, props, widgetName, defaultProps) => useWidget(factory, props, useWidgetContext(widgetName, defaultProps));
`;export{e as default};
