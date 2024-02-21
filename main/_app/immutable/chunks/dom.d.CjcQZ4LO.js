const e=`/**
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
`;export{e as default};
