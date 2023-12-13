const e=`import { findChangedProperties } from '@agnos-ui/core/utils/stores';
import { useEffect, useRef } from 'react';
import { useObservable } from './stores';
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
`;export{e as default};
