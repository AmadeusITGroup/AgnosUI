const e=`/**
 * Returns the common ancestor of the provided DOM elements.
 * @param elements - array of DOM elements
 * @returns the common ancestor, or null if the array is empty or if there is no common ancestor (e.g.: if elements are detached)
 */
export const computeCommonAncestor = (elements) => {
    const length = elements.length;
    if (length === 0)
        return null;
    let ancestor = elements[0];
    for (let i = 1; i < length && ancestor; i++) {
        const element = elements[i];
        while (ancestor) {
            if (ancestor === element) {
                break;
            }
            const comparison = ancestor.compareDocumentPosition(element);
            if (comparison & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                break;
            }
            else if (comparison & Node.DOCUMENT_POSITION_CONTAINS) {
                ancestor = element;
                break;
            }
            else if (comparison & Node.DOCUMENT_POSITION_DISCONNECTED) {
                return null;
            }
            ancestor = ancestor.parentElement;
        }
    }
    return ancestor;
};
`;export{e as default};
