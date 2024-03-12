const e=`"use strict";
const computeCommonAncestor = (elements) => {
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
function reflow(element = document.body) {
  element.getBoundingClientRect();
}
const addClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
};
const removeClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    element.classList.remove(...classes);
  }
};
let idCount = 0;
const generateId = () => \`auId-\${idCount++}\`;
exports.addClasses = addClasses;
exports.computeCommonAncestor = computeCommonAncestor;
exports.generateId = generateId;
exports.reflow = reflow;
exports.removeClasses = removeClasses;
`;export{e as default};
