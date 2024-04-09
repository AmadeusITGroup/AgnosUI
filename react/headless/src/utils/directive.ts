import type {Directive, DirectiveAndParam} from '@agnos-ui/core/types';
import {attributesData, bindDirective, classDirective, mergeDirectives} from '@agnos-ui/core/utils/directive';
import {writable} from '@amadeus-it-group/tansu';
import {BROWSER} from 'esm-env';
import type {RefCallback} from 'react';
import {useCallback, useMemo, useRef} from 'react';

export * from '@agnos-ui/core/utils/directive';

/**
 * Returns a class directive.
 * @param className - class name to use
 * @returns a class directive, to be used with {@link useDirectives}.
 */
export const useClassDirective = (className: string) => {
	const {directive, className$} = useMemo(() => {
		const className$ = writable('');
		return {directive: bindDirective(classDirective, className$), className$};
	}, []);
	className$.set(className);
	return directive;
};

export function useDirective(directive: Directive<void>): {ref: RefCallback<HTMLElement>};
export function useDirective<T>(directive: Directive<T>, args: T): {ref: RefCallback<HTMLElement>};
/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
export function useDirective<T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} {
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
	return {ref};
}

export function useDirectives(directives: Directive<void>[]): {ref: RefCallback<HTMLElement>};
export function useDirectives<T>(directives: Directive<T>[], args: T): {ref: RefCallback<HTMLElement>};
/**
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @param args - the args to pass to the directives
 * @returns the ref callback
 */
export function useDirectives<T>(directives: Directive<T>[], args?: T): {ref: RefCallback<HTMLElement>} {
	const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
	return useDirective(mergedDirectives, args as any);
}

const attributesMap = new Map([
	['tabindex', 'tabIndex'],
	['for', 'htmlFor'],
]);

/**
 * Returns an object with the key/value attributes for JSX, derived from a list of directives.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with key/value pairs to be applied on a JSX node.
 */
export function directiveAttributes<T extends any[]>(...directives: {[K in keyof T]: DirectiveAndParam<T[K]> | Directive<void>}) {
	const reactAttributes: Record<string, any> = {};
	const {attributes, style, classNames} = attributesData(...directives);

	for (const [name, value] of Object.entries(attributes)) {
		reactAttributes[attributesMap.get(name) ?? name] = value;
	}

	if (classNames?.length) {
		reactAttributes.className = classNames.join(' ');
	}

	if (Object.keys(style).length) {
		reactAttributes.style = style;
	}

	return reactAttributes;
}

/**
 * Same as {@link directiveAttributes}, but returns an empty object when run in a browser environement.
 *
 * @returns JSON object with name/value for the attributes
 */
export const ssrAttributes: typeof directiveAttributes = BROWSER ? () => ({}) : directiveAttributes;
