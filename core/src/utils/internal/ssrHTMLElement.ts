import type {SSRHTMLElement, StyleKeyCustomProperty, StyleKeyKebabCase, StyleValue} from '../../types';

const importantSuffixRegExp = /\s*!important$/;
const withoutImportant = (value: string | undefined): string => value?.replace(importantSuffixRegExp, '') ?? '';

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const getStyleKeyFromDirectProp = (str: string | symbol): undefined | StyleKeyKebabCase => {
	if (typeof str !== 'string' || str.startsWith('--')) {
		return undefined;
	}
	return toKebabCase(str) as StyleKeyKebabCase;
};

const getStyleKeyFromMethods = (str: string): undefined | StyleKeyKebabCase => {
	if (!str.startsWith('--') && str !== toKebabCase(str)) {
		return undefined;
	}
	return str as StyleKeyKebabCase;
};

const ssrHTMLElementStyle: unique symbol = Symbol('style');
class SSRStyle {
	// all styles in kebab-case, including custom properties:
	[ssrHTMLElementStyle]: Partial<Record<StyleKeyKebabCase | StyleKeyCustomProperty, string>> = {};

	constructor() {
		return new Proxy(this, {
			get: (target, prop) => {
				const styleKey = prop in target ? undefined : getStyleKeyFromDirectProp(prop);
				if (styleKey) {
					return withoutImportant(target[ssrHTMLElementStyle][styleKey]);
				} else {
					return (target as any)[prop];
				}
			},
			set: (target, prop, value) => {
				const styleKey = prop in target ? undefined : getStyleKeyFromDirectProp(prop);
				if (styleKey) {
					target.setProperty(styleKey, value);
				} else {
					(target as any)[prop] = value;
				}
				return true;
			},
		});
	}

	setProperty(property: string, value: string | null, priority?: string) {
		if (!value) {
			this.removeProperty(property);
			return;
		}
		const key = getStyleKeyFromMethods(property);
		if (!key || (priority !== 'important' && priority !== '' && priority != null) || importantSuffixRegExp.test(value)) {
			return;
		}
		this[ssrHTMLElementStyle][key] = value + (priority ? ' !important' : '');
	}

	removeProperty(property: string): string {
		const key = getStyleKeyFromMethods(property);
		if (!key) {
			return '';
		}
		const style = this[ssrHTMLElementStyle];
		const value = style[key];
		delete style[key];
		return withoutImportant(value);
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
			return {attributes: {...attributes}, classNames: [...classNames], style: {...style[ssrHTMLElementStyle]}};
		},
	};
};

const cssEscapeStyleName = (styleName: string): string => styleName.replace(/([^\w-])/gi, '\\$1');

/**
 * Converts a style object to a CSS text string.
 * @param style - The style object to convert.
 * @returns The CSS text string representation of the style object.
 */
export const cssTextFromObject = (style: Partial<Record<StyleKeyKebabCase | StyleKeyCustomProperty, StyleValue>>): string =>
	Object.entries(style)
		.filter(([, value]) => !!value)
		.map(([name, value]) => `${cssEscapeStyleName(name)}: ${value};`)
		.join('');
