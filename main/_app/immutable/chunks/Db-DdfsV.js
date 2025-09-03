const e=`import { i as isBrowserHTMLElement, v as removeClasses, w as addClasses, x as reflow } from "../../dom-CzJpOnsw.js";
import { createCSSTransition } from "./cssTransitions.js";
const createCollapseTransition = ({
  dimension = "height",
  showClasses,
  hideClasses,
  animationPendingClasses
} = {}) => createCSSTransition((element, direction, animated, context) => {
  if (animated && isBrowserHTMLElement(element)) {
    let { maxSize, minSize } = context;
    if (!maxSize) {
      removeClasses(element, animationPendingClasses);
      removeClasses(element, hideClasses);
      addClasses(element, showClasses);
      maxSize = element.getBoundingClientRect()[dimension] + "px";
      context.maxSize = maxSize;
    }
    if (!minSize) {
      removeClasses(element, animationPendingClasses);
      removeClasses(element, showClasses);
      addClasses(element, hideClasses);
      minSize = element.getBoundingClientRect()[dimension] + "px";
      context.minSize = minSize;
    }
    removeClasses(element, showClasses);
    removeClasses(element, hideClasses);
    const values = direction === "show" ? [minSize, maxSize] : [maxSize, minSize];
    element.style[dimension] = values[0];
    reflow(element);
    addClasses(element, animationPendingClasses);
    reflow(element);
    element.style[dimension] = values[1];
  } else {
    removeClasses(element, direction === "show" ? hideClasses : showClasses);
  }
  return () => {
    removeClasses(element, animationPendingClasses);
    addClasses(element, direction === "show" ? showClasses : hideClasses);
    element.style[dimension] = "";
  };
});
export {
  createCollapseTransition
};
`;export{e as default};
