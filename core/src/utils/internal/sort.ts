/**
 * The default comparision between two values, using the javascript < and > signs.
 *
 * @param a - the first input
 * @param b - the second input
 * @returns 1, 0 or -1 depending on the default compare
 */
export const compareDefault = (a: any, b: any): -1 | 0 | 1 => (a < b ? -1 : a > b ? 1 : 0);

/**
 * A comparision function between DOM elements, based on [Node.compareDocumentPosition](https://developer.mozilla.org/fr/docs/Web/API/Node/compareDocumentPosition).
 *
 * @param element1 - the first node
 * @param element2 - the second node
 * @returns 1, 0 or -1
 */
export const compareDomOrder = (element1: Node, element2: Node): 0 | 1 | -1 => {
	if (element1 === element2) {
		return 0;
	}
	const result = element1.compareDocumentPosition(element2);
	if (result & Node.DOCUMENT_POSITION_FOLLOWING) {
		return -1;
	} else if (result & Node.DOCUMENT_POSITION_PRECEDING) {
		return 1;
	}
	throw new Error('failed to compare elements');
};
