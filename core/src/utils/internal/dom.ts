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
