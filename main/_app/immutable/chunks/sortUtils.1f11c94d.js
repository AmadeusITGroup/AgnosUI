const e=`export const compareDefault = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
export const compareDomOrder = (element1, element2) => {
    if (element1 === element2) {
        return 0;
    }
    const result = element1.compareDocumentPosition(element2);
    if (result & Node.DOCUMENT_POSITION_FOLLOWING) {
        return -1;
    }
    else if (result & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
    }
    throw new Error('failed to compare elements');
};
`;export{e as default};
