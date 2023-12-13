const e=`import { mergeDirectives } from '@agnos-ui/core/utils/directive';
import { useCallback, useMemo, useRef } from 'react';
export * from '@agnos-ui/core/utils/directive';
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
export function useDirectives(directives, args) {
    const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
    return useDirective(mergedDirectives, args);
}
`;export{e as default};
