const e=`import { mergeDirectives } from '@agnos-ui/core/utils/directive';
import { useCallback, useMemo, useRef } from 'react';
export * from '@agnos-ui/core/utils/directive';
/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
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
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @param args - the args to pass to the directives
 * @returns the ref callback
 */
export function useDirectives(directives, args) {
    const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
    return useDirective(mergedDirectives, args);
}
`;export{e as default};
