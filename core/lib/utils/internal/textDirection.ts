export const getTextDirection = (element: HTMLElement) => getComputedStyle(element).direction as 'ltr' | 'rtl';
