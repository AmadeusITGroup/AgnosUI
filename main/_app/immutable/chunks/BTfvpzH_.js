const n=`import { b as browserDirective } from "../dom-q8JF3QN8.js";
import { i as isFocusable } from "../isFocusable-Ckwus82R.js";
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
    if (isFocusable(candidate)) {
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
const focusElement = browserDirective((element) => {
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
export {
  focusElement
};
`;export{n as default};
