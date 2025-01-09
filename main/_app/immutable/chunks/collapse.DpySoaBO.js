const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../../directive-BtOvPrmt.cjs");
const services_transitions_cssTransitions = require("./cssTransitions.cjs");
const createCollapseTransition = ({
  dimension = "height",
  showClasses,
  hideClasses,
  animationPendingClasses
} = {}) => services_transitions_cssTransitions.createCSSTransition((element, direction, animated, context) => {
  if (animated && utils_directive.isBrowserHTMLElement(element)) {
    let { maxSize, minSize } = context;
    if (!maxSize) {
      utils_directive.removeClasses(element, animationPendingClasses);
      utils_directive.removeClasses(element, hideClasses);
      utils_directive.addClasses(element, showClasses);
      maxSize = element.getBoundingClientRect()[dimension] + "px";
      context.maxSize = maxSize;
    }
    if (!minSize) {
      utils_directive.removeClasses(element, animationPendingClasses);
      utils_directive.removeClasses(element, showClasses);
      utils_directive.addClasses(element, hideClasses);
      minSize = element.getBoundingClientRect()[dimension] + "px";
      context.minSize = minSize;
    }
    utils_directive.removeClasses(element, showClasses);
    utils_directive.removeClasses(element, hideClasses);
    const values = direction === "show" ? [minSize, maxSize] : [maxSize, minSize];
    element.style[dimension] = values[0];
    utils_directive.reflow(element);
    utils_directive.addClasses(element, animationPendingClasses);
    utils_directive.reflow(element);
    element.style[dimension] = values[1];
  } else {
    utils_directive.removeClasses(element, direction === "show" ? hideClasses : showClasses);
  }
  return () => {
    utils_directive.removeClasses(element, animationPendingClasses);
    utils_directive.addClasses(element, direction === "show" ? showClasses : hideClasses);
    element.style[dimension] = "";
  };
});
exports.createCollapseTransition = createCollapseTransition;
`;export{e as default};
