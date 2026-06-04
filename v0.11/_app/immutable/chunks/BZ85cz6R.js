const e=`import type { SSRHTMLElement, StyleKeyCustomProperty, StyleKeyKebabCase, StyleValue } from '../../types';
/**
 * A unique symbol used to represent the attributes and style of an SSR (Server-Side Rendering) HTML element.
 * This symbol can be used as a key for storing or retrieving attributes and styles associated with an SSR HTML element.
 */
export declare const ssrHTMLElementAttributesAndStyle: unique symbol;
/**
 * Create an SSRHTMLElement
 * @returns the created SSRHTMLElement
 */
export declare const ssrHTMLElement: () => SSRHTMLElement;
/**
 * Converts a style object to a CSS text string.
 * @param style - The style object to convert.
 * @returns The CSS text string representation of the style object.
 */
export declare const cssTextFromObject: (style: Partial<Record<StyleKeyKebabCase | StyleKeyCustomProperty, StyleValue>>) => string;
`;export{e as default};
