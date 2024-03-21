const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { AttributeValue, StyleValue } from '../../types';
/**
 * Returns the common ancestor of the provided DOM elements.
 * @param elements - array of DOM elements
 * @returns the common ancestor, or null if the array is empty or if there is no common ancestor (e.g.: if elements are detached)
 */
export declare const computeCommonAncestor: (elements: HTMLElement[]) => HTMLElement | null;
/**
 * Launch a reflow using a call to the provided html element getBoudingClientRect
 * @param element - the html element
 */
export declare function reflow(element?: HTMLElement): void;
/**
 * Attach the given css classes to the element
 *
 * @param element - the HTML element
 * @param classes - the css lcasses
 */
export declare const addClasses: (element: HTMLElement, classes?: string[]) => void;
/**
 * Remove the given css classes to the element
 *
 * @param element - the HTML element
 * @param classes - the css classes
 */
export declare const removeClasses: (element: HTMLElement, classes?: string[]) => void;
/**
 * Adds an event listener to the specified element.
 *
 * @param element - The HTML element to which the event listener will be added.
 * @param type - A string representing the event type to listen for.
 * @param fn - The event listener function or object.
 * @returns A function that removes the event listener from the element.
 */
export declare function addEvent<K extends keyof HTMLElementEventMap>(element: HTMLElement, type: K, fn: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): () => void;
/**
 * Generates a unique ID with the format 'auId-[counter]'.
 *
 * @returns The generated ID.
 */
export declare const generateId: () => string;
/**
 * Binds a value from a \`ReadableSignal\` to the specified attribute of an HTML element.
 * When the value emitted by the signal changes, it updates the attribute accordingly.
 * If the value is null, undefined or \`false\`, the attribute is removed from the element.
 * An empty string or \`true\` will result in an attribute with an empty value
 *
 * @param node The HTML element to bind the attribute to.
 * @param attributeName The name of the attribute to bind.
 * @param value$ The \`ReadableSignal\` representing the value to bind to the attribute.
 *
 * @returns unsubscription method to remove the binding
 */
export declare function bindAttribute(node: HTMLElement, attributeName: string, value$: ReadableSignal<AttributeValue>): import("@amadeus-it-group/tansu").UnsubscribeFunction & import("@amadeus-it-group/tansu").UnsubscribeObject;
/**
 * Binds a value from a \`ReadableSignal\` to the specified CSS style property of an HTML element.
 * When the value emitted by the signal changes, it updates the style property accordingly.
 * If the value is  null, undefined or an empty string, the style property is cleared.
 *
 * @param node The HTML element to bind the style property to.
 * @param styleName The name of the CSS style property to bind.
 * @param value$ The \`ReadableSignal\` representing the value to bind to the style property.
 *
 * @returns unsubscription method to remove the binding
 */
export declare function bindStyle(node: HTMLElement, styleName: string, value$: ReadableSignal<StyleValue>): import("@amadeus-it-group/tansu").UnsubscribeFunction & import("@amadeus-it-group/tansu").UnsubscribeObject;
/**
 * Binds a \`ReadableSignal\` of boolean to the specified className of an HTML element.
 * The className is added when the value is true, removed otherwise
 *
 * @param node - The HTML element to bind the style property to.
 * @param className - The className to bind.
 * @param value$ - The \`ReadableSignal\` representing the value to bind to the className.
 *
 * @returns unsubscription method to remove the binding
 */
export declare function bindClassName(node: HTMLElement, className: string, value$: ReadableSignal<boolean>): () => void;
`;export{e as default};
