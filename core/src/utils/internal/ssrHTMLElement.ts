import type {SSRHTMLElement} from '../../types';

const ssrHTMLElementStyle: unique symbol = Symbol('style');
class SSRStyle {
	[ssrHTMLElementStyle]() {
		return {...this};
	}

	setProperty(property: string, value: string | null, priority?: string) {
		if (!value) {
			this.removeProperty(property);
		} else {
			if (priority !== 'important' && priority !== '' && priority != null) {
				return;
			}

			if (priority) {
				value += ' !important';
			}
			(this as any)[property] = value;
		}
	}

	removeProperty(property: string): string {
		const value = (this as any)[property] ?? '';
		delete (this as any)[property];
		return value;
	}
}

/**
 * A unique symbol used to represent the attributes and style of an SSR (Server-Side Rendering) HTML element.
 * This symbol can be used as a key for storing or retrieving attributes and styles associated with an SSR HTML element.
 */
export const ssrHTMLElementAttributesAndStyle: unique symbol = Symbol('attributesAndStyle');

const spaceRegExp = /\s+/;

/**
 * Create an SSRHTMLElement
 * @returns the created SSRHTMLElement
 */
export const ssrHTMLElement = (): SSRHTMLElement => {
	const attributes: Record<string, string> = {};
	const style = new SSRStyle();
	let classNames = new Set<string>();

	const toggleClass = (className: string, force = !classNames.has(className)) => {
		if (force) {
			classNames.add(className);
		} else {
			classNames.delete(className);
		}
		return !!force;
	};
	const toggleAll =
		(force: boolean) =>
		(...classNames: string[]) =>
			classNames.forEach((className) => toggleClass(className, force));

	return {
		style,
		classList: {
			add: toggleAll(true),
			remove: toggleAll(false),
			toggle: toggleClass,
		},

		setAttribute(name: string, value: string) {
			if (name === 'class') {
				classNames = new Set(value.trim().split(spaceRegExp));
			} else if (name === 'style') {
				// parsing style is not implemented
				throw new Error('setAttribute("style",...) is not implemented in ssrHTMLElement. Use the style property instead.');
			} else {
				attributes[name] = value;
			}
		},
		removeAttribute(name: string) {
			if (name === 'class') {
				classNames = new Set();
			} else {
				delete attributes[name];
			}
		},

		[ssrHTMLElementAttributesAndStyle as any]() {
			return {attributes: {...attributes}, classNames: [...classNames], style: style[ssrHTMLElementStyle]()};
		},
	};
};
