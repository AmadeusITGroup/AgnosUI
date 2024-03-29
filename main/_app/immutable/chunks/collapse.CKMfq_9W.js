const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const services_transitions_cssTransitions = require("./cssTransitions.cjs");
const dom = require("../../dom-DP2NE4Q0.cjs");
const createCollapseTransition = ({
  dimension = "height",
  showClasses,
  hideClasses,
  animationPendingClasses
} = {}) => services_transitions_cssTransitions.createCSSTransition((element, direction, animated, context) => {
  if (animated) {
    let { maxSize, minSize } = context;
    if (!maxSize) {
      dom.removeClasses(element, animationPendingClasses);
      dom.removeClasses(element, hideClasses);
      dom.addClasses(element, showClasses);
      maxSize = element.getBoundingClientRect()[dimension] + "px";
      context.maxSize = maxSize;
    }
    if (!minSize) {
      dom.removeClasses(element, animationPendingClasses);
      dom.removeClasses(element, showClasses);
      dom.addClasses(element, hideClasses);
      minSize = element.getBoundingClientRect()[dimension] + "px";
      context.minSize = minSize;
    }
    dom.removeClasses(element, showClasses);
    dom.removeClasses(element, hideClasses);
    const values = direction === "show" ? [minSize, maxSize] : [maxSize, minSize];
    element.style[dimension] = values[0];
    dom.reflow(element);
    dom.addClasses(element, animationPendingClasses);
    dom.reflow(element);
    element.style[dimension] = values[1];
  } else {
    dom.removeClasses(element, direction === "show" ? hideClasses : showClasses);
  }
  return () => {
    dom.removeClasses(element, animationPendingClasses);
    dom.addClasses(element, direction === "show" ? showClasses : hideClasses);
    element.style[dimension] = "";
  };
});
exports.createCollapseTransition = createCollapseTransition;
`;export{e as default};
