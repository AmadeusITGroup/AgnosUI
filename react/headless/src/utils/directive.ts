import type {Directive} from '@agnos-ui/core/types';
import {mergeDirectives} from '@agnos-ui/core/utils/directive';
import type {RefCallback} from 'react';
import {useCallback, useMemo, useRef} from 'react';

export * from '@agnos-ui/core/utils/directive';

export function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
export function useDirective<T>(directive: Directive<T>, args?: T): RefCallback<HTMLElement> {
	const instance = useRef<ReturnType<typeof directive>>();
	const propsRef = useRef<T>();
	const ref = useCallback(
		(element: HTMLElement | null) => {
			instance.current?.destroy?.();
			instance.current = undefined;
			if (element) {
				instance.current = directive(element, propsRef.current as T);
			}
		},
		[directive],
	);
	propsRef.current = args;
	instance.current?.update?.(args as T);
	return ref;
}

export function useDirectives(directives: Directive<void>[]): RefCallback<HTMLElement>;
export function useDirectives<T>(directives: Directive<T>[], args: T): RefCallback<HTMLElement>;
/**
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @param args - the args to pass to the directives
 * @returns the ref callback
 */
export function useDirectives<T>(directives: Directive<T>[], args?: T): RefCallback<HTMLElement> {
	const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
	return useDirective(mergedDirectives, args as any);
}
