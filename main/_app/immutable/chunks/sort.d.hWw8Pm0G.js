const e=`/**
 * The default comparision between two values, using the javascript < and > signs.
 *
 * @param a - the first input
 * @param b - the second input
 * @returns 1, 0 or -1 depending on the default compare
 */
export declare const compareDefault: (a: any, b: any) => -1 | 0 | 1;
/**
 * A comparision function between DOM elements, based on [Node.compareDocumentPosition](https://developer.mozilla.org/fr/docs/Web/API/Node/compareDocumentPosition).
 *
 * @param element1 - the first node
 * @param element2 - the second node
 * @returns 1, 0 or -1
 */
export declare const compareDomOrder: (element1: Node, element2: Node) => 0 | 1 | -1;
`;export{e as default};
