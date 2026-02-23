import type {ReadableSignal, UnsubscribeFunction, UnsubscribeObject} from '@amadeus-it-group/tansu';
import {BROWSER} from 'esm-env';
import type {AttributeValue, SSRHTMLElement, StyleKey, StyleKeyCustomProperty, StyleValue} from '../../types';
import {isBrowserHTMLElement} from '../directive';
import {noop} from '../func';

/**
 * Returns the common ancestor of the provided DOM elements.
 * @param elements - array of DOM elements
 * @returns the common ancestor, or null if the array is empty or if there is no common ancestor (e.g.: if elements are detached)
 */
export const computeCommonAncestor = (elements: HTMLElement[]): HTMLElement | null => {
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
 * Launch a reflow using a call to the provided html element getBoundingClientRect
 * @param element - the html element
 */
export const reflow: (element?: SSRHTMLElement) => void = BROWSER
	? (element: SSRHTMLElement = document.body): void => {
			if (isBrowserHTMLElement(element)) {
				element.getBoundingClientRect();
			}
		}
	: noop;

/**
 * Attach the given css classes to the element
 *
 * @param element - the HTML element
 * @param classes - the css classes
 */
export const addClasses = (element: SSRHTMLElement, classes?: string[]): void => {
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
export const removeClasses = (element: SSRHTMLElement, classes?: string[]): void => {
	if (classes && classes.length > 0) {
		element.classList.remove(...classes);
	}
};

/**
 * Appends HTML content to the specified element and returns the created node(s).
 *
 * If the inserted HTML generates a single root element, that element is returned.
 * If multiple top-level elements are created, an array of those elements is returned.
 *
 * @param element - The target HTMLElement to which the HTML will be appended.
 * @param html - The HTML string to insert. It can contain one or multiple root elements.
 * @returns The created HTMLElement if only one element was added, or an array of HTMLElements if multiple were added.
 *
 * @example
 * // Appends a single element and returns it
 * const container = document.getElementById('container');
 * const newDiv = appendHtml(container, '<div class="item"></div>');
 *
 * // Appends multiple elements and returns them as an array
 * const items = appendHtml(container, '<li>One</li><li>Two</li>');
 */
export const appendHtml = (element: Element, html: string): Element | Element[] => {
	const template = document.createElement('template');
	template.innerHTML = html.trim();

	const children = Array.from(template.content.children);
	element.append(...children);

	return children.length === 1 ? children[0] : children;
};

/**
 * Adds an event listener to the specified element.
 *
 * @param element - The HTML element to which the event listener will be added.
 * @param type - A string representing the event type to listen for.
 * @param fn - The event listener function or object.
 * @param options - An options object that specifies characteristics about the event listener.
 * @template K - event type
 * @template T - event object type
 * @returns A function that removes the event listener from the element.
 */
export function addEvent<K extends keyof HTMLElementEventMap, T extends HTMLElementEventMap[K]>(
	element: EventTarget,
	type: K,
	fn: (this: EventTarget, ev: T) => any,
	options?: boolean | AddEventListenerOptions,
): () => void;

/**
 * Adds an event listener to the specified element.
 *
 * @param element - The HTML element to which the event listener will be added.
 * @param type - A string representing the event type to listen for.
 * @param fn - The event listener function or object.
 * @param options - An options object that specifies characteristics about the event listener.
 * @returns A function that removes the event listener from the element.
 */
export function addEvent(
	element: EventTarget,
	type: string,
	fn: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions,
): () => void {
	element.addEventListener(type, fn, options);
	return function () {
		element.removeEventListener(type, fn, options);
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

function classNamesSubscribe(node: SSRHTMLElement, classNames$: ReadableSignal<string>) {
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
		if (classNames.size > 0) {
			classList.add(...classNames);
		}
		currentClassNames = classNames;
	});
}

function attributeSubscribe(node: SSRHTMLElement, attributeName: string, value$: ReadableSignal<AttributeValue>) {
	return value$.subscribe((value) => {
		if (notEmpty(value)) {
			node.setAttribute(attributeName, '' + (value === true ? attributeName : value));
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
export function bindAttribute(
	node: SSRHTMLElement,
	attributeName: string,
	value$: ReadableSignal<AttributeValue>,
): UnsubscribeFunction & UnsubscribeObject {
	const isClass = attributeName === 'class';
	return isClass
		? classNamesSubscribe(node, value$ as ReadableSignal<string>) // Specific case for classnames
		: attributeSubscribe(node, attributeName, value$);
}

const isCustomProperty = (styleName: StyleKey): styleName is StyleKeyCustomProperty => styleName.startsWith('--');

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
export function bindStyle(node: SSRHTMLElement, styleName: StyleKey, value$: ReadableSignal<StyleValue>): UnsubscribeFunction & UnsubscribeObject {
	return value$.subscribe((value) => {
		const style = node.style;
		value = '' + (notEmpty(value) ? value : '');
		if (isCustomProperty(styleName)) {
			style.setProperty(styleName, value);
		} else {
			style[styleName] = value;
		}
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
export function bindClassName(node: SSRHTMLElement, className: string, value$: ReadableSignal<boolean>): () => void {
	const unsubscribe = value$.subscribe((isPresent) => {
		node.classList.toggle(className, isPresent);
	});
	return () => {
		unsubscribe();
		node.classList.remove(className);
	};
}
