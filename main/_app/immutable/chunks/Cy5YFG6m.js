const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../dom-R8VxJgdK.cjs");
const isFocusable = require("../isFocusable-DfzDLeAN.cjs");
const stack = [];
let stackProcessPlanned = false;
const processStack = () => {
  stackProcessPlanned = false;
  const candidates = [];
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    if (top.element) {
      candidates.push(top.element);
      break;
    } else {
      if (top.previousElement) {
        candidates.push(top.previousElement);
      }
      stack.pop();
    }
  }
  for (const candidate of candidates) {
    if (isFocusable.isFocusable(candidate)) {
      candidate.focus();
      return;
    }
  }
};
const planProcessStack = () => {
  if (!stackProcessPlanned) {
    stackProcessPlanned = true;
    setTimeout(processStack, 0);
  }
};
const focusElement = utils_directive.browserDirective((element) => {
  const stackEntry = { element, previousElement: document.activeElement };
  stack.push(stackEntry);
  planProcessStack();
  return {
    destroy() {
      stackEntry.element = null;
      planProcessStack();
    }
  };
});
exports.focusElement = focusElement;
`;export{n as default};
