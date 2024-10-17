import type {Directive, DirectivesAndOptParam} from '@agnos-ui/core/types';
import {attributesData, multiDirective} from '@agnos-ui/core/utils/directive';
import {BROWSER} from 'esm-env';
import type {RefCallback} from 'react';
import {useCallback, useRef} from 'react';

export * from '@agnos-ui/core/utils/directive';

const attributesMap = new Map([
	['tabindex', 'tabIndex'],
	['for', 'htmlFor'],
	['autocomplete', 'autoComplete'],
	['autocapitalize', 'autoCapitalize'],
	['autocorrect', 'autoCorrect'],
]);

/**
 * Returns an object with the key/value attributes for JSX, derived from a list of directives.
 *
 * @param directives - List of directives to generate attributes from. Each parameter can be the directive or an array with the directive and its parameter
 * @returns JSON object with key/value pairs to be applied on a JSX node.
 */
export function directiveAttributes<T extends any[]>(...directives: DirectivesAndOptParam<T>) {
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

/**
 * The useDirective function.
 *
 * Allows to attach a provided directive to the current react component.
 *
 * @param directive - the directive
 * @param args - the args to pass to the directive
 * @returns the ref callback
 */
export const useDirective: {
	(directive: Directive): {ref: RefCallback<HTMLElement>};
	<T>(directive: Directive<T>, args: T): {ref: RefCallback<HTMLElement>};
} = BROWSER
	? <T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} => {
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
	: <T>(directive: Directive<T>, args?: T): {ref: RefCallback<HTMLElement>} => ssrAttributes([directive, args as T]) as any;

/**
 * The useDirectives function.
 *
 * Allows to attach multiple directives to the current react component.
 *
 * @param directives - directives
 * @returns the ref callback
 */
export const useDirectives: <T extends any[]>(...directives: DirectivesAndOptParam<T>) => {ref: RefCallback<HTMLElement>} = BROWSER
	? (...directives) => useDirective(multiDirective, directives)
	: (directiveAttributes as any);
