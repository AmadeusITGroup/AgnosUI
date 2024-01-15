/**
 * Returns the text direction of an element, using a call to `getComputedStyle`.
 *
 * @param element - the HTML element
 * @returns the text direction of the element, 'ltr' or 'rtl'
 */
export const getTextDirection = (element: HTMLElement) => getComputedStyle(element).direction as 'ltr' | 'rtl';
