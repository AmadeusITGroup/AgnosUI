import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {AttributeValue, StyleValue} from '../../types';

/**
 * Returns the common ancestor of the provided DOM elements.
 * @param elements - array of DOM elements
 * @returns the common ancestor, or null if the array is empty or if there is no common ancestor (e.g.: if elements are detached)
 */
export const computeCommonAncestor = (elements: HTMLElement[]) => {
	const length = elements.length;
	if (length === 0) return null;
	let ancestor: HTMLElement | null = elements[0];
	for (let i = 1; i < length && ancestor; i++) {
		const element = elements[i];
		while (ancestor) {
			if (ancestor === element) {
				break;
			}
			const comparison = ancestor.compareDocumentPosition(element);
			if (comparison & Node.DOCUMENT_POSITION_CONTAINED_BY) {
				break;
			} else if (comparison & Node.DOCUMENT_POSITION_CONTAINS) {
				ancestor = element;
				break;
			} else if (comparison & Node.DOCUMENT_POSITION_DISCONNECTED) {
				return null;
			}
			ancestor = ancestor.parentElement;
		}
	}
	return ancestor;
};

/**
 * Launch a reflow using a call to the provided html element getBoudingClientRect
 * @param element - the html element
 */
export function reflow(element: HTMLElement = document.body) {
	element.getBoundingClientRect();
}

/**
 * Attach the given css classes to the element
 *
 * @param element - the HTML element
 * @param classes - the css lcasses
 */
export const addClasses = (element: HTMLElement, classes?: string[]) => {
	if (classes && classes.length > 0) {
		element.classList.add(...classes);
	}
};
/**
 * Remove the given css classes to the element
 *
 * @param element - the HTML element
 * @param classes - the css classes
 */
export const removeClasses = (element: HTMLElement, classes?: string[]) => {
	if (classes && classes.length > 0) {
		element.classList.remove(...classes);
	}
};

/**
 * Adds an event listener to the specified element.
 *
 * @param element - The HTML element to which the event listener will be added.
 * @param type - A string representing the event type to listen for.
 * @param fn - The event listener function or object.
 * @returns A function that removes the event listener from the element.
 */
export function addEvent<K extends keyof HTMLElementEventMap>(
	element: HTMLElement,
	type: K,
	fn: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
): () => void;

/**
 * Adds an event listener to the specified element.
 *
 * @param element - The HTML element to which the event listener will be added.
 * @param type - A string representing the event type to listen for.
 * @param fn - The event listener function or object.
 * @returns A function that removes the event listener from the element.
 */
export function addEvent(element: Element, type: string, fn: EventListenerOrEventListenerObject) {
	element.addEventListener(type, fn);
	return function () {
		element.removeEventListener(type, fn);
	};
}

let idCount = 0;
/**
 * Generates a unique ID with the format 'auId-[counter]'.
 *
 * @returns The generated ID.
 */
export const generateId = () => `auId-${idCount++}`;
const notEmpty = (value: any) => value != null && value !== false;

function classNamesSubscribe(node: HTMLElement, classNames$: ReadableSignal<string>) {
	let currentClassNames = new Set<string>();

	return classNames$.subscribe((newClassName: AttributeValue) => {
		const classNames = new Set(`${newClassName ?? ''}`.split(' '));
		classNames.delete('');
		const classList = node.classList;
		for (const className of currentClassNames) {
			if (!classNames.has(className)) {
				classList.remove(className);
			}
		}
		classList.add(...classNames);
		currentClassNames = classNames;
	});
}

function attributeSubscribe(node: HTMLElement, attributeName: string, value$: ReadableSignal<AttributeValue>) {
	return value$.subscribe((value) => {
		if (notEmpty(value)) {
			node.setAttribute(attributeName, '' + (value === true ? '' : value));
		} else {
			node.removeAttribute(attributeName);
		}
	});
}

/**
 * Binds a value from a `ReadableSignal` to the specified attribute of an HTML element.
 * When the value emitted by the signal changes, it updates the attribute accordingly.
 * If the value is null, undefined or `false`, the attribute is removed from the element.
 * An empty string or `true` will result in an attribute with an empty value
 *
 * @param node The HTML element to bind the attribute to.
 * @param attributeName The name of the attribute to bind.
 * @param value$ The `ReadableSignal` representing the value to bind to the attribute.
 *
 * @returns unsubscription method to remove the binding
 */
export function bindAttribute(node: HTMLElement, attributeName: string, value$: ReadableSignal<AttributeValue>) {
	const isClass = attributeName === 'class';
	return isClass
		? classNamesSubscribe(node, value$ as ReadableSignal<string>) // Specific case for classnames
		: attributeSubscribe(node, attributeName, value$);
}

/**
 * Binds a value from a `ReadableSignal` to the specified CSS style property of an HTML element.
 * When the value emitted by the signal changes, it updates the style property accordingly.
 * If the value is  null, undefined or an empty string, the style property is cleared.
 *
 * @param node The HTML element to bind the style property to.
 * @param styleName The name of the CSS style property to bind.
 * @param value$ The `ReadableSignal` representing the value to bind to the style property.
 *
 * @returns unsubscription method to remove the binding
 */
export function bindStyle(node: HTMLElement, styleName: string, value$: ReadableSignal<StyleValue>) {
	return value$.subscribe((value) => {
		const style = node.style;
		style[styleName as any] = '' + (notEmpty(value) ? value : '');
	});
}

/**
 * Binds a `ReadableSignal` of boolean to the specified className of an HTML element.
 * The className is added when the value is true, removed otherwise
 *
 * @param node - The HTML element to bind the style property to.
 * @param className - The className to bind.
 * @param value$ - The `ReadableSignal` representing the value to bind to the className.
 *
 * @returns unsubscription method to remove the binding
 */
export function bindClassName(node: HTMLElement, className: string, value$: ReadableSignal<boolean>) {
	const unsubscribe = value$.subscribe((isPresent) => {
		node.classList.toggle(className, isPresent);
	});
	return () => {
		unsubscribe();
		node.classList.remove(className);
	};
}
