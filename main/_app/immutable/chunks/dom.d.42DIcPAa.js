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
export declare const addClasses: (element: HTMLElement, classes?: string[]) => void;
export declare const removeClasses: (element: HTMLElement, classes?: string[]) => void;
`;export{e as default};
